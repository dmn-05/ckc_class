import React from 'react';
import styles from './AdminStudents.module.css';
import { getPaginationRange } from '@/utils/pagination';

interface StudentsPaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export default function StudentsPagination({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange
}: StudentsPaginationProps) {
  const currentCount = Math.min(itemsPerPage, totalItems - (currentPage - 1) * itemsPerPage);

  const getPageNumbers = () => {
    return getPaginationRange(currentPage, totalPages);
  };

  return (
    <div
      className={styles.pagination}
      style={{
        bottom: '0',
        backgroundColor: '#f9fafc',
        paddingTop: '16px',
        paddingBottom: '16px',
        borderTop: '1px solid #e0e3e5',
        marginTop: 'auto',
        zIndex: 10
      }}
    >
      <span className={styles.paginationText}>
        Hiển thị {currentCount > 0 ? currentCount : 0} / {totalItems} sinh viên
      </span>
      <div className={styles.paginationControls}>
        <button
          className={styles.pageBtn}
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chevron_left</span>
        </button>

        {getPageNumbers().map((pageNum, idx) => (
          typeof pageNum === 'number' ? (
            <button
              key={pageNum}
              className={pageNum === currentPage ? styles.pageBtnActive : styles.pageBtn}
              onClick={() => onPageChange(pageNum)}
            >
              {pageNum}
            </button>
          ) : (
            <span
              key={`dots-${idx}`}
              className={styles.pageBtn}
              style={{ border: 'none', background: 'transparent', cursor: 'default', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {pageNum}
            </span>
          )
        ))}

        <button
          className={styles.pageBtn}
          disabled={currentPage === totalPages || totalPages === 0}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chevron_right</span>
        </button>
      </div>
    </div>
  );
}
