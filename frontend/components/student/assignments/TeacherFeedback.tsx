'use client';

import React from 'react';
import styles from './AssignmentsManagement.module.css';
import { AssignmentData } from './AssignmentCard';

interface TeacherFeedbackProps {
  assignments: AssignmentData[];
  onResubmitClick: (id: string) => void;
}

export default function TeacherFeedback({ assignments, onResubmitClick }: TeacherFeedbackProps) {
  // Calculate GPA
  const gradedAssignments = assignments.filter(a => a.status === 'graded');
  const gpa = gradedAssignments.length > 0 
    ? (gradedAssignments.reduce((acc, curr) => acc + (curr.score || 0), 0) / gradedAssignments.length).toFixed(1)
    : 'N/A';
    
  const missingCount = assignments.filter(a => a.status === 'pending' || a.status === 'late').length;
  const completedCount = assignments.length - missingCount;
  const progressPercent = Math.round((completedCount / assignments.length) * 100) || 0;

  // Get the latest feedback
  const feedbackList = assignments.filter(a => a.feedback).sort((a, b) => {
    // Just a simple mock sort logic based on ID for now
    return b.id.localeCompare(a.id);
  });

  return (
    <>
      <div className={styles.progressCard}>
        <h3 className={styles.progressTitle}>Tiến độ bài tập kì này</h3>
        
        <div className={styles.progressHeader}>
          <span>Hoàn thành {completedCount}/{assignments.length} bài tập</span>
          <span style={{ fontWeight: 700 }}>{progressPercent}%</span>
        </div>
        <div className={styles.progressBarTrack}>
          <div className={styles.progressBarFill} style={{ width: `${progressPercent}%` }}></div>
        </div>
        
        <div className={styles.statsGrid}>
          <div className={styles.statBox}>
            <p className={styles.statValue}>{missingCount}</p>
            <p className={styles.statLabel}>Chưa nộp</p>
          </div>
          <div className={styles.statBox}>
            <p className={`${styles.statValue} ${styles.statValuePrimary}`}>{gpa}</p>
            <p className={styles.statLabel}>GPA hiện tại</p>
          </div>
        </div>
      </div>

      <div className={styles.feedbackCard}>
        <h3 className={styles.feedbackTitle}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" style={{ color: '#7e3000' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
          </svg>
          Phản hồi gần nhất
        </h3>
        
        {feedbackList.length === 0 ? (
          <p style={{ fontSize: '0.875rem', color: '#777587', fontStyle: 'italic', textAlign: 'center', padding: '1rem' }}>
            Chưa có phản hồi nào
          </p>
        ) : (
          <div className={styles.timeline}>
            <div className={styles.timelineLine}></div>
            {feedbackList.slice(0, 2).map((item, idx) => (
              <div key={item.id} className={styles.timelineItem} style={{ marginBottom: idx === 0 ? '1.5rem' : '0' }}>
                <div className={styles.timelineIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="14" height="14">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div className={styles.feedbackBubble}>
                  <div className={styles.feedbackHeader}>
                    <p className={styles.feedbackAuthor}>{item.feedbackAuthor}</p>
                    <p className={styles.feedbackTime}>{item.feedbackTime}</p>
                  </div>
                  <p className={styles.feedbackText}>"{item.feedback}"</p>
                  
                  <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(199, 196, 216, 0.3)' }}>
                    <button 
                      onClick={() => onResubmitClick(item.id)}
                      style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', backgroundColor: '#e6e8ea', borderRadius: '9999px', border: 'none', cursor: 'pointer' }}
                    >
                      Nộp lại bài tập này
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.resourcesBox}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
          <h3 className={styles.resourcesTitle}>Tài liệu tham khảo</h3>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>
        <p className={styles.resourcesText}>Cần hỗ trợ? Xem ngay bộ tài liệu hướng dẫn kỹ thuật do phòng đào tạo cung cấp.</p>
        <a href="/student/resources" className={styles.btnResource}>
          Truy cập ngay
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </>
  );
}
