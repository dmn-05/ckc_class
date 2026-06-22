'use client';

import React from 'react';
import styles from './CourseManagement.module.css';

interface CourseHeaderProps {
  semester: string;
  year: string;
  totalCredits: number;
  maxCredits: number;
}

export default function CourseHeader({ semester, year, totalCredits, maxCredits }: CourseHeaderProps) {
  return (
    <div className={styles.headerContainer}>
      <div>
        <h2 className={styles.pageTitle}>Quản lý học phần</h2>
        <p className={styles.pageSubtitle}>
          {semester} • Năm học {year}
        </p>
      </div>
      <div>
        <div className={styles.creditsBadge}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28A2 2 0 0022 15V9a2 2 0 00-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z" />
            <circle cx="16" cy="12" r="1.5" />
          </svg>
          <span>Tín chỉ: {totalCredits} / {maxCredits}</span>
        </div>
      </div>
    </div>
  );
}
