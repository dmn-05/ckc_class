'use client';

import React from 'react';
import styles from './CourseManagement.module.css';

export interface TaskType {
  id: string;
  title: string;
  courseName: string;
  dueDate: string;
  isUrgent: boolean;
}

export interface QuizType {
  id: string;
  day: string;
  month: string;
  title: string;
  time: string;
}

interface CourseSidebarProps {
  tasks: TaskType[];
  quizzes: QuizType[];
  gpa: string;
  progress: number; // Percentage
}

export default function CourseSidebar({ tasks, quizzes, gpa, progress }: CourseSidebarProps) {
  return (
    <div className={styles.sidebarColumn}>
      {/* Assignments Section */}
      <section className={styles.sidebarSection}>
        <div className={styles.sidebarSectionHeader}>
          <h3 className={styles.sidebarSectionTitle}>Bài tập sắp hạn</h3>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24" style={{ color: '#3525cd' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <div className={styles.taskList}>
          {tasks.map(task => (
            <div key={task.id} className={`${styles.taskItem} ${task.isUrgent ? '' : styles.normal}`}>
              <div className={styles.taskHeader}>
                <h5 className={styles.taskTitle}>{task.title}</h5>
                {task.isUrgent && <span className={styles.urgentBadge}>GẤP</span>}
              </div>
              <p className={styles.taskSubtitle}>Môn: {task.courseName}</p>
              <div className={styles.taskMeta}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
                  {task.isUrgent ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  )}
                </svg>
                <span>{task.dueDate}</span>
              </div>
            </div>
          ))}
        </div>
        <button style={{ width: '100%', marginTop: '1.5rem', padding: '0.75rem', fontSize: '0.875rem', fontWeight: 600, color: '#3525cd', border: '1px solid rgba(53, 37, 205, 0.2)', borderRadius: '0.5rem', backgroundColor: 'transparent', cursor: 'pointer', transition: 'all 0.2s' }}>
          Xem tất cả bài tập
        </button>
      </section>

      {/* Quizzes Section */}
      <section className={styles.sidebarSection}>
        <div className={styles.sidebarSectionHeader}>
          <h3 className={styles.sidebarSectionTitle}>Quiz sắp tới</h3>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24" style={{ color: '#4648d4' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className={styles.taskList}>
          {quizzes.map(quiz => (
            <div key={quiz.id} className={styles.quizItem}>
              <div className={styles.quizDateBox}>
                <span className={styles.quizDay}>{quiz.day}</span>
                <span className={styles.quizMonth}>{quiz.month}</span>
              </div>
              <div className={styles.quizInfo}>
                <h5 className={styles.quizTitle}>{quiz.title}</h5>
                <p className={styles.quizMeta}>{quiz.time}</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" style={{ color: '#464555', opacity: 0.5 }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          ))}
        </div>
      </section>

      {/* Stats / Academic Progress */}
      <section className={styles.statsCard}>
        <div className={styles.statsDecoration}></div>
        <h4 className={styles.statsLabel}>GPA Tích lũy</h4>
        <div className={styles.gpaDisplay}>
          <span className={styles.gpaValue}>{gpa}</span>
          <span className={styles.gpaMax}>/ 4.0</span>
        </div>
        <div className={styles.progressContainer}>
          <div className={styles.progressLabels}>
            <span>Tiến độ học tập</span>
            <span>{progress}%</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </section>
    </div>
  );
}
