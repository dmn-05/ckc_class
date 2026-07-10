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
            {department.status === 'active' ? (
              <span className={styles.statusActive}>
                <span className="material-symbols-outlined" style={{ fontSize: '14px', verticalAlign: 'middle', marginRight: '4px' }}>check_circle</span>
                Đang hoạt động
              </span>
            ) : department.status === 'pending' ? (
              <span className={styles.statusPending}>
                <span className="material-symbols-outlined" style={{ fontSize: '14px', verticalAlign: 'middle', marginRight: '4px' }}>info</span>
                Đang chờ phê duyệt
              </span>
            ) : (
              <span className={styles.statusPending} style={{ color: '#dc2626', background: 'rgba(239, 68, 68, 0.1)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '14px', verticalAlign: 'middle', marginRight: '4px' }}>cancel</span>
                Ngừng hoạt động
              </span>
            )}
          </div>
          
          <div className={styles.departmentDetailsGrid}>
            <div className={styles.detailItem}>
              <span className={`material-symbols-outlined ${styles.detailIcon}`}>domain</span>
              <span><strong>Khoa:</strong> {department.facultyName.replace(/^Khoa\s+/i, '')}</span>
            </div>
            
            <div className={styles.detailItem}>
              <span className={`material-symbols-outlined ${styles.detailIcon}`}>person</span>
              <span>
                {department.head ? (
                  <><strong>Trưởng BM:</strong> {department.head}</>
                ) : (
                  <span style={{ fontStyle: 'italic', color: '#94a3b8' }}>Chưa bổ nhiệm Trưởng BM</span>
                )}
              </span>
            </div>
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
