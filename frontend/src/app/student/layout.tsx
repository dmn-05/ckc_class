import React from 'react';
import StudentSidebar from '../../../components/student/layout/StudentSidebar';
import StudentHeader from '../../../components/student/layout/StudentHeader';
import styles from '@/components/student/layout/StudentLayout.module.css';

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
