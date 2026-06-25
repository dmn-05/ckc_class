'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import PostCard, { PostData } from './PostCard';
import styles from './PostsManagement.module.css';
import { authHeaders } from '@/lib/auth';

const API_BASE_URL = 'http://localhost:8000/api';

export default function LecturerPostsList() {
  const router = useRouter();
  const [posts, setPosts] = useState<PostData[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest' | 'popular'>('newest');

  React.useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/lecturer/posts`, {
        headers: authHeaders()
      });
      const json = await response.json();
      if (json.data) {
        const mappedPosts = json.data.map((item: any) => {
          const authorRole = item.nguoi_tao?.vai_tro_id || '';
          const authorName = authorRole === 2
            ? `GV. ${item.nguoi_tao?.ho_ten || 'Unknown'}` 
            : `${item.nguoi_tao?.ho_ten || 'Unknown'}`;
          
          let attachment = undefined;
          if (item.tep_tin_bai_viet && item.tep_tin_bai_viet.length > 0) {
            const fileData = item.tep_tin_bai_viet[0].tep_tin;
            attachment = { name: fileData.ten_file, url: fileData.duong_dan };
          }

          return {
            id: item.id.toString(),
            title: item.tieu_de,
            category: item.loai_bai_viet || 'bai_viet',
            date: new Date(item.ngay_tao).toLocaleDateString('vi-VN'),
            is_published: item.trang_thai === 'hien_thi',
            is_pinned: false,
            authorName: authorName,
            authorAvatar: item.nguoi_tao?.avatar || null,
            views_count: item.luot_xem || 0, 
            commentsCount: item.binh_luan ? item.binh_luan.length : 0,
            image: item.hinh_anh || null,
            attachment: attachment
          };
        });
        setPosts(mappedPosts);
      }
    } catch (error) {
      console.error('Failed to fetch posts', error);
    }
  };

  // Stats
  const totalPosts = posts.length;
  const publishedPosts = posts.filter(p => p.is_published).length;
  const draftPosts = posts.filter(p => !p.is_published).length;

  // Filtered + sorted posts
  const filteredPosts = posts
    .filter(p => {
      const categoryMatch = filterCategory === 'all' || p.category === filterCategory;
      const statusMatch =
        filterStatus === 'all' ||
        (filterStatus === 'hien_thi' && p.is_published) ||
        (filterStatus === 'an' && !p.is_published);
      return categoryMatch && statusMatch;
    })
    .sort((a, b) => {
      if (sortOrder === 'newest') return parseInt(b.id) - parseInt(a.id);
      if (sortOrder === 'oldest') return parseInt(a.id) - parseInt(b.id);
      // popular: sắp xếp theo lượt xem giảm dần
      return b.views_count - a.views_count;
    });

  const handleDelete = async (id: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa bài viết này?')) {
      try {
        const response = await fetch(`${API_BASE_URL}/lecturer/posts/${id}`, {
          method: 'DELETE',
          headers: { 'Accept': 'application/json' }
        });
        if (!response.ok) {
          alert('Không thể xóa bài viết. Vui lòng thử lại sau.');
          return;
        }
        fetchPosts(); // Refresh list
      } catch (error) {
        console.error('Error deleting post', error);
      }
    }
  };

  const handleTogglePin = (id: string) => {
    setPosts(posts.map(p => p.id === id ? { ...p, is_pinned: !p.is_pinned } : p));
  };

  const handleTogglePublish = (id: string) => {
    setPosts(posts.map(p => p.id === id ? { ...p, is_published: !p.is_published } : p));
  };

  const openCreatePage = () => {
    router.push('/lecturer/posts/create');
  };

  const openEditPage = (post: PostData) => {
    router.push(`/lecturer/posts/${post.id}/edit`);
  };

  return (
    <div className={styles.contentWrapper}>
      {/* Page Header Actions */}
      <div className="flex justify-between items-end mb-6">
        <div className="space-y-1">
          <h2 className="text-[32px] font-bold text-gray-900 leading-tight tracking-tight">Quản Lý Bài Viết</h2>
        </div>
        <button 
          onClick={openCreatePage}
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
            <select
              className={styles.filterSelect}
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="all">Tất cả loại bài</option>
              <option value="bai_viet">Bài viết</option>
              <option value="thong_bao">Thông báo</option>
              <option value="tai_lieu">Tài liệu</option>
              <option value="bai_tap">Bài tập</option>
            </select>
            <select
              className={styles.filterSelect}
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">Tất cả trạng thái</option>
              <option value="hien_thi">Đã đăng (Hiển thị)</option>
              <option value="an">Bản nháp (Ẩn)</option>
            </select>
            <select
              className={styles.filterSelect}
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as 'newest' | 'oldest' | 'popular')}
            >
              <option value="newest">Mới nhất</option>
              <option value="oldest">Cũ nhất</option>
              <option value="popular">Nổi bật</option>
            </select>
          </div>
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
          {filteredPosts.length === 0 ? (
            <div style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '48px', display: 'block', marginBottom: '1rem' }}>article</span>
              <p>Không có bài viết nào phù hợp với bộ lọc đã chọn.</p>
            </div>
          ) : (
            <div className={`${styles.postsGrid} ${viewMode === 'list' ? styles.listMode : ''}`}>
              {filteredPosts.map(post => (
                <PostCard 
                  key={post.id} 
                  post={post} 
                  onEdit={openEditPage}
                  onDelete={handleDelete}
                  onTogglePin={handleTogglePin}
                  onTogglePublish={handleTogglePublish}
                />
              ))}
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className={styles.paginationBar}>
          <span className={styles.paginationText}>
            Hiển thị {filteredPosts.length} trong tổng số {totalPosts} bài viết
          </span>
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

    </div>
  );
}
