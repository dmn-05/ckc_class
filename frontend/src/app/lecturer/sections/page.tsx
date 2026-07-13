'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/components/admin/course-sections/AdminCourseSections.module.css';
import CourseSectionList from '@/components/admin/course-sections/CourseSectionList';
import CourseSectionDashboard from '@/components/admin/course-sections/CourseSectionDashboard';
import CourseSectionStatsModal from '@/components/admin/course-sections/CourseSectionStatsModal';
import { CourseSectionData } from '@/components/admin/course-sections/CourseSectionCard';
import { getLecturerCourseSections } from '@/app/actions/lecturer-course-section';

export default function LecturerSectionsPage() {
  const [sections, setSections] = useState<CourseSectionData[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [selectedSemester, setSelectedSemester] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
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
      const data = await getLecturerCourseSections();
      const formattedSections: CourseSectionData[] = data.map((item: any) => {
        const lecturerNames = Array.isArray(item.giang_viens) && item.giang_viens.length > 0
          ? item.giang_viens.map((gv: any) => gv.nguoi_dung?.ho_ten).filter(Boolean)
          : (item.giang_vien?.nguoi_dung?.ho_ten ? [item.giang_vien.nguoi_dung.ho_ten] : []);

        return {
          id: item.id.toString(),
          code: item.ma_lop_hoc_phan,
          name: item.ten_lop || '',
          subjectName: item.mon_hoc?.ten_mon || 'Không rõ',
          lecturerName: lecturerNames.length > 0 ? lecturerNames.join(', ') : 'Chưa phân công',
          lecturerNames: lecturerNames,
          giang_vien_ids: Array.isArray(item.giang_viens) && item.giang_viens.length > 0
            ? item.giang_viens.map((gv: any) => gv.id.toString())
            : (item.giang_vien_id ? [item.giang_vien_id.toString()] : []),
          semester: item.hoc_ky || 'HK1',
          academicYear: item.nam_hoc || '',
          faculty: item.mon_hoc?.khoa?.ten_khoa || 'Chưa phân khoa',
          maxStudents: item.si_so_toi_da || 0,
          enrolledStudents: item.sinh_viens_count ?? 0,
          status: item.trang_thai || 'dang_mo'
        };
      });
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

  const handleOpenEdit = (section: CourseSectionData) => {
    router.push(`/lecturer/sections/${section.id}/edit`);
  };

  const filteredSections = sections.filter(s => {
    if (filter === 'all') return true;
    return s.status === filter;
  });

  // Stats mock data generator
  const activeStatsSection = sections.find(s => s.id === statsSectionId);
  const mockStats = activeStatsSection ? {
    enrolled: activeStatsSection.enrolledStudents ?? 0,
    max: activeStatsSection.maxStudents || 40,
    assignments: Math.floor(Math.random() * 5),
    quizzes: Math.floor(Math.random() * 3),
    pendingGrading: Math.floor(Math.random() * 10)
  } : null;

  const handleOpenManageStudents = (sectionId: string) => {
    router.push(`/lecturer/sections/${sectionId}/students`);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Quản Lý Lớp Học Phần</h1>
          <p className={styles.pageSubtitle}>Quản lý danh sách các lớp học phần được phân công cho bạn.</p>
        </div>
      </div>

      <div className={styles.layoutGrid}>
        <CourseSectionDashboard
          sections={sections}
          activeCount={activeCount}
          lockedCount={lockedCount}
          completedCount={completedCount}
          currentFilter={filter}
          onFilterChange={setFilter}
          selectedSemester={selectedSemester}
          onSemesterChange={setSelectedSemester}
          selectedYear={selectedYear}
          onYearChange={setSelectedYear}
        />

        {loading ? (
          <div style={{ padding: '2rem', textAlign: 'center' }}>Đang tải dữ liệu...</div>
        ) : (
          <CourseSectionList
            sections={filteredSections}
            onEdit={handleOpenEdit}
            onViewStats={setStatsSectionId}
            onManageStudents={handleOpenManageStudents}
            onDelete={() => {}} // Disabled for lecturer, but passed to prevent error
            hideDelete={true}
            hideEdit={true}
            hideManageStudents={true}
            onViewDetail={(sectionId) => router.push(`/lecturer/sections/${sectionId}`)}
            selectedSemester={selectedSemester}
            selectedYear={selectedYear}
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
