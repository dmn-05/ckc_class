'use client';

import React, { useState } from 'react';
import styles from '@/components/student/quizzes/QuizzesManagement.module.css';
import QuizList from '../../../../components/student/quizzes/QuizList';
import QuizInterface, { QuestionData } from '../../../../components/student/quizzes/QuizInterface';
import QuizResult from '../../../../components/student/quizzes/QuizResult';
import { QuizData } from '../../../../components/student/quizzes/QuizCard';

const MOCK_QUIZZES: QuizData[] = [
  {
    id: 'q1',
    title: 'Kiểm tra giữa kỳ SQL',
    subjectName: 'Hệ quản trị CSDL',
    durationMinutes: 45,
    questionCount: 30,
    attemptsUsed: 2,
    maxAttempts: 3,
    isPublished: true,
    status: 'pending'
  },
  {
    id: 'q2',
    title: 'Quiz 1: Mô hình OSI',
    subjectName: 'Mạng máy tính',
    durationMinutes: 15,
    questionCount: 3,
    attemptsUsed: 0,
    maxAttempts: 1,
    isPublished: true,
    status: 'pending'
  },
  {
    id: 'q3',
    title: 'Bài tập cuối kỳ',
    subjectName: 'Lập trình Web nâng cao',
    durationMinutes: 60,
    questionCount: 40,
    attemptsUsed: 1,
    maxAttempts: 1,
    isPublished: true,
    status: 'completed',
    lastScore: 8.5,
    lastDate: '05/10/2023'
  }
];

const MOCK_QUESTIONS: Record<string, QuestionData[]> = {
  'q2': [
    {
      id: 'ques_1',
      type: 'single',
      text: 'Giao thức nào dưới đây thuộc tầng Transport trong mô hình OSI?',
      options: [
        { id: 'a', text: 'A. HTTP' },
        { id: 'b', text: 'B. TCP' },
        { id: 'c', text: 'C. IP' },
        { id: 'd', text: 'D. FTP' },
      ]
    },
    {
      id: 'ques_2',
      type: 'multiple',
      text: 'Chọn các thiết bị hoạt động ở tầng Network (Tầng 3)?',
      options: [
        { id: 'a', text: 'A. Router' },
        { id: 'b', text: 'B. Switch (Layer 2)' },
        { id: 'c', text: 'C. Hub' },
        { id: 'd', text: 'D. Layer 3 Switch' },
      ]
    },
    {
      id: 'ques_3',
      type: 'text',
      text: 'Nêu ngắn gọn sự khác biệt giữa TCP và UDP.',
    }
  ],
  'q1': [
    {
      id: 'ques_sql_1',
      type: 'single',
      text: 'Lệnh nào dùng để xóa dữ liệu trong bảng nhưng giữ lại cấu trúc bảng?',
      options: [
        { id: 'a', text: 'A. DROP' },
        { id: 'b', text: 'B. DELETE' },
        { id: 'c', text: 'C. TRUNCATE' },
        { id: 'd', text: 'Cả B và C đều đúng' },
      ]
    }
  ] // truncated for mockup
};

const MOCK_CORRECT_ANSWERS: Record<string, any> = {
  'ques_1': 'b',
  'ques_2': ['a', 'd'],
  'ques_sql_1': 'd'
};

const MOCK_EXPLANATIONS: Record<string, string> = {
  'ques_1': 'TCP (Transmission Control Protocol) là giao thức hướng kết nối hoạt động tại tầng Transport (Tầng 4) của mô hình OSI.',
  'ques_2': 'Router và Layer 3 Switch là các thiết bị có khả năng định tuyến IP, do đó chúng hoạt động ở tầng Network (Tầng 3).',
  'ques_sql_1': 'DELETE và TRUNCATE đều dùng để xóa dòng dữ liệu trong bảng. DROP sẽ xóa luôn cấu trúc bảng.'
};

export default function StudentQuizzesPage() {
  const [view, setView] = useState<'list' | 'taking' | 'result'>('list');
  const [quizzes, setQuizzes] = useState<QuizData[]>(MOCK_QUIZZES);
  const [activeQuizId, setActiveQuizId] = useState<string | null>(null);

  const [resultData, setResultData] = useState<any>(null);

  const activeQuiz = quizzes.find(q => q.id === activeQuizId);
  const activeQuestions = activeQuizId ? (MOCK_QUESTIONS[activeQuizId] || []) : [];

  const handleStartQuiz = (id: string) => {
    setActiveQuizId(id);
    setView('taking');
  };

  const handleViewResult = (id: string) => {
    // In a real app, this would fetch the previous result from API.
    // For mockup, we'll just show an empty/fake result view if it's already completed.
    alert('Tính năng xem lại kết quả cũ đang được cập nhật...');
  };

  const handleSubmitQuiz = (answers: Record<string, any>, timeLeft: number) => {
    if (!activeQuiz) return;

    // Calculate mock result
    let correctCount = 0;
    let hasTextQuestions = false;

    activeQuestions.forEach(q => {
      if (q.type === 'text') {
        hasTextQuestions = true;
      } else {
        const uAns = answers[q.id];
        const cAns = MOCK_CORRECT_ANSWERS[q.id];
        if (q.type === 'multiple') {
          const uA = Array.isArray(uAns) ? [...uAns].sort() : [];
          const cA = Array.isArray(cAns) ? [...cAns].sort() : [];
          if (JSON.stringify(uA) === JSON.stringify(cA)) correctCount++;
        } else {
          if (uAns === cAns) correctCount++;
        }
      }
    });

    const score = Number(((correctCount / activeQuestions.length) * 10).toFixed(1));

    const totalSeconds = activeQuiz.durationMinutes * 60;
    const spentSeconds = Math.max(0, totalSeconds - timeLeft);
    const formatS = (s: number) => {
      const m = Math.floor(s / 60);
      const sc = s % 60;
      return `${m < 10 ? '0' : ''}${m}:${sc < 10 ? '0' : ''}${sc}`;
    };
    const timeSpentStr = `${formatS(spentSeconds)} / ${formatS(totalSeconds)}`;

    setResultData({
      score,
      maxScore: 10,
      correctCount,
      totalQuestions: activeQuestions.length,
      timeSpentStr,
      hasTextQuestions,
      questions: activeQuestions,
      userAnswers: answers,
      correctAnswers: MOCK_CORRECT_ANSWERS,
      explanations: MOCK_EXPLANATIONS
    });

    // Update list status
    setQuizzes(prev => prev.map(q => {
      if (q.id === activeQuiz.id) {
        return {
          ...q,
          status: 'completed',
          lastScore: score,
          lastDate: new Date().toLocaleDateString('vi-VN')
        };
      }
      return q;
    }));

    setView('result');
  };

  const handleBackToList = () => {
    setActiveQuizId(null);
    setResultData(null);
    setView('list');
  };

  return (
    <div className={styles.pageContainer}>
      {view === 'list' && (
        <>
          <div className={styles.pageHeader}>
            <h2 className={styles.pageTitle}>Bài kiểm tra</h2>
            <p className={styles.pageSubtitle}>Hoàn thành các bài kiểm tra được giao để đánh giá kiến thức của bạn.</p>
          </div>
          <QuizList
            quizzes={quizzes}
            onStartQuiz={handleStartQuiz}
            onViewResult={handleViewResult}
          />
        </>
      )}

      {view === 'taking' && activeQuiz && (
        <QuizInterface
          quizTitle={activeQuiz.title}
          quizId={activeQuiz.id}
          durationMinutes={activeQuiz.durationMinutes}
          questions={activeQuestions}
          onSaveDraft={() => alert('Đã lưu bài làm nháp thành công!')}
          onSubmit={handleSubmitQuiz}
        />
      )}

      {view === 'result' && resultData && (
        <QuizResult
          {...resultData}
          onBackToList={handleBackToList}
        />
      )}
    </div>
  );
}
