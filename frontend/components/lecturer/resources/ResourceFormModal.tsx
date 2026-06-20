'use client';

import React, { useState, useEffect } from 'react';
import styles from './ResourcesManagement.module.css';
import { ResourceData, ResourceType } from './ResourceGrid';

// Mock list of sections for the dropdown
const AVAILABLE_SECTIONS = [
  { id: 'sec1', name: 'Toán cao cấp', code: 'TOAN-01' },
  { id: 'sec2', name: 'Lập trình cơ bản', code: 'LT-02' },
  { id: 'sec3', name: 'Triết học Mác - Lênin', code: 'TRIET-03' }
];

interface ResourceFormModalProps {
  initialData?: ResourceData;
  onSave: (data: Partial<ResourceData>) => void;
  onClose: () => void;
}

export default function ResourceFormModal({ initialData, onSave, onClose }: ResourceFormModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'document' as ResourceType,
    sectionId: AVAILABLE_SECTIONS[0].id,
    fileUrl: '',
    externalUrl: '',
    isVisible: true
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title,
        description: initialData.description || '',
        type: initialData.type,
        sectionId: initialData.sectionId,
        fileUrl: initialData.fileUrl || '',
        externalUrl: initialData.externalUrl || '',
        isVisible: initialData.isVisible
      });
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleToggleVisible = () => {
    setFormData(prev => ({ ...prev, isVisible: !prev.isVisible }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const section = AVAILABLE_SECTIONS.find(s => s.id === formData.sectionId);
    
    onSave({
      ...formData,
      sectionName: section ? section.name : ''
    });
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>
            {initialData ? 'Chỉnh sửa Tài nguyên' : 'Thêm Tài nguyên mới'}
          </h3>
          <button className={styles.btnCloseModal} onClick={onClose} type="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.modalBody}>
            
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Lớp học phần *</label>
              <select 
                name="sectionId"
                className={styles.formSelect}
                value={formData.sectionId}
                onChange={handleChange}
                required
              >
                {AVAILABLE_SECTIONS.map(sec => (
                  <option key={sec.id} value={sec.id}>{sec.name} ({sec.code})</option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Tiêu đề tài nguyên *</label>
              <input 
                type="text" 
                name="title"
                className={styles.formInput} 
                value={formData.title}
                onChange={handleChange}
                placeholder="Nhập tiêu đề (VD: Slide Bài giảng Chương 1)"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Loại tài nguyên *</label>
              <select 
                name="type"
                className={styles.formSelect}
                value={formData.type}
                onChange={handleChange}
                required
              >
                <option value="document">Tài liệu (PDF, Word...)</option>
                <option value="video">Video bài giảng</option>
                <option value="link">Liên kết ngoài (Link)</option>
                <option value="image">Hình ảnh</option>
                <option value="other">Khác</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Mô tả chi tiết</label>
              <textarea 
                name="description"
                className={styles.formTextarea} 
                value={formData.description}
                onChange={handleChange}
                placeholder="Nhập mô tả (không bắt buộc)"
              />
            </div>

            {formData.type === 'link' ? (
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Đường dẫn (URL) *</label>
                <input 
                  type="url" 
                  name="externalUrl"
                  className={styles.formInput} 
                  value={formData.externalUrl}
                  onChange={handleChange}
                  placeholder="https://..."
                  required
                />
              </div>
            ) : (
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Đính kèm File (Tùy chọn mô phỏng URL)</label>
                <input 
                  type="text" 
                  name="fileUrl"
                  className={styles.formInput} 
                  value={formData.fileUrl}
                  onChange={handleChange}
                  placeholder="Nhập link file đính kèm mô phỏng..."
                />
                <p style={{fontSize: '0.75rem', color: '#777587', marginTop: '0.25rem'}}>
                  *(Thực tế đây sẽ là nút Upload file)
                </p>
              </div>
            )}

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Trạng thái hiển thị</label>
              <div className={styles.toggleSwitch} onClick={handleToggleVisible}>
                <div className={`${styles.switchTrack} ${formData.isVisible ? styles.switchTrackActive : ''}`}>
                  <div className={`${styles.switchThumb} ${formData.isVisible ? styles.switchThumbActive : ''}`}></div>
                </div>
                <span style={{ fontSize: '0.875rem', color: formData.isVisible ? '#059669' : '#777587', fontWeight: 500 }}>
                  {formData.isVisible ? 'Công khai với sinh viên' : 'Đang ẩn (Nháp)'}
                </span>
              </div>
            </div>

          </div>

          <div className={styles.modalFooter}>
            <button type="button" className={styles.btnCancel} onClick={onClose}>
              Hủy
            </button>
            <button type="submit" className={styles.btnSave}>
              {initialData ? 'Cập nhật' : 'Thêm mới'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
