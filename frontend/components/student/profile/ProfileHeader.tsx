import React from 'react';
import styles from './StudentProfile.module.css';

export default function ProfileHeader({
  onSave,
  onCancel,
  onChangePassword,
  isSaving
}: {
  onSave?: () => void;
  onCancel?: () => void;
  onChangePassword?: () => void;
  isSaving?: boolean;
}) {
  return (
    <div className={styles.header}>
      <div>
        <h1 className={styles.title}>Chỉnh sửa thông tin Sinh viên</h1>
        <p className={styles.subtitle}>
          Cập nhật hồ sơ học thuật và thông tin liên lạc của sinh viên để đảm bảo tính chính xác của hệ thống dữ liệu nhà trường.
        </p>
      </div>
      <div className={styles.actionGroup}>
        {onChangePassword && (
          <button
            type="button"
            className={styles.btnChangePassword}
            onClick={onChangePassword}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            Đổi mật khẩu
          </button>
        )}
        <button className={styles.btnCancel} onClick={onCancel} disabled={isSaving}>Hủy bỏ</button>
        <button className={styles.btnSubmit} onClick={onSave} disabled={isSaving}>
          {isSaving ? "Đang lưu..." : "Lưu thay đổi"}
        </button>
      </div>
    </div>
  );
}
