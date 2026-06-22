'use client';

import React from 'react';
import styles from './AdminDepartments.module.css';
import DepartmentCard, { DepartmentData } from './DepartmentCard';

interface DepartmentListProps {
  departments: DepartmentData[];
  onEdit: (department: DepartmentData) => void;
  onDelete: (id: string) => void;
}

export default function DepartmentList({ departments, onEdit, onDelete }: DepartmentListProps) {
  return (
    <div className={styles.rightColumn}>
      {/* Search & Action Bar */}
      <div className={styles.searchBarContainer}>
        <div className={`${styles.glassCard} ${styles.searchBoxMain}`}>
          <span className={`material-symbols-outlined ${styles.searchIconMain}`}>search</span>
          <input 
            type="text" 
            className={styles.searchInputMain}
            placeholder="Tìm theo mã hoặc tên bộ môn..."
          />
        </div>
        <button className={`${styles.glassCard} ${styles.btnFilter}`}>
          <span className="material-symbols-outlined">sort</span>
        </button>
      </div>

      {/* Department Items */}
      <div className={styles.departmentList}>
        {departments.map(dept => (
          <DepartmentCard 
            key={dept.id} 
            department={dept} 
            onEdit={onEdit} 
            onDelete={onDelete} 
          />
        ))}
      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        <span className={styles.paginationText}>
          Hiển thị 1 - {Math.min(4, departments.length)} trong số {departments.length} bộ môn
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
