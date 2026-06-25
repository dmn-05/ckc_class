'use client';

import React, { useState } from 'react';
import styles from '@/components/student/posts/PostsManagement.module.css';
import PostSummary from '../../../../../components/student/posts/PostSummary';
import CommentInput from '../../../../../components/student/posts/CommentInput';
import CommentThread, { CommentData } from '../../../../../components/student/posts/CommentThread';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getProfileAction } from '../../../../../src/app/student/profile/actions';
import { authHeaders } from '../../../../../src/lib/auth';

const API_BASE_URL = 'http://localhost:8000/api';

export default function PostDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const [postData, setPostData] = useState<any>(null);
  const [comments, setComments] = useState<CommentData[]>([]);
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [currentUser, setCurrentUser] = useState<{ id: number; name: string; role: string; avatar: string | null }>({
    id: 0,
    name: 'Sinh viên',
    role: 'student',
    avatar: null
  });

  const fetchedRef = React.useRef(false);

  React.useEffect(() => {
    if (id && !fetchedRef.current) {
      fetchedRef.current = true;
      fetchPostDetail();
      fetchCurrentUser();
    }
  }, [id]);

  const fetchCurrentUser = async () => {
    const result = await getProfileAction();
    if (result.success && result.data) {
      setCurrentUser({
        id: result.data.id || 0,
        name: result.data.ho_ten || 'Sinh viên',
        role: 'student',
        avatar: result.data.avatar || null
      });
    }
  };

  const fetchPostDetail = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/student/posts/${id}`, {
        headers: authHeaders()
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
            image: json.data.hinh_anh || null
          });

        // Map backend comments
        const mappedComments = json.data.binh_luan?.map((c: any) => ({
          id: c.id.toString(),
          authorId: c.nguoi_dung_id,
          authorName: c.nguoi_dung?.ho_ten || 'Sinh Viên',
          authorAvatar: c.nguoi_dung?.avatar || null,
          role: c.nguoi_dung?.vai_tro_id === 2 ? 'teacher' : 'student',
          content: c.noi_dung,
          timeAgo: new Date(c.ngay_tao).toLocaleDateString('vi-VN'),
          isDeleted: c.trang_thai === 'an',
          replies: c.replies?.map((r: any) => ({
            id: r.id.toString(),
            authorId: r.nguoi_dung_id,
            authorName: r.nguoi_dung?.ho_ten || 'Sinh Viên',
            authorAvatar: r.nguoi_dung?.avatar || null,
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
        headers: authHeaders({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({
          noi_dung: content,
          bai_viet_id: parseInt(id),
          lop_hoc_phan_id: 1,
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
        headers: authHeaders({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({
          noi_dung: content,
          bai_viet_id: parseInt(id),
          lop_hoc_phan_id: 1,
          binh_luan_cha_id: parseInt(parentId.replace('reply-', ''))
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

  const handleEditComment = async (id: string, newContent: string) => {
    try {
      const res = await fetch(`${API_BASE_URL}/comments/${id}`, {
        method: 'PUT',
        headers: authHeaders({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({
          noi_dung: newContent,
        })
      });
      
      if (!res.ok) {
        const errText = await res.text();
        console.error('API Error:', res.status, errText);
        alert('Lỗi cập nhật bình luận: ' + res.status + ' - ' + errText);
        return;
      }
      
      fetchPostDetail(); // Reload comments
    } catch (error) {
      console.error('Error updating comment', error);
      alert('Không thể kết nối đến server');
    }
  };

  const handleDeleteComment = async (id: string) => {
    if (!confirm('Bạn có chắc chắn muốn xóa bình luận này?')) return;
    try {
      const res = await fetch(`${API_BASE_URL}/comments/${id}`, {
        method: 'DELETE',
        headers: authHeaders(),
      });
      
      if (!res.ok) {
        const errText = await res.text();
        console.error('API Error:', res.status, errText);
        alert('Lỗi xóa bình luận: ' + res.status + ' - ' + errText);
        return;
      }
      
      fetchPostDetail(); // Reload comments
    } catch (error) {
      console.error('Error deleting comment', error);
      alert('Không thể kết nối đến server');
    }
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
          userAvatarUrl={currentUser.avatar}
          userName={currentUser.name}
        />

      <section className={styles.sectionBox} style={{ background: 'transparent', boxShadow: 'none', border: 'none', padding: '0 1.5rem' }}>
        <div className={styles.commentsListHeader}>
          <h4 className={styles.commentsCount}>Bình luận ({totalComments})</h4>
          <div className={styles.sortControls}>
            <span>Sắp xếp:</span>
            <select
              className={styles.sortSelect}
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as 'newest' | 'oldest')}
            >
              <option value="newest">Mới nhất</option>
              <option value="oldest">Cũ nhất</option>
            </select>
          </div>
        </div>

        {comments.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#777587' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: '#c7c4d8', marginBottom: '1rem', display: 'block' }}>forum</span>
            <p>Chưa có bình luận nào. Hãy là người đầu tiên thảo luận!</p>
          </div>
        ) : (
          [...comments]
            .sort((a, b) => {
              const idA = parseInt(a.id);
              const idB = parseInt(b.id);
              return sortOrder === 'newest' ? idB - idA : idA - idB;
            })
            .map(comment => (
              <CommentThread
                key={comment.id}
                comment={comment}
                onReplySubmit={handleReplySubmit}
                onDelete={handleDeleteComment}
                onEdit={handleEditComment}
                currentUser={{ id: currentUser.id, name: currentUser.name, role: currentUser.role, avatar: currentUser.avatar }}
              />
            ))
        )}


      </section>
    </div>
  );
}
