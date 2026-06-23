'use client';

import React from 'react';
import styles from './AdminCourseSections.module.css';

interface CourseSectionDashboardProps {
  activeCount: number;
  lockedCount: number;
  completedCount: number;
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function CourseSectionDashboard({
  activeCount,
  lockedCount,
  completedCount,
  currentFilter,
  onFilterChange
}: CourseSectionDashboardProps) {
  return (
    <div className={styles.leftColumn}>
      {/* System Overview */}
      <div className={`${styles.glassCard} ${styles.overviewCard}`}>
        <div className={styles.overviewGlow}></div>
        <h3 className={styles.overviewTitle}>TỔNG QUAN HỌC PHẦN</h3>
        
        <div className={styles.statList}>
          <div className={styles.statItem}>
            <div className={styles.statItemLeft}>
              <div className={styles.statIconBoxPrimary}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>class</span>
              </div>
              <span className={styles.statLabel}>Đang mở</span>
            </div>
            <span className={`${styles.statValue} ${styles.statValuePrimary}`}>{activeCount.toString().padStart(2, '0')}</span>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statItemLeft}>
              <div className={styles.statIconBoxSecondary}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>lock</span>
              </div>
              <span className={styles.statLabel}>Đã khóa</span>
            </div>
            <span className={`${styles.statValue} ${styles.statValueSecondary}`}>{lockedCount.toString().padStart(2, '0')}</span>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statItemLeft}>
              <div className={styles.statIconBoxError}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>check_circle</span>
              </div>
              <span className={styles.statLabel}>Đã kết thúc</span>
            </div>
            <span className={`${styles.statValue} ${styles.statValueError}`}>{completedCount.toString().padStart(2, '0')}</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className={`${styles.glassCard} ${styles.filtersCard}`}>
        <h3 className={styles.filterTitle}>Bộ lọc dữ liệu</h3>
        <div>
          <span className={styles.filterLabel}>Trạng thái lớp học phần</span>
          <div className={styles.filterTags}>
            <button 
              className={`${styles.filterTag} ${currentFilter === 'all' ? styles.filterTagActive : ''}`}
              onClick={() => onFilterChange('all')}
            >
              Tất cả
            </button>
            <button 
              className={`${styles.filterTag} ${currentFilter === 'dang_mo' ? styles.filterTagActive : ''}`}
              onClick={() => onFilterChange('dang_mo')}
            >
              Đang mở
            </button>
            <button 
              className={`${styles.filterTag} ${currentFilter === 'da_khoa' ? styles.filterTagActive : ''}`}
              onClick={() => onFilterChange('da_khoa')}
            >
              Đã khóa
            </button>
            <button 
              className={`${styles.filterTag} ${currentFilter === 'da_ket_thuc' ? styles.filterTagActive : ''}`}
              onClick={() => onFilterChange('da_ket_thuc')}
            >
              Đã kết thúc
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
