import React from 'react';
import styles from './StudentProfile.module.css';

export default function ProfileHeader() {
  return (
    <div className={styles.header}>
      <div>
        <h1 className={styles.title}>Chỉnh sửa thông tin Sinh viên</h1>
        <p className={styles.subtitle}>
          Cập nhật hồ sơ học thuật và thông tin liên lạc của sinh viên để đảm bảo tính chính xác của hệ thống dữ liệu nhà trường.
        </p>
      </div>
      <div className={styles.actionGroup}>
        <button className={styles.btnCancel}>Hủy bỏ</button>
        <button className={styles.btnSubmit}>Lưu thay đổi</button>
      </div>
    </div>
  );
}
