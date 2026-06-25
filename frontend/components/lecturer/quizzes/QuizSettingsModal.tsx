'use client';

import React, { useState, useEffect } from 'react';
import styles from './QuizzesManagement.module.css';
import { QuizData } from './QuizGrid';
import { CourseSectionOption } from '@/app/actions/lecturer-quiz';

interface QuizSettingsModalProps {
  initialData?: QuizData;
  onSave: (data: Partial<QuizData>) => void;
  onClose: () => void;
  sections?: CourseSectionOption[];
}

export default function QuizSettingsModal({ initialData, onSave, onClose, sections = [] }: QuizSettingsModalProps) {
  const defaultSectionId = sections.length > 0 ? sections[0].id : '';
  const [formData, setFormData] = useState({
    title: '',
    sectionId: defaultSectionId,
    description: '',
    timeLimit: 45,
    maxScore: 10,
    maxAttempts: 1,
    startTime: '',
    endTime: '',
    shuffleQuestions: true,
    shuffleOptions: true,
    showResultAfter: true,
    isPublished: true
  });

  useEffect(() => {
    if (sections.length > 0 && !formData.sectionId) {
      setFormData(prev => ({ ...prev, sectionId: sections[0].id }));
    }
  }, [sections]);

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title,
        sectionId: initialData.sectionId,
        description: initialData.description || '',
        timeLimit: initialData.timeLimit,
        maxScore: initialData.maxScore,
        maxAttempts: initialData.maxAttempts,
        startTime: initialData.startTime,
        endTime: initialData.endTime,
        shuffleQuestions: initialData.shuffleQuestions,
        shuffleOptions: initialData.shuffleOptions,
        showResultAfter: initialData.showResultAfter,
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

  const handleTogglePublish = () => setFormData(prev => ({ ...prev, isPublished: !prev.isPublished }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const section = sections.find(s => s.id === formData.sectionId);
    onSave({ ...formData, sectionName: section ? `${section.subjectName} - ${section.name}` : '' });
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={`${styles.modalContent} ${styles.modalContentLarge}`}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>
            {initialData ? 'Cài đặt Bài kiểm tra' : 'Tạo Bài kiểm tra mới'}
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
                  name="sectionId" className={styles.formSelect}
                  value={formData.sectionId} onChange={handleChange} required
                >
                  {sections.map(sec => (
                    <option key={sec.id} value={sec.id}>{sec.subjectName} - {sec.name}</option>
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
              <label className={styles.formLabel}>Tiêu đề *</label>
              <input 
                type="text" name="title" className={styles.formInput} 
                value={formData.title} onChange={handleChange} required
                placeholder="Ví dụ: Quiz 1 - Cấu trúc điều khiển"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Mô tả / Hướng dẫn</label>
              <textarea 
                name="description" className={styles.formTextarea} 
                value={formData.description} onChange={handleChange}
                placeholder="Hướng dẫn cho sinh viên trước khi làm bài..."
                style={{ minHeight: '60px' }}
              />
            </div>

            <div className={styles.formGridRow}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Thời gian mở (Start time)</label>
                <input 
                  type="datetime-local" name="startTime" className={styles.formInput} 
                  value={formData.startTime} onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Thời gian đóng (End time)</label>
                <input 
                  type="datetime-local" name="endTime" className={styles.formInput} 
                  value={formData.endTime} onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.formGridRow}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Thời lượng (phút) *</label>
                <input 
                  type="number" name="timeLimit" className={styles.formInput} 
                  value={formData.timeLimit} onChange={handleChange} min={1} required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Số lần làm tối đa *</label>
                <input 
                  type="number" name="maxAttempts" className={styles.formInput} 
                  value={formData.maxAttempts} onChange={handleChange} min={1} required
                />
              </div>
            </div>

            <div style={{ backgroundColor: '#f7f9fb', padding: '1rem', borderRadius: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
              <p style={{ fontWeight: 600, fontSize: '0.875rem', color: '#191c1e', margin: 0 }}>Cài đặt tuỳ chọn khác</p>
              
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                <input 
                  type="checkbox" name="shuffleQuestions" 
                  checked={formData.shuffleQuestions} onChange={handleChange} 
                /> Trộn ngẫu nhiên câu hỏi (Shuffle questions)
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                <input 
                  type="checkbox" name="shuffleOptions" 
                  checked={formData.shuffleOptions} onChange={handleChange} 
                /> Trộn ngẫu nhiên đáp án (Shuffle options)
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                <input 
                  type="checkbox" name="showResultAfter" 
                  checked={formData.showResultAfter} onChange={handleChange} 
                /> Hiển thị điểm và đáp án ngay sau khi nộp bài
              </label>
            </div>

          </div>

          <div className={styles.modalFooter}>
            <button type="button" className={styles.btnSecondary} onClick={onClose}>Hủy</button>
            <button type="submit" className={styles.btnPrimary}>Lưu Cài đặt</button>
          </div>
        </form>
      </div>
    </div>
  );
}
