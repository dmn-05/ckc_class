'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import styles from '@/components/admin/departments/AdminUpdateDepartments.module.css';
import UpdateDepartmentForm from '@/components/admin/departments/UpdateDepartmentForm';

export default function UpdateDepartmentPage() {
  const params = useParams();
  const departmentId = params?.id as string;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Cập Nhật Bộ Môn ({departmentId || 'SE-02'})</h1>
        <p className={styles.pageSubtitle}>Chỉnh sửa thông tin tổ chức, nhân sự và quản lý Bộ Môn.</p>
      </div>

      <UpdateDepartmentForm departmentId={departmentId} />
    </div>
  );
}
