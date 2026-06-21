'use client';

import React, { useState } from 'react';
import styles from '@/components/admin/classes/ClassesManagement.module.css';
import ClassDashboard from '@/components/admin/classes/ClassDashboard';
import ClassList from '@/components/admin/classes/ClassList';
import ClassFormModal from '@/components/admin/classes/ClassFormModal';
import ClassStatsModal from '@/components/admin/classes/ClassStatsModal';
import { ClassData } from '@/components/admin/classes/ClassCard';

const INITIAL_CLASSES: ClassData[] = [
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

export default function LecturerClassesPage() {
  const [classes, setClasses] = useState<ClassData[]>(INITIAL_CLASSES);
  const [filter, setFilter] = useState<string>('all');

  // Modals state
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingClass, setEditingClass] = useState<ClassData | null>(null);
  const [statsClassId, setStatsClassId] = useState<string | null>(null);

  // Derived dashboard stats
  const activeCount = classes.filter(s => s.status === 'active').length;
  // Mock logic for pending assignments/quizzes just for visual
  const pendingAssignments = classes.length > 0 ? 12 : 0;
  const upcomingQuizzes = classes.length > 0 ? 2 : 0;

  const handleOpenCreate = () => {
    setEditingClass(null);
    setIsFormOpen(true);
  };

  const handleOpenEdit = (classItem: ClassData) => {
    setEditingClass(classItem);
    setIsFormOpen(true);
  };

  const handleSaveClass = (data: any) => {
    if (editingClass) {
      setClasses(prev => prev.map(s => s.id === data.id ? { ...s, ...data } : s));
    } else {
      const newClass: ClassData = {
        ...data,
        id: `s_${Date.now()}`
      };
      setClasses(prev => [newClass, ...prev]);
    }
    setIsFormOpen(false);
  };

  const handleDeleteClass = (id: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa lớp học phần này?')) {
      setClasses(prev => prev.filter(s => s.id !== id));
    }
  };

  // Stats mock data generator
  const activeStatsClass = classes.find(s => s.id === statsClassId);
  const mockStats = activeStatsClass ? {
    enrolled: activeStatsClass.enrolledStudents,
    max: activeStatsClass.maxStudents,
    assignments: 5,
    quizzes: 2,
    pendingGrading: activeStatsClass.status === 'active' ? 12 : 0
  } : null;

  const filteredClasses = filter === 'all' ? classes : classes.filter(s => s.status === filter);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Quản lý các lớp học</h1>
          <p className={styles.pageSubtitle}>Quản lý danh sách các lớp học.</p>
        </div>

        <button className={styles.btnAddClass} onClick={handleOpenCreate}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Thêm lớp học
        </button>
      </div>

      <div className={styles.layoutGrid}>
        <ClassDashboard
          activeCount={activeCount}
          pendingAssignments={pendingAssignments}
          upcomingQuizzes={upcomingQuizzes}
          currentFilter={filter}
          onFilterChange={setFilter}
        />

        <ClassList
          classes={filteredClasses}
          onEdit={handleOpenEdit}
          onViewStats={setStatsClassId}
          onDelete={handleDeleteClass}
        />
      </div>

      {isFormOpen && (
        <ClassFormModal
          initialData={editingClass}
          onSave={handleSaveClass}
          onClose={() => setIsFormOpen(false)}
        />
      )}

      {statsClassId && activeStatsClass && (
        <ClassStatsModal
          classTitle={activeStatsClass.subjectName}
          stats={mockStats}
          onClose={() => setStatsClassId(null)}
        />
      )}
    </div>
  );
}
