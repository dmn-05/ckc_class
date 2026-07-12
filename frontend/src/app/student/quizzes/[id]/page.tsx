'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import styles from '@/components/student/assignments/AssignmentsManagement.module.css';
import { getStudentQuizDetails, getStudentQuizzes } from '@/app/actions/student-quiz';

export default function StudentQuizDetailPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [quizDetails, setQuizDetails] = useState<any | null>(null);
  const [quizSummary, setQuizSummary] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [detailsRes, listRes] = await Promise.all([
          getStudentQuizDetails(id),
          getStudentQuizzes()
        ]);

        if (detailsRes.success && detailsRes.data) {
          setQuizDetails(detailsRes.data);
        }

        if (listRes.success && listRes.data) {
          const summary = listRes.data.find((q: any) => q.id.toString() === id.toString());
          if (summary) setQuizSummary(summary);
        }
      } catch (e) {
        console.error('Error loading quiz detail:', e);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [id]);

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Không giới hạn';
    try {
      const d = new Date(dateString);
      if (isNaN(d.getTime())) return dateString;
      const hours = String(d.getHours()).padStart(2, '0');
      const minutes = String(d.getMinutes()).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const year = d.getFullYear();
      return `${hours}:${minutes} ${day}/${month}/${year}`;
    } catch {
      return dateString;
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem', color: '#777587' }}>
        Đang tải thông tin bài kiểm tra...
      </div>
    );
  }

  if (!quizDetails) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem', color: '#777587' }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Không tìm thấy bài kiểm tra này.</p>
        <button
          onClick={() => router.back()}
          style={{
            padding: '0.6rem 1.25rem',
            borderRadius: '0.5rem',
            border: '1px solid #c7c4d8',
            cursor: 'pointer',
            backgroundColor: '#ffffff',
            fontWeight: 500
          }}
        >
          Quay lại
        </button>
      </div>
    );
  }

  const attemptsUsed = quizSummary?.attemptsUsed ?? 0;
  const maxAttempts = quizDetails.so_lan_thi_toi_da ?? quizSummary?.maxAttempts ?? 1;
  const now = new Date();
  const rawStartTime = quizDetails.thoi_gian_bat_dau || quizSummary?.startTime || quizSummary?.thoi_gian_bat_dau;
  const rawEndTime = quizDetails.thoi_gian_ket_thuc || quizSummary?.endTime || quizSummary?.thoi_gian_ket_thuc;
  const startTime = rawStartTime ? new Date(rawStartTime) : null;
  const endTime = rawEndTime ? new Date(rawEndTime) : null;
  const isNotStarted = startTime && now < startTime;
  const isEnded = endTime && now > endTime;
  const canTake = attemptsUsed < maxAttempts && !isNotStarted && !isEnded;
  const questionCount = quizDetails.cau_hois?.length ?? quizSummary?.questionCount ?? 0;
  const lastScore = quizSummary?.lastScore;

  return (
    <div className={styles.pageContainer}>
      {/* Back button */}
      <button
        onClick={() => {
          if (quizDetails.lop_hoc_phan_id) {
            router.push(`/student/courses/${quizDetails.lop_hoc_phan_id}`);
          } else {
            router.push('/student/quizzes');
          }
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '1.25rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: '#3525cd',
          fontWeight: 600,
          fontSize: '0.9rem',
          padding: 0
        }}
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
            <div className={styles.detailIconBox} style={{ backgroundColor: '#eef2ff', color: '#3525cd' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="26" height="26">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className={styles.detailTitle}>{quizDetails.tieu_de}</h3>
              <p className={styles.detailDeadline}>
                {quizDetails.lop_hoc_phan?.ten_lop && (
                  <span style={{ marginRight: '0.75rem', color: '#3525cd', fontWeight: 600 }}>
                    {quizDetails.lop_hoc_phan.ten_lop}
                  </span>
                )}
                <span>
                  Mở bài: {formatDate(rawStartTime)} • Đóng bài: {formatDate(rawEndTime)}
                </span>
              </p>
            </div>
          </div>

          {attemptsUsed > 0 ? (
            lastScore !== null && lastScore !== undefined ? (
              <span className={`${styles.statusBadge} ${styles.statusGraded}`}>
                Điểm cao nhất: {lastScore}/{quizDetails.diem_toi_da ?? 10}
              </span>
            ) : (
              <span className={`${styles.statusBadge} ${styles.statusSubmitted}`}>
                Đã làm ({attemptsUsed}/{maxAttempts} lần)
              </span>
            )
          ) : (
            <span className={`${styles.statusBadge} ${styles.statusPending}`}>
              Chưa làm bài
            </span>
          )}
        </div>

        {/* Thông tin nhanh bài kiểm tra */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1rem',
          margin: '1.5rem 0',
          padding: '1.25rem',
          backgroundColor: '#f8fafc',
          borderRadius: '0.75rem',
          border: '1px solid #e2e8f0'
        }}>
          <div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              Thời gian làm bài
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1e293b' }}>
              {quizDetails.thoi_gian_lam_bai || 45} phút
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              Số lượng câu hỏi
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1e293b' }}>
              {questionCount} câu
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              Lần thi cho phép
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1e293b' }}>
              {attemptsUsed} / {maxAttempts} lần
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              Thang điểm tối đa
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#3525cd' }}>
              {quizDetails.diem_toi_da ?? 10} điểm
            </div>
          </div>
        </div>

        {/* Mô tả */}
        {quizDetails.mo_ta && (
          <div className={styles.sectionBox}>
            <h4 className={styles.sectionTitle}>
              <svg className={styles.sectionIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Mô tả bài kiểm tra
            </h4>
            <p className={styles.sectionContent}>{quizDetails.mo_ta}</p>
          </div>
        )}

        {/* Hướng dẫn và quy chế làm bài */}
        <div className={styles.sectionBox} style={{ backgroundColor: '#fffbeb', border: '1px solid #fef3c7' }}>
          <h4 className={styles.sectionTitle} style={{ color: '#b45309' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" style={{ color: '#d97706' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Quy chế và hướng dẫn làm bài
          </h4>
          <ul style={{ margin: '0.5rem 0 0 1.25rem', color: '#78350f', fontSize: '0.875rem', lineHeight: '1.7' }}>
            <li>Thời gian làm bài sẽ bắt đầu đếm ngược ngay khi bạn bấm nút <b>Bắt đầu làm bài</b>.</li>
            <li>Hệ thống tự động lưu bài nháp liên tục trong quá trình bạn làm bài.</li>
            <li>Khi hết thời gian, hệ thống sẽ tự động nộp kết quả hiện tại của bạn.</li>
            <li>Đảm bảo kết nối Internet ổn định trước khi tiến hành làm bài.</li>
          </ul>
        </div>

        {/* Footer actions */}
        <div className={styles.detailFooter} style={{ marginTop: '1.5rem', paddingTop: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {attemptsUsed > 0 && (
              <div className={styles.scoreInfo}>
                <div>
                  <div className={styles.scoreLabel}>Lượt đã làm</div>
                  <div className={styles.scoreValue}>{attemptsUsed} / {maxAttempts}</div>
                </div>
                {lastScore !== null && lastScore !== undefined && (
                  <div>
                    <div className={styles.scoreLabel}>Điểm gần nhất</div>
                    <div className={`${styles.scoreValue} ${styles.scoreValuePrimary}`}>
                      {lastScore} / {quizDetails.diem_toi_da ?? 10}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {attemptsUsed > 0 && (
              <button
                onClick={() => router.push(`/student/quizzes/${id}/results`)}
                style={{
                  padding: '0.75rem 1.25rem',
                  borderRadius: '0.75rem',
                  border: '1px solid #cbd5e1',
                  backgroundColor: '#ffffff',
                  color: '#334155',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                Xem lịch sử & Kết quả
              </button>
            )}

            {isNotStarted ? (
              <div style={{ padding: '0.75rem 1.25rem', borderRadius: '0.75rem', backgroundColor: '#fef3c7', color: '#b45309', fontWeight: 600, fontSize: '0.9rem', border: '1px solid #fde68a' }}>
                Chưa đến giờ mở bài kiểm tra ({formatDate(rawStartTime)})
              </div>
            ) : isEnded ? (
              <div style={{ padding: '0.75rem 1.25rem', borderRadius: '0.75rem', backgroundColor: '#f1f5f9', color: '#64748b', fontWeight: 600, fontSize: '0.9rem' }}>
                Bài kiểm tra đã kết thúc
              </div>
            ) : canTake ? (
              <button
                onClick={() => router.push(`/student/quizzes/${id}/take`)}
                className={styles.btnSubmit}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" height="18">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {attemptsUsed > 0 ? 'Làm lại bài kiểm tra' : 'Bắt đầu làm bài'}
              </button>
            ) : (
              <div style={{ color: '#64748b', fontWeight: 600, fontSize: '0.9rem' }}>
                Đã hết lượt làm bài
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
