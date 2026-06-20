'use client';

import React from 'react';
import styles from './QuizzesManagement.module.css';
import QuizCard, { QuizData } from './QuizCard';

interface QuizListProps {
  quizzes: QuizData[];
  onStartQuiz: (id: string) => void;
  onViewResult: (id: string) => void;
}

export default function QuizList({ quizzes, onStartQuiz, onViewResult }: QuizListProps) {
  return (
    <div className={styles.cardsGrid}>
      {quizzes.map(quiz => (
        <QuizCard 
          key={quiz.id} 
          quiz={quiz} 
          onStart={onStartQuiz} 
          onViewResult={onViewResult} 
        />
      ))}
      {quizzes.length === 0 && (
        <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#777587', padding: '2rem' }}>
          Chưa có bài kiểm tra nào được mở.
        </p>
      )}
    </div>
  );
}
