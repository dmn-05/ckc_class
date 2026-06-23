import React from 'react';
import styles from './AdminCourseSections.module.css';

interface CourseSectionsPaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export default function CourseSectionsPagination({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange
}: CourseSectionsPaginationProps) {
  const currentCount = Math.min(itemsPerPage, totalItems - (currentPage - 1) * itemsPerPage);

  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
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
        zIndex: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'static'
      }}
    >
      <span className={styles.paginationText}>
        Hiển thị {currentCount > 0 ? currentCount : 0} / {totalItems} lớp học phần
      </span>
      <div className={styles.paginationControls}>
        <button
          className={styles.pageBtn}
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chevron_left</span>
        </button>

        {getPageNumbers().map(pageNum => (
          <button
            key={pageNum}
            className={pageNum === currentPage ? styles.pageBtnActive : styles.pageBtn}
            onClick={() => onPageChange(pageNum)}
          >
            {pageNum}
          </button>
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
