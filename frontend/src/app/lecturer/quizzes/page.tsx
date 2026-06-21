'use client';

import React, { useState } from 'react';
import styles from '@/components/lecturer/quizzes/QuizzesManagement.module.css';
import QuizDashboard from '@/components/lecturer/quizzes/QuizDashboard';
import QuizGrid, { QuizData } from '@/components/lecturer/quizzes/QuizGrid';
import QuizSettingsModal from '@/components/lecturer/quizzes/QuizSettingsModal';
import QuestionsManager, { QuestionData } from '@/components/lecturer/quizzes/QuestionsManager';
import QuestionFormModal from '@/components/lecturer/quizzes/QuestionFormModal';
import QuizResultsView, { QuizAttempt, EssayAnswer } from '@/components/lecturer/quizzes/QuizResultsView';
import EssayGradingModal from '@/components/lecturer/quizzes/EssayGradingModal';

// Mock Data
const MOCK_QUIZZES: QuizData[] = [
  {
    id: 'quiz1', title: 'Kiểm tra giữa kỳ - Lập trình OOP', description: 'Nội dung từ tuần 1 đến tuần 5',
    timeLimit: 60, maxScore: 10, maxAttempts: 1, startTime: '25/10/2023 08:00', endTime: '25/10/2023 10:00',
    shuffleQuestions: true, shuffleOptions: true, showResultAfter: false, isPublished: true,
    sectionId: 'sec1', sectionName: 'Lập trình hướng đối tượng', status: 'closed',
    stats: { totalStudents: 40, completed: 38 }
  },
  {
    id: 'quiz2', title: 'Quiz 1: Tổng quan thiết kế', description: 'Lý thuyết màu sắc và typography',
    timeLimit: 15, maxScore: 10, maxAttempts: 2, startTime: '15/10/2023 00:00', endTime: '20/10/2023 23:59',
    shuffleQuestions: true, shuffleOptions: false, showResultAfter: true, isPublished: true,
    sectionId: 'sec2', sectionName: 'Thiết kế Giao diện', status: 'open',
    stats: { totalStudents: 38, completed: 15 }
  }
];

const MOCK_QUESTIONS: Record<string, QuestionData[]> = {
  'quiz1': [
    { id: 'q1', type: 'single_choice', content: 'Tính đóng gói (Encapsulation) trong OOP là gì?', score: 2, order: 0, options: [
      { id: 'o1', content: 'Che giấu dữ liệu', isCorrect: true },
      { id: 'o2', content: 'Kế thừa phương thức', isCorrect: false }
    ]},
    { id: 'q2', type: 'essay', content: 'Nêu sự khác biệt giữa Abstract Class và Interface.', score: 8, order: 1 }
  ]
};

const MOCK_ATTEMPTS: Record<string, QuizAttempt[]> = {
  'quiz1': [
    { id: 'att1', studentId: 'sv1', studentName: 'Nguyễn Văn An', studentCode: 'SV001', attemptNumber: 1, submittedAt: '25/10/2023 09:15', autoScore: 2, essayScore: 0, totalScore: 2, status: 'needs_grading',
      essayAnswers: [
        { questionId: 'q2', questionContent: 'Nêu sự khác biệt giữa Abstract Class và Interface.', answer: 'Abstract class có thể chứa method đã implement, còn Interface thì chỉ định nghĩa signature. Một class kế thừa 1 abstract class nhưng implement nhiều interface.', maxScore: 8 }
      ]
    },
    { id: 'att2', studentId: 'sv2', studentName: 'Trần Thị Bình', studentCode: 'SV002', attemptNumber: 1, submittedAt: '25/10/2023 09:30', autoScore: 0, essayScore: 6, totalScore: 6, status: 'graded',
      essayAnswers: [
        { questionId: 'q2', questionContent: 'Nêu sự khác biệt...', answer: 'Không nhớ rõ lắm ạ.', maxScore: 8, score: 6 }
      ]
    }
  ]
};

export default function LecturerQuizzesPage() {
  const [viewState, setViewState] = useState<'list' | 'questions' | 'results'>('list');
  const [activeQuiz, setActiveQuiz] = useState<QuizData | null>(null);
  
  const [quizzes, setQuizzes] = useState<QuizData[]>(MOCK_QUIZZES);
  const [allQuestions, setAllQuestions] = useState<Record<string, QuestionData[]>>(MOCK_QUESTIONS);
  const [allAttempts, setAllAttempts] = useState<Record<string, QuizAttempt[]>>(MOCK_ATTEMPTS);

  // Modals for List View
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [editingQuiz, setEditingQuiz] = useState<QuizData | undefined>(undefined);

  // Modals for Questions View
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState<QuestionData | undefined>(undefined);

  // Modals for Results View
  const [gradingAttempt, setGradingAttempt] = useState<QuizAttempt | null>(null);

  // Dashboard Stats
  const totalQuizzes = quizzes.length;
  const openQuizzes = quizzes.filter(q => q.status === 'open').length;
  let essaysToGrade = 0;
  Object.values(allAttempts).forEach(attList => {
    essaysToGrade += attList.filter(a => a.status === 'needs_grading').length;
  });

  // ==================== LIST VIEW ACTIONS ====================
  const handleOpenAddQuiz = () => { setEditingQuiz(undefined); setIsSettingsModalOpen(true); };
  const handleOpenEditQuiz = (quiz: QuizData) => { setEditingQuiz(quiz); setIsSettingsModalOpen(true); };
  const handleDeleteQuiz = (id: string) => {
    if (window.confirm("Xóa bài kiểm tra này?")) setQuizzes(prev => prev.filter(q => q.id !== id));
  };
  const handleSaveQuiz = (data: Partial<QuizData>) => {
    if (editingQuiz) {
      setQuizzes(prev => prev.map(q => q.id === editingQuiz.id ? { ...q, ...data } as QuizData : q));
    } else {
      const newId = `quiz_${Date.now()}`;
      setQuizzes(prev => [...prev, { ...data, id: newId, status: data.isPublished ? 'open' : 'draft', stats: { totalStudents: 40, completed: 0 } } as QuizData]);
      setAllQuestions(prev => ({ ...prev, [newId]: [] }));
      setAllAttempts(prev => ({ ...prev, [newId]: [] }));
    }
    setIsSettingsModalOpen(false);
  };

  // ==================== NAVIGATION ====================
  const handleGoToQuestions = (quiz: QuizData) => { setActiveQuiz(quiz); setViewState('questions'); };
  const handleGoToResults = (quiz: QuizData) => { setActiveQuiz(quiz); setViewState('results'); };
  const handleBackToList = () => { setActiveQuiz(null); setViewState('list'); };

  // ==================== QUESTIONS ACTIONS ====================
  const handleAddQuestion = () => { setEditingQuestion(undefined); setIsQuestionModalOpen(true); };
  const handleEditQuestion = (q: QuestionData) => { setEditingQuestion(q); setIsQuestionModalOpen(true); };
  const handleDeleteQuestion = (id: string) => {
    if (activeQuiz && window.confirm("Xóa câu hỏi này?")) {
      setAllQuestions(prev => ({
        ...prev,
        [activeQuiz.id]: prev[activeQuiz.id].filter(q => q.id !== id)
      }));
    }
  };
  const handleReorderQuestions = (newQuestions: QuestionData[]) => {
    if (activeQuiz) setAllQuestions(prev => ({ ...prev, [activeQuiz.id]: newQuestions }));
  };
  const handleSaveQuestion = (data: Partial<QuestionData>) => {
    if (!activeQuiz) return;
    setAllQuestions(prev => {
      const qs = prev[activeQuiz.id] || [];
      if (editingQuestion) {
        return { ...prev, [activeQuiz.id]: qs.map(q => q.id === editingQuestion.id ? { ...q, ...data } as QuestionData : q) };
      } else {
        const newQ = { ...data, id: `q_${Date.now()}`, order: qs.length } as QuestionData;
        return { ...prev, [activeQuiz.id]: [...qs, newQ] };
      }
    });
    setIsQuestionModalOpen(false);
  };

  // ==================== GRADING ACTIONS ====================
  const handleOpenGrading = (attempt: QuizAttempt) => { setGradingAttempt(attempt); };
  const handleSaveGrading = (attemptId: string, updatedAnswers: EssayAnswer[], essayScore: number) => {
    if (!activeQuiz) return;
    setAllAttempts(prev => {
      const atts = prev[activeQuiz.id] || [];
      return {
        ...prev,
        [activeQuiz.id]: atts.map(a => a.id === attemptId 
          ? { ...a, essayAnswers: updatedAnswers, essayScore, totalScore: a.autoScore + essayScore, status: 'graded' } 
          : a)
      };
    });
    setGradingAttempt(null);
  };

  return (
    <div className={styles.pageContainer}>
      
      {viewState === 'list' && (
        <>
          <div className={styles.pageHeader}>
            <div>
              <h1 className={styles.pageTitle}>Quản lý Bài kiểm tra</h1>
              <p className={styles.pageSubtitle}>Tạo đề thi, ngân hàng câu hỏi và chấm điểm sinh viên.</p>
            </div>
            <button className={styles.btnPrimary} onClick={handleOpenAddQuiz}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Thêm bài kiểm tra
            </button>
          </div>

          <QuizDashboard totalQuizzes={totalQuizzes} openQuizzes={openQuizzes} essaysToGrade={essaysToGrade} />
          
          <QuizGrid 
            quizzes={quizzes}
            onEditSettings={handleOpenEditQuiz}
            onManageQuestions={handleGoToQuestions}
            onViewResults={handleGoToResults}
            onDelete={handleDeleteQuiz}
          />
        </>
      )}

      {viewState === 'questions' && activeQuiz && (
        <QuestionsManager 
          quizTitle={activeQuiz.title}
          questions={allQuestions[activeQuiz.id] || []}
          onBack={handleBackToList}
          onAddQuestion={handleAddQuestion}
          onEditQuestion={handleEditQuestion}
          onDeleteQuestion={handleDeleteQuestion}
          onReorder={handleReorderQuestions}
        />
      )}

      {viewState === 'results' && activeQuiz && (
        <QuizResultsView 
          quiz={activeQuiz}
          attempts={allAttempts[activeQuiz.id] || []}
          onBack={handleBackToList}
          onGradeEssay={handleOpenGrading}
        />
      )}

      {/* MODALS */}
      {isSettingsModalOpen && (
        <QuizSettingsModal initialData={editingQuiz} onSave={handleSaveQuiz} onClose={() => setIsSettingsModalOpen(false)} />
      )}

      {isQuestionModalOpen && (
        <QuestionFormModal initialData={editingQuestion} onSave={handleSaveQuestion} onClose={() => setIsQuestionModalOpen(false)} />
      )}

      {gradingAttempt && (
        <EssayGradingModal attempt={gradingAttempt} onSave={handleSaveGrading} onClose={() => setGradingAttempt(null)} />
      )}

    </div>
  );
}
