'use client';

import React from 'react';
import Link from 'next/link';
import styles from '@/components/admin/lecturers/AdminCreateLecturers.module.css';
import CreateLecturerForm from '@/components/admin/lecturers/CreateLecturerForm';

export default function CreateLecturerPage() {
  return (
    <div className={styles.pageContainer}>
      <CreateLecturerForm />
    </div>
  );
}
