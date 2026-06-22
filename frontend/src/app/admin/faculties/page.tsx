'use client';

import React, { useState, useEffect } from 'react';
import styles from '@/components/admin/faculties/AdminFaculties.module.css';
import FacultyDashboard from '@/components/admin/faculties/FacultyDashboard';
import FacultyList from '@/components/admin/faculties/FacultyList';
import { FacultyData } from '@/components/admin/faculties/FacultyCard';
import Link from 'next/link';
import { getFaculties, deleteFaculty } from '@/app/actions/faculty';

export default function FacultiesManagementPage() {
  const [faculties, setFaculties] = useState<FacultyData[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [loading, setLoading] = useState(true);

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

  const handleDelete = async (id: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa Khoa này?')) {
      try {
        await deleteFaculty(id);
        setFaculties(prev => prev.filter(f => f.id !== id));
      } catch (error) {
        alert('Có lỗi xảy ra khi xóa Khoa.');
        console.error(error);
      }
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
    </div>
  );
}
