'use client';

import React from 'react';
import Link from 'next/link';
import styles from '@/components/admin/classes/AdminCreateClasses.module.css';
import CreateClassForm from '@/components/admin/classes/CreateClassForm';

export default function CreateClassPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Thêm Mới Lớp Học Phần</h1>
        <p className={styles.pageSubtitle}>Tạo lớp học mới cho môn học, chỉ định giảng viên và thời khóa biểu trong học kỳ.</p>
      </div>

      <CreateClassForm />
    </div>
  );
}
