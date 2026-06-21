'use client';

import React from 'react';
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
}

export default function SubjectDashboard({
  totalCount,
  activeCount,
  pausedCount,
  distributionData
}: SubjectDashboardProps) {
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
          {distributionData.map((item, index) => {
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
      </div>

      {/* Banner */}
      <div className={`${styles.glassCard} ${styles.bannerCard}`}>
        <img 
          alt="Modern learning" 
          className={styles.bannerImage} 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAg5Hgz6L5una61NHHIDr0lyqV6chp-vk2_Kk1Z0QYDp_u-VRfEZz-rWfs56btXQyz58EWP-89BbDO8U-43P_PS5L-Zo9GFqeFDHrJ9PsdBP1EQ_WNZqpBP7OL-QWywaIaMadRQUHWk9WadxkLcAObnctcovxB5MIVkeEqU4DL7OjY5g3gz7FRBHUYJtv-gPJB4KTv3d8ty_1Cee-4mpOIqPQcgzSas9s_GCoUhLsSoawfKRp-2Kn0IhyHjLY1XUpwTb-KVToYyahM"
        />
        <div className={styles.bannerContent}>
          <p className={styles.bannerTitle}>Nâng tầm học thuật</p>
          <p className={styles.bannerSubtitle}>Hệ thống giáo dục thông minh v2.0</p>
        </div>
      </div>
    </div>
  );
}
