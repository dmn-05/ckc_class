import React from 'react';
import type { Metadata } from 'next';
import { getLecturerCourseSectionById, getLecturerSectionPosts } from '@/app/actions/lecturer-course-section';
import { getLecturerAssignments } from '@/app/actions/lecturer-assignment';
import { getLecturerQuizzes } from '@/app/actions/lecturer-quiz';
import { getLecturerResources } from '@/app/actions/lecturer-resource';
import { getSectionStudents } from '@/app/actions/student-list';
import LecturerClassroomClient from '@/components/lecturer/sections/LecturerClassroomClient';

export const metadata: Metadata = {
  title: 'Lớp học phần - Cổng thông tin Giảng viên',
};

export default async function LecturerSectionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const sectionId = resolvedParams.id;

  let section = null;
  let posts: any[] = [];
  let assignments: any[] = [];
  let quizzes: any[] = [];
  let resources: any[] = [];
  let students: any[] = [];

  try {
    const sectionRes = await getLecturerCourseSectionById(sectionId);
    section = sectionRes?.data || sectionRes;

    const [postsData, allAssignments, allQuizzes, allResources, studentsRes] = await Promise.all([
      getLecturerSectionPosts(sectionId).catch(() => []),
      getLecturerAssignments().catch(() => []),
      getLecturerQuizzes().catch(() => []),
      getLecturerResources().catch(() => []),
      getSectionStudents(sectionId).catch(() => ({ success: false, data: [] })),
    ]);

    posts = Array.isArray(postsData) ? postsData : [];
    assignments = (allAssignments || []).filter((a: any) => a.sectionId === sectionId || a.lop_hoc_phan_id?.toString() === sectionId);
    quizzes = (allQuizzes || []).filter((q: any) => q.sectionId === sectionId || q.lop_hoc_phan_id?.toString() === sectionId);
    resources = (allResources || []).filter((r: any) => r.sectionId === sectionId || r.lop_hoc_phan_id?.toString() === sectionId);
    students = studentsRes.success && Array.isArray(studentsRes.data) ? studentsRes.data : [];
  } catch (error) {
    console.error('Error fetching section details:', error);
  }

  if (!section) {
    return (
      <div style={{ padding: '48px 24px', textAlign: 'center', color: '#64748b' }}>
        <h2>Không tìm thấy lớp học phần hoặc bạn không có quyền truy cập.</h2>
      </div>
    );
  }

  return (
    <LecturerClassroomClient
      section={section}
      posts={posts}
      assignments={assignments}
      quizzes={quizzes}
      resources={resources}
      students={students}
    />
  );
}
