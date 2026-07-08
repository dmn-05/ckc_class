"use client";

import React, { useState, useTransition, useEffect, useMemo } from 'react';
import styles from './StudentProfile.module.css';
import ProfileHeader from './ProfileHeader';
import ProfileAvatar from './ProfileAvatar';
import ProfileStatus from './ProfileStatus';
import BasicInfoForm from './BasicInfoForm';
import ContactInfoForm from './ContactInfoForm';
import { updateProfileAction, updateAvatarAction } from '../../../src/app/student/profile/actions';

export default function StudentProfile({ profileData }: { profileData?: any }) {
  const [isPending, startTransition] = useTransition();
  
  const initialData = useMemo(() => ({
    ho_ten: profileData?.ho_ten || '',
    ngay_sinh: profileData?.sinh_vien?.ngay_sinh ? profileData.sinh_vien.ngay_sinh.split('T')[0] : '',
    gioi_tinh: profileData?.sinh_vien?.gioi_tinh || '',
    cccd: profileData?.sinh_vien?.cccd || '',
    email: profileData?.email || '',
    so_dien_thoai: profileData?.sinh_vien?.so_dien_thoai || '',
    dia_chi: profileData?.sinh_vien?.dia_chi || '',
  }), [profileData]);

  const [formData, setFormData] = useState(initialData);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  // Sync formData if profileData is re-fetched after save
  useEffect(() => {
    setFormData(initialData);
    setAvatarFile(null); // Reset avatar file after save
  }, [initialData]);

  const isDirty = JSON.stringify(formData) !== JSON.stringify(initialData) || avatarFile !== null;

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = ''; // Bắt buộc đối với một số trình duyệt để hiện popup
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isDirty]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleCancel = () => {
    if (isDirty) {
      if (confirm("Bạn có chắc chắn muốn hủy bỏ các thay đổi chưa lưu?")) {
        setFormData(initialData);
        setAvatarFile(null);
        // Force reload page to clear preview
        window.location.reload();
      }
    }
  };

  const handleSave = () => {
    startTransition(async () => {
      // 1. Upload avatar if changed
      if (avatarFile) {
        const avatarResult = await updateAvatarAction(avatarFile);
        if (!avatarResult.success) {
          showToast("Lỗi upload ảnh: " + avatarResult.message, "error");
          return; // Stop saving if avatar fails
        }
      }

      // 2. Save profile info
      const result = await updateProfileAction(formData);
      if (result.success) {
        setAvatarFile(null);
        showToast(result.message || "Cập nhật hồ sơ thành công!", "success");
      } else {
        showToast("Lỗi: " + result.message, "error");
      }
    });
  };

  return (
    <div className={styles.container}>
      <ProfileHeader onSave={handleSave} onCancel={handleCancel} isSaving={isPending} />
      
      <div className={styles.mainGrid}>
        <div className={styles.leftColumn}>
          <ProfileAvatar profileData={profileData} onAvatarChange={setAvatarFile} />
          <ProfileStatus status={profileData?.sinh_vien?.trang_thai} />
        </div>
        
        <div className={styles.rightColumn}>
          <BasicInfoForm profileData={profileData} formData={formData} onChange={handleChange} />
          <ContactInfoForm profileData={profileData} formData={formData} onChange={handleChange} />
        </div>
      </div>
      
      {toast && (
        <div style={{
          position: 'fixed',
          top: '90px',
          right: '24px',
          padding: '16px 24px',
          backgroundColor: toast.type === 'success' ? '#10b981' : '#ef4444',
          color: 'white',
          borderRadius: '8px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontWeight: 500,
          animation: 'slideIn 0.3s ease-out forwards'
        }}>
          {toast.type === 'success' ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          <span>{toast.message}</span>
        </div>
      )}
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
