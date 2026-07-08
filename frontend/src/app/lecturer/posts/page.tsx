import React from 'react';
import type { Metadata } from 'next';
import LecturerPostsList from '@/components/lecturer/posts/LecturerPostsList';

export const metadata: Metadata = {
  title: 'Diễn đàn & Bài viết',
};

export default function LecturerPostsPage() {
  return (
    <div className="bg-background min-h-screen">
      <LecturerPostsList />
    </div>
  );
}
