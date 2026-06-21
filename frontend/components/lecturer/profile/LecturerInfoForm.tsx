'use client';

import React, { useState } from 'react';
import styles from './LecturerProfile.module.css';

export default function LecturerInfoForm() {
  const [formData, setFormData] = useState({
    fullName: 'Nguyễn Văn Minh',
    id: 'GV.102948',
    degree: 'Tiến sĩ',
    department: 'Khoa Công nghệ thông tin',
    email: 'minh.nv@academic.edu.vn',
    researchArea: 'Học máy, Trí tuệ nhân tạo ứng dụng trong y tế, Phân tích dữ liệu lớn và Hệ thống gợi ý thông minh.'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate save
    alert('Thông tin đã được lưu!');
  };

  return (
    <form className={styles.glassCard} onSubmit={handleSubmit}>
      <div className={styles.formGrid}>
        
        {/* Họ và tên */}
        <div className={styles.formGroupFull}>
          <label className={styles.label}>Họ và tên</label>
          <div className={styles.inputGlow}>
            <input 
              type="text" 
              name="fullName"
              className={styles.inputField} 
              placeholder="Nhập họ và tên đầy đủ"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Mã giảng viên (Readonly) */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Mã giảng viên</label>
          <div className={`${styles.inputGlow} ${styles.inputDisabled}`}>
            <input 
              type="text" 
              name="id"
              className={styles.inputField} 
              value={formData.id}
              disabled
              readOnly
            />
            <span className={`material-symbols-outlined ${styles.inputIconRight}`}>lock</span>
          </div>
        </div>

        {/* Học hàm / Học vị */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Học hàm / Học vị</label>
          <div className={styles.inputGlow}>
            <select 
              name="degree"
              className={styles.inputField}
              value={formData.degree}
              onChange={handleChange}
            >
              <option value="Cử nhân">Cử nhân</option>
              <option value="Thạc sĩ">Thạc sĩ</option>
              <option value="Tiến sĩ">Tiến sĩ</option>
              <option value="Phó Giáo sư">Phó Giáo sư</option>
              <option value="Giáo sư">Giáo sư</option>
            </select>
            <span className={`material-symbols-outlined ${styles.inputIconRight}`}>expand_more</span>
          </div>
        </div>

        {/* Khoa công tác */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Khoa công tác</label>
          <div className={styles.inputGlow}>
            <select 
              name="department"
              className={styles.inputField}
              value={formData.department}
              onChange={handleChange}
            >
              <option value="Khoa Công nghệ thông tin">Khoa Công nghệ thông tin</option>
              <option value="Khoa Kinh tế">Khoa Kinh tế</option>
              <option value="Khoa Điện - Điện tử">Khoa Điện - Điện tử</option>
              <option value="Khoa Cơ khí">Khoa Cơ khí</option>
            </select>
            <span className={`material-symbols-outlined ${styles.inputIconRight}`}>expand_more</span>
          </div>
        </div>

        {/* Email chuyên môn */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Email chuyên môn</label>
          <div className={styles.inputGlow}>
            <input 
              type="email" 
              name="email"
              className={styles.inputField} 
              placeholder="example@academic.edu.vn"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Lĩnh vực nghiên cứu */}
        <div className={styles.formGroupFull}>
          <label className={styles.label}>Lĩnh vực nghiên cứu</label>
          <div className={styles.inputGlow} style={{ paddingRight: '0.5rem' }}>
            <textarea 
              name="researchArea"
              className={styles.textareaField} 
              rows={4}
              placeholder="Mô tả các hướng nghiên cứu chính..."
              value={formData.researchArea}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className={styles.securityInfo}>
        <span className={`material-symbols-outlined ${styles.securityIcon}`}>info</span>
        <p className={styles.securityText}>
          Thông tin mã giảng viên và ngày tham gia chỉ có thể được thay đổi bởi Quản trị viên hệ thống. Vui lòng liên hệ phòng nhân sự nếu có sai sót.
        </p>
      </div>
    </form>
  );
}
