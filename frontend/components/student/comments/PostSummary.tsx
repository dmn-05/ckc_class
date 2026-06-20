'use client';

import React from 'react';
import styles from './CommentsManagement.module.css';

export default function PostSummary() {
  return (
    <section className={styles.sectionBox}>
      <div className={styles.postSummaryHeader}>
        <div>
          <div className={styles.postTags}>
            <span className={styles.tagBadge}>Kiến trúc phần mềm</span>
            <span className={styles.postDate}>• 15 tháng 10, 2023</span>
          </div>
          <h3 className={styles.postTitle}>Phân tích ưu nhược điểm của Microservices trong hệ thống quản lý đào tạo</h3>
          
          <div className={styles.authorInfo}>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLjhx4Q2PaQiT2ncDj3RABa0263YBCgk_4kG4-UlmvpMMUNdOpgN88LHJyE4zmHKDhGXsSlmEJ-PQbICdUokejTOs60a6sd0hcqdFv2AMgSdT9gkh0g8zUqpZU8vh045JSVie6xnlwtxMtODQjavL3TnhAnj_llLSOTguIEeCd_ep_U9tuMGpq82B6g43SU-1hG0sbNteAn2jz24XUVeil5UYcgtGSA-3dnUi6DyjWTUFyytiZZVvfUyET1DjhroCdBALWmdClQHE" 
              alt="Author" 
              className={styles.authorAvatar} 
            />
            <div>
              <p className={styles.authorName}>ThS. Nguyễn Văn A</p>
              <p className={styles.authorRole}>Giảng viên khoa Công nghệ Thông tin</p>
            </div>
          </div>
        </div>
        
        <button className={styles.btnViewPost}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span>Xem bài viết</span>
        </button>
      </div>
    </section>
  );
}
