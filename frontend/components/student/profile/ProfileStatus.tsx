import React from 'react';
import styles from './StudentProfile.module.css';

export default function ProfileStatus({ status }: { status?: string }) {
  const isPending = status === 'dang_cho_duyet';
  const isActive = status === 'dang_hoc' || status === 'dang_hoat_dong';

  return (
    <div className={styles.glassCardSmall}>
      <div className={styles.statusHeader}>
        <span className={`material-symbols-outlined ${styles.statusIcon}`}>{isActive ? 'verified' : 'pending'}</span>
        <h4 className={styles.statusTitle}>Trạng thái tài khoản</h4>
      </div>
      <p className={styles.statusText}>
        Hồ sơ đã được xác thực qua hệ thống định danh sinh viên điện tử (e-ID).
      </p>
      <div className={styles.statusBadge}>
        <span className={styles.statusDot} style={{ backgroundColor: isActive ? '#10b981' : (isPending ? '#f59e0b' : '#94a3b8') }}></span>
        {isActive ? 'Đang hoạt động' : (isPending ? 'Chờ duyệt' : (status || ''))}
      </div>
    </div>
  );
}
