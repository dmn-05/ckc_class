'use client';

import React, { useState } from 'react';
import styles from '@/components/admin/departments/AdminDepartments.module.css';
import DepartmentDashboard from '@/components/admin/departments/DepartmentDashboard';
import DepartmentList from '@/components/admin/departments/DepartmentList';
import { DepartmentData } from '@/components/admin/departments/DepartmentCard';
import Link from 'next/link';

const INITIAL_DEPARTMENTS: DepartmentData[] = [
  {
    id: 'd1',
    name: 'Bộ môn Marketing',
    code: 'BM_MKT',
    facultyName: 'QTKD - Quản trị kinh doanh',
    status: 'active',
    theme: 'tertiary',
    icon: 'trending_up'
  },
  {
    id: 'd2',
    name: 'Bộ môn Cơ sở dữ liệu',
    code: 'BM_CSDL',
    facultyName: 'CNTT - Công nghệ thông tin',
    status: 'active',
    theme: 'primary',
    icon: 'database'
  },
  {
    id: 'd3',
    name: 'Bộ môn Lập trình',
    code: 'BM_LT',
    facultyName: 'CNTT - Công nghệ thông tin',
    status: 'active',
    theme: 'secondary',
    icon: 'code'
  },
  {
    id: 'd4',
    name: 'Bộ môn Mạng máy tính',
    code: 'BM_MMT',
    facultyName: 'CNTT - Công nghệ thông tin',
    status: 'pending',
    theme: 'error',
    icon: 'hub'
  }
];

export default function DepartmentsManagementPage() {
  const [departments, setDepartments] = useState<DepartmentData[]>(INITIAL_DEPARTMENTS);
  const [facultyFilter, setFacultyFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const activeCount = departments.filter(d => d.status === 'active').length;
  const pendingCount = departments.filter(d => d.status === 'pending').length;

  const handleEdit = (department: DepartmentData) => {
    console.log('Edit department', department);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa Bộ môn này?')) {
      setDepartments(prev => prev.filter(d => d.id !== id));
    }
  };

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
          currentFacultyFilter={facultyFilter}
          onFacultyFilterChange={setFacultyFilter}
          currentStatusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
        />

        <DepartmentList
          departments={departments}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
