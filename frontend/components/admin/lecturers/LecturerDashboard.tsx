'use client';

import React from 'react';
import styles from './AdminLecturers.module.css';

interface LecturerDashboardProps {
  totalCount: number;
  professorsCount: number;
  seniorLecturersCount: number;
  lecturersCount: number;
  facultyFilter: string;
  onFacultyFilterChange: (val: string) => void;
}

export default function LecturerDashboard({
  totalCount,
  professorsCount,
  seniorLecturersCount,
  lecturersCount,
  facultyFilter,
  onFacultyFilterChange
}: LecturerDashboardProps) {
  return (
    <div className={styles.leftColumn}>
      {/* Stats Card */}
      <div className={`${styles.glassCard} ${styles.overviewCard}`}>
        <div className={styles.overviewGlow}></div>
        <h3 className={styles.overviewTitle}>TỔNG SỐ GIẢNG VIÊN</h3>
        
        <div className={styles.statList}>
          <div className={styles.statItem}>
            <div className={styles.statItemLeft}>
              <div className={styles.statIconBoxPrimary}>
                <span className="material-symbols-outlined">groups</span>
              </div>
              <span className={styles.statLabel}>Tổng nhân sự</span>
            </div>
            <span className={`${styles.statValue} ${styles.statValuePrimary}`}>{totalCount}</span>
          </div>

          <div className={styles.subStatsList}>
            <div className={styles.subStatItem}>
              <span className={styles.subStatLabel}>Giáo sư</span>
              <span className={styles.subStatValueTertiary}>{professorsCount}</span>
            </div>
            <div className={styles.subStatItem}>
              <span className={styles.subStatLabel}>Giảng viên cao cấp</span>
              <span className={styles.subStatValueSecondary}>{seniorLecturersCount}</span>
            </div>
            <div className={styles.subStatItem}>
              <span className={styles.subStatLabel}>Giảng viên</span>
              <span className={styles.subStatValuePrimary}>{lecturersCount}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Card */}
      <div className={`${styles.glassCard} ${styles.filtersCard}`}>
        <h3 className={styles.filterTitle}>
          <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>filter_alt</span>
          BỘ LỌC NHÂN SỰ
        </h3>
        
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>KHOA</label>
          <select 
            className={styles.filterSelect}
            value={facultyFilter}
            onChange={(e) => onFacultyFilterChange(e.target.value)}
          >
            <option value="all">Tất cả các khoa</option>
            <option value="CNTT">Công nghệ thông tin</option>
            <option value="CK">Cơ khí</option>
            <option value="DD">Điện - Điện tử</option>
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>TRẠNG THÁI</label>
          <div className={styles.checkboxGroup}>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" className={styles.checkboxInput} defaultChecked />
              <span className={styles.checkboxText}>Đang giảng dạy</span>
            </label>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" className={styles.checkboxInput} />
              <span className={styles.checkboxText}>Đang nghỉ phép</span>
            </label>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className={`${styles.glassCard} ${styles.bannerCard}`}>
        <img 
          alt="Academics" 
          className={styles.bannerImage} 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAg5Hgz6L5una61NHHIDr0lyqV6chp-vk2_Kk1Z0QYDp_u-VRfEZz-rWfs56btXQyz58EWP-89BbDO8U-43P_PS5L-Zo9GFqeFDHrJ9PsdBP1EQ_WNZqpBP7OL-QWywaIaMadRQUHWk9WadxkLcAObnctcovxB5MIVkeEqU4DL7OjY5g3gz7FRBHUYJtv-gPJB4KTv3d8ty_1Cee-4mpOIqPQcgzSas9s_GCoUhLsSoawfKRp-2Kn0IhyHjLY1XUpwTb-KVToYyahM"
        />
        <div className={styles.bannerContent}>
          <p className={styles.bannerTitle}>Chuyên môn & Tận tâm</p>
          <p className={styles.bannerSubtitle}>Cộng đồng học thuật CKC</p>
        </div>
      </div>
    </div>
  );
}
