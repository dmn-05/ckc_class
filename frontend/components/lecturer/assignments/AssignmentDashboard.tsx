'use client';

import React from 'react';
import styles from './AssignmentsManagement.module.css';

interface AssignmentDashboardProps {
  totalCount: number;
  openCount: number;
  needsGradingCount: number;
}

export default function AssignmentDashboard({
  totalCount,
  openCount,
  needsGradingCount
}: AssignmentDashboardProps) {
  return (
    <div className={styles.bentoGrid}>
      {/* Stat Card 1 */}
      <div className={`${styles.statCard} ${styles.borderPrimary}`}>
        <div>
          <p className={styles.statLabel}>Tổng số bài tập</p>
          <h3 className={styles.statValue}>{totalCount}</h3>
          <div className={styles.statFooter}>
            <span className={styles.textGreen} style={{display: 'flex', alignItems: 'center'}}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="14" height="14">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </span>
            <span className={styles.textGreen}>+5% vs tháng trước</span>
          </div>
        </div>
        <div className={`${styles.statIconBox} ${styles.bgPrimaryLight}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
      </div>

      {/* Stat Card 2 */}
      <div className={`${styles.statCard} ${styles.borderSecondary}`}>
        <div>
          <p className={styles.statLabel}>Bài tập đang mở</p>
          <h3 className={styles.statValue}>{openCount}</h3>
          <div className={styles.statFooter}>
            <span className={styles.textMuted}>Hạn nộp trong tuần: {Math.max(0, openCount - 2)}</span>
          </div>
        </div>
        <div className={`${styles.statIconBox} ${styles.bgSecondaryLight}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>

      {/* Stat Card 3 */}
      <div className={`${styles.statCard} ${styles.borderError}`}>
        <div>
          <p className={styles.statLabel}>Yêu cầu chấm điểm</p>
          <h3 className={styles.statValue}>{needsGradingCount}</h3>
          <div className={styles.statFooter}>
            <span className={styles.textError}>Cần ưu tiên: {Math.floor(needsGradingCount / 2)} bài</span>
          </div>
        </div>
        <div className={`${styles.statIconBox} ${styles.bgErrorLight}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
