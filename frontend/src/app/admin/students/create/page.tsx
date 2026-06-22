'use client';

import React from 'react';
import Link from 'next/link';
import styles from '@/components/admin/students/AdminCreateStudents.module.css';
import CreateStudentForm from '@/components/admin/students/CreateStudentForm';

export default function CreateStudentPage() {
  return (
    <div className={styles.pageContainer}>
      <CreateStudentForm />
    </div>
  );
}
