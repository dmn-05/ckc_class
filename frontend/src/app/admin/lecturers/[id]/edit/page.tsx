'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import styles from '@/components/admin/lecturers/AdminUpdateLecturers.module.css';
import UpdateLecturerForm from '@/components/admin/lecturers/UpdateLecturerForm';

export default function UpdateLecturerPage() {
  const params = useParams();
  const lecturerId = params?.id as string;

  return (
    <div className={styles.pageContainer}>
      <UpdateLecturerForm lecturerId={lecturerId} />
    </div>
  );
}
