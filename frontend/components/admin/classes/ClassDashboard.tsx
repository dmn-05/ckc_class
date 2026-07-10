'use client';

import React from 'react';
import styles from './AdminClasses.module.css';

interface ClassDashboardProps {
  activeCount: number;
  pendingAssignments: number;
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function ClassDashboard({
  activeCount,
  pendingAssignments,
  currentFilter,
  onFilterChange
}: ClassDashboardProps) {
  return (
    <div className={styles.leftColumn}>
      {/* System Overview */}
      <div className={`${styles.glassCard} ${styles.overviewCard}`}>
        <div className={styles.overviewGlow}></div>
        <h3 className={styles.overviewTitle}>TỔNG QUAN LỚP HỌC</h3>
        
        <div className={styles.statList}>
          <div className={styles.statItem}>
            <div className={styles.statItemLeft}>
              <div className={styles.statIconBoxPrimary}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className={styles.statLabel}>Lớp đang học</span>
            </div>
            <span className={`${styles.statValue} ${styles.statValuePrimary}`}>{activeCount.toString().padStart(2, '0')}</span>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statItemLeft}>
              <div className={styles.statIconBoxError}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  <circle cx="16" cy="16" r="5" fill="#fff" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 14v2l1.5 1.5M16 11a5 5 0 100 10 5 5 0 000-10z" />
                </svg>
              </div>
              <span className={styles.statLabel}>Lớp đã tốt nghiệp</span>
            </div>
            <span className={`${styles.statValue} ${styles.statValueError}`}>{pendingAssignments.toString().padStart(2, '0')}</span>
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
              className={`${styles.filterTag} ${currentFilter === 'dang_hoc' ? styles.filterTagActive : ''}`}
              onClick={() => onFilterChange('dang_hoc')}
            >
              Đang học
            </button>
            <button 
              className={`${styles.filterTag} ${currentFilter === 'da_tot_nghiep' ? styles.filterTagActive : ''}`}
              onClick={() => onFilterChange('da_tot_nghiep')}
            >
              Đã tốt nghiệp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
