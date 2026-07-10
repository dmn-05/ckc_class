'use client';

import React from 'react';
import styles from './AdminLecturers.module.css';

interface LecturerDashboardProps {
  totalCount: number;
  teachingCount: number;
  stoppedTeachingCount: number;
  facultyFilter: string;
  onFacultyFilterChange: (val: string) => void;
  showTeaching: boolean;
  showStopped: boolean;
  onShowTeachingChange: (val: boolean) => void;
  onShowStoppedChange: (val: boolean) => void;
  faculties?: any[];
}

export default function LecturerDashboard({
  totalCount,
  teachingCount,
  stoppedTeachingCount,
  facultyFilter,
  onFacultyFilterChange,
  showTeaching,
  showStopped,
  onShowTeachingChange,
  onShowStoppedChange,
  faculties = []
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
              <span className={styles.subStatLabel}>Đang giảng dạy</span>
              <span className={styles.subStatValuePrimary}>{teachingCount}</span>
            </div>
            <div className={styles.subStatItem}>
              <span className={styles.subStatLabel}>Ngừng giảng dạy</span>
              <span className={styles.subStatValueSecondary}>{stoppedTeachingCount}</span>
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
            {faculties.map((f: any) => (
              <option key={f.id} value={f.code}>{f.name}</option>
            ))}
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>TRẠNG THÁI</label>
          <div className={styles.checkboxGroup}>
            <label className={styles.checkboxLabel}>
              <input 
                type="checkbox" 
                className={styles.checkboxInput} 
                checked={showTeaching}
                onChange={(e) => onShowTeachingChange(e.target.checked)} 
              />
              <span className={styles.checkboxText}>Đang giảng dạy</span>
            </label>
            <label className={styles.checkboxLabel}>
              <input 
                type="checkbox" 
                className={styles.checkboxInput} 
                checked={showStopped}
                onChange={(e) => onShowStoppedChange(e.target.checked)} 
              />
              <span className={styles.checkboxText}>Đang nghỉ phép</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
