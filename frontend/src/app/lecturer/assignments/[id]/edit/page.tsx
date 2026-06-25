'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import styles from '@/components/lecturer/assignments/AssignmentsManagement.module.css';
import { getLecturerAssignmentById, updateLecturerAssignment } from '@/app/actions/lecturer-assignment';
import { getLecturerCourseSections } from '@/app/actions/lecturer-course-section';
import AssignmentFormPage, { AssignmentFormData } from '@/components/lecturer/assignments/AssignmentFormPage';

export default function EditAssignmentPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [sections, setSections] = useState<{ id: string; name: string; code: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [initialData, setInitialData] = useState<AssignmentFormData | undefined>(undefined);

  useEffect(() => {
    async function loadData() {
      try {
        const [assignmentData, sectionsData] = await Promise.all([
          getLecturerAssignmentById(id),
          getLecturerCourseSections(),
        ]);

        setSections(
          (sectionsData || []).map((s: any) => ({
            id: s.id.toString(),
            name: s.ten_lop || s.mon_hoc?.ten_mon || '',
            code: s.ma_lop_hoc_phan || '',
          }))
        );

        if (assignmentData) {
          // Convert dueDate from "dd/mm/yyyy HH:mm" → "YYYY-MM-DDTHH:mm" for datetime-local input
          let dueDateInput = '';
          if (assignmentData.dueDate && assignmentData.dueDate !== 'Không có hạn') {
            try {
              const parts = assignmentData.dueDate.match(/(\d+)\/(\d+)\/(\d+)\s+(\d+):(\d+)/);
              if (parts) {
                const [, d, m, y, h, min] = parts;
                dueDateInput = `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}T${h.padStart(2, '0')}:${min.padStart(2, '0')}`;
              }
            } catch {
              dueDateInput = '';
            }
          }

          setInitialData({
            title: assignmentData.title || '',
            sectionId: assignmentData.sectionId || '',
            description: assignmentData.description || '',
            instructions: assignmentData.instructions || '',
            maxScore: assignmentData.maxScore ?? 10,
            dueDate: dueDateInput,
            allowLate: assignmentData.allowLate ?? false,
            latePenaltyPct: assignmentData.latePenaltyPct ?? 10,
            isPublished: assignmentData.isPublished ?? true,
            existingFileUrl: assignmentData.fileUrl ?? null,
            existingFileName: assignmentData.fileName ?? null,
          });
        }
      } catch (error) {
        console.error('Failed to load data', error);
        alert('Không thể tải dữ liệu bài tập.');
      } finally {
        setLoading(false);
      }
    }
    if (id) {
      loadData();
    }
  }, [id]);

  const handleSave = async (data: AssignmentFormData, file: File | null, removeFile: boolean) => {
    setSaving(true);
    try {
      const formData = new FormData();
      formData.append('tieu_de', data.title);
      formData.append('noi_dung', data.description || '');
      formData.append('huong_dan', data.instructions || '');
      formData.append('diem_toi_da', String(data.maxScore));
      formData.append('han_nop', data.dueDate || '');
      formData.append('cho_phep_nop_tre', data.allowLate ? '1' : '0');
      formData.append('tyle_phat_tre', String(data.latePenaltyPct));
      formData.append('trang_thai', data.isPublished ? 'hien_thi' : 'an');
      if (removeFile) {
        formData.append('remove_file', '1');
      }
      if (file) {
        formData.append('file', file);
      }

      await updateLecturerAssignment(id, formData);
      router.push('/lecturer/assignments');
    } catch (error) {
      alert('Có lỗi xảy ra khi cập nhật bài tập.');
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>Đang tải dữ liệu...</div>;
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <div>
          <button
            className={styles.btnSecondary}
            style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            onClick={() => router.push('/lecturer/assignments')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Quay lại
          </button>
          <h1 className={styles.pageTitle}>Chỉnh sửa Bài tập</h1>
          <p className={styles.pageSubtitle}>Cập nhật thông tin cho bài tập đã có</p>
        </div>
      </div>

      <AssignmentFormPage
        initialData={initialData}
        sections={sections}
        isEditMode={true}
        saving={saving}
        onSave={handleSave}
        onCancel={() => router.push('/lecturer/assignments')}
      />
    </div>
  );
}
