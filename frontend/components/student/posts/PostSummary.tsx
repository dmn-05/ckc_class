'use client';

import React from 'react';
import styles from './PostsManagement.module.css';

import { downloadFile } from '@/utils/download';

/** Lấy 2 chữ cái đầu: chữ đầu họ + chữ đầu tên */
function getInitials(fullName: string): string {
  if (!fullName) return 'SV';
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  const first = parts[0].charAt(0).toUpperCase();
  const last = parts[parts.length - 1].charAt(0).toUpperCase();
  return first + last;
}

interface PostSummaryProps {
  post: {
    title: string;
    content: string;
    date: string;
    authorName: string;
    authorRole?: string;
    authorAvatar?: string;
    category: string;
    image?: string;
    attachment?: {
      name: string;
      url: string;
    };
  };
}

export default function PostSummary({ post }: PostSummaryProps) {
  if (!post) return null;

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    if (post.attachment) {
      downloadFile(post.attachment.url, post.attachment.name);
    }
  };

  return (
    <section className={styles.sectionBox}>
      {post.image && (
        <div style={{ width: '100%', height: '320px', borderRadius: '0.75rem', overflow: 'hidden', marginBottom: '1.5rem' }}>
          <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      )}
      <div className={styles.postSummaryHeader}>
        <div>
          <div className={styles.postTags}>
            <span className={styles.tagBadge}>{post.category}</span>
            <span className={styles.postDate}>• {post.date}</span>
          </div>
          <h3 className={styles.postTitle}>{post.title}</h3>
          
          <div className={styles.authorInfo}>
            {post.authorAvatar ? (
              <img 
                src={post.authorAvatar} 
                alt="Author" 
                className={styles.authorAvatar} 
                style={{ objectFit: 'cover' }}
              />
            ) : (
              <div 
                className={styles.authorAvatar} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  backgroundColor: '#3b82f6', 
                  color: '#fff',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}
              >
                {getInitials(post.authorName)}
              </div>
            )}
            <div>
              <p className={styles.authorName}>{post.authorName}</p>
              <p className={styles.authorRole}>{post.authorRole || 'Giảng viên'}</p>
            </div>
          </div>
          
          <div style={{ marginTop: '1.5rem', fontSize: '1rem', color: '#191c1e', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>
            {post.content}
          </div>
        </div>
      </div>
      
      {post.attachment && (
        <div className={styles.postContentBody}>
          <div style={{ padding: '1rem', border: '1px solid #e0e3e5', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', backgroundColor: '#f9f9fa' }}>
            <div style={{ padding: '0.5rem', backgroundColor: '#e2dfff', borderRadius: '50%', color: '#3525cd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
            </div>
            <div style={{ flex: 1, overflow: 'hidden' }}>
              <a href={post.attachment.url} target="_blank" rel="noopener noreferrer" style={{ color: '#191c1e', textDecoration: 'none', fontWeight: 600, display: 'block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {post.attachment.name}
              </a>
            </div>
            <a 
              href={post.attachment.url} 
              onClick={handleDownload}
              style={{ padding: '0.5rem 1rem', border: '1px solid #e0e3e5', borderRadius: '0.25rem', backgroundColor: '#ffffff', color: '#191c1e', cursor: 'pointer', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}
            >
              Tải xuống
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
