'use client';

import React, { useState, useEffect, useCallback } from 'react';
import styles from '@/components/admin/lecturers/AdminLecturers.module.css';
import LecturerDashboard from '@/components/admin/lecturers/LecturerDashboard';
import LecturerList from '@/components/admin/lecturers/LecturerList';
import { LecturerData } from '@/components/admin/lecturers/LecturerCard';
import Link from 'next/link';
import { getLecturers } from '@/app/actions/lecturer';

export default function LecturersManagementPage() {
  const [lecturers, setLecturers] = useState<LecturerData[]>([]);
  const [loading, setLoading] = useState(true);
  const [facultyFilter, setFacultyFilter] = useState<string>('all');
  const [listFilter, setListFilter] = useState<string>('all');

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getLecturers();
      setLecturers(data);
    } catch (error) {
      console.error('Error loading lecturers:', error);
      alert('Không thể tải dữ liệu giảng viên');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const totalCount = lecturers.length;
  // Compute some stats if needed, or keep static for now
  const professorsCount = 12;
  const seniorLecturersCount = 28;
  const lecturersCount = 45;

  const handleEdit = (lecturer: LecturerData) => {
    console.log('Edit lecturer', lecturer);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa Giảng viên này?')) {
      setLecturers(prev => prev.filter(l => l.id !== id));
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Quản lý Giảng viên</h1>
          <p className={styles.pageSubtitle}>Danh sách nhân sự học thuật năm học 2023-2024</p>
        </div>

        <Link href="/admin/lecturers/create" className={styles.btnAddLecturer}>
          <span className="material-symbols-outlined">person_add</span>
          Thêm Giảng viên
        </Link>
      </div>

      <div className={styles.layoutGrid}>
        <LecturerDashboard
          totalCount={totalCount}
          professorsCount={professorsCount}
          seniorLecturersCount={seniorLecturersCount}
          lecturersCount={lecturersCount}
          facultyFilter={facultyFilter}
          onFacultyFilterChange={setFacultyFilter}
        />

        {loading ? (
          <div style={{ padding: '2rem', textAlign: 'center' }}>Đang tải dữ liệu...</div>
        ) : (
          <LecturerList
            lecturers={lecturers}
            currentFilter={listFilter}
            onFilterChange={setListFilter}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
}
