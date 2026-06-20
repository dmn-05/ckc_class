'use client';

import React, { useState } from 'react';
import styles from './PostsManagement.module.css';

interface CommentInputProps {
  onSubmit: (content: string) => void;
  onCancel?: () => void;
  placeholder?: string;
  submitText?: string;
  initialContent?: string;
  autoFocus?: boolean;
}

export default function CommentInput({ 
  onSubmit, 
  onCancel, 
  placeholder = 'Viết bình luận của bạn...', 
  submitText = 'Gửi bình luận',
  initialContent = '',
  autoFocus = false 
}: CommentInputProps) {
  const [content, setContent] = useState(initialContent);

  const handleSubmit = () => {
    if (content.trim()) {
      onSubmit(content);
      setContent('');
    }
  };

  return (
    <section className={styles.sectionBox} style={initialContent ? { border: 'none', padding: 0, boxShadow: 'none' } : {}}>
      <div className={styles.commentInputLayout}>
        {!initialContent && (
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDN8fBc31mXpjXfIUWzQUz7ydSBdlRfCPFq2JzIezn6hCqbNV_0BkfjHJU4-YMMpf8ZkSS6sc9ikYDxX5HbSyhtez5-oJPZnXpab6zkHtGKKRO1UTvp5W_hrYEGNQ23HS3uJX4WjopfZV25FKUVWkCT060l-NwmaLKKS6165wLgpimw18EvyjEW67X6s1u4s97A1qNP6_594w9EUDHb7EEE_mDGjYLCo6wVgJ33Firdxa4_ZweR_1Av7P_3d4dV_PKVVjoERknSupg" 
            alt="Current User" 
            className={styles.inputAvatar} 
          />
        )}
        <div className={styles.inputContainer}>
          <textarea 
            className={styles.commentTextarea}
            placeholder={placeholder}
            rows={3}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            autoFocus={autoFocus}
          />
          <div className={styles.inputActions}>
            {onCancel && (
              <button className={styles.btnCancel} onClick={onCancel}>
                Hủy
              </button>
            )}
            <button className={styles.btnSubmit} onClick={handleSubmit}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
              <span>{submitText}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
