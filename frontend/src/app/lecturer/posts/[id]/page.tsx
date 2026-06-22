'use client';

import React, { useState } from 'react';
import styles from '@/components/lecturer/posts/PostsManagement.module.css';
import PostSummary from '@/components/lecturer/posts/PostSummary';
import CommentInput from '@/components/lecturer/posts/CommentInput';
import CommentThread, { CommentData } from '@/components/lecturer/posts/CommentThread';
import Pagination from '@/components/lecturer/posts/Pagination';
import Link from 'next/link';

const INITIAL_COMMENTS: CommentData[] = [
  {
    id: 'c1',
    authorName: 'Lê Thị B',
    authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABjd_-ht2hGFPNO3Hh9TWdJS2HS0TGkA76-HOiK7Sw1tBL2O_f61nK5LEc7Lcmjg3vtyswww1F1E1HbTMEJ1w3Jan8gID8O-uj4uqzSsw8vvgjf4C3ThElkQwjtkUf8eSmkXE3kpYsiwrh1_2tUY3K5TCmUVGjO941dh37ogA_50jsvQB4auELTLcMYHo9R7D5bzf8AX3_J8ZWVHq73NXOW4TvG2gvo7o5J8MB5D7k4LYu7jpdnfTqDcbAJ13DO7ZGKiK8fRlIU80',
    role: 'student',
    content: 'Bài viết rất hay và chi tiết. Thầy cho em hỏi là đối với các dự án nhỏ của sinh viên thì có nên áp dụng Microservices luôn không hay nên bắt đầu với Monolith trước ạ?',
    timeAgo: '2 giờ trước',
    isDeleted: false,
    replies: [
      {
        id: 'c1-1',
        authorName: 'ThS. Nguyễn Văn A',
        authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLjhx4Q2PaQiT2ncDj3RABa0263YBCgk_4kG4-UlmvpMMUNdOpgN88LHJyE4zmHKDhGXsSlmEJ-PQbICdUokejTOs60a6sd0hcqdFv2AMgSdT9gkh0g8zUqpZU8vh045JSVie6xnlwtxMtODQjavL3TnhAnj_llLSOTguIEeCd_ep_U9tuMGpq82B6g43SU-1hG0sbNteAn2jz24XUVeil5UYcgtGSA-3dnUi6DyjWTUFyytiZZVvfUyET1DjhroCdBALWmdClQHE',
        role: 'teacher',
        content: 'Chào B, câu hỏi rất hay. Với các đồ án sinh viên, Thầy khuyên nên tập trung vào Monolith trước để hiểu rõ logic nghiệp vụ. Chỉ khi hệ thống quá phức tạp hoặc muốn học về DevOps/Distributed systems thì mới nên cân nhắc chuyển đổi.',
        timeAgo: '1 giờ trước',
        isDeleted: false,
      }
    ]
  },
  {
    id: 'c2',
    authorName: 'Unknown',
    authorAvatar: '',
    role: 'student',
    content: 'Bình luận này đã bị xóa',
    timeAgo: '',
    isDeleted: true,
  },
  {
    id: 'c3',
    authorName: 'Nguyễn Văn Sinh Viên',
    authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDN8fBc31mXpjXfIUWzQUz7ydSBdlRfCPFq2JzIezn6hCqbNV_0BkfjHJU4-YMMpf8ZkSS6sc9ikYDxX5HbSyhtez5-oJPZnXpab6zkHtGKKRO1UTvp5W_hrYEGNQ23HS3uJX4WjopfZV25FKUVWkCT060l-NwmaLKKS6165wLgpimw18EvyjEW67X6s1u4s97A1qNP6_594w9EUDHb7EEE_mDGjYLCo6wVgJ33Firdxa4_ZweR_1Av7P_3d4dV_PKVVjoERknSupg',
    role: 'student',
    content: 'Em cảm thấy phần so sánh hiệu năng giữa Monolith và Microservices trong bài viết này rất sát với thực tế doanh nghiệp hiện nay. Cảm ơn Thầy đã chia sẻ!',
    timeAgo: '4 giờ trước',
    isDeleted: false,
    isEdited: false,
  }
];

const CURRENT_USER = {
  name: 'ThS. Nguyễn Văn A',
  role: 'teacher'
};

export default function LecturerPostDetailPage() {
  const [comments, setComments] = useState<CommentData[]>(INITIAL_COMMENTS);
  const totalComments = comments.reduce((acc, c) => acc + (c.isDeleted ? 0 : 1) + (c.replies ? c.replies.filter(r => !r.isDeleted).length : 0), 0);

  const handleMainCommentSubmit = (content: string) => {
    const newComment: CommentData = {
      id: `new-${Date.now()}`,
      authorName: CURRENT_USER.name,
      authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLjhx4Q2PaQiT2ncDj3RABa0263YBCgk_4kG4-UlmvpMMUNdOpgN88LHJyE4zmHKDhGXsSlmEJ-PQbICdUokejTOs60a6sd0hcqdFv2AMgSdT9gkh0g8zUqpZU8vh045JSVie6xnlwtxMtODQjavL3TnhAnj_llLSOTguIEeCd_ep_U9tuMGpq82B6g43SU-1hG0sbNteAn2jz24XUVeil5UYcgtGSA-3dnUi6DyjWTUFyytiZZVvfUyET1DjhroCdBALWmdClQHE',
      role: 'teacher',
      content,
      timeAgo: 'Vừa xong',
      isDeleted: false,
    };
    setComments([newComment, ...comments]);
  };

  const handleReplySubmit = (parentId: string, content: string) => {
    setComments(prev => prev.map(c => {
      if (c.id === parentId || c.replies?.some(r => r.id === parentId)) {
        const actualParent = c;
        const newReply: CommentData = {
          id: `reply-${Date.now()}`,
          authorName: CURRENT_USER.name,
          authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLjhx4Q2PaQiT2ncDj3RABa0263YBCgk_4kG4-UlmvpMMUNdOpgN88LHJyE4zmHKDhGXsSlmEJ-PQbICdUokejTOs60a6sd0hcqdFv2AMgSdT9gkh0g8zUqpZU8vh045JSVie6xnlwtxMtODQjavL3TnhAnj_llLSOTguIEeCd_ep_U9tuMGpq82B6g43SU-1hG0sbNteAn2jz24XUVeil5UYcgtGSA-3dnUi6DyjWTUFyytiZZVvfUyET1DjhroCdBALWmdClQHE',
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
        <PostSummary />

        <CommentInput onSubmit={handleMainCommentSubmit} />

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
              currentUser={CURRENT_USER}
            />
          ))}

          <Pagination />
        </section>
      </div>
    </div>
  );
}
