import React from 'react';
import StudentListManagement from '@/components/lecturer/sections/StudentListManagement';
import { getLecturerCourseSectionById } from '@/app/actions/lecturer-course-section';
import Link from 'next/link';
import styles from '@/components/lecturer/sections/StudentManagement.module.css';

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
          href='/lecturer/sections' 
          className={styles.backButton}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Quay lại
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
