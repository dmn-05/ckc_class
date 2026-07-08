'use client';

import React, { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import QuestionsManager, { QuestionData } from '@/components/lecturer/quizzes/QuestionsManager';
import QuestionFormModal from '@/components/lecturer/quizzes/QuestionFormModal';
import { 
    getLecturerQuizById, 
    getLecturerQuestions, 
    createLecturerQuestion, 
    updateLecturerQuestion, 
    deleteLecturerQuestion, 
    reorderLecturerQuestions 
} from '@/app/actions/lecturer-quiz';
import { QuizData } from '@/components/lecturer/quizzes/QuizGrid';

export default function QuestionsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();
    const [quizData, setQuizData] = useState<QuizData | null>(null);
    const [questions, setQuestions] = useState<QuestionData[]>([]);
    const [loading, setLoading] = useState(true);
    const [initialSectionId, setInitialSectionId] = useState<string>('');

    // Modals
    const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
    const [editingQuestion, setEditingQuestion] = useState<QuestionData | undefined>(undefined);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const sId = params.get('sectionId');
        if (sId) setInitialSectionId(sId);

        Promise.all([
            getLecturerQuizById(id),
            getLecturerQuestions(id)
        ])
        .then(([quiz, qList]) => {
            setQuizData(quiz);
            setQuestions(qList);
        })
        .catch(err => {
            console.error(err);
            alert('Không thể tải dữ liệu câu hỏi');
            if (sId) {
                router.push(`/lecturer/sections/${sId}`);
            } else {
                router.push('/lecturer/quizzes');
            }
        })
        .finally(() => setLoading(false));
    }, [id, router]);

    const handleSaveQuestion = async (data: Partial<QuestionData>) => {
        try {
            if (editingQuestion) {
                const updated = await updateLecturerQuestion(id, editingQuestion.id, data);
                setQuestions(prev => prev.map(q => q.id === editingQuestion.id ? updated : q));
            } else {
                const created = await createLecturerQuestion(id, data);
                setQuestions(prev => [...prev, created]);
            }
            setIsQuestionModalOpen(false);
            setEditingQuestion(undefined);
        } catch (err: any) {
            alert(err.message || 'Lưu câu hỏi thất bại');
        }
    };

    const handleDeleteQuestion = async (questionId: string) => {
        if (!confirm('Bạn có chắc chắn muốn xóa câu hỏi này?')) return;
        try {
            await deleteLecturerQuestion(id, questionId);
            setQuestions(prev => prev.filter(q => q.id !== questionId));
        } catch (err: any) {
            alert(err.message || 'Xóa thất bại');
        }
    };

    const handleReorderQuestions = async (newQuestions: QuestionData[]) => {
        setQuestions(newQuestions);
        try {
            await reorderLecturerQuestions(id, newQuestions.map(q => ({ id: q.id, order: q.order })));
        } catch (err: any) {
            console.error('Failed to save order', err);
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

    const handleBack = () => {
        if (initialSectionId) {
            router.push(`/lecturer/sections/${initialSectionId}`);
        } else {
            router.push('/lecturer/quizzes');
        }
    };

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
            <QuestionsManager
                quizTitle={quizData.title}
                questions={questions}
                onBack={handleBack}
                onSaveNewQuestion={handleSaveQuestion}
                onEditQuestion={(q) => {
                    setEditingQuestion(q);
                    setIsQuestionModalOpen(true);
                }}
                onDeleteQuestion={handleDeleteQuestion}
                onReorder={handleReorderQuestions}
            />

            {isQuestionModalOpen && (
                <QuestionFormModal 
                    initialData={editingQuestion} 
                    onSave={handleSaveQuestion} 
                    onClose={() => setIsQuestionModalOpen(false)} 
                />
            )}
        </div>
    );
}
