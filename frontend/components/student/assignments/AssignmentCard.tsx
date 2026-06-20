'use client';

import React from 'react';
import styles from './AssignmentsManagement.module.css';

export interface AssignmentData {
  id: string;
  title: string;
  status: 'pending' | 'submitted' | 'graded' | 'late';
  deadline: string;
  submittedAt?: string;
  score?: number;
  maxScore: number;
  weight: string;
  description: string;
  instructions: string[];
  feedback?: string;
  feedbackAuthor?: string;
  feedbackTime?: string;
  fileName?: string;
}

interface AssignmentCardProps {
  assignment: AssignmentData;
  onClick: () => void;
}

export default function AssignmentCard({ assignment, onClick }: AssignmentCardProps) {
  const getStatusBadge = () => {
    switch (assignment.status) {
      case 'graded': return <span className={`${styles.cardBadge} ${styles.statusGraded}`}>Đã chấm điểm</span>;
      case 'submitted': return <span className={`${styles.cardBadge} ${styles.statusSubmitted}`}>Đã nộp</span>;
      case 'late': return <span className={`${styles.cardBadge} ${styles.statusLate}`}>Nộp muộn</span>;
      default: return <span className={`${styles.cardBadge} ${styles.statusPending}`}>Chưa nộp</span>;
    }
  };

  return (
    <div className={styles.assignmentCard} onClick={onClick}>
      <div className={styles.cardHeader}>
        {getStatusBadge()}
      </div>
      <h4 className={styles.cardTitle}>{assignment.title}</h4>
      
      {assignment.status === 'graded' && (
        <p className={styles.cardSubtitle}>Đã nộp ngày: {assignment.submittedAt}</p>
      )}
      {assignment.status === 'submitted' && (
        <p className={styles.cardSubtitle}>Đang chờ chấm điểm...</p>
      )}
      {assignment.status === 'late' && (
        <p className={styles.cardSubtitle} style={{ color: '#93000a' }}>Trễ hạn</p>
      )}
      {assignment.status === 'pending' && (
        <p className={styles.cardSubtitle}>Hạn nộp: {assignment.deadline}</p>
      )}
      
      <div className={styles.cardFooter}>
        {assignment.status === 'graded' ? (
          <div>
            <p className={styles.cardFooterLabel}>Kết quả</p>
            <p className={`${styles.cardFooterValue} ${styles.scoreValuePrimary}`}>{assignment.score} / {assignment.maxScore}</p>
          </div>
        ) : assignment.status === 'late' && assignment.score !== undefined ? (
          <div>
            <p className={styles.cardFooterLabel}>Điểm</p>
            <p className={styles.cardFooterValue}>{assignment.score} / {assignment.maxScore}</p>
          </div>
        ) : assignment.status === 'submitted' ? (
          <div>
            <p className={styles.cardFooterLabel}>File đã nộp</p>
            <p className={styles.cardFooterValue} style={{ fontSize: '0.875rem', fontWeight: 600 }}>{assignment.fileName}</p>
          </div>
        ) : (
          <div>
            <p className={styles.cardFooterLabel}>Điểm tối đa</p>
            <p className={styles.cardFooterValue}>{assignment.maxScore}</p>
          </div>
        )}
        
        <div className={styles.cardAction}>
          Chi tiết
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
