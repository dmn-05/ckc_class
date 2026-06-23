'use client';

import React from 'react';
import Link from 'next/link';
import styles from './AdminDepartments.module.css';

export type DepartmentStatus = 'active' | 'pending' | 'inactive';
export type DepartmentTheme = 'primary' | 'secondary' | 'tertiary' | 'error';

export interface DepartmentData {
  id: string;
  name: string;
  code: string;
  facultyId: string;
  facultyName: string;
  head?: string;
  status: DepartmentStatus;
  theme: DepartmentTheme;
  icon: string;
}

interface DepartmentCardProps {
  department: DepartmentData;
  onDelete: (id: string) => void;
}

export default function DepartmentCard({ department, onDelete }: DepartmentCardProps) {
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
          
          <div className={styles.departmentDetailsGrid}>
            <div className={styles.detailItem}>
              <span className={`material-symbols-outlined ${styles.detailIcon}`}>domain</span>
              Khoa: {department.facultyName}
            </div>
            
            <div className={styles.detailItem}>
              <span className={`material-symbols-outlined ${styles.detailIcon}`}>person</span>
              {department.head ? `Trưởng bộ môn: ${department.head}` : 'Chưa bổ nhiệm Trưởng bộ môn'}
            </div>
          </div>
          
          <div className={styles.departmentStatusRow}>
            {department.status === 'active' ? (
              <div className={`${styles.detailItem} ${styles.statusActive}`}>
                <span className={`material-symbols-outlined ${styles.detailIcon}`}>check_circle</span>
                Đang hoạt động
              </div>
            ) : department.status === 'pending' ? (
              <div className={`${styles.detailItem} ${styles.statusPending}`}>
                <span className={`material-symbols-outlined ${styles.detailIcon}`}>info</span>
                Đang chờ phê duyệt
              </div>
            ) : (
              <div className={`${styles.detailItem} ${styles.statusPending}`}>
                <span className={`material-symbols-outlined ${styles.detailIcon}`}>cancel</span>
                Ngừng hoạt động
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.departmentCardRight}>
        <Link 
          href={`/admin/departments/${department.id}/edit`}
          className={styles.btnActionSmall} 
          title="Chỉnh sửa"
        >
          <span className="material-symbols-outlined">edit</span>
        </Link>
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
