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
        {hasPhoto ? (
          <img 
            alt="Student Avatar" 
            className={styles.avatarImg} 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcNSQXs5-LbQJDOQbKGq1BFmI1eYpdaflsF67_AjsQxpMC-G6H6ercthK9v35xQ4iGLsJG7j0k2CIuH8CeP2Osj27FoHd2cX4vcKQ-JzZ_0AaDpqckd5k09eTQh63s-hxDjjOx0M6Q1CW-a3SWGyKEtnLkubsSE3xkB_PkZ4FLiM6N9zdY-ukYH1x2YhayxUdBjcpyn3JH1XoMP3i3c2uxIHp9XqVHrP3LBOb9rlMgGr6Uf3mZzVACiXoMzLw2vH2Fov6MyUgYiUs" 
          />
        ) : (
          <div className={styles.avatarFallback}>
            {studentName ? studentName.charAt(0).toUpperCase() : 'SV'}
          </div>
        )}
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
