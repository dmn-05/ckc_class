import React from 'react';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import AdminSidebar from '@/components/admin/layout/AdminSidebar';
import AdminHeader from '@/components/admin/layout/AdminHeader';
import styles from '@/components/admin/layout/AdminLayout.module.css';

export const metadata: Metadata = {
  title: {
    template: "%s | Quản trị viên - CKC CLASS",
    default: "Cổng thông tin Quản trị viên | CKC CLASS",
  },
  description: "Cổng thông tin Quản trị viên hệ thống CKC CLASSROOM",
};

async function getUserProfile() {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token')?.value;

  if (!token) return null;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/admin/profile`, {
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

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const profileData = await getUserProfile();

  return (
    <div className={styles.layoutContainer}>
      <AdminSidebar />
      <div className={styles.mainContent}>
        <AdminHeader profileData={profileData} />
        <main className={styles.pageContent}>
          {children}
        </main>
      </div>
    </div>
  );
}

