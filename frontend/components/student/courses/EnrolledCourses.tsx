'use client';

import React, { useState } from 'react';
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
  completedCourses: CourseType[];
}

export default function EnrolledCourses({ activeCourses, completedCourses }: EnrolledCoursesProps) {
  const [courses, setCourses] = useState(activeCourses);

  const handleCancel = (id: string) => {
    if (confirm('Bạn có chắc chắn muốn hủy đăng ký lớp học này?')) {
      setCourses(courses.map(c => 
        c.id === id ? { ...c, isActive: false } : c
      ));
    }
  };

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
        {courses.map((course) => {
          const isCancelled = !course.isActive;
          const headerThemeClass = course.themeColor === 'secondary' ? styles.cardHeaderSecondary : styles.cardHeaderPrimary;
          const codeThemeClass = course.themeColor === 'secondary' ? styles.codeSecondary : styles.codePrimary;
          const titleHoverClass = course.themeColor === 'secondary' ? styles.hoverSecondary : styles.hoverPrimary;

          return (
            <div key={course.id} className={`${styles.academicCard} ${isCancelled ? styles.cancelled : ''}`}>
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
                  <div className={styles.infoRow}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" height="18">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{course.schedule}</span>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid #fff', backgroundColor: '#e6e8ea', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold' }}>
                      +{course.enrolledStudents}
                    </div>
                  </div>
                  <button 
                    className={`${styles.btnCancel} ${isCancelled ? styles.btnCancelled : ''}`}
                    onClick={() => handleCancel(course.id)}
                    disabled={isCancelled}
                  >
                    {isCancelled ? 'Đã hủy' : 'Hủy đăng ký'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {/* Completed Courses */}
        {completedCourses.map((course) => (
          <div key={course.id} className={styles.completedCard}>
            <div className={styles.cardContent} style={{ padding: 0 }}>
              <div className={styles.cardTopRow}>
                <span className={`${styles.courseCode} ${styles.codeCompleted}`}>{course.code}</span>
                <span className={styles.courseSemester}>{course.semester}</span>
              </div>
              
              <h4 className={styles.courseTitle} style={{ marginBottom: '1rem' }}>{course.title}</h4>
              
              <div className={styles.courseInfo} style={{ marginBottom: '1rem' }}>
                <div className={styles.infoRow}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" height="18">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Đã kết thúc môn học</span>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.scoreContainer}>
                  <span className={styles.scoreLabel}>Điểm tổng kết</span>
                  <span className={styles.scoreValue}>{course.score}</span>
                </div>
                <button className={styles.btnDetails}>Xem chi tiết</button>
              </div>
            </div>
          </div>
        ))}

        {/* Add Course Ghost Card */}
        <div className={styles.addCard}>
          <div className={styles.addIconCircle}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="32" height="32">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <span className={styles.addText}>Đăng ký thêm học phần</span>
        </div>

      </div>
    </div>
  );
}
