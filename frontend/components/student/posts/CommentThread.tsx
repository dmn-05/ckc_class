'use client';

import React, { useState } from 'react';
import styles from './PostsManagement.module.css';
import CommentInput from './CommentInput';

export interface CommentData {
  id: string;
  authorId?: number | string;
  authorName: string;
  authorAvatar: string;
  role: 'student' | 'teacher';
  content: string;
  timeAgo: string;
  isDeleted: boolean;
  isEdited?: boolean;
  replies?: CommentData[];
}

interface CommentThreadProps {
  comment: CommentData;
  isNested?: boolean;
  onReplySubmit?: (parentId: string, content: string) => void;
  onDelete?: (id: string) => void;
  onEdit?: (id: string, newContent: string) => void;
  currentUser: { id?: number | string, name: string, role: string };
}

export default function CommentThread({ comment, isNested = false, onReplySubmit, onDelete, onEdit, currentUser }: CommentThreadProps) {
  const [isReplying, setIsReplying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  if (comment.isDeleted) {
    return (
      <div className={`${styles.commentBlock} ${isNested ? styles.commentBlockNested : ''}`}>
        {isNested && <div className={styles.threadLine}></div>}
        <div className={styles.commentAvatarDeleted}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
          </svg>
        </div>
        <div className={styles.commentContentArea}>
          <div className={styles.commentDeletedBubble}>
            Bình luận này đã bị xóa
          </div>
        </div>
      </div>
    );
  }

  const handleReplySubmit = (content: string) => {
    if (onReplySubmit) {
      onReplySubmit(comment.id, content);
      setIsReplying(false);
    }
  };

  const handleEditSubmit = (content: string) => {
    if (onEdit) {
      onEdit(comment.id, content);
      setIsEditing(false);
    }
  };

  const isOwner = comment.authorId && currentUser.id 
    ? comment.authorId.toString() === currentUser.id.toString()
    : comment.authorName === currentUser.name && comment.role === currentUser.role;

  return (
    <div className={styles.threadContainer}>
      <div className={`${styles.commentBlock} ${isNested ? styles.commentBlockNested : ''}`}>
        {isNested && <div className={styles.threadLine}></div>}
        
        <img src={comment.authorAvatar} alt={comment.authorName} className={styles.commentAvatar} />
        
        <div className={styles.commentContentArea}>
          {isEditing ? (
            <div className={styles.commentBubble} style={{ background: 'transparent', padding: 0 }}>
               <CommentInput 
                  onSubmit={handleEditSubmit} 
                  onCancel={() => setIsEditing(false)} 
                  initialContent={comment.content}
                  submitText="Lưu thay đổi"
                  autoFocus 
                />
            </div>
          ) : (
            <>
              <div className={`${styles.commentBubble} ${comment.role === 'teacher' ? styles.commentBubbleTeacher : ''}`}>
                <div className={styles.commentHeader}>
                  <div className={styles.commenterInfo}>
                    <span className={`${styles.commenterName} ${comment.role === 'teacher' ? styles.commenterNameTeacher : ''}`}>
                      {comment.authorName}
                    </span>
                    {comment.role === 'teacher' && (
                      <span className={styles.teacherBadge}>Giảng viên</span>
                    )}
                  </div>
                  <span className={styles.commentTime}>
                    {comment.timeAgo} 
                    {comment.isEdited && <span className={styles.editedBadge}>(Đã chỉnh sửa)</span>}
                  </span>
                </div>
                <p className={styles.commentText}>{comment.content}</p>
              </div>
              
              <div className={styles.commentActions}>
                <button className={`${styles.actionBtn} ${styles.actionBtnReply}`} onClick={() => setIsReplying(!isReplying)}>
                  <svg className={styles.actionBtnIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>
                  <span className={styles.actionBtnText}>Phản hồi</span>
                </button>
                
                {isOwner && (
                  <>
                    <button className={`${styles.actionBtn} ${styles.actionBtnEdit}`} onClick={() => setIsEditing(true)}>
                      <svg className={styles.actionBtnIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                      <span className={styles.actionBtnText}>Chỉnh sửa</span>
                    </button>
                    <button className={`${styles.actionBtn} ${styles.actionBtnDelete}`} onClick={() => onDelete && onDelete(comment.id)}>
                      <svg className={styles.actionBtnIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      <span className={styles.actionBtnText}>Xóa</span>
                    </button>
                  </>
                )}
              </div>
            </>
          )}

          {isReplying && (
            <div className={styles.inlineReplyForm}>
              <CommentInput 
                onSubmit={handleReplySubmit} 
                onCancel={() => setIsReplying(false)} 
                placeholder={`Phản hồi ${comment.authorName}...`}
                submitText="Gửi phản hồi"
                userAvatar={`https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.name)}&background=3525cd&color=fff`}
                autoFocus 
              />
            </div>
          )}
        </div>
      </div>

      {comment.replies && comment.replies.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {comment.replies.map(reply => (
            <CommentThread 
              key={reply.id} 
              comment={reply} 
              isNested={true} 
              onReplySubmit={(childId, content) => onReplySubmit && onReplySubmit(comment.id, content)} 
              onDelete={onDelete} 
              onEdit={onEdit}
              currentUser={currentUser}
            />
          ))}
        </div>
      )}
    </div>
  );
}
