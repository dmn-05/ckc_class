"use client";

import React, { useState, useTransition, useEffect, useMemo } from 'react';
import styles from './LecturerProfile.module.css';
import ProfileHeader from './ProfileHeader';
import ProfileAvatar from './ProfileAvatar';
import RecentActivities from './RecentActivities';
import LecturerInfoForm from './LecturerInfoForm';
import { updateLecturerProfileAction, updateAvatarAction } from '../../../src/app/lecturer/profile/actions';

export default function LecturerProfile({ profileData }: { profileData?: any }) {
  const [isPending, startTransition] = useTransition();

  const initialData = useMemo(() => ({
    ho_ten: profileData?.ho_ten || '',
    ngay_sinh: profileData?.giang_vien?.ngay_sinh ? profileData.giang_vien.ngay_sinh.split('T')[0] : '',
    gioi_tinh: profileData?.giang_vien?.gioi_tinh || '',
    cccd: profileData?.giang_vien?.cccd || '',
    email: profileData?.email || '',
    so_dien_thoai: profileData?.giang_vien?.so_dien_thoai || '',
    dia_chi: profileData?.giang_vien?.dia_chi || '',
  }), [profileData]);

  const [formData, setFormData] = useState(initialData);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  useEffect(() => {
    setFormData(initialData);
    setAvatarFile(null);
  }, [initialData]);

  const isDirty = JSON.stringify(formData) !== JSON.stringify(initialData) || avatarFile !== null;

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = '';
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
        window.location.reload();
      }
    }
  };

  const handleSave = () => {
    startTransition(async () => {
      if (avatarFile) {
        const avatarResult = await updateAvatarAction(avatarFile);
        if (!avatarResult.success) {
          showToast("Lỗi upload ảnh: " + avatarResult.message, "error");
          return;
        }
      }

      const result = await updateLecturerProfileAction(formData);
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
        {/* Left Column - 4/12 */}
        <div className={styles.leftColumn}>
          <ProfileAvatar profileData={profileData} onAvatarChange={setAvatarFile} />
          <RecentActivities />
        </div>
        
        {/* Right Column - 8/12 */}
        <div className={styles.rightColumn}>
          <LecturerInfoForm profileData={profileData} formData={formData} onChange={handleChange} />
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
