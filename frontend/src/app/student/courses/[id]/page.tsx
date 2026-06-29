import React from 'react';
import { getStudentCourseSection, getStudentCoursePosts } from '@/app/actions/student-section';
import { getStudentAssignments } from '@/app/actions/student-assignment';
import { getStudentQuizzes } from '@/app/actions/student-quiz';
import ClassroomClient from '../../../../../components/student/courses/ClassroomClient';

export default async function CourseDetailClassroomPage({ params }: { params: { id: string } }) {
  const { id: sectionId } = await params;
  
  // Fetch data on the server
  const [section, posts, assignments, quizzesRes] = await Promise.all([
    getStudentCourseSection(sectionId),
    getStudentCoursePosts(sectionId),
    getStudentAssignments(sectionId),
    getStudentQuizzes(sectionId),
  ]);

  if (!section) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Không tìm thấy lớp học phần hoặc bạn chưa tham gia lớp này.</h2>
      </div>
    );
  }

  const quizzes = quizzesRes?.success ? quizzesRes.data : [];

  return <ClassroomClient section={section} posts={posts} assignments={assignments} quizzes={quizzes} />;
}
