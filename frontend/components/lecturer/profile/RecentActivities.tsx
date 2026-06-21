import React from 'react';
import styles from './LecturerProfile.module.css';

export default function RecentActivities() {
  return (
    <div className={styles.glassCardSmall}>
      <h4 className={styles.activitiesTitle}>Hoạt động gần đây</h4>
      <ul className={styles.activityList}>
        <li className={styles.activityItem}>
          <div className={styles.activityDotPrimary}></div>
          <div>
            <p className={styles.activityText}>Đã cập nhật Môn học: Trí tuệ nhân tạo</p>
            <p className={styles.activityTime}>2 giờ trước</p>
          </div>
        </li>
        <li className={styles.activityItem}>
          <div className={styles.activityDotSecondary}></div>
          <div>
            <p className={styles.activityText}>Đã nộp báo cáo nghiên cứu quý 3</p>
            <p className={styles.activityTime}>Hôm qua</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
