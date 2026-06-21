import React from 'react';
import styles from './LecturerProfile.module.css';

export default function ProfileHeader() {
  return (
    <div className={styles.header}>
      <div>
        <h1 className={styles.title}>Chỉnh sửa thông tin Giảng viên</h1>
        <p className={styles.subtitle}>
          Cập nhật hồ sơ chuyên môn và thông tin định danh của giảng viên trong hệ thống học thuật.
        </p>
      </div>
      <div className={styles.actionGroup}>
        <button className={styles.btnCancel}>Hủy bỏ</button>
        <button className={styles.btnSubmit}>Lưu thay đổi</button>
      </div>
    </div>
  );
}
