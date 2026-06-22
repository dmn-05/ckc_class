'use client';

import React from 'react';
import styles from './AdminFaculties.module.css';
import FacultyCard, { FacultyData } from './FacultyCard';

interface FacultyListProps {
  faculties: FacultyData[];
  onEdit: (faculty: FacultyData) => void;
  onDelete: (id: string) => void;
}

export default function FacultyList({ faculties, onEdit, onDelete }: FacultyListProps) {
  return (
    <div className={styles.rightColumn}>
      {/* Search & Action Bar */}
      <div className={styles.searchBarContainer}>
        <div className={`${styles.glassCard} ${styles.searchBoxMain}`}>
          <span className={`material-symbols-outlined ${styles.searchIconMain}`}>search</span>
          <input 
            type="text" 
            className={styles.searchInputMain}
            placeholder="Tìm theo mã hoặc tên khoa..."
          />
        </div>
        <button className={`${styles.glassCard} ${styles.btnFilter}`}>
          <span className="material-symbols-outlined">sort</span>
        </button>
      </div>

      {/* Faculty Items */}
      <div className={styles.facultyList}>
        {faculties.map(faculty => (
          <FacultyCard 
            key={faculty.id} 
            faculty={faculty} 
            onEdit={onEdit} 
            onDelete={onDelete} 
          />
        ))}
      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        <span className={styles.paginationText}>
          Hiển thị 1 - {Math.min(4, faculties.length)} trong số {faculties.length} khoa
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
