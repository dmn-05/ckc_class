'use client';

import React from 'react';
import styles from './AssignmentsManagement.module.css';
import { AssignmentData } from './AssignmentCard';

interface AssignmentDetailProps {
  assignment: AssignmentData | null;
  onSubmitClick: () => void;
}

export default function AssignmentDetail({ assignment, onSubmitClick }: AssignmentDetailProps) {
  if (!assignment) {
    return (
      <div className={styles.detailCard} style={{ textAlign: 'center', padding: '4rem 2rem', color: '#777587' }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48" style={{ margin: '0 auto 1rem', opacity: 0.5 }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        <p>Chọn một bài tập trong danh sách để xem chi tiết</p>
      </div>
    );
  }

  const getStatusBadge = () => {
    switch (assignment.status) {
      case 'graded': return <span className={`${styles.statusBadge} ${styles.statusGraded}`}>Đã chấm điểm</span>;
      case 'submitted': return <span className={`${styles.statusBadge} ${styles.statusSubmitted}`}>Đã nộp</span>;
      case 'late': return <span className={`${styles.statusBadge} ${styles.statusLate}`}>Nộp muộn</span>;
      default: return <span className={`${styles.statusBadge} ${styles.statusPending}`}>Chưa nộp</span>;
    }
  };

  return (
    <div className={styles.detailCard}>
      <div className={styles.detailHeader}>
        <div className={styles.detailTitleArea}>
          <div className={styles.detailIconBox}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <div>
            <h3 className={styles.detailTitle}>{assignment.title}</h3>
            <p className={styles.detailDeadline}>Hạn nộp: {assignment.deadline}</p>
          </div>
        </div>
        {getStatusBadge()}
      </div>

      <div className={styles.sectionBox}>
        <h4 className={styles.sectionTitle}>
          <svg className={styles.sectionIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Mô tả bài tập
        </h4>
        <p className={styles.sectionContent}>{assignment.description}</p>
      </div>

      <div className={styles.sectionBox}>
        <h4 className={styles.sectionTitle}>
          <svg className={styles.sectionIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          Hướng dẫn thực hiện
        </h4>
        <ul className={styles.sectionContent} style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {assignment.instructions.map((inst, idx) => (
            <li key={idx}>{inst}</li>
          ))}
        </ul>
      </div>

      <div className={styles.detailFooter}>
        <div className={styles.scoreInfo}>
          <div>
            <p className={styles.scoreLabel}>Điểm tối đa</p>
            <p className={`${styles.scoreValue} ${styles.scoreValuePrimary}`}>{assignment.maxScore.toFixed(1)}</p>
          </div>
          <div>
            <p className={styles.scoreLabel}>Trọng số</p>
            <p className={styles.scoreValue}>{assignment.weight}</p>
          </div>
        </div>

        {assignment.status === 'pending' || assignment.status === 'late' ? (
          <button className={styles.btnSubmit} onClick={onSubmitClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Nộp bài tập
          </button>
        ) : (
          <button className={`${styles.btnSubmit} ${styles.btnResubmit}`} onClick={onSubmitClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Nộp lại bài
          </button>
        )}
      </div>
    </div>
  );
}
