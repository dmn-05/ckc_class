import React from 'react';
import type { Metadata } from 'next';
import StudentListManagement from '@/components/lecturer/sections/StudentListManagement';
import { getLecturerCourseSectionById } from '@/app/actions/lecturer-course-section';
import Link from 'next/link';
import styles from '@/components/lecturer/sections/StudentManagement.module.css';

export const metadata: Metadata = {
  title: 'Danh sách sinh viên lớp học phần',
};

export default async function StudentManagementPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const sectionId = resolvedParams.id;
  
  let section = null;
  try {
    const res = await getLecturerCourseSectionById(sectionId);
    // Xử lý trường hợp API trả về trực tiếp object thay vì bọc trong { data: ... }
    section = res.data || res;
  } catch (error) {
    console.error(error);
  }

  if (!section) {
    return <div style={{ padding: '24px' }}>Không tìm thấy lớp học phần.</div>;
  }

  return (
    <div style={{ padding: '24px', maxWidth: '1280px', margin: '0 auto' }}>
      <div style={{ marginBottom: '24px' }}>
        <Link 
          href={`/lecturer/sections/${sectionId}`}
          style={{
            backgroundColor: '#ffffff',
            color: '#464555',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontWeight: 600,
            fontSize: '0.875rem',
            border: '1px solid #c7c4d8',
            textDecoration: 'none',
            transition: 'all 0.2s',
            marginBottom: '1rem'
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Quay lại lớp học phần
        </Link>
        <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#191c1e', marginBottom: '8px' }}>
          Quản lý danh sách sinh viên
        </h1>
        <p style={{ color: '#464555', fontSize: '1rem' }}>
          Lớp: {section.ten_lop || section.monHoc?.ten_mon} - {section.ma_lop_hoc_phan}
        </p>
      </div>
      
      <StudentListManagement sectionId={sectionId} />
    </div>
  );
}
