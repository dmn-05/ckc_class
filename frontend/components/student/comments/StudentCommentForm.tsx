'use client';

import React, { useState } from 'react';
import styles from './StudentComments.module.css';

interface StudentCommentFormProps {
  onSubmit: (content: string) => void;
  onCancel?: () => void;
  isReply?: boolean;
  placeholder?: string;
}

export default function StudentCommentForm({
  onSubmit,
  onCancel,
  isReply = false,
  placeholder = 'Viết bình luận của bạn...',
}: StudentCommentFormProps) {
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (content.trim()) {
      onSubmit(content.trim());
      setContent('');
      if (onCancel) onCancel(); // Close form after submit if it's a reply
    }
  };

  return (
    <div className={`${styles.formContainer} ${isReply ? styles.isReply : ''}`}>
      <textarea
        className={styles.textarea}
        placeholder={placeholder}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className={styles.formActions}>
        {onCancel && (
          <button className={`${styles.btn} ${styles.btnCancel}`} onClick={onCancel}>
            Hủy
          </button>
        )}
        <button
          className={`${styles.btn} ${styles.btnPrimary}`}
          onClick={handleSubmit}
          disabled={!content.trim()}
        >
          {isReply ? 'Trả lời' : 'Gửi bình luận'}
        </button>
      </div>
    </div>
  );
}
