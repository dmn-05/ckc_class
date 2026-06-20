'use client';

import React, { useState } from 'react';
import styles from './AssignmentsManagement.module.css';
import { AssignmentData } from './AssignmentGrid';

export type SubmissionStatus = 'missing' | 'submitted' | 'late' | 'graded' | 'returned';

export interface SubmissionData {
  id: string;
  studentId: string;
  studentName: string;
  studentCode: string;
  submittedAt: string;
  fileUrl: string;
  status: SubmissionStatus;
  score?: number;
  feedback?: string;
}

interface SubmissionsViewProps {
  assignment: AssignmentData;
  submissions: SubmissionData[];
  onBack: () => void;
  onGrade: (submission: SubmissionData) => void;
  onReturnBulk: (submissionIds: string[]) => void;
}

export default function SubmissionsView({
  assignment,
  submissions,
  onBack,
  onGrade,
  onReturnBulk
}: SubmissionsViewProps) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const getStatusBadge = (status: SubmissionStatus) => {
    switch (status) {
      case 'submitted': return <span className={styles.statusSubmitted}>Đã nộp</span>;
      case 'late': return <span className={styles.statusLate}>Nộp trễ</span>;
      case 'graded': return <span className={styles.statusGraded}>Đã chấm</span>;
      case 'returned': return <span className={styles.statusReturned}>Đã trả</span>;
      case 'missing': return <span className={styles.statusMissing}>Chưa nộp</span>;
      default: return null;
    }
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const allIds = submissions.filter(s => s.status === 'graded').map(s => s.id);
      setSelectedIds(new Set(allIds));
    } else {
      setSelectedIds(new Set());
    }
  };

  const handleSelectOne = (id: string, checked: boolean) => {
    const newSet = new Set(selectedIds);
    if (checked) {
      newSet.add(id);
    } else {
      newSet.delete(id);
    }
    setSelectedIds(newSet);
  };

  const handleReturnAction = () => {
    if (selectedIds.size > 0) {
      onReturnBulk(Array.from(selectedIds));
      setSelectedIds(new Set());
    }
  };

  const gradableCount = submissions.filter(s => s.status === 'graded').length;

  return (
    <div style={{ animation: 'modalIn 0.3s ease-out' }}>
      <button 
        onClick={onBack} 
        className={styles.btnSecondary}
        style={{ marginBottom: '1.5rem' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Quay lại danh sách
      </button>

      <div className={styles.pageHeader}>
        <div>
          <h2 className={styles.pageTitle}>{assignment.title}</h2>
          <p className={styles.pageSubtitle}>
            Hạn nộp: {assignment.dueDate} • Điểm tối đa: {assignment.maxScore}
          </p>
        </div>
        
        <button 
          className={styles.btnPrimary} 
          onClick={handleReturnAction}
          disabled={selectedIds.size === 0}
          style={{ opacity: selectedIds.size === 0 ? 0.5 : 1, cursor: selectedIds.size === 0 ? 'not-allowed' : 'pointer' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
          </svg>
          Trả bài ({selectedIds.size})
        </button>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th} style={{ width: '40px' }}>
                <input 
                  type="checkbox" 
                  checked={selectedIds.size > 0 && selectedIds.size === gradableCount}
                  onChange={handleSelectAll}
                  disabled={gradableCount === 0}
                  style={{ cursor: 'pointer' }}
                />
              </th>
              <th className={styles.th}>Sinh viên</th>
              <th className={styles.th}>Mã SV</th>
              <th className={styles.th}>Thời gian nộp</th>
              <th className={styles.th}>Trạng thái</th>
              <th className={styles.th}>Điểm số</th>
              <th className={styles.th} style={{ textAlign: 'right' }}>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map(sub => (
              <tr key={sub.id} className={styles.tr}>
                <td className={styles.td}>
                  <input 
                    type="checkbox"
                    checked={selectedIds.has(sub.id)}
                    onChange={(e) => handleSelectOne(sub.id, e.target.checked)}
                    disabled={sub.status !== 'graded'}
                    style={{ cursor: sub.status === 'graded' ? 'pointer' : 'not-allowed' }}
                  />
                </td>
                <td className={styles.td}>
                  <div className={styles.studentProfile}>
                    <div className={styles.studentAvatar}>
                      {sub.studentName.charAt(0)}
                    </div>
                    <span style={{ fontWeight: 500 }}>{sub.studentName}</span>
                  </div>
                </td>
                <td className={styles.td}>{sub.studentCode}</td>
                <td className={styles.td}>{sub.submittedAt || '-'}</td>
                <td className={styles.td}>{getStatusBadge(sub.status)}</td>
                <td className={styles.td}>
                  {sub.score !== undefined ? (
                    <span style={{ fontWeight: 600, color: '#4f46e5' }}>
                      {sub.score}/{assignment.maxScore}
                    </span>
                  ) : '-'}
                </td>
                <td className={styles.td} style={{ textAlign: 'right' }}>
                  {sub.status !== 'missing' && sub.status !== 'returned' && (
                    <button 
                      className={sub.status === 'graded' ? styles.actionBtn : styles.actionBtnPrimary}
                      onClick={() => onGrade(sub)}
                    >
                      {sub.status === 'graded' ? 'Sửa điểm' : 'Chấm điểm'}
                    </button>
                  )}
                  {sub.status === 'returned' && (
                    <span style={{ fontSize: '0.875rem', color: '#777587' }}>Đã hoàn tất</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
