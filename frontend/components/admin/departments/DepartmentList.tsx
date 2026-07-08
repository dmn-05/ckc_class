'use client';

import React, { useState, useEffect } from 'react';
import styles from './AdminDepartments.module.css';
import DepartmentCard, { DepartmentData } from './DepartmentCard';
import { getPaginationRange } from '@/utils/pagination';

interface DepartmentListProps {
  departments: DepartmentData[];
  facultyFilter: string;
  statusFilter: string;
  onDelete: (id: string) => void;
}

export default function DepartmentList({ departments, facultyFilter, statusFilter, onDelete }: DepartmentListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter logic
  const filtered = departments.filter(d => {
    if (statusFilter === 'active' && d.status !== 'active') return false;
    if (statusFilter === 'paused' && d.status !== 'inactive') return false;
    if (statusFilter === 'pending' && d.status !== 'pending') return false;
    
    if (facultyFilter !== 'all' && d.facultyId.toString() !== facultyFilter.toString()) return false;
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      if (!d.name.toLowerCase().includes(term) && !d.code.toLowerCase().includes(term)) return false;
    }
    return true;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter, facultyFilter]);

  const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const startIdx = (currentPage - 1) * itemsPerPage + 1;
  const endIdx = Math.min(currentPage * itemsPerPage, filtered.length);

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
            placeholder="Tìm theo mã hoặc tên bộ môn..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className={`${styles.glassCard} ${styles.btnFilter}`}>
          <span className="material-symbols-outlined">sort</span>
        </button>
      </div>

      {/* Department Items */}
      <div className={styles.departmentList}>
        {paginated.length > 0 ? paginated.map(dept => (
          <DepartmentCard 
            key={dept.id} 
            department={dept} 
            onDelete={onDelete} 
          />
        )) : (
          <div style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
            Không tìm thấy bộ môn nào phù hợp.
          </div>
        )}
      </div>

      {/* Pagination */}
      {filtered.length > 0 && (
        <div className={styles.pagination}>
          <span className={styles.paginationText}>
            Hiển thị {startIdx} - {endIdx} trong số {filtered.length} bộ môn
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
