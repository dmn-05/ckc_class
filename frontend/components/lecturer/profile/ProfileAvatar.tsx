import React from 'react';
import styles from './LecturerProfile.module.css';

export default function ProfileAvatar() {
  const hasPhoto = false;
  const lecturerName = "TS. Nguyễn Văn Minh";
  const lecturerId = "GV.102948";

  return (
    <div className={`${styles.glassCard} ${styles.avatarSection}`}>
      <div className={styles.avatarWrapper}>
        {hasPhoto ? (
          <img 
            alt="Giảng viên" 
            className={styles.avatarImg} 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtePGyL-OCAwFTFV8YAPLu-ThfD2Ya_ReUOwIW0PAy5QZxRaVI1emqF1TwYnLtmBjk82_S0bbuCnvZDB3A9EABi_F5cflLk7rp3FDWrd8_9h-EWEcOtaZ7NvXogtRE8waz07f9Tt9JPywtGgT2FcFdCyCUlWgQizviojMizJufX4VylSSPlA7tbEzhobYEkJydP8-cRqvTMpfF6zWWfRC9zkGu1MbHMIizHugDZboKD2suWmV-XudErXZEimOSUUglNmnK9P96ru4" 
          />
        ) : (
          <div className={styles.avatarFallback}>
            GV
          </div>
        )}
      </div>
      <button className={styles.avatarEditBtn}>
        <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>edit</span>
      </button>
      <h3 className={styles.avatarName}>{lecturerName}</h3>
      <p className={styles.avatarId}>{lecturerId}</p>
      
      <div className={styles.divider}></div>
      
      <div className={styles.statsList}>
        <div className={styles.statItem}>
          <span className={`material-symbols-outlined ${styles.statIcon}`}>verified</span>
          <span className={styles.statText}>Trạng thái: Đang công tác</span>
        </div>
        <div className={styles.statItem}>
          <span className={`material-symbols-outlined ${styles.statIcon}`}>calendar_today</span>
          <span className={styles.statText}>Tham gia: Tháng 09/2018</span>
        </div>
      </div>
    </div>
  );
}
