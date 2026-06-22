'use client';

import React, { useState } from 'react';
import styles from '@/components/student/posts/PostsManagement.module.css';
import Link from 'next/link';

interface PostData {
  id: string;
  title: string;
  category: string;
  date: string;
  status: string;
  authorName: string;
  views: number;
  commentsCount: number;
  image: string;
  isQuestion?: boolean;
}

const MOCK_POSTS: PostData[] = [
  {
    id: 'p1',
    title: 'Thông báo nghỉ lễ Quốc khánh 2/9 dành cho Cán bộ - Giảng viên - Sinh viên',
    category: 'Hành chính',
    date: '25 Thg 08, 2024',
    status: 'Đã đăng',
    authorName: 'Phòng Hành chính - Quản trị',
    views: 1200,
    commentsCount: 12,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8WWy8nQSdwRuA1IEGzFFn5Hb9bq-PbFhEW8PLv_2-yg-4bkR-2Qo2l3Udk_b4zbXrIKNzKK90IpA-sprj_X_1Ex_FPPN8B3G1WTA2XGYfeIDPoYDt5S3bIR-8fEylVnjJSF_STYGiLQrougKhvWOyzeYz9fBSXm7N-mHo9y81-z7PIyjgfza5CkskVqbDv8rY1NRnRtDI9ZoXS8nFS-oaWGZgXj5D4UMtFW0HnmAwJDQuzHIBlGhqILtjoIOd7jeYPdjnseCnV2o'
  },
  {
    id: 'p2',
    title: 'Lịch thi kết thúc học kỳ 1 - Năm học 2024-2025 (Chính thức)',
    category: 'Đào tạo',
    date: '22 Thg 08, 2024',
    status: 'Đã đăng',
    authorName: 'Phòng Đào tạo',
    views: 3500,
    commentsCount: 45,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC32z3XOi0PMPEhh8_edGAXa5Mt-C_EncIM50zRI6j7hlb5UXGuOlOZLOjW6LdMLDXQXHtKejlbieVdH47MmbEeepY4hE5bwogzM4kRL5rnkuUJdvtU0HpXLcNWpOOW8ZBCWhjspw4VM1U2pu_T-TxSqqspnau9IOFfnFE4wGnusIonpnqPSGIcvs6N1fRa11fhy9Mla5BOOUxl1InjNahfmNYFY0Zn-djxCKwql0oOFRHvCUwVbuFfQeCuJSnlWCWcI6XzeSlBUYE'
  },
  {
    id: 'p3',
    title: 'Hội thảo định hướng nghề nghiệp 2024: "Chinh phục nhà tuyển dụng"',
    category: 'Sự kiện',
    date: '20 Thg 08, 2024',
    status: 'Lên lịch',
    authorName: 'Trung tâm Hỗ trợ HSSV',
    views: 0,
    commentsCount: 0,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAe9J9iPr6e2C-U99NRQnifggovalC5mlCZvg5N-reu0gTtgDeDdP3TgW5Zu15y5QIKOfYtAVPVyMtBPLzFwSSdn0_8ZSdKdxn4acdhjqKw4yFUkxMyDviS-VOrTDkDI_w6_XGqPdmW2QyhGwG54rpO_-1MwsjN86lnvtRjGFACzzg_bi81LtW9WNsoqhBXoe_3dToUNZiovBEUJ0cjbioajlUVu-cELO1OJj-_a6IWL9EPpK4DjyOY2jRF58kETSYHICeF1vSfVCw'
  }
];

export default function StudentPostsList() {
  const [posts, setPosts] = useState<PostData[]>(MOCK_POSTS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const handlePostSubmit = () => {
    if (newTitle.trim() && newContent.trim()) {
      const newPost: PostData = {
        id: `q-${Date.now()}`,
        title: newTitle,
        category: 'Hỏi đáp',
        date: 'Vừa xong',
        status: 'Mới',
        authorName: 'Nguyễn Văn Sinh Viên',
        views: 0,
        commentsCount: 0,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDN8fBc31mXpjXfIUWzQUz7ydSBdlRfCPFq2JzIezn6hCqbNV_0BkfjHJU4-YMMpf8ZkSS6sc9ikYDxX5HbSyhtez5-oJPZnXpab6zkHtGKKRO1UTvp5W_hrYEGNQ23HS3uJX4WjopfZV25FKUVWkCT060l-NwmaLKKS6165wLgpimw18EvyjEW67X6s1u4s97A1qNP6_594w9EUDHb7EEE_mDGjYLCo6wVgJ33Firdxa4_ZweR_1Av7P_3d4dV_PKVVjoERknSupg', // Use avatar as fallback image for questions
        isQuestion: true
      };
      setPosts([newPost, ...posts]);
      setNewTitle('');
      setNewContent('');
      setIsModalOpen(false);
    }
  };

  const getBadgeClass = (category: string) => {
    if (category === 'Đào tạo') return styles.badgeDTT;
    if (category === 'Hành chính') return styles.badgeHC;
    if (category === 'Sự kiện') return styles.postCardBadge + ' bg-[#a44100]';
    return styles.badgeQuestion;
  };

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
          <select className={styles.sortSelect} style={{ backgroundColor: '#ffffff', border: '1px solid #e0e3e5', padding: '0.5rem', borderRadius: '0.5rem', color: '#191c1e' }}>
            <option>Tất cả danh mục</option>
            <option>Đào tạo</option>
            <option>Hành chính</option>
            <option>Sự kiện</option>
            <option>Hỏi đáp</option>
          </select>
        </div>

        <div className={styles.gridContainer} style={{ padding: '1.5rem' }}>
          {posts.map(post => (
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

      {isModalOpen && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>Đăng câu hỏi / thảo luận</h3>
              <button className={styles.btnClose} onClick={() => setIsModalOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.25rem', color: '#191c1e' }}>Tiêu đề câu hỏi</label>
                <input 
                  type="text" 
                  className={styles.modalInput} 
                  placeholder="Ví dụ: Cần hỗ trợ bài tập lớn môn Cấu trúc dữ liệu..." 
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  autoFocus
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.25rem', color: '#191c1e' }}>Nội dung chi tiết</label>
                <textarea 
                  className={styles.modalInput} 
                  rows={5} 
                  placeholder="Mô tả chi tiết vấn đề bạn đang gặp phải..."
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.modalActions}>
              <button className={styles.btnCancel} onClick={() => setIsModalOpen(false)}>Hủy</button>
              <button className={styles.btnSubmitPrimary} onClick={handlePostSubmit}>
                Đăng bài
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
