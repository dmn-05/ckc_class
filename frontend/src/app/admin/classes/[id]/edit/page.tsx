'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import styles from '@/components/admin/classes/AdminUpdateClasses.module.css';
import UpdateClassForm from '@/components/admin/classes/UpdateClassForm';

export default function UpdateClassPage() {
  const params = useParams();
  const classId = params?.id as string;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Chỉnh Sửa Lớp ({classId || 'CDTH24A'})</h1>
        <p className={styles.pageSubtitle}>Cập nhật thông tin lớp, khoa quản lý và trạng thái hoạt động.</p>
      </div>

      <UpdateClassForm classId={classId} />
    </div>
  );
}
