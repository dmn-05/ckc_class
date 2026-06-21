'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import styles from '@/components/admin/faculties/AdminUpdateFaculties.module.css';
import UpdateFacultyForm from '@/components/admin/faculties/UpdateFacultyForm';

export default function UpdateFacultyPage() {
  const params = useParams();
  const facultyId = params?.id as string;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Cập Nhật Khoa ({facultyId || 'FIT'})</h1>
        <p className={styles.pageSubtitle}>Chỉnh sửa thông tin tổ chức, nhân sự và quản lý khoa.</p>
      </div>

      <UpdateFacultyForm facultyId={facultyId} />
    </div>
  );
}
