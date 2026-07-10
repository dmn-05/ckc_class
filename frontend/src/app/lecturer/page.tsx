import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getLecturerDashboardStats } from '@/app/actions/dashboard';
import styles from './Dashboard.module.css';

export const metadata: Metadata = {
  title: 'Bảng điều khiển Giảng viên - CKC',
};

export default async function LecturerDashboardPage() {
  const stats = await getLecturerDashboardStats();

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Bảng điều khiển Giảng viên</h1>
      <p className={styles.pageSubtitle}>
        Chào mừng bạn đến với Cổng thông tin Giảng viên. Dưới đây là thống kê tổng quan các lớp học phần và học liệu được phân công cho bạn.
      </p>

      <div className={styles.statsGrid}>
        <Link href="/lecturer/sections" className={styles.statCard}>
          <div className={`${styles.statIconBox} ${styles.statIconPrimary}`}>
            <span className="material-symbols-outlined">menu_book</span>
          </div>
          <div className={styles.statContent}>
            <p className={styles.statLabel}>Lớp học phần phụ trách</p>
            <h3 className={styles.statValue}>{stats.sections ?? 0}</h3>
          </div>
        </Link>

        <div className={styles.statCard}>
          <div className={`${styles.statIconBox} ${styles.statIconSecondary}`}>
            <span className="material-symbols-outlined">groups</span>
          </div>
          <div className={styles.statContent}>
            <p className={styles.statLabel}>Sinh viên phụ trách</p>
            <h3 className={styles.statValue}>{stats.students ?? 0}</h3>
          </div>
        </div>

        <Link href="/lecturer/quizzes" className={styles.statCard}>
          <div className={`${styles.statIconBox} ${styles.statIconTertiary}`}>
            <span className="material-symbols-outlined">quiz</span>
          </div>
          <div className={styles.statContent}>
            <p className={styles.statLabel}>Bài kiểm tra đã tạo</p>
            <h3 className={styles.statValue}>{stats.exams ?? 0}</h3>
          </div>
        </Link>

        <Link href="/lecturer/assignments" className={styles.statCard}>
          <div className={`${styles.statIconBox} ${styles.statIconQuaternary}`}>
            <span className="material-symbols-outlined">assignment</span>
          </div>
          <div className={styles.statContent}>
            <p className={styles.statLabel}>Bài tập đã giao</p>
            <h3 className={styles.statValue}>{stats.assignments ?? 0}</h3>
          </div>
        </Link>
      </div>

      <div className={styles.quickSection}>
        <h3 className={styles.quickTitle}>Truy cập nhanh</h3>
        <div className={styles.quickGrid}>
          <Link href="/lecturer/sections" className={styles.quickCard}>
            <div className={styles.quickIcon}>
              <span className="material-symbols-outlined">class</span>
            </div>
            <div className={styles.quickText}>
              <h4>Quản lý Học phần</h4>
              <p>Xem danh sách lớp học phần và sinh viên</p>
            </div>
          </Link>

          <Link href="/lecturer/quizzes" className={styles.quickCard}>
            <div className={styles.quickIcon}>
              <span className="material-symbols-outlined">fact_check</span>
            </div>
            <div className={styles.quickText}>
              <h4>Quản lý Bài kiểm tra</h4>
              <p>Tạo và theo dõi điểm bài trắc nghiệm / tự luận</p>
            </div>
          </Link>

          <Link href="/lecturer/assignments" className={styles.quickCard}>
            <div className={styles.quickIcon}>
              <span className="material-symbols-outlined">task</span>
            </div>
            <div className={styles.quickText}>
              <h4>Quản lý Bài tập</h4>
              <p>Chấm bài nộp tự luận và tệp đính kèm</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
