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
  isEditMode?: boolean;
}

export default function QuizSettingsForm({ initialData, onSave, onClose, sections = [], isEditMode = false }: QuizSettingsModalProps) {
  const isEdit = isEditMode || Boolean(initialData?.id);
  const defaultSectionId = sections.length > 0 ? sections[0].id : '';
  const [error, setError] = useState('');
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

  const getMinDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const [urlSectionId, setUrlSectionId] = useState<string>('');

  useEffect(() => {
    const searchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
    const sId = searchParams.get('sectionId');
    if (sId && sId !== '0') {
      setUrlSectionId(sId);
      if (!isEdit) {
        setFormData(prev => ({ ...prev, sectionId: sId }));
      }
    }
  }, [isEdit]);

  useEffect(() => {
    if (sections.length > 0 && !formData.sectionId && !urlSectionId) {
      setFormData(prev => ({ ...prev, sectionId: sections[0].id }));
    }
  }, [sections, urlSectionId]);

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        sectionId: initialData.sectionId || defaultSectionId || '',
        description: initialData.description || '',
        timeLimit: initialData.timeLimit ?? 45,
        maxScore: initialData.maxScore ?? 10,
        maxAttempts: initialData.maxAttempts ?? 1,
        startTime: initialData.startTime || '',
        endTime: initialData.endTime || '',
        shuffleQuestions: initialData.shuffleQuestions ?? true,
        shuffleOptions: initialData.shuffleOptions ?? true,
        showResultAfter: initialData.showResultAfter ?? true,
        isPublished: initialData.isPublished ?? true
      });
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setError('');
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
    setError('');

    const now = new Date();

    if (formData.startTime && !initialData?.id) {
      const start = new Date(formData.startTime);
      if (start.getTime() < now.getTime() - 2 * 60 * 1000) {
        setError('Thời gian mở không được đặt ở thời điểm trong quá khứ. Vui lòng chọn thời điểm hiện tại hoặc tương lai.');
        return;
      }
    }

    if (formData.endTime) {
      const end = new Date(formData.endTime);
      if (end.getTime() <= now.getTime()) {
        setError('Thời gian đóng không được đặt trong quá khứ. Vui lòng chọn thời gian lớn hơn thời điểm hiện tại.');
        return;
      }
    }

    if (formData.startTime && formData.endTime) {
      const start = new Date(formData.startTime);
      const end = new Date(formData.endTime);
      if (end.getTime() <= start.getTime()) {
        setError('Thời gian đóng phải lớn hơn (sau) thời gian mở.');
        return;
      }
    }

    const section = sections.find(s => s.id === formData.sectionId);
    onSave({ ...formData, sectionName: section ? `${section.subjectName} - ${section.name}` : '' });
  };

  return (
    <div style={{ animation: 'modalIn 0.3s ease-out' }}>
      <button onClick={onClose} className={styles.btnSecondary} style={{ marginBottom: '1.5rem' }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        {(initialData?.sectionId || (typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('sectionId'))) ? 'Quay lại lớp học phần' : 'Quay lại danh sách'}
      </button>

      <div className={styles.pageHeader}>
        <h2 className={styles.pageTitle}>
          {initialData && initialData.id ? 'Chỉnh sửa Bài kiểm tra' : 'Tạo Bài kiểm tra mới'}
        </h2>
      </div>

      <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '1rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05), 0 8px 10px -6px rgba(0,0,0,0.01)', border: '1px solid #f3f4f6' }}>
        {error && (
          <div style={{
            backgroundColor: '#fef2f2',
            color: '#dc2626',
            padding: '12px 16px',
            borderRadius: '10px',
            marginBottom: '1.5rem',
            border: '1px solid #fecaca',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontWeight: 600
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{error}</span>
          </div>
        )}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            
            <div className={styles.formGridRow}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Lớp học phần *</label>
                <select 
                  name="sectionId" className={styles.formSelect}
                  value={formData.sectionId} onChange={handleChange} required
                  disabled={isEdit || Boolean(urlSectionId && urlSectionId !== '0') || Boolean(initialData?.sectionId && initialData.sectionId !== '0')}
                >
                  {sections.map(sec => (
                    <option key={sec.id} value={sec.id}>{sec.subjectName} - {sec.name}</option>
                  ))}
                  {sections.length === 0 && (
                    <option value={formData.sectionId}>
                      {isEdit ? `Lớp ID: ${formData.sectionId}` : 'Không có lớp học phần nào'}
                    </option>
                  )}
                </select>
                {!isEdit && Boolean(urlSectionId && urlSectionId !== '0') && (
                  <small style={{color: '#777587', marginTop: '4px', display: 'block'}}>Đang thêm bài kiểm tra cho lớp học phần hiện tại (không thể thay đổi).</small>
                )}
                {isEdit && (
                  <small style={{color: '#777587', marginTop: '4px', display: 'block'}}>Lớp học phần không thể thay đổi khi chỉnh sửa.</small>
                )}
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
                value={formData.title || ''} onChange={handleChange} required
                placeholder="Ví dụ: Quiz 1 - Cấu trúc điều khiển"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Mô tả / Hướng dẫn</label>
              <textarea 
                name="description" className={styles.formTextarea} 
                value={formData.description || ''} onChange={handleChange}
                placeholder="Hướng dẫn cho sinh viên trước khi làm bài..."
                style={{ minHeight: '60px' }}
              />
            </div>

            <div className={styles.formGridRow}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Thời gian mở (Start time)</label>
                <input 
                  type="datetime-local" name="startTime" className={styles.formInput} 
                  value={formData.startTime || ''} onChange={handleChange}
                  min={getMinDateTime()}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Thời gian đóng (End time)</label>
                <input 
                  type="datetime-local" name="endTime" className={styles.formInput} 
                  value={formData.endTime || ''} onChange={handleChange}
                  min={formData.startTime || getMinDateTime()}
                />
              </div>
            </div>

            <div className={styles.formGridRow}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Thời lượng (phút) *</label>
                <input 
                  type="number" name="timeLimit" className={styles.formInput} 
                  value={formData.timeLimit ?? 45} onChange={handleChange} min={1} required
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

            <div style={{ backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '0.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1rem', border: '1px solid #f1f5f9' }}>
              <p style={{ fontWeight: 600, fontSize: '0.875rem', color: '#191c1e', margin: 0 }}>Cài đặt tuỳ chọn khác</p>
              
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                <input 
                  type="checkbox" name="shuffleQuestions" 
                  checked={formData.shuffleQuestions} onChange={handleChange} 
                  style={{ width: '1.25rem', height: '1.25rem', cursor: 'pointer', accentColor: '#4f46e5' }}
                /> Trộn ngẫu nhiên câu hỏi (Shuffle questions)
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                <input 
                  type="checkbox" name="shuffleOptions" 
                  checked={formData.shuffleOptions} onChange={handleChange} 
                  style={{ width: '1.25rem', height: '1.25rem', cursor: 'pointer', accentColor: '#4f46e5' }}
                /> Trộn ngẫu nhiên đáp án (Shuffle options)
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                <input 
                  type="checkbox" name="showResultAfter" 
                  checked={formData.showResultAfter} onChange={handleChange} 
                  style={{ width: '1.25rem', height: '1.25rem', cursor: 'pointer', accentColor: '#4f46e5' }}
                /> Hiển thị điểm và đáp án ngay sau khi nộp bài
              </label>
            </div>

          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem', paddingTop: '1.5rem', borderTop: '1px solid #e0e3e5' }}>
            <button type="button" className={styles.btnSecondary} onClick={onClose}>Hủy</button>
            <button type="submit" className={styles.btnPrimary}>Lưu Cài đặt</button>
          </div>
        </form>
      </div>
    </div>
  );
}
