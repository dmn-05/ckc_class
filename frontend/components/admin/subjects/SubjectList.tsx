'use client';

import React, { useState, useEffect } from 'react';
import styles from './AdminSubjects.module.css';
import SubjectCard, { SubjectData } from './SubjectCard';

interface SubjectListProps {
  subjects: SubjectData[];
  departments?: any[];
  currentFilter: string;
  onFilterChange: (filter: string) => void;
  onEdit: (subject: SubjectData) => void;
  onDelete: (id: string) => void;
}

export default function SubjectList({ 
  subjects, 
  departments = [],
  currentFilter,
  onFilterChange,
  onEdit, 
  onDelete 
}: SubjectListProps) {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // Reset page when filter, search or subjects change
  useEffect(() => {
    setCurrentPage(1);
  }, [subjects, currentFilter, searchTerm]);

  // Filter and search logic
  const filteredSubjects = subjects.filter(subject => {
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
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button 
          key={i}
          className={`${styles.btnPage} ${currentPage === i ? styles.btnPageActive : ''}`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }
    return buttons;
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
          <button className={`${styles.glassCard} ${styles.btnFilter}`}>
            <span className="material-symbols-outlined">filter_list</span>
          </button>
        </div>

        <div className={styles.filterTagScroll}>
          <button 
            className={`${styles.filterTagScrollBtn} ${currentFilter === 'all' ? styles.filterTagScrollBtnActive : ''}`}
            onClick={() => onFilterChange('all')}
          >
            Tất cả môn học
          </button>
          
          {departments.filter(d => d.status === 'active').map(dept => (
            <button 
              key={dept.id}
              className={`${styles.filterTagScrollBtn} ${currentFilter === dept.id ? styles.filterTagScrollBtnActive : ''}`}
              onClick={() => onFilterChange(dept.id)}
            >
              {dept.name}
            </button>
          ))}
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
