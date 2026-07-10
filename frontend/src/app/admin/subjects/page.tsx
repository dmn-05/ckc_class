'use client';

import React, { useState, useEffect, useCallback } from 'react';
import styles from '@/components/admin/subjects/AdminSubjects.module.css';
import SubjectDashboard from '@/components/admin/subjects/SubjectDashboard';
import SubjectList from '@/components/admin/subjects/SubjectList';
import { SubjectData } from '@/components/admin/subjects/SubjectCard';
import Link from 'next/link';
import { getSubjects, getSubjectStats, deleteSubject } from '@/app/actions/subject';
import { getDepartments } from '@/app/actions/department';
import ConfirmModal from '@/components/common/ConfirmModal';
import AlertModal from '@/components/common/AlertModal';

export default function SubjectsManagementPage() {
  const [subjects, setSubjects] = useState<SubjectData[]>([]);
  const [departments, setDepartments] = useState<any[]>([]);
  const [stats, setStats] = useState<any>({
    totalCount: 0,
    activeCount: 0,
    pausedCount: 0,
    distributionData: []
  });
  const [filter, setFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  // Delete modal state
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

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const [subjectsData, statsData, deptsData] = await Promise.all([
        getSubjects(),
        getSubjectStats(),
        getDepartments()
      ]);
      setSubjects(subjectsData);
      setStats(statsData);
      setDepartments(deptsData);
    } catch (error) {
      console.error('Error loading subjects data:', error);
      showAlert('Không thể tải dữ liệu môn học. Vui lòng thử lại.', 'error');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleEdit = (subject: SubjectData) => {
    window.location.href = `/admin/subjects/${subject.id}/edit`;
  };

  const handleDelete = (id: string) => {
    setDeleteId(id);
  };

  const executeDelete = async () => {
    if (!deleteId) return;
    setDeleting(true);
    try {
      await deleteSubject(deleteId);
      setDeleteId(null);
      showAlert('Xóa môn học thành công!', 'success');
      loadData();
    } catch (error: any) {
      setDeleteId(null);
      showAlert(error.message || 'Có lỗi xảy ra khi xóa môn học.', 'error');
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Quản lý Môn học</h1>
          <p className={styles.pageSubtitle}>Theo dõi và quản lý danh mục học phần tại học viện.</p>
        </div>

        <Link href="/admin/subjects/create" className={styles.btnAddSubject}>
          <span className="material-symbols-outlined">add</span>
          Thêm Môn học
        </Link>
      </div>

      <div className={styles.layoutGrid}>
        <SubjectDashboard
          totalCount={stats.totalCount}
          activeCount={stats.activeCount}
          pausedCount={stats.pausedCount}
          distributionData={stats.distributionData}
          departments={departments}
          currentFilter={filter}
          onFilterChange={setFilter}
          currentStatusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
        />

        {loading ? (
          <div style={{ padding: '2rem', textAlign: 'center', background: 'white', borderRadius: '1rem', border: '1px solid #e2e8f0' }}>
            <p>Đang tải dữ liệu...</p>
          </div>
        ) : (
          <SubjectList
            subjects={subjects}
            departments={departments}
            currentFilter={filter}
            onFilterChange={setFilter}
            statusFilter={statusFilter}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </div>

      <ConfirmModal
        isOpen={!!deleteId}
        title="Xác nhận xóa Môn học"
        message="Bạn có chắc chắn muốn xóa Môn học này khỏi hệ thống? Dữ liệu không thể khôi phục sau khi xóa."
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
