'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import styles from '@/components/student/assignments/AssignmentsManagement.module.css';
import SubmitModal from '@/components/student/assignments/SubmitModal';
import { getStudentAssignmentById } from '@/app/actions/student-assignment';
import { formatFileUrl, downloadFile } from '@/utils/download';

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
  submission?: {
    id: number;
    ngay_nop: string | null;
    duong_dan_file: string | null;
    ten_file?: string | null;
    trang_thai: string; // 'da_nop' | 'nop_muon' | 'da_cham'
    diem: number | null;
    nhan_xet: string | null;
  } | null;
}

export default function AssignmentDetailPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [assignment, setAssignment] = useState<ApiAssignment | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const loadData = async () => {
    try {
      const data = await getStudentAssignmentById(id);
      setAssignment(data ?? null);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [id]);

  const showToast = (text: string, type: 'success' | 'error' = 'success') => {
    setToastMessage({ text, type });
    setTimeout(() => setToastMessage(null), 3000);
  };

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
      {toastMessage && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          padding: '12px 20px',
          backgroundColor: toastMessage.type === 'success' ? '#10b981' : '#ef4444',
          color: 'white',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontWeight: 500,
          animation: 'slideIn 0.3s ease-out'
        }}>
          {toastMessage.type === 'success' ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
          {toastMessage.text}
          <style>{`
            @keyframes slideIn {
              from { transform: translateX(100%); opacity: 0; }
              to { transform: translateX(0); opacity: 1; }
            }
          `}</style>
        </div>
      )}

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
          {assignment.submission ? (
            assignment.submission.trang_thai === 'da_cham' ? (
              <span className={`${styles.statusBadge} ${styles.statusGraded}`}>
                Đã chấm: {assignment.submission.diem ?? 0}/{assignment.diem_toi_da} điểm
              </span>
            ) : assignment.submission.trang_thai === 'nop_muon' ? (
              <span className={`${styles.statusBadge} ${styles.statusLate}`}>Đã nộp muộn</span>
            ) : (
              <span className={`${styles.statusBadge} ${styles.statusSubmitted}`}>Đã nộp</span>
            )
          ) : (
            <span className={`${styles.statusBadge} ${styles.statusPending}`}>Chưa nộp</span>
          )}
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
                <a key={file.id} href={formatFileUrl(file.url)} 
                  onClick={(e) => {
                    e.preventDefault();
                    downloadFile(file.url, file.name);
                  }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.75rem', backgroundColor: '#f0f9ff', borderRadius: '0.375rem', border: '1px solid #bae6fd', textDecoration: 'none', color: '#0284c7', fontSize: '0.875rem', cursor: 'pointer' }}>
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

        {/* Bài làm đã nộp */}
        {assignment.submission && (
          <div className={styles.sectionBox} style={{ backgroundColor: '#f8fafc', padding: '1.25rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', marginTop: '1.5rem' }}>
            <h4 className={styles.sectionTitle} style={{ color: '#0f172a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#10b981" width="22" height="22">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Bài làm của bạn
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '0 0 0.25rem 0' }}>Trạng thái</p>
                <p style={{ fontWeight: 600, color: assignment.submission.trang_thai === 'da_cham' ? '#10b981' : assignment.submission.trang_thai === 'nop_muon' ? '#f59e0b' : '#3b82f6', margin: 0 }}>
                  {assignment.submission.trang_thai === 'da_cham' ? 'Đã chấm điểm' : assignment.submission.trang_thai === 'nop_muon' ? 'Đã nộp muộn' : 'Đã nộp bài'}
                </p>
              </div>
              <div>
                <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '0 0 0.25rem 0' }}>Thời gian nộp</p>
                <p style={{ fontWeight: 500, color: '#1e293b', margin: 0 }}>{assignment.submission.ngay_nop || 'N/A'}</p>
              </div>
              {assignment.submission.trang_thai === 'da_cham' && (
                <div>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '0 0 0.25rem 0' }}>Điểm số</p>
                  <p style={{ fontWeight: 700, color: '#10b981', fontSize: '1.1rem', margin: 0 }}>
                    {assignment.submission.diem ?? 0} / {assignment.diem_toi_da}
                  </p>
                </div>
              )}
            </div>
            
            {assignment.submission.duong_dan_file && (
              <div style={{ marginBottom: assignment.submission.nhan_xet ? '1rem' : 0 }}>
                <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '0 0 0.5rem 0' }}>File bài làm đã nộp:</p>
                <a href={formatFileUrl(assignment.submission.duong_dan_file)} target="_blank" rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    if (assignment.submission?.duong_dan_file) {
                      downloadFile(assignment.submission.duong_dan_file, assignment.submission.ten_file || 'bai_lam');
                    }
                  }}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid #cbd5e1', textDecoration: 'none', color: '#2563eb', fontSize: '0.875rem', fontWeight: 500 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" height="18">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {assignment.submission.ten_file || 'Xem / Tải về file bài làm'}
                </a>
              </div>
            )}

            {assignment.submission.nhan_xet && (
              <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', borderLeft: '4px solid #10b981' }}>
                <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '0 0 0.25rem 0', fontWeight: 600 }}>Nhận xét của giảng viên:</p>
                <p style={{ color: '#334155', margin: 0, whiteSpace: 'pre-wrap' }}>{assignment.submission.nhan_xet}</p>
              </div>
            )}
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

          {assignment.submission?.trang_thai === 'da_cham' ? (
            <button className={styles.btnSubmit} disabled style={{ backgroundColor: '#94a3b8', cursor: 'not-allowed', opacity: 0.8 }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Đã chấm điểm
            </button>
          ) : (
            <button className={styles.btnSubmit} onClick={() => setIsSubmitModalOpen(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              {assignment.submission ? 'Nộp lại bài tập' : 'Nộp bài tập'}
            </button>
          )}
        </div>
      </div>

      <SubmitModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        assignmentTitle={assignment.tieu_de}
        onSubmit={async (file, note) => {
          if (!file) {
            showToast('Vui lòng chọn file để nộp bài.', 'error');
            return;
          }
          try {
            const formData = new FormData();
            formData.append('file', file);
            if (note) formData.append('note', note);
            
            const res = await import('@/app/actions/student-assignment').then(m => m.submitStudentAssignment(id, formData));
            if (res.success) {
              showToast('Nộp bài thành công!', 'success');
              setIsSubmitModalOpen(false);
              loadData(); // Tải lại dữ liệu thay vì reload trang
            } else {
              showToast(res.message || 'Có lỗi xảy ra khi nộp bài.', 'error');
            }
          } catch (err) {
            console.error(err);
            showToast('Lỗi kết nối.', 'error');
          }
        }}
      />
    </div>
  );
}
