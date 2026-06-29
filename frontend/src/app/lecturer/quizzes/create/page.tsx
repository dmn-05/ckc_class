'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import QuizSettingsForm from '@/components/lecturer/quizzes/QuizSettingsForm';
import { createLecturerQuiz, getLecturerCourseSections, CourseSectionOption } from '@/app/actions/lecturer-quiz';
import { QuizData } from '@/components/lecturer/quizzes/QuizGrid';

export default function CreateQuizPage() {
    const router = useRouter();
    const [sections, setSections] = useState<CourseSectionOption[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getLecturerCourseSections()
            .then(data => setSections(data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    const handleSave = async (data: Partial<QuizData>) => {
        try {
            await createLecturerQuiz(data);
            router.push('/lecturer/quizzes');
        } catch (err: any) {
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

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--color-on-surface)' }}>Thêm bài kiểm tra mới</h1>
            <QuizSettingsForm
                onSave={handleSave}
                onClose={() => router.push('/lecturer/quizzes')}
                sections={sections}
            />
        </div>
    );
}
