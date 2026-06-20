'use client';

import React, { useState, useEffect } from 'react';
import styles from './QuizzesManagement.module.css';

export type QuestionType = 'single_choice' | 'multiple_choice' | 'true_false' | 'essay';

export interface QuestionOption {
  id: string;
  content: string;
  isCorrect: boolean;
}

export interface QuestionData {
  id: string;
  type: QuestionType;
  content: string;
  score: number;
  options?: QuestionOption[];
  explanation?: string;
  order: number;
}

interface QuestionsManagerProps {
  quizTitle: string;
  questions: QuestionData[];
  onBack: () => void;
  onAddQuestion: () => void;
  onEditQuestion: (q: QuestionData) => void;
  onDeleteQuestion: (id: string) => void;
  onReorder: (newQuestions: QuestionData[]) => void;
}

export default function QuestionsManager({
  quizTitle,
  questions,
  onBack,
  onAddQuestion,
  onEditQuestion,
  onDeleteQuestion,
  onReorder
}: QuestionsManagerProps) {
  
  const [draggedIdx, setDraggedIdx] = useState<number | null>(null);
  const [localQuestions, setLocalQuestions] = useState<QuestionData[]>([]);

  useEffect(() => {
    // Sort by order initially
    setLocalQuestions([...questions].sort((a, b) => a.order - b.order));
  }, [questions]);

  // Drag and drop handlers
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, idx: number) => {
    setDraggedIdx(idx);
    e.dataTransfer.effectAllowed = 'move';
    // Small delay to allow drag image generation before modifying styles
    setTimeout(() => {
      const el = document.getElementById(`qitem-${idx}`);
      if (el) el.classList.add(styles.dragging);
    }, 0);
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>, idx: number) => {
    const el = document.getElementById(`qitem-${idx}`);
    if (el) el.classList.remove(styles.dragging);
    setDraggedIdx(null);
    onReorder(localQuestions.map((q, i) => ({ ...q, order: i })));
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, idx: number) => {
    e.preventDefault();
    if (draggedIdx === null || draggedIdx === idx) return;

    const newQuestions = [...localQuestions];
    const draggedItem = newQuestions[draggedIdx];
    newQuestions.splice(draggedIdx, 1);
    newQuestions.splice(idx, 0, draggedItem);
    
    setLocalQuestions(newQuestions);
    setDraggedIdx(idx);
  };

  const getTypeLabel = (type: QuestionType) => {
    switch (type) {
      case 'single_choice': return { label: '1 Đáp án', class: styles.typeSingle };
      case 'multiple_choice': return { label: 'Nhiều đáp án', class: styles.typeMultiple };
      case 'true_false': return { label: 'Đúng / Sai', class: styles.typeTrueFalse };
      case 'essay': return { label: 'Tự luận', class: styles.typeEssay };
      default: return { label: 'Unknown', class: '' };
    }
  };

  const totalScore = localQuestions.reduce((sum, q) => sum + q.score, 0);

  return (
    <div style={{ animation: 'modalIn 0.3s ease-out' }}>
      <button onClick={onBack} className={styles.btnSecondary} style={{ marginBottom: '1.5rem' }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Quay lại danh sách
      </button>

      <div className={styles.pageHeader}>
        <div>
          <h2 className={styles.pageTitle}>Soạn câu hỏi: {quizTitle}</h2>
          <p className={styles.pageSubtitle}>
            Tổng số: {localQuestions.length} câu hỏi • Tổng điểm: {totalScore}
          </p>
        </div>
        
        <button className={styles.btnPrimary} onClick={onAddQuestion}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Thêm câu hỏi
        </button>
      </div>

      <div className={styles.questionList}>
        {localQuestions.map((q, idx) => {
          const typeInfo = getTypeLabel(q.type);
          return (
            <div 
              key={q.id} 
              id={`qitem-${idx}`}
              className={styles.questionItem}
              draggable
              onDragStart={(e) => handleDragStart(e, idx)}
              onDragEnd={(e) => handleDragEnd(e, idx)}
              onDragOver={(e) => handleDragOver(e, idx)}
            >
              <div className={styles.dragHandle} title="Kéo để sắp xếp">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                </svg>
              </div>

              <div className={styles.questionContent}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <span className={`${styles.questionTypeBadge} ${typeInfo.class}`}>
                      {typeInfo.label}
                    </span>
                    <h4 className={styles.questionText}>Câu {idx + 1}: {q.content}</h4>
                  </div>
                  <span style={{ fontWeight: 600, color: '#4f46e5', fontSize: '0.875rem' }}>{q.score} điểm</span>
                </div>

                {q.type !== 'essay' && q.options && (
                  <div className={styles.optionsList}>
                    {q.options.map((opt, oIdx) => (
                      <div key={opt.id} className={`${styles.optionItem} ${opt.isCorrect ? styles.optionCorrect : ''}`}>
                        <span>{String.fromCharCode(65 + oIdx)}.</span>
                        <span>{opt.content}</span>
                        {opt.isCorrect && (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className={styles.questionActions}>
                <button className={styles.iconBtn} onClick={() => onEditQuestion(q)} title="Sửa">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" height="18">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
                <button className={`${styles.iconBtn} ${styles.iconBtnDanger}`} onClick={() => onDeleteQuestion(q.id)} title="Xóa">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" height="18">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
        
        {localQuestions.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#777587', backgroundColor: '#f7f9fb', borderRadius: '0.75rem', border: '1px dashed #c7c4d8' }}>
            <p>Chưa có câu hỏi nào. Bấm "Thêm câu hỏi" để bắt đầu soạn đề.</p>
          </div>
        )}
      </div>
    </div>
  );
}
