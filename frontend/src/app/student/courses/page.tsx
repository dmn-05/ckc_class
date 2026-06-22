import React from 'react';
import CourseHeader from '../../../../components/student/courses/CourseHeader';
import EnrolledCourses, { CourseType } from '../../../../components/student/courses/EnrolledCourses';
import CourseSidebar, { TaskType, QuizType } from '../../../../components/student/courses/CourseSidebar';
import styles from '@/components/student/courses/CourseManagement.module.css';

// Mock Data

const ACTIVE_COURSES: CourseType[] = [
  {
    id: 'c1',
    code: 'IT4012',
    semester: 'HK1 2023',
    title: 'Thiết kế Giao diện người dùng',
    instructor: 'ThS. Nguyễn Trần Bảo Nam',
    schedule: 'Thứ 3 (Tiết 1-4) • Phòng A.502',
    enrolledStudents: 42,
    isActive: true,
    themeColor: 'primary'
  },
  {
    id: 'c2',
    code: 'CS2015',
    semester: 'HK1 2023',
    title: 'Cấu trúc dữ liệu & Giải thuật',
    instructor: 'TS. Phạm Hoàng Việt',
    schedule: 'Thứ 5 (Tiết 6-9) • Phòng B.211',
    enrolledStudents: 38,
    isActive: true,
    themeColor: 'secondary'
  }
];

const COMPLETED_COURSES: CourseType[] = [
  {
    id: 'c3',
    code: 'ENG101',
    semester: 'HK2 2022',
    title: 'Tiếng Anh Chuyên ngành 1',
    instructor: '',
    schedule: '',
    enrolledStudents: 0,
    isActive: false,
    score: '9.2 / 10.0'
  }
];

const MOCK_TASKS: TaskType[] = [
  {
    id: 't1',
    title: 'UI Case Study #2',
    courseName: 'Thiết kế Giao diện',
    dueDate: 'Còn lại 4 giờ',
    isUrgent: true
  },
  {
    id: 't2',
    title: 'Tree Structures Lab',
    courseName: 'Cấu trúc dữ liệu',
    dueDate: 'Hạn: 23:59 • 15/10',
    isUrgent: false
  }
];

const MOCK_QUIZZES: QuizType[] = [
  {
    id: 'q1',
    day: '18',
    month: 'OCT',
    title: 'Quiz 3: Typography & Color',
    time: '08:30 • 45 phút'
  },
  {
    id: 'q2',
    day: '21',
    month: 'OCT',
    title: 'Midterm Quiz: Complexity',
    time: '13:30 • 60 phút'
  }
];

export default function StudentCoursesPage() {
  return (
    <div className={styles.pageContainer}>
      <CourseHeader
        semester="Học kỳ 1"
        year="2023 - 2024"
        totalCredits={18}
        maxCredits={24}
      />

      <div className={styles.gridContainer}>
        <EnrolledCourses
          activeCourses={ACTIVE_COURSES}
          completedCourses={COMPLETED_COURSES}
        />
        <CourseSidebar
          tasks={MOCK_TASKS}
          quizzes={MOCK_QUIZZES}
          gpa="3.64"
          progress={78}
        />
      </div>
    </div>
  );
}
