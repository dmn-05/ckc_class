'use client';

import React from 'react';
import styles from '@/components/admin/course-sections/AdminCreateCourseSections.module.css';
import CreateCourseSectionForm from '@/components/admin/course-sections/CreateCourseSectionForm';

export default function CreateCourseSectionPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Thêm Mới Lớp Học Phần</h1>
        <p className={styles.pageSubtitle}>Tạo lớp học phần mới cho môn học, chỉ định giảng viên, học kỳ và sĩ số sinh viên.</p>
      </div>

      <CreateCourseSectionForm />
    </div>
  );
}
