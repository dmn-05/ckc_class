'use client';

import React, { useState } from 'react';
import styles from './AdminUpdateClasses.module.css';

interface UpdateClassFormProps {
  classId?: string;
}

export default function UpdateClassForm({ classId }: UpdateClassFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setSubmitStatus('success');
      setTimeout(() => {
        setSubmitStatus('idle');
        setIsSubmitting(false);
      }, 2000);
    }, 1500);
  };

  return (
    <div className={styles.layoutGrid}>
      {/* Main Form Column */}
      <div className={styles.mainCol}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <span className={`material-symbols-outlined ${styles.cardTitleIcon}`}>info</span>
            Thông tin Lớp Học Phần
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Mã Lớp Học Phần</label>
                <input 
                  type="text" 
                  className={`${styles.formInput} ${styles.formInputDisabled}`} 
                  placeholder="Ví dụ: INT101.1" 
                  defaultValue={classId || "INT101.1"}
                  disabled
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Môn Học</label>
                <select className={`${styles.formInput} ${styles.formSelect}`} defaultValue="Lập trình hướng đối tượng">
                  <option>Chọn Môn học</option>
                  <option value="Lập trình hướng đối tượng">Lập trình hướng đối tượng</option>
                  <option value="Cơ sở dữ liệu">Cơ sở dữ liệu</option>
                  <option value="Mạng máy tính">Mạng máy tính</option>
                </select>
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Giảng viên phụ trách</label>
                <select className={`${styles.formInput} ${styles.formSelect}`} defaultValue="Dr. Nguyễn Văn A">
                  <option>Chọn Giảng viên</option>
                  <option value="Dr. Nguyễn Văn A">Dr. Nguyễn Văn A</option>
                  <option value="ThS. Trần Thị B">ThS. Trần Thị B</option>
                  <option value="GS. Lê Hoàng C">GS. Lê Hoàng C</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Học kỳ - Năm học</label>
                <select className={`${styles.formInput} ${styles.formSelect}`} defaultValue="HK1 2023-2024">
                  <option value="HK1 2023-2024">HK1 2023-2024</option>
                  <option value="HK2 2023-2024">HK2 2023-2024</option>
                  <option value="HK1 2024-2025">HK1 2024-2025</option>
                </select>
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Tình trạng đăng ký</label>
                <select className={`${styles.formInput} ${styles.formSelect}`} defaultValue="learning">
                  <option value="open">Đang mở đăng ký</option>
                  <option value="locked">Đã khóa</option>
                  <option value="learning">Đang học</option>
                  <option value="finished">Đã kết thúc</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Sĩ số tối đa</label>
                <div className={styles.inputWithIcon}>
                  <input 
                    type="number" 
                    className={styles.formInput} 
                    placeholder="Ví dụ: 50" 
                    defaultValue={40}
                  />
                  <span className={`material-symbols-outlined ${styles.inputIcon}`}>group</span>
                </div>
              </div>
            </div>

            <div className={styles.formGrid} style={{ gridTemplateColumns: '1fr' }}>
               <div className={styles.formGroup}>
                <label className={styles.formLabel}>Lịch học dự kiến</label>
                <div className={styles.inputWithIcon}>
                  <input 
                    type="text" 
                    className={styles.formInput} 
                    placeholder="Ví dụ: Thứ 2 (Tiết 1-3) - Phòng A1.01"
                    defaultValue="Thứ 2 (Tiết 1-3) - Phòng A1.01"
                  />
                  <span className={`material-symbols-outlined ${styles.inputIcon}`}>calendar_today</span>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Submission Actions */}
        <div className={styles.actionsRow}>
          <button type="button" className={styles.btnSecondary}>
            Hủy bỏ
          </button>
          <button 
            type="submit" 
            className={styles.btnPrimary}
            onClick={handleSubmit}
            disabled={isSubmitting}
            style={{ backgroundColor: submitStatus === 'success' ? '#059669' : '' }}
          >
            {isSubmitting && submitStatus === 'idle' ? (
              <>
                <span className="material-symbols-outlined" style={{ animation: 'spin 1s linear infinite' }}>sync</span>
                Đang xử lý...
              </>
            ) : submitStatus === 'success' ? (
              <>
                <span className="material-symbols-outlined">check_circle</span>
                Cập Nhật Thành Công
              </>
            ) : (
              <>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>save</span>
                Cập Nhật Lớp
              </>
            )}
          </button>
        </div>
      </div>

      {/* Sidebar / Assets Column */}
      <div className={styles.sideCol}>
        {/* Suggestion Card */}
        <div className={styles.suggestionCard}>
          <div className={styles.suggestionGlow}></div>
          <div className={styles.suggestionContent}>
            <div className={styles.suggestionIcon}>
              <span className="material-symbols-outlined">lightbulb</span>
            </div>
            <h3 className={styles.suggestionTitle}>Lưu ý cập nhật</h3>
            <p className={styles.suggestionDesc}>
              Thay đổi Tình trạng sang "Đã khóa" sẽ ngăn sinh viên tiếp tục đăng ký. Mã Lớp Học Phần không thể thay đổi sau khi tạo để tránh xung đột dữ liệu đăng ký.
            </p>
            <div className={styles.suggestionLink}>
              <span style={{ fontSize: '0.75rem' }}>Xem quy định khóa lớp</span>
              <span className={`material-symbols-outlined ${styles.linkIcon}`}>arrow_forward</span>
            </div>
          </div>
        </div>

        {/* Progress/Validation */}
        <div className={styles.card}>
          <div className={styles.progressHeader}>
            <span className={styles.progressLabel}>Mức độ hoàn thiện</span>
            <span className={styles.progressValue}>100%</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: '100%' }}></div>
          </div>
          <ul className={styles.progressList}>
            <li className={styles.progressItem}>
              <span className={`material-symbols-outlined ${styles.progressIconSuccess}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span style={{ color: '#777587' }}>Thông tin cơ bản</span>
            </li>
            <li className={styles.progressItem}>
              <span className={`material-symbols-outlined ${styles.progressIconSuccess}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span style={{ color: '#777587' }}>Phân công Giảng viên</span>
            </li>
            <li className={styles.progressItem}>
              <span className={`material-symbols-outlined ${styles.progressIconSuccess}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span style={{ color: '#777587' }}>Thiết lập Sĩ số tối đa</span>
            </li>
            <li className={styles.progressItem}>
              <span className={`material-symbols-outlined ${styles.progressIconSuccess}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span style={{ color: '#777587' }}>Lịch học & Phòng học</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
