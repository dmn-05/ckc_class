'use client';

import React, { useState } from 'react';
import PostCard, { PostData } from './PostCard';
import PostFormModal from './PostFormModal';
import styles from './PostsManagement.module.css';

const INITIAL_POSTS: PostData[] = [
  {
    id: 'p1',
    category: 'announcement',
    date: '25 Thg 08, 2024',
    is_published: true,
    is_pinned: true,
    title: 'Thông báo nghỉ lễ Quốc khánh 2/9 dành cho Cán bộ - Giảng viên - Sinh viên',
    authorName: 'Phòng Hành chính - Quản trị',
    views_count: 1200,
    commentsCount: 12,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8WWy8nQSdwRuA1IEGzFFn5Hb9bq-PbFhEW8PLv_2-yg-4bkR-2Qo2l3Udk_b4zbXrIKNzKK90IpA-sprj_X_1Ex_FPPN8B3G1WTA2XGYfeIDPoYDt5S3bIR-8fEylVnjJSF_STYGiLQrougKhvWOyzeYz9fBSXm7N-mHo9y81-z7PIyjgfza5CkskVqbDv8rY1NRnRtDI9ZoXS8nFS-oaWGZgXj5D4UMtFW0HnmAwJDQuzHIBlGhqILtjoIOd7jeYPdjnseCnV2o'
  },
  {
    id: 'p2',
    category: 'material',
    date: '22 Thg 08, 2024',
    is_published: true,
    is_pinned: false,
    title: 'Lịch thi kết thúc học kỳ 1 - Năm học 2024-2025 (Chính thức)',
    authorName: 'Phòng Đào tạo',
    views_count: 3500,
    commentsCount: 45,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC32z3XOi0PMPEhh8_edGAXa5Mt-C_EncIM50zRI6j7hlb5UXGuOlOZLOjW6LdMLDXQXHtKejlbieVdH47MmbEeepY4hE5bwogzM4kRL5rnkuUJdvtU0HpXLcNWpOOW8ZBCWhjspw4VM1U2pu_T-TxSqqspnau9IOFfnFE4wGnusIonpnqPSGIcvs6N1fRa11fhy9Mla5BOOUxl1InjNahfmNYFY0Zn-djxCKwql0oOFRHvCUwVbuFfQeCuJSnlWCWcI6XzeSlBUYE'
  },
  {
    id: 'p3',
    category: 'discussion',
    date: '20 Thg 08, 2024',
    is_published: false,
    is_pinned: false,
    title: 'Hội thảo định hướng nghề nghiệp 2024: "Chinh phục nhà tuyển dụng"',
    authorName: 'Trung tâm Hỗ trợ HSSV',
    views_count: 0,
    commentsCount: 0,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAe9J9iPr6e2C-U99NRQnifggovalC5mlCZvg5N-reu0gTtgDeDdP3TgW5Zu15y5QIKOfYtAVPVyMtBPLzFwSSdn0_8ZSdKdxn4acdhjqKw4yFUkxMyDviS-VOrTDkDI_w6_XGqPdmW2QyhGwG54rpO_-1MwsjN86lnvtRjGFACzzg_bi81LtW9WNsoqhBXoe_3dToUNZiovBEUJ0cjbioajlUVu-cELO1OJj-_a6IWL9EPpK4DjyOY2jRF58kETSYHICeF1vSfVCw'
  }
];

export default function LecturerPostsList() {
  const [posts, setPosts] = useState<PostData[]>(INITIAL_POSTS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<PostData | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Stats
  const totalPosts = posts.length;
  const publishedPosts = posts.filter(p => p.is_published).length;
  const draftPosts = posts.filter(p => !p.is_published).length;

  const handleCreateOrUpdate = (postData: Omit<PostData, 'id' | 'views_count' | 'commentsCount' | 'date'>) => {
    if (editingPost) {
      setPosts(posts.map(p => p.id === editingPost.id ? { ...p, ...postData } : p));
    } else {
      const newPost: PostData = {
        ...postData,
        id: `p${posts.length + 1}`,
        date: 'Vừa xong',
        views_count: 0,
        commentsCount: 0,
      };
      setPosts([newPost, ...posts]);
    }
    setIsModalOpen(false);
    setEditingPost(null);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa bài viết này?')) {
      setPosts(posts.filter(p => p.id !== id));
    }
  };

  const handleTogglePin = (id: string) => {
    setPosts(posts.map(p => p.id === id ? { ...p, is_pinned: !p.is_pinned } : p));
  };

  const handleTogglePublish = (id: string) => {
    setPosts(posts.map(p => p.id === id ? { ...p, is_published: !p.is_published } : p));
  };

  const openCreateModal = () => {
    setEditingPost(null);
    setIsModalOpen(true);
  };

  const openEditModal = (post: PostData) => {
    setEditingPost(post);
    setIsModalOpen(true);
  };

  return (
    <div className={styles.contentWrapper}>
      {/* Page Header Actions */}
      <div className="flex justify-between items-end mb-6">
        <div className="space-y-1">
          <h2 className="text-[32px] font-bold text-gray-900 leading-tight tracking-tight">Quản Lý Bài Viết</h2>
        </div>
        <button 
          onClick={openCreateModal}
          className={styles.addButton}
        >
          <span className="material-symbols-outlined text-[20px]">add</span>
          Thêm bài viết mới
        </button>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className={styles.statCard1}>
          <div className="flex justify-between items-start">
            <span className="text-[14px] font-semibold text-gray-600">Tổng số bài viết</span>
            <div className="w-10 h-10 rounded-lg bg-[#e2dfff] flex items-center justify-center text-[#3525cd]">
              <span className="material-symbols-outlined">article</span>
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-[28px] font-bold text-gray-900 leading-tight">{totalPosts < 10 ? `0${totalPosts}` : totalPosts}</h3>
          </div>
        </div>
        
        <div className={styles.statCard2}>
          <div className="flex justify-between items-start">
            <span className="text-[14px] font-semibold text-gray-600">Bài viết đã đăng</span>
            <div className="w-10 h-10 rounded-lg bg-[#e1e0ff] flex items-center justify-center text-[#4648d4]">
              <span className="material-symbols-outlined">campaign</span>
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-[28px] font-bold text-gray-900 leading-tight">{publishedPosts < 10 ? `0${publishedPosts}` : publishedPosts}</h3>
            <p className="text-[12px] text-gray-500 font-medium mt-1">Đang hiển thị cho sinh viên</p>
          </div>
        </div>
        
        <div className={styles.statCard3}>
          <div className="flex justify-between items-start">
            <span className="text-[14px] font-semibold text-gray-600">Yêu cầu phê duyệt / Nháp</span>
            <div className="w-10 h-10 rounded-lg bg-[#ffdbcc] flex items-center justify-center text-[#a44100]">
              <span className="material-symbols-outlined">pending_actions</span>
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-[28px] font-bold text-[#a44100] leading-tight">{draftPosts < 10 ? `0${draftPosts}` : draftPosts}</h3>
            <p className="text-[12px] text-[#7e3000] font-medium mt-1">Chờ admin duyệt & xuất bản</p>
          </div>
        </div>
      </div>

      {/* Content Area: Filter Bar & Post Grid */}
      <div className={styles.mainContainer}>
        {/* Filter Bar */}
        <div className={styles.filterBar}>
          <div className={styles.filterControls}>
            <select className={styles.filterSelect}>
              <option>Tất cả danh mục</option>
              <option>Hành chính</option>
              <option>Đào tạo</option>
              <option>Sự kiện</option>
            </select>
            <select className={styles.filterSelect}>
              <option>Loại thông báo</option>
              <option>Chung</option>
              <option>Học thuật</option>
              <option>Sự kiện</option>
            </select>
            <select className={styles.filterSelect}>
              <option>Trạng thái</option>
              <option>Đã đăng</option>
              <option>Bản nháp</option>
              <option>Đã lên lịch</option>
            </select>
          </div>
          
          {/* View Toggle */}
          <div className={styles.viewToggle}>
            <button 
              className={`${styles.viewToggleButton} ${viewMode === 'grid' ? styles.active : ''}`}
              onClick={() => setViewMode('grid')}
              title="Dạng lưới"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button 
              className={`${styles.viewToggleButton} ${viewMode === 'list' ? styles.active : ''}`}
              onClick={() => setViewMode('list')}
              title="Dạng danh sách"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Posts Grid / List */}
        <div className={styles.gridSection}>
          <div className={`${styles.postsGrid} ${viewMode === 'list' ? styles.listMode : ''}`}>
            {posts.slice(0, 3).map(post => (
              <PostCard 
                key={post.id} 
                post={post} 
                onEdit={openEditModal}
                onDelete={handleDelete}
                onTogglePin={handleTogglePin}
                onTogglePublish={handleTogglePublish}
              />
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className={styles.paginationBar}>
          <span className={styles.paginationText}>Hiển thị {posts.length} trong tổng số {posts.length} bài viết</span>
          <div className={styles.paginationControls}>
            <button className={styles.pageButton} disabled>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_left</span>
            </button>
            <button className={`${styles.pageButton} ${styles.active}`}>1</button>
            <button className={styles.pageButton} disabled>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      <PostFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateOrUpdate}
        initialData={editingPost}
      />
    </div>
  );
}
