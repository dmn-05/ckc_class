'use client';

import React from 'react';
import Link from 'next/link';
import styles from '@/components/admin/faculties/AdminCreateFaculties.module.css';
import CreateFacultyForm from '@/components/admin/faculties/CreateFacultyForm';

export default function CreateFacultyPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Thêm Khoa Mới</h1>
        <p className={styles.pageSubtitle}>Thiết lập một đơn vị đào tạo mới trong hệ thống CKC Classroom.</p>
      </div>

      <CreateFacultyForm />
    </div>
  );
}
