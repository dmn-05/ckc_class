'use client';

import React, { useState, useEffect } from 'react';
import styles from './AdminSubjects.module.css';
import SubjectCard, { SubjectData } from './SubjectCard';
import { getPaginationRange } from '@/utils/pagination';

interface SubjectListProps {
  subjects: SubjectData[];
  departments?: any[];
  currentFilter: string;
  onFilterChange: (filter: string) => void;
  statusFilter?: string;
  onEdit: (subject: SubjectData) => void;
  onDelete: (id: string) => void;
}

export default function SubjectList({ 
  subjects, 
  departments = [],
  currentFilter,
  onFilterChange,
  statusFilter = 'all',
  onEdit, 
  onDelete 
}: SubjectListProps) {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // Reset page when filter, search or subjects change
  useEffect(() => {
    setCurrentPage(1);
  }, [subjects, currentFilter, statusFilter, searchTerm]);

  // Filter and search logic
  const filteredSubjects = subjects.filter(subject => {
    // Status Filter
    if (statusFilter === 'active' && subject.status !== 'active') return false;
    if (statusFilter === 'inactive' && subject.status !== 'inactive') return false;

    // Department Filter
    if (currentFilter !== 'all' && subject.departmentId?.toString() !== currentFilter) {
      return false;
    }
    
    // Search Term Filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      if (!subject.name.toLowerCase().includes(term) && !subject.code.toLowerCase().includes(term)) {
        return false;
      }
    }
    return true;
  });

  const totalPages = Math.max(1, Math.ceil(filteredSubjects.length / itemsPerPage));
  
  const currentSubjects = filteredSubjects.slice(
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
  );

  const renderPaginationButtons = () => {
    return getPaginationRange(currentPage, totalPages).map((pageNum, idx) => {
      if (typeof pageNum === 'number') {
        return (
          <button 
            key={pageNum}
            className={`${styles.btnPage} ${currentPage === pageNum ? styles.btnPageActive : ''}`}
            onClick={() => setCurrentPage(pageNum)}
          >
            {pageNum}
          </button>
        );
      }
      return (
        <span 
          key={`dots-${idx}`}
          className={styles.btnPage}
          style={{ border: 'none', background: 'transparent', cursor: 'default', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {pageNum}
        </span>
      );
    });
  };

  return (
    <div className={styles.rightColumn}>
      {/* Search & Filters */}
      <div className={styles.searchBarContainer}>
        <div className={styles.searchBoxRow}>
          <div className={`${styles.glassCard} ${styles.searchBoxMain}`}>
            <span className={`material-symbols-outlined ${styles.searchIconMain}`}>search</span>
            <input 
              type="text" 
              className={styles.searchInputMain}
              placeholder="Tìm theo mã hoặc tên môn học..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Subject Items */}
      <div className={styles.subjectList}>
        {currentSubjects.length > 0 ? currentSubjects.map(subject => (
          <SubjectCard 
            key={subject.id} 
            subject={subject} 
            onEdit={onEdit} 
            onDelete={onDelete} 
          />
        )) : (
          <div style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
            Không tìm thấy môn học nào phù hợp.
          </div>
        )}
      </div>

      {/* Pagination */}
      {filteredSubjects.length > 0 && (
        <div className={styles.pagination}>
          <span className={styles.paginationText}>
            Hiển thị {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, filteredSubjects.length)} trong số {filteredSubjects.length} môn học
          </span>
          <div className={styles.paginationButtons}>
            <button 
              className={`${styles.btnPage} ${currentPage === 1 ? styles.btnPageDisabled : ''}`} 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            
            {renderPaginationButtons()}
            
            <button 
              className={`${styles.btnPage} ${currentPage === totalPages ? styles.btnPageDisabled : ''}`}
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
