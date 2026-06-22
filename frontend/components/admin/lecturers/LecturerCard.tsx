'use client';

import React from 'react';
import styles from './AdminLecturers.module.css';

export type LecturerTheme = 'primary' | 'secondary' | 'tertiary';

export interface LecturerData {
  id: string;
  name: string;
  code: string;
  facultyName: string;
  email: string;
  isActive: boolean;
  avatarUrl: string;
  theme: LecturerTheme;
}

interface LecturerCardProps {
  lecturer: LecturerData;
  onEdit: (lecturer: LecturerData) => void;
  onDelete: (id: string) => void;
}

export default function LecturerCard({ lecturer, onEdit, onDelete }: LecturerCardProps) {
  // Theme mappings
  const cardBorderClass = 
    lecturer.theme === 'primary' ? styles.lecturerCardPrimary : 
    lecturer.theme === 'secondary' ? styles.lecturerCardSecondary : 
    styles.lecturerCardTertiary;
    
  const codeBadgeClass = 
    lecturer.theme === 'primary' ? styles.lecturerCodePrimary : 
    lecturer.theme === 'secondary' ? styles.lecturerCodeSecondary : 
    styles.lecturerCodeTertiary;

  return (
    <div className={`${styles.glassCard} ${styles.lecturerCard} ${cardBorderClass} group`}>
      <div className={styles.lecturerCardLeft}>
        <div className={styles.avatarWrapper}>
          <div className={styles.avatarBox}>
            <img 
              src={lecturer.avatarUrl} 
              alt={lecturer.name} 
              className={styles.avatarImage} 
            />
          </div>
          <span className={`${styles.statusIndicator} ${lecturer.isActive ? styles.statusIndicatorActive : styles.statusIndicatorInactive}`}></span>
        </div>
        
        <div className={styles.lecturerInfo}>
          <div className={styles.lecturerTitleRow}>
            <h4 className={styles.lecturerTitle}>{lecturer.name}</h4>
            <span className={`${styles.lecturerCodeBadge} ${codeBadgeClass}`}>
              {lecturer.code}
            </span>
          </div>
          
          <div className={styles.lecturerDetailsRow}>
            <div className={styles.detailItem}>
              <span className={`material-symbols-outlined ${styles.detailIcon}`}>domain</span>
              {lecturer.facultyName}
            </div>

            <div className={`${styles.detailItem} ${styles.detailHighlight}`}>
              <span className={`material-symbols-outlined ${styles.detailIcon}`}>mail</span>
              <span className={styles.emailText}>{lecturer.email}</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.lecturerCardRight}>
        <button 
          className={styles.btnActionSmall} 
          title="Chỉnh sửa"
          onClick={() => onEdit(lecturer)}
        >
          <span className="material-symbols-outlined">edit</span>
        </button>
        <button 
          className={`${styles.btnActionSmall} ${styles.btnActionDelete}`} 
          title="Xóa"
          onClick={() => onDelete(lecturer.id)}
        >
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
  );
}
