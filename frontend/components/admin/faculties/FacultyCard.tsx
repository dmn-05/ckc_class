'use client';

import React from 'react';
import styles from './AdminFaculties.module.css';

export type FacultyStatus = 'active' | 'pending';
export type FacultyTheme = 'primary' | 'secondary' | 'tertiary';

export interface FacultyData {
  id: string;
  name: string;
  code: string;
  students: number;
  lecturers: number;
  status: FacultyStatus;
  theme: FacultyTheme;
  icon: string;
}

interface FacultyCardProps {
  faculty: FacultyData;
  onEdit: (faculty: FacultyData) => void;
  onDelete: (id: string) => void;
}

export default function FacultyCard({ faculty, onEdit, onDelete }: FacultyCardProps) {
  // Theme mappings
  const cardBorderClass = 
    faculty.theme === 'primary' ? styles.facultyCardPrimary : 
    faculty.theme === 'secondary' ? styles.facultyCardSecondary : 
    styles.facultyCardTertiary;
    
  const iconBoxClass = 
    faculty.theme === 'primary' ? styles.facultyIconPrimary : 
    faculty.theme === 'secondary' ? styles.facultyIconSecondary : 
    styles.facultyIconTertiary;
    
  const codeBadgeClass = 
    faculty.theme === 'primary' ? styles.facultyCodePrimary : 
    faculty.theme === 'secondary' ? styles.facultyCodeSecondary : 
    styles.facultyCodeTertiary;

  return (
    <div className={`${styles.glassCard} ${styles.facultyCard} ${cardBorderClass} group`}>
      <div className={styles.facultyCardLeft}>
        <div className={`${styles.facultyIconBox} ${iconBoxClass}`}>
          <span className={`material-symbols-outlined ${styles.facultyIcon}`}>{faculty.icon}</span>
        </div>
        
        <div className={styles.facultyInfo}>
          <div className={styles.facultyTitleRow}>
            <h4 className={styles.facultyTitle}>{faculty.name}</h4>
            <span className={`${styles.facultyCodeBadge} ${codeBadgeClass}`}>
              {faculty.code}
            </span>
          </div>
          
          <div className={styles.facultyDetailsRow}>
            <div className={styles.detailItem}>
              <span className={`material-symbols-outlined ${styles.detailIcon}`}>groups</span>
              {faculty.students.toLocaleString('vi-VN')} Sinh viên • {faculty.lecturers} Giảng viên
            </div>
            
            {faculty.status === 'active' ? (
              <div className={`${styles.detailItem} ${styles.statusActive}`}>
                <span className={`material-symbols-outlined ${styles.detailIcon}`}>check_circle</span>
                Đang hoạt động
              </div>
            ) : (
              <div className={`${styles.detailItem} ${styles.statusPending}`}>
                <span className={`material-symbols-outlined ${styles.detailIcon}`}>info</span>
                Đang chờ phê duyệt
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.facultyCardRight}>
        <button 
          className={styles.btnActionSmall} 
          title="Chỉnh sửa"
          onClick={() => onEdit(faculty)}
        >
          <span className="material-symbols-outlined">edit</span>
        </button>
        <button 
          className={`${styles.btnActionSmall} ${styles.btnActionDelete}`} 
          title="Xóa"
          onClick={() => onDelete(faculty.id)}
        >
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
  );
}
