import React from 'react';
import styles from './StudentProfile.module.css';

export default function BasicInfoForm() {
  return (
    <section className={styles.glassCard}>
      <div className={styles.formHeader}>
        <span className={`material-symbols-outlined ${styles.formIcon}`}>person_search</span>
        <h2 className={styles.formTitle}>Thông tin cơ bản</h2>
      </div>
      <div className={styles.formGrid}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="fullname">Họ và tên</label>
          <div className={styles.inputGlow}>
            <input className={styles.inputField} id="fullname" type="text" defaultValue="Nguyễn Văn A" />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="studentid">Mã sinh viên</label>
          <div className={`${styles.inputGlow} ${styles.inputDisabled}`}>
            <input className={styles.inputField} id="studentid" type="text" defaultValue="2021604532" readOnly />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="class">Lớp</label>
          <div className={`${styles.inputGlow} ${styles.inputDisabled}`}>
            <input className={styles.inputField} id="class" type="text" defaultValue="Công nghệ thông tin 02 - K16" readOnly />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="department">Khoa</label>
          <div className={`${styles.inputGlow} ${styles.inputDisabled}`}>
            <input className={styles.inputField} id="department" type="text" defaultValue="Khoa Công nghệ thông tin" readOnly />
          </div>
        </div>
        
        <div className={styles.formGroupFull}>
          <label className={styles.label} htmlFor="academic_status">Trạng thái học tập</label>
          <div className={`${styles.inputGlow} ${styles.inputDisabled}`}>
            <input className={styles.inputField} id="academic_status" type="text" defaultValue="Đang học" readOnly />
          </div>
        </div>
      </div>
    </section>
  );
}
