import React from 'react';
import type { Metadata } from 'next';
import CreatePostForm from '@/components/lecturer/posts/CreatePostForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tạo bài viết mới',
};

export default function LecturerCreatePostPage() {
  return (
    <div style={{ padding: '24px', maxWidth: '1152px', margin: '0 auto', fontFamily: 'var(--font-inter, system-ui, sans-serif)' }}>
      <div style={{ marginBottom: '8px' }}>
        <Link href="/lecturer/posts" style={{ color: '#3525cd', textDecoration: 'none', fontSize: '14px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
          Quay lại Quản lý bài viết
        </Link>
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
