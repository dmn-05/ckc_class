'use client';

import React from 'react';
import StudentCommentItem, { StudentCommentType } from './StudentCommentItem';

interface StudentCommentListProps {
  comments: StudentCommentType[];
  onReplySubmit: (commentId: string, content: string) => void;
}

export default function StudentCommentList({ comments, onReplySubmit }: StudentCommentListProps) {
  if (comments.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#64748b' }}>
        Chưa có bình luận nào. Hãy là người đầu tiên bình luận!
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {comments.map((comment) => (
        <StudentCommentItem
          key={comment.id}
          comment={comment}
          onReplySubmit={onReplySubmit}
        />
      ))}
    </div>
  );
}
