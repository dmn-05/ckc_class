'use client';

import React, { useState, useEffect, useCallback } from 'react';
import styles from './QuizzesManagement.module.css';

export type QuestionType = 'single' | 'multiple' | 'text';

export interface QuestionData {
  id: string;
  type: QuestionType;
  text: string;
  options?: { id: string; text: string; }[];
}

interface QuizInterfaceProps {
  quizTitle: string;
  quizId: string;
  questions: QuestionData[];
  durationMinutes: number;
  onSubmit: (answers: Record<string, any>, timeLeft: number) => void;
  onSaveDraft: () => void;
}

export default function QuizInterface({ quizTitle, quizId, questions, durationMinutes, onSubmit, onSaveDraft }: QuizInterfaceProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [confirmModal, setConfirmModal] = useState<{isOpen: boolean, message: string}>({isOpen: false, message: ''});
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [timeLeft, setTimeLeft] = useState(durationMinutes * 60);

  // Load draft from local storage on mount
  useEffect(() => {
    const draftKey = `quiz_draft_${quizId}`;
    const savedDraft = localStorage.getItem(draftKey);
    if (savedDraft) {
      try {
        const parsed = JSON.parse(savedDraft);
        if (parsed.answers) setAnswers(parsed.answers);
        if (parsed.timeLeft) setTimeLeft(parsed.timeLeft);
      } catch (e) {
        console.error("Failed to parse draft", e);
      }
    }
  }, [quizId]);

  // Save to local storage every time answer changes
  useEffect(() => {
    const draftKey = `quiz_draft_${quizId}`;
    localStorage.setItem(draftKey, JSON.stringify({ answers, timeLeft }));
  }, [answers, timeLeft, quizId]);

  const handleSubmit = useCallback(() => {
    // Clear draft on submit
    localStorage.removeItem(`quiz_draft_${quizId}`);
    onSubmit(answers, timeLeft);
  }, [answers, onSubmit, quizId, timeLeft]);

  // Timer logic
  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit(); // Auto submit
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, handleSubmit]);

  const handleAnswerChange = (questionId: string, value: any, type: QuestionType) => {
    setAnswers(prev => {
      const newAnswers = { ...prev };
      if (type === 'multiple') {
        const currentVals = newAnswers[questionId] || [];
        if (currentVals.includes(value)) {
          newAnswers[questionId] = currentVals.filter((v: string) => v !== value);
        } else {
          newAnswers[questionId] = [...currentVals, value];
        }
      } else {
        newAnswers[questionId] = value;
      }
      return newAnswers;
    });
  };

  const currentQ = questions[currentIdx];

  if (!currentQ || questions.length === 0) {
    return (
      <div style={{
        maxWidth: '640px',
        margin: '2.5rem auto',
        padding: '3rem 2.5rem',
        textAlign: 'center',
        backgroundColor: '#ffffff',
        borderRadius: '1.25rem',
        boxShadow: '0 20px 25px -5px rgba(53, 37, 205, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.03)',
        border: '1px solid #eef0f6'
      }}>
        <div style={{
          width: '76px',
          height: '76px',
          margin: '0 auto 1.5rem',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#3525cd',
          boxShadow: '0 10px 15px -3px rgba(53, 37, 205, 0.15)'
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="38" height="38">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        </div>

        <h3 style={{
          fontSize: '1.35rem',
          fontWeight: 700,
          color: '#1e1b4b',
          marginBottom: '0.75rem'
        }}>
          Chưa có câu hỏi nào trong bài kiểm tra
        </h3>

        <p style={{
          color: '#64748b',
          fontSize: '0.975rem',
          lineHeight: '1.6',
          maxWidth: '480px',
          margin: '0 auto 2rem'
        }}>
          Giảng viên phụ trách đang trong quá trình cập nhật bộ câu hỏi cho bài kiểm tra này. Vui lòng quay lại sau hoặc liên hệ giảng viên bộ môn.
        </p>

        <a
          href="/student/quizzes"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.8rem 1.6rem',
            backgroundColor: '#3525cd',
            color: '#ffffff',
            fontWeight: 600,
            fontSize: '0.95rem',
            borderRadius: '0.75rem',
            textDecoration: 'none',
            boxShadow: '0 4px 14px 0 rgba(53, 37, 205, 0.35)',
            transition: 'all 0.2s ease'
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" height="18">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Quay lại danh sách bài kiểm tra
        </a>
      </div>
    );
  }

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleManualDraft = () => {
    const draftKey = `quiz_draft_${quizId}`;
    localStorage.setItem(draftKey, JSON.stringify({ answers, timeLeft }));
    onSaveDraft();
  };

  return (
    <div className={styles.quizInterface}>
      {/* Sidebar Navigation */}
      <div className={styles.sidebarColumn}>
        <div className={styles.navBox}>
          <h4 className={styles.navTitle}>Danh sách câu hỏi</h4>
          <div className={styles.navGrid}>
            {questions.map((q, idx) => {
              const isAnswered = answers[q.id] !== undefined && (Array.isArray(answers[q.id]) ? answers[q.id].length > 0 : answers[q.id] !== '');
              const isCurrent = idx === currentIdx;
              
              let dotClass = styles.navDotUnanswered;
              if (isCurrent) dotClass = styles.navDotCurrent;
              else if (isAnswered) dotClass = styles.navDotAnswered;

              return (
                <button 
                  key={q.id} 
                  className={`${styles.navDot} ${dotClass}`}
                  onClick={() => setCurrentIdx(idx)}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          <div className={styles.legendBox}>
            <div className={styles.legendItem}>
              <div className={`${styles.legendColor} ${styles.legendColorAnswered}`}></div>
              <span>Đã trả lời</span>
            </div>
            <div className={styles.legendItem}>
              <div className={`${styles.legendColor} ${styles.legendColorUnanswered}`}></div>
              <span>Chưa trả lời</span>
            </div>
            <div className={styles.legendItem}>
              <div className={`${styles.legendColor} ${styles.legendColorCurrent}`}></div>
              <span>Đang xem</span>
            </div>
          </div>

          <button className={styles.btnSubmitQuiz} onClick={() => {
            setConfirmModal({
              isOpen: true,
              message: 'Bạn có chắc chắn muốn nộp bài không?'
            });
          }}>
            Nộp bài ngay
          </button>

        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainColumn}>
        {/* Timer Header */}
        <div className={`${styles.timerBox} ${styles.timerGlow}`}>
          <div>
            <h2 className={styles.timerTitle}>{quizTitle}</h2>
            <span className={styles.timerProgress}>Câu hỏi {currentIdx + 1} / {questions.length}</span>
          </div>
          <div className={styles.timerDisplayBox}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24" style={{ color: '#3525cd' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className={styles.timerValue}>{formatTime(timeLeft)}</span>
          </div>
        </div>

        {/* Question Area */}
        <div className={styles.questionBox}>
          <div>
            <span className={styles.questionTypeBadge}>
              CÂU HỎI {currentIdx + 1} - {(currentQ.type || 'text').toUpperCase()}
            </span>
            <h3 className={styles.questionText}>{currentQ.text}</h3>
          </div>

          <div className={styles.optionsList}>
            {currentQ.type === 'text' ? (
              <textarea 
                className={styles.textareaAnswer}
                placeholder="Nhập câu trả lời tự luận của bạn vào đây..."
                value={answers[currentQ.id] || ''}
                onChange={(e) => handleAnswerChange(currentQ.id, e.target.value, 'text')}
              />
            ) : (
              currentQ.options?.map(opt => {
                const isMultiple = currentQ.type === 'multiple';
                const isSelected = isMultiple 
                  ? (answers[currentQ.id] || []).includes(opt.id)
                  : answers[currentQ.id] === opt.id;

                return (
                  <label key={opt.id} className={`${styles.optionLabel} ${isSelected ? styles.optionLabelSelected : ''}`}>
                    <input 
                      type={isMultiple ? "checkbox" : "radio"}
                      name={`q_${currentQ.id}`}
                      className={styles.optionInput}
                      checked={isSelected}
                      onChange={() => handleAnswerChange(currentQ.id, opt.id, currentQ.type)}
                    />
                    <span className={`${styles.optionText} ${isSelected ? styles.optionTextSelected : ''}`}>
                      {opt.text}
                    </span>
                  </label>
                );
              })
            )}
          </div>

          <div className={styles.navActions}>
            <button 
              className={`${styles.btnNav} ${currentIdx === 0 ? styles.btnNavDisabled : styles.btnNavPrev}`}
              onClick={() => setCurrentIdx(prev => prev - 1)}
              disabled={currentIdx === 0}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Câu trước
            </button>
            
            {currentIdx === questions.length - 1 ? (
              <button 
                className={`${styles.btnNav} ${styles.btnNavNext}`} 
                onClick={() => {
                  setConfirmModal({
                    isOpen: true,
                    message: 'Đây là câu cuối cùng. Bạn muốn nộp bài?'
                  });
                }}
              >
                Nộp bài
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </button>
            ) : (
              <button 
                className={`${styles.btnNav} ${styles.btnNavNext}`}
                onClick={() => setCurrentIdx(prev => prev + 1)}
              >
                Câu tiếp theo
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {confirmModal.isOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalIconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28" style={{ color: '#3525cd' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className={styles.modalTitle}>Xác nhận nộp bài</h3>
            <p className={styles.modalMessage}>{confirmModal.message}</p>
            <div className={styles.modalActions}>
              <button 
                className={styles.modalBtnCancel} 
                onClick={() => setConfirmModal({isOpen: false, message: ''})}
              >
                Hủy bỏ
              </button>
              <button 
                className={styles.modalBtnConfirm} 
                onClick={() => {
                  setConfirmModal({isOpen: false, message: ''});
                  handleSubmit();
                }}
              >
                Nộp bài
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
