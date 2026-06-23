'use client';

import React, { useState } from 'react';
import styles from '@/components/lecturer/posts/PostsManagement.module.css';
import PostSummary from '@/components/lecturer/posts/PostSummary';
import CommentInput from '@/components/lecturer/posts/CommentInput';
import CommentThread, { CommentData } from '@/components/lecturer/posts/CommentThread';
import Pagination from '@/components/lecturer/posts/Pagination';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const API_BASE_URL = 'http://localhost:8000/api';

export default function LecturerPostDetailPage() {
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
      const res = await fetch(`${API_BASE_URL}/lecturer/posts/${id}`, {
        headers: { 'Accept': 'application/json' }
      });
      const json = await res.json();
      if (json.data) {
          let attachment = undefined;
          if (json.data.tep_tin_bai_viet && json.data.tep_tin_bai_viet.length > 0) {
            const file = json.data.tep_tin_bai_viet[0].tep_tin;
            if (file) {
              attachment = { name: file.ten_file, url: file.duong_dan };
            }
          }

          setPostData({
            title: json.data.tieu_de,
            content: json.data.noi_dung,
            date: new Date(json.data.ngay_tao).toLocaleDateString('vi-VN'),
            authorName: json.data.nguoi_tao?.ho_ten || 'Giảng viên',
            authorAvatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(json.data.nguoi_tao?.ho_ten || 'GV')}&background=random`,
            category: json.data.loai_bai_viet === 'thong_bao' ? 'THÔNG BÁO' : 'BÀI VIẾT',
            attachment: attachment
          });

        const mappedComments = json.data.binh_luan?.map((c: any) => ({
          id: c.id.toString(),
          authorName: c.nguoi_dung?.ho_ten || 'User',
          authorAvatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(c.nguoi_dung?.ho_ten || 'User')}&background=random`, 
          role: c.nguoi_dung?.vai_tro_id === 2 ? 'teacher' : 'student', 
          content: c.noi_dung,
          timeAgo: new Date(c.ngay_tao).toLocaleDateString('vi-VN'),
          isDeleted: c.trang_thai === 'an',
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
      await fetch(`${API_BASE_URL}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          noi_dung: content,
          bai_viet_id: parseInt(id),
          lop_hoc_phan_id: 1, // Mock
        })
      });
      fetchPostDetail(); // Reload comments
    } catch (error) {
      console.error('Error posting comment', error);
    }
  };

  const handleReplySubmit = (parentId: string, content: string) => {
    setComments(prev => prev.map(c => {
      if (c.id === parentId || c.replies?.some(r => r.id === parentId)) {
        const actualParent = c;
        const newReply: CommentData = {
          id: `reply-${Date.now()}`,
          authorName: 'Đỗ Minh Nhật',
          authorAvatar: `https://ui-avatars.com/api/?name=${encodeURIComponent('Đỗ Minh Nhật')}&background=random`,
          role: 'teacher',
          content,
          timeAgo: 'Vừa xong',
          isDeleted: false,
        };
        return {
          ...actualParent,
          replies: [...(actualParent.replies || []), newReply]
        };
      }
      return c;
    }));
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
    if (window.confirm("Bạn có chắc chắn muốn xóa bình luận này không?")) {
      setComments(prev => {
        return prev.map(c => {
          if (c.id === id) {
            return { ...c, isDeleted: true, content: 'Bình luận này đã bị xóa bởi giảng viên' };
          }
          if (c.replies) {
            return {
              ...c,
              replies: c.replies.map(r => r.id === id ? { ...r, isDeleted: true, content: 'Bình luận này đã bị xóa bởi giảng viên' } : r)
            };
          }
          return c;
        });
      });
    }
  };

  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader} style={{ alignItems: 'flex-start', flexDirection: 'column' }}>
        <h2 className={styles.pageTitle}>Bài viết</h2>
        <div className={styles.breadcrumb}>
          <Link href="/lecturer/posts" className={styles.btnCancel} style={{ padding: '0 0.5rem 0 0', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Quay lại danh sách
          </Link>
        </div>
      </header>

      <div className={styles.detailContentWrapper}>
        <PostSummary post={postData} />

        <CommentInput 
          onSubmit={handleMainCommentSubmit} 
          userAvatar={`https://ui-avatars.com/api/?name=${encodeURIComponent('Đỗ Minh Nhật')}&background=random`}
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

          {comments.map(comment => (
            <CommentThread
              key={comment.id}
              comment={comment}
              onReplySubmit={handleReplySubmit}
              onDelete={handleDeleteComment}
              onEdit={handleEditComment}
              currentUser={{ name: 'Giảng viên', role: 'teacher' }}
            />
          ))}

          <Pagination />
        </section>
      </div>
    </div>
  );
}
