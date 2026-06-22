'use client';

import React, { useState } from 'react';
import styles from './AdminUpdateFaculties.module.css';

interface UpdateFacultyFormProps {
  facultyId?: string;
}

export default function UpdateFacultyForm({ facultyId }: UpdateFacultyFormProps) {
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
                  defaultValue="Khoa Công nghệ thông tin"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Mã Khoa</label>
                <input 
                  type="text" 
                  className={`${styles.formInput} ${styles.formInputDisabled}`} 
                  placeholder="e.g. FIT" 
                  value={facultyId || "FIT"} 
                  disabled
                />
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Trưởng Khoa</label>
                <select className={`${styles.formInput} ${styles.formSelect}`} defaultValue="Dr. John Doe">
                  <option>Chọn một Giảng viên</option>
                  <option value="Dr. John Doe">Dr. John Doe</option>
                  <option value="Prof. Sarah Williams">Prof. Sarah Williams</option>
                  <option value="Dr. Alan Smith">Dr. Alan Smith</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Trạng thái hoạt động</label>
                <select className={`${styles.formInput} ${styles.formSelect}`} defaultValue="active">
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
                    defaultValue={1200}
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
                    defaultValue={45}
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
                Cập Nhật Thành Công
              </>
            ) : (
              <>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>save</span>
                Cập Nhật Khoa
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
              <span className={`material-symbols-outlined ${styles.uploadIcon}`}>edit</span>
              <p className={styles.uploadText}>Thay đổi ảnh đại diện</p>
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
            <h3 className={styles.suggestionTitle}>Lưu ý cập nhật</h3>
            <p className={styles.suggestionDesc}>
              Khi thay đổi thông tin Trưởng Khoa, hệ thống sẽ tự động gửi email thông báo phân công đến Giảng viên tương ứng. Mã Khoa không thể thay đổi sau khi tạo.
            </p>
            <div className={styles.suggestionLink}>
              <span style={{ fontSize: '0.75rem' }}>Xem hướng dẫn</span>
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
              <span style={{ color: '#777587' }}>Phân công Trưởng khoa</span>
            </li>
            <li className={styles.progressItem}>
              <span className={`material-symbols-outlined ${styles.progressIconSuccess}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span style={{ color: '#777587' }}>Chi tiết quy mô</span>
            </li>
            <li className={styles.progressItem}>
              <span className={`material-symbols-outlined ${styles.progressIconSuccess}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span style={{ color: '#777587' }}>Ảnh bìa đại diện</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
