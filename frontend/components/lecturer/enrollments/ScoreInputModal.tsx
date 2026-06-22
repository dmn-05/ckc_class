'use client';

import React, { useState, useEffect } from 'react';
import styles from './EnrollmentsManagement.module.css';
import { EnrollmentData } from './EnrollmentTable';

interface ScoreInputModalProps {
  enrollment: EnrollmentData | null;
  onSave: (enrollmentId: string, score: number) => void;
  onClose: () => void;
}

export default function ScoreInputModal({ enrollment, onSave, onClose }: ScoreInputModalProps) {
  const [scoreStr, setScoreStr] = useState('');

  useEffect(() => {
    if (enrollment && enrollment.finalScore !== null) {
      setScoreStr(enrollment.finalScore.toString());
    } else {
      setScoreStr('');
    }
  }, [enrollment]);

  if (!enrollment) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedScore = parseFloat(scoreStr);
    
    if (isNaN(parsedScore) || parsedScore < 0 || parsedScore > 10) {
      alert("Vui lòng nhập điểm hợp lệ từ 0 đến 10.");
      return;
    }

    // Round to 1 decimal point
    const finalScore = Math.round(parsedScore * 10) / 10;
    onSave(enrollment.id, finalScore);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>Nhập điểm tổng kết</h3>
          <button className={styles.btnCloseModal} onClick={onClose} type="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.modalBody}>
            <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#f2f4f6', borderRadius: '0.75rem' }}>
              <p style={{ fontSize: '0.875rem', color: '#464555', marginBottom: '0.25rem' }}>Sinh viên:</p>
              <p style={{ fontSize: '1rem', fontWeight: 600, color: '#191c1e' }}>{enrollment.studentName} ({enrollment.studentId})</p>
              <p style={{ fontSize: '0.875rem', color: '#464555', marginTop: '0.5rem', marginBottom: '0.25rem' }}>Lớp học phần:</p>
              <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#191c1e' }}>{enrollment.sectionName} - {enrollment.sectionCode}</p>
            </div>

            <div>
              <label className={styles.formLabel}>Điểm hệ số 10</label>
              <input 
                type="number" 
                step="0.1"
                min="0"
                max="10"
                required
                className={styles.formInput} 
                value={scoreStr}
                onChange={(e) => setScoreStr(e.target.value)}
                placeholder="Ví dụ: 8.5"
                autoFocus
              />
              <p style={{ fontSize: '0.75rem', color: '#777587', marginTop: '-0.5rem' }}>Hệ thống tự động làm tròn đến 1 chữ số thập phân (VD: 8.56 -{'>'} 8.6)</p>
            </div>
          </div>

          <div className={styles.modalFooter}>
            <button type="button" className={styles.btnCancel} onClick={onClose}>
              Hủy
            </button>
            <button type="submit" className={styles.btnSave}>
              Lưu Điểm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
