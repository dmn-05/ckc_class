import React from 'react';
import { cookies } from 'next/headers';
import LecturerProfile from '../../../../components/lecturer/profile/LecturerProfile';

export const metadata = {
  title: 'Hồ sơ Giảng viên | Academic Portal',
};

async function getProfile() {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token')?.value;

  if (!token) return null;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/lecturer/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
      cache: 'no-store'
    });

    if (!res.ok) return null;
    const json = await res.json();
    return json.data;
  } catch (error) {
    return null;
  }
}

export default async function LecturerProfilePage() {
  const profileData = await getProfile();

  return <LecturerProfile profileData={profileData} />;
}
