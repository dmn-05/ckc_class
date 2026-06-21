import React from 'react';
import styles from './StudentProfile.module.css';

export default function ContactInfoForm() {
  return (
    <section className={styles.glassCard}>
      <div className={styles.formHeader}>
        <span className={`material-symbols-outlined ${styles.formIcon}`}>contact_mail</span>
        <h2 className={styles.formTitle}>Thông tin liên lạc</h2>
      </div>
      <div className={styles.formGrid}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">Email sinh viên</label>
          <div className={styles.inputGlow}>
            <span className={`material-symbols-outlined ${styles.inputIcon}`}>alternate_email</span>
            <input className={styles.inputField} id="email" type="email" defaultValue="annv.student@univ.edu.vn" />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="phone">Số điện thoại</label>
          <div className={styles.inputGlow}>
            <span className={`material-symbols-outlined ${styles.inputIcon}`}>phone_iphone</span>
            <input className={styles.inputField} id="phone" type="tel" defaultValue="+84 987 654 321" />
          </div>
        </div>
        <div className={styles.formGroupFull}>
          <label className={styles.label} htmlFor="address">Địa chỉ thường trú</label>
          <div className={styles.inputGlow}>
            <span className={`material-symbols-outlined ${styles.inputIcon}`}>location_on</span>
            <input className={styles.inputField} id="address" type="text" defaultValue="Phường Cầu Giấy, Quận Cầu Giấy, TP. Hà Nội" />
          </div>
        </div>
      </div>
    </section>
  );
}
