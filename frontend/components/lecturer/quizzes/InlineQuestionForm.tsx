'use client';

import React, { useState, useEffect } from 'react';
import styles from './QuizzesManagement.module.css';
import { QuestionData, QuestionType, QuestionOption } from './QuestionsManager';

interface QuestionFormProps {
  initialData?: QuestionData;
  onClose: () => void;
  onChangeScore?: (score: number) => void;
  onChange?: (data: Partial<QuestionData>) => void;
}

export default function InlineQuestionForm({ initialData, onClose, onChangeScore, onChange }: QuestionFormProps) {
  const [formData, setFormData] = useState<{
    type: QuestionType;
    content: string;
    score: number;
    explanation: string;
    options: QuestionOption[];
  }>({
    type: 'single_choice',
    content: '',
    score: 1,
    explanation: '',
    options: [
      { id: `opt_${Date.now()}_1`, content: '', isCorrect: true },
      { id: `opt_${Date.now()}_2`, content: '', isCorrect: false },
    ]
  });

  const formId = React.useId();

  useEffect(() => {
    if (initialData) {
      setFormData({
        type: initialData.type,
        content: initialData.content,
        score: initialData.score,
        explanation: initialData.explanation || '',
        options: initialData.options ? [...initialData.options] : [],
      });
    }
  }, [initialData]);

  useEffect(() => {
    if (onChange) onChange(formData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value as QuestionType;
    let defaultOptions: QuestionOption[] = [];
    
    if (newType === 'true_false') {
      defaultOptions = [
        { id: `opt_tf_1`, content: 'Đúng', isCorrect: true },
        { id: `opt_tf_2`, content: 'Sai', isCorrect: false },
      ];
    } else if (newType === 'single_choice' || newType === 'multiple_choice') {
      defaultOptions = formData.options.length > 0 ? formData.options : [
        { id: `opt_${Date.now()}_1`, content: '', isCorrect: true },
        { id: `opt_${Date.now()}_2`, content: '', isCorrect: false },
      ];
      // Reset correct flags if switching to single choice to enforce only 1 correct
      if (newType === 'single_choice' && defaultOptions.filter(o => o.isCorrect).length > 1) {
        defaultOptions = defaultOptions.map((o, i) => ({ ...o, isCorrect: i === 0 }));
      }
    }
    
    setFormData(prev => ({ ...prev, type: newType, options: defaultOptions }));
  };

  const handleAddOption = () => {
    setFormData(prev => ({
      ...prev,
      options: [...prev.options, { id: `opt_${Date.now()}`, content: '', isCorrect: false }]
    }));
  };

  const handleRemoveOption = (id: string) => {
    setFormData(prev => ({
      ...prev,
      options: prev.options.filter(o => o.id !== id)
    }));
  };

  const handleOptionContentChange = (id: string, content: string) => {
    setFormData(prev => ({
      ...prev,
      options: prev.options.map(o => o.id === id ? { ...o, content } : o)
    }));
  };

  const handleOptionCorrectChange = (id: string, isCorrect: boolean) => {
    if (formData.type === 'single_choice' || formData.type === 'true_false') {
      // Only one can be correct
      setFormData(prev => ({
        ...prev,
        options: prev.options.map(o => ({ ...o, isCorrect: o.id === id ? true : false }))
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        options: prev.options.map(o => o.id === id ? { ...o, isCorrect } : o)
      }));
    }
  };

  return (
    <div style={{ backgroundColor: '#fff', border: '1px solid #e0e3e5', borderRadius: '0.75rem', padding: '1.5rem', marginTop: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', animation: 'modalIn 0.3s ease-out' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #e0e3e5' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#191c1e', margin: 0 }}>
          {initialData ? 'Chỉnh sửa Câu hỏi' : 'Thêm Câu hỏi mới'}
        </h3>
        <button type="button" onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#777587' }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div className={styles.modalBody}>
            
            <div className={styles.formGridRow}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Loại câu hỏi *</label>
                <select 
                  className={styles.formSelect}
                  value={formData.type}
                  onChange={handleTypeChange}
                  disabled={!!initialData} // Không cho phép đổi loại sau khi đã tạo
                >
                  <option value="single_choice">Trắc nghiệm (1 đáp án đúng)</option>
                  <option value="multiple_choice">Trắc nghiệm (Nhiều đáp án đúng)</option>
                  <option value="true_false">Đúng / Sai</option>
                  <option value="essay">Tự luận</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Điểm số *</label>
                <input 
                  type="number" 
                  className={styles.formInput} 
                  value={formData.score}
                  onChange={(e) => {
                    const newScore = Number(e.target.value);
                    setFormData(prev => ({ ...prev, score: newScore }));
                    if (onChangeScore) onChangeScore(newScore);
                  }}
                  min={0.1}
                  step={0.1}
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Nội dung câu hỏi *</label>
              <textarea 
                className={styles.formTextarea} 
                value={formData.content}
                onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                placeholder="Nhập nội dung câu hỏi..."
                required
              />
            </div>

            {/* DYNAMIC OPTIONS RENDERER */}
            {formData.type !== 'essay' && (
              <div className={styles.formGroup} style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f7f9fb', borderRadius: '0.5rem', border: '1px solid #e0e3e5' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <label className={styles.formLabel}>Các đáp án</label>
                  {formData.type !== 'true_false' && (
                    <button type="button" className={styles.btnSecondary} onClick={handleAddOption} style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}>
                      + Thêm đáp án
                    </button>
                  )}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {formData.options.map((opt, idx) => (
                    <div key={opt.id} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <input 
                        type={formData.type === 'multiple_choice' ? 'checkbox' : 'radio'}
                        name={`correct_option_${formId}`}
                        checked={opt.isCorrect}
                        onChange={(e) => handleOptionCorrectChange(opt.id, e.target.checked)}
                        style={{ width: '1.2rem', height: '1.2rem', cursor: 'pointer' }}
                        title="Đánh dấu đáp án đúng"
                      />
                      
                      <input 
                        type="text" className={styles.formInput} 
                        value={opt.content} 
                        onChange={(e) => handleOptionContentChange(opt.id, e.target.value)}
                        style={formData.type === 'true_false' ? { backgroundColor: '#eef2ff' } : {}}
                        placeholder={`Đáp án ${idx + 1}`} 
                        required
                      />

                      {formData.type !== 'true_false' && formData.options.length > 2 && (
                        <button type="button" className={styles.iconBtn} onClick={() => handleRemoveOption(opt.id)} style={{ color: '#dc2626' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.formGroup} style={{ marginTop: '0.5rem' }}>
              <label className={styles.formLabel}>Giải thích đáp án (Tùy chọn)</label>
              <textarea 
                className={styles.formTextarea} 
                value={formData.explanation}
                onChange={(e) => setFormData(prev => ({ ...prev, explanation: e.target.value }))}
                placeholder="Lời giải thích sẽ hiển thị cho sinh viên sau khi nộp bài..."
                style={{ minHeight: '60px' }}
              />
            </div>
          </div>
      </div>
    </div>
  );
}
