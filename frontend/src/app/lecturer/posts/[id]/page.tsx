'use client';

import React, { useState } from 'react';
import styles from '@/components/lecturer/posts/PostsManagement.module.css';
import PostSummary from '@/components/lecturer/posts/PostSummary';
import CommentInput from '@/components/lecturer/posts/CommentInput';
import CommentThread, { CommentData } from '@/components/lecturer/posts/CommentThread';
import ConfirmModal from '@/components/common/ConfirmModal';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { authHeaders } from '@/lib/auth';
import { getLecturerProfileAction } from '@/app/lecturer/profile/actions';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export default function LecturerPostDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const [postData, setPostData] = useState<any>(null);
  const [comments, setComments] = useState<CommentData[]>([]);
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [currentUser, setCurrentUser] = useState<{ id: number; name: string; role: string; avatar: string | null }>({
    id: 0,
    name: 'Giảng viên',
    role: 'teacher',
    avatar: null
  });
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const [initialSectionId, setInitialSectionId] = React.useState<string>('');
  const fetchedRef = React.useRef(false);

  React.useEffect(() => {
    const searchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
    const sId = searchParams.get('sectionId');
    if (sId) setInitialSectionId(sId);

    if (id && !fetchedRef.current) {
      fetchedRef.current = true;
      fetchPostDetail();
      fetchCurrentUser();
    }
  }, [id]);

  const fetchCurrentUser = async () => {
    const result = await getLecturerProfileAction();
    if (result.success && result.data) {
      setCurrentUser({
        id: result.data.id || 0,
        name: result.data.ho_ten || 'Giảng viên',
        role: 'teacher',
        avatar: result.data.avatar || null
      });
    }
  };

  const fetchPostDetail = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/lecturer/posts/${id}`, {
        headers: authHeaders()
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
            authorName: json.data.nguoi_tao?.ho_ten || 'Người dùng ẩn danh',
            authorRole: json.data.nguoi_tao?.vai_tro_id === 2 ? 'Giảng viên' : 
                        json.data.nguoi_tao?.vai_tro_id === 1 ? 'Quản trị viên' : 'Sinh viên',
            authorAvatar: json.data.nguoi_tao?.avatar || null,
            category: json.data.loai_bai_viet === 'tai_lieu' ? 'Tài liệu' :
                      json.data.loai_bai_viet === 'bai_tap' ? 'Bài tập' : 'Thông báo',
            attachment: attachment,
            image: json.data.hinh_anh || null,
            lop_hoc_phan_id: json.data.lop_hoc_phan_id ? json.data.lop_hoc_phan_id.toString() : ''
          });

        const mappedComments = json.data.binh_luan?.map((c: any) => ({
          id: c.id.toString(),
          authorId: c.nguoi_dung_id,
          authorName: c.nguoi_dung?.ho_ten || 'User',
          authorAvatar: c.nguoi_dung?.avatar || null,
          role: c.nguoi_dung?.vai_tro_id === 2 ? 'teacher' : 'student', 
          content: c.noi_dung,
          timeAgo: new Date(c.ngay_tao).toLocaleDateString('vi-VN'),
          isDeleted: c.trang_thai === 'an',
          replies: c.replies?.map((r: any) => ({
            id: r.id.toString(),
            authorId: r.nguoi_dung_id,
            authorName: r.nguoi_dung?.ho_ten || 'User',
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
      await fetch(`${API_BASE_URL}/comments`, {
        method: 'POST',
        headers: authHeaders({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({
          noi_dung: content,
          bai_viet_id: parseInt(id),
          lop_hoc_phan_id: 1,
        })
      });
      fetchPostDetail(); // Reload comments
    } catch (error) {
      console.error('Error posting comment', error);
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
      <div className={styles.breadcrumb} style={{ marginBottom: '1rem' }}>
        <button
          type="button"
          onClick={() => {
            const targetSectionId = initialSectionId || postData?.lop_hoc_phan_id;
            if (targetSectionId && targetSectionId !== '0') {
              router.push(`/lecturer/sections/${targetSectionId}`);
            } else {
              router.push('/lecturer/posts');
            }
          }}
          style={{
            backgroundColor: '#ffffff',
            color: '#464555',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontWeight: 600,
            fontSize: '0.875rem',
            border: '1px solid #c7c4d8',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {(initialSectionId || postData?.lop_hoc_phan_id) ? 'Quay lại lớp học phần' : 'Quay lại danh sách'}
        </button>
      </div>

      <header className={styles.pageHeader} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h2 className={styles.pageTitle} style={{ margin: 0 }}>
            {postData?.category === 'Tài liệu' ? 'Tài nguyên' : postData?.category === 'Bài tập' ? 'Bài tập' : 'Bài viết'}
          </h2>
        </div>
        {postData && (
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <button
              type="button"
              onClick={() => {
                const sectionQuery = initialSectionId || postData?.lop_hoc_phan_id ? `?sectionId=${initialSectionId || postData.lop_hoc_phan_id}` : '';
                if (postData.category === 'Tài liệu') {
                  router.push(`/lecturer/resources/${id}/edit${sectionQuery}`);
                } else if (postData.category === 'Bài tập') {
                  router.push(`/lecturer/assignments/${id}/edit${sectionQuery}`);
                } else {
                  router.push(`/lecturer/posts/${id}/edit${sectionQuery}`);
                }
              }}
              style={{ padding: '0.5rem 1.25rem', backgroundColor: '#3525cd', color: '#fff', border: 'none', borderRadius: '0.5rem', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>edit</span>
              {postData.category === 'Tài liệu' ? 'Sửa tài nguyên' : postData.category === 'Bài tập' ? 'Sửa bài tập' : 'Sửa bài viết'}
            </button>
            <button
              type="button"
              onClick={() => setShowDeleteConfirm(true)}
              style={{ padding: '0.5rem 1.25rem', backgroundColor: '#fee2e2', color: '#dc2626', border: '1px solid #fca5a5', borderRadius: '0.5rem', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>delete</span>
              Xóa
            </button>
          </div>
        )}
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

          {[...comments]
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
                currentUser={currentUser}
              />
            ))}

        </section>

      <ConfirmModal
        isOpen={showDeleteConfirm}
        title={`Xác nhận xóa ${postData?.category === 'Tài liệu' ? 'tài nguyên' : postData?.category === 'Bài tập' ? 'bài tập' : 'bài viết'}`}
        message={
          <span>
            Bạn có chắc chắn muốn xóa <strong>{postData?.title}</strong> không? Toàn bộ dữ liệu liên quan sẽ bị xóa vĩnh viễn và không thể khôi phục.
          </span>
        }
        confirmText="Xóa ngay"
        cancelText="Hủy bỏ"
        variant="danger"
        isLoading={isDeleting}
        onCancel={() => setShowDeleteConfirm(false)}
        onConfirm={() => {
          const itemLabel = postData?.category === 'Tài liệu' ? 'tài nguyên' : postData?.category === 'Bài tập' ? 'bài tập' : 'bài viết';
          const endpoint = postData?.category === 'Tài liệu' ? 'resources' : 'posts';
          setIsDeleting(true);
          fetch(`${API_BASE_URL}/lecturer/${endpoint}/${id}`, {
            method: 'DELETE',
            headers: { 'Accept': 'application/json', ...authHeaders() }
          })
          .then(res => {
            if (!res.ok) throw new Error('Xóa thất bại');
            setShowDeleteConfirm(false);
            const targetSectionId = initialSectionId || postData?.lop_hoc_phan_id;
            if (targetSectionId && targetSectionId !== '0') {
              router.push(`/lecturer/sections/${targetSectionId}`);
            } else {
              router.push('/lecturer/posts');
            }
          })
          .catch(err => {
            setIsDeleting(false);
            setShowDeleteConfirm(false);
            alert(err.message || `Lỗi khi xóa ${itemLabel}`);
          });
        }}
      />
    </div>
  );
}
