import React from 'react';
import styles from './AdminStudents.module.css';
import Link from 'next/link';
export default function StudentsHeader() {
  return (
    <div className={styles.headerContainer}>
      <div>
        <h1 className={styles.headerTitle}>Quản lý Sinh viên</h1>
        <p className={styles.headerSubtitle}>Danh sách sinh viên học thuật năm học 2023-2024</p>
      </div>
      <button className={styles.addButton}>
        <span className="material-symbols-outlined">person_add</span>
        <Link href="/admin/students/create">Thêm Sinh Viên</Link>
      </button>
    </div>
  );
}
