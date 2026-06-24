'use client';

import React, { useState, useEffect } from 'react';
import styles from '@/components/lecturer/assignments/AssignmentsManagement.module.css';
import AssignmentDashboard from '@/components/lecturer/assignments/AssignmentDashboard';
import AssignmentGrid, { AssignmentData } from '@/components/lecturer/assignments/AssignmentGrid';
import AssignmentFormModal from '@/components/lecturer/assignments/AssignmentFormModal';
import SubmissionsView, { SubmissionData } from '@/components/lecturer/assignments/SubmissionsView';
import GradingModal from '@/components/lecturer/assignments/GradingModal';
import ScoresReportModal from '@/components/lecturer/assignments/ScoresReportModal';
import {
  getLecturerAssignments,
  createLecturerAssignment,
  updateLecturerAssignment,
  deleteLecturerAssignment,
} from '@/app/actions/lecturer-assignment';
import { getLecturerCourseSections } from '@/app/actions/lecturer-course-section';

interface SectionOption {
  id: string;
  name: string;
  code: string;
}

export default function LecturerAssignmentsPage() {
  const [viewState, setViewState] = useState<'list' | 'submissions'>('list');
  const [activeAssignment, setActiveAssignment] = useState<AssignmentData | null>(null);
  
  const [assignments, setAssignments] = useState<AssignmentData[]>([]);
  const [sections, setSections] = useState<SectionOption[]>([]);
  const [allSubmissions, setAllSubmissions] = useState<Record<string, SubmissionData[]>>({});
  const [loading, setLoading] = useState(true);

  // Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [sectionFilter, setSectionFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  // Modals
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingAssignment, setEditingAssignment] = useState<AssignmentData | undefined>(undefined);
  const [isScoresReportOpen, setIsScoresReportOpen] = useState(false);
  const [gradingSubmission, setGradingSubmission] = useState<SubmissionData | null>(null);

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
    const matchSection = sectionFilter ? a.sectionId === sectionFilter : true;
    const matchStatus = statusFilter ? a.status === statusFilter : true;
    return matchSearch && matchSection && matchStatus;
  });

  // Actions for Assignment
  const handleOpenAdd = () => {
    setEditingAssignment(undefined);
    setIsFormModalOpen(true);
  };

  const handleOpenEdit = (assignment: AssignmentData) => {
    setEditingAssignment(assignment);
    setIsFormModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa bài tập này?")) {
      try {
        await deleteLecturerAssignment(id);
        setAssignments(prev => prev.filter(a => a.id !== id));
      } catch (error) {
        alert('Có lỗi xảy ra khi xóa bài tập.');
        console.error(error);
      }
    }
  };

  const handleSaveAssignment = async (data: Partial<AssignmentData>) => {
    try {
      if (editingAssignment) {
        const updated = await updateLecturerAssignment(editingAssignment.id, {
          tieu_de: data.title,
          noi_dung: data.description || data.instructions,
          diem_toi_da: data.maxScore,
          han_nop: data.dueDate || null,
          cho_phep_nop_tre: data.allowLate,
          tyle_phat_tre: data.latePenaltyPct,
          trang_thai: data.isPublished ? 'hien_thi' : 'an',
        });
        setAssignments(prev => prev.map(a => a.id === editingAssignment.id ? updated : a));
      } else {
        const created = await createLecturerAssignment({
          tieu_de: data.title,
          noi_dung: data.description || data.instructions || '',
          lop_hoc_phan_id: parseInt(data.sectionId || '0'),
          diem_toi_da: data.maxScore || 10,
          han_nop: data.dueDate || null,
          cho_phep_nop_tre: data.allowLate || false,
          tyle_phat_tre: data.latePenaltyPct || 10,
          trang_thai: data.isPublished ? 'hien_thi' : 'an',
        });
        setAssignments(prev => [...prev, created]);
      }
      setIsFormModalOpen(false);
    } catch (error) {
      alert('Có lỗi xảy ra khi lưu bài tập.');
      console.error(error);
    }
  };

  // Actions for Submissions View
  const handleViewSubmissions = (assignment: AssignmentData) => {
    setActiveAssignment(assignment);
    setViewState('submissions');
  };

  const handleBackToList = () => {
    setViewState('list');
    setActiveAssignment(null);
  };

  // Actions for Grading
  const handleGrade = (submission: SubmissionData) => {
    setGradingSubmission(submission);
  };

  const handleSaveGrade = (submissionId: string, score: number, feedback: string) => {
    if (!activeAssignment) return;
    
    setAllSubmissions(prev => {
      const subs = prev[activeAssignment.id] || [];
      const newSubs = subs.map(s => s.id === submissionId ? { ...s, score, feedback, status: 'graded' as const } : s);
      return { ...prev, [activeAssignment.id]: newSubs };
    });
    
    setGradingSubmission(null);
  };

  const handleReturnBulk = (submissionIds: string[]) => {
    if (!activeAssignment) return;
    
    if (window.confirm(`Bạn có chắc chắn muốn trả ${submissionIds.length} bài đã chọn? Sinh viên sẽ nhận được thông báo điểm.`)) {
      setAllSubmissions(prev => {
        const subs = prev[activeAssignment.id] || [];
        const newSubs = subs.map(s => submissionIds.includes(s.id) ? { ...s, status: 'returned' as const } : s);
        return { ...prev, [activeAssignment.id]: newSubs };
      });
      
      setAssignments(prev => prev.map(a => {
        if (a.id === activeAssignment.id) {
          return { ...a, stats: { ...a.stats, needsGrading: Math.max(0, a.stats.needsGrading - submissionIds.length) } };
        }
        return a;
      }));
    }
  };

  return (
    <div className={styles.pageContainer}>
      {viewState === 'list' && (
        <>
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
                Thêm bài tập mới
              </button>
            </div>
          </div>

          <AssignmentDashboard 
            totalCount={totalCount}
            openCount={openCount}
            needsGradingCount={needsGradingCount}
          />

          <div className={styles.filterContainer}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#464555', textTransform: 'uppercase', marginRight: '0.5rem' }}>
                Bộ lọc:
              </span>
              
              <div className={styles.filterSelectWrapper}>
                <select 
                  className={styles.filterSelect}
                  value={sectionFilter}
                  onChange={(e) => setSectionFilter(e.target.value)}
                >
                  <option value="">Tất cả Lớp học phần</option>
                  {sections.map(sec => (
                    <option key={sec.id} value={sec.id}>{sec.name} ({sec.code})</option>
                  ))}
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={styles.filterSelectIcon} width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <div className={styles.filterSelectWrapper}>
                <select 
                  className={styles.filterSelect}
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="">Tất cả trạng thái</option>
                  <option value="open">Đang mở</option>
                  <option value="grading">Chờ chấm điểm</option>
                  <option value="closed">Đã kết thúc</option>
                  <option value="draft">Bản nháp</option>
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
        </>
      )}

      {viewState === 'submissions' && activeAssignment && (
        <SubmissionsView 
          assignment={activeAssignment}
          submissions={allSubmissions[activeAssignment.id] || []}
          onBack={handleBackToList}
          onGrade={handleGrade}
          onReturnBulk={handleReturnBulk}
        />
      )}

      {/* Modals */}
      {isFormModalOpen && (
        <AssignmentFormModal 
          initialData={editingAssignment}
          sections={sections}
          onSave={handleSaveAssignment}
          onClose={() => setIsFormModalOpen(false)}
        />
      )}

      {gradingSubmission && activeAssignment && (
        <GradingModal 
          submission={gradingSubmission}
          maxScore={activeAssignment.maxScore}
          onSave={handleSaveGrade}
          onClose={() => setGradingSubmission(null)}
        />
      )}

      {isScoresReportOpen && (
        <ScoresReportModal 
          onClose={() => setIsScoresReportOpen(false)}
        />
      )}
    </div>
  );
}
