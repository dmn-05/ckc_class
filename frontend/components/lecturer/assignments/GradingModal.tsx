'use client';

import React, { useState, useEffect } from 'react';
import styles from './AssignmentsManagement.module.css';
import { SubmissionData } from './SubmissionsView';

import { downloadFile } from '@/utils/download';

interface GradingModalProps {
  submission: SubmissionData;
  maxScore: number;
  onSave: (id: string, score: number, feedback: string) => void;
  onClose: () => void;
}

export default function GradingModal({ submission, maxScore, onSave, onClose }: GradingModalProps) {
  const [score, setScore] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');

  useEffect(() => {
    if (submission.score != null) setScore(submission.score.toString());
    if (submission.feedback) setFeedback(submission.feedback);
  }, [submission]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(submission.id, Number(score), feedback);
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    const fileName = submission.fileName || submission.fileUrl.split('/').pop() || 'submission.pdf';
    downloadFile(submission.fileUrl.replace('/fl_attachment/', '/'), fileName);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={`${styles.modalContent} ${styles.modalContentSmall}`}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>Chấm điểm bài nộp</h3>
          <button className={styles.btnCloseModal} onClick={onClose} type="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className={styles.modalBody} style={{ paddingBottom: '0' }}>
          <div style={{ backgroundColor: '#f7f9fb', padding: '1rem', borderRadius: '0.5rem', marginBottom: '0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontWeight: 600 }}>{submission.studentName}</span>
              <span style={{ color: '#464555' }}>{submission.studentCode}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
              <span style={{ color: '#777587' }}>Nộp lúc: {submission.submittedAt}</span>
              {submission.status === 'late' && (
                <span style={{ color: '#dc2626', fontWeight: 500 }}>Nộp trễ</span>
              )}
            </div>
            
            <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" style={{ color: '#4f46e5' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
              <a 
                href={submission.fileUrl} 
                onClick={handleDownload}
                style={{ color: '#4f46e5', textDecoration: 'underline', fontSize: '0.875rem', fontWeight: 500, cursor: 'pointer' }}
              >
                {submission.fileName ? `Tải file: ${submission.fileName}` : 'Tải file đính kèm'}
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.modalBody}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>
                Điểm số (Tối đa: {maxScore}) *
              </label>
              <input 
                type="number" 
                className={styles.formInput} 
                value={score}
                onChange={(e) => setScore(e.target.value)}
                min={0}
                max={maxScore}
                step={0.1}
                required
                autoFocus
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Nhận xét (Feedback)</label>
              <textarea 
                className={styles.formTextarea} 
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Nhập nhận xét cho sinh viên..."
              />
            </div>
          </div>

          <div className={styles.modalFooter}>
            <button type="button" className={styles.btnSecondary} onClick={onClose}>
              Hủy
            </button>
            <button type="submit" className={styles.btnPrimary}>
              Lưu điểm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
