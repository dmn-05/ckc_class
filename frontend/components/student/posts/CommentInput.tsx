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
  userAvatarUrl?: string | null;
  userName?: string;
}

/** Lấy 2 chữ cái đầu: chữ đầu họ + chữ đầu tên */
function getInitials(fullName: string): string {
  if (!fullName) return 'SV';
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  const first = parts[0].charAt(0).toUpperCase();
  const last = parts[parts.length - 1].charAt(0).toUpperCase();
  return first + last;
}

export default function CommentInput({ 
  onSubmit, 
  onCancel, 
  placeholder = 'Viết bình luận của bạn...', 
  submitText = 'Gửi bình luận',
  initialContent = '',
  autoFocus = false,
  userAvatarUrl = null,
  userName = 'Sinh viên'
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
          userAvatarUrl ? (
            <img 
              src={userAvatarUrl} 
              alt={userName} 
              className={styles.inputAvatar} 
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <div 
              className={styles.inputAvatar} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                backgroundColor: '#3b82f6', 
                color: '#fff',
                fontSize: '0.875rem',
                fontWeight: '600',
                flexShrink: 0
              }}
            >
              {getInitials(userName)}
            </div>
          )
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
