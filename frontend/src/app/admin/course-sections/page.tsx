'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from '@/components/admin/course-sections/AdminCourseSections.module.css';
import CourseSectionList from '@/components/admin/course-sections/CourseSectionList';
import CourseSectionDashboard from '@/components/admin/course-sections/CourseSectionDashboard';
import CourseSectionStatsModal from '@/components/admin/course-sections/CourseSectionStatsModal';
import { CourseSectionData } from '@/components/admin/course-sections/CourseSectionCard';
import { getCourseSections, deleteCourseSection } from '@/app/actions/course-section';

export default function CourseSectionsPage() {
  const [sections, setSections] = useState<CourseSectionData[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Modals state
  const [statsSectionId, setStatsSectionId] = useState<string | null>(null);

  const activeCount = sections.filter(s => s.status === 'dang_mo').length;
  const lockedCount = sections.filter(s => s.status === 'da_khoa').length;
  const completedCount = sections.filter(s => s.status === 'da_ket_thuc').length;

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getCourseSections();
      const formattedSections: CourseSectionData[] = data.map((item: any) => ({
        id: item.id.toString(),
        code: item.ma_lop_hoc_phan,
        name: item.ten_lop || '',
        subjectName: item.mon_hoc?.ten_mon || 'Không rõ',
        lecturerName: item.giang_vien?.nguoi_dung?.ho_ten || 'Chưa phân công',
        semester: item.hoc_ky || 'HK1',
        academicYear: item.nam_hoc || '',
        faculty: item.mon_hoc?.khoa?.ten_khoa || 'Chưa phân khoa',
        maxStudents: item.si_so_toi_da || 0,
        status: item.trang_thai || 'dang_mo'
      }));
      setSections(formattedSections);
    } catch (error) {
      console.error('Failed to load course sections', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleDeleteSection = async (id: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa lớp học phần này?')) {
      try {
        await deleteCourseSection(id);
        setSections(prev => prev.filter(s => s.id !== id));
      } catch (error) {
        alert('Xóa thất bại');
      }
    }
  };

  const handleOpenEdit = (section: CourseSectionData) => {
    router.push(`/admin/course-sections/${section.id}/edit`);
  };

  const filteredSections = sections.filter(s => {
    if (filter === 'all') return true;
    return s.status === filter;
  });

  // Stats mock data generator
  const activeStatsSection = sections.find(s => s.id === statsSectionId);
  const mockStats = activeStatsSection ? {
    enrolled: Math.floor(Math.random() * activeStatsSection.maxStudents),
    max: activeStatsSection.maxStudents || 40,
    assignments: Math.floor(Math.random() * 5),
    quizzes: Math.floor(Math.random() * 3),
    pendingGrading: Math.floor(Math.random() * 10)
  } : null;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Quản Lý Lớp Học Phần</h1>
          <p className={styles.pageSubtitle}>Quản lý danh sách các lớp học phần trong hệ thống.</p>
        </div>

        <Link href="/admin/course-sections/create" className={styles.btnAddClass}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Thêm lớp học phần
        </Link>
      </div>

      <div className={styles.layoutGrid}>
        <CourseSectionDashboard
          activeCount={activeCount}
          lockedCount={lockedCount}
          completedCount={completedCount}
          currentFilter={filter}
          onFilterChange={setFilter}
        />

        {loading ? (
          <div style={{ padding: '2rem', textAlign: 'center' }}>Đang tải dữ liệu...</div>
        ) : (
          <CourseSectionList
            sections={filteredSections}
            onEdit={handleOpenEdit}
            onViewStats={setStatsSectionId}
            onDelete={handleDeleteSection}
          />
        )}
      </div>

      {statsSectionId && activeStatsSection && (
        <CourseSectionStatsModal
          sectionTitle={activeStatsSection.name || activeStatsSection.code}
          stats={mockStats}
          onClose={() => setStatsSectionId(null)}
        />
      )}
    </div>
  );
}

