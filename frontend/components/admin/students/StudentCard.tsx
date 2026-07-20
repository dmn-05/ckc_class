import React, { useState } from 'react';
import Link from 'next/link';
import styles from './AdminStudents.module.css';
import { deleteStudent } from '@/app/actions/student';
import ConfirmModal from '@/components/common/ConfirmModal';
import AlertModal from '@/components/common/AlertModal';

export interface StudentData {
  id: string;
  name: string;
  code: string;
  classCode: string;
  faculty: string;
  khoaHoc?: string;
  email: string;
  avatar: string;
  statusClassName: string;
  borderClassName: string;
  status?: string;
}

export default function StudentCard({ student, onDeleteSuccess }: { student: StudentData, onDeleteSuccess?: () => void }) {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [alertConfig, setAlertConfig] = useState<{
    isOpen: boolean;
    title?: string;
    message: string;
    variant: 'warning' | 'error' | 'success' | 'info';
    isSuccess?: boolean;
  }>({
    isOpen: false,
    message: '',
    variant: 'success',
  });

  const borderClass = student.borderClassName === 'border-l-primary' ? styles.borderPrimary :
                      student.borderClassName === 'border-l-secondary' ? styles.borderSecondary :
                      student.borderClassName === 'border-l-error' ? styles.borderError :
                      student.borderClassName === 'border-l-success' ? styles.borderSuccess :
                      styles.borderTertiary;
                      
  const statusClass = student.statusClassName === 'bg-error' ? styles.bgError : styles.bgGreen;

  const handleDeleteClick = () => {
    setIsConfirmOpen(true);
  };

  const executeDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteStudent(student.id);
      setIsConfirmOpen(false);
      setIsDeleting(false);
      setAlertConfig({
        isOpen: true,
        title: 'Thành công',
        message: 'Xóa sinh viên thành công!',
        variant: 'success',
        isSuccess: true,
      });
    } catch (error: any) {
      setIsConfirmOpen(false);
      setIsDeleting(false);
      setAlertConfig({
        isOpen: true,
        title: 'Lỗi',
        message: error?.message || 'Có lỗi xảy ra khi xóa sinh viên.',
        variant: 'error',
        isSuccess: false,
      });
      console.error(error);
    }
  };

  const handleAlertClose = () => {
    const wasSuccess = alertConfig.isSuccess;
    setAlertConfig(prev => ({ ...prev, isOpen: false }));
    if (wasSuccess) {
      if (onDeleteSuccess) {
        onDeleteSuccess();
      } else {
        window.location.reload();
      }
    }
  };

  return (
    <div className={`${styles.studentCard} ${borderClass}`}>
      <div className={styles.cardLeft}>
        <div className={styles.avatarWrapper}>
          <div className={`${styles.avatarImgBox} ${borderClass}`}>
            <img alt={student.name} className={styles.avatarImg} src={student.avatar}/>
          </div>
          <span className={`${styles.statusDot} ${statusClass}`}></span>
        </div>
        <div className={styles.studentInfo}>
          <div className={styles.studentNameRow}>
            <h4 className={styles.studentName}>{student.name}</h4>
            <span className={styles.studentCode}>{student.code}</span>
          </div>
          <div>
            <div className={styles.studentMetaRow}>
              <div className={styles.studentMetaItem}><span className="material-symbols-outlined" style={{ fontSize: '14px' }}>badge</span>{student.classCode}</div>
              <div className={styles.studentMetaItem}><span className="material-symbols-outlined" style={{ fontSize: '14px' }}>domain</span>{student.faculty}</div>
              {student.khoaHoc && (
                <div className={styles.studentMetaItem}><span className="material-symbols-outlined" style={{ fontSize: '14px' }}>school</span>Khóa {student.khoaHoc}</div>
              )}
            </div>
            <div className={styles.studentEmailRow}>
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>mail</span>
              <span>{student.email}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cardActions}>
        <Link href={`/admin/students/${student.id}/edit`} className={`${styles.actionBtn} ${styles.actionBtnEdit}`}>
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>edit</span>
        </Link>
        <button type="button" className={`${styles.actionBtn} ${styles.actionBtnDelete}`} onClick={handleDeleteClick}>
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>delete</span>
        </button>
      </div>

      <ConfirmModal
        isOpen={isConfirmOpen}
        title="Xác nhận xóa sinh viên"
        message={`Bạn có chắc chắn muốn xóa sinh viên "${student.name}" (${student.code}) không? Hành động này sẽ chuyển trạng thái sinh viên sang đã xóa.`}
        confirmText="Xóa sinh viên"
        cancelText="Hủy bỏ"
        variant="danger"
        isLoading={isDeleting}
        onConfirm={executeDelete}
        onCancel={() => !isDeleting && setIsConfirmOpen(false)}
      />

      <AlertModal
        isOpen={alertConfig.isOpen}
        title={alertConfig.title}
        message={alertConfig.message}
        variant={alertConfig.variant}
        onClose={handleAlertClose}
      />
    </div>
  );
}
