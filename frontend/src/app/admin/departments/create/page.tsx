'use client';

import React from 'react';
import Link from 'next/link';
import styles from '@/components/admin/departments/AdminCreateDepartments.module.css';
import CreateDepartmentForm from '@/components/admin/departments/CreateDepartmentForm';

export default function CreateDepartmentPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Thêm Mới Bộ Môn</h1>
        <p className={styles.pageSubtitle}>Thiết lập một đơn vị chuyên ngành trực thuộc Khoa trong hệ thống CKC.</p>
      </div>

      <CreateDepartmentForm />
    </div>
  );
}
