import React from 'react';
import type { Metadata } from 'next';
import CourseHeader from '../../../../components/student/courses/CourseHeader';
import EnrolledCourses, { CourseType } from '../../../../components/student/courses/EnrolledCourses';
import styles from '@/components/student/courses/CourseManagement.module.css';
import { getStudentCourseSections } from '@/app/actions/student-section';

export const metadata: Metadata = {
  title: 'Lớp học phần',
};

export default async function StudentCoursesPage() {
  const sections = await getStudentCourseSections();
  
  const activeCourses: CourseType[] = sections.map((sec: any) => ({
    id: sec.id.toString(),
    code: sec.ma_lop_hoc_phan,
    semester: sec.hoc_ky ? `Học kỳ ${sec.hoc_ky} ${sec.nam_hoc}` : 'Không rõ',
    title: sec.ten_lop || sec.mon_hoc?.ten_mon || 'Không có môn học',
    instructor: sec.giang_vien && sec.giang_vien.nguoi_dung 
        ? sec.giang_vien.nguoi_dung.ho_ten 
        : 'Chưa cập nhật',
    schedule: `Thứ ${sec.thu} (Tiết ${sec.tiet_bat_dau}-${sec.tiet_bat_dau + sec.so_tiet - 1}) • Phòng ${sec.phong_hoc}`,
    enrolledStudents: sec.sinh_viens_count || 0,
    isActive: true,
    themeColor: 'primary' // You could randomize this or assign based on some logic
  }));

  return (
    <div className={styles.pageContainer}>
      <CourseHeader
        semester="Học kỳ hiện tại"
        year=""
        totalCredits={activeCourses.length * 3} // Mock calculation for credits
        maxCredits={24}
      />

      <div className={styles.gridContainer}>
        <EnrolledCourses
          activeCourses={activeCourses}
        />
      </div>
    </div>
  );
}
