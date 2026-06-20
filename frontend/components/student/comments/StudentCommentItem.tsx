'use client';

import React, { useState } from 'react';
import styles from './StudentComments.module.css';
import StudentCommentForm from './StudentCommentForm';

export interface ReplyType {
  id: string;
  author: string;
  content: string;
  date: string;
  isCurrentUser: boolean;
}

export interface StudentCommentType {
  id: string;
  author: string;
  content: string;
  date: string;
  isCurrentUser: boolean;
  replies: ReplyType[];
}

interface StudentCommentItemProps {
  comment: StudentCommentType;
  onReplySubmit: (commentId: string, content: string) => void;
}

export default function StudentCommentItem({ comment, onReplySubmit }: StudentCommentItemProps) {
  const [showReplyForm, setShowReplyForm] = useState(false);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  const handleReplySubmit = (content: string) => {
    onReplySubmit(comment.id, content);
    setShowReplyForm(false);
  };

  return (
    <div className={styles.commentThread}>
      {/* Main Comment */}
      <div className={styles.commentCard}>
        <div className={`${styles.avatar} ${comment.isCurrentUser ? styles.currentUser : ''}`}>
          {getInitials(comment.author)}
        </div>
        <div className={styles.commentContent}>
          <div className={styles.commentHeader}>
            <span className={styles.authorName}>{comment.author}</span>
            <span className={styles.commentDate}>• {comment.date}</span>
          </div>
          <div className={styles.commentBody}>{comment.content}</div>
          <button className={styles.replyBtn} onClick={() => setShowReplyForm(!showReplyForm)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="14" height="14">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
            </svg>
            Trả lời
          </button>

          {showReplyForm && (
            <StudentCommentForm
              isReply
              placeholder={`Trả lời ${comment.author}...`}
              onSubmit={handleReplySubmit}
              onCancel={() => setShowReplyForm(false)}
            />
          )}
        </div>
      </div>

      {/* Replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className={styles.repliesContainer}>
          {comment.replies.map((reply) => (
            <div key={reply.id} className={styles.commentCard}>
              <div className={`${styles.avatar} ${reply.isCurrentUser ? styles.currentUser : ''}`}>
                {getInitials(reply.author)}
              </div>
              <div className={styles.commentContent}>
                <div className={styles.commentHeader}>
                  <span className={styles.authorName}>{reply.author}</span>
                  <span className={styles.commentDate}>• {reply.date}</span>
                </div>
                <div className={styles.commentBody}>{reply.content}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
