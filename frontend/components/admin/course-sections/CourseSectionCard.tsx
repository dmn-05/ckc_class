'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import styles from './AdminCourseSections.module.css';

export type CourseSectionStatus = 'dang_mo' | 'da_khoa' | 'da_ket_thuc';

export interface CourseSectionData {
  id: string;
  code: string;
  name: string;
  subjectName: string;
  lecturerName: string;
  lecturerNames?: string[];
  giang_vien_ids?: string[];
  semester: string;
  academicYear: string;
  faculty: string;
  maxStudents: number;
  enrolledStudents?: number;
  status: CourseSectionStatus;
}

interface CourseSectionCardProps {
  section: CourseSectionData;
  onEdit: (section: CourseSectionData) => void;
  onViewStats: (sectionId: string) => void;
  onManageStudents?: (sectionId: string) => void;
  onDelete: (sectionId: string) => void;
  hideDelete?: boolean;
  hideEdit?: boolean;
  hideManageStudents?: boolean;
  onViewDetail?: (sectionId: string) => void;
  onArchive?: (sectionId: string, currentStatus: CourseSectionStatus) => void;
}

export default function CourseSectionCard({ section, onEdit, onViewStats, onManageStudents, onDelete, hideDelete, hideEdit, hideManageStudents, onViewDetail, onArchive }: CourseSectionCardProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleCardClick = () => {
    if (pathname?.startsWith('/lecturer')) {
      router.push(`/lecturer/sections/${section.id}`);
    } else if (pathname?.startsWith('/admin')) {
      router.push(`/admin/course-sections/${section.id}`);
    }
  };

  let statusClass = '';
  let statusText = '';
  let cardClass = '';
  let iconClass = '';
  let codeClass = '';
  let statusIcon = null;

  if (section.status === 'dang_mo') {
    cardClass = styles.classCardPrimary;
    iconClass = styles.classIconPrimary;
    statusClass = styles.statusPrimary;
    statusText = 'Đang mở';
    codeClass = styles.codePrimary;
    statusIcon = (
      <span className={styles.statusDot} style={{ backgroundColor: '#2e7d32' }} />
    );
  } else if (section.status === 'da_khoa') {
    cardClass = styles.classCardWarning;
    iconClass = styles.classIconWarning;
    statusClass = styles.statusWarning;
    statusText = 'Đã khóa';
    codeClass = styles.codeWarning;
    statusIcon = (
      <span className={styles.statusDot} style={{ backgroundColor: '#ed6c02' }} />
    );
  } else {
    cardClass = styles.classCardNeutral;
    iconClass = styles.classIconNeutral;
    statusClass = styles.statusNeutral;
    statusText = 'Đã kết thúc';
    codeClass = styles.codeNeutral;
    statusIcon = (
      <span className={styles.statusDot} style={{ backgroundColor: '#475569' }} />
    );
  }

  return (
    <div className={`${styles.glassCard} ${styles.classCard} ${cardClass}`}>
      <div className={styles.classCardLeft} onClick={handleCardClick} style={{ cursor: 'pointer' }} title="Bấm để vào lớp học phần">
        <div className={`${styles.classIconBox} ${iconClass}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="32" height="32">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>

        <div className={styles.classInfo}>
          <div className={styles.classTitleRow}>
            <h4 className={styles.classTitle} style={{ color: 'var(--color-primary)' }}>{section.name || section.subjectName}</h4>
            <span className={`${styles.classCodeBadge} ${codeClass}`}>{section.code}</span>
          </div>
          
          <div className={styles.classDetailsRow}>
            <div className={styles.detailItem} title={section.lecturerNames && section.lecturerNames.length > 0 ? `Danh sách giảng viên: ${section.lecturerNames.join(', ')}` : section.lecturerName}>
              <svg className={styles.detailIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {section.lecturerNames && section.lecturerNames.length > 1
                ? `GV: ${section.lecturerNames[0]} (+${section.lecturerNames.length - 1} GV)`
                : `GV: ${(section.lecturerNames && section.lecturerNames.length === 1 ? section.lecturerNames[0] : section.lecturerName) || 'Chưa phân công'}`}
            </div>

            <div className={styles.detailItem}>
              <svg className={styles.detailIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              {section.enrolledStudents !== undefined
                ? `${section.enrolledStudents}/${section.maxStudents} SV`
                : `${section.maxStudents} SV`}
            </div>

            <div className={styles.detailItem}>
              <svg className={styles.detailIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              {section.faculty}
            </div>

            <div className={styles.detailItem}>
              <svg className={styles.detailIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {(() => {
                const sem = section.semester || 'HK1';
                const num = sem.match(/\d+/)?.[0];
                return num ? `Học kỳ ${num}` : sem;
              })()}
              {section.academicYear ? ` (${section.academicYear})` : ''}
            </div>

            <div className={`${styles.statusLabel} ${statusClass}`}>
              {statusIcon}
              {statusText}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.classCardRight}>
        <button 
          className={`${styles.btnActionSmall} ${styles.btnActionStats}`}
          onClick={(e) => {
            e.stopPropagation();
            onViewStats(section.id);
          }}
          title="Thống kê"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </button>
        {onArchive && (
          <button 
            className={`${styles.btnActionSmall} ${styles.btnActionSecondary}`}
            onClick={(e) => {
              e.stopPropagation();
              onArchive(section.id, section.status);
            }}
            title={section.status === 'da_khoa' ? 'Khôi phục lớp học phần' : 'Lưu trữ lớp học phần'}
          >
            {section.status === 'da_khoa' ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            )}
          </button>
        )}
        {!hideEdit && (
          <button 
            className={styles.btnActionSmall}
            onClick={(e) => {
              e.stopPropagation();
              onEdit(section);
            }}
            title="Sửa thông tin"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
        )}
        {!hideDelete && (
          <button 
            className={`${styles.btnActionSmall} ${styles.btnActionDelete}`}
            onClick={(e) => {
              e.stopPropagation();
              onDelete(section.id);
            }}
            title="Xóa lớp học phần"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
