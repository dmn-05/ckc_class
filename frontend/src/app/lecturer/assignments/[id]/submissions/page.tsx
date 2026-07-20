'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import styles from '@/components/lecturer/assignments/AssignmentsManagement.module.css';
import SubmissionsView, { SubmissionData } from '@/components/lecturer/assignments/SubmissionsView';
import GradingModal from '@/components/lecturer/assignments/GradingModal';
import { AssignmentData } from '@/components/lecturer/assignments/AssignmentGrid';
import {
  getLecturerAssignmentById,
  getLecturerAssignmentSubmissions,
} from '@/app/actions/lecturer-assignment';

export default function AssignmentSubmissionsPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [assignment, setAssignment] = useState<AssignmentData | null>(null);
  const [submissions, setSubmissions] = useState<SubmissionData[]>([]);
  const [loading, setLoading] = useState(true);

  // Grading Modal State
  const [gradingSubmission, setGradingSubmission] = useState<SubmissionData | null>(null);

  // Return Confirm State & Toast
  const [confirmReturnIds, setConfirmReturnIds] = useState<string[] | null>(null);
  const [returning, setReturning] = useState(false);
  const [toast, setToast] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3500);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  useEffect(() => {
    async function loadData() {
      try {
        const [assignmentData, subs] = await Promise.all([
          getLecturerAssignmentById(id),
          getLecturerAssignmentSubmissions(id)
        ]);
        setAssignment(assignmentData);
        setSubmissions(subs);
      } catch (error) {
        console.error('Failed to load assignment or submissions', error);
      } finally {
        setLoading(false);
      }
    }
    if (id) loadData();
  }, [id]);

  const [initialSectionId, setInitialSectionId] = useState<string>('');

  useEffect(() => {
    const searchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
    const sId = searchParams.get('sectionId');
    if (sId) setInitialSectionId(sId);
  }, []);

  const handleBackToList = () => {
    const targetSectionId = initialSectionId || assignment?.sectionId;
    if (targetSectionId) {
      router.push(`/lecturer/sections/${targetSectionId}`);
    } else {
      router.push('/lecturer/assignments');
    }
  };

  const handleGrade = (submission: SubmissionData) => {
    setGradingSubmission(submission);
  };

  const handleSaveGrade = async (submissionId: string, score: number, feedback: string) => {
    try {
      const { gradeLecturerSubmission } = await import('@/app/actions/lecturer-assignment');
      await gradeLecturerSubmission(id, submissionId, score, feedback);
      
      setSubmissions(prev => 
        prev.map(s => s.id === submissionId ? { ...s, score, feedback, status: 'graded' as const } : s)
      );
      setGradingSubmission(null);
      setToast({ text: 'Đã lưu điểm và nhận xét thành công!', type: 'success' });
    } catch (error) {
      console.error(error);
      setToast({ text: 'Có lỗi xảy ra khi lưu điểm. Vui lòng thử lại.', type: 'error' });
    }
  };

  const handleReturnBulk = (submissionIds: string[]) => {
    setConfirmReturnIds(submissionIds);
  };

  const confirmReturnAction = async () => {
    if (!confirmReturnIds || confirmReturnIds.length === 0) return;
    setReturning(true);
    try {
      const { returnLecturerSubmissions } = await import('@/app/actions/lecturer-assignment');
      await returnLecturerSubmissions(id, confirmReturnIds);
      setSubmissions(prev => 
        prev.map(s => confirmReturnIds.includes(s.id) ? { ...s, status: 'returned' as const } : s)
      );
      setToast({ text: `Đã trả điểm thành công cho ${confirmReturnIds.length} bài thi!`, type: 'success' });
    } catch (error) {
      console.error(error);
      setToast({ text: 'Có lỗi xảy ra khi trả bài.', type: 'error' });
    } finally {
      setReturning(false);
      setConfirmReturnIds(null);
    }
  };

  if (loading) {
    return <div className={styles.pageContainer} style={{ padding: '4rem', textAlign: 'center' }}>Đang tải...</div>;
  }

  if (!assignment) {
    return <div className={styles.pageContainer} style={{ padding: '4rem', textAlign: 'center' }}>Không tìm thấy bài tập.</div>;
  }

  return (
    <div className={styles.pageContainer}>
      <SubmissionsView 
        assignment={assignment}
        submissions={submissions}
        onBack={handleBackToList}
        onGrade={handleGrade}
        onReturnBulk={handleReturnBulk}
      />

      {gradingSubmission && (
        <GradingModal 
          submission={gradingSubmission}
          maxScore={assignment.maxScore}
          onSave={handleSaveGrade}
          onClose={() => setGradingSubmission(null)}
        />
      )}

      {confirmReturnIds && (
        <div className={styles.modalOverlay} style={{ zIndex: 1000 }}>
          <div className={`${styles.modalContent} ${styles.modalContentSmall}`} style={{ maxWidth: '420px', textAlign: 'center', padding: '2rem 1.75rem', borderRadius: '1rem', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#eff6ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="30" height="30">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#191c1e', marginBottom: '0.75rem' }}>
              Xác nhận trả bài ({confirmReturnIds.length})
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#464555', marginBottom: '1.75rem', lineHeight: 1.5 }}>
              Bạn có chắc chắn muốn công bố kết quả cho <strong>{confirmReturnIds.length}</strong> bài thi đã chọn? Sinh viên sẽ lập tức xem được điểm số và lời nhận xét chi tiết.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
              <button
                type="button"
                className={styles.btnSecondary}
                style={{ flex: 1, padding: '0.65rem 1rem', borderRadius: '0.5rem', fontWeight: 600, cursor: 'pointer' }}
                onClick={() => setConfirmReturnIds(null)}
                disabled={returning}
              >
                Hủy bỏ
              </button>
              <button
                type="button"
                className={styles.btnPrimary}
                style={{ flex: 1, padding: '0.65rem 1rem', borderRadius: '0.5rem', backgroundColor: '#4f46e5', borderColor: '#4f46e5', color: '#ffffff', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', cursor: returning ? 'not-allowed' : 'pointer', opacity: returning ? 0.7 : 1 }}
                onClick={confirmReturnAction}
                disabled={returning}
              >
                {returning ? 'Đang gửi...' : 'Đồng ý trả bài'}
              </button>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          backgroundColor: toast.type === 'success' ? '#10b981' : '#ef4444',
          color: '#ffffff',
          padding: '1rem 1.5rem',
          borderRadius: '0.75rem',
          boxShadow: '0 10px 25px -5px rgba(0,0,0,0.25)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          zIndex: 2000,
          animation: 'modalIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          fontWeight: 600,
          fontSize: '0.95rem'
        }}>
          {toast.type === 'success' ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="22" height="22">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="22" height="22">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          {toast.text}
        </div>
      )}
    </div>
  );
}
