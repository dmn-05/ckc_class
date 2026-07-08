import React from 'react';
import { cookies } from 'next/headers';
import StudentProfile from '../../../../components/student/profile/StudentProfile';

export const metadata = {
  title: 'Hồ sơ cá nhân',
};

async function getProfile() {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token')?.value;

  if (!token) return null;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/student/profile`, {
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
    console.error('Failed to fetch profile:', error);
    return null;
  }
}

export default async function StudentProfilePage() {
  const profileData = await getProfile();

  return <StudentProfile profileData={profileData} />;
}
