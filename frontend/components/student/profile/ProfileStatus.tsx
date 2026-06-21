import React from 'react';
import styles from './StudentProfile.module.css';

export default function ProfileStatus() {
  return (
    <div className={styles.glassCardSmall}>
      <div className={styles.statusHeader}>
        <span className={`material-symbols-outlined ${styles.statusIcon}`}>verified</span>
        <h4 className={styles.statusTitle}>Trạng thái tài khoản</h4>
      </div>
      <p className={styles.statusText}>
        Hồ sơ đã được xác thực qua hệ thống định danh sinh viên điện tử (e-ID).
      </p>
      <div className={styles.statusBadge}>
        <span className={styles.statusDot}></span>
        Đang hoạt động
      </div>
    </div>
  );
}
