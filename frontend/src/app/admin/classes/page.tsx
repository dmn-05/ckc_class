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
import { getClasses, deleteClass } from '@/app/actions/class';
import ConfirmModal from '@/components/common/ConfirmModal';
import AlertModal from '@/components/common/AlertModal';

export default function LecturerClassesPage() {
  const [classes, setClasses] = useState<ClassData[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Modals state
  const [statsClassId, setStatsClassId] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  // Alert modal state
  const [alertConfig, setAlertConfig] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    variant: 'success' | 'error' | 'warning';
  }>({
    isOpen: false,
    title: '',
    message: '',
    variant: 'success'
  });

  const showAlert = (message: string, variant: 'success' | 'error' | 'warning' = 'success', title?: string) => {
    setAlertConfig({
      isOpen: true,
      title: title || (variant === 'success' ? 'Thành công' : variant === 'error' ? 'Lỗi' : 'Thông báo'),
      message,
      variant
    });
  };

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
        enrollmentYear: item.khoa_hoc ? String(item.khoa_hoc) : '',
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
    setDeleteId(id);
  };

  const executeDelete = async () => {
    if (!deleteId) return;
    setDeleting(true);
    try {
      await deleteClass(deleteId);
      setClasses(prev => prev.filter(s => s.id !== deleteId));
      setDeleteId(null);
      showAlert('Xóa lớp học thành công!', 'success');
      loadData();
    } catch (error: any) {
      setDeleteId(null);
      showAlert(error.message || 'Có lỗi xảy ra khi xóa lớp học.', 'error');
    } finally {
      setDeleting(false);
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

      <ConfirmModal
        isOpen={!!deleteId}
        title="Xác nhận xóa Lớp học"
        message="Bạn có chắc chắn muốn xóa lớp học này khỏi hệ thống? Dữ liệu không thể khôi phục sau khi xóa."
        confirmText="Xóa ngay"
        cancelText="Hủy bỏ"
        onConfirm={executeDelete}
        onCancel={() => setDeleteId(null)}
        isLoading={deleting}
      />

      <AlertModal
        isOpen={alertConfig.isOpen}
        title={alertConfig.title}
        message={alertConfig.message}
        variant={alertConfig.variant}
        onClose={() => setAlertConfig(prev => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
}
