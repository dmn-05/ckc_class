import React from 'react';
import styles from './StudentProfile.module.css';

export default function ProfileAvatar() {
  const hasPhoto = false; // Set to true to display photo, false to display "SV"
  const studentName = "Nguyễn Văn A";
  const studentId = "2021604532";

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
            SV
          </div>
        )}
      </div>
      <button className={styles.avatarEditBtn}>
        <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>edit</span>
      </button>
      <h3 className={styles.avatarName}>{studentName}</h3>
      <p className={styles.avatarMssv}>MSSV: {studentId}</p>
      
      <div className={styles.statsGrid}>
        <div className={styles.statItem}>
          <p className={styles.statLabel}>Tiến độ học tập</p>
          <p className={styles.statValuePrimary}>78%</p>
        </div>
        <div className={styles.statItem}>
          <p className={styles.statLabel}>GPA hiện tại</p>
          <p className={styles.statValueSecondary}>3.85/4.0</p>
        </div>
      </div>
    </div>
  );
}
