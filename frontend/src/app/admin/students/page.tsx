import React from 'react';
import StudentsHeader from '@/components/admin/students/StudentsHeader';
import StudentsStats from '@/components/admin/students/StudentsStats';
import StudentsFilter from '@/components/admin/students/StudentsFilter';
import StudentsToolbar from '@/components/admin/students/StudentsToolbar';
import StudentsList from '@/components/admin/students/StudentsList';
import StudentsPagination from '@/components/admin/students/StudentsPagination';
import styles from '@/components/admin/students/AdminStudents.module.css';

export default function AdminStudentsPage() {
  return (
    <div className={styles.container}>
      <StudentsHeader />
      
      <div className={styles.grid}>
        {/* Left Column: Statistics & Filters */}
        <div className={styles.leftColumn}>
          <StudentsStats />
          <StudentsFilter />
        </div>
        
        {/* Right Column: Student List */}
        <div className={styles.rightColumn}>
          <StudentsToolbar />
          <StudentsList />
          <StudentsPagination />
        </div>
      </div>
    </div>
  );
}
