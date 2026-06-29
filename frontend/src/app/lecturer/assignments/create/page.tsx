'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/components/lecturer/assignments/AssignmentsManagement.module.css';
import { createLecturerAssignment } from '@/app/actions/lecturer-assignment';
import { getLecturerCourseSections } from '@/app/actions/lecturer-course-section';
import AssignmentFormPage, { AssignmentFormData } from '@/components/lecturer/assignments/AssignmentFormPage';

export default function CreateAssignmentPage() {
  const router = useRouter();
  const [sections, setSections] = useState<{ id: string; name: string; code: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const sectionsData = await getLecturerCourseSections();
        setSections(
          (sectionsData || []).map((s: any) => ({
            id: s.id.toString(),
            name: s.ten_lop || s.mon_hoc?.ten_mon || '',
            code: s.ma_lop_hoc_phan || '',
          }))
        );
      } catch (error) {
        console.error('Failed to load sections', error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const handleSave = async (data: AssignmentFormData, files: File[], removeFileIds: number[], _removeFile: boolean) => {
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
      files.forEach((file) => {
        formData.append('files[]', file);
      });

      await createLecturerAssignment(formData);
      router.push('/lecturer/assignments');
    } catch (error) {
      alert('Có lỗi xảy ra khi lưu bài tập.');
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
          <h1 className={styles.pageTitle}>Tạo Bài tập mới</h1>
          <p className={styles.pageSubtitle}>Điền thông tin để tạo bài tập mới cho sinh viên</p>
        </div>
      </div>

      <AssignmentFormPage
        sections={sections}
        saving={saving}
        onSave={handleSave}
        onCancel={() => router.push('/lecturer/assignments')}
      />
    </div>
  );
}
