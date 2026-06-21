'use client';

import React from 'react';
import styles from './AdminLecturers.module.css';
import LecturerCard, { LecturerData } from './LecturerCard';

interface LecturerListProps {
  lecturers: LecturerData[];
  currentFilter: string;
  onFilterChange: (filter: string) => void;
  onEdit: (lecturer: LecturerData) => void;
  onDelete: (id: string) => void;
}

export default function LecturerList({ 
  lecturers, 
  currentFilter,
  onFilterChange,
  onEdit, 
  onDelete 
}: LecturerListProps) {
  return (
    <div className={styles.rightColumn}>
      {/* Search & Filters */}
      <div className={styles.searchBarContainer}>
        <div className={styles.searchBoxRow}>
          <div className={`${styles.glassCard} ${styles.searchBoxMain}`}>
            <span className={`material-symbols-outlined ${styles.searchIconMain}`}>search</span>
            <input 
              type="text" 
              className={styles.searchInputMain}
              placeholder="Tìm tên hoặc mã giảng viên..."
            />
          </div>
          <button className={`${styles.glassCard} ${styles.btnFilter}`}>
            <span className="material-symbols-outlined">tune</span>
          </button>
        </div>

        <div className={styles.filterTagScroll}>
          <button 
            className={`${styles.filterTagScrollBtn} ${currentFilter === 'all' ? styles.filterTagScrollBtnActive : ''}`}
            onClick={() => onFilterChange('all')}
          >
            Tất cả
          </button>
          <button 
            className={`${styles.filterTagScrollBtn} ${currentFilter === 'cntt' ? styles.filterTagScrollBtnActive : ''}`}
            onClick={() => onFilterChange('cntt')}
          >
            Khoa CNTT
          </button>
          <button 
            className={`${styles.filterTagScrollBtn} ${currentFilter === 'ck' ? styles.filterTagScrollBtnActive : ''}`}
            onClick={() => onFilterChange('ck')}
          >
            Khoa Cơ Khí
          </button>
          <button 
            className={`${styles.filterTagScrollBtn} ${currentFilter === 'dd' ? styles.filterTagScrollBtnActive : ''}`}
            onClick={() => onFilterChange('dd')}
          >
            Khoa Điện
          </button>
        </div>
      </div>

      {/* Lecturer Items */}
      <div className={styles.lecturerList}>
        {lecturers.map(lecturer => (
          <LecturerCard 
            key={lecturer.id} 
            lecturer={lecturer} 
            onEdit={onEdit} 
            onDelete={onDelete} 
          />
        ))}
      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        <span className={styles.paginationText}>
          Hiển thị 1 - {Math.min(4, lecturers.length)} trong số {lecturers.length} giảng viên
        </span>
        <div className={styles.paginationButtons}>
          <button className={`${styles.btnPage} ${styles.btnPageDisabled}`} disabled>
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className={`${styles.btnPage} ${styles.btnPageActive}`}>1</button>
          <button className={styles.btnPage}>2</button>
          <button className={styles.btnPage}>3</button>
          <button className={styles.btnPage}>
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
}
