'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/components/student/assignments/AssignmentsManagement.module.css';
import { getStudentAssignments } from '@/app/actions/student-assignment';

interface ApiAssignment {
  id: number;
  tieu_de: string;
  noi_dung: string | null;
  lop_hoc_phan_id: number;
  nguoi_tao: string | null;
  diem_toi_da: number;
  han_nop: string | null;
  ngay_tao: string;
  ten_mon: string;
  ten_lop: string | null;
  submission?: {
    trang_thai: string;
    diem: number | null;
  } | null;
}

export default function StudentAssignmentsPage() {
  const router = useRouter();
  const [assignments, setAssignments] = useState<ApiAssignment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await getStudentAssignments();
        setAssignments(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem', color: '#777587' }}>
        Đang tải bài tập...
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <h2 className={styles.pageTitle}>Bài tập</h2>
        <p style={{ color: '#777587', fontSize: '0.875rem' }}>{assignments.length} bài tập</p>
      </div>

      {assignments.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem', color: '#777587' }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48" style={{ margin: '0 auto 1rem', opacity: 0.4 }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <p>Bạn chưa có bài tập nào.</p>
        </div>
      ) : (
        <div className={styles.cardsGrid}>
          {assignments.map(a => (
            <div
              key={a.id}
              className={styles.assignmentCard}
              onClick={() => router.push(`/student/assignments/${a.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.cardHeader}>
                {a.submission ? (
                  a.submission.trang_thai === 'da_cham' ? (
                    <span className={`${styles.cardBadge} ${styles.statusGraded}`}>Đã chấm: {a.submission.diem ?? 0} đ</span>
                  ) : a.submission.trang_thai === 'nop_muon' ? (
                    <span className={`${styles.cardBadge} ${styles.statusLate}`}>Nộp muộn</span>
                  ) : (
                    <span className={`${styles.cardBadge} ${styles.statusSubmitted}`}>Đã nộp</span>
                  )
                ) : (
                  <span className={`${styles.cardBadge} ${styles.statusPending}`}>Chưa nộp</span>
                )}
              </div>
              <h4 className={styles.cardTitle}>{a.tieu_de}</h4>
              {a.ten_lop && <p className={styles.cardSubtitle} style={{ color: '#6366f1', fontWeight: 500 }}>{a.ten_lop}</p>}
              <p className={styles.cardSubtitle}>{a.ten_mon}</p>
              <p className={styles.cardSubtitle}>
                {a.han_nop ? `📅 Hạn nộp: ${a.han_nop}` : 'Không có hạn nộp'}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.75rem' }}>
                <span style={{ color: '#6366f1', fontWeight: 600, fontSize: '0.875rem' }}>
                  {Number(a.diem_toi_da).toFixed(0)} điểm
                </span>
                <span style={{ color: '#6366f1', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  Xem chi tiết
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="14" height="14">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
