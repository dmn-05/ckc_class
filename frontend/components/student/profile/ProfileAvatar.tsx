import React from 'react';
import styles from './StudentProfile.module.css';

export default function ProfileAvatar({ profileData }: { profileData?: any }) {
  const hasPhoto = false; // Set to true to display photo, false to display "SV"
  const studentName = profileData?.ho_ten || "";
  const studentId = profileData?.sinh_vien?.ma_sinh_vien || "";

  return (
    <div className={`${styles.glassCard} ${styles.avatarSection}`}>
      <div className={styles.avatarBgGlow}></div>
      <div className={styles.avatarWrapper}>
        <img 
          alt="Student Avatar" 
          className={styles.avatarImg} 
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(studentName || 'SV')}&background=3525cd&color=fff`}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <h3 className={styles.avatarName}>{studentName}</h3>
      <p className={styles.avatarMssv}>MSSV: {studentId}</p>
      
      <div className={styles.statsGrid}>
        <div className={styles.statItem}>
          <p className={styles.statLabel}>Ngày tạo</p>
          <p className={styles.statValuePrimary}>{profileData?.ngay_tao ? new Date(profileData.ngay_tao).toLocaleDateString('vi-VN') : ''}</p>
        </div>
        <div className={styles.statItem}>
          <p className={styles.statLabel}>Ngày cập nhật</p>
          <p className={styles.statValueSecondary}>{profileData?.ngay_cap_nhat ? new Date(profileData.ngay_cap_nhat).toLocaleDateString('vi-VN') : ''}</p>
        </div>
      </div>
    </div>
  );
}
