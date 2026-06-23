'use client';

import React from 'react';
import Link from 'next/link';
import styles from '@/components/admin/classes/AdminCreateClasses.module.css';
import CreateClassForm from '@/components/admin/classes/CreateClassForm';

export default function CreateClassPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Thêm Mới Lớp</h1>
        <p className={styles.pageSubtitle}>Tạo lớp danh nghĩa mới, thiết lập mã lớp và khoa quản lý.</p>
      </div>

      <CreateClassForm />
    </div>
  );
}
