'use client';

import React from 'react';
import Image from 'next/image';
import styles from './PostsManagement.module.css';

/** Lấy 2 chữ cái đầu: chữ đầu họ + chữ đầu tên */
function getInitials(fullName: string): string {
  if (!fullName) return 'GV';
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  const first = parts[0].charAt(0).toUpperCase();
  const last = parts[parts.length - 1].charAt(0).toUpperCase();
  return first + last;
}

export interface PostData {
  id: string;
  title: string;
  category: 'thong_bao' | 'tai_lieu' | 'bai_tap' | string;
  date: string;
  is_published: boolean;
  is_pinned: boolean;
  authorName: string;
  views_count: number;
  commentsCount: number;
  image: string | null;
  authorAvatar?: string | null;
  attachment?: { name: string, url: string };
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
      case 'tai_lieu':
        return { styleClass: 'bg-[#6063ee]', label: 'TÀI LIỆU' };
      case 'bai_tap':
        return { styleClass: 'bg-[#a44100]', label: 'BÀI TẬP' };
      case 'thong_bao':
      default:
        return { styleClass: 'bg-[#3525cd]', label: 'THÔNG BÁO' };
    }
  };

  const catStyle = getCategoryStyles(post.category);

  return (
    <div className={styles.cardWrapper} onClick={() => router.push(`/lecturer/posts/${post.id}`)} style={{ cursor: 'pointer' }}>
      {/* Image container */}
      <div className={styles.cardImageContainer}>
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className={styles.cardImage}
          />
        ) : (
          <div className={styles.cardImage} style={{ 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: '#f0f0f5', color: '#aaa'
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: '48px' }}>image</span>
          </div>
        )}
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
            ) : post.category === 'bai_tap' ? (
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
            {post.authorAvatar ? (
              <img 
                src={post.authorAvatar} 
                alt={post.authorName}
                className={styles.cardAuthorAvatar} 
                style={{ objectFit: 'cover' }}
              />
            ) : (
              <div 
                className={styles.cardAuthorAvatar} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  backgroundColor: '#3b82f6', 
                  color: '#fff',
                  fontSize: '0.65rem',
                  fontWeight: '600'
                }}
              >
                {getInitials(post.authorName)}
              </div>
            )}
            <span className={styles.cardAuthorName}>{post.authorName}</span>
          </div>

          {/* Attachment */}
          {post.attachment && (
            <div 
              className={styles.cardAttachment} 
              onClick={(e) => { 
                e.stopPropagation(); 
                window.open(`http://localhost:8000${post.attachment?.url}`, '_blank');
              }}
              title="Nhấn để xem / tải về"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '16px', marginRight: '6px', color: '#5f6368' }}>attach_file</span>
              <span className={styles.cardAttachmentName}>{post.attachment.name}</span>
            </div>
          )}
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
