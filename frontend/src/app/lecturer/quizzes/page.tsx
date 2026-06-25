'use client';

import React, { useState, useEffect, useCallback } from 'react';
import styles from '@/components/lecturer/quizzes/QuizzesManagement.module.css';
import QuizDashboard from '@/components/lecturer/quizzes/QuizDashboard';
import QuizGrid, { QuizData } from '@/components/lecturer/quizzes/QuizGrid';
import QuizSettingsModal from '@/components/lecturer/quizzes/QuizSettingsModal';
import QuestionsManager, { QuestionData } from '@/components/lecturer/quizzes/QuestionsManager';
import QuestionFormModal from '@/components/lecturer/quizzes/QuestionFormModal';
import QuizResultsView, { QuizAttempt, EssayAnswer } from '@/components/lecturer/quizzes/QuizResultsView';
import EssayGradingModal from '@/components/lecturer/quizzes/EssayGradingModal';
import {
    getLecturerQuizzes,
    createLecturerQuiz,
    updateLecturerQuiz,
    deleteLecturerQuiz,
    getLecturerCourseSections,
    getLecturerQuestions,
    createLecturerQuestion,
    updateLecturerQuestion,
    deleteLecturerQuestion,
    reorderLecturerQuestions,
    CourseSectionOption,
} from '@/app/actions/lecturer-quiz';

export default function LecturerQuizzesPage() {
    const [viewState, setViewState] = useState<'list' | 'questions' | 'results'>('list');
    const [activeQuiz, setActiveQuiz] = useState<QuizData | null>(null);

    const [quizzes, setQuizzes] = useState<QuizData[]>([]);
    const [loading, setLoading] = useState(true);
    const [sections, setSections] = useState<CourseSectionOption[]>([]);
    const [allQuestions, setAllQuestions] = useState<Record<string, QuestionData[]>>({});
    const [allAttempts, setAllAttempts] = useState<Record<string, QuizAttempt[]>>({});

    // Modals for List View
    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
    const [editingQuiz, setEditingQuiz] = useState<QuizData | undefined>(undefined);

    // Modals for Questions View
    const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
    const [editingQuestion, setEditingQuestion] = useState<QuestionData | undefined>(undefined);

    // Modals for Results View
    const [gradingAttempt, setGradingAttempt] = useState<QuizAttempt | null>(null);

    const loadData = useCallback(async () => {
        setLoading(true);
        try {
            const [quizData, sectionData] = await Promise.all([
                getLecturerQuizzes(),
                getLecturerCourseSections(),
            ]);
            setQuizzes(quizData);
            setSections(sectionData);
        } catch (err: any) {
            console.error('Failed to load data:', err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => { loadData(); }, [loadData]);

    const loadQuestions = useCallback(async (quizId: string) => {
        try {
            const questions = await getLecturerQuestions(quizId);
            setAllQuestions(prev => ({ ...prev, [quizId]: questions }));
        } catch (err: any) {
            console.error('Failed to load questions:', err);
        }
    }, []);

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
    const handleDeleteQuiz = async (id: string) => {
        if (!window.confirm("Xóa bài kiểm tra này?")) return;
        try {
            await deleteLecturerQuiz(id);
            setQuizzes(prev => prev.filter(q => q.id !== id));
        } catch (err: any) {
            alert(err.message || 'Xóa thất bại');
        }
    };
    const handleSaveQuiz = async (data: Partial<QuizData>) => {
        try {
            if (editingQuiz) {
                const updated = await updateLecturerQuiz(editingQuiz.id, data);
                setQuizzes(prev => prev.map(q => q.id === editingQuiz.id ? { ...q, ...updated } : q));
            } else {
                const created = await createLecturerQuiz(data);
                setQuizzes(prev => [...prev, created]);
                setAllQuestions(prev => ({ ...prev, [created.id]: [] }));
                setAllAttempts(prev => ({ ...prev, [created.id]: [] }));
            }
            setIsSettingsModalOpen(false);
        } catch (err: any) {
            alert(err.message || 'Lưu thất bại');
        }
    };

    // ==================== NAVIGATION ====================
    const handleGoToQuestions = (quiz: QuizData) => {
        setActiveQuiz(quiz);
        setViewState('questions');
        if (!allQuestions[quiz.id]) {
            loadQuestions(quiz.id);
        }
    };
    const handleGoToResults = (quiz: QuizData) => { setActiveQuiz(quiz); setViewState('results'); };
    const handleBackToList = () => { setActiveQuiz(null); setViewState('list'); };

    // ==================== QUESTIONS ACTIONS ====================
    const handleAddQuestion = () => { setEditingQuestion(undefined); setIsQuestionModalOpen(true); };
    const handleEditQuestion = (q: QuestionData) => { setEditingQuestion(q); setIsQuestionModalOpen(true); };
    const handleDeleteQuestion = async (id: string) => {
        if (!activeQuiz || !window.confirm("Xóa câu hỏi này?")) return;
        try {
            await deleteLecturerQuestion(activeQuiz.id, id);
            setAllQuestions(prev => ({
                ...prev,
                [activeQuiz.id]: prev[activeQuiz.id].filter(q => q.id !== id)
            }));
        } catch (err: any) {
            alert(err.message || 'Xóa thất bại');
        }
    };
    const handleReorderQuestions = async (newQuestions: QuestionData[]) => {
        if (!activeQuiz) return;
        setAllQuestions(prev => ({ ...prev, [activeQuiz.id]: newQuestions }));
        try {
            await reorderLecturerQuestions(activeQuiz.id, newQuestions.map(q => ({ id: q.id, order: q.order })));
        } catch (err: any) {
            console.error('Reorder failed:', err);
        }
    };
    const handleSaveQuestion = async (data: Partial<QuestionData>) => {
        if (!activeQuiz) return;
        try {
            if (editingQuestion) {
                const updated = await updateLecturerQuestion(activeQuiz.id, editingQuestion.id, data);
                setAllQuestions(prev => ({
                    ...prev,
                    [activeQuiz.id]: prev[activeQuiz.id].map(q => q.id === editingQuestion.id ? updated : q)
                }));
            } else {
                const created = await createLecturerQuestion(activeQuiz.id, data);
                setAllQuestions(prev => ({
                    ...prev,
                    [activeQuiz.id]: [...(prev[activeQuiz.id] || []), created]
                }));
            }
            setIsQuestionModalOpen(false);
        } catch (err: any) {
            alert(err.message || 'Lưu câu hỏi thất bại');
        }
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

    if (loading) {
        return (
            <div className={styles.pageContainer}>
                <div style={{ textAlign: 'center', padding: '4rem 1rem', color: '#777587' }}>
                    Đang tải dữ liệu...
                </div>
            </div>
        );
    }

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
                <QuizSettingsModal
                    initialData={editingQuiz}
                    onSave={handleSaveQuiz}
                    onClose={() => setIsSettingsModalOpen(false)}
                    sections={sections}
                />
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
