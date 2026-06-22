import React from 'react';
import { getDashboardStats } from '@/app/actions/dashboard';
import styles from './Dashboard.module.css';

export default async function AdminDashboardPage() {
  const stats = await getDashboardStats();

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Bảng điều khiển Admin</h1>
      <p className={styles.pageSubtitle}>Chào mừng bạn quay lại hệ thống quản lý đào tạo.</p>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIconBox} ${styles.statIconPrimary}`}>
            <span className="material-symbols-outlined">account_balance</span>
          </div>
          <div className={styles.statContent}>
            <p className={styles.statLabel}>Tổng số Khoa</p>
            <h3 className={styles.statValue}>{stats.faculties}</h3>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIconBox} ${styles.statIconSecondary}`}>
            <span className="material-symbols-outlined">domain</span>
          </div>
          <div className={styles.statContent}>
            <p className={styles.statLabel}>Tổng số Bộ môn</p>
            <h3 className={styles.statValue}>{stats.departments}</h3>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIconBox} ${styles.statIconTertiary}`}>
            <span className="material-symbols-outlined">badge</span>
          </div>
          <div className={styles.statContent}>
            <p className={styles.statLabel}>Tổng số Giảng viên</p>
            <h3 className={styles.statValue}>{stats.lecturers}</h3>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIconBox} ${styles.statIconQuaternary}`}>
            <span className="material-symbols-outlined">school</span>
          </div>
          <div className={styles.statContent}>
            <p className={styles.statLabel}>Tổng số Sinh viên</p>
            <h3 className={styles.statValue}>{stats.students}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
