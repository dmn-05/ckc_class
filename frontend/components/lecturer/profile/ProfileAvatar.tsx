import React from 'react';
import styles from './LecturerProfile.module.css';

export default function ProfileAvatar({ profileData }: { profileData?: any }) {
  const hasPhoto = false;
  const lecturerName = profileData?.ho_ten || "";
  const lecturerId = profileData?.giang_vien?.ma_giang_vien || "";

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
            {lecturerName ? lecturerName.charAt(0).toUpperCase() : 'GV'}
          </div>
        )}
      </div>
      <h3 className={styles.avatarName}>{lecturerName}</h3>
      <p className={styles.avatarId}>{lecturerId}</p>
      
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
