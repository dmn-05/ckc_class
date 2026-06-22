'use client';

import React, { useState, useEffect } from 'react';
import styles from '@/components/admin/departments/AdminDepartments.module.css';
import DepartmentDashboard from '@/components/admin/departments/DepartmentDashboard';
import DepartmentList from '@/components/admin/departments/DepartmentList';
import { DepartmentData } from '@/components/admin/departments/DepartmentCard';
import Link from 'next/link';
import { getDepartments, deleteDepartment } from '@/app/actions/department';

export default function DepartmentsManagementPage() {
  const [departments, setDepartments] = useState<DepartmentData[]>([]);
  const [facultyFilter, setFacultyFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getDepartments();
        setDepartments(data);
      } catch (error) {
        console.error("Failed to load departments", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const activeCount = departments.filter(d => d.status === 'active').length;
  const pendingCount = departments.filter(d => d.status === 'pending').length;
  const inactiveCount = departments.filter(d => d.status === 'inactive').length;

  const handleDelete = async (id: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa Bộ môn này?')) {
      try {
        await deleteDepartment(id);
        setDepartments(prev => prev.filter(d => d.id !== id));
      } catch (error) {
        alert('Có lỗi xảy ra khi xóa Bộ môn.');
        console.error(error);
      }
    }
  };

  const uniqueFaculties = Array.from(
    new Map(departments.map(d => [d.facultyId, d.facultyName])).entries()
  ).map(([id, name]) => ({ id, name }));

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Quản lý Bộ môn</h1>
          <p className={styles.pageSubtitle}>Tổ chức và quản lý các đơn vị học thuật trực thuộc các Khoa trong hệ thống CKC.</p>
        </div>

        <Link href="/admin/departments/create" className={styles.btnAddDepartment}>
          <span className="material-symbols-outlined">add</span>
          Thêm Bộ môn
        </Link>
      </div>

      <div className={styles.layoutGrid}>
        <DepartmentDashboard
          activeCount={activeCount}
          pendingCount={pendingCount}
          inactiveCount={inactiveCount}
          currentFacultyFilter={facultyFilter}
          onFacultyFilterChange={setFacultyFilter}
          currentStatusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
          faculties={uniqueFaculties}
        />

        {loading ? (
          <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>Đang tải dữ liệu bộ môn...</div>
        ) : (
          <DepartmentList
            departments={departments}
            facultyFilter={facultyFilter}
            statusFilter={statusFilter}
            onDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
}
