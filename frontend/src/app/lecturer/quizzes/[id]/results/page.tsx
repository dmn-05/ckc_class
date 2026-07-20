'use client';

import React, { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import QuizResultsView, { QuizAttempt, EssayAnswer } from '@/components/lecturer/quizzes/QuizResultsView';
import EssayGradingModal from '@/components/lecturer/quizzes/EssayGradingModal';
import { getLecturerQuizById, getQuizAttempts, gradeQuizEssay } from '@/app/actions/lecturer-quiz';
import { QuizData } from '@/components/lecturer/quizzes/QuizGrid';

export default function QuizResultsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();
    const [quizData, setQuizData] = useState<QuizData | null>(null);
    const [attempts, setAttempts] = useState<QuizAttempt[]>([]);
    const [loading, setLoading] = useState(true);

    const [gradingAttempt, setGradingAttempt] = useState<QuizAttempt | null>(null);

    const [initialSectionId, setInitialSectionId] = useState<string>('');

    useEffect(() => {
        const params = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
        const sId = params.get('sectionId');
        if (sId) setInitialSectionId(sId);

        Promise.all([
            getLecturerQuizById(id),
            getQuizAttempts(id)
        ])
        .then(([quiz, attemptList]) => {
            setQuizData(quiz);
            setAttempts(attemptList);
        })
        .catch(err => {
            console.error(err);
            alert('Không thể tải dữ liệu báo cáo');
            router.push('/lecturer/quizzes');
        })
        .finally(() => setLoading(false));
    }, [id, router]);

    const handleSaveGrading = async (attemptId: string, updatedAnswers: EssayAnswer[], essayScore: number) => {
        if (!quizData) return;
        try {
            await gradeQuizEssay(quizData.id, attemptId, essayScore, updatedAnswers.map(a => ({ questionId: a.questionId, score: a.score ?? 0 })));
            
            setAttempts(prev => prev.map(a => a.id === attemptId
                ? { ...a, essayAnswers: updatedAnswers, essayScore, totalScore: a.autoScore + essayScore, status: 'graded' }
                : a
            ));
            setGradingAttempt(null);
        } catch (err: any) {
            alert(err.message || 'Lỗi khi lưu điểm');
        }
    };

    if (loading) {
        return (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', color: '#777587' }}>
                Đang tải dữ liệu...
            </div>
        );
    }

    if (!quizData) return null;

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
            <QuizResultsView
                quiz={quizData}
                attempts={attempts}
                onBack={() => {
                    const targetSectionId = initialSectionId || quizData.sectionId;
                    if (targetSectionId) {
                        router.push(`/lecturer/sections/${targetSectionId}`);
                    } else {
                        router.push('/lecturer/quizzes');
                    }
                }}
                onGradeEssay={(attempt) => setGradingAttempt(attempt)}
            />

            {gradingAttempt && (
                <EssayGradingModal 
                    attempt={gradingAttempt} 
                    onSave={handleSaveGrading} 
                    onClose={() => setGradingAttempt(null)} 
                />
            )}
        </div>
    );
}
