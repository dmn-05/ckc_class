'use client';

import React from 'react';
import styles from './AdminDepartments.module.css';

export type DepartmentStatus = 'active' | 'pending';
export type DepartmentTheme = 'primary' | 'secondary' | 'tertiary' | 'error';

export interface DepartmentData {
  id: string;
  name: string;
  code: string;
  facultyName: string;
  status: DepartmentStatus;
  theme: DepartmentTheme;
  icon: string;
}

interface DepartmentCardProps {
  department: DepartmentData;
  onEdit: (department: DepartmentData) => void;
  onDelete: (id: string) => void;
}

export default function DepartmentCard({ department, onEdit, onDelete }: DepartmentCardProps) {
  // Theme mappings
  const cardBorderClass = 
    department.theme === 'primary' ? styles.departmentCardPrimary : 
    department.theme === 'secondary' ? styles.departmentCardSecondary : 
    department.theme === 'tertiary' ? styles.departmentCardTertiary : 
    styles.departmentCardError;
    
  const iconBoxClass = 
    department.theme === 'primary' ? styles.departmentIconPrimary : 
    department.theme === 'secondary' ? styles.departmentIconSecondary : 
    department.theme === 'tertiary' ? styles.departmentIconTertiary : 
    styles.departmentIconError;
    
  const codeBadgeClass = 
    department.theme === 'primary' ? styles.departmentCodePrimary : 
    department.theme === 'secondary' ? styles.departmentCodeSecondary : 
    department.theme === 'tertiary' ? styles.departmentCodeTertiary : 
    styles.departmentCodeError;

  return (
    <div className={`${styles.glassCard} ${styles.departmentCard} ${cardBorderClass} group`}>
      <div className={styles.departmentCardLeft}>
        <div className={`${styles.departmentIconBox} ${iconBoxClass}`}>
          <span className={`material-symbols-outlined ${styles.departmentIcon}`}>{department.icon}</span>
        </div>
        
        <div className={styles.departmentInfo}>
          <div className={styles.departmentTitleRow}>
            <h4 className={styles.departmentTitle}>{department.name}</h4>
            <span className={`${styles.departmentCodeBadge} ${codeBadgeClass}`}>
              {department.code}
            </span>
          </div>
          
          <div className={styles.departmentDetailsRow}>
            <div className={styles.detailItem}>
              <span className={`material-symbols-outlined ${styles.detailIcon}`}>domain</span>
              Khoa: {department.facultyName}
            </div>
            
            {department.status === 'active' ? (
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

      <div className={styles.departmentCardRight}>
        <button 
          className={styles.btnActionSmall} 
          title="Chỉnh sửa"
          onClick={() => onEdit(department)}
        >
          <span className="material-symbols-outlined">edit</span>
        </button>
        <button 
          className={`${styles.btnActionSmall} ${styles.btnActionDelete}`} 
          title="Xóa"
          onClick={() => onDelete(department.id)}
        >
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
  );
}
