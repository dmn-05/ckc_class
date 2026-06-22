'use client';

import React from 'react';
import styles from './PostsManagement.module.css';

export default function Pagination() {
  return (
    <div className={styles.paginationContainer}>
      <button className={styles.pageBtn} title="Previous">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button className={`${styles.pageBtn} ${styles.pageBtnActive}`}>1</button>
      <button className={styles.pageBtn}>2</button>
      <button className={styles.pageBtn}>3</button>
      
      <span className={styles.pageEllipsis}>...</span>
      
      <button className={styles.pageBtn} title="Next">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
