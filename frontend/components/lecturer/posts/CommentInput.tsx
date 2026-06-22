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
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLjhx4Q2PaQiT2ncDj3RABa0263YBCgk_4kG4-UlmvpMMUNdOpgN88LHJyE4zmHKDhGXsSlmEJ-PQbICdUokejTOs60a6sd0hcqdFv2AMgSdT9gkh0g8zUqpZU8vh045JSVie6xnlwtxMtODQjavL3TnhAnj_llLSOTguIEeCd_ep_U9tuMGpq82B6g43SU-1hG0sbNteAn2jz24XUVeil5UYcgtGSA-3dnUi6DyjWTUFyytiZZVvfUyET1DjhroCdBALWmdClQHE" 
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
