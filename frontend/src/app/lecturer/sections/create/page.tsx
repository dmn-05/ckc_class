import React from 'react';
import CreateCourseSectionForm from '@/components/admin/course-sections/CreateCourseSectionForm';

export default function LecturerCreateCourseSectionPage() {
  return (
    <div style={{ padding: '24px', maxWidth: '1280px', margin: '0 auto' }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#191c1e', marginBottom: '8px' }}>
          Thêm Lớp Học Phần Mới
        </h1>
        <p style={{ color: '#464555' }}>
          Tạo lớp học phần mới và tự động gán bạn làm giảng viên phụ trách.
        </p>
      </div>

      <CreateCourseSectionForm isLecturer={true} />
    </div>
  );
}
