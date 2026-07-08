'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/components/lecturer/quizzes/QuizzesManagement.module.css';
import QuizDashboard from '@/components/lecturer/quizzes/QuizDashboard';
import QuizGrid, { QuizData } from '@/components/lecturer/quizzes/QuizGrid';
import {
    getLecturerQuizzes,
    deleteLecturerQuiz,
} from '@/app/actions/lecturer-quiz';

export default function LecturerQuizzesPage() {
    const router = useRouter();
    const [quizzes, setQuizzes] = useState<QuizData[]>([]);
    const [loading, setLoading] = useState(true);

    const loadData = useCallback(async () => {
        setLoading(true);
        try {
            const quizData = await getLecturerQuizzes();
            setQuizzes(quizData);
        } catch (err: any) {
            console.error('Failed to load data:', err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => { loadData(); }, [loadData]);

    // Dashboard Stats
    const totalQuizzes = quizzes.length;
    const openQuizzes = quizzes.filter(q => q.status === 'open').length;
    // We can't calculate essaysToGrade easily here without fetching all attempts, so we'll just set it to 0 or fetch an aggregate endpoint later.
    const essaysToGrade = 0;

    const handleOpenAddQuiz = () => {
        router.push('/lecturer/quizzes/create');
    };

    const handleOpenEditQuiz = (quiz: QuizData) => {
        router.push(`/lecturer/quizzes/${quiz.id}/edit`);
    };

    const handleGoToQuestions = (quiz: QuizData) => {
        router.push(`/lecturer/quizzes/${quiz.id}/questions`);
    };

    const handleGoToResults = (quiz: QuizData) => {
        router.push(`/lecturer/quizzes/${quiz.id}/results`);
    };

    const handleDeleteQuiz = async (id: string) => {
        if (!window.confirm("Xóa bài kiểm tra này?")) return;
        try {
            await deleteLecturerQuiz(id);
            setQuizzes(prev => prev.filter(q => q.id !== id));
        } catch (err: any) {
            alert(err.message || 'Xóa thất bại');
        }
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
        </div>
    );
}

