'use client';

import React, { useState } from 'react';
import styles from './AdminUpdateLecturers.module.css';

interface UpdateLecturerFormProps {
  lecturerId?: string;
}

export default function UpdateLecturerForm({ lecturerId }: UpdateLecturerFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setSubmitStatus('success');
      setTimeout(() => {
        setSubmitStatus('idle');
        setIsSubmitting(false);
        // In real app, redirect here
      }, 2000);
    }, 1500);
  };

  return (
    <div className={styles.layoutGrid}>
      {/* Left Column: Profile Picture & Core Info */}
      <div className={styles.leftColumn}>
        <section className={`${styles.card} ${styles.cardCenter}`}>
          <div className={styles.avatarUploadWrapper}>
            <div className={styles.avatarBox}>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNISFABqVsLgvuamkEPReCzmnSmO7VxRxBXPkL4FySB15KUHHgdK-oxWD3I8iQ0gJpNobKMZvdlN9d6C5WkKIy2u0ShoWgHhqQ4bQlTjAgOM2KJoUzs_CZU5B1COpqUEWG8sb2z7t5VeqlFMnjlhb1lt0iD-n_sCJ-4qYYnIV0QR_VG7XM0PlnAe35pTT3xmyZ7Uzw9wlMZE5HcVVoRsS-UZ23i-tpbZHMqULqQQkkt8w9Y6xOVYxJCxUVM0kLIyJbi3-uZ4gfYUk" 
                alt="Lecturer Profile" 
                className={styles.avatarImg} 
              />
            </div>
            <div className={styles.avatarOverlay}>
              <span className={`material-symbols-outlined ${styles.avatarIcon}`}>edit</span>
            </div>
          </div>
          <h3 className={styles.cardTitle}>Profile Picture</h3>
          <p className={styles.avatarHelpText}>
            Upload a high-resolution portrait. Max size 10MB. JPG or PNG.
          </p>
          <button className={styles.btnUpload} type="button">Change Image</button>
        </section>

        <section className={styles.card}>
          <h3 className={styles.cardTitle}>
            <span className={`material-symbols-outlined ${styles.cardTitleIcon}`}>badge</span>
            Employment Details
          </h3>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Lecturer ID</label>
            <input 
              className={`${styles.formInput} ${styles.formInputDisabled}`} 
              type="text" 
              value={lecturerId || "GV-001"} 
              disabled 
            />
            <span className={styles.helpText}>*Cannot be changed after creation</span>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Status</label>
            <select className={`${styles.formInput} ${styles.formSelect}`} defaultValue="Active">
              <option value="Active">Đang giảng dạy</option>
              <option value="On-Leave">Đang nghỉ phép</option>
              <option value="Retired">Đã nghỉ hưu</option>
            </select>
          </div>
        </section>
      </div>

      {/* Right Column: Personal & Academic Info */}
      <div className={styles.rightColumn}>
        <form onSubmit={handleSubmit} className={styles.leftColumn}>
          {/* Personal Info Card */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              <span className={`material-symbols-outlined ${styles.cardTitleIcon}`}>person</span>
              Personal Information
            </h3>
            <div className={styles.grid2Col}>
              <div className={styles.colSpan2}>
                <label className={styles.formLabel}>Full Name</label>
                <input 
                  className={styles.formInput} 
                  type="text" 
                  placeholder="Enter lecturer's full name" 
                  defaultValue="Nguyễn Văn A"
                  required
                />
              </div>
              <div>
                <label className={styles.formLabel}>Academic Title</label>
                <select className={`${styles.formInput} ${styles.formSelect}`} defaultValue="TS">
                  <option value="ThS">Thạc sĩ (ThS)</option>
                  <option value="TS">Tiến sĩ (TS)</option>
                  <option value="PGS.TS">Phó Giáo sư (PGS.TS)</option>
                  <option value="GS.TS">Giáo sư (GS.TS)</option>
                </select>
              </div>
              <div>
                <label className={styles.formLabel}>Date of Birth</label>
                <input 
                  className={styles.formInput} 
                  type="date" 
                  defaultValue="1980-05-15"
                  required
                />
              </div>
              <div>
                <label className={styles.formLabel}>Gender</label>
                <div className={styles.radioGroup}>
                  <label className={styles.radioLabel}>
                    <input type="radio" name="gender" className={styles.radioInput} defaultChecked />
                    <span className={styles.radioText}>Male</span>
                  </label>
                  <label className={styles.radioLabel}>
                    <input type="radio" name="gender" className={styles.radioInput} />
                    <span className={styles.radioText}>Female</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info Card */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              <span className={`material-symbols-outlined ${styles.cardTitleIcon}`}>contact_mail</span>
              Contact Information
            </h3>
            <div className={styles.grid2Col}>
              <div>
                <label className={styles.formLabel}>Email Address</label>
                <input 
                  className={styles.formInput} 
                  type="email" 
                  placeholder="lecturer@ckc.edu.vn" 
                  defaultValue="nva.it@ckc.edu.vn"
                  required
                />
              </div>
              <div>
                <label className={styles.formLabel}>Phone Number</label>
                <input 
                  className={styles.formInput} 
                  type="tel" 
                  placeholder="+84 000 000 000" 
                  defaultValue="0901234567"
                />
              </div>
              <div className={styles.colSpan2}>
                <label className={styles.formLabel}>Current Address</label>
                <textarea 
                  className={`${styles.formInput} ${styles.formTextarea}`} 
                  rows={3} 
                  placeholder="Street name, District, City..."
                  defaultValue="456 Lý Thường Kiệt, Quận 10, TP.HCM"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Academic Placement Card */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              <span className={`material-symbols-outlined ${styles.cardTitleIcon}`}>school</span>
              Academic Placement
            </h3>
            <div className={styles.grid2Col}>
              <div>
                <label className={styles.formLabel}>Faculty (Khoa)</label>
                <select className={`${styles.formInput} ${styles.formSelect}`} defaultValue="CNTT">
                  <option value="CNTT">Công nghệ thông tin</option>
                  <option value="CK">Cơ khí</option>
                  <option value="DDT">Điện - Điện tử</option>
                  <option value="KT">Kinh tế</option>
                </select>
              </div>
              <div>
                <label className={styles.formLabel}>Specialization (Bộ môn)</label>
                <select className={`${styles.formInput} ${styles.formSelect}`} defaultValue="KHMT">
                  <option value="KHMT">Khoa học Máy tính</option>
                  <option value="HTTT">Hệ thống Thông tin</option>
                  <option value="KTPM">Kỹ thuật Phần mềm</option>
                  <option value="MMT">Mạng Máy tính</option>
                </select>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className={styles.formActions}>
            <button type="button" className={styles.btnDiscard}>Cancel</button>
            <button 
              type="submit" 
              className={styles.btnSubmit}
              disabled={isSubmitting}
              style={{ backgroundColor: submitStatus === 'success' ? '#059669' : '' }}
            >
              {isSubmitting && submitStatus === 'idle' ? (
                <>
                  <span className="material-symbols-outlined" style={{ animation: 'spin 1s linear infinite' }}>sync</span>
                  Updating...
                </>
              ) : submitStatus === 'success' ? (
                <>
                  <span className="material-symbols-outlined">check_circle</span>
                  Updated Successfully
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined">save</span>
                  Cập Nhật
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
