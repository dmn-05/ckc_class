'use client';

import React, { useState } from 'react';
import styles from '@/components/student/posts/PostsManagement.module.css';
import PostSummary from '../../../../../components/student/posts/PostSummary';
import CommentInput from '../../../../../components/student/posts/CommentInput';
import CommentThread, { CommentData } from '../../../../../components/student/posts/CommentThread';
import Pagination from '../../../../../components/student/posts/Pagination';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const API_BASE_URL = 'http://localhost:8000/api';

export default function PostDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const [postData, setPostData] = useState<any>(null);
  const [comments, setComments] = useState<CommentData[]>([]);

  const fetchedRef = React.useRef(false);

  React.useEffect(() => {
    if (id && !fetchedRef.current) {
      fetchedRef.current = true;
      fetchPostDetail();
    }
  }, [id]);

  const fetchPostDetail = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/student/posts/${id}`, {
        headers: { 'Accept': 'application/json' }
      });
      const json = await res.json();
      if (json.data) {
          let attachment = undefined;
          if (json.data.tep_tin_bai_viet && json.data.tep_tin_bai_viet.length > 0) {
            const file = json.data.tep_tin_bai_viet[0].tep_tin;
            if (file) {
              const fullUrl = file.duong_dan.startsWith('http') 
                ? file.duong_dan 
                : `http://localhost:8000${file.duong_dan.startsWith('/') ? '' : '/'}${file.duong_dan}`;
              attachment = { name: file.ten_file, url: fullUrl };
            }
          }

          setPostData({
            title: json.data.tieu_de,
            content: json.data.noi_dung,
            date: new Date(json.data.ngay_tao).toLocaleDateString('vi-VN'),
            authorName: json.data.nguoi_tao?.ho_ten || 'Người dùng ẩn danh',
            authorRole: json.data.nguoi_tao?.vai_tro_id === 2 ? 'Giảng viên' : 
                        json.data.nguoi_tao?.vai_tro_id === 1 ? 'Quản trị viên' : 'Sinh viên',
            authorAvatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(json.data.nguoi_tao?.ho_ten || 'User')}&background=3525cd&color=fff`,
            category: json.data.loai_bai_viet === 'thong_bao' ? 'Thông báo' : 
                      json.data.loai_bai_viet === 'tai_lieu' ? 'Tài liệu' :
                      json.data.loai_bai_viet === 'bai_tap' ? 'Bài tập' : 'Thảo luận',
            attachment: attachment,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8WWy8nQSdwRuA1IEGzFFn5Hb9bq-PbFhEW8PLv_2-yg-4bkR-2Qo2l3Udk_b4zbXrIKNzKK90IpA-sprj_X_1Ex_FPPN8B3G1WTA2XGYfeIDPoYDt5S3bIR-8fEylVnjJSF_STYGiLQrougKhvWOyzeYz9fBSXm7N-mHo9y81-z7PIyjgfza5CkskVqbDv8rY1NRnRtDI9ZoXS8nFS-oaWGZgXj5D4UMtFW0HnmAwJDQuzHIBlGhqILtjoIOd7jeYPdjnseCnV2o'
          });

        // Map backend comments
        const mappedComments = json.data.binh_luan?.map((c: any) => ({
          id: c.id.toString(),
          authorId: c.nguoi_dung_id,
          authorName: c.nguoi_dung?.ho_ten || 'Sinh Viên',
          authorAvatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(c.nguoi_dung?.ho_ten || 'User')}&background=3525cd&color=fff`, 
          role: c.nguoi_dung?.vai_tro_id === 2 ? 'teacher' : 'student',
          content: c.noi_dung,
          timeAgo: new Date(c.ngay_tao).toLocaleDateString('vi-VN'),
          isDeleted: c.trang_thai === 'an',
          replies: c.replies?.map((r: any) => ({
            id: r.id.toString(),
            authorId: r.nguoi_dung_id,
            authorName: r.nguoi_dung?.ho_ten || 'Sinh Viên',
            authorAvatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(r.nguoi_dung?.ho_ten || 'User')}&background=3525cd&color=fff`,
            role: r.nguoi_dung?.vai_tro_id === 2 ? 'teacher' : 'student',
            content: r.noi_dung,
            timeAgo: new Date(r.ngay_tao).toLocaleDateString('vi-VN'),
            isDeleted: r.trang_thai === 'an',
          })) || []
        })) || [];
        setComments(mappedComments);
      }
    } catch (error) {
      console.error('Error fetching post', error);
    }
  };

  const totalComments = comments.reduce((acc, c) => acc + (c.isDeleted ? 0 : 1) + (c.replies ? c.replies.filter(r => !r.isDeleted).length : 0), 0);

  const handleMainCommentSubmit = async (content: string) => {
    try {
      const res = await fetch(`${API_BASE_URL}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          noi_dung: content,
          bai_viet_id: parseInt(id),
          lop_hoc_phan_id: 1, // Mock
        })
      });
      
      if (!res.ok) {
        const errText = await res.text();
        console.error('API Error:', res.status, errText);
        alert('Lỗi đăng bình luận: ' + res.status + ' - ' + errText);
        return;
      }
      
      fetchPostDetail(); // Reload comments
    } catch (error) {
      console.error('Error posting comment', error);
      alert('Không thể kết nối đến server');
    }
  };

  const handleReplySubmit = async (parentId: string, content: string) => {
    try {
      const res = await fetch(`${API_BASE_URL}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          noi_dung: content,
          bai_viet_id: parseInt(id),
          lop_hoc_phan_id: 1, // Mock
          binh_luan_cha_id: parseInt(parentId.replace('reply-', '')) // Parse ID safely
        })
      });
      
      if (!res.ok) {
        const errText = await res.text();
        console.error('API Error:', res.status, errText);
        alert('Lỗi đăng phản hồi: ' + res.status + ' - ' + errText);
        return;
      }
      
      fetchPostDetail(); // Reload comments
    } catch (error) {
      console.error('Error posting reply', error);
      alert('Không thể kết nối đến server');
    }
  };

  const handleEditComment = (id: string, newContent: string) => {
    setComments(prev => prev.map(c => {
      if (c.id === id) {
        return { ...c, content: newContent, isEdited: true };
      }
      if (c.replies) {
        return {
          ...c,
          replies: c.replies.map(r => r.id === id ? { ...r, content: newContent, isEdited: true } : r)
        };
      }
      return c;
    }));
  };

  const handleDeleteComment = (id: string) => {
    setComments(prev => {
      return prev.map(c => {
        if (c.id === id) {
          return { ...c, isDeleted: true, content: 'Bình luận này đã bị xóa' };
        }
        if (c.replies) {
          return {
            ...c,
            replies: c.replies.map(r => r.id === id ? { ...r, isDeleted: true, content: 'Bình luận này đã bị xóa' } : r)
          };
        }
        return c;
      });
    });
  };

  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader} style={{ alignItems: 'flex-start', flexDirection: 'column' }}>
        <h2 className={styles.pageTitle}>Bài viết</h2>
        <div className={styles.breadcrumb}>
          <Link href="/student/posts" className={styles.btnCancel} style={{ padding: '0 0.5rem 0 0', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Quay lại danh sách
          </Link>
        </div>
      </header>

      <PostSummary post={postData} />

      <CommentInput 
          onSubmit={handleMainCommentSubmit} 
          userAvatar={`https://ui-avatars.com/api/?name=${encodeURIComponent('Lê Thành Đạt')}&background=3525cd&color=fff`}
        />

      <section className={styles.sectionBox} style={{ background: 'transparent', boxShadow: 'none', border: 'none', padding: '0 1.5rem' }}>
        <div className={styles.commentsListHeader}>
          <h4 className={styles.commentsCount}>Bình luận ({totalComments})</h4>
          <div className={styles.sortControls}>
            <span>Sắp xếp:</span>
            <select className={styles.sortSelect} defaultValue="newest">
              <option value="newest">Mới nhất</option>
              <option value="oldest">Cũ nhất</option>
              <option value="top">Nổi bật</option>
            </select>
          </div>
        </div>

        {comments.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#777587' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: '#c7c4d8', marginBottom: '1rem', display: 'block' }}>forum</span>
            <p>Chưa có bình luận nào. Hãy là người đầu tiên thảo luận!</p>
          </div>
        ) : (
          comments.map(comment => (
            <CommentThread
              key={comment.id}
              comment={comment}
              onReplySubmit={handleReplySubmit}
              onDelete={handleDeleteComment}
              onEdit={handleEditComment}
              currentUser={{ id: 4, name: 'Lê Thành Đạt', role: 'student' }}
            />
          ))
        )}

        {totalComments > 10 && <Pagination />}
      </section>
    </div>
  );
}
