import React from 'react';
import styles from './AdminStudents.module.css';
import { StudentData } from './StudentCard';

interface StudentsStatsProps {
  students: StudentData[];
}

export default function StudentsStats({ students }: StudentsStatsProps) {
  const total = students.length;

  const activeCount = students.filter(s => s.status === 'dang_hoc').length;
  const reservedCount = students.filter(s => s.status === 'tam_nghi').length;
  const graduatedCount = students.filter(s => s.status === 'da_tot_nghiep').length;

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
          <span className={styles.statsTotalValue}>{total}</span>
        </div>
        
        <div className={styles.statsGrid}>
          <div className={styles.statsItem}>
            <span className={styles.statsItemLabel}>Đang học</span>
            <span className={styles.statsItemValue} style={{ color: '#4648d4' }}>{activeCount}</span>
          </div>
          <div className={styles.statsItem}>
            <span className={styles.statsItemLabel}>Bảo lưu</span>
            <span className={styles.statsItemValue} style={{ color: '#ba1a1a' }}>{reservedCount}</span>
          </div>
          <div className={styles.statsItem} style={{ gridColumn: 'span 2' }}>
            <span className={styles.statsItemLabel}>Đã tốt nghiệp</span>
            <span className={styles.statsItemValue} style={{ color: '#22c55e' }}>{graduatedCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
