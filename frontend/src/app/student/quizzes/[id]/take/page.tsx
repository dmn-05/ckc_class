'use client';

import React, { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import QuizInterface, { QuestionData } from '@/components/student/quizzes/QuizInterface';
import { getStudentQuizDetails, submitStudentQuiz } from '@/app/actions/student-quiz';
import styles from '@/components/student/quizzes/QuizzesManagement.module.css';

export default function TakeQuizPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();
    const [quizMeta, setQuizMeta] = useState<{ title: string; durationMinutes: number } | null>(null);
    const [activeQuestions, setActiveQuestions] = useState<QuestionData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            setLoading(true);
            try {
                // Fetch details — backend đã xáo trộn câu hỏi/đáp án theo cài đặt
                const res = await getStudentQuizDetails(id);
                if (res.success && res.data) {
                    const quiz = res.data;

                    // Kiểm tra thời gian mở bài
                    const rawStart = quiz.thoi_gian_bat_dau;
                    if (rawStart && new Date() < new Date(rawStart)) {
                        router.replace(`/student/quizzes/${id}`);
                        return;
                    }

                    setQuizMeta({
                        title: quiz.tieu_de,
                        durationMinutes: quiz.thoi_gian_lam_bai ?? 60,
                    });

                    if (quiz.cau_hois) {
                        const questions: QuestionData[] = quiz.cau_hois.map((c: any) => {
                            let type: 'single' | 'multiple' | 'text' = 'text';
                            if (c.loai === 'single_choice' || c.loai === 'true_false') type = 'single';
                            if (c.loai === 'multiple_choice') type = 'multiple';

                            const qData: QuestionData = {
                                id: c.id.toString(),
                                type,
                                text: c.noi_dung,
                            };

                            if (c.dap_ans && type !== 'text') {
                                // Thứ tự đáp án đã được xáo trộn (hoặc không) từ backend
                                qData.options = c.dap_ans.map((d: any) => ({
                                    id: d.id.toString(),
                                    text: d.noi_dung
                                }));
                            }
                            return qData;
                        });
                        setActiveQuestions(questions);
                    }
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
        if (!quizMeta) return;
        setLoading(true);
        try {
            const totalSeconds = quizMeta.durationMinutes * 60;
            const spentSeconds = Math.max(0, totalSeconds - timeLeft);
            const res = await submitStudentQuiz(id, answers, spentSeconds);
            if (res.success && res.data) {
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

    if (!quizMeta) {
        return (
            <div className={styles.pageContainer}>
                <div style={{ padding: '2rem', textAlign: 'center' }}>Không tìm thấy bài kiểm tra.</div>
            </div>
        );
    }

    if (activeQuestions.length === 0) {
        return (
            <div className={styles.pageContainer}>
                <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
                    <h3 style={{ color: '#b45309', marginBottom: '1rem' }}>Bài kiểm tra chưa được mở hoặc chưa có câu hỏi.</h3>
                    <button
                        onClick={() => router.back()}
                        style={{ padding: '0.6rem 1.5rem', borderRadius: '8px', border: '1px solid #cbd5e1', cursor: 'pointer', backgroundColor: '#fff', fontWeight: 600 }}
                    >
                        Quay lại
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.pageContainer}>
            <QuizInterface
                quizTitle={quizMeta.title}
                quizId={id}
                durationMinutes={quizMeta.durationMinutes}
                questions={activeQuestions}
                onSaveDraft={() => alert('Đã lưu bài làm nháp thành công!')}
                onSubmit={handleSubmitQuiz}
            />
        </div>
    );
}
