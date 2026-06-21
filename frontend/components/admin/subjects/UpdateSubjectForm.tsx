'use client';

import React, { useState } from 'react';
import styles from './AdminUpdateSubjects.module.css';

interface UpdateSubjectFormProps {
  subjectId?: string;
}

export default function UpdateSubjectForm({ subjectId }: UpdateSubjectFormProps) {
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
            Thông tin cơ bản của Môn Học
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Tên Môn Học</label>
                <input 
                  type="text" 
                  className={styles.formInput} 
                  placeholder="Ví dụ: Cơ sở dữ liệu nâng cao" 
                  defaultValue="Lập trình Di động"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Mã Môn Học</label>
                <input 
                  type="text" 
                  className={`${styles.formInput} ${styles.formInputDisabled}`} 
                  placeholder="e.g. CS201" 
                  value={subjectId || "MH-0012"} 
                  disabled
                />
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Thuộc Bộ Môn</label>
                <select className={`${styles.formInput} ${styles.formSelect}`} defaultValue="Kỹ thuật phần mềm">
                  <option>Chọn một Bộ Môn</option>
                  <option value="Khoa học máy tính">Khoa học máy tính</option>
                  <option value="Kỹ thuật phần mềm">Kỹ thuật phần mềm</option>
                  <option value="Hệ thống thông tin">Hệ thống thông tin</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Loại Môn Học</label>
                <select className={`${styles.formInput} ${styles.formSelect}`} defaultValue="elective">
                  <option value="core">Bắt buộc (Core)</option>
                  <option value="elective">Tự chọn (Elective)</option>
                  <option value="general">Đại cương</option>
                </select>
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Trạng thái môn học</label>
                <select className={`${styles.formInput} ${styles.formSelect}`} defaultValue="active">
                  <option value="active">Đang giảng dạy</option>
                  <option value="inactive">Tạm ngưng</option>
                  <option value="draft">Bản nháp</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Số Tín Chỉ (Credits)</label>
                <div className={styles.inputWithIcon}>
                  <input 
                    type="number" 
                    className={styles.formInput} 
                    placeholder="Ví dụ: 3" 
                    defaultValue={3}
                  />
                  <span className={`material-symbols-outlined ${styles.inputIcon}`}>stars</span>
                </div>
              </div>
            </div>

            <div className={styles.formGrid} style={{ gridTemplateColumns: '1fr' }}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Mô tả ngắn</label>
                <textarea 
                  className={styles.formInput} 
                  rows={3}
                  placeholder="Nhập mô tả tóm tắt nội dung môn học..."
                  defaultValue="Môn học cung cấp các kiến thức cơ bản và nâng cao về lập trình ứng dụng trên các thiết bị di động (Android/iOS)."
                ></textarea>
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
                Cập Nhật Môn Học
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
              Việc thay đổi số tín chỉ có thể ảnh hưởng đến học phí và kế hoạch học tập của sinh viên hiện tại. Mã Môn Học không được phép thay đổi để tránh sai sót dữ liệu bảng điểm.
            </p>
            <div className={styles.suggestionLink}>
              <span style={{ fontSize: '0.75rem' }}>Xem quy chế học vụ</span>
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
              <span style={{ color: '#777587' }}>Phân bổ tín chỉ</span>
            </li>
            <li className={styles.progressItem}>
              <span className={`material-symbols-outlined ${styles.progressIconSuccess}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span style={{ color: '#777587' }}>Cấu hình Môn tiên quyết</span>
            </li>
            <li className={styles.progressItem}>
              <span className={`material-symbols-outlined ${styles.progressIconSuccess}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span style={{ color: '#777587' }}>Đề cương chi tiết</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
