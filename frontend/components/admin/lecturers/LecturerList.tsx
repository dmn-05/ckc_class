'use client';

import React from 'react';
import styles from './AdminLecturers.module.css';
import LecturerCard, { LecturerData } from './LecturerCard';
import { getPaginationRange } from '@/utils/pagination';

interface LecturerListProps {
  lecturers: LecturerData[];
  totalItems: number;
  currentFilter: string;
  onFilterChange: (filter: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onEdit: (lecturer: LecturerData) => void;
  onDelete: (id: string) => void;
  faculties?: any[];
}

export default function LecturerList({
  lecturers,
  totalItems,
  currentFilter,
  onFilterChange,
  searchQuery,
  onSearchChange,
  currentPage,
  totalPages,
  onPageChange,
  onEdit,
  onDelete,
  faculties = []
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
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
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
          {faculties.map((f: any) => (
            <button
              key={f.id}
              className={`${styles.filterTagScrollBtn} ${currentFilter === f.code ? styles.filterTagScrollBtnActive : ''}`}
              onClick={() => onFilterChange(f.code)}
            >
              {f.name}
            </button>
          ))}
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
          Hiển thị {lecturers.length === 0 ? 0 : (currentPage - 1) * 5 + 1} - {Math.min(currentPage * 5, totalItems)} trong số {totalItems} giảng viên
        </span>
        <div className={styles.paginationButtons}>
          <button
            className={`${styles.btnPage} ${currentPage === 1 ? styles.btnPageDisabled : ''}`}
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>

          {getPaginationRange(currentPage, totalPages).map((pageNum, idx) => (
            typeof pageNum === 'number' ? (
              <button
                key={pageNum}
                className={`${styles.btnPage} ${currentPage === pageNum ? styles.btnPageActive : ''}`}
                onClick={() => onPageChange(pageNum)}
              >
                {pageNum}
              </button>
            ) : (
              <span
                key={`dots-${idx}`}
                className={styles.btnPage}
                style={{ border: 'none', background: 'transparent', cursor: 'default', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {pageNum}
              </span>
            )
          ))}

          <button
            className={`${styles.btnPage} ${currentPage === totalPages || totalPages === 0 ? styles.btnPageDisabled : ''}`}
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => onPageChange(currentPage + 1)}
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
}
