'use client';

import React, { useState, useEffect, useCallback } from 'react';
import styles from '@/components/admin/classes/AdminClasses.module.css';
import ClassDashboard from '@/components/admin/classes/ClassDashboard';
import ClassList from '@/components/admin/classes/ClassList';
import ClassFormModal from '@/components/admin/classes/ClassFormModal';
import ClassStatsModal from '@/components/admin/classes/ClassStatsModal';
import { ClassData } from '@/components/admin/classes/ClassCard';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getClasses } from '@/app/actions/student';

export default function LecturerClassesPage() {
  const [classes, setClasses] = useState<ClassData[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Modals state
  const [statsClassId, setStatsClassId] = useState<string | null>(null);

  const activeCount = classes.filter(s => s.status === 'dang_hoc').length;
  // Mock logic for pending assignments/quizzes just for visual
  const pendingAssignments = classes.filter(s => s.status === 'da_tot_nghiep').length;

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getClasses();
      const formattedClasses: ClassData[] = data.map((item: any) => ({
        id: item.id.toString(),
        code: item.ma_lop,
        name: item.ten_lop,
        faculty: item.khoa?.ten_khoa || 'Không rõ',
        enrollmentYear: item.nam_nhap_hoc || 2024,
        studentCount: item.sinh_viens_count || 0,
        status: item.trang_thai || 'dang_hoc'
      }));
      setClasses(formattedClasses);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleOpenEdit = (classItem: ClassData) => {
    router.push(`/admin/classes/${classItem.id}/edit`);
  };

  const handleManageStudents = (classId: string) => {
    router.push(`/admin/classes/${classId}/students`);
  };

  const handleDeleteClass = (id: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa lớp này?')) {
      setClasses(prev => prev.filter(s => s.id !== id));
    }
  };

  // Stats mock data generator
  const activeStatsClass = classes.find(s => s.id === statsClassId);
  const mockStats = activeStatsClass ? {
    enrolled: activeStatsClass.studentCount,
    max: 100,
    assignments: 0,
    quizzes: 0,
    pendingGrading: 0
  } : null;

  const filteredClasses = filter === 'all' ? classes : classes.filter(s => s.status === filter);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Quản lý các lớp học</h1>
          <p className={styles.pageSubtitle}>Quản lý danh sách các lớp học.</p>
        </div>

        <Link href="/admin/classes/create" className={styles.btnAddClass}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Thêm lớp học
        </Link>
      </div>

      <div className={styles.layoutGrid}>
        <ClassDashboard
          activeCount={activeCount}
          pendingAssignments={pendingAssignments}
          currentFilter={filter}
          onFilterChange={setFilter}
        />

        {loading ? (
          <div style={{ padding: '2rem', textAlign: 'center' }}>Đang tải dữ liệu...</div>
        ) : (
          <ClassList
            classes={filteredClasses}
            onEdit={handleOpenEdit}
            onViewStats={setStatsClassId}
            onManageStudents={handleManageStudents}
            onDelete={handleDeleteClass}
          />
        )}
      </div>

      {statsClassId && activeStatsClass && (
        <ClassStatsModal
          classTitle={activeStatsClass.name}
          stats={mockStats}
          onClose={() => setStatsClassId(null)}
        />
      )}
    </div>
  );
}
