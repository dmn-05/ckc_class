'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/components/lecturer/resources/ResourcesManagement.module.css';
import { createLecturerResource } from '@/app/actions/lecturer-resource';
import { getLecturerCourseSections } from '@/app/actions/lecturer-course-section';
import ResourceForm, { ResourceFormData } from '@/components/lecturer/resources/ResourceForm';

export default function CreateResourcePage() {
  const router = useRouter();
  const [sections, setSections] = useState<{id: string; name: string; code: string}[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const sectionsData = await getLecturerCourseSections();
        const formattedSections = (sectionsData || []).map((s: any) => ({
          id: s.id.toString(),
          name: s.ten_lop || s.mon_hoc?.ten_mon || '',
          code: s.ma_lop_hoc_phan || '',
        }));
        setSections(formattedSections);
      } catch (error) {
        console.error('Failed to load sections', error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const handleSave = async (data: ResourceFormData) => {
    setSaving(true);
    try {
      const formData = new FormData();
      formData.append('tieu_de', data.title);
      formData.append('noi_dung', data.description || '');
      formData.append('lop_hoc_phan_id', data.sectionId || '0');
      formData.append('loai_tai_nguyen', data.type || 'document');
      formData.append('trang_thai', data.isVisible ? 'hien_thi' : 'an');
      
      if (data.type === 'link' && data.externalUrl) {
        formData.append('external_url', data.externalUrl);
      }
      if (data.file) {
        formData.append('file', data.file);
      }

      await createLecturerResource(formData);
      router.push('/lecturer/resources');
    } catch (error) {
      alert('Có lỗi xảy ra khi lưu tài nguyên.');
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
            className={styles.btnCancel} 
            style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', border: 'none', background: 'none', cursor: 'pointer' }}
            onClick={() => router.push('/lecturer/resources')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Quay lại
          </button>
          <h1 className={styles.pageTitle}>Thêm Tài nguyên mới</h1>
        </div>
      </div>

      <ResourceForm 
        sections={sections}
        saving={saving}
        onSave={handleSave}
        onCancel={() => router.push('/lecturer/resources')}
      />
    </div>
  );
}
