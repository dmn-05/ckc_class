'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from '@/components/admin/course-sections/AdminCourseSections.module.css';
import CourseSectionList from '@/components/admin/course-sections/CourseSectionList';
import CourseSectionDashboard from '@/components/admin/course-sections/CourseSectionDashboard';
import CourseSectionStatsModal from '@/components/admin/course-sections/CourseSectionStatsModal';
import { CourseSectionData, CourseSectionStatus } from '@/components/admin/course-sections/CourseSectionCard';
import { getCourseSections, deleteCourseSection, updateCourseSectionStatus } from '@/app/actions/course-section';
import ConfirmModal from '@/components/common/ConfirmModal';

export default function CourseSectionsPage() {
  const [sections, setSections] = useState<CourseSectionData[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [selectedSemester, setSelectedSemester] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [archiveTargetId, setArchiveTargetId] = useState<string | null>(null);
  const [archiveTargetStatus, setArchiveTargetStatus] = useState<CourseSectionStatus>('dang_mo');
  const [archiving, setArchiving] = useState(false);
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
          assignmentsCount: item.bai_taps_count ?? 0,
          quizzesCount: item.bai_kiem_tras_count ?? 0,
          pendingGradingCount: item.pending_grading_count ?? 0,
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

  const handleDeleteSection = (id: string) => {
    setDeleteTargetId(id);
  };

  const executeDelete = async () => {
    if (!deleteTargetId) return;
    setDeleting(true);
    try {
      await deleteCourseSection(deleteTargetId);
      setSections(prev => prev.filter(s => s.id !== deleteTargetId));
      setDeleteTargetId(null);
    } catch (error) {
      console.error(error);
    } finally {
      setDeleting(false);
    }
  };

  const handleArchiveSection = (id: string, currentStatus: CourseSectionStatus) => {
    setArchiveTargetId(id);
    setArchiveTargetStatus(currentStatus);
  };

  const executeArchive = async () => {
    if (!archiveTargetId) return;
    setArchiving(true);
    try {
      const newStatus = archiveTargetStatus === 'da_khoa' ? 'dang_mo' : 'da_khoa';
      await updateCourseSectionStatus(archiveTargetId, newStatus);
      setSections(prev => prev.map(s => s.id === archiveTargetId ? { ...s, status: newStatus } : s));
      setArchiveTargetId(null);
    } catch (error) {
      console.error(error);
    } finally {
      setArchiving(false);
    }
  };

  const handleOpenEdit = (section: CourseSectionData) => {
    router.push(`/admin/course-sections/${section.id}/edit`);
  };

  const handleManageStudents = (sectionId: string) => {
    router.push(`/admin/course-sections/${sectionId}/students`);
  };

  const filteredSections = sections.filter(s => {
    if (filter === 'all') return true;
    return s.status === filter;
  });

  // Real stats data
  const activeStatsSection = sections.find(s => s.id === statsSectionId);
  const mockStats = activeStatsSection ? {
    enrolled: activeStatsSection.enrolledStudents ?? 0,
    max: activeStatsSection.maxStudents || 40,
    assignments: activeStatsSection.assignmentsCount ?? 0,
    quizzes: activeStatsSection.quizzesCount ?? 0,
    pendingGrading: activeStatsSection.pendingGradingCount ?? 0
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
            onManageStudents={handleManageStudents}
            onDelete={handleDeleteSection}
            onArchive={handleArchiveSection}
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

      <ConfirmModal
        isOpen={!!deleteTargetId}
        title="Xác nhận xóa Lớp học phần"
        message="Bạn có chắc chắn muốn xóa Lớp học phần này khỏi hệ thống? Tất cả dữ liệu liên quan sẽ không thể khôi phục."
        confirmText="Xóa ngay"
        cancelText="Huỷ bỏ"
        onConfirm={executeDelete}
        onCancel={() => setDeleteTargetId(null)}
        isLoading={deleting}
      />

      <ConfirmModal
        isOpen={!!archiveTargetId}
        title={archiveTargetStatus === 'da_khoa' ? 'Khôi phục lớp học' : 'Lưu trữ lớp học'}
        message={
          archiveTargetStatus === 'da_khoa'
            ? 'Bạn có chắc chắn muốn khôi phục lớp học này về trạng thái đang mở?'
            : 'Các lớp học đã chọn sẽ được lưu trữ. Giáo viên hoặc học viên không thể chỉnh sửa các lớp học đã lưu trữ trừ phi các lớp học đó được khôi phục.'
        }
        confirmText={archiveTargetStatus === 'da_khoa' ? 'Khôi phục' : 'Lưu trữ'}
        cancelText="Hủy"
        onConfirm={executeArchive}
        onCancel={() => setArchiveTargetId(null)}
        isLoading={archiving}
      />
    </div>
  );
}

