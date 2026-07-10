'use client';

import React, { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import QuizSettingsForm from '@/components/lecturer/quizzes/QuizSettingsForm';
import { updateLecturerQuiz, getLecturerCourseSections, getLecturerQuizById, CourseSectionOption } from '@/app/actions/lecturer-quiz';
import { QuizData } from '@/components/lecturer/quizzes/QuizGrid';

export default function EditQuizPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();
    const [sections, setSections] = useState<CourseSectionOption[]>([]);
    const [quizData, setQuizData] = useState<QuizData | null>(null);
    const [loading, setLoading] = useState(true);
    const [initialSectionId, setInitialSectionId] = useState<string>('');

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const sId = params.get('sectionId');
        if (sId) setInitialSectionId(sId);

        Promise.all([
            getLecturerCourseSections(),
            getLecturerQuizById(id)
        ])
        .then(([sectionsData, quiz]) => {
            setSections(sectionsData);
            setQuizData(quiz);
        })
        .catch(err => {
            console.error(err);
            alert('Không thể tải dữ liệu bài kiểm tra');
            if (sId) {
                router.push(`/lecturer/sections/${sId}`);
            } else {
                router.push('/lecturer/quizzes');
            }
        })
        .finally(() => setLoading(false));
    }, [id, router]);

    const handleSave = async (data: Partial<QuizData>) => {
        try {
            await updateLecturerQuiz(id, data);
            if (initialSectionId) {
                router.push(`/lecturer/sections/${initialSectionId}`);
            } else {
                router.push('/lecturer/quizzes');
            }
        } catch (err: any) {
            if (err?.message?.includes('NEXT_REDIRECT') || err?.digest?.includes('NEXT_REDIRECT')) {
                return;
            }
            alert(err.message || 'Lưu thất bại');
        }
    };

    if (loading) {
        return (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', color: '#777587' }}>
                Đang tải dữ liệu...
            </div>
        );
    }

    if (!quizData) {
        return (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', color: '#777587' }}>
                Không tìm thấy bài kiểm tra.
            </div>
        );
    }

    const handleBack = () => {
        if (initialSectionId) {
            router.push(`/lecturer/sections/${initialSectionId}`);
        } else {
            router.push('/lecturer/quizzes');
        }
    };

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--color-on-surface)' }}>Cài đặt bài kiểm tra</h1>
            <QuizSettingsForm
                initialData={quizData}
                onSave={handleSave}
                onClose={handleBack}
                sections={sections}
            />
        </div>
    );
}
