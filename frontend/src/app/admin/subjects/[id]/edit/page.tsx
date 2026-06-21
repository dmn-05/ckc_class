'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import styles from '@/components/admin/subjects/AdminUpdateSubjects.module.css';
import UpdateSubjectForm from '@/components/admin/subjects/UpdateSubjectForm';

export default function UpdateSubjectPage() {
  const params = useParams();
  const subjectId = params?.id as string;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Chỉnh Sửa Môn Học ({subjectId || 'MH-0012'})</h1>
        <p className={styles.pageSubtitle}>Cập nhật thông tin tín chỉ, loại môn học và cấu hình môn tiên quyết.</p>
      </div>

      <UpdateSubjectForm subjectId={subjectId} />
    </div>
  );
}
