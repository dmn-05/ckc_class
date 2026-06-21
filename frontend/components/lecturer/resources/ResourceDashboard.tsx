'use client';

import React from 'react';
import styles from './ResourcesManagement.module.css';

interface ResourceDashboardProps {
  totalCount: number;
  newCount: number;
  activeCount: number;
}

export default function ResourceDashboard({
  totalCount,
  newCount,
  activeCount
}: ResourceDashboardProps) {
  return (
    <div className={styles.bentoGrid}>
      {/* Stat Card 1 */}
      <div className={styles.statCard}>
        <div className={`${styles.statBgShape} ${styles.statBgPrimary}`}></div>
        <div className={styles.statContent}>
          <div>
            <p className={styles.statLabel}>Tổng số tài liệu</p>
            <h3 className={styles.statValue}>{totalCount}</h3>
          </div>
          <div className={`${styles.statIconBox} ${styles.statIconPrimary}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>
        <div className={styles.statFooter}>
          <span className={styles.textGreen} style={{display: 'flex', alignItems: 'center'}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="14" height="14">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </span>
          <span className={styles.textGreen}>+12% so với tháng trước</span>
        </div>
      </div>

      {/* Stat Card 2 */}
      <div className={styles.statCard}>
        <div className={`${styles.statBgShape} ${styles.statBgSecondary}`}></div>
        <div className={styles.statContent}>
          <div>
            <p className={styles.statLabel}>Tài liệu mới tải lên</p>
            <h3 className={styles.statValue}>{newCount}</h3>
          </div>
          <div className={`${styles.statIconBox} ${styles.statIconSecondary}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
          </div>
        </div>
        <div className={styles.statFooter}>
          <span className={styles.textMuted}>Đã hiển thị {activeCount}/{totalCount}</span>
        </div>
      </div>

      {/* Stat Card 3 */}
      <div className={styles.statCard}>
        <div className={`${styles.statBgShape} ${styles.statBgTertiary}`}></div>
        <div className={styles.statContent}>
          <div>
            <p className={styles.statLabel}>Bài tập đang mở</p>
            <h3 className={styles.statValue}>12</h3>
          </div>
          <div className={`${styles.statIconBox} ${styles.statIconTertiary}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </div>
        </div>
        <div className={styles.statFooter}>
          <span className={styles.textError} style={{display: 'flex', alignItems: 'center'}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="14" height="14">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <span className={styles.textError}>3 bài sắp đến hạn</span>
        </div>
      </div>
    </div>
  );
}
