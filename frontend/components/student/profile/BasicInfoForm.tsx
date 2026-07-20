import React from 'react';
import styles from './StudentProfile.module.css';

export default function BasicInfoForm({ profileData, formData, onChange }: { profileData?: any, formData?: any, onChange?: any }) {
  return (
    <section className={styles.glassCard}>
      <div className={styles.formHeader}>
        <span className={`material-symbols-outlined ${styles.formIcon}`}>person_search</span>
        <h2 className={styles.formTitle}>Thông tin cơ bản</h2>
      </div>
      <div className={styles.formGrid}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="ho_ten">Họ và tên</label>
          <div className={styles.inputGlow}>
            <input className={styles.inputField} id="ho_ten" type="text" value={formData?.ho_ten || ''} onChange={onChange} />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="studentid">Mã sinh viên</label>
          <div className={`${styles.inputGlow} ${styles.inputDisabled}`}>
            <input className={styles.inputField} id="studentid" type="text" defaultValue={profileData?.sinh_vien?.ma_sinh_vien || ''} readOnly disabled />
            <span className={`material-symbols-outlined ${styles.inputIconRight}`}>lock</span>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="ngay_sinh">Ngày sinh</label>
          <div className={styles.inputGlow}>
            <input className={styles.inputField} id="ngay_sinh" type="date" value={formData?.ngay_sinh || ''} onChange={onChange} />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="gioi_tinh">Giới tính</label>
          <div className={styles.inputGlow}>
            <select className={styles.inputField} id="gioi_tinh" value={formData?.gioi_tinh || ''} onChange={onChange}>
              <option value="">-- Chọn giới tính --</option>
              <option value="nam">Nam</option>
              <option value="nu">Nữ</option>
              <option value="khac">Khác</option>
            </select>
            <span className={`material-symbols-outlined ${styles.inputIconRight}`}>expand_more</span>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="cccd">Số CCCD / CMND (12 chữ số)</label>
          <div className={styles.inputGlow}>
            <input className={styles.inputField} id="cccd" type="text" maxLength={12} placeholder="Nhập đúng 12 chữ số CCCD" value={formData?.cccd || ''} onChange={onChange} />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="class">Lớp</label>
          <div className={`${styles.inputGlow} ${styles.inputDisabled}`}>
            <input className={styles.inputField} id="class" type="text" defaultValue={profileData?.sinh_vien?.lop?.ten_lop || ''} readOnly disabled />
            <span className={`material-symbols-outlined ${styles.inputIconRight}`}>lock</span>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="department">Khoa</label>
          <div className={`${styles.inputGlow} ${styles.inputDisabled}`}>
            <input className={styles.inputField} id="department" type="text" defaultValue={profileData?.sinh_vien?.lop?.khoa?.ten_khoa || ''} readOnly disabled />
            <span className={`material-symbols-outlined ${styles.inputIconRight}`}>lock</span>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="khoa_hoc">Khóa học</label>
          <div className={`${styles.inputGlow} ${styles.inputDisabled}`}>
            <input className={styles.inputField} id="khoa_hoc" type="text" defaultValue={profileData?.sinh_vien?.khoa_hoc || ''} readOnly disabled placeholder="Chưa cập nhật" />
            <span className={`material-symbols-outlined ${styles.inputIconRight}`}>lock</span>
          </div>
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="academic_status">Trạng thái học tập</label>
          <div className={`${styles.inputGlow} ${styles.inputDisabled}`}>
            <input className={styles.inputField} id="academic_status" type="text" defaultValue={profileData?.sinh_vien?.trang_thai === 'dang_hoc' ? 'Đang học' : (profileData?.sinh_vien?.trang_thai || '')} readOnly disabled />
            <span className={`material-symbols-outlined ${styles.inputIconRight}`}>lock</span>
          </div>
        </div>
      </div>
    </section>
  );
}
