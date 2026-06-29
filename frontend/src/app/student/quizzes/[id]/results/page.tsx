'use client';

import React, { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import QuizResult from '@/components/student/quizzes/QuizResult';
import { getStudentQuizDetails, getStudentQuizResult, getStudentQuizzes } from '@/app/actions/student-quiz';
import { QuestionData } from '@/components/student/quizzes/QuizInterface';
import { QuizData } from '@/components/student/quizzes/QuizCard';
import styles from '@/components/student/quizzes/QuizzesManagement.module.css';

export default function QuizResultPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();
    const [resultData, setResultData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadResult() {
            setLoading(true);
            try {
                // We need to fetch quiz details to get questions definitions (to know their types and options)
                const quizRes = await getStudentQuizDetails(id);
                if (!quizRes.success || !quizRes.data) {
                    alert('Không thể lấy thông tin bài kiểm tra.');
                    setLoading(false);
                    return;
                }
                
                const res = await getStudentQuizResult(id);
                if (res.success && res.data) {
                    const attemptsData = res.data.data || [];
                    const correctAnswersMap = res.data.correctAnswers || {};
                    const explanationsMap = res.data.explanations || {};
                    
                    let hasTextQuestions = false;
                    const questions: QuestionData[] = [];
                    
                    quizRes.data.cau_hois.forEach((c: any) => {
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
                                text: d.noi_dung,
                            }));
                        }
                        questions.push(qData);
                        if (type === 'text') hasTextQuestions = true;
                    });

                    const attempts = attemptsData.map((attempt: any, index: number) => {
                        let correctCount = 0;
                        const userAnswers: Record<string, any> = {};
                        const textScores: Record<string, number> = {};

                        if (attempt.chi_tiet) {
                            attempt.chi_tiet.forEach((ct: any) => {
                                const qId = ct.cau_hoi_id.toString();
                                const q = questions.find(aq => aq.id === qId);
                                
                                if (q && q.type !== 'text') {
                                    if (ct.diem_dat > 0) correctCount++;
                                    if (q.type === 'single') {
                                        userAnswers[qId] = ct.cau_tra_loi;
                                    } else if (q.type === 'multiple') {
                                        try {
                                            userAnswers[qId] = JSON.parse(ct.cau_tra_loi || '[]');
                                        } catch {
                                            userAnswers[qId] = [];
                                        }
                                    }
                                } else if (q && q.type === 'text') {
                                    userAnswers[qId] = ct.cau_tra_loi;
                                    textScores[qId] = ct.diem_dat || 0;
                                }
                            });
                        }

                        // Time spent
                        let timeSpentStr = 'N/A';
                        if (attempt.thoi_gian_bat_dau && attempt.thoi_gian_nop_bai) {
                            const start = new Date(attempt.thoi_gian_bat_dau);
                            const end = new Date(attempt.thoi_gian_nop_bai);
                            const diffSecs = Math.floor((end.getTime() - start.getTime()) / 1000);
                            const m = Math.floor(diffSecs / 60);
                            const s = diffSecs % 60;
                            const spentStr = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
                            
                            const totalMins = quizRes.data.thoi_gian_lam_bai || 0;
                            const totalStr = `${totalMins < 10 ? '0' : ''}${totalMins}:00`;
                            
                            timeSpentStr = `${spentStr} / ${totalStr}`;
                        }

                        return {
                            id: attempt.id,
                            attemptNumber: index + 1,
                            score: attempt.tong_diem || 0,
                            correctCount,
                            timeSpentStr,
                            attemptStatus: attempt.trang_thai,
                            textScores,
                            userAnswers,
                        };
                    });

                    setResultData({
                        attempts: attempts.reverse(), // Show newest first
                        maxScore: 10, // hardcode for now
                        totalQuestions: questions.length,
                        hasTextQuestions,
                        questions,
                        correctAnswers: correctAnswersMap,
                        explanations: explanationsMap,
                        courseId: quizRes.data.lop_hoc_phan_id
                    });
                } else {
                    alert('Không có kết quả nào cho bài kiểm tra này.');
                }
            } catch (err) {
                console.error(err);
                alert('Có lỗi xảy ra khi xem kết quả');
            } finally {
                setLoading(false);
            }
        }
        loadResult();
    }, [id]);

    const handleBackToList = () => {
        if (resultData && resultData.courseId) {
            router.push(`/student/courses/${resultData.courseId}?tab=classwork`);
        } else {
            router.push('/student/courses');
        }
    };

    if (loading) {
        return (
            <div className={styles.pageContainer}>
                <div style={{ padding: '2rem', textAlign: 'center' }}>Đang tải kết quả...</div>
            </div>
        );
    }

    if (!resultData) {
        return (
            <div className={styles.pageContainer}>
                <div style={{ padding: '2rem', textAlign: 'center' }}>Không tìm thấy kết quả bài làm.</div>
            </div>
        );
    }

    return (
        <div className={styles.pageContainer}>
            <QuizResult
                {...resultData}
                onBackToList={handleBackToList}
            />
        </div>
    );
}
