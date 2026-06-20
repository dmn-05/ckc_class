'use client';

import React from 'react';
import styles from './AssignmentsManagement.module.css';

export type AssignmentStatus = 'open' | 'grading' | 'closed' | 'draft';

export interface AssignmentData {
  id: string;
  title: string;
  description: string;
  instructions: string;
  maxScore: number;
  dueDate: string;
  allowLate: boolean;
  latePenaltyPct: number;
  isPublished: boolean;
  sectionId: string;
  sectionName: string;
  status: AssignmentStatus;
  stats: {
    submitted: number;
    total: number;
    needsGrading: number;
  };
}

interface AssignmentGridProps {
  assignments: AssignmentData[];
  onEdit: (assignment: AssignmentData) => void;
  onDelete: (id: string) => void;
  onViewSubmissions: (assignment: AssignmentData) => void;
}

export default function AssignmentGrid({
  assignments,
  onEdit,
  onDelete,
  onViewSubmissions
}: AssignmentGridProps) {

  const getStatusDisplay = (status: AssignmentStatus, isPublished: boolean) => {
    if (!isPublished) return { label: 'Bản nháp', className: `${styles.statusBadge} bg-gray-100 text-gray-600` };
    switch (status) {
      case 'open': return { label: 'Đang mở', className: `${styles.statusBadge} bg-green-100 text-green-700` };
      case 'grading': return { label: 'Chờ chấm điểm', className: `${styles.statusBadge} bg-orange-100 text-orange-700` };
      case 'closed': return { label: 'Đã kết thúc', className: `${styles.statusBadge} bg-gray-100 text-gray-600` };
      default: return { label: 'Đang mở', className: `${styles.statusBadge} bg-green-100 text-green-700` };
    }
  };

  const getSectionTagStyle = (sectionId: string) => {
    // Generate a consistent color based on sectionId length or hash
    const tagStyles = [
      `${styles.cardTag} ${styles.tagBlue}`,
      `${styles.cardTag} ${styles.tagPurple}`,
      `${styles.cardTag} ${styles.tagGreen}`,
      `${styles.cardTag} ${styles.tagOrange}`,
    ];
    const index = sectionId.length % tagStyles.length;
    return tagStyles[index];
  };

  if (assignments.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 1rem', color: '#777587', backgroundColor: '#fff', borderRadius: '0.75rem' }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48" style={{ margin: '0 auto 1rem', opacity: 0.5 }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
        <p>Không có bài tập nào được tìm thấy.</p>
      </div>
    );
  }

  return (
    <div className={styles.assignmentGrid}>
      {assignments.map(assignment => {
        const statusDisplay = getStatusDisplay(assignment.status, assignment.isPublished);
        const percent = assignment.stats.total > 0 
          ? Math.round((assignment.stats.submitted / assignment.stats.total) * 100) 
          : 0;
        const progressFillClass = percent === 100 ? styles.progressFillComplete : '';

        return (
          <div key={assignment.id} className={styles.assignmentCard}>
            <div className={styles.cardHeader}>
              <div className={getSectionTagStyle(assignment.sectionId)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                {assignment.sectionName}
              </div>
              <span className={statusDisplay.className}>{statusDisplay.label}</span>
            </div>
            
            <h4 
              className={styles.cardTitle} 
              onClick={() => onViewSubmissions(assignment)}
              title={assignment.title}
            >
              {assignment.title}
            </h4>
            
            <div className={styles.cardMeta}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Hạn nộp: {assignment.dueDate}
            </div>
            
            <div className={styles.cardFooter}>
              <div className={styles.progressInfo}>
                <span style={{ color: '#777587' }}>
                  {assignment.stats.submitted}/{assignment.stats.total} Sinh viên đã nộp
                </span>
                <span style={{ color: percent === 100 ? '#10b981' : '#4f46e5' }}>{percent}%</span>
              </div>
              <div className={styles.progressBar}>
                <div 
                  className={`${styles.progressFill} ${progressFillClass}`} 
                  style={{ width: `${percent}%` }}
                ></div>
              </div>
              
              <div className={styles.cardActions}>
                <button 
                  className="p-1 text-on-surface-variant hover:text-primary transition-colors" 
                  title="Xem bài nộp"
                  onClick={() => onViewSubmissions(assignment)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
                <button 
                  className="p-1 text-on-surface-variant hover:text-secondary-container transition-colors" 
                  title="Chỉnh sửa"
                  onClick={() => onEdit(assignment)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
                <button 
                  className="p-1 text-on-surface-variant hover:text-error transition-colors" 
                  title="Xóa"
                  onClick={() => onDelete(assignment.id)}
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
