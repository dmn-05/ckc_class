import React from 'react';
import styles from './StudentProfile.module.css';

export default function ContactInfoForm({ profileData, formData, onChange }: { profileData?: any, formData?: any, onChange?: any }) {
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
            <input className={styles.inputField} id="email" type="email" value={formData?.email || ''} onChange={onChange} />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="so_dien_thoai">Số điện thoại</label>
          <div className={styles.inputGlow}>
            <span className={`material-symbols-outlined ${styles.inputIcon}`}>phone_iphone</span>
            <input className={styles.inputField} id="so_dien_thoai" type="tel" value={formData?.so_dien_thoai || ''} onChange={onChange} />
          </div>
        </div>
        <div className={styles.formGroupFull}>
          <label className={styles.label} htmlFor="dia_chi">Địa chỉ thường trú</label>
          <div className={styles.inputGlow}>
            <span className={`material-symbols-outlined ${styles.inputIcon}`}>location_on</span>
            <input className={styles.inputField} id="dia_chi" type="text" value={formData?.dia_chi || ''} onChange={onChange} />
          </div>
        </div>
      </div>
    </section>
  );
}
