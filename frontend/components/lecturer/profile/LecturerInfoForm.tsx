'use client';

import React from 'react';
import styles from './LecturerProfile.module.css';

export default function LecturerInfoForm({ profileData, formData, onChange }: { profileData?: any, formData?: any, onChange?: any }) {
  return (
    <>
      <section className={styles.glassCard}>
        <div className={styles.formHeader}>
          <span className={`material-symbols-outlined ${styles.formIcon}`}>person_search</span>
          <h2 className={styles.formTitle}>Thông tin cơ bản</h2>
        </div>
        <div className={styles.formGrid}>
          
          {/* Họ và tên */}
          <div className={styles.formGroupFull}>
            <label className={styles.label} htmlFor="ho_ten">Họ và tên</label>
            <div className={styles.inputGlow}>
              <input 
                type="text" 
                id="ho_ten"
                className={styles.inputField} 
                value={formData?.ho_ten || ''}
                onChange={onChange}
              />
            </div>
          </div>

          {/* Mã giảng viên (Readonly) */}
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="ma_giang_vien">Mã giảng viên</label>
            <div className={`${styles.inputGlow} ${styles.inputDisabled}`}>
              <input 
                type="text" 
                id="ma_giang_vien"
                className={styles.inputField} 
                value={profileData?.giang_vien?.ma_giang_vien || ''}
                disabled
                readOnly
              />
              <span className={`material-symbols-outlined ${styles.inputIconRight}`}>lock</span>
            </div>
          </div>

          {/* Ngày sinh */}
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="ngay_sinh">Ngày sinh</label>
            <div className={styles.inputGlow}>
              <input 
                type="date" 
                id="ngay_sinh"
                className={styles.inputField} 
                value={formData?.ngay_sinh || ''}
                onChange={onChange}
              />
            </div>
          </div>

          {/* Giới tính */}
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="gioi_tinh">Giới tính</label>
            <div className={styles.inputGlow}>
              <select 
                id="gioi_tinh"
                className={styles.inputField}
                value={formData?.gioi_tinh || ''}
                onChange={onChange}
              >
                <option value="">-- Chọn giới tính --</option>
                <option value="nam">Nam</option>
                <option value="nu">Nữ</option>
                <option value="khac">Khác</option>
              </select>
              <span className={`material-symbols-outlined ${styles.inputIconRight}`}>expand_more</span>
            </div>
          </div>

          {/* Số CCCD / CMND */}
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="cccd">Số CCCD / CMND (12 chữ số)</label>
            <div className={styles.inputGlow}>
              <input 
                type="text" 
                id="cccd"
                maxLength={12}
                placeholder="Nhập đúng 12 chữ số CCCD"
                className={styles.inputField} 
                value={formData?.cccd || ''}
                onChange={onChange}
              />
            </div>
          </div>

          {/* Bộ môn (Readonly) */}
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="bo_mon">Bộ môn</label>
            <div className={`${styles.inputGlow} ${styles.inputDisabled}`}>
              <input 
                type="text" 
                id="bo_mon"
                className={styles.inputField} 
                value={profileData?.giang_vien?.bo_mon?.ten_bo_mon || ''}
                disabled
                readOnly
              />
              <span className={`material-symbols-outlined ${styles.inputIconRight}`}>lock</span>
            </div>
          </div>

        </div>
      </section>

      <section className={styles.glassCard}>
        <div className={styles.formHeader}>
          <span className={`material-symbols-outlined ${styles.formIcon}`}>contact_mail</span>
          <h2 className={styles.formTitle}>Thông tin liên lạc</h2>
        </div>
        <div className={styles.formGrid}>
          
          {/* Email */}
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">Email liên hệ (@ckc.edu.vn)</label>
            <div className={styles.inputGlow}>
              <span className={`material-symbols-outlined ${styles.inputIcon}`}>alternate_email</span>
              <input 
                type="email" 
                id="email"
                placeholder="vidu@ckc.edu.vn"
                className={styles.inputField} 
                value={formData?.email || ''}
                onChange={onChange}
              />
            </div>
          </div>

          {/* Số điện thoại */}
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="so_dien_thoai">Số điện thoại (10 chữ số)</label>
            <div className={styles.inputGlow}>
              <span className={`material-symbols-outlined ${styles.inputIcon}`}>smartphone</span>
              <input 
                type="tel" 
                id="so_dien_thoai"
                maxLength={10}
                placeholder="Nhập đúng 10 chữ số điện thoại"
                className={styles.inputField} 
                value={formData?.so_dien_thoai || ''}
                onChange={onChange}
              />
            </div>
          </div>

          {/* Địa chỉ */}
          <div className={styles.formGroupFull}>
            <label className={styles.label} htmlFor="dia_chi">Địa chỉ liên hệ</label>
            <div className={styles.inputGlow}>
              <span className={`material-symbols-outlined ${styles.inputIcon}`}>location_on</span>
              <input 
                type="text" 
                id="dia_chi"
                className={styles.inputField} 
                value={formData?.dia_chi || ''}
                onChange={onChange}
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
