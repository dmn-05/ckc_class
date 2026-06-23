'use client';

import React, { useState } from 'react';
import styles from './AdminCourseSections.module.css';
import CourseSectionCard, { CourseSectionData } from './CourseSectionCard';
import CourseSectionsPagination from './CourseSectionsPagination';

interface CourseSectionListProps {
  sections: CourseSectionData[];
  onEdit: (section: CourseSectionData) => void;
  onViewStats: (sectionId: string) => void;
  onDelete: (sectionId: string) => void;
}

export default function CourseSectionList({ sections, onEdit, onViewStats, onDelete }: CourseSectionListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Adjust as needed

  const filteredSections = sections.filter(sec => 
    sec.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sec.code?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredSections.length / itemsPerPage);
  const currentSections = filteredSections.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset to page 1 when search changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

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
            onDelete={onDelete}
          />
        ))}

        {filteredSections.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#777587', backgroundColor: '#ffffff', borderRadius: '1.5rem', border: '1px dashed #c7c4d8' }}>
            Không tìm thấy lớp học phần nào phù hợp.
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
