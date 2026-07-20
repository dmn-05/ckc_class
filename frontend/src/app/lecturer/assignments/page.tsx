'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/components/lecturer/assignments/AssignmentsManagement.module.css';
import AssignmentDashboard from '@/components/lecturer/assignments/AssignmentDashboard';
import AssignmentGrid, { AssignmentData } from '@/components/lecturer/assignments/AssignmentGrid';
import ScoresReportModal from '@/components/lecturer/assignments/ScoresReportModal';
import {
  getLecturerAssignments,
  deleteLecturerAssignment,
} from '@/app/actions/lecturer-assignment';
import { getLecturerCourseSections } from '@/app/actions/lecturer-course-section';
import ConfirmModal from '@/components/common/ConfirmModal';

interface SectionOption {
  id: string;
  name: string;
  code: string;
}

export default function LecturerAssignmentsPage() {
  const router = useRouter();
  
  const [assignments, setAssignments] = useState<AssignmentData[]>([]);
  const [sections, setSections] = useState<SectionOption[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [sectionFilter, setSectionFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  // Modals (still used for scores)
  const [isScoresReportOpen, setIsScoresReportOpen] = useState(false);

  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
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
        const [assignmentsData, sectionsData] = await Promise.all([
          getLecturerAssignments(),
          getLecturerCourseSections(),
        ]);
        setAssignments(assignmentsData);
        setSections(
          (sectionsData || []).map((s: any) => ({
            id: s.id.toString(),
            name: s.ten_lop || s.mon_hoc?.ten_mon || '',
            code: s.ma_lop_hoc_phan || '',
          }))
        );
      } catch (error) {
        console.error('Failed to load assignments', error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Derived Stats
  const totalCount = assignments.length;
  const openCount = assignments.filter(a => a.status === 'open').length;
  const needsGradingCount = assignments.reduce((sum, a) => sum + a.stats.needsGrading, 0);

  const filteredAssignments = assignments.filter(a => {
    const matchSearch = a.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchSection = sectionFilter && sectionFilter !== 'all' ? a.sectionId === sectionFilter : true;
    const matchStatus = statusFilter && statusFilter !== 'all' ? a.status === statusFilter : true;
    return matchSearch && matchSection && matchStatus;
  });

  // Actions for Assignment
  const handleOpenAdd = () => {
    router.push('/lecturer/assignments/create');
  };

  const handleOpenEdit = (assignment: AssignmentData) => {
    router.push(`/lecturer/assignments/${assignment.id}/edit`);
  };

  const handleDelete = (id: string) => {
    setDeleteConfirmId(id);
  };

  const confirmDeleteAction = async () => {
    if (!deleteConfirmId) return;
    setDeleting(true);
    try {
      await deleteLecturerAssignment(deleteConfirmId);
      setAssignments(prev => prev.filter(a => a.id !== deleteConfirmId));
      setToast({ text: 'Đã xóa bài tập thành công!', type: 'success' });
    } catch (error) {
      setToast({ text: 'Có lỗi xảy ra khi xóa bài tập.', type: 'error' });
      console.error(error);
    } finally {
      setDeleting(false);
      setDeleteConfirmId(null);
    }
  };

  const handleViewSubmissions = (assignment: AssignmentData) => {
    router.push(`/lecturer/assignments/${assignment.id}/submissions`);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Quản lý Bài tập</h1>
          <p className={styles.pageSubtitle}>Quản lý, phân loại và theo dõi tình trạng bài tập của sinh viên.</p>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className={styles.btnSecondary} onClick={() => setIsScoresReportOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Báo cáo điểm
          </button>
          <button className={styles.btnPrimary} onClick={handleOpenAdd}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Tạo bài tập mới
          </button>
        </div>
      </div>

      <AssignmentDashboard 
        totalCount={totalCount}
        openCount={openCount}
        needsGradingCount={needsGradingCount}
      />

      <div className={styles.filterBar}>
        <div className={styles.searchBox}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={styles.searchIcon} width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            className={styles.searchInput}
            placeholder="Tìm kiếm theo tiêu đề bài tập..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className={styles.filters}>
          <div className={styles.filterSelectWrapper}>
            <select 
              className={styles.filterSelect}
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
            >
              <option value="all">Tất cả trạng thái</option>
              <option value="open">Đang mở</option>
              <option value="closed">Đã đóng</option>
              <option value="draft">Bản nháp</option>
            </select>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={styles.filterSelectIcon} width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <div className={styles.filterSelectWrapper}>
            <select 
              className={styles.filterSelect}
              value={sectionFilter}
              onChange={(e) => setSectionFilter(e.target.value)}
            >
              <option value="all">Tất cả lớp học phần</option>
              {sections.map((s, idx) => (
                <option key={idx} value={s.id}>{s.name} ({s.code})</option>
              ))}
            </select>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={styles.filterSelectIcon} width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '4rem 1rem', color: '#777587' }}>
          <p>Đang tải bài tập...</p>
        </div>
      ) : (
        <AssignmentGrid 
          assignments={filteredAssignments}
          onEdit={handleOpenEdit}
          onDelete={handleDelete}
          onViewSubmissions={handleViewSubmissions}
        />
      )}

      {isScoresReportOpen && (
        <ScoresReportModal 
          onClose={() => setIsScoresReportOpen(false)}
        />
      )}

      <ConfirmModal
        isOpen={!!deleteConfirmId}
        title="Xác nhận xóa bài tập"
        message={
          <div>
            Bạn có chắc chắn muốn xóa bài tập{' '}
            <strong style={{ color: '#1e293b' }}>
              {assignments.find(a => a.id === deleteConfirmId)?.title || ''}
            </strong>{' '}
            không? Toàn bộ bài nộp và điểm số của sinh viên cho bài tập này sẽ bị xóa vĩnh viễn.
          </div>
        }
        confirmText="Xóa ngay"
        cancelText="Hủy bỏ"
        variant="danger"
        isLoading={deleting}
        onConfirm={confirmDeleteAction}
        onCancel={() => !deleting && setDeleteConfirmId(null)}
      />

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
