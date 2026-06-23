'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import styles from '@/components/admin/course-sections/AdminUpdateCourseSections.module.css';
import UpdateCourseSectionForm from '@/components/admin/course-sections/UpdateCourseSectionForm';

export default function EditCourseSectionPage() {
  const params = useParams();
  const sectionId = params.id as string;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Chỉnh sửa Lớp học phần</h1>
        <p className={styles.pageSubtitle}>Cập nhật thông tin chi tiết của lớp học phần.</p>
      </div>

      <UpdateCourseSectionForm sectionId={sectionId} />
    </div>
  );
}
