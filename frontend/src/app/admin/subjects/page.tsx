'use client';

import React, { useState } from 'react';
import styles from '@/components/admin/subjects/AdminSubjects.module.css';
import SubjectDashboard from '@/components/admin/subjects/SubjectDashboard';
import SubjectList from '@/components/admin/subjects/SubjectList';
import { SubjectData } from '@/components/admin/subjects/SubjectCard';
import Link from 'next/link';

const INITIAL_SUBJECTS: SubjectData[] = [
  {
    id: 's1',
    name: 'Lập trình Di động',
    code: 'MH-0012',
    credits: 3,
    facultyName: 'CNTT',
    studentCount: 32,
    theme: 'primary',
    icon: 'phone_iphone'
  },
  {
    id: 's2',
    name: 'Cơ sở dữ liệu',
    code: 'MH-0045',
    credits: 4,
    facultyName: 'CNTT',
    studentCount: 45,
    theme: 'secondary',
    icon: 'database'
  },
  {
    id: 's3',
    name: 'Phát triển Web',
    code: 'MH-0089',
    credits: 3,
    facultyName: 'CNTT',
    studentCount: 28,
    theme: 'tertiary',
    icon: 'web'
  },
  {
    id: 's4',
    name: 'Mạng máy tính',
    code: 'MH-0102',
    credits: 3,
    facultyName: 'CNTT',
    studentCount: 50,
    theme: 'primary',
    icon: 'language'
  }
];

export default function SubjectsManagementPage() {
  const [subjects, setSubjects] = useState<SubjectData[]>(INITIAL_SUBJECTS);
  const [filter, setFilter] = useState<string>('all');

  const totalCount = 150; // Giả lập dữ liệu tổng
  const activeCount = 142;
  const pausedCount = 8;

  const distributionData = [
    { label: 'Công nghệ thông tin', percentage: 65, theme: 'primary' as const },
    { label: 'Kinh tế - Quản trị', percentage: 20, theme: 'secondary' as const },
    { label: 'Ngôn ngữ học', percentage: 15, theme: 'tertiary' as const }
  ];

  const handleEdit = (subject: SubjectData) => {
    console.log('Edit subject', subject);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa Môn học này?')) {
      setSubjects(prev => prev.filter(s => s.id !== id));
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
          totalCount={totalCount}
          activeCount={activeCount}
          pausedCount={pausedCount}
          distributionData={distributionData}
        />

        <SubjectList
          subjects={subjects}
          currentFilter={filter}
          onFilterChange={setFilter}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
