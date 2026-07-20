'use client';

import React, { useState, useEffect, useCallback } from 'react';
import StudentsHeader from '@/components/admin/students/StudentsHeader';
import StudentsStats from '@/components/admin/students/StudentsStats';
import StudentsFilter from '@/components/admin/students/StudentsFilter';
import StudentsToolbar from '@/components/admin/students/StudentsToolbar';
import StudentsList from '@/components/admin/students/StudentsList';
import StudentsPagination from '@/components/admin/students/StudentsPagination';
import styles from '@/components/admin/students/AdminStudents.module.css';
import { getStudents, getClasses } from '@/app/actions/student';
import { getFaculties } from '@/app/actions/faculty';
import { StudentData } from '@/components/admin/students/StudentCard';

export default function AdminStudentsPage() {
  const [students, setStudents] = useState<StudentData[]>([]);
  const [faculties, setFaculties] = useState<any[]>([]);
  const [classes, setClasses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters & Pagination State
  const [searchTerm, setSearchTerm] = useState('');
  const [facultyFilter, setFacultyFilter] = useState('all');
  const [classFilter, setClassFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState<string[]>(['active', 'graduated', 'reserved']); // array of selected statuses

  const [currentPage, setCurrentPage] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('admin_students_page');
      return saved ? Number(saved) : 1;
    }
    return 1;
  });
  const itemsPerPage = 5;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('admin_students_page', currentPage.toString());
    }
  }, [currentPage]);

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const [studentsData, facultiesData, classesData] = await Promise.all([
        getStudents(),
        getFaculties(),
        getClasses()
      ]);
      setStudents(studentsData);
      setFaculties(facultiesData);
      setClasses(classesData);
    } catch (error) {
      console.error('Error loading students data:', error);
      alert('Không thể tải dữ liệu sinh viên. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // Reset page ONLY when filters or search change (lọc hay tìm kiếm)
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, facultyFilter, classFilter, statusFilter]);

  // Reset classFilter when facultyFilter changes
  useEffect(() => {
    setClassFilter('all');
  }, [facultyFilter]);

  // Apply filters
  const filteredStudents = students.filter(student => {
    // Search Term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      if (!student.name.toLowerCase().includes(term) && 
          !student.code.toLowerCase().includes(term) &&
          !(student.classCode && student.classCode.toLowerCase().includes(term))) {
        return false;
      }
    }

    // Faculty Filter
    if (facultyFilter !== 'all') {
      if (!student.faculty || student.faculty.toLowerCase() !== facultyFilter.toLowerCase()) {
        return false;
      }
    }

    // Class Filter
    if (classFilter !== 'all') {
      if (!student.classCode || student.classCode.toLowerCase() !== classFilter.toLowerCase()) {
        return false;
      }
    }

    // Status Filter
    if (statusFilter.length === 0) return false;
    
    const allowedStatuses: string[] = statusFilter.map(s => {
      if (s === 'active') return 'dang_hoc';
      if (s === 'graduated') return 'da_tot_nghiep';
      if (s === 'reserved') return 'tam_nghi';
      return '';
    });
    
    if (student.status && !allowedStatuses.includes(student.status)) {
      return false;
    }

    return true;
  });

  const totalPages = Math.max(1, Math.ceil(filteredStudents.length / itemsPerPage));

  // Adjust page if current page exceeds total pages after deletion/edit
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const currentStudents = filteredStudents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className={styles.container}>
      <StudentsHeader />
      
      <div className={styles.grid}>
        {/* Left Column: Statistics & Filters */}
        <div className={styles.leftColumn}>
          <StudentsStats students={students} />
          <StudentsFilter 
            facultyFilter={facultyFilter}
            onFacultyChange={setFacultyFilter}
            classFilter={classFilter}
            onClassChange={setClassFilter}
            statusFilter={statusFilter}
            onStatusChange={setStatusFilter}
            faculties={faculties}
            classes={classes}
          />
        </div>
        
        {/* Right Column: Student List */}
        <div className={styles.rightColumn}>
          <StudentsToolbar 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            facultyFilter={facultyFilter}
            onFacultyChange={setFacultyFilter}
            faculties={faculties}
          />
          {loading ? (
            <div style={{ padding: '2rem', textAlign: 'center' }}>Đang tải dữ liệu...</div>
          ) : (
            <>
              <StudentsList students={currentStudents} onDeleteSuccess={loadData} />
              <StudentsPagination 
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={filteredStudents.length}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentPage}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
