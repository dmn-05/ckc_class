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
          alert("Lỗi upload ảnh: " + avatarResult.message);
          return; // Stop saving if avatar fails
        }
      }

      // 2. Save profile info
      const result = await updateProfileAction(formData);
      if (result.success) {
        setAvatarFile(null);
        alert(result.message);
      } else {
        alert("Lỗi: " + result.message);
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
    </div>
  );
}
