'use client';

import React, { useState } from 'react';
import styles from '@/components/lecturer/sections/SectionsManagement.module.css';
import SectionDashboard from '@/components/lecturer/sections/SectionDashboard';
import SectionList from '@/components/lecturer/sections/SectionList';
import SectionFormModal from '@/components/lecturer/sections/SectionFormModal';
import SectionStatsModal from '@/components/lecturer/sections/SectionStatsModal';
import { SectionData } from '@/components/lecturer/sections/SectionCard';

const INITIAL_SECTIONS: SectionData[] = [
  {
    id: 's1',
    code: 'FLUTTER-K1',
    subjectName: 'Lập trình Flutter',
    semester: 'HK1',
    academicYear: '2023-2024',
    room: 'Lab 1, Cơ sở A',
    schedule: 'Thứ 3, Ca 1-3',
    maxStudents: 40,
    enrolledStudents: 38,
    status: 'active'
  },
  {
    id: 's2',
    code: 'CSDL-K1',
    subjectName: 'Cơ sở dữ liệu',
    semester: 'HK1',
    academicYear: '2023-2024',
    room: 'Phòng 204, Cơ sở B',
    schedule: 'Thứ 5, Ca 4-6',
    maxStudents: 50,
    enrolledStudents: 50,
    status: 'upcoming'
  },
  {
    id: 's3',
    code: 'MKT-K2',
    subjectName: 'Marketing căn bản',
    semester: 'HK2',
    academicYear: '2022-2023',
    room: 'Phòng 101, Cơ sở A',
    schedule: 'Thứ 2, Ca 1-3',
    maxStudents: 60,
    enrolledStudents: 55,
    status: 'completed'
  }
];

export default function LecturerSectionsPage() {
  const [sections, setSections] = useState<SectionData[]>(INITIAL_SECTIONS);
  const [filter, setFilter] = useState<string>('all');
  
  // Modals state
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingSection, setEditingSection] = useState<SectionData | null>(null);
  const [statsSectionId, setStatsSectionId] = useState<string | null>(null);

  // Derived dashboard stats
  const activeCount = sections.filter(s => s.status === 'active').length;
  // Mock logic for pending assignments/quizzes just for visual
  const pendingAssignments = sections.length > 0 ? 12 : 0;
  const upcomingQuizzes = sections.length > 0 ? 2 : 0;

  const handleOpenCreate = () => {
    setEditingSection(null);
    setIsFormOpen(true);
  };

  const handleOpenEdit = (section: SectionData) => {
    setEditingSection(section);
    setIsFormOpen(true);
  };

  const handleSaveSection = (data: any) => {
    if (editingSection) {
      setSections(prev => prev.map(s => s.id === data.id ? { ...s, ...data } : s));
    } else {
      const newSection: SectionData = {
        ...data,
        id: `s_${Date.now()}`
      };
      setSections(prev => [newSection, ...prev]);
    }
    setIsFormOpen(false);
  };

  const handleDeleteSection = (id: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa lớp học phần này?')) {
      setSections(prev => prev.filter(s => s.id !== id));
    }
  };

  // Stats mock data generator
  const activeStatsSection = sections.find(s => s.id === statsSectionId);
  const mockStats = activeStatsSection ? {
    enrolled: activeStatsSection.enrolledStudents,
    max: activeStatsSection.maxStudents,
    assignments: 5,
    quizzes: 2,
    pendingGrading: activeStatsSection.status === 'active' ? 12 : 0
  } : null;

  const filteredSections = filter === 'all' ? sections : sections.filter(s => s.status === filter);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Quản lý Học Phần</h1>
          <p className={styles.pageSubtitle}>Quản lý danh sách các lớp học phần trong học kỳ hiện tại.</p>
        </div>
        
        <button className={styles.btnAddSection} onClick={handleOpenCreate}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Thêm Học Phần
        </button>
      </div>

      <div className={styles.layoutGrid}>
        <SectionDashboard 
          activeCount={activeCount}
          pendingAssignments={pendingAssignments}
          upcomingQuizzes={upcomingQuizzes}
          currentFilter={filter}
          onFilterChange={setFilter}
        />
        
        <SectionList 
          sections={filteredSections}
          onEdit={handleOpenEdit}
          onViewStats={setStatsSectionId}
          onDelete={handleDeleteSection}
        />
      </div>

      {isFormOpen && (
        <SectionFormModal 
          initialData={editingSection}
          onSave={handleSaveSection}
          onClose={() => setIsFormOpen(false)}
        />
      )}

      {statsSectionId && activeStatsSection && (
        <SectionStatsModal 
          sectionTitle={activeStatsSection.subjectName}
          stats={mockStats}
          onClose={() => setStatsSectionId(null)}
        />
      )}
    </div>
  );
}
