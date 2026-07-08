import React from 'react';
import { getAdminProfileAction } from './actions';
import AdminProfile from '@/components/admin/profile/AdminProfile';

export const metadata = {
  title: 'Hồ sơ cá nhân',
};

export default async function AdminProfilePage() {
  const res = await getAdminProfileAction();
  const profileData = res?.success ? res.data : null;

  return <AdminProfile profileData={profileData} />;
}
