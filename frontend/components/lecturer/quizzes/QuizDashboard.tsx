'use client';

import React from 'react';
import styles from './QuizzesManagement.module.css';

interface QuizDashboardProps {
  totalQuizzes: number;
  openQuizzes: number;
  essaysToGrade: number;
}

export default function QuizDashboard({
  totalQuizzes,
  openQuizzes,
  essaysToGrade
}: QuizDashboardProps) {
  return (
    <div className={styles.bentoGrid}>
      <div className={`${styles.statCard} ${styles.borderPrimary}`}>
        <div>
          <p className={styles.statLabel}>Tổng số Bài kiểm tra</p>
          <h3 className={styles.statValue}>{totalQuizzes}</h3>
        </div>
        <div className={`${styles.statIconBox} ${styles.bgPrimaryLight}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        </div>
      </div>

      <div className={`${styles.statCard} ${styles.borderSecondary}`}>
        <div>
          <p className={styles.statLabel}>Đang diễn ra</p>
          <h3 className={styles.statValue}>{openQuizzes}</h3>
        </div>
        <div className={`${styles.statIconBox} ${styles.bgSecondaryLight}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>

      <div className={`${styles.statCard} ${styles.borderWarning}`}>
        <div>
          <p className={styles.statLabel}>Chờ chấm tự luận</p>
          <h3 className={styles.statValue}>{essaysToGrade}</h3>
          <div className={styles.statFooter}>
            <span className={styles.textOrange}>Cần chấm gấp</span>
          </div>
        </div>
        <div className={`${styles.statIconBox} ${styles.bgWarningLight}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
