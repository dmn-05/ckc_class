'use client';

import React from 'react';
import styles from './AdminClasses.module.css';

export type ClassStatus = 'dang_hoc' | 'da_tot_nghiep';

export interface ClassData {
  id: string;
  code: string; // ma_lop
  name: string; // ten_lop
  faculty: string; // khoa.ten_khoa
  enrollmentYear: string; // nam_nhap_hoc
  studentCount: number; // sinh_viens_count
  status: ClassStatus;
}

interface ClassCardProps {
  classItem: ClassData;
  onEdit: (classItem: ClassData) => void;
  onViewStats: (classId: string) => void;
  onManageStudents?: (classId: string) => void;
  onDelete: (classId: string) => void;
}

export default function ClassCard({ classItem, onEdit, onViewStats, onManageStudents, onDelete }: ClassCardProps) {
  let cardClass = styles.classCardPrimary;
  let iconClass = styles.classIconPrimary;
  let codeClass = styles.classCodePrimary;
  let statusText = 'Đang học';
  let statusClass = styles.statusActive;
  let statusIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  if (classItem.status === 'da_tot_nghiep') {
    cardClass = styles.classCardCompleted;
    iconClass = styles.classIconCompleted;
    codeClass = styles.classCodeCompleted;
    statusText = 'Đã tốt nghiệp';
    statusClass = styles.statusCompleted;
    statusIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    );
  }

  return (
    <div className={`${styles.glassCard} ${styles.classCard} ${cardClass}`}>
      <div className={styles.classCardLeft}>
        <div className={`${styles.classIconBox} ${iconClass}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="32" height="32">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>

        <div className={styles.classInfo}>
          <div className={styles.classTitleRow}>
            <h4 className={styles.classTitle}>{classItem.name}</h4>
            <span className={`${styles.classCodeBadge} ${codeClass}`}>{classItem.code}</span>
          </div>

          <div className={styles.classDetailsRow}>
            <div className={styles.detailItem}>
              <svg className={styles.detailIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              {classItem.studentCount} SV
            </div>

            <div className={styles.detailItem}>
              <svg className={styles.detailIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              {classItem.faculty}
            </div>

            <div className={styles.detailItem}>
              <svg className={styles.detailIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Khóa {classItem.enrollmentYear}
            </div>

            <div className={`${styles.statusLabel} ${statusClass}`}>
              {statusIcon}
              {statusText}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.classCardRight}>
        {onManageStudents && (
          <button
            className={`${styles.btnActionSmall} ${styles.btnActionSecondary}`}
            title="Thêm & Quản lý sinh viên trong lớp"
            onClick={() => onManageStudents(classItem.id)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>
        )}
        <button
          className={`${styles.btnActionSmall} ${styles.btnActionStats}`}
          title="Xem thống kê"
          onClick={() => onViewStats(classItem.id)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </button>
        <button
          className={styles.btnActionSmall}
          title="Chỉnh sửa"
          onClick={() => onEdit(classItem)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </button>
        <button
          className={`${styles.btnActionSmall} ${styles.btnActionDelete}`}
          title="Xóa"
          onClick={() => onDelete(classItem.id)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
}
