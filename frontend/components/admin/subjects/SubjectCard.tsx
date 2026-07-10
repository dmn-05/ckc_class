'use client';

import React from 'react';
import styles from './AdminSubjects.module.css';

export type SubjectTheme = 'primary' | 'secondary' | 'tertiary';

export interface SubjectData {
  id: string;
  name: string;
  code: string;
  credits: number;
  facultyId?: string;
  facultyName: string;
  departmentId?: string;
  departmentName?: string;
  status: string;
  theme: SubjectTheme;
  icon: string;
}

interface SubjectCardProps {
  subject: SubjectData;
  onEdit: (subject: SubjectData) => void;
  onDelete: (id: string) => void;
}

export default function SubjectCard({ subject, onEdit, onDelete }: SubjectCardProps) {
  // Theme mappings
  const cardBorderClass = subject.status === 'inactive' ? styles.subjectCardInactive :
    subject.theme === 'primary' ? styles.subjectCardPrimary : 
    subject.theme === 'secondary' ? styles.subjectCardSecondary : 
    styles.subjectCardTertiary;
    
  const iconBoxClass = subject.status === 'inactive' ? styles.subjectIconInactive :
    subject.theme === 'primary' ? styles.subjectIconPrimary : 
    subject.theme === 'secondary' ? styles.subjectIconSecondary : 
    styles.subjectIconTertiary;
    
  const codeBadgeClass = subject.status === 'inactive' ? styles.subjectCodeInactive :
    subject.theme === 'primary' ? styles.subjectCodePrimary : 
    subject.theme === 'secondary' ? styles.subjectCodeSecondary : 
    styles.subjectCodeTertiary;

  return (
    <div 
      className={`${styles.glassCard} ${styles.subjectCard} ${cardBorderClass} group`}
    >
      <div className={styles.subjectCardLeft}>
        <div className={`${styles.subjectIconBox} ${iconBoxClass}`}>
          <span className={`material-symbols-outlined ${styles.subjectIcon}`}>{subject.icon}</span>
        </div>
        
        <div className={styles.subjectInfo}>
          <div className={styles.subjectTitleRow}>
            <h4 className={styles.subjectTitle}>{subject.name}</h4>
            <span className={`${styles.subjectCodeBadge} ${codeBadgeClass}`}>
              {subject.code}
            </span>
          </div>
          
          <div className={styles.subjectDetailsRow}>
            <div className={styles.detailItem}>
              <span className={`material-symbols-outlined ${styles.detailIcon}`}>stars</span>
              {subject.credits} Tín chỉ
            </div>
            
            <div className={styles.detailItem}>
              <span className={`material-symbols-outlined ${styles.detailIcon}`}>domain</span>
              Khoa: {subject.facultyName.replace(/^Khoa\s+/i, '')}
            </div>
          </div>
          
          <div className={styles.subjectDetailsRow} style={{ marginTop: '0.5rem' }}>
            {subject.status === 'inactive' ? (
              <div className={styles.detailItem} style={{ color: '#ba1a1a', fontWeight: 500 }}>
                <span className={`material-symbols-outlined ${styles.detailIcon}`} style={{ color: '#ba1a1a' }}>cancel</span>
                Ngừng hoạt động
              </div>
            ) : (
              <div className={styles.detailItem} style={{ color: '#4648d4', fontWeight: 500 }}>
                <span className={`material-symbols-outlined ${styles.detailIcon}`} style={{ color: '#4648d4' }}>check_circle</span>
                Đang hoạt động
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.subjectCardRight}>
        <button 
          className={styles.btnActionSmall} 
          title="Chỉnh sửa"
          onClick={() => onEdit(subject)}
        >
          <span className="material-symbols-outlined">edit</span>
        </button>
        <button 
          className={`${styles.btnActionSmall} ${styles.btnActionDelete}`} 
          title="Xóa"
          onClick={() => onDelete(subject.id)}
        >
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
  );
}
