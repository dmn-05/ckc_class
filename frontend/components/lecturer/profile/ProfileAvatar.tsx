"use client";

import React, { useRef, useState, useCallback } from 'react';
import styles from './LecturerProfile.module.css';

/** Lấy 2 chữ cái đầu: chữ đầu họ + chữ đầu tên */
function getInitials(fullName: string): string {
  if (!fullName) return 'GV';
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  const first = parts[0].charAt(0).toUpperCase();
  const last = parts[parts.length - 1].charAt(0).toUpperCase();
  return first + last;
}

export default function ProfileAvatar({ profileData, onAvatarChange }: { profileData?: any, onAvatarChange?: (file: File | null) => void }) {
  const lecturerName = profileData?.ho_ten || "";
  const lecturerId = profileData?.giang_vien?.ma_giang_vien || "";
  const initials = getInitials(lecturerName);

  const [previewUrl, setPreviewUrl] = useState<string | null>(profileData?.avatar || null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const MAX_SIZE_MB = 5;
    const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

    if (!file.type.startsWith('image/')) {
      setError('Chỉ chấp nhận file ảnh (JPG, PNG, WEBP, ...)');
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    if (file.size > MAX_SIZE_BYTES) {
      const sizeMB = (file.size / 1024 / 1024).toFixed(1);
      setError(`Ảnh quá lớn (${sizeMB} MB). Vui lòng chọn ảnh nhỏ hơn ${MAX_SIZE_MB} MB.`);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    // Preview
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
    setError(null);
    
    // Pass to parent
    if (onAvatarChange) {
      onAvatarChange(file);
    }
  }, [onAvatarChange]);

  return (
    <div className={`${styles.glassCard} ${styles.avatarSection}`}>
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
        id="avatar-file-input"
      />

      <div 
        className={`${styles.avatarWrapper} ${styles.avatarClickable}`}
        onClick={handleAvatarClick}
        title="Bấm để thay đổi ảnh đại diện"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleAvatarClick()}
        style={{ cursor: 'pointer', position: 'relative' }}
      >
        {previewUrl ? (
          <img 
            alt="Giảng viên" 
            className={styles.avatarImg} 
            src={previewUrl} 
          />
        ) : (
          <div className={styles.avatarFallback}>
            {initials}
          </div>
        )}
        
        {/* Overlay hover */}
        <div className={styles.avatarOverlay} style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.5)', borderRadius: '50%',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          opacity: 0, transition: 'opacity 0.2s', color: 'white'
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
            <circle cx="12" cy="13" r="4"/>
          </svg>
          <span style={{ fontSize: '0.8rem', marginTop: '4px' }}>Thay ảnh</span>
        </div>
      </div>
      
      {error && <p style={{ color: '#ff4d4f', fontSize: '0.85rem', marginTop: '8px' }}>{error}</p>}

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
