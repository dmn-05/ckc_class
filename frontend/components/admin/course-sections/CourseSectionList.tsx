'use client';

import React, { useState } from 'react';
import styles from './AdminCourseSections.module.css';
import CourseSectionCard, { CourseSectionData, CourseSectionStatus } from './CourseSectionCard';
import CourseSectionsPagination from './CourseSectionsPagination';

interface CourseSectionListProps {
  sections: CourseSectionData[];
  onEdit: (section: CourseSectionData) => void;
  onViewStats: (sectionId: string) => void;
  onManageStudents?: (sectionId: string) => void;
  onDelete: (sectionId: string) => void;
  hideDelete?: boolean;
  hideEdit?: boolean;
  hideManageStudents?: boolean;
  onViewDetail?: (sectionId: string) => void;
  selectedSemester?: string;
  selectedYear?: string;
  onArchive?: (sectionId: string, currentStatus: CourseSectionStatus) => void;
}

export default function CourseSectionList({
  sections,
  onEdit,
  onViewStats,
  onManageStudents,
  onDelete,
  hideDelete,
  hideEdit,
  hideManageStudents,
  onViewDetail,
  onArchive,
  selectedSemester = 'all',
  selectedYear = 'all'
}: CourseSectionListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Hiển thị 5 lớp học phần/1 trang

  const matchesSemester = (sec: CourseSectionData, semCode: string) => {
    if (semCode === 'all') return true;
    if (!sec.semester) return false;
    const numMatch = semCode.match(/\d+/);
    if (numMatch) {
      return sec.semester.includes(numMatch[0]);
    }
    return sec.semester === semCode;
  };

  const filteredSections = sections.filter(sec => {
    const matchesSearch =
      sec.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sec.code?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sec.subjectName?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchSem = matchesSemester(sec, selectedSemester);
    const matchYear = selectedYear === 'all' || sec.academicYear === selectedYear;

    return matchesSearch && matchSem && matchYear;
  });

  const totalPages = Math.ceil(filteredSections.length / itemsPerPage);
  const currentSections = filteredSections.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset to page 1 when search, filters or sections prop change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedSemester, selectedYear, sections]);

  return (
    <div className={styles.rightColumn}>
      <div className={styles.searchBarContainer}>
        <div className={styles.searchBoxMain}>
          <svg className={styles.searchIconMain} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text"
            className={styles.searchInputMain}
            placeholder="Tìm theo mã lớp học phần hoặc tên..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.classCardContainer}>
        {currentSections.map(section => (
          <CourseSectionCard 
            key={section.id} 
            section={section} 
            onEdit={onEdit} 
            onViewStats={onViewStats}
            onManageStudents={onManageStudents}
            onDelete={onDelete}
            hideDelete={hideDelete}
            hideEdit={hideEdit}
            hideManageStudents={hideManageStudents}
            onViewDetail={onViewDetail}
            onArchive={onArchive}
          />
        ))}

        {filteredSections.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#777587', backgroundColor: '#ffffff', borderRadius: '1.5rem', border: '1px dashed #c7c4d8' }}>
            Không tìm thấy lớp học phần nào phù hợp cho học kỳ đã chọn.
          </div>
        )}
      </div>

      {filteredSections.length > 0 && (
        <CourseSectionsPagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={filteredSections.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
