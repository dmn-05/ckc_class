'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import styles from '@/components/student/assignments/AssignmentsManagement.module.css';
import SubmitModal from '../../../../../components/student/assignments/SubmitModal';
import { getStudentAssignmentById } from '@/app/actions/student-assignment';

interface ApiAssignment {
  id: number;
  tieu_de: string;
  noi_dung: string | null;
  huong_dan: string | null;
  lop_hoc_phan_id: number;
  nguoi_tao: string | null;
  diem_toi_da: number;
  han_nop: string | null;
  cho_phep_nop_tre: boolean;
  ngay_tao: string;
  ten_mon: string;
  ten_lop: string | null;
  files: { id: number; name: string; url: string; size: number }[];
}

export default function AssignmentDetailPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [assignment, setAssignment] = useState<ApiAssignment | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const data = await getStudentAssignmentById(id);
        setAssignment(data ?? null);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  };

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '4rem', color: '#777587' }}>Đang tải...</div>;
  }

  if (!assignment) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem', color: '#777587' }}>
        <p>Không tìm thấy bài tập này.</p>
        <button onClick={() => router.back()} style={{ marginTop: '1rem', padding: '0.5rem 1rem', borderRadius: '0.5rem', border: '1px solid #c7c4d8', cursor: 'pointer', background: 'none' }}>
          Quay lại
        </button>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      {/* Back button */}
      <button
        onClick={() => router.push(`/student/courses/${assignment.lop_hoc_phan_id}`)}
        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', background: 'none', border: 'none', cursor: 'pointer', color: '#6366f1', fontWeight: 500, fontSize: '0.9rem', padding: 0 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" height="18">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Quay lại lớp học phần
      </button>

      <div className={styles.detailCard}>
        {/* Header */}
        <div className={styles.detailHeader}>
          <div className={styles.detailTitleArea}>
            <div className={styles.detailIconBox}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <h3 className={styles.detailTitle}>{assignment.tieu_de}</h3>
              <p className={styles.detailDeadline}>
                {assignment.ten_lop && (
                  <span style={{ marginRight: '0.75rem', color: '#6366f1', fontWeight: 600 }}>{assignment.ten_lop}</span>
                )}
                {assignment.han_nop ? `Hạn nộp: ${assignment.han_nop}` : 'Không có hạn nộp'}
              </p>
            </div>
          </div>
          <span className={`${styles.statusBadge} ${styles.statusPending}`}>Chưa nộp</span>
        </div>

        {/* Mô tả */}
        {assignment.noi_dung && (
          <div className={styles.sectionBox}>
            <h4 className={styles.sectionTitle}>
              <svg className={styles.sectionIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Mô tả bài tập
            </h4>
            <p className={styles.sectionContent}>{assignment.noi_dung}</p>
          </div>
        )}

        {/* Hướng dẫn */}
        {assignment.huong_dan && (
          <div className={styles.sectionBox}>
            <h4 className={styles.sectionTitle}>
              <svg className={styles.sectionIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Hướng dẫn thực hiện
            </h4>
            <div className={styles.sectionContent} style={{ whiteSpace: 'pre-wrap' }}>
              {assignment.huong_dan}
            </div>
          </div>
        )}

        {/* Files đính kèm từ giảng viên */}
        {assignment.files && assignment.files.length > 0 && (
          <div className={styles.sectionBox}>
            <h4 className={styles.sectionTitle}>
              <svg className={styles.sectionIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
              File đính kèm từ giảng viên
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {assignment.files.map(file => (
                <a key={file.id} href={file.url} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.75rem', backgroundColor: '#f0f9ff', borderRadius: '0.375rem', border: '1px solid #bae6fd', textDecoration: 'none', color: '#0284c7', fontSize: '0.875rem' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span style={{ flex: 1 }}>{file.name}</span>
                  <span style={{ color: '#6b7280', fontSize: '0.75rem' }}>({formatSize(file.size)})</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className={styles.detailFooter}>
          <div className={styles.scoreInfo}>
            <div>
              <p className={styles.scoreLabel}>Điểm tối đa</p>
              <p className={`${styles.scoreValue} ${styles.scoreValuePrimary}`}>{Number(assignment.diem_toi_da).toFixed(1)}</p>
            </div>
            {assignment.nguoi_tao && (
              <div>
                <p className={styles.scoreLabel}>Giảng viên</p>
                <p className={styles.scoreValue}>{assignment.nguoi_tao}</p>
              </div>
            )}
          </div>

          <button className={styles.btnSubmit} onClick={() => setIsSubmitModalOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Nộp bài tập
          </button>
        </div>
      </div>

      <SubmitModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        assignmentTitle={assignment.tieu_de}
        onSubmit={() => setIsSubmitModalOpen(false)}
      />
    </div>
  );
}
