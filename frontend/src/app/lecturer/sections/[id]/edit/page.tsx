import React from 'react';
import type { Metadata } from 'next';
import UpdateCourseSectionForm from '@/components/admin/course-sections/UpdateCourseSectionForm';

export const metadata: Metadata = {
  title: 'Chỉnh sửa lớp học phần',
};

interface LecturerEditCourseSectionPageProps {
  params: {
    id: string;
  };
}

export default async function LecturerEditCourseSectionPage({ params }: LecturerEditCourseSectionPageProps) {
  const resolvedParams = await params;
  return (
    <div style={{ padding: '24px', maxWidth: '1280px', margin: '0 auto' }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#191c1e', marginBottom: '8px' }}>
          Sửa Thông Tin Lớp Học Phần
        </h1>
        <p style={{ color: '#464555' }}>
          Cập nhật thông tin chi tiết của lớp học phần.
        </p>
      </div>

      <UpdateCourseSectionForm sectionId={resolvedParams.id} isLecturer={true} />
    </div>
  );
}
