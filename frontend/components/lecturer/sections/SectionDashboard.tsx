'use client';

import React from 'react';
import styles from './SectionsManagement.module.css';

interface SectionDashboardProps {
  activeCount: number;
  pendingAssignments: number;
  upcomingQuizzes: number;
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function SectionDashboard({
  activeCount,
  pendingAssignments,
  upcomingQuizzes,
  currentFilter,
  onFilterChange
}: SectionDashboardProps) {
  return (
    <div className={styles.leftColumn}>
      {/* System Overview */}
      <div className={`${styles.glassCard} ${styles.overviewCard}`}>
        <div className={styles.overviewGlow}></div>
        <h3 className={styles.overviewTitle}>Tổng quan học kỳ</h3>
        
        <div className={styles.statList}>
          <div className={styles.statItem}>
            <div className={styles.statItemLeft}>
              <div className={styles.statIconBoxPrimary}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className={styles.statLabel}>Lớp đang mở</span>
            </div>
            <span className={`${styles.statValue} ${styles.statValuePrimary}`}>{activeCount}</span>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statItemLeft}>
              <div className={styles.statIconBoxError}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <span className={styles.statLabel}>Bài tập chờ chấm</span>
            </div>
            <span className={`${styles.statValue} ${styles.statValueError}`}>{pendingAssignments}</span>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statItemLeft}>
              <div className={styles.statIconBoxWarn}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className={styles.statLabel}>Quiz sắp diễn ra</span>
            </div>
            <span className={`${styles.statValue} ${styles.statValueWarn}`}>{upcomingQuizzes}</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className={`${styles.glassCard} ${styles.filtersCard}`}>
        <h3 className={styles.filterTitle}>Bộ lọc dữ liệu</h3>
        <div>
          <span className={styles.filterLabel}>Trạng thái lớp</span>
          <div className={styles.filterTags}>
            <button 
              className={`${styles.filterTag} ${currentFilter === 'all' ? styles.filterTagActive : ''}`}
              onClick={() => onFilterChange('all')}
            >
              Tất cả
            </button>
            <button 
              className={`${styles.filterTag} ${currentFilter === 'active' ? styles.filterTagActive : ''}`}
              onClick={() => onFilterChange('active')}
            >
              Đang mở
            </button>
            <button 
              className={`${styles.filterTag} ${currentFilter === 'upcoming' ? styles.filterTagActive : ''}`}
              onClick={() => onFilterChange('upcoming')}
            >
              Sắp diễn ra
            </button>
            <button 
              className={`${styles.filterTag} ${currentFilter === 'completed' ? styles.filterTagActive : ''}`}
              onClick={() => onFilterChange('completed')}
            >
              Đã kết thúc
            </button>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className={`${styles.glassCard} ${styles.bannerCard}`}>
        <div className={styles.bannerContent}>
          <p className={styles.bannerTitle}>CKC Teaching</p>
          <p className={styles.bannerSubtitle}>Môi trường giảng dạy trực tuyến</p>
        </div>
      </div>
    </div>
  );
}
