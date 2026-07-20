'use client';

import React, { useState } from 'react';
import styles from './AdminClasses.module.css';
import ClassCard, { ClassData } from './ClassCard';
import ClassesPagination from './ClassesPagination';

interface ClassListProps {
  classes: ClassData[];
  onEdit: (classItem: ClassData) => void;
  onViewStats: (classId: string) => void;
  onManageStudents?: (classId: string) => void;
  onDelete: (classId: string) => void;
}

export default function ClassList({ classes, onEdit, onViewStats, onManageStudents, onDelete }: ClassListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('admin_classes_page');
      return saved ? Number(saved) : 1;
    }
    return 1;
  });
  const itemsPerPage = 4; // Adjust as needed

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('admin_classes_page', currentPage.toString());
    }
  }, [currentPage]);

  const filteredClasses = classes.filter(sec => 
    sec.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sec.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredClasses.length / itemsPerPage);
  const currentClasses = filteredClasses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset to page 1 ONLY when search changes (tìm kiếm)
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Adjust page if current page exceeds total pages after deletion/edit
  React.useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

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
            placeholder="Tìm theo mã lớp hoặc tên lớp..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.classCardContainer}>
        {currentClasses.map(classItem => (
          <ClassCard 
            key={classItem.id} 
            classItem={classItem} 
            onEdit={onEdit} 
            onViewStats={onViewStats}
            onManageStudents={onManageStudents}
            onDelete={onDelete}
          />
        ))}

        {filteredClasses.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#777587', backgroundColor: '#ffffff', borderRadius: '1.5rem', border: '1px dashed #c7c4d8' }}>
            Không tìm thấy lớp nào phù hợp.
          </div>
        )}
      </div>

      {filteredClasses.length > 0 && (
        <ClassesPagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={filteredClasses.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      )}

    </div>
  );
}
