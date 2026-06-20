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
}

interface QuizCardProps {
  quiz: QuizData;
  onStart: (id: string) => void;
  onViewResult: (id: string) => void;
}

export default function QuizCard({ quiz, onStart, onViewResult }: QuizCardProps) {
  const isCompleted = quiz.status === 'completed';

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
      
      <div className={`${styles.cardBody} ${isCompleted ? styles.cardBodyCompleted : ''}`}>
        {!isCompleted ? (
          <>
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
              <div className={styles.infoItem}>
                <svg className={styles.infoIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className={styles.infoText}>Trạng thái: Đã mở</span>
              </div>
            </div>
            
            <button className={styles.btnStart} onClick={() => onStart(quiz.id)}>
              Bắt đầu làm bài
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </button>
          </>
        ) : (
          <>
            <div className={styles.completedScoreBox}>
              <span className={styles.scoreLabel}>Điểm: {Number(quiz.lastScore?.toFixed(1) || 0)}/10</span>
              <span className={styles.scoreDate}>{quiz.lastDate}</span>
            </div>
            
            <button className={styles.btnViewResult} onClick={() => onViewResult(quiz.id)}>
              Xem kết quả
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
