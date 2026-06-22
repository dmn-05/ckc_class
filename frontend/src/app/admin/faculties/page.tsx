'use client';

import React, { useState } from 'react';
import styles from '@/components/admin/faculties/AdminFaculties.module.css';
import FacultyDashboard from '@/components/admin/faculties/FacultyDashboard';
import FacultyList from '@/components/admin/faculties/FacultyList';
import { FacultyData } from '@/components/admin/faculties/FacultyCard';
import Link from 'next/link';

const INITIAL_FACULTIES: FacultyData[] = [
  {
    id: 'f1',
    name: 'Khoa Công nghệ thông tin',
    code: 'K_CNTT',
    students: 2850,
    lecturers: 72,
    status: 'active',
    theme: 'primary',
    icon: 'terminal'
  },
  {
    id: 'f2',
    name: 'Khoa Quản trị kinh doanh',
    code: 'K_QTKD',
    students: 1240,
    lecturers: 48,
    status: 'active',
    theme: 'secondary',
    icon: 'payments'
  },
  {
    id: 'f3',
    name: 'Khoa Thiết kế đồ họa',
    code: 'K_TKDH',
    students: 860,
    lecturers: 24,
    status: 'active',
    theme: 'primary',
    icon: 'palette'
  },
  {
    id: 'f4',
    name: 'Khoa Công nghệ thực phẩm',
    code: 'K_CNTP',
    students: 420,
    lecturers: 18,
    status: 'pending',
    theme: 'tertiary',
    icon: 'science'
  }
];

export default function FacultiesManagementPage() {
  const [faculties, setFaculties] = useState<FacultyData[]>(INITIAL_FACULTIES);
  const [filter, setFilter] = useState<string>('all');

  const activeCount = faculties.filter(f => f.status === 'active').length;
  const pendingCount = faculties.filter(f => f.status === 'pending').length;

  const handleEdit = (faculty: FacultyData) => {
    console.log('Edit faculty', faculty);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa Khoa này?')) {
      setFaculties(prev => prev.filter(f => f.id !== id));
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
          currentFilter={filter}
          onFilterChange={setFilter}
        />

        <FacultyList
          faculties={faculties}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
