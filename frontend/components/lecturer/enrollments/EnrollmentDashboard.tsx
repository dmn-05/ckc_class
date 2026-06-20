'use client';

import React from 'react';
import styles from './EnrollmentsManagement.module.css';

interface EnrollmentDashboardProps {
  totalCount: number;
  pendingCount: number;
  gradedCount: number;
}

export default function EnrollmentDashboard({
  totalCount,
  pendingCount,
  gradedCount,
}: EnrollmentDashboardProps) {
  
  // Calculate percentage, max 100
  // Handle edge case where totalCount is 0 to avoid division by zero
  const validTotal = totalCount > 0 ? totalCount : 1; 
  const progressPercent = Math.round((gradedCount / validTotal) * 100);

  return (
    <section className={styles.bentoGrid}>
      <div className={`${styles.statCard} ${styles.statCardPrimary}`}>
        <div className={styles.statIconBox} style={{ backgroundColor: 'rgba(53, 37, 205, 0.1)', color: '#3525cd' }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
        <p className={styles.statLabel}>Tổng số lượt đăng ký</p>
        <h3 className={styles.statValue}>{totalCount}</h3>
      </div>

      <div className={`${styles.statCard} ${styles.statCardTertiary}`}>
        <div className={styles.statIconBox} style={{ backgroundColor: 'rgba(126, 48, 0, 0.1)', color: '#7e3000' }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className={styles.statLabel}>Yêu cầu chờ duyệt</p>
        <h3 className={styles.statValue}>{pendingCount}</h3>
      </div>

      <div className={`${styles.statCard} ${styles.statCardFull}`}>
        <div className={styles.progressContainer}>
          <h4 className={styles.progressTitle}>Tiến độ nhập điểm tổng kết</h4>
          <p className={styles.progressDesc}>{progressPercent}% sinh viên (Đã duyệt & Đã HT) đã được nhập điểm trong kỳ này.</p>
          <div className={styles.progressBarTrack}>
            <div className={styles.progressBarFill} style={{ width: `${progressPercent}%` }}></div>
          </div>
        </div>
        <div className={styles.progressBgIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="64" height="64">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
