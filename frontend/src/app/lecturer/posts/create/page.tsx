import React from 'react';
import type { Metadata } from 'next';
import CreatePostForm from '@/components/lecturer/posts/CreatePostForm';
import BackToPostsButton from '@/components/lecturer/posts/BackToPostsButton';

export const metadata: Metadata = {
  title: 'Tạo bài viết mới',
};

export default function LecturerCreatePostPage() {
  return (
    <div style={{ padding: '24px', maxWidth: '1152px', margin: '0 auto', fontFamily: 'var(--font-inter, system-ui, sans-serif)' }}>
      <div style={{ marginBottom: '8px' }}>
        <BackToPostsButton />
      </div>
      <div style={{ marginBottom: '32px', marginTop: '16px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#191c1e', marginBottom: '8px', letterSpacing: '-0.02em' }}>
          Thêm Bài Viết Mới
        </h1>
        <p style={{ color: '#464555', fontSize: '16px' }}>
          Tạo thông báo, bài viết, tài liệu, hoặc bài tập cho sinh viên trong lớp học phần.
        </p>
      </div>

      <CreatePostForm />
    </div>
  );
}
