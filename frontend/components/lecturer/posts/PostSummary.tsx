'use client';

import React from 'react';
import styles from './PostsManagement.module.css';

interface PostSummaryProps {
  post: {
    title: string;
    content: string;
    date: string;
    authorName: string;
    authorAvatar?: string;
    category: string;
    attachment?: { name: string, url: string };
  };
}

export default function PostSummary({ post }: PostSummaryProps) {
  if (!post) return null;
  return (
    <section className={styles.sectionBox}>
      <div className={styles.postSummaryHeader}>
        <div>
          <div className={styles.postTags}>
            <span className={styles.tagBadge}>{post.category}</span>
            <span className={styles.postDate}>• {post.date}</span>
          </div>
          <h3 className={styles.postTitle}>{post.title}</h3>
          
          <div className={styles.authorInfo}>
            <img 
              src={post.authorAvatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(post.authorName)}&background=random`} 
              alt="Author" 
              className={styles.authorAvatar} 
            />
            <div>
              <p className={styles.authorName}>{post.authorName}</p>
              <p className={styles.authorRole}>Giảng viên</p>
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
      <div className={styles.postContentBody}>
        <p>{post.content}</p>
        
        {post.attachment && (
          <div style={{ marginTop: '1rem' }}>
            <a href={`http://localhost:8000${post.attachment.url}`} target="_blank" rel="noopener noreferrer" className={styles.cardAttachment}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
              <span className={styles.cardAttachmentName}>{post.attachment.name}</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
