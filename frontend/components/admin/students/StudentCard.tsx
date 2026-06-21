import React from 'react';
import styles from './AdminStudents.module.css';

export interface StudentData {
  id: string;
  name: string;
  code: string;
  classCode: string;
  faculty: string;
  email: string;
  avatar: string;
  statusClassName: string;
  borderClassName: string;
}

export default function StudentCard({ student }: { student: StudentData }) {
  // Mapping the border class name from the data to the CSS module classes
  const borderClass = student.borderClassName === 'border-l-primary' ? styles.borderPrimary :
                      student.borderClassName === 'border-l-secondary' ? styles.borderSecondary :
                      student.borderClassName === 'border-l-error' ? styles.borderError :
                      styles.borderTertiary;
                      
  const statusClass = student.statusClassName === 'bg-error' ? styles.bgError : styles.bgGreen;

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
            </div>
            <div className={styles.studentEmailRow}>
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>mail</span>
              <span>{student.email}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cardActions}>
        <button className={`${styles.actionBtn} ${styles.actionBtnEdit}`}>
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>edit</span>
        </button>
        <button className={`${styles.actionBtn} ${styles.actionBtnDelete}`}>
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>delete</span>
        </button>
      </div>
    </div>
  );
}
