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
  const [initialSectionId, setInitialSectionId] = useState<string>('');

  useEffect(() => {
    async function loadData() {
      try {
        const params = new URLSearchParams(window.location.search);
        const sId = params.get('sectionId');
        if (sId) setInitialSectionId(sId);

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
              const [datePart, timePart] = assignmentData.dueDate.split(' ');
              const [day, month, year] = datePart.split('/');
              if (year && month && day && timePart) {
                dueDateInput = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}T${timePart}`;
              }
            } catch {
              dueDateInput = '';
            }
          }

          const ad = assignmentData as any;
          setInitialData({
            title: assignmentData.title || ad.tieu_de || '',
            description: assignmentData.description || ad.noi_dung || '',
            instructions: assignmentData.instructions || ad.huong_dan || '',
            sectionId: assignmentData.sectionId || ad.lop_hoc_phan_id || '',
            maxScore: assignmentData.maxScore ?? ad.diem_toi_da ?? 10,
            dueDate: dueDateInput,
            allowLate: assignmentData.allowLate ?? ad.cho_phep_nop_tre ?? false,
            latePenaltyPct: assignmentData.latePenaltyPct ?? ad.tyle_phat_tre ?? 0,
            isPublished: assignmentData.isPublished !== undefined ? assignmentData.isPublished : (ad.trang_thai === 'hien_thi' || ad.trang_thai === true),
            existingFiles: (assignmentData.files || []).map((f: any) => ({
              id: f.id || f.ma_file || 0,
              name: f.name || f.ten_file || 'Tài liệu',
              url: f.url || f.duong_dan || '#',
              size: f.size || f.dung_luong || 0,
            })),
          });
        }
      } catch (error) {
        console.error('Failed to load assignment data', error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [id]);

  const handleSave = async (data: AssignmentFormData, files: File[], removeFileIds: number[], removeFile: boolean) => {
    setSaving(true);
    try {
      const formData = new FormData();
      formData.append('tieu_de', data.title);
      formData.append('noi_dung', data.description || '');
      formData.append('huong_dan', data.instructions || '');
      formData.append('lop_hoc_phan_id', data.sectionId);
      formData.append('diem_toi_da', String(data.maxScore));
      formData.append('han_nop', data.dueDate || '');
      formData.append('cho_phep_nop_tre', data.allowLate ? '1' : '0');
      formData.append('tyle_phat_tre', String(data.latePenaltyPct));
      formData.append('trang_thai', data.isPublished ? 'hien_thi' : 'an');
      if (removeFile) {
        formData.append('remove_file', '1');
      }
      removeFileIds.forEach((removeId) => {
        formData.append('remove_file_ids[]', String(removeId));
      });
      files.forEach((file) => {
        formData.append('files[]', file);
      });

      await updateLecturerAssignment(id, formData);
      if (initialSectionId) {
        router.push(`/lecturer/sections/${initialSectionId}`);
      } else {
        router.push('/lecturer/assignments');
      }
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

  const handleBack = () => {
    if (initialSectionId || initialData?.sectionId) {
      router.push(`/lecturer/sections/${initialSectionId || initialData?.sectionId}`);
    } else {
      router.back();
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <div>
          <button
            className={styles.btnSecondary}
            style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            onClick={handleBack}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Quay lại lớp học phần
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
        onCancel={handleBack}
      />
    </div>
  );
}
