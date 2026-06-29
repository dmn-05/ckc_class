'use client';

import React from 'react';
import Link from 'next/link';
import styles from './CourseManagement.module.css';

export interface CourseType {
  id: string;
  code: string;
  semester: string;
  title: string;
  instructor: string;
  schedule: string;
  enrolledStudents: number;
  isActive: boolean;
  score?: string; // For completed courses
  themeColor?: 'primary' | 'secondary';
}

interface EnrolledCoursesProps {
  activeCourses: CourseType[];
}

export default function EnrolledCourses({ activeCourses }: EnrolledCoursesProps) {

  return (
    <div className={styles.mainColumn}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>Lớp học phần đã đăng ký</h3>
        <div className={styles.viewToggles}>
          <button className={styles.viewBtn}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button className={styles.viewBtn}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.cardsGrid}>
        {/* Active Courses */}
        {activeCourses.map((course) => {
          const headerThemeClass = course.themeColor === 'secondary' ? styles.cardHeaderSecondary : styles.cardHeaderPrimary;
          const codeThemeClass = course.themeColor === 'secondary' ? styles.codeSecondary : styles.codePrimary;
          const titleHoverClass = course.themeColor === 'secondary' ? styles.hoverSecondary : styles.hoverPrimary;

          return (
            <Link key={course.id} href={`/student/courses/${course.id}`} style={{ textDecoration: 'none' }}>
              <div className={styles.academicCard}>
                <div className={headerThemeClass}></div>
                <div className={styles.cardContent}>
                <div className={styles.cardTopRow}>
                  <span className={`${styles.courseCode} ${codeThemeClass}`}>{course.code}</span>
                  <span className={styles.courseSemester}>{course.semester}</span>
                </div>
                
                <h4 className={`${styles.courseTitle} ${titleHoverClass}`}>{course.title}</h4>
                
                <div className={styles.courseInfo}>
                  <div className={styles.infoRow}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" height="18">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>{course.instructor}</span>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#5f6368', fontSize: '0.875rem' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" height="18">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span>{course.enrolledStudents || 0} sinh viên</span>
                  </div>
                </div>
              </div>
              </div>
            </Link>
          );
        })}



      </div>
    </div>
  );
}
