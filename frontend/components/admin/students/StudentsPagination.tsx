import React from 'react';
import styles from './AdminStudents.module.css';

export default function StudentsPagination() {
  return (
    <div className={styles.pagination}>
      <span className={styles.paginationText}>Hiển thị 4 / 1,248 sinh viên</span>
      <div className={styles.paginationControls}>
        <button className={styles.pageBtn} disabled>
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chevron_left</span>
        </button>
        <button className={styles.pageBtnActive}>1</button>
        <button className={styles.pageBtn}>2</button>
        <button className={styles.pageBtn}>3</button>
        <button className={styles.pageBtn}>
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chevron_right</span>
        </button>
      </div>
    </div>
  );
}
