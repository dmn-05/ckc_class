'use client';

import React, { useState } from 'react';
import styles from './AdminCreateFaculties.module.css';

export default function CreateFacultyForm() {
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
            Thông tin cơ bản của Khoa
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Tên Khoa</label>
                <input 
                  type="text" 
                  className={styles.formInput} 
                  placeholder="Ví dụ: Khoa Công nghệ thông tin" 
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Mã Khoa</label>
                <input 
                  type="text" 
                  className={styles.formInput} 
                  placeholder="e.g. FIT-01" 
                  required
                />
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Trưởng Khoa</label>
                <select className={`${styles.formInput} ${styles.formSelect}`}>
                  <option>Chọn một Giảng viên</option>
                  <option>Dr. John Doe</option>
                  <option>Prof. Sarah Williams</option>
                  <option>Dr. Alan Smith</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Trạng thái hoạt động</label>
                <select className={`${styles.formInput} ${styles.formSelect}`}>
                  <option value="active">Đang hoạt động</option>
                  <option value="inactive">Tạm ngưng</option>
                  <option value="planning">Đang lên kế hoạch</option>
                </select>
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Số lượng sinh viên</label>
                <div className={styles.inputWithIcon}>
                  <input 
                    type="number" 
                    className={styles.formInput} 
                    placeholder="0" 
                  />
                  <span className={`material-symbols-outlined ${styles.inputIcon}`}>group</span>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Số lượng giảng viên</label>
                <div className={styles.inputWithIcon}>
                  <input 
                    type="number" 
                    className={styles.formInput} 
                    placeholder="0" 
                  />
                  <span className={`material-symbols-outlined ${styles.inputIcon}`}>badge</span>
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
                Thêm Khoa
              </>
            )}
          </button>
        </div>
      </div>

      {/* Sidebar / Assets Column */}
      <div className={styles.sideCol}>
        {/* Image Upload Area */}
        <div className={styles.card}>
          <h3 className={styles.uploadTitle}>Hình ảnh đại diện của Khoa</h3>
          <div className={styles.uploadArea}>
            <img 
              alt="Faculty Preview" 
              className={styles.uploadImgPreview} 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6HHIKGNwVqVSr80zhnEDzIOkAidjV1NqewArqgD2vxmPnA_Gyh9XBeGt3p4-7tOlAXikrANUvRH3YUM2nqhyK5veSRhdzpWZyPhW3U_AByoEGutPB9ffX2wWx_Orvfmfz3j0cO5tHhEnwQ2wsCkXGC0xoBUXi2ci32zEhaRb33HpQxhhb-Oi63JN42k6YnTTUZ_QTAvDTYtp9qc_xXawMK3nfZuJh0gU2n6B7ys_G7WJXo_I2WIEkt_kD8b8HkcqKpWb3gAaRUeY"
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
              Sử dụng quy chuẩn đặt tên thống nhất như "Khoa [Chuyên ngành]" để duy trì tính nhất quán. Mã khoa nên là duy nhất và lý tưởng nhất là từ 3-6 ký tự.
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
              <span style={{ color: '#777587' }}>Phân công Trưởng khoa</span>
            </li>
            <li className={styles.progressItem}>
              <span className={`material-symbols-outlined ${styles.progressIconPending}`}>radio_button_unchecked</span>
              <span style={{ color: '#191c1e' }}>Chi tiết quy mô</span>
            </li>
            <li className={styles.progressItem}>
              <span className={`material-symbols-outlined ${styles.progressIconPending}`}>radio_button_unchecked</span>
              <span style={{ color: '#191c1e' }}>Ảnh bìa đại diện</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
