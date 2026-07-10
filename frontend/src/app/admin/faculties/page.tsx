'use client';

import React, { useState, useEffect } from 'react';
import styles from '@/components/admin/faculties/AdminFaculties.module.css';
import FacultyDashboard from '@/components/admin/faculties/FacultyDashboard';
import FacultyList from '@/components/admin/faculties/FacultyList';
import { FacultyData } from '@/components/admin/faculties/FacultyCard';
import Link from 'next/link';
import { getFaculties, deleteFaculty } from '@/app/actions/faculty';
import ConfirmModal from '@/components/common/ConfirmModal';

export default function FacultiesManagementPage() {
  const [faculties, setFaculties] = useState<FacultyData[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getFaculties();
        setFaculties(data);
      } catch (error) {
        console.error("Failed to load faculties", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const activeCount = faculties.filter(f => f.status === 'active').length;
  const pendingCount = faculties.filter(f => f.status === 'pending').length;
  const inactiveCount = faculties.filter(f => f.status === 'inactive').length;

  const handleDelete = (id: string) => {
    setDeleteTargetId(id);
  };

  const executeDelete = async () => {
    if (!deleteTargetId) return;
    setDeleting(true);
    try {
      await deleteFaculty(deleteTargetId);
      setFaculties(prev => prev.filter(f => f.id !== deleteTargetId));
      setDeleteTargetId(null);
    } catch (error) {
      console.error(error);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Quản lý Khoa</h1>
          <p className={styles.pageSubtitle}>Tổ chức và quản lý các Khoa trong hệ thống CKC.</p>
        </div>

        <Link href="/admin/faculties/create" className={styles.btnAddFaculty}>
          <span className="material-symbols-outlined">add</span>
          Thêm Khoa
        </Link>
      </div>

      <div className={styles.layoutGrid}>
        <FacultyDashboard
          activeCount={activeCount}
          pendingCount={pendingCount}
          inactiveCount={inactiveCount}
          currentFilter={filter}
          onFilterChange={setFilter}
        />

        {loading ? (
          <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>Đang tải dữ liệu khoa...</div>
        ) : (
          <FacultyList
            faculties={faculties}
            filter={filter}
            onDelete={handleDelete}
          />
        )}
      </div>

      <ConfirmModal
        isOpen={!!deleteTargetId}
        title="Xác nhận xóa Khoa"
        message="Bạn có chắc chắn muốn xóa Khoa này khỏi hệ thống? Dữ liệu này không thể khôi phục sau khi xóa."
        confirmText="Xóa ngay"
        cancelText="Huỷ bỏ"
        onConfirm={executeDelete}
        onCancel={() => setDeleteTargetId(null)}
        isLoading={deleting}
      />
    </div>
  );
}
