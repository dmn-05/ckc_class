import React from 'react';
import { cookies } from 'next/headers';
import LecturerSidebar from '@/components/lecturer/layout/LecturerSidebar';
import LecturerHeader from '@/components/lecturer/layout/LecturerHeader';
import styles from '@/components/lecturer/layout/LecturerLayout.module.css';

async function getUserProfile() {
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

export default async function LecturerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const profileData = await getUserProfile();

  return (
    <div className={styles.layoutContainer}>
      <LecturerSidebar />
      <div className={styles.mainContent}>
        <LecturerHeader profileData={profileData} />
        <main className={styles.pageContent}>
          {children}
        </main>
      </div>
    </div>
  );
}
