'use client';

import React, { useState, useEffect } from 'react';
import styles from './QuizzesManagement.module.css';
import { QuizAttempt, EssayAnswer } from './QuizResultsView';

interface EssayGradingModalProps {
  attempt: QuizAttempt;
  onSave: (attemptId: string, updatedAnswers: EssayAnswer[], essayScore: number) => void;
  onClose: () => void;
}

export default function EssayGradingModal({ attempt, onSave, onClose }: EssayGradingModalProps) {
  const [answers, setAnswers] = useState<EssayAnswer[]>([]);

  useEffect(() => {
    if (attempt.essayAnswers) {
      setAnswers([...attempt.essayAnswers]);
    }
  }, [attempt]);

  const handleScoreChange = (questionId: string, val: string) => {
    const numVal = val === '' ? 0 : Number(val);
    setAnswers(prev => prev.map(a => 
      a.questionId === questionId ? { ...a, score: numVal } : a
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const totalEssayScore = answers.reduce((sum, a) => sum + (a.score || 0), 0);
    onSave(attempt.id, answers, totalEssayScore);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={`${styles.modalContent} ${styles.modalContentLarge}`}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>Chấm tự luận: {attempt.studentName}</h3>
          <button className={styles.btnCloseModal} onClick={onClose} type="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div className={styles.modalBody}>
            <div style={{ backgroundColor: '#f7f9fb', padding: '1rem', borderRadius: '0.5rem', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontWeight: 600 }}>{attempt.studentName}</span> ({attempt.studentCode})
              </div>
              <div>
                Điểm trắc nghiệm tự động: <span style={{ fontWeight: 600, color: '#4f46e5' }}>{attempt.autoScore}</span>
              </div>
            </div>

            {answers.length === 0 ? (
              <p style={{ textAlign: 'center', color: '#777587', padding: '2rem' }}>Bài làm này không có câu hỏi tự luận nào.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {answers.map((ans, idx) => (
                  <div key={ans.questionId} style={{ border: '1px solid #e0e3e5', borderRadius: '0.75rem', padding: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <h4 style={{ margin: 0, fontWeight: 600, color: '#191c1e', flex: 1 }}>Câu {idx + 1}: {ans.questionContent}</h4>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#eef2ff', padding: '0.5rem', borderRadius: '0.5rem', marginLeft: '1rem' }}>
                        <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#4f46e5' }}>Điểm:</span>
                        <input 
                          type="number" 
                          min={0} max={ans.maxScore} step={0.5}
                          value={ans.score ?? ''}
                          onChange={(e) => handleScoreChange(ans.questionId, e.target.value)}
                          style={{ width: '60px', padding: '0.25rem', border: '1px solid #c7c4d8', borderRadius: '0.25rem', textAlign: 'center', fontWeight: 600 }}
                          required
                        />
                        <span style={{ fontSize: '0.875rem', color: '#777587' }}>/ {ans.maxScore}</span>
                      </div>
                    </div>
                    
                    <div style={{ backgroundColor: '#f9fafb', padding: '1rem', borderLeft: '4px solid #c7c4d8', borderRadius: '0.25rem' }}>
                      <p style={{ fontSize: '0.75rem', color: '#777587', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Bài làm của sinh viên:</p>
                      <p style={{ whiteSpace: 'pre-wrap', margin: 0, color: '#191c1e', lineHeight: 1.6 }}>{ans.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={styles.modalFooter}>
            <button type="button" className={styles.btnSecondary} onClick={onClose}>Hủy</button>
            <button type="submit" className={styles.btnPrimary} disabled={answers.length === 0}>Lưu Điểm Tự Luận</button>
          </div>
        </form>
      </div>
    </div>
  );
}
