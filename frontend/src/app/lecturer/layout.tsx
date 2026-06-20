import React from 'react';
import LecturerSidebar from '@/components/layout/LecturerSidebar';
import LecturerHeader from '@/components/layout/LecturerHeader';
import styles from '@/components/layout/LecturerLayout.module.css';

export default function LecturerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layoutContainer}>
      <LecturerSidebar />
      <div className={styles.mainContent}>
        <LecturerHeader />
        <main className={styles.pageContent}>
          {children}
        </main>
      </div>
    </div>
  );
}
