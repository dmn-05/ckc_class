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
      {sectionId && sectionId !== '0' ? 'Quay lại lớp học phần' : 'Quay lại danh sách'}
    </button>
  );
}
