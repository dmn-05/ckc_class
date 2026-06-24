'use client';

import React, { useState } from 'react';
import PostCard, { PostData } from './PostCard';
import PostFormModal from './PostFormModal';
import styles from './PostsManagement.module.css';

// Xóa MOCK_POSTS đi và dùng data từ API
const API_BASE_URL = 'http://localhost:8000/api';

export default function LecturerPostsList() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<PostData | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  React.useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/lecturer/posts`, {
        headers: {
          'Accept': 'application/json',
          // 'Authorization': `Bearer ${localStorage.getItem('token')}` // Un-comment when auth is integrated
        }
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
            views_count: item.luot_xem || 0, 
            commentsCount: item.binh_luan ? item.binh_luan.length : 0,
            image: item.anh_bia || 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8WWy8nQSdwRuA1IEGzFFn5Hb9bq-PbFhEW8PLv_2-yg-4bkR-2Qo2l3Udk_b4zbXrIKNzKK90IpA-sprj_X_1Ex_FPPN8B3G1WTA2XGYfeIDPoYDt5S3bIR-8fEylVnjJSF_STYGiLQrougKhvWOyzeYz9fBSXm7N-mHo9y81-z7PIyjgfza5CkskVqbDv8rY1NRnRtDI9ZoXS8nFS-oaWGZgXj5D4UMtFW0HnmAwJDQuzHIBlGhqILtjoIOd7jeYPdjnseCnV2o',
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

  const handleCreateOrUpdate = async (postData: any) => {
    try {
      const formData = new FormData();
      formData.append('tieu_de', postData.title);
      formData.append('noi_dung', postData.title + ' content...'); // Mapped temporarily from title
      formData.append('trang_thai', postData.is_published ? 'hien_thi' : 'an');
      formData.append('lop_hoc_phan_id', postData.lop_hoc_phan_id.toString());
      
      if (!editingPost) {
        formData.append('loai_bai_viet', postData.category);
      } else {
        formData.append('_method', 'PUT'); // Laravel requirement for multipart PUT
      }

      if (postData.file) {
        formData.append('file', postData.file);
      }

      const url = editingPost 
        ? `${API_BASE_URL}/lecturer/posts/${editingPost.id}`
        : `${API_BASE_URL}/lecturer/posts`;

      let response = await fetch(url, {
        method: 'POST', // Always POST, _method=PUT handles updates
        headers: { 'Accept': 'application/json' }, // Let browser set Content-Type with boundary
        body: formData
      });

      if (!response.ok) {
        const errData = await response.json();
        alert('Lỗi: ' + (errData.message || 'Vui lòng kiểm tra lại thông tin.'));
        return;
      }
      setIsModalOpen(false);
      setEditingPost(null);
      alert('Lưu bài viết thành công!');
      fetchPosts(); // Refresh list after save
    } catch (error) {
      console.error('Error saving post', error);
      alert('Lỗi kết nối mạng, vui lòng thử lại.');
    }
  };

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
              <option>Loại bài viết</option>
              <option>Thông báo</option>
              <option>Tài liệu</option>
              <option>Bài tập</option>
              <option>Bài viết</option>
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
            {posts.map(post => (
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
