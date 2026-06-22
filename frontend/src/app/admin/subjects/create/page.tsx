'use client';

import React from 'react';
import Link from 'next/link';
import styles from '@/components/admin/subjects/AdminCreateSubjects.module.css';
import CreateSubjectForm from '@/components/admin/subjects/CreateSubjectForm';

export default function CreateSubjectPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Thêm Mới Môn Học</h1>
        <p className={styles.pageSubtitle}>Tạo mới chương trình đào tạo chuyên ngành trong hệ thống quản lý học thuật.</p>
      </div>

      <CreateSubjectForm />
    </div>
  );
}
