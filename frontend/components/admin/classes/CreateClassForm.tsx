'use client';

import React, { useState } from 'react';
import styles from './AdminCreateClasses.module.css';

export default function CreateClassForm() {
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
                  className={styles.formInput} 
                  placeholder="Ví dụ: INT101.1" 
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Môn Học</label>
                <select className={`${styles.formInput} ${styles.formSelect}`}>
                  <option>Chọn Môn học</option>
                  <option>Lập trình hướng đối tượng</option>
                  <option>Cơ sở dữ liệu</option>
                  <option>Mạng máy tính</option>
                </select>
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Giảng viên phụ trách</label>
                <select className={`${styles.formInput} ${styles.formSelect}`}>
                  <option>Chọn Giảng viên</option>
                  <option>Dr. Nguyễn Văn A</option>
                  <option>ThS. Trần Thị B</option>
                  <option>GS. Lê Hoàng C</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Học kỳ - Năm học</label>
                <select className={`${styles.formInput} ${styles.formSelect}`}>
                  <option>HK1 2023-2024</option>
                  <option>HK2 2023-2024</option>
                  <option>HK1 2024-2025</option>
                </select>
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Tình trạng đăng ký</label>
                <select className={`${styles.formInput} ${styles.formSelect}`}>
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
                Thêm Thành Công
              </>
            ) : (
              <>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
                Thêm Lớp Học Phần
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
            <h3 className={styles.suggestionTitle}>Gợi ý đặt mã lớp</h3>
            <p className={styles.suggestionDesc}>
              Mã Lớp Học Phần nên bao gồm Mã Môn Học và số thứ tự lớp. 
              <br/><br/>
              Ví dụ: Môn Lập trình hướng đối tượng có mã "INT101", thì Lớp học phần 1 sẽ có mã "INT101.1" hoặc "INT101.L01".
            </p>
            <div className={styles.suggestionLink}>
              <span style={{ fontSize: '0.75rem' }}>Xem quy định</span>
              <span className={`material-symbols-outlined ${styles.linkIcon}`}>arrow_forward</span>
            </div>
          </div>
        </div>

        {/* Progress/Validation */}
        <div className={styles.card}>
          <div className={styles.progressHeader}>
            <span className={styles.progressLabel}>Mức độ hoàn thiện</span>
            <span className={styles.progressValue}>45%</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: '45%' }}></div>
          </div>
          <ul className={styles.progressList}>
            <li className={styles.progressItem}>
              <span className={`material-symbols-outlined ${styles.progressIconSuccess}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span style={{ color: '#777587' }}>Thông tin cơ bản</span>
            </li>
            <li className={styles.progressItem}>
              <span className={`material-symbols-outlined ${styles.progressIconPending}`}>radio_button_unchecked</span>
              <span style={{ color: '#191c1e' }}>Phân công Giảng viên</span>
            </li>
            <li className={styles.progressItem}>
              <span className={`material-symbols-outlined ${styles.progressIconPending}`}>radio_button_unchecked</span>
              <span style={{ color: '#191c1e' }}>Thiết lập Sĩ số tối đa</span>
            </li>
            <li className={styles.progressItem}>
              <span className={`material-symbols-outlined ${styles.progressIconPending}`}>radio_button_unchecked</span>
              <span style={{ color: '#191c1e' }}>Lịch học & Phòng học</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
