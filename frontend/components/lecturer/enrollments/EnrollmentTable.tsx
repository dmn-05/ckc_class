'use client';

import React from 'react';
import styles from './EnrollmentsManagement.module.css';

export type EnrollmentStatus = 'pending' | 'enrolled' | 'dropped' | 'completed';

export interface EnrollmentData {
  id: string;
  studentId: string;
  studentName: string;
  sectionCode: string;
  sectionName: string;
  enrollmentDate: string;
  status: EnrollmentStatus;
  finalScore: number | null;
}

interface EnrollmentTableProps {
  enrollments: EnrollmentData[];
  searchTerm: string;
  onSearchChange: (term: string) => void;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
  onOpenScoreModal: (enrollment: EnrollmentData) => void;
}

export default function EnrollmentTable({
  enrollments,
  searchTerm,
  onSearchChange,
  activeFilter,
  onFilterChange,
  onApprove,
  onReject,
  onOpenScoreModal
}: EnrollmentTableProps) {
  
  const getAvatarBg = (id: string) => {
    const sum = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const mod = sum % 3;
    if (mod === 0) return styles.avatarBgPrimary;
    if (mod === 1) return styles.avatarBgSecondary;
    return styles.avatarBgTertiary;
  };

  const getInitials = (name: string) => {
    const parts = name.split(' ');
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  return (
    <div className={styles.tableContainer}>
      <div className={styles.filterBar}>
        <div className={styles.searchBox}>
          <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text"
            className={styles.searchInput}
            placeholder="Tìm mã sinh viên, tên lớp HP..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <div className={styles.filterTags}>
          <button 
            className={`${styles.filterTag} ${activeFilter === 'all' ? styles.filterTagActive : ''}`}
            onClick={() => onFilterChange('all')}
          >Tất cả</button>
          <button 
            className={`${styles.filterTag} ${activeFilter === 'pending' ? styles.filterTagActive : ''}`}
            onClick={() => onFilterChange('pending')}
          >Đang chờ</button>
          <button 
            className={`${styles.filterTag} ${activeFilter === 'enrolled' ? styles.filterTagActive : ''}`}
            onClick={() => onFilterChange('enrolled')}
          >Đã duyệt (Đang học)</button>
          <button 
            className={`${styles.filterTag} ${activeFilter === 'completed' ? styles.filterTagActive : ''}`}
            onClick={() => onFilterChange('completed')}
          >Đã hoàn thành</button>
          <button 
            className={`${styles.filterTag} ${activeFilter === 'dropped' ? styles.filterTagActive : ''}`}
            onClick={() => onFilterChange('dropped')}
          >Đã hủy</button>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead className={styles.tableHeader}>
            <tr>
              <th>Sinh Viên</th>
              <th>Lớp Học Phần</th>
              <th>Ngày Đăng Ký</th>
              <th>Điểm Số</th>
              <th style={{ textAlign: 'center' }}>Trạng Thái</th>
              <th style={{ textAlign: 'right' }}>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {enrollments.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '3rem', color: '#777587' }}>
                  Không tìm thấy lượt đăng ký nào.
                </td>
              </tr>
            ) : enrollments.map(enrollment => {
              
              let badgeClass = '';
              let badgeText = '';
              
              switch(enrollment.status) {
                case 'enrolled': badgeClass = styles.badgeEnrolled; badgeText = 'Đang học'; break;
                case 'pending': badgeClass = styles.badgePending; badgeText = 'Đang chờ'; break;
                case 'dropped': badgeClass = styles.badgeDropped; badgeText = 'Đã hủy'; break;
                case 'completed': badgeClass = styles.badgeCompleted; badgeText = 'Hoàn thành'; break;
              }

              let scoreClass = styles.scoreNone;
              let scoreText = '-';
              if (enrollment.finalScore !== null) {
                const score = enrollment.finalScore;
                scoreText = score.toFixed(1);
                if (score >= 8.0) scoreClass = styles.scoreHigh;
                else if (score >= 5.0) scoreClass = styles.scoreMedium;
                else scoreClass = styles.scoreLow;
              }

              return (
                <tr key={enrollment.id} className={styles.tableRow}>
                  <td className={styles.tableCell}>
                    <div className={styles.studentInfo}>
                      <div className={`${styles.studentAvatar} ${getAvatarBg(enrollment.studentId)}`}>
                        {getInitials(enrollment.studentName)}
                      </div>
                      <div>
                        <p className={styles.studentName}>{enrollment.studentName}</p>
                        <p className={styles.studentCode}>{enrollment.studentId}</p>
                      </div>
                    </div>
                  </td>
                  <td className={styles.tableCell}>
                    <p className={styles.cellPrimaryText}>{enrollment.sectionName}</p>
                    <p className={styles.cellSecondaryText}>{enrollment.sectionCode}</p>
                  </td>
                  <td className={styles.tableCell}>
                    <span className={styles.cellPrimaryText}>{enrollment.enrollmentDate}</span>
                  </td>
                  <td className={styles.tableCell}>
                    <span className={`${styles.scoreDisplay} ${scoreClass}`}>{scoreText}</span>
                  </td>
                  <td className={styles.tableCell} style={{ textAlign: 'center' }}>
                    <div className={`${styles.badge} ${badgeClass}`}>
                      <span className={styles.badgeDot}></span>
                      {badgeText}
                    </div>
                  </td>
                  <td className={styles.tableCell}>
                    <div className={styles.actionGroup}>
                      {enrollment.status === 'pending' && (
                        <>
                          <button className={`${styles.btnActionOutline} ${styles.btnApprove}`} onClick={() => onApprove(enrollment.id)}>
                            Duyệt
                          </button>
                          <button className={`${styles.btnActionOutline} ${styles.btnReject}`} onClick={() => onReject(enrollment.id)}>
                            Hủy
                          </button>
                        </>
                      )}
                      
                      {(enrollment.status === 'enrolled' || enrollment.status === 'completed') && (
                        <button className={`${styles.btnActionOutline} ${styles.btnScore}`} onClick={() => onOpenScoreModal(enrollment)}>
                          Nhập Điểm
                        </button>
                      )}
                      
                      <button className={styles.btnIcon} title="Tùy chọn khác">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
