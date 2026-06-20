'use client';

import React, { useState } from 'react';
import styles from '@/components/lecturer/enrollments/EnrollmentsManagement.module.css';
import EnrollmentDashboard from '@/components/lecturer/enrollments/EnrollmentDashboard';
import EnrollmentTable, { EnrollmentData } from '@/components/lecturer/enrollments/EnrollmentTable';
import ScoreInputModal from '@/components/lecturer/enrollments/ScoreInputModal';

const INITIAL_ENROLLMENTS: EnrollmentData[] = [
  {
    id: 'e1',
    studentId: 'SV001',
    studentName: 'Nguyễn Văn An',
    sectionCode: 'FLUTTER-K1',
    sectionName: 'Lập trình Flutter',
    enrollmentDate: '15/05/2026',
    status: 'enrolled',
    finalScore: null
  },
  {
    id: 'e2',
    studentId: 'SV042',
    studentName: 'Lê Minh',
    sectionCode: 'CSDL-K1',
    sectionName: 'Cơ sở dữ liệu',
    enrollmentDate: '16/05/2026',
    status: 'pending',
    finalScore: null
  },
  {
    id: 'e3',
    studentId: 'SV015',
    studentName: 'Trần Phương',
    sectionCode: 'UIUX-K2',
    sectionName: 'Thiết kế UI/UX',
    enrollmentDate: '14/05/2026',
    status: 'dropped',
    finalScore: null
  },
  {
    id: 'e4',
    studentId: 'SV089',
    studentName: 'Hoàng Huy',
    sectionCode: 'JAVA-K5',
    sectionName: 'Lập trình Java',
    enrollmentDate: '17/05/2026',
    status: 'completed',
    finalScore: 8.5
  },
  {
    id: 'e5',
    studentId: 'SV092',
    studentName: 'Phạm Thị Mai',
    sectionCode: 'FLUTTER-K1',
    sectionName: 'Lập trình Flutter',
    enrollmentDate: '18/05/2026',
    status: 'pending',
    finalScore: null
  }
];

export default function LecturerEnrollmentsPage() {
  const [enrollments, setEnrollments] = useState<EnrollmentData[]>(INITIAL_ENROLLMENTS);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeModalEnrollment, setActiveModalEnrollment] = useState<EnrollmentData | null>(null);

  // Derived Stats
  const totalCount = enrollments.length;
  const pendingCount = enrollments.filter(e => e.status === 'pending').length;
  
  // Progress calculations (students that are enrolled or completed AND have a score)
  const scorableStudents = enrollments.filter(e => e.status === 'enrolled' || e.status === 'completed');
  const gradedCount = scorableStudents.filter(e => e.finalScore !== null).length;
  const scorableTotal = scorableStudents.length;

  // Filter & Search logic
  const filteredEnrollments = enrollments.filter(e => {
    const matchesFilter = activeFilter === 'all' || e.status === activeFilter;
    const matchesSearch = 
      e.studentName.toLowerCase().includes(searchTerm.toLowerCase()) || 
      e.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.sectionCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.sectionName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleApprove = (id: string) => {
    setEnrollments(prev => prev.map(e => e.id === id ? { ...e, status: 'enrolled' } : e));
  };

  const handleReject = (id: string) => {
    if (window.confirm('Bạn có chắc chắn muốn hủy yêu cầu đăng ký này?')) {
      setEnrollments(prev => prev.map(e => e.id === id ? { ...e, status: 'dropped' } : e));
    }
  };

  const handleSaveScore = (id: string, score: number) => {
    setEnrollments(prev => prev.map(e => {
      if (e.id === id) {
        // Automatically mark as completed if a score is assigned? (Optional, maybe keep enrolled until explicit end of term)
        // Let's just update score. If user wants to mark completed, they could do it elsewhere.
        return { ...e, finalScore: score, status: 'completed' };
      }
      return e;
    }));
    setActiveModalEnrollment(null);
  };

  const handleExportScores = () => {
    window.alert('Đã tải xuống thành công: Danh_Sach_Diem_Tổng_Kết.csv');
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Quản Lý Đăng Ký Học Phần</h1>
          <p className={styles.pageSubtitle}>Duyệt yêu cầu đăng ký và quản lý điểm số của sinh viên.</p>
        </div>
        
        <button className={styles.btnPrimary} onClick={handleExportScores}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Xuất Danh Sách Điểm
        </button>
      </div>

      <EnrollmentDashboard 
        totalCount={totalCount}
        pendingCount={pendingCount}
        gradedCount={gradedCount}
      />

      <EnrollmentTable 
        enrollments={filteredEnrollments}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        onApprove={handleApprove}
        onReject={handleReject}
        onOpenScoreModal={setActiveModalEnrollment}
      />

      {activeModalEnrollment && (
        <ScoreInputModal 
          enrollment={activeModalEnrollment}
          onSave={handleSaveScore}
          onClose={() => setActiveModalEnrollment(null)}
        />
      )}
    </div>
  );
}
