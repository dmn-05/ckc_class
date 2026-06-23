'use client';

import React, { useState, useEffect, useCallback } from 'react';
import styles from '@/components/admin/lecturers/AdminLecturers.module.css';
import LecturerDashboard from '@/components/admin/lecturers/LecturerDashboard';
import LecturerList from '@/components/admin/lecturers/LecturerList';
import { LecturerData } from '@/components/admin/lecturers/LecturerCard';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getLecturers } from '@/app/actions/lecturer';
import { getFaculties } from '@/app/actions/faculty';

export default function LecturersManagementPage() {
  const router = useRouter();
  const [lecturers, setLecturers] = useState<LecturerData[]>([]);
  const [faculties, setFaculties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [facultyFilter, setFacultyFilter] = useState<string>('all');
  const [listFilter, setListFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showTeaching, setShowTeaching] = useState(true);
  const [showStopped, setShowStopped] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const [lecturersData, facultiesData] = await Promise.all([
        getLecturers(),
        getFaculties()
      ]);
      setLecturers(lecturersData);
      setFaculties(facultiesData);
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
  const teachingCount = lecturers.filter(l => l.isActive).length;
  const stoppedTeachingCount = totalCount - teachingCount;

  // Filter lecturers
  const filteredLecturers = lecturers.filter(l => {
    // 1. Search Filter
    const matchesSearch = searchQuery === '' || 
      l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.code.toLowerCase().includes(searchQuery.toLowerCase());
    
    // 2. Faculty Filter (from listFilter)
    let matchesFaculty = true;
    if (listFilter !== 'all') {
      // listFilter is now the faculty code or id
      const selectedFaculty = faculties.find(f => f.code === listFilter || f.id === listFilter);
      if (selectedFaculty) {
        matchesFaculty = l.facultyName === selectedFaculty.name || l.facultyName.includes(selectedFaculty.name);
      } else {
        // Fallback for older hardcoded values just in case
        const lowerFaculty = l.facultyName.toLowerCase();
        if (listFilter === 'cntt') matchesFaculty = lowerFaculty.includes('công nghệ thông tin') || lowerFaculty.includes('cntt');
        else if (listFilter === 'ck') matchesFaculty = lowerFaculty.includes('cơ khí');
        else if (listFilter === 'dd') matchesFaculty = lowerFaculty.includes('điện') || lowerFaculty.includes('điện tử');
      }
    }

    // 3. Status Filter (from dashboard)
    let matchesStatus = false;
    if (showTeaching && showStopped) matchesStatus = true;
    else if (showTeaching) matchesStatus = l.isActive;
    else if (showStopped) matchesStatus = !l.isActive;
    else matchesStatus = false; // if neither is selected, maybe show none or all? Let's show none.

    return matchesSearch && matchesFaculty && matchesStatus;
  });

  const totalPages = Math.ceil(filteredLecturers.length / itemsPerPage);
  const currentLecturers = filteredLecturers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleEdit = (lecturer: LecturerData) => {
    router.push(`/admin/lecturers/${lecturer.id}/edit`);
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
          teachingCount={teachingCount}
          stoppedTeachingCount={stoppedTeachingCount}
          facultyFilter={listFilter}
          onFacultyFilterChange={(val) => { setListFilter(val); setCurrentPage(1); }}
          showTeaching={showTeaching}
          showStopped={showStopped}
          onShowTeachingChange={(val) => { setShowTeaching(val); setCurrentPage(1); }}
          onShowStoppedChange={(val) => { setShowStopped(val); setCurrentPage(1); }}
          faculties={faculties}
        />

        {loading ? (
          <div style={{ padding: '2rem', textAlign: 'center' }}>Đang tải dữ liệu...</div>
        ) : (
          <LecturerList
            lecturers={currentLecturers}
            totalItems={filteredLecturers.length}
            currentFilter={listFilter}
            onFilterChange={(val) => { setListFilter(val); setCurrentPage(1); }}
            searchQuery={searchQuery}
            onSearchChange={(val) => { setSearchQuery(val); setCurrentPage(1); }}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            onEdit={handleEdit}
            onDelete={handleDelete}
            faculties={faculties}
          />
        )}
      </div>
    </div>
  );
}
