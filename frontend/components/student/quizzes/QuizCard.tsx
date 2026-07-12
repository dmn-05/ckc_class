'use client';

import React from 'react';
import styles from './QuizzesManagement.module.css';

export interface QuizData {
  id: string;
  title: string;
  subjectName: string;
  durationMinutes: number;
  questionCount: number;
  attemptsUsed: number;
  maxAttempts: number;
  isPublished: boolean;
  status: 'pending' | 'completed';
  lastScore?: number;
  lastDate?: string;
  attemptHistory?: { score: number; date: string; status: string }[];
  startTime?: string;
  endTime?: string;
}

interface QuizCardProps {
  quiz: QuizData;
  onStart: (id: string) => void;
  onViewResult: (id: string) => void;
}

export default function QuizCard({ quiz, onStart, onViewResult }: QuizCardProps) {
  const isCompleted = quiz.status === 'completed';
  const now = new Date();
  const rawStart = quiz.startTime || (quiz as any).thoi_gian_bat_dau;
  const rawEnd = quiz.endTime || (quiz as any).thoi_gian_ket_thuc;
  const startTime = rawStart ? new Date(rawStart) : null;
  const endTime = rawEnd ? new Date(rawEnd) : null;
  const isNotStarted = startTime && now < startTime;
  const isEnded = endTime && now > endTime;
  const canTake = quiz.attemptsUsed < quiz.maxAttempts && !isNotStarted && !isEnded;
  const hasAttempt = quiz.attemptsUsed > 0;

  return (
    <div className={styles.quizCard}>
      <div className={`${styles.cardTopContainer} ${isCompleted ? styles.cardTopCompleted : (quiz.id === 'q1' ? styles.cardTopPrimary : styles.cardTopSecondary)}`}>
        {isCompleted ? (
          <span className={`${styles.subjectBadge} ${styles.subjectBadgeCompleted}`}>Đã hoàn thành</span>
        ) : (
          <span className={`${styles.subjectBadge} ${styles.subjectBadgePrimary}`}>{quiz.subjectName}</span>
        )}
        <h3 className={`${styles.cardTitle} ${isCompleted ? styles.cardTitleCompleted : styles.cardTitlePrimary}`}>
          {quiz.title}
        </h3>
      </div>
      
      <div className={`${styles.cardBody} ${hasAttempt && !canTake ? styles.cardBodyCompleted : ''}`}>
        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <svg className={styles.infoIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className={styles.infoText}>{quiz.durationMinutes} phút</span>
          </div>
          <div className={styles.infoItem}>
            <svg className={styles.infoIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className={styles.infoText}>{quiz.questionCount} câu hỏi</span>
          </div>
          <div className={styles.infoItem}>
            <svg className={styles.infoIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span className={styles.infoText}>Lượt làm: {quiz.attemptsUsed}/{quiz.maxAttempts}</span>
          </div>
        </div>
        
        {hasAttempt && (
          <div className={styles.completedScoreBox} style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            <span className={styles.scoreLabel}>Điểm mới nhất: {Number(quiz.lastScore?.toFixed(1) || 0)}/10</span>
            <span className={styles.scoreDate}>{quiz.lastDate}</span>
          </div>
        )}

        <div style={{ display: 'flex', gap: '0.75rem', flexDirection: 'column' }}>
          {isNotStarted && (
            <button className={styles.btnStart} disabled style={{ opacity: 0.65, cursor: 'not-allowed', backgroundColor: '#fef3c7', color: '#b45309', border: '1px solid #fde68a' }}>
              Chưa đến giờ mở ({startTime?.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })})
            </button>
          )}

          {canTake && (
            <button className={styles.btnStart} onClick={() => onStart(quiz.id)}>
              Bắt đầu làm bài
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </button>
          )}

          {hasAttempt && (
            <button 
              className={styles.btnViewResult} 
              onClick={() => onViewResult(quiz.id)}
              style={canTake ? { backgroundColor: '#f0f9ff', color: '#0284c7', border: '1px solid #bae6fd' } : undefined}
            >
              Xem kết quả
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
