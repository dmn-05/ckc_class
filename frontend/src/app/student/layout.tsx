import React from 'react';
import StudentSidebar from '@/components/layout/StudentSidebar';
import StudentHeader from '@/components/layout/StudentHeader';
import styles from '@/components/layout/StudentLayout.module.css';

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layoutContainer}>
      <StudentSidebar />
      <div className={styles.mainContent}>
        <StudentHeader />
        <main className={styles.pageContent}>
          {children}
        </main>
      </div>
    </div>
  );
}
