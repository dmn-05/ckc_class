'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/components/student/quizzes/QuizzesManagement.module.css';
import QuizList from '@/components/student/quizzes/QuizList';
import { QuizData } from '@/components/student/quizzes/QuizCard';
import { getStudentQuizzes } from '@/app/actions/student-quiz';

export default function StudentQuizzesPage() {
  const [quizzes, setQuizzes] = useState<QuizData[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  React.useEffect(() => {
    async function loadQuizzes() {
      try {
        const res = await getStudentQuizzes();
        if (res.success && res.data) {
          setQuizzes(res.data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadQuizzes();
  }, []);

  const handleStartQuiz = (id: string) => {
    router.push(`/student/quizzes/${id}/take`);
  };

  const handleViewResult = (id: string) => {
    router.push(`/student/quizzes/${id}/results`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.pageTitle}>Bài kiểm tra</h1>
        <p className={styles.pageSubtitle}>Hoàn thành các bài kiểm tra được giao để đánh giá kiến thức của bạn.</p>
      </div>

      {loading ? (
        <div style={{ padding: '2rem', textAlign: 'center' }}>Đang tải bài kiểm tra...</div>
      ) : quizzes.length === 0 ? (
        <div style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>Không có bài kiểm tra nào hiện tại.</div>
      ) : (
        <QuizList 
          quizzes={quizzes} 
          onStartQuiz={handleStartQuiz}
          onViewResult={handleViewResult}
        />
      )}
    </div>
  );
}
