import React from 'react';
import styles from './AdminStudents.module.css';

interface StudentsToolbarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  facultyFilter: string;
  onFacultyChange: (value: string) => void;
}

export default function StudentsToolbar({
  searchTerm,
  onSearchChange,
  facultyFilter,
  onFacultyChange
}: StudentsToolbarProps) {
  return (
    <div>
      <div className={styles.toolbarTop}>
        <div className={styles.searchBox}>
          <span className="material-symbols-outlined" style={{ color: '#464555', marginRight: '12px' }}>search</span>
          <input 
            className={styles.searchInput} 
            placeholder="Tìm tên, mã sinh viên, lớp..." 
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <button className={styles.toolbarBtn}>
          <span className="material-symbols-outlined">tune</span>
        </button>
      </div>
      <div className={`${styles.toolbarTabs} ${styles.scrollbarHide}`}>
        <button 
          className={facultyFilter === 'all' ? styles.tabActive : styles.tabInactive}
          onClick={() => onFacultyChange('all')}
        >
          Tất cả
        </button>
        <button 
          className={facultyFilter === 'công nghệ thông tin' ? styles.tabActive : styles.tabInactive}
          onClick={() => onFacultyChange('công nghệ thông tin')}
        >
          Khoa CNTT
        </button>
        <button 
          className={facultyFilter === 'cơ khí' ? styles.tabActive : styles.tabInactive}
          onClick={() => onFacultyChange('cơ khí')}
        >
          Khoa Cơ Khí
        </button>
        <button 
          className={facultyFilter === 'điện' ? styles.tabActive : styles.tabInactive}
          onClick={() => onFacultyChange('điện')}
        >
          Khoa Điện
        </button>
      </div>
    </div>
  );
}
