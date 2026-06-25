"use client";

import React, { useRef, useState, useCallback } from 'react';
import styles from './StudentProfile.module.css';
import { updateAvatarAction } from '../../../src/app/student/profile/actions';

/** Lấy 2 chữ cái đầu: chữ đầu họ + chữ đầu tên */
function getInitials(fullName: string): string {
  if (!fullName) return 'SV';
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  // Họ là phần đầu, tên là phần cuối
  const first = parts[0].charAt(0).toUpperCase();
  const last = parts[parts.length - 1].charAt(0).toUpperCase();
  return first + last;
}

export default function ProfileAvatar({ profileData, onAvatarChange }: { profileData?: any, onAvatarChange?: (file: File | null) => void }) {
  const studentName = profileData?.ho_ten || "";
  const studentId = profileData?.sinh_vien?.ma_sinh_vien || "";
  const initials = getInitials(studentName);

  const [previewUrl, setPreviewUrl] = useState<string | null>(profileData?.avatar || null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate phía client trước khi gửi lên server
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

    // Preview ngay lập tức
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
    setError(null);
    
    // Pass file to parent component instead of uploading immediately
    if (onAvatarChange) {
      onAvatarChange(file);
    }
  }, [onAvatarChange]);

  return (
    <div className={`${styles.glassCard} ${styles.avatarSection}`}>
      <div className={styles.avatarBgGlow}></div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
        id="avatar-file-input"
      />

      {/* Avatar có thể click */}
      <div
        className={`${styles.avatarWrapper} ${styles.avatarClickable}`}
        onClick={handleAvatarClick}
        title="Bấm để thay đổi ảnh đại diện"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleAvatarClick()}
      >
        {previewUrl ? (
          <img
            alt="Student Avatar"
            className={styles.avatarImg}
            src={previewUrl}
          />
        ) : (
          <div className={styles.avatarFallback}>
            {initials}
          </div>
        )}

        {/* Overlay khi hover */}
        <div className={styles.avatarOverlay}>
          {isUploading ? (
            <div className={styles.avatarSpinner} />
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
          )}
          <span className={styles.avatarOverlayText}>
            {isUploading ? 'Đang tải...' : 'Thay ảnh'}
          </span>
        </div>

        {/* Edit badge */}
        {!isUploading && (
          <div className={styles.avatarEditBtn} aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </svg>
          </div>
        )}
      </div>

      {/* Error message */}
      {error && (
        <p className={styles.avatarError}>{error}</p>
      )}

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
