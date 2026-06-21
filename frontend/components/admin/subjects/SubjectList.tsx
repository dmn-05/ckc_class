'use client';

import React from 'react';
import styles from './AdminSubjects.module.css';
import SubjectCard, { SubjectData } from './SubjectCard';

interface SubjectListProps {
  subjects: SubjectData[];
  currentFilter: string;
  onFilterChange: (filter: string) => void;
  onEdit: (subject: SubjectData) => void;
  onDelete: (id: string) => void;
}

export default function SubjectList({ 
  subjects, 
  currentFilter,
  onFilterChange,
  onEdit, 
  onDelete 
}: SubjectListProps) {
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
              placeholder="Tìm theo mã hoặc tên môn học..."
            />
          </div>
          <button className={`${styles.glassCard} ${styles.btnFilter}`}>
            <span className="material-symbols-outlined">filter_list</span>
          </button>
        </div>

        <div className={styles.filterTagScroll}>
          <button 
            className={`${styles.filterTagScrollBtn} ${currentFilter === 'all' ? styles.filterTagScrollBtnActive : ''}`}
            onClick={() => onFilterChange('all')}
          >
            Tất cả môn học
          </button>
          <button 
            className={`${styles.filterTagScrollBtn} ${currentFilter === 'core' ? styles.filterTagScrollBtnActive : ''}`}
            onClick={() => onFilterChange('core')}
          >
            Cơ sở ngành
          </button>
          <button 
            className={`${styles.filterTagScrollBtn} ${currentFilter === 'major' ? styles.filterTagScrollBtnActive : ''}`}
            onClick={() => onFilterChange('major')}
          >
            Chuyên ngành
          </button>
          <button 
            className={`${styles.filterTagScrollBtn} ${currentFilter === 'general' ? styles.filterTagScrollBtnActive : ''}`}
            onClick={() => onFilterChange('general')}
          >
            Đại cương
          </button>
        </div>
      </div>

      {/* Subject Items */}
      <div className={styles.subjectList}>
        {subjects.map(subject => (
          <SubjectCard 
            key={subject.id} 
            subject={subject} 
            onEdit={onEdit} 
            onDelete={onDelete} 
          />
        ))}
      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        <span className={styles.paginationText}>
          Hiển thị 1 - {Math.min(4, subjects.length)} trong số {subjects.length} môn học
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
