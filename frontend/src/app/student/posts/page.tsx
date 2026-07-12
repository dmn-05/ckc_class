'use client';

import React, { useState } from 'react';
import styles from '@/components/student/posts/PostsManagement.module.css';
import Link from 'next/link';
import { authHeaders } from '@/lib/auth';

interface PostData {
  id: string;
  title: string;
  category: string;
  rawCategory: string;
  date: string;
  status: string;
  authorName: string;
  views: number;
  commentsCount: number;
  image: string | null;
  isQuestion?: boolean;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export default function StudentPostsList() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [filterCategory, setFilterCategory] = useState('');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest' | 'popular'>('newest');

  React.useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/student/posts`, {
        headers: authHeaders()
      });
      const json = await response.json();
      if (json.data) {
        const mappedPosts = json.data.map((item: any) => {
          let attachment = undefined;
          if (item.tep_tin_bai_viet && item.tep_tin_bai_viet.length > 0) {
            const fileData = item.tep_tin_bai_viet[0].tep_tin;
            attachment = { name: fileData.ten_file, url: fileData.duong_dan };
          }
          
          return {
            id: item.id.toString(),
            authorName: item.nguoi_tao?.ho_ten || 'Unknown',
            category: item.loai_bai_viet === 'thong_bao' ? 'Thông báo' : 
                      item.loai_bai_viet === 'tai_lieu' ? 'Tài liệu' :
                      item.loai_bai_viet === 'bai_tap' ? 'Bài tập' : 'Thảo luận',
            rawCategory: item.loai_bai_viet || 'bai_viet',
            date: new Date(item.ngay_tao).toLocaleDateString('vi-VN'),
            status: 'Đã đăng',
            title: item.tieu_de,
            views: item.luot_xem || 0, 
            commentsCount: item.binh_luan?.length || 0,
            image: item.hinh_anh || null,
            isQuestion: item.loai_bai_viet === 'bai_viet',
            attachment: attachment
          };
        });
        setPosts(mappedPosts);
      }
    } catch (error) {
      console.error('Failed to fetch posts', error);
    }
  };

  const getBadgeClass = (category: string) => {
    if (category === 'Thông báo') return styles.badgeDTT;
    if (category === 'Tài liệu') return styles.badgeHC;
    if (category === 'Bài tập') return styles.postCardBadge + ' bg-[#a44100] text-white';
    return styles.badgeQuestion;
  };

  const displayedPosts = (filterCategory ? posts.filter(p => p.rawCategory === filterCategory) : posts)
    .slice()
    .sort((a, b) => {
      if (sortOrder === 'newest') return parseInt(b.id) - parseInt(a.id);
      if (sortOrder === 'oldest') return parseInt(a.id) - parseInt(b.id);
      // popular: lượt xem giảm dần
      return b.views - a.views;
    });

  return (
    <div className={styles.pageContainerList}>
      <div className={styles.pageHeader}>
        <div>
          <h2 className={styles.pageTitle}>Bài viết</h2>
        </div>
      </div>

      <div className={styles.sectionBox} style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #e0e3e5', display: 'flex', gap: '1rem', backgroundColor: '#f2f4f6', flexWrap: 'wrap', alignItems: 'center' }}>
          <select 
            className={styles.sortSelect} 
            style={{ backgroundColor: '#ffffff', border: '1px solid #e0e3e5', padding: '0.5rem', borderRadius: '0.5rem', color: '#191c1e' }}
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="">Tất cả danh mục</option>
            <option value="thong_bao">Thông báo</option>
            <option value="tai_lieu">Tài liệu</option>
            <option value="bai_tap">Bài tập</option>
            <option value="bai_viet">Thảo luận</option>
          </select>
          <select
            className={styles.sortSelect}
            style={{ backgroundColor: '#ffffff', border: '1px solid #e0e3e5', padding: '0.5rem', borderRadius: '0.5rem', color: '#191c1e' }}
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as 'newest' | 'oldest' | 'popular')}
          >
            <option value="newest">Mới nhất</option>
            <option value="oldest">Cũ nhất</option>
            <option value="popular">Nổi bật</option>
          </select>
          <span style={{ marginLeft: 'auto', fontSize: '13px', color: '#777587' }}>
            {displayedPosts.length} bài viết
          </span>
        </div>

        <div className={styles.gridContainer} style={{ padding: '1.5rem' }}>
          {displayedPosts.map(post => (
            <Link href={`/student/posts/${post.id}`} key={post.id} className={styles.postCard} style={{ textDecoration: 'none' }}>
              <div className={styles.postCardImageContainer}>
                {post.image ? (
                  <img src={post.image} alt={post.title} className={styles.postCardImage} />
                ) : (
                  <div className={styles.postCardImage} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f5', color: '#aaa' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '48px' }}>image</span>
                  </div>
                )}
                <span className={`${styles.postCardBadge} ${getBadgeClass(post.category)}`}>
                  {post.category}
                </span>
              </div>
              <div className={styles.postCardContent}>
                <div className={styles.postCardMeta}>
                  <div className={styles.postCardMetaItem}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="14" height="14">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {post.date}
                  </div>
                  <div className={styles.postCardStatus}>{post.status}</div>
                </div>
                
                <h4 className={styles.postCardTitle}>{post.title}</h4>
                
                <div className={styles.postCardAuthor}>
                  <div className={styles.postCardAuthorIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className={styles.postCardAuthorName}>{post.authorName}</span>
                </div>
                
                <div className={styles.postCardFooter}>
                  <div className={styles.postCardStats}>
                    <span className={styles.postCardMetaItem}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {post.views}
                    </span>
                    <span className={styles.postCardMetaItem}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      {post.commentsCount}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
