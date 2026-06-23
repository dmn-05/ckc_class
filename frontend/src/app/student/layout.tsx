import React from 'react';
import { cookies } from 'next/headers';
import StudentSidebar from '../../../components/student/layout/StudentSidebar';
import StudentHeader from '../../../components/student/layout/StudentHeader';

import styles from '@/components/student/layout/StudentLayout.module.css';

async function getUserProfile() {
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
    return null;
  }
}

export default async function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const profileData = await getUserProfile();

  return (
    <div className={styles.layoutContainer}>
      <StudentSidebar />
      <div className={styles.mainContent}>
        <StudentHeader profileData={profileData} />
        <main className={styles.pageContent}>
          {children}
        </main>
      </div>
    </div>
  );
}
