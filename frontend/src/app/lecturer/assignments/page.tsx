'use client';

import React, { useState } from 'react';
import styles from '@/components/lecturer/assignments/AssignmentsManagement.module.css';
import AssignmentDashboard from '@/components/lecturer/assignments/AssignmentDashboard';
import AssignmentGrid, { AssignmentData } from '@/components/lecturer/assignments/AssignmentGrid';
import AssignmentFormModal from '@/components/lecturer/assignments/AssignmentFormModal';
import SubmissionsView, { SubmissionData } from '@/components/lecturer/assignments/SubmissionsView';
import GradingModal from '@/components/lecturer/assignments/GradingModal';
import ScoresReportModal from '@/components/lecturer/assignments/ScoresReportModal';

// Mock Initial Data
const INITIAL_ASSIGNMENTS: AssignmentData[] = [
  {
    id: 'asg1',
    title: 'Bài tập thực hành 1: Cấu trúc điều khiển',
    description: 'Thực hành vòng lặp và câu lệnh rẽ nhánh',
    instructions: 'Viết chương trình C++ giải quyết 5 bài tập trong file đính kèm.',
    maxScore: 10,
    dueDate: '25/10/2023 23:59',
    allowLate: true,
    latePenaltyPct: 10,
    isPublished: true,
    sectionId: 'sec1',
    sectionName: 'Lập trình hướng đối tượng',
    status: 'open',
    stats: { submitted: 32, total: 40, needsGrading: 32 }
  },
  {
    id: 'asg2',
    title: 'Đồ án cuối kỳ: Thiết kế Mobile App',
    description: 'Thiết kế UI/UX cho ứng dụng bán hàng',
    instructions: 'Sử dụng Figma để tạo prototype có tính tương tác.',
    maxScore: 10,
    dueDate: '20/10/2023 23:59',
    allowLate: false,
    latePenaltyPct: 10,
    isPublished: true,
    sectionId: 'sec2',
    sectionName: 'Thiết kế Giao diện',
    status: 'grading',
    stats: { submitted: 38, total: 40, needsGrading: 38 }
  },
  {
    id: 'asg3',
    title: 'Lab 2: Truy vấn SQL nâng cao',
    description: 'Thực hành lệnh JOIN và Subquery',
    instructions: 'Viết câu lệnh SQL cho 10 yêu cầu trong file doc.',
    maxScore: 10,
    dueDate: '30/10/2023 23:59',
    allowLate: true,
    latePenaltyPct: 10,
    isPublished: false,
    sectionId: 'sec3',
    sectionName: 'Cơ sở dữ liệu',
    status: 'draft',
    stats: { submitted: 0, total: 42, needsGrading: 0 }
  }
];

const MOCK_SUBMISSIONS: Record<string, SubmissionData[]> = {
  'asg1': [
    { id: 'sub1', studentId: 'sv1', studentName: 'Nguyễn Văn An', studentCode: 'SV001', submittedAt: '24/10/2023 10:20', fileUrl: '#', status: 'submitted' },
    { id: 'sub2', studentId: 'sv2', studentName: 'Trần Thị Bình', studentCode: 'SV002', submittedAt: '26/10/2023 08:15', fileUrl: '#', status: 'late' },
    { id: 'sub3', studentId: 'sv3', studentName: 'Lê Hoàng Cường', studentCode: 'SV003', submittedAt: '', fileUrl: '', status: 'missing' },
    { id: 'sub4', studentId: 'sv4', studentName: 'Phạm Văn Dũng', studentCode: 'SV004', submittedAt: '20/10/2023 15:30', fileUrl: '#', status: 'returned', score: 8.5, feedback: 'Làm bài tốt.' },
  ],
  'asg2': [
    { id: 'sub5', studentId: 'sv1', studentName: 'Nguyễn Văn An', studentCode: 'SV001', submittedAt: '19/10/2023 11:20', fileUrl: '#', status: 'submitted' },
  ]
};

export default function LecturerAssignmentsPage() {
  const [viewState, setViewState] = useState<'list' | 'submissions'>('list');
  const [activeAssignment, setActiveAssignment] = useState<AssignmentData | null>(null);
  
  const [assignments, setAssignments] = useState<AssignmentData[]>(INITIAL_ASSIGNMENTS);
  const [allSubmissions, setAllSubmissions] = useState<Record<string, SubmissionData[]>>(MOCK_SUBMISSIONS);

  // Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [sectionFilter, setSectionFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  // Modals
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingAssignment, setEditingAssignment] = useState<AssignmentData | undefined>(undefined);
  const [isScoresReportOpen, setIsScoresReportOpen] = useState(false);
  const [gradingSubmission, setGradingSubmission] = useState<SubmissionData | null>(null);

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

  const handleDelete = (id: string) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa bài tập này?")) {
      setAssignments(prev => prev.filter(a => a.id !== id));
      setAllSubmissions(prev => {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      });
    }
  };

  const handleSaveAssignment = (data: Partial<AssignmentData>) => {
    if (editingAssignment) {
      setAssignments(prev => prev.map(a => a.id === editingAssignment.id ? { ...a, ...data } as AssignmentData : a));
    } else {
      const newAssignment: AssignmentData = {
        id: `asg_${Date.now()}`,
        title: data.title || '',
        description: data.description || '',
        instructions: data.instructions || '',
        maxScore: data.maxScore || 10,
        dueDate: data.dueDate || '',
        allowLate: data.allowLate || false,
        latePenaltyPct: data.latePenaltyPct || 10,
        isPublished: data.isPublished ?? true,
        sectionId: data.sectionId || '',
        sectionName: data.sectionName || '',
        status: data.isPublished ? 'open' : 'draft',
        stats: { submitted: 0, total: 40, needsGrading: 0 }
      };
      setAssignments(prev => [...prev, newAssignment]);
      // Initialize empty submissions
      setAllSubmissions(prev => ({ ...prev, [newAssignment.id]: [] }));
    }
    setIsFormModalOpen(false);
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
      
      // Update assignment stats (needsGrading count decreases)
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
                  <option value="sec1">Lập trình hướng đối tượng</option>
                  <option value="sec2">Thiết kế Giao diện</option>
                  <option value="sec3">Cơ sở dữ liệu</option>
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

          <AssignmentGrid 
            assignments={filteredAssignments}
            onEdit={handleOpenEdit}
            onDelete={handleDelete}
            onViewSubmissions={handleViewSubmissions}
          />
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
