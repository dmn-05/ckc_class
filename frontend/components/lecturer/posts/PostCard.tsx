'use client';

import React from 'react';
import Image from 'next/image';
import styles from './PostsManagement.module.css';

export interface PostData {
  id: string;
  title: string;
  category: 'announcement' | 'discussion' | 'material' | 'question';
  date: string;
  is_published: boolean;
  is_pinned: boolean;
  authorName: string;
  views_count: number;
  commentsCount: number;
  image: string;
}

interface PostCardProps {
  post: PostData;
  onEdit: (post: PostData) => void;
  onDelete: (id: string) => void;
  onTogglePin: (id: string) => void;
  onTogglePublish: (id: string) => void;
}

import { useRouter } from 'next/navigation';

export default function PostCard({
  post,
  onEdit,
  onDelete,
  onTogglePin,
  onTogglePublish,
}: PostCardProps) {
  const router = useRouter();

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case 'announcement':
        return { styleClass: 'bg-[#3525cd]', label: 'HÀNH CHÍNH' };
      case 'material':
        return { styleClass: 'bg-[#6063ee]', label: 'ĐÀO TẠO' };
      case 'discussion':
        return { styleClass: 'bg-[#a44100]', label: 'SỰ KIỆN' };
      case 'question':
      default:
        return { styleClass: 'bg-[#4648d4]', label: 'HỎI ĐÁP' };
    }
  };

  const catStyle = getCategoryStyles(post.category);

  return (
    <div className={styles.cardWrapper} onClick={() => router.push(`/lecturer/posts/${post.id}`)} style={{ cursor: 'pointer' }}>
      {/* Image container */}
      <div className={styles.cardImageContainer}>
        <img
          src={post.image}
          alt={post.title}
          className={styles.cardImage}
        />
        <span className={`${styles.cardCategoryBadge} ${catStyle.styleClass}`}>
          {catStyle.label}
        </span>
      </div>

      {/* Content area */}
      <div className={styles.cardContent}>
        <div className={styles.cardContentInner}>
          {/* Date and Status */}
          <div className={styles.cardMeta}>
            <span className={styles.cardMetaDate}>
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>calendar_today</span>
              {post.date}
            </span>
            {post.is_published ? (
              <span className={`${styles.cardStatusBadge} ${styles.cardStatusPublished}`}>Đã đăng</span>
            ) : post.category === 'discussion' ? (
              <span className={`${styles.cardStatusBadge} ${styles.cardStatusScheduled}`}>Lên lịch</span>
            ) : (
              <span className={`${styles.cardStatusBadge} ${styles.cardStatusDraft}`}>Bản nháp</span>
            )}
          </div>

          {/* Title */}
          <h4 className={styles.cardTitle}>
            {post.title}
          </h4>

          {/* Author */}
          <div className={styles.cardAuthor}>
            <div className={styles.cardAuthorAvatar}>
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>person</span>
            </div>
            <span className={styles.cardAuthorName}>{post.authorName}</span>
          </div>
        </div>

        {/* Footer (Stats & Actions) */}
        <div className={styles.cardFooter}>
          <div className={styles.cardStats}>
            <span className={styles.cardStatItem} title="Lượt xem">
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>visibility</span> 
              {post.views_count >= 1000 ? (post.views_count / 1000).toFixed(1) + 'k' : post.views_count}
            </span>
            <span className={styles.cardStatItem} title="Bình luận">
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chat_bubble_outline</span> 
              {post.commentsCount}
            </span>
          </div>
          
          <div className={styles.cardActions}>
            <button 
              onClick={(e) => { e.stopPropagation(); onEdit(post); }}
              className={styles.cardActionButton}
              title="Chỉnh sửa"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>edit</span>
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); onDelete(post.id); }}
              className={styles.cardActionButton}
              title="Xóa"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>delete</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
