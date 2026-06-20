'use client';

import React from 'react';
import styles from './SectionsManagement.module.css';

interface SectionStatsModalProps {
  sectionTitle: string;
  stats: {
    enrolled: number;
    max: number;
    assignments: number;
    quizzes: number;
    pendingGrading: number;
  } | null;
  onClose: () => void;
}

export default function SectionStatsModal({ sectionTitle, stats, onClose }: SectionStatsModalProps) {
  if (!stats) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>Thống kê: {sectionTitle}</h3>
          <button className={styles.btnCloseModal} onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.statsGrid}>
            <div className={styles.statBox}>
              <p className={styles.statBoxTitle}>Sinh viên</p>
              <p className={styles.statBoxValue}>{stats.enrolled}/{stats.max}</p>
            </div>
            <div className={styles.statBox}>
              <p className={styles.statBoxTitle}>Bài tập đã giao</p>
              <p className={styles.statBoxValue}>{stats.assignments}</p>
            </div>
            <div className={styles.statBox}>
              <p className={styles.statBoxTitle}>Bài Quiz</p>
              <p className={styles.statBoxValue}>{stats.quizzes}</p>
            </div>
            <div className={styles.statBox} style={{ gridColumn: 'span 3', backgroundColor: 'rgba(186, 26, 26, 0.05)' }}>
              <p className={styles.statBoxTitle}>Số bài cần chấm</p>
              <p className={styles.statBoxValue} style={{ color: '#ba1a1a' }}>{stats.pendingGrading}</p>
            </div>
          </div>
          
          <div style={{ padding: '1rem', backgroundColor: '#e1e0ff', borderRadius: '0.75rem', color: '#2f2ebe', fontSize: '0.875rem' }}>
            <strong>Gợi ý:</strong> Hãy vào xem chi tiết lớp học để chấm điểm các bài tập còn tồn đọng hoặc tạo thêm tài nguyên học tập cho sinh viên.
          </div>
        </div>

        <div className={styles.modalFooter}>
          <button className={styles.btnSave} onClick={onClose}>
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
