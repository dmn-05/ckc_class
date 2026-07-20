'use client';

import React, { useEffect, useState } from 'react';
import CreatePostForm from '@/components/lecturer/posts/CreatePostForm';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { authHeaders } from '@/lib/auth';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export default function LecturerEditPostPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const [initialData, setInitialData] = useState<any>(null);
  const [initialSectionId, setInitialSectionId] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
    const sId = searchParams.get('sectionId');
    if (sId) setInitialSectionId(sId);

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

  const targetSectionId = initialSectionId || initialData?.lop_hoc_phan_id || initialData?.sectionId;

  return (
    <div style={{ padding: '24px', maxWidth: '1152px', margin: '0 auto', fontFamily: 'var(--font-inter, system-ui, sans-serif)' }}>
      <div style={{ marginBottom: '8px' }}>
        <button
          type="button"
          onClick={() => {
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
          {targetSectionId && targetSectionId !== '0' ? 'Quay lại lớp học phần' : 'Quay lại danh sách'}
        </button>
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
