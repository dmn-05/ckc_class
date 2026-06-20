'use client';

import React from 'react';
import styles from './ResourcesManagement.module.css';

interface ResourcesHeaderProps {
  courseName: string;
  lastUpdated: string;
}

export default function ResourcesHeader({ courseName, lastUpdated }: ResourcesHeaderProps) {
  const handleDownloadAll = () => {
    alert('Đang nén tất cả tài nguyên thành file .zip...');
  };

  return (
    <div className={styles.headerContainer}>
      <div>
        <h2 className={styles.pageTitle}>Kho tài nguyên học tập</h2>
        <p className={styles.pageSubtitle}>Cập nhật lần cuối: {lastUpdated}</p>
      </div>
      <div className={styles.headerActions}>
        <button className={styles.btnSecondary}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          <span>Lọc theo loại</span>
        </button>
        <button className={styles.btnPrimary} onClick={handleDownloadAll}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span>Tải tất cả (.zip)</span>
        </button>
      </div>
    </div>
  );
}
