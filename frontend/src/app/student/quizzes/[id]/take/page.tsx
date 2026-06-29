'use client';

import React, { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import QuizInterface, { QuestionData } from '@/components/student/quizzes/QuizInterface';
import { getStudentQuizDetails, submitStudentQuiz, getStudentQuizzes } from '@/app/actions/student-quiz';
import { QuizData } from '@/components/student/quizzes/QuizCard';
import styles from '@/components/student/quizzes/QuizzesManagement.module.css';

export default function TakeQuizPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();
    const [quizData, setQuizData] = useState<QuizData | null>(null);
    const [activeQuestions, setActiveQuestions] = useState<QuestionData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            setLoading(true);
            try {
                // Fetch basic quiz info from list to get duration
                const listRes = await getStudentQuizzes();
                if (listRes.success && listRes.data) {
                    const q = listRes.data.find((quiz: QuizData) => quiz.id === id);
                    if (q) setQuizData(q);
                }

                // Fetch details for questions
                const res = await getStudentQuizDetails(id);
                if (res.success && res.data && res.data.cau_hois) {
                    const questions: QuestionData[] = [];
                    res.data.cau_hois.forEach((c: any) => {
                        let type: 'single' | 'multiple' | 'text' = 'text';
                        if (c.loai === 'single_choice' || c.loai === 'true_false') type = 'single';
                        if (c.loai === 'multiple_choice') type = 'multiple';

                        const qData: QuestionData = {
                            id: c.id.toString(),
                            type,
                            text: c.noi_dung,
                        };

                        if (c.dap_ans && type !== 'text') {
                            qData.options = c.dap_ans.map((d: any) => ({
                                id: d.id.toString(),
                                text: d.noi_dung
                            }));
                        }
                        questions.push(qData);
                    });
                    setActiveQuestions(questions);
                }
            } catch (err) {
                console.error(err);
                alert('Có lỗi xảy ra khi tải bài kiểm tra');
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, [id]);

    const handleSubmitQuiz = async (answers: Record<string, any>, timeLeft: number) => {
        if (!quizData) return;
        setLoading(true);
        try {
            const totalSeconds = quizData.durationMinutes * 60;
            const spentSeconds = Math.max(0, totalSeconds - timeLeft);
            const res = await submitStudentQuiz(id, answers, spentSeconds);
            if (res.success && res.data) {
                // Navigate to results page
                router.push(`/student/quizzes/${id}/results`);
            } else {
                alert('Có lỗi xảy ra khi nộp bài: ' + res.error);
                setLoading(false);
            }
        } catch (err) {
            console.error(err);
            alert('Có lỗi xảy ra khi nộp bài');
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className={styles.pageContainer}>
                <div style={{ padding: '2rem', textAlign: 'center' }}>Đang tải bài kiểm tra...</div>
            </div>
        );
    }

    if (!quizData) {
        return (
            <div className={styles.pageContainer}>
                <div style={{ padding: '2rem', textAlign: 'center' }}>Không tìm thấy bài kiểm tra.</div>
            </div>
        );
    }

    return (
        <div className={styles.pageContainer}>
            <QuizInterface
                quizTitle={quizData.title}
                quizId={id}
                durationMinutes={quizData.durationMinutes}
                questions={activeQuestions}
                onSaveDraft={() => alert('Đã lưu bài làm nháp thành công!')}
                onSubmit={handleSubmitQuiz}
            />
        </div>
    );
}
