'use client';

import React, { useState } from 'react';
import styles from './AdminSubjects.module.css';

interface SubjectDashboardProps {
  totalCount: number;
  activeCount: number;
  pausedCount: number;
  distributionData: {
    label: string;
    percentage: number;
    theme: 'primary' | 'secondary' | 'tertiary';
  }[];
  departments?: any[];
  currentFilter?: string;
  onFilterChange?: (filter: string) => void;
  currentStatusFilter?: string;
  onStatusFilterChange?: (status: string) => void;
}

export default function SubjectDashboard({
  totalCount,
  activeCount,
  pausedCount,
  distributionData,
  departments = [],
  currentFilter = 'all',
  onFilterChange,
  currentStatusFilter = 'all',
  onStatusFilterChange
}: SubjectDashboardProps) {
  const [showAll, setShowAll] = useState(false);
  const displayedData = showAll ? distributionData : distributionData.slice(0, 5);

  return (
    <div className={styles.leftColumn}>
      {/* Stats Card */}
      <div className={`${styles.glassCard} ${styles.overviewCard}`}>
        <div className={styles.overviewGlow}></div>
        <h3 className={styles.overviewTitle}>TỔNG QUAN HỌC PHẦN</h3>
        
        <div className={styles.statList}>
          <div className={styles.statItem}>
            <div className={styles.statItemLeft}>
              <div className={styles.statIconBoxPrimary}>
                <span className="material-symbols-outlined">library_books</span>
              </div>
              <span className={styles.statLabel}>Tổng số học phần</span>
            </div>
            <span className={`${styles.statValue} ${styles.statValuePrimary}`}>{totalCount}</span>
          </div>

          <div className={styles.subStatsGrid}>
            <div className={styles.subStatItem}>
              <p className={styles.subStatLabel}>Đang mở</p>
              <p className={styles.subStatValueActive}>{activeCount}</p>
            </div>
            <div className={styles.subStatItem}>
              <p className={styles.subStatLabel}>Tạm ngưng</p>
              <p className={styles.subStatValuePaused}>{pausedCount.toString().padStart(2, '0')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Distribution Chart */}
      <div className={`${styles.glassCard} ${styles.chartCard}`}>
        <h3 className={styles.chartTitle}>
          <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>pie_chart</span>
          PHÂN BỔ THEO KHOA
        </h3>
        
        <div className={styles.chartList}>
          {displayedData.map((item, index) => {
            const fillClass = 
              item.theme === 'primary' ? styles.chartBarFillPrimary : 
              item.theme === 'secondary' ? styles.chartBarFillSecondary : 
              styles.chartBarFillTertiary;

            return (
              <div key={index} className={styles.chartItem}>
                <div className={styles.chartHeader}>
                  <span className={styles.chartLabel}>{item.label}</span>
                  <span className={styles.chartValue}>{item.percentage}%</span>
                </div>
                <div className={styles.chartBarBg}>
                  <div className={fillClass} style={{ width: `${item.percentage}%` }}></div>
                </div>
              </div>
            );
          })}
        </div>

        {distributionData.length > 5 && (
          <button
            onClick={() => setShowAll(!showAll)}
            style={{
              width: '100%',
              padding: '8px 12px',
              marginTop: '16px',
              backgroundColor: 'rgba(53, 37, 205, 0.04)',
              border: '1px dashed #ced4da',
              borderRadius: '6px',
              color: '#3525cd',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              transition: 'all 0.2s'
            }}
          >
            <span>{showAll ? 'Thu gọn' : `Xem thêm (${distributionData.length - 5} khoa)...`}</span>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
              {showAll ? 'expand_less' : 'expand_more'}
            </span>
          </button>
        )}
      </div>

      {/* Filters */}
      {onFilterChange && (
        <div className={`${styles.glassCard} ${styles.filtersCard}`}>
          <h3 className={styles.filterTitle}>BỘ LỌC DỮ LIỆU</h3>
          
          <div>
            <label className={styles.filterLabel}>Lọc theo Bộ môn</label>
            <select 
              className={styles.filterSelect}
              value={currentFilter}
              onChange={(e) => onFilterChange(e.target.value)}
            >
              <option value="all">Tất cả bộ môn</option>
              {departments.map(dept => (
                <option key={dept.id} value={dept.id}>{dept.name}</option>
              ))}
            </select>
          </div>

          {onStatusFilterChange && (
            <div>
              <label className={styles.filterLabel}>Trạng thái</label>
              <div className={styles.filterTags}>
                <button 
                  type="button"
                  className={`${styles.filterTag} ${currentStatusFilter === 'all' ? styles.filterTagActive : ''}`}
                  onClick={() => onStatusFilterChange('all')}
                >
                  Tất cả
                </button>
                <button 
                  type="button"
                  className={`${styles.filterTag} ${currentStatusFilter === 'active' ? styles.filterTagActive : ''}`}
                  onClick={() => onStatusFilterChange('active')}
                >
                  Đang mở
                </button>
                <button 
                  type="button"
                  className={`${styles.filterTag} ${currentStatusFilter === 'inactive' ? styles.filterTagActive : ''}`}
                  onClick={() => onStatusFilterChange('inactive')}
                >
                  Tạm ngưng
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
