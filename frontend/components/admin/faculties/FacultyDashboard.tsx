'use client';

import React from 'react';
import styles from './AdminFaculties.module.css';

interface FacultyDashboardProps {
  activeCount: number;
  pendingCount: number;
  inactiveCount: number;
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function FacultyDashboard({
  activeCount = 0,
  pendingCount = 0,
  inactiveCount = 0,
  currentFilter,
  onFilterChange
}: FacultyDashboardProps) {
  return (
    <div className={styles.leftColumn}>
      {/* System Overview */}
      <div className={`${styles.glassCard} ${styles.overviewCard}`}>
        <div className={styles.overviewGlow}></div>
        <h3 className={styles.overviewTitle}>Tổng quan hệ thống</h3>
        
        <div className={styles.statList}>
          <div className={styles.statItem}>
            <div className={styles.statItemLeft}>
              <div className={styles.statIconBoxPrimary}>
                <span className="material-symbols-outlined">verified</span>
              </div>
              <span className={styles.statLabel}>Khoa Hoạt động</span>
            </div>
            <span className={`${styles.statValue} ${styles.statValueSecondary}`}>{activeCount}</span>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statItemLeft}>
              <div className={styles.statIconBoxError}>
                <span className="material-symbols-outlined">pending</span>
              </div>
              <span className={styles.statLabel}>Chờ phê duyệt</span>
            </div>
            <span className={`${styles.statValue} ${styles.statValueError}`}>
              {pendingCount.toString().padStart(2, '0')}
            </span>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statItemLeft}>
              <div className={styles.statIconBoxError}>
                <span className="material-symbols-outlined">cancel</span>
              </div>
              <span className={styles.statLabel}>Ngừng hoạt động</span>
            </div>
            <span className={`${styles.statValue} ${styles.statValueError}`}>
              {inactiveCount.toString().padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className={`${styles.glassCard} ${styles.filtersCard}`}>
        <h3 className={styles.filterTitle}>Bộ lọc dữ liệu</h3>
        <div>
          <span className={styles.filterLabel}>Trạng thái</span>
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
              Đang chạy
            </button>
            <button 
              className={`${styles.filterTag} ${currentFilter === 'paused' ? styles.filterTagActive : ''}`}
              onClick={() => onFilterChange('paused')}
            >
              Tạm ngừng
            </button>
            <button 
              className={`${styles.filterTag} ${currentFilter === 'pending' ? styles.filterTagActive : ''}`}
              onClick={() => onFilterChange('pending')}
            >
              Chờ duyệt
            </button>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className={`${styles.glassCard} ${styles.bannerCard}`}>
        <img 
          alt="Modern laboratory" 
          className={styles.bannerImage} 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtNGZMObEJYpIQHnypLJFA9DCOVL5olhKIABTBsjekYHGBFQEsNY-EV3ZF8VKJ3yfdasFYNhuSVR4CRMx-zqblrLRYtWY6qRGo9cjmA4thplJnunEe6aYj3twjGLdQCzxZBkwAd2BXpFwB1w84HA6-dT0WNEIHZa4VHWpJL1OsSo33rCprMqYnSw7opcuoYJKtGVUF7S7Ze6mJd5uvElJtN7dp5KtTMuNnFlsmkzGuCPF0J-GZYP-ZwIIv22mHoeX-GCjpwBWPksI"
        />
        <div className={styles.bannerContent}>
          <p className={styles.bannerTitle}>CKC Lab Tech</p>
          <p className={styles.bannerSubtitle}>Hệ thống quản lý thông minh</p>
        </div>
      </div>
    </div>
  );
}
