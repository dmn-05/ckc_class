'use client';

import React, { useEffect, useState } from 'react';
import CreatePostForm from '@/components/lecturer/posts/CreatePostForm';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { authHeaders } from '@/lib/auth';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export default function LecturerEditPostPage() {
  const params = useParams();
  const id = params?.id as string;
  const [initialData, setInitialData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/lecturer/posts/${id}`, {
          headers: authHeaders()
        });
        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }
        const json = await response.json();
        setInitialData(json.data || json);
      } catch (err: any) {
        setError(err.message || 'Lỗi tải bài viết');
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      fetchPost();
    }
  }, [id]);

  if (loading) {
    return <div style={{ padding: '24px', textAlign: 'center' }}>Đang tải dữ liệu bài viết...</div>;
  }

  if (error) {
    return <div style={{ padding: '24px', textAlign: 'center', color: 'red' }}>{error}</div>;
  }

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
          Chỉnh Sửa Bài Viết
        </h1>
        <p style={{ color: '#464555', fontSize: '16px' }}>
          Cập nhật thông tin và nội dung bài viết hiện tại.
        </p>
      </div>

      <CreatePostForm initialData={initialData} isEdit={true} />
    </div>
  );
}
