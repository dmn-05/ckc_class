import React from 'react';
import Link from 'next/link';
import styles from './AdminStudents.module.css';
import { deleteStudent } from '@/app/actions/student';

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
  const borderClass = student.borderClassName === 'border-l-primary' ? styles.borderPrimary :
                      student.borderClassName === 'border-l-secondary' ? styles.borderSecondary :
                      student.borderClassName === 'border-l-error' ? styles.borderError :
                      student.borderClassName === 'border-l-success' ? styles.borderSuccess :
                      styles.borderTertiary;
                      
  const statusClass = student.statusClassName === 'bg-error' ? styles.bgError : styles.bgGreen;

  const handleDelete = async () => {
    if (window.confirm('Bạn có chắc chắn muốn xóa sinh viên này?')) {
      try {
        await deleteStudent(student.id);
        alert('Xóa sinh viên thành công!');
        if (onDeleteSuccess) {
          onDeleteSuccess();
        } else {
          window.location.reload();
        }
      } catch (error) {
        alert('Có lỗi xảy ra khi xóa sinh viên.');
        console.error(error);
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
        <button className={`${styles.actionBtn} ${styles.actionBtnDelete}`} onClick={handleDelete}>
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>delete</span>
        </button>
      </div>
    </div>
  );
}
