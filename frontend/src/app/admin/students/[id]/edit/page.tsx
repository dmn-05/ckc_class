'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import styles from '@/components/admin/students/AdminUpdateStudents.module.css';
import UpdateStudentForm from '@/components/admin/students/UpdateStudentForm';

export default function UpdateStudentPage() {
  const params = useParams();
  const studentId = params?.id as string;

  return (
    <div className={styles.pageContainer}>
      <UpdateStudentForm studentId={studentId} />
    </div>
  );
}
