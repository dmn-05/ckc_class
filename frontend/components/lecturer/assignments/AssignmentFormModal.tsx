'use client';

import React, { useState, useEffect } from 'react';
import styles from './AssignmentsManagement.module.css';
import { AssignmentData } from './AssignmentGrid';

const AVAILABLE_SECTIONS = [
  { id: 'sec1', name: 'Lập trình hướng đối tượng' },
  { id: 'sec2', name: 'Thiết kế Giao diện' },
  { id: 'sec3', name: 'Cơ sở dữ liệu' },
];

interface AssignmentFormModalProps {
  initialData?: AssignmentData;
  onSave: (data: Partial<AssignmentData>) => void;
  onClose: () => void;
}

export default function AssignmentFormModal({ initialData, onSave, onClose }: AssignmentFormModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    sectionId: AVAILABLE_SECTIONS[0].id,
    description: '',
    instructions: '',
    maxScore: 10, // Default 10 scale
    dueDate: '',
    allowLate: false,
    latePenaltyPct: 10, // Fixed 10% penalty
    isPublished: true
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title,
        sectionId: initialData.sectionId,
        description: initialData.description || '',
        instructions: initialData.instructions || '',
        maxScore: initialData.maxScore,
        // Convert "25 Thg 10, 2023" formatting back to standard YYYY-MM-DD if possible, 
        // but for mock simplicity we'll just allow text input or use today's date
        dueDate: initialData.dueDate,
        allowLate: initialData.allowLate,
        latePenaltyPct: initialData.latePenaltyPct,
        isPublished: initialData.isPublished
      });
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (type === 'number') {
      setFormData(prev => ({ ...prev, [name]: Number(value) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleTogglePublish = () => {
    setFormData(prev => ({ ...prev, isPublished: !prev.isPublished }));
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
      <div className={`${styles.modalContent} ${styles.modalContentLarge}`}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>
            {initialData ? 'Chỉnh sửa Bài tập' : 'Tạo Bài tập mới'}
          </h3>
          <button className={styles.btnCloseModal} onClick={onClose} type="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div className={styles.modalBody}>
            
            <div className={styles.formGridRow}>
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
                    <option key={sec.id} value={sec.id}>{sec.name}</option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Trạng thái</label>
                <div 
                  onClick={handleTogglePublish}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    padding: '0.75rem', border: '1px solid #c7c4d8', borderRadius: '0.5rem',
                    cursor: 'pointer', backgroundColor: formData.isPublished ? '#ecfdf5' : '#f3f4f6',
                    color: formData.isPublished ? '#059669' : '#4b5563', fontWeight: 600, fontSize: '0.875rem'
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                    {formData.isPublished 
                      ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    }
                  </svg>
                  {formData.isPublished ? 'Publish (Công khai)' : 'Unpublish (Nháp)'}
                </div>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Tiêu đề bài tập *</label>
              <input 
                type="text" 
                name="title"
                className={styles.formInput} 
                value={formData.title}
                onChange={handleChange}
                placeholder="Nhập tiêu đề (VD: Bài tập thực hành 1)"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Mô tả / Mục tiêu</label>
              <input 
                type="text" 
                name="description"
                className={styles.formInput} 
                value={formData.description}
                onChange={handleChange}
                placeholder="Mô tả ngắn gọn về mục tiêu của bài tập"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Hướng dẫn chi tiết</label>
              <textarea 
                name="instructions"
                className={styles.formTextarea} 
                value={formData.instructions}
                onChange={handleChange}
                placeholder="Nhập nội dung hướng dẫn chi tiết..."
                style={{ minHeight: '120px' }}
              />
            </div>

            <div className={styles.formGridRow}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Điểm tối đa</label>
                <input 
                  type="number" 
                  name="maxScore"
                  className={styles.formInput} 
                  value={formData.maxScore}
                  onChange={handleChange}
                  min={1}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Hạn nộp (Due Date)</label>
                <input 
                  type="text" 
                  name="dueDate"
                  className={styles.formInput} 
                  value={formData.dueDate}
                  onChange={handleChange}
                  placeholder="VD: 25/10/2023 23:59"
                  required
                />
              </div>
            </div>

            <div className={styles.formGridRow}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input 
                    type="checkbox" 
                    name="allowLate"
                    checked={formData.allowLate}
                    onChange={handleChange}
                    style={{ width: '1rem', height: '1rem' }}
                  />
                  Cho phép nộp trễ
                </label>
              </div>

              {formData.allowLate && (
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Mức phạt nộp trễ (%)</label>
                  <input 
                    type="number" 
                    name="latePenaltyPct"
                    className={styles.formInput} 
                    value={formData.latePenaltyPct}
                    readOnly
                    title="Mức phạt cố định"
                    style={{ backgroundColor: '#f3f4f6', color: '#4b5563' }}
                  />
                  <span style={{ fontSize: '0.75rem', color: '#dc2626' }}>* Hệ thống thiết lập trừ cố định 10% nếu nộp trễ</span>
                </div>
              )}
            </div>

          </div>

          <div className={styles.modalFooter}>
            <button type="button" className={styles.btnSecondary} onClick={onClose}>
              Hủy
            </button>
            <button type="submit" className={styles.btnPrimary}>
              {initialData ? 'Cập nhật' : 'Thêm mới'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
