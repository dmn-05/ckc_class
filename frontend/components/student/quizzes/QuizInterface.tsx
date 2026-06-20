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
            if (window.confirm('Bạn có chắc chắn muốn nộp bài không?')) {
              handleSubmit();
            }
          }}>
            Nộp bài ngay
          </button>
          <button className={styles.btnDraftQuiz} onClick={handleManualDraft}>
            Lưu nháp
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
              CÂU HỎI {currentIdx + 1} - {currentQ.type.toUpperCase()}
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
                  if (window.confirm('Đây là câu cuối cùng. Bạn muốn nộp bài?')) {
                    handleSubmit();
                  }
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
    </div>
  );
}
