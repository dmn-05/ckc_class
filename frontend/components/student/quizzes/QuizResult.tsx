'use client';

import React from 'react';
import styles from './QuizzesManagement.module.css';
import { QuestionData } from './QuizInterface';

interface QuizResultProps {
  score: number;
  maxScore: number;
  correctCount: number;
  totalQuestions: number;
  timeSpentStr: string;
  hasTextQuestions: boolean;
  questions: QuestionData[];
  userAnswers: Record<string, any>;
  correctAnswers: Record<string, any>; // mock correct answers dict
  explanations: Record<string, string>; // mock explanations
  onBackToList: () => void;
}

export default function QuizResult({
  score, maxScore, correctCount, totalQuestions, timeSpentStr,
  hasTextQuestions, questions, userAnswers, correctAnswers, explanations,
  onBackToList
}: QuizResultProps) {

  const isPending = hasTextQuestions;

  return (
    <div className={styles.resultContainer}>
      <div className={styles.scoreBanner}>
        <div className={`${styles.scoreIconBox} ${isPending ? styles.scoreIconBoxPending : ''}`}>
          {isPending ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          )}
        </div>
        
        {isPending ? (
          <>
            <h2 className={styles.scoreResultTitle}>Đã nộp bài, đang chờ chấm</h2>
            <p className={styles.scoreResultSubtitle}>Giảng viên sẽ chấm điểm phần thi tự luận của bạn.</p>
          </>
        ) : (
          <>
            <h2 className={styles.scoreResultTitle}>Kết quả: {Number(score.toFixed(1))} / {Number(maxScore.toFixed(1))}</h2>
            <p className={styles.scoreResultSubtitle}>Chúc mừng! Bạn đã hoàn thành bài thi rất tốt.</p>
          </>
        )}

        <div className={styles.scoreStatsGrid}>
          <div className={styles.scoreStatItem}>
            <p className={styles.statItemLabel}>Trả lời đúng</p>
            <p className={`${styles.statItemValue} ${isPending ? styles.statItemValueNeutral : ''}`}>{correctCount}/{totalQuestions}</p>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.scoreStatItem}>
            <p className={styles.statItemLabel}>Thời gian</p>
            <p className={`${styles.statItemValue} ${styles.statItemValueNeutral}`}>{timeSpentStr}</p>
          </div>
        </div>

        <button className={styles.btnBackList} onClick={onBackToList}>
          Quay về danh sách
        </button>
      </div>

      <div className={styles.reviewSection}>
        <h3 className={styles.reviewTitle}>Xem lại chi tiết bài làm</h3>
        
        {questions.map((q, idx) => {
          let isCorrect = false;
          let statusText = '';
          let cardClass = styles.reviewCard;
          let statusClass = '';

          if (q.type === 'text') {
            statusText = 'ĐANG CHỜ CHẤM';
            cardClass = `${styles.reviewCard} ${styles.reviewCardPending}`;
            statusClass = styles.reviewStatusPending;
          } else {
            // simple check for single choice
            const userAns = userAnswers[q.id];
            const correctAns = correctAnswers[q.id];
            if (q.type === 'multiple') {
              const uA = Array.isArray(userAns) ? [...userAns].sort() : [];
              const cA = Array.isArray(correctAns) ? [...correctAns].sort() : [];
              isCorrect = JSON.stringify(uA) === JSON.stringify(cA);
            } else {
              isCorrect = userAns === correctAns;
            }

            if (isCorrect) {
              statusText = 'CHÍNH XÁC';
              cardClass = `${styles.reviewCard} ${styles.reviewCardCorrect}`;
              statusClass = styles.reviewStatusCorrect;
            } else {
              statusText = 'SAI';
              cardClass = `${styles.reviewCard} ${styles.reviewCardIncorrect}`;
              statusClass = styles.reviewStatusIncorrect;
            }
          }

          return (
            <div key={q.id} className={cardClass}>
              <div className={styles.reviewHeader}>
                <span className={styles.reviewQuestionLabel}>Câu hỏi {idx + 1}</span>
                <span className={`${styles.reviewStatusLabel} ${statusClass}`}>
                  {isCorrect && q.type !== 'text' && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                  {!isCorrect && q.type !== 'text' && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>}
                  {q.type === 'text' && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                  {statusText}
                </span>
              </div>
              <p className={styles.reviewQuestionText}>{q.text}</p>
              
              <div className="space-y-2">
                {q.type === 'text' ? (
                  <div className={`${styles.reviewAnswerBox} ${styles.reviewAnswerBoxPending}`}>
                    {userAnswers[q.id] || '(Không có câu trả lời)'}
                  </div>
                ) : (
                  // show the options, highlight the user's answer
                  q.options?.map(opt => {
                    const isUserSelected = q.type === 'multiple' 
                      ? (userAnswers[q.id] || []).includes(opt.id)
                      : userAnswers[q.id] === opt.id;
                      
                    const isActuallyCorrect = q.type === 'multiple'
                      ? (correctAnswers[q.id] || []).includes(opt.id)
                      : correctAnswers[q.id] === opt.id;

                    if (!isUserSelected && !isActuallyCorrect) return null; // Only show selected or correct for brevity in mock

                    return (
                      <div key={opt.id} className={`${styles.reviewAnswerBox} ${isActuallyCorrect ? '' : styles.reviewAnswerBoxIncorrect}`} style={{ marginBottom: '0.5rem' }}>
                        {opt.text} {isUserSelected && isActuallyCorrect ? '(Bạn chọn - Đúng)' : isUserSelected ? '(Bạn chọn - Sai)' : '(Đáp án đúng)'}
                      </div>
                    );
                  })
                )}
              </div>

              {explanations[q.id] && q.type !== 'text' && (
                <div className={styles.explanationBox}>
                  <p className={styles.explanationTitle}>Giải thích:</p>
                  <p className={styles.explanationText}>{explanations[q.id]}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
