import React from 'react';
import styles from './AdminStudents.module.css';

export default function StudentsStats() {
  return (
    <div className={`${styles.card} ${styles.statsRelative}`}>
      <div className={styles.statsBgGlow}></div>
      <h3 className={styles.cardTitle}>TỔNG SỐ SINH VIÊN</h3>
      
      <div>
        <div className={styles.statsTotalBox}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className={styles.statsIconWrapper}>
              <span className="material-symbols-outlined">groups</span>
            </div>
            <span className={styles.statsTotalLabel}>Tổng sinh viên</span>
          </div>
          <span className={styles.statsTotalValue}>1,248</span>
        </div>
        
        <div className={styles.statsGrid}>
          <div className={styles.statsItem}>
            <span className={styles.statsItemLabel}>Năm 1</span>
            <span className={styles.statsItemValue}>320</span>
          </div>
          <div className={styles.statsItem}>
            <span className={styles.statsItemLabel}>Năm 2</span>
            <span className={styles.statsItemValue}>312</span>
          </div>
          <div className={styles.statsItem}>
            <span className={styles.statsItemLabel}>Năm 3</span>
            <span className={styles.statsItemValue}>308</span>
          </div>
          <div className={styles.statsItem}>
            <span className={styles.statsItemLabel}>Năm 4</span>
            <span className={styles.statsItemValue}>308</span>
          </div>
        </div>
      </div>
    </div>
  );
}
