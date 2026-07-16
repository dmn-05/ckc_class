'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function BackToPostsButton() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sectionId = searchParams?.get('sectionId');

  return (
    <button
      type="button"
      onClick={() => {
        if (sectionId && sectionId !== '0') {
          router.push(`/lecturer/sections/${sectionId}`);
        } else {
          router.push('/lecturer/posts');
        }
      }}
      style={{ color: '#3525cd', textDecoration: 'none', fontSize: '14px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px', background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit' }}
    >
      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
      {sectionId && sectionId !== '0' ? 'Quay lại lớp học phần' : 'Quay lại Quản lý bài viết'}
    </button>
  );
}
