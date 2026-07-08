import React from 'react';
import type { Metadata } from 'next';
import ClassStudentManagement from '@/components/admin/classes/ClassStudentManagement';
import { getClassById } from '@/app/actions/student-list';
import Link from 'next/link';
import styles from '@/components/lecturer/sections/StudentManagement.module.css';

export const metadata: Metadata = {
  title: 'Danh sách sinh viên lớp sinh hoạt',
};

export default async function AdminClassStudentManagementPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const classId = resolvedParams.id;
  
  let classInfo = null;
  try {
    const res = await getClassById(classId);
    classInfo = res.data || res;
  } catch (error) {
    console.error(error);
  }

  if (!classInfo) {
    return <div style={{ padding: '24px' }}>Không tìm thấy lớp hành chính.</div>;
  }

  return (
    <div style={{ padding: '24px', maxWidth: '1280px', margin: '0 auto' }}>
      <div style={{ marginBottom: '24px' }}>
        <Link 
          href='/admin/classes' 
          className={styles.backButton}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Quay lại danh sách lớp
        </Link>
        <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#191c1e', marginBottom: '8px' }}>
          Quản lý học sinh / sinh viên lớp hành chính
        </h1>
        <p style={{ color: '#464555', fontSize: '1rem' }}>
          Lớp: {classInfo.ten_lop || ''} - Mã lớp: <strong>{classInfo.ma_lop}</strong> ({classInfo.khoa?.ten_khoa || 'Chưa phân khoa'})
        </p>
      </div>
      
      <ClassStudentManagement classId={classId} />
    </div>
  );
}
