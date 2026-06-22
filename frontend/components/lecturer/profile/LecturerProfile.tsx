"use client";

import React, { useState, useTransition, useEffect, useMemo } from 'react';
import styles from './LecturerProfile.module.css';
import ProfileHeader from './ProfileHeader';
import ProfileAvatar from './ProfileAvatar';
import RecentActivities from './RecentActivities';
import LecturerInfoForm from './LecturerInfoForm';
import { updateLecturerProfileAction } from '../../../src/app/lecturer/profile/actions';

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

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const isDirty = JSON.stringify(formData) !== JSON.stringify(initialData);

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
      }
    }
  };

  const handleSave = () => {
    startTransition(async () => {
      const result = await updateLecturerProfileAction(formData);
      if (result.success) {
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
        {/* Left Column - 4/12 */}
        <div className={styles.leftColumn}>
          <ProfileAvatar profileData={profileData} />
          <RecentActivities />
        </div>
        
        {/* Right Column - 8/12 */}
        <div className={styles.rightColumn}>
          <LecturerInfoForm profileData={profileData} formData={formData} onChange={handleChange} />
        </div>
      </div>
    </div>
  );
}
