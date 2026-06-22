'use client';

import React from 'react';
import styles from './AdminDepartments.module.css';

interface DepartmentDashboardProps {
  activeCount: number;
  pendingCount: number;
  inactiveCount: number;
  currentFacultyFilter: string;
  onFacultyFilterChange: (filter: string) => void;
  currentStatusFilter: string;
  onStatusFilterChange: (filter: string) => void;
  faculties?: { id: string, name: string }[];
}

export default function DepartmentDashboard({
  activeCount,
  pendingCount,
  inactiveCount,
  currentFacultyFilter,
  onFacultyFilterChange,
  currentStatusFilter,
  onStatusFilterChange,
  faculties = []
}: DepartmentDashboardProps) {
  return (
    <div className={styles.leftColumn}>
      {/* System Overview */}
      <div className={`${styles.glassCard} ${styles.overviewCard}`}>
        <div className={styles.overviewGlow}></div>
        <h3 className={styles.overviewTitle}>TỔNG QUAN HỆ THỐNG</h3>
        
        <div className={styles.statList}>
          <div className={styles.statItem}>
            <div className={styles.statItemLeft}>
              <div className={styles.statIconBoxTertiary}>
                <span className="material-symbols-outlined">verified</span>
              </div>
              <span className={styles.statLabel}>Bộ môn Hoạt động</span>
            </div>
            <span className={`${styles.statValue} ${styles.statValueTertiary}`}>{activeCount}</span>
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
        <h3 className={styles.filterTitle}>BỘ LỌC DỮ LIỆU</h3>
        
        <div>
          <label className={styles.filterLabel}>Lọc theo Khoa</label>
          <select 
            className={styles.filterSelect}
            value={currentFacultyFilter}
            onChange={(e) => onFacultyFilterChange(e.target.value)}
          >
            <option value="all">Tất cả khoa</option>
            {faculties.map(f => (
              <option key={f.id} value={f.id}>{f.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className={styles.filterLabel}>Trạng thái</label>
          <div className={styles.filterTags}>
            <button 
              className={`${styles.filterTag} ${currentStatusFilter === 'all' ? styles.filterTagActive : ''}`}
              onClick={() => onStatusFilterChange('all')}
            >
              Tất cả
            </button>
            <button 
              className={`${styles.filterTag} ${currentStatusFilter === 'active' ? styles.filterTagActive : ''}`}
              onClick={() => onStatusFilterChange('active')}
            >
              Đang chạy
            </button>
            <button 
              className={`${styles.filterTag} ${currentStatusFilter === 'paused' ? styles.filterTagActive : ''}`}
              onClick={() => onStatusFilterChange('paused')}
            >
              Tạm ngưng
            </button>
            <button 
              className={`${styles.filterTag} ${currentStatusFilter === 'pending' ? styles.filterTagActive : ''}`}
              onClick={() => onStatusFilterChange('pending')}
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
