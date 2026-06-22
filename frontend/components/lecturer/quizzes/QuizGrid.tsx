'use client';

import React from 'react';
import styles from './QuizzesManagement.module.css';

export type QuizStatus = 'open' | 'closed' | 'draft';

export interface QuizData {
  id: string;
  title: string;
  description: string;
  timeLimit: number; // minutes
  maxScore: number;
  maxAttempts: number;
  startTime: string;
  endTime: string;
  shuffleQuestions: boolean;
  shuffleOptions: boolean;
  showResultAfter: boolean;
  isPublished: boolean;
  sectionId: string;
  sectionName: string;
  status: QuizStatus;
  stats: {
    totalStudents: number;
    completed: number;
  };
}

interface QuizGridProps {
  quizzes: QuizData[];
  onEditSettings: (quiz: QuizData) => void;
  onManageQuestions: (quiz: QuizData) => void;
  onViewResults: (quiz: QuizData) => void;
  onDelete: (id: string) => void;
}

export default function QuizGrid({
  quizzes,
  onEditSettings,
  onManageQuestions,
  onViewResults,
  onDelete
}: QuizGridProps) {
  
  const getStatusDisplay = (status: QuizStatus, isPublished: boolean) => {
    if (!isPublished) return { label: 'Bản nháp', className: `${styles.statusBadge} bg-gray-100 text-gray-600` };
    switch (status) {
      case 'open': return { label: 'Đang mở', className: `${styles.statusBadge} bg-green-100 text-green-700` };
      case 'closed': return { label: 'Đã đóng', className: `${styles.statusBadge} bg-red-100 text-red-700` };
      default: return { label: 'Đang mở', className: `${styles.statusBadge} bg-green-100 text-green-700` };
    }
  };

  const getSectionTagStyle = (sectionId: string) => {
    const tagStyles = [
      `${styles.cardTag} ${styles.tagBlue}`,
      `${styles.cardTag} ${styles.tagPurple}`,
      `${styles.cardTag} ${styles.tagGreen}`,
      `${styles.cardTag} ${styles.tagOrange}`,
    ];
    const index = sectionId.length % tagStyles.length;
    return tagStyles[index];
  };

  if (quizzes.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 1rem', color: '#777587', backgroundColor: '#fff', borderRadius: '0.75rem' }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48" style={{ margin: '0 auto 1rem', opacity: 0.5 }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <p>Không có bài kiểm tra nào được tìm thấy.</p>
      </div>
    );
  }

  return (
    <div className={styles.quizGrid}>
      {quizzes.map(quiz => {
        const statusDisplay = getStatusDisplay(quiz.status, quiz.isPublished);

        return (
          <div key={quiz.id} className={styles.quizCard}>
            <div className={styles.cardHeader}>
              <div className={getSectionTagStyle(quiz.sectionId)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                {quiz.sectionName}
              </div>
              <span className={statusDisplay.className}>{statusDisplay.label}</span>
            </div>
            
            <h4 
              className={styles.cardTitle} 
              onClick={() => onManageQuestions(quiz)}
              title={quiz.title}
            >
              {quiz.title}
            </h4>
            
            <div className={styles.cardMeta} style={{ marginBottom: '0.25rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Thời gian: {quiz.timeLimit} phút
            </div>

            <div className={styles.cardMeta} style={{ marginBottom: '1rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Đóng: {quiz.endTime}
            </div>
            
            <div className={styles.cardFooter}>
              <div style={{ fontSize: '0.875rem', color: '#464555', fontWeight: 500 }}>
                Đã nộp: <span style={{ color: '#4f46e5' }}>{quiz.stats.completed}/{quiz.stats.totalStudents}</span>
              </div>
              
              <div className={styles.cardActions}>
                <button 
                  className={styles.iconBtn}
                  title="Xem kết quả"
                  onClick={() => onViewResults(quiz)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </button>
                <button 
                  className={styles.iconBtn}
                  title="Soạn câu hỏi"
                  onClick={() => onManageQuestions(quiz)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </button>
                <button 
                  className={styles.iconBtn}
                  title="Cài đặt"
                  onClick={() => onEditSettings(quiz)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
                <button 
                  className={`${styles.iconBtn} ${styles.iconBtnDanger}`}
                  title="Xóa"
                  onClick={() => onDelete(quiz.id)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
