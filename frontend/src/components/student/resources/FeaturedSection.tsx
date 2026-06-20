'use client';

import React from 'react';
import styles from './ResourcesManagement.module.css';

export default function FeaturedSection() {
  return (
    <div className={styles.bentoGrid}>
      <div className={styles.bentoFeatured}>
        <div className={styles.bentoFeaturedContent}>
          <span className={styles.featuredBadge}>Nổi bật</span>
          <h3 className={styles.featuredTitle}>Khóa học chuyên sâu: Design System Mastery</h3>
          <p className={styles.featuredDesc}>Trọn bộ 24 video và tài liệu hướng dẫn xây dựng hệ thống thiết kế từ con số 0. Chỉ dành cho sinh viên lớp nâng cao.</p>
          <button className={styles.btnFeatured}>
            <span>Truy cập ngay</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
        <div className={styles.featuredImageWrapper}>
          <img 
            className={styles.featuredImage} 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJW38f57H8qtGDRivfip6H57Z7rbfSVrkpsQxFlXlYuJ17Sr8uyXoLYy2alYQdONr_9oU7NgKb-sTUDL-9c1oiEe5cpeB1shwm05v79gYZ3UjZEYT6oWEDX8x8cLlIr1urchs6LLGD6rQnxvMlkHpc7RxLiVh_cYSc3ObaoeAy7i8_hK6z0t9W3Jxlw8Tco8g256IjQopHKAw11AnLr5KNUTf4VTcPy05nFLiCGwSeSP22dlysp5O0Cnvi7zd6wN-U0fhV2I0XOgA" 
            alt="Design System Mastery" 
          />
        </div>
      </div>
      
      <div className={styles.bentoStats}>
        <div>
          <h3 className={styles.statsSectionTitle}>Thống kê</h3>
          <p className={styles.statsSubtitle}>Hoạt động của bạn</p>
        </div>
        
        <div className={styles.statsRows}>
          <div>
            <div className={styles.statRowHeader}>
              <span>Tài liệu đã xem</span>
              <span className={styles.statValuePrimary}>12/45</span>
            </div>
            <div className={styles.statBarContainer}>
              <div className={styles.statBarPrimary} style={{ width: '26%' }}></div>
            </div>
          </div>
          
          <div>
            <div className={styles.statRowHeader}>
              <span>Video hoàn thành</span>
              <span className={styles.statValueSecondary}>4/8</span>
            </div>
            <div className={styles.statBarContainer}>
              <div className={styles.statBarSecondary} style={{ width: '50%' }}></div>
            </div>
          </div>
        </div>
        
        <p className={styles.statsQuote}>"Học tập là một hành trình, không phải là đích đến."</p>
      </div>
    </div>
  );
}
