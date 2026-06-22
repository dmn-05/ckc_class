'use client';

import React, { useState } from 'react';
import styles from './AdminCreateDepartments.module.css';

export default function CreateDepartmentForm() {
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
            Thông tin cơ bản của Bộ Môn
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Tên Bộ Môn</label>
                <input 
                  type="text" 
                  className={styles.formInput} 
                  placeholder="Ví dụ: Khoa học máy tính" 
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Mã Bộ Môn</label>
                <input 
                  type="text" 
                  className={styles.formInput} 
                  placeholder="e.g. CS-01" 
                  required
                />
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Thuộc Khoa</label>
                <select className={`${styles.formInput} ${styles.formSelect}`}>
                  <option>Chọn một Khoa</option>
                  <option>Công nghệ thông tin</option>
                  <option>Cơ khí</option>
                  <option>Điện - Điện tử</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Trưởng Bộ Môn</label>
                <select className={`${styles.formInput} ${styles.formSelect}`}>
                  <option>Chọn một Giảng viên</option>
                  <option>Dr. John Doe</option>
                  <option>Prof. Sarah Williams</option>
                  <option>Dr. Alan Smith</option>
                </select>
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Trạng thái hoạt động</label>
                <select className={`${styles.formInput} ${styles.formSelect}`}>
                  <option value="active">Đang hoạt động</option>
                  <option value="inactive">Tạm ngưng</option>
                  <option value="planning">Đang lên kế hoạch</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Số lượng môn học</label>
                <div className={styles.inputWithIcon}>
                  <input 
                    type="number" 
                    className={styles.formInput} 
                    placeholder="0" 
                  />
                  <span className={`material-symbols-outlined ${styles.inputIcon}`}>menu_book</span>
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
                Thêm Bộ Môn
              </>
            )}
          </button>
        </div>
      </div>

      {/* Sidebar / Assets Column */}
      <div className={styles.sideCol}>
        {/* Image Upload Area */}
        <div className={styles.card}>
          <h3 className={styles.uploadTitle}>Hình ảnh minh họa</h3>
          <div className={styles.uploadArea}>
            <img 
              alt="Department Preview" 
              className={styles.uploadImgPreview} 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"
            />
            <div className={styles.uploadContent}>
              <span className={`material-symbols-outlined ${styles.uploadIcon}`}>upload_file</span>
              <p className={styles.uploadText}>Nhấn để tải ảnh lên</p>
              <p className={styles.uploadHint}>Recommended: 1200x800px (JPG, PNG)</p>
            </div>
          </div>
        </div>

        {/* Suggestion Card */}
        <div className={styles.suggestionCard}>
          <div className={styles.suggestionGlow}></div>
          <div className={styles.suggestionContent}>
            <div className={styles.suggestionIcon}>
              <span className="material-symbols-outlined">lightbulb</span>
            </div>
            <h3 className={styles.suggestionTitle}>Gợi ý</h3>
            <p className={styles.suggestionDesc}>
              Sử dụng quy chuẩn đặt tên thống nhất như "Bộ môn [Tên bộ môn]" để duy trì tính nhất quán. Một Bộ môn bắt buộc phải thuộc quản lý của một Khoa.
            </p>
            <div className={styles.suggestionLink}>
              <span style={{ fontSize: '0.75rem' }}>Xem hướng dẫn đặt tên</span>
              <span className={`material-symbols-outlined ${styles.linkIcon}`}>arrow_forward</span>
            </div>
          </div>
        </div>

        {/* Progress/Validation */}
        <div className={styles.card}>
          <div className={styles.progressHeader}>
            <span className={styles.progressLabel}>Mức độ hoàn thiện</span>
            <span className={styles.progressValue}>65%</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: '65%' }}></div>
          </div>
          <ul className={styles.progressList}>
            <li className={styles.progressItem}>
              <span className={`material-symbols-outlined ${styles.progressIconSuccess}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span style={{ color: '#777587' }}>Thông tin cơ bản</span>
            </li>
            <li className={styles.progressItem}>
              <span className={`material-symbols-outlined ${styles.progressIconSuccess}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span style={{ color: '#777587' }}>Gán vào Khoa quản lý</span>
            </li>
            <li className={styles.progressItem}>
              <span className={`material-symbols-outlined ${styles.progressIconPending}`}>radio_button_unchecked</span>
              <span style={{ color: '#191c1e' }}>Phân công Trưởng bộ môn</span>
            </li>
            <li className={styles.progressItem}>
              <span className={`material-symbols-outlined ${styles.progressIconPending}`}>radio_button_unchecked</span>
              <span style={{ color: '#191c1e' }}>Ảnh minh họa</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
