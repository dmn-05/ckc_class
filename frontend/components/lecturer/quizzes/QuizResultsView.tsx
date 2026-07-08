'use client';

import React, { useState } from 'react';
import styles from './QuizzesManagement.module.css';
import { QuizData } from './QuizGrid';
import { exportToExcel, formatExportFileName } from '@/utils/exportExcel';

export type AttemptStatus = 'graded' | 'needs_grading';

export interface EssayAnswer {
  questionId: string;
  questionContent: string;
  answer: string;
  maxScore: number;
  score?: number;
}

export interface QuizAttempt {
  id: string;
  studentId: string;
  studentName: string;
  studentCode: string;
  attemptNumber: number;
  submittedAt: string;
  autoScore: number;
  essayScore: number;
  totalScore: number;
  status: AttemptStatus;
  essayAnswers?: EssayAnswer[];
}

interface QuizResultsViewProps {
  quiz: QuizData;
  attempts: QuizAttempt[];
  onBack: () => void;
  onGradeEssay: (attempt: QuizAttempt) => void;
}

export default function QuizResultsView({
  quiz,
  attempts,
  onBack,
  onGradeEssay
}: QuizResultsViewProps) {
  
  const handleExport = () => {
    const data = attempts.map((attempt, index) => ({
      'STT': index + 1,
      'Mã sinh viên': attempt.studentCode || '',
      'Họ và tên': attempt.studentName || '',
      'Lần làm bài': attempt.attemptNumber,
      'Thời gian nộp': attempt.submittedAt || '',
      'Trạng thái': attempt.status === 'graded' ? 'Đã chấm' : 'Chờ chấm tự luận',
      'Điểm trắc nghiệm': attempt.autoScore ?? 0,
      'Điểm tự luận': attempt.essayScore ?? 0,
      'Tổng điểm': `${attempt.totalScore ?? 0} / ${quiz.maxScore || 10}`,
      'Điểm chuẩn hóa': attempt.totalScore ?? 0,
    }));
    const fileName = formatExportFileName('Bang_diem', quiz.title || 'Quiz');
    exportToExcel(data, fileName, 'Kết quả kiểm tra');
  };

  const getStatusBadge = (status: AttemptStatus) => {
    switch (status) {
      case 'graded': return <span style={{ color: '#059669', backgroundColor: '#ecfdf5', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontWeight: 600, fontSize: '0.75rem' }}>Đã chấm</span>;
      case 'needs_grading': return <span style={{ color: '#d97706', backgroundColor: '#fffbeb', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontWeight: 600, fontSize: '0.75rem' }}>Chờ chấm tự luận</span>;
      default: return null;
    }
  };

  return (
    <div style={{ animation: 'modalIn 0.3s ease-out' }}>
      <button onClick={onBack} className={styles.btnSecondary} style={{ marginBottom: '1.5rem' }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Quay lại danh sách
      </button>

      <div className={styles.pageHeader}>
        <div>
          <h2 className={styles.pageTitle}>Kết quả: {quiz.title}</h2>
          <p className={styles.pageSubtitle}>
            Lớp HP: {quiz.sectionName} • Điểm tối đa: {quiz.maxScore}
          </p>
        </div>
        
        <button className={styles.btnSecondary} onClick={handleExport}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Xuất bảng điểm
        </button>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Sinh viên</th>
              <th className={styles.th}>Mã SV</th>
              <th className={styles.th}>Lần làm bài</th>
              <th className={styles.th}>Thời gian nộp</th>
              <th className={styles.th}>Trạng thái</th>
              <th className={styles.th}>Điểm tự động</th>
              <th className={styles.th}>Tổng điểm</th>
              <th className={styles.th} style={{ textAlign: 'right' }}>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {attempts.map(attempt => (
              <tr key={attempt.id} className={styles.tr}>
                <td className={styles.td}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: '#4f46e5', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: '0.75rem' }}>
                      {attempt.studentName.charAt(0)}
                    </div>
                    <span style={{ fontWeight: 500 }}>{attempt.studentName}</span>
                  </div>
                </td>
                <td className={styles.td}>{attempt.studentCode}</td>
                <td className={styles.td}>{attempt.attemptNumber}</td>
                <td className={styles.td}>{attempt.submittedAt}</td>
                <td className={styles.td}>{getStatusBadge(attempt.status)}</td>
                <td className={styles.td} style={{ color: '#777587' }}>{attempt.autoScore}</td>
                <td className={styles.td}>
                  <span style={{ fontWeight: 600, color: '#4f46e5' }}>
                    {attempt.totalScore} / {quiz.maxScore}
                  </span>
                </td>
                <td className={styles.td} style={{ textAlign: 'right' }}>
                  {attempt.status === 'needs_grading' ? (
                    <button 
                      style={{ background: '#4f46e5', color: 'white', border: 'none', padding: '0.25rem 0.5rem', borderRadius: '0.375rem', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}
                      onClick={() => onGradeEssay(attempt)}
                    >
                      Chấm tự luận
                    </button>
                  ) : (
                    <button 
                      style={{ background: 'transparent', color: '#464555', border: '1px solid #c7c4d8', padding: '0.25rem 0.5rem', borderRadius: '0.375rem', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}
                      onClick={() => onGradeEssay(attempt)}
                    >
                      Sửa điểm
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {attempts.length === 0 && (
              <tr>
                <td colSpan={8} style={{ textAlign: 'center', padding: '2rem', color: '#777587' }}>
                  Chưa có sinh viên nào nộp bài.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
