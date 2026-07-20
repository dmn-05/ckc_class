'use client';

import React, { useState, useEffect } from 'react';
import styles from './AdminFaculties.module.css';
import FacultyCard, { FacultyData } from './FacultyCard';
import { getPaginationRange } from '@/utils/pagination';

interface FacultyListProps {
  faculties: FacultyData[];
  filter: string;
  onDelete: (id: string) => void;
}

export default function FacultyList({ faculties, filter, onDelete }: FacultyListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('admin_faculties_page');
      return saved ? Number(saved) : 1;
    }
    return 1;
  });
  const itemsPerPage = 5;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('admin_faculties_page', currentPage.toString());
    }
  }, [currentPage]);

  // Filter logic
  const filtered = faculties.filter(f => {
    if (filter === 'active' && f.status !== 'active') return false;
    if (filter === 'paused' && f.status !== 'inactive') return false;
    if (filter === 'pending' && f.status !== 'pending') return false;
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      if (!f.name.toLowerCase().includes(term) && !f.code.toLowerCase().includes(term)) return false;
    }
    return true;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));

  // Reset to page 1 ONLY when filter or search changes (lọc hay tìm kiếm)
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filter]);

  // Adjust page if current page exceeds total pages after deletion/edit
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const startIdx = (currentPage - 1) * itemsPerPage + 1;
  const endIdx = Math.min(currentPage * itemsPerPage, filtered.length);

  // Generate page numbers
  const pageNumbers = getPaginationRange(currentPage, totalPages);

  return (
    <div className={styles.rightColumn}>
      {/* Search & Action Bar */}
      <div className={styles.searchBarContainer}>
        <div className={`${styles.glassCard} ${styles.searchBoxMain}`}>
          <span className={`material-symbols-outlined ${styles.searchIconMain}`}>search</span>
          <input 
            type="text" 
            className={styles.searchInputMain}
            placeholder="Tìm theo mã hoặc tên khoa..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className={`${styles.glassCard} ${styles.btnFilter}`}>
          <span className="material-symbols-outlined">sort</span>
        </button>
      </div>

      {/* Faculty Items */}
      <div className={styles.facultyList}>
        {paginated.length > 0 ? paginated.map(faculty => (
          <FacultyCard 
            key={faculty.id} 
            faculty={faculty} 
            onDelete={onDelete} 
          />
        )) : (
          <div style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
            Không tìm thấy khoa nào phù hợp.
          </div>
        )}
      </div>

      {/* Pagination */}
      {filtered.length > 0 && (
        <div className={styles.pagination}>
          <span className={styles.paginationText}>
            Hiển thị {startIdx} - {endIdx} trong số {filtered.length} khoa
          </span>
          <div className={styles.paginationButtons}>
            <button 
              className={`${styles.btnPage} ${currentPage === 1 ? styles.btnPageDisabled : ''}`} 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            
            {pageNumbers.map((num, idx) => (
              typeof num === 'number' ? (
                <button 
                  key={num}
                  className={`${styles.btnPage} ${currentPage === num ? styles.btnPageActive : ''}`}
                  onClick={() => setCurrentPage(num)}
                >
                  {num}
                </button>
              ) : (
                <span 
                  key={`dots-${idx}`}
                  className={styles.btnPage}
                  style={{ border: 'none', background: 'transparent', cursor: 'default', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  {num}
                </span>
              )
            ))}

            <button 
              className={`${styles.btnPage} ${currentPage === totalPages ? styles.btnPageDisabled : ''}`}
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
