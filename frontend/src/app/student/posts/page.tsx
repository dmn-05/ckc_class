'use client';

import React, { useState } from 'react';
import styles from '@/components/student/posts/PostsManagement.module.css';
import Link from 'next/link';
import StudentPostFormModal from '@/components/student/posts/StudentPostFormModal';

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
  image: string;
  isQuestion?: boolean;
}

const API_BASE_URL = 'http://localhost:8000/api';

export default function StudentPostsList() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterCategory, setFilterCategory] = useState('');

  React.useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/student/posts?lop_hoc_phan_id=1`, {
        headers: { 'Accept': 'application/json' }
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
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8WWy8nQSdwRuA1IEGzFFn5Hb9bq-PbFhEW8PLv_2-yg-4bkR-2Qo2l3Udk_b4zbXrIKNzKK90IpA-sprj_X_1Ex_FPPN8B3G1WTA2XGYfeIDPoYDt5S3bIR-8fEylVnjJSF_STYGiLQrougKhvWOyzeYz9fBSXm7N-mHo9y81-z7PIyjgfza5CkskVqbDv8rY1NRnRtDI9ZoXS8nFS-oaWGZgXj5D4UMtFW0HnmAwJDQuzHIBlGhqILtjoIOd7jeYPdjnseCnV2o',
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

  const handlePostSubmit = async (postData: { title: string; category: string; isPublished: boolean; content: string; lopHocPhanId: number; file?: File | null }) => {
    try {
      const formData = new FormData();
      formData.append('tieu_de', postData.title);
      formData.append('noi_dung', postData.content);
      formData.append('loai_bai_viet', postData.category);
      formData.append('trang_thai', postData.isPublished ? 'hien_thi' : 'an');
      formData.append('lop_hoc_phan_id', postData.lopHocPhanId.toString());
      
      if (postData.file) {
        formData.append('file', postData.file);
      }

      const response = await fetch(`${API_BASE_URL}/student/posts`, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      });

      if (!response.ok) {
        const errData = await response.json();
        alert('Lỗi khi đăng bài: ' + (errData.message || 'Vui lòng kiểm tra lại thông tin.'));
        return;
      }

      setIsModalOpen(false);
      alert('Đăng bài viết thành công!');
      fetchPosts(); // Reload after submit
    } catch (error) {
      console.error('Failed to submit question', error);
      alert('Lỗi kết nối mạng, vui lòng thử lại.');
    }
  };

  const getBadgeClass = (category: string) => {
    if (category === 'Thông báo') return styles.badgeDTT;
    if (category === 'Tài liệu') return styles.badgeHC;
    if (category === 'Bài tập') return styles.postCardBadge + ' bg-[#a44100] text-white';
    return styles.badgeQuestion;
  };

  const displayedPosts = filterCategory ? posts.filter(p => p.rawCategory === filterCategory) : posts;

  return (
    <div className={styles.pageContainerList}>
      <div className={styles.pageHeader}>
        <div>
          <h2 className={styles.pageTitle}>Bài viết & Thảo luận</h2>
          <div className={styles.breadcrumb}>Lớp học phần / Bài viết</div>
        </div>
        <button className={styles.btnSubmitPrimary} onClick={() => setIsModalOpen(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Đăng câu hỏi / Thảo luận
        </button>
      </div>

      <div className={styles.sectionBox} style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #e0e3e5', display: 'flex', gap: '1rem', backgroundColor: '#f2f4f6' }}>
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
        </div>

        <div className={styles.gridContainer} style={{ padding: '1.5rem' }}>
          {displayedPosts.map(post => (
            <Link href={`/student/posts/${post.id}`} key={post.id} className={styles.postCard} style={{ textDecoration: 'none' }}>
              <div className={styles.postCardImageContainer}>
                <img src={post.image} alt={post.title} className={styles.postCardImage} />
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

      <StudentPostFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handlePostSubmit}
      />
    </div>
  );
}
