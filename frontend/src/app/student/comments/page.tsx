'use client';

import React, { useState } from 'react';
import styles from '@/components/student/comments/StudentComments.module.css';
import StudentCommentForm from '@/components/student/comments/StudentCommentForm';
import StudentCommentList from '@/components/student/comments/StudentCommentList';
import { StudentCommentType, ReplyType } from '@/components/student/comments/StudentCommentItem';

const CURRENT_USER_NAME = 'Nguyễn Văn A';

const INITIAL_COMMENTS: StudentCommentType[] = [
  {
    id: '1',
    author: 'Giảng viên Trần B',
    content: 'Các em chú ý nộp bài tập lớn trước ngày 30/06 nhé. Mọi thắc mắc có thể hỏi trực tiếp tại đây.',
    date: '2026-06-19 08:00 AM',
    isCurrentUser: false,
    replies: [
      {
        id: 'r1',
        author: 'Lê Thị C',
        content: 'Thầy cho em hỏi phần báo cáo cần tối thiểu bao nhiêu trang ạ?',
        date: '2026-06-19 09:15 AM',
        isCurrentUser: false,
      }
    ],
  },
  {
    id: '2',
    author: 'Nguyễn Văn A',
    content: 'Tài liệu buổi học hôm nay rất hay. Cảm ơn thầy ạ.',
    date: '2026-06-20 10:30 AM',
    isCurrentUser: true,
    replies: [],
  }
];

export default function StudentCommentsPage() {
  const [comments, setComments] = useState<StudentCommentType[]>(INITIAL_COMMENTS);

  // Handle posting a main comment
  const handleMainSubmit = (content: string) => {
    const newComment: StudentCommentType = {
      id: Date.now().toString(),
      author: CURRENT_USER_NAME,
      content,
      date: new Date().toLocaleString('en-US', {
        year: 'numeric', month: '2-digit', day: '2-digit', 
        hour: '2-digit', minute: '2-digit', hour12: true
      }).replace(',', ''),
      isCurrentUser: true,
      replies: [],
    };
    
    setComments([newComment, ...comments]);
  };

  // Handle posting a reply to an existing comment
  const handleReplySubmit = (commentId: string, content: string) => {
    const newReply: ReplyType = {
      id: `r-${Date.now()}`,
      author: CURRENT_USER_NAME,
      content,
      date: new Date().toLocaleString('en-US', {
        year: 'numeric', month: '2-digit', day: '2-digit', 
        hour: '2-digit', minute: '2-digit', hour12: true
      }).replace(',', ''),
      isCurrentUser: true,
    };

    setComments((prev) => 
      prev.map((c) => {
        if (c.id === commentId) {
          return {
            ...c,
            replies: [...c.replies, newReply],
          };
        }
        return c;
      })
    );
  };

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Thảo luận Khóa học</h1>
      <p className={styles.pageSubtitle}>
        Trao đổi, đặt câu hỏi và chia sẻ kiến thức với giảng viên và các bạn học viên khác.
      </p>

      {/* Main Comment Form */}
      <StudentCommentForm 
        placeholder="Bắt đầu một chủ đề thảo luận mới..." 
        onSubmit={handleMainSubmit} 
      />

      <hr style={{ border: 0, borderBottom: '1px solid #e2e8f0', margin: '2rem 0' }} />

      {/* List of Comments */}
      <StudentCommentList 
        comments={comments} 
        onReplySubmit={handleReplySubmit} 
      />
    </div>
  );
}
