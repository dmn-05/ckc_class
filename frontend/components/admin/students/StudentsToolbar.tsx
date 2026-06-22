import React from 'react';
import styles from './AdminStudents.module.css';

export default function StudentsToolbar() {
  return (
    <div>
      <div className={styles.toolbarTop}>
        <div className={styles.searchBox}>
          <span className="material-symbols-outlined" style={{ color: '#464555', marginRight: '12px' }}>search</span>
          <input className={styles.searchInput} placeholder="Tìm tên, mã sinh viên, lớp..." type="text"/>
        </div>
        <button className={styles.toolbarBtn}>
          <span className="material-symbols-outlined">tune</span>
        </button>
      </div>
      <div className={`${styles.toolbarTabs} ${styles.scrollbarHide}`}>
        <button className={styles.tabActive}>Tất cả</button>
        <button className={styles.tabInactive}>Khoa CNTT</button>
        <button className={styles.tabInactive}>Khoa Cơ Khí</button>
        <button className={styles.tabInactive}>Khoa Điện</button>
      </div>
    </div>
  );
}
