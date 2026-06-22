'use client';

import React, { useState, useEffect, useCallback } from 'react';
import styles from '@/components/admin/subjects/AdminSubjects.module.css';
import SubjectDashboard from '@/components/admin/subjects/SubjectDashboard';
import SubjectList from '@/components/admin/subjects/SubjectList';
import { SubjectData } from '@/components/admin/subjects/SubjectCard';
import Link from 'next/link';
import { getSubjects, getSubjectStats, deleteSubject } from '@/app/actions/subject';
import { getDepartments } from '@/app/actions/department';

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
  const [loading, setLoading] = useState(true);

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
      alert('Không thể tải dữ liệu môn học. Vui lòng thử lại.');
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

  const handleDelete = async (id: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa Môn học này?')) {
      try {
        await deleteSubject(id);
        alert('Xóa môn học thành công!');
        loadData();
      } catch (error: any) {
        alert(error.message || 'Có lỗi xảy ra khi xóa môn học.');
      }
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
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
}
