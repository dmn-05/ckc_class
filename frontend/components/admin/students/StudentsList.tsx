import React from 'react';
import StudentCard, { StudentData } from './StudentCard';
import styles from './AdminStudents.module.css';

const mockStudents: StudentData[] = [
  {
    id: '1',
    name: 'Nguyễn Văn An',
    code: 'SV-2024001',
    classCode: 'CD21TT1',
    faculty: 'CNTT',
    email: 'annv@ckc.edu.vn',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApOTVo-bX--SFIbZwL4WxOd1bET1WOMC0_JYZHvYUvv-k6ILyUkdkTcYQs_7rC2hCToiM9VMH35W9u8pfw5E-y7TZfVRPR4LPqHeqx0Vqx-ZMxt539foOjOrLvY_hIJOR5oI-9tm_wZXvIUuWFCQBeZ5b1EOLpCYFDpT3f4Ab1TNdMWGzitzVR8OrN4ytJKTGO-hEEstroOOY4D6IZc2r7fSrxSCa4O7BjGC9A1gKOd4SULDbRJYN8CEFGEzyJlLmp4gtDox0zMcc',
    statusClassName: 'bg-green-500',
    borderClassName: 'border-l-primary'
  },
  {
    id: '2',
    name: 'Trần Thị Lan',
    code: 'SV-2024002',
    classCode: 'CD21CK2',
    faculty: 'Cơ khí',
    email: 'lantt@ckc.edu.vn',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgm4SBWL72b4qBpdFQ7mCIe5WP5ZXJrES0IpmzhcYRrYgF_PRAyCcyGat-RAvRTRJe7T5xU6al2Ouy8U6F1933rrLBAkYt-9snGuTz_0A_VBzeWauOB4-YwcM4NDMzlbTBnk1nQFKlpblRc3-v3S_RPd-CCUTPbOkV6pKdYI_bIidW2JWclCuOymWSiTNzE0zaY1ev0hBrUjbXfZC5brihY0vz-nRHO5jb9_KKlMiY5gT75rBWKaCob1T9YlwqzgSacJ_KlsmjfuQ',
    statusClassName: 'bg-green-500',
    borderClassName: 'border-l-secondary'
  },
  {
    id: '3',
    name: 'Lê Minh Tâm',
    code: 'SV-2024005',
    classCode: 'CD22DT4',
    faculty: 'Điện - Điện tử',
    email: 'tamlm@ckc.edu.vn',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVOSgRlZcHxzF_kESGfBPhC9jKnbvMC2UFejOg15dHJyqIOQMbG62TFXrCpMhW0krxtPeyxci3ZA0BGch5B4k4xi8-AXwTHIxBy5oeaEwba4T6rFgJihPHRjCkU7yA_Vurer4gx6H9xgKc8tCQLou9laBnzyd45PADVmSK_pepMkLcxm2ITq8k-6Zr61V5z6xMQePOCCvgycSzABFV6v1ffzl40BJ-WvpY232eeu5XjL-VQGTTftNyi532ATxdEwOv6_wmaBuE-14',
    statusClassName: 'bg-error',
    borderClassName: 'border-l-error'
  },
  {
    id: '4',
    name: 'Phạm Hoàng Nam',
    code: 'SV-2024008',
    classCode: 'CD21TH3',
    faculty: 'Công nghệ thông tin',
    email: 'namph@ckc.edu.vn',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMNIDH9_E8uWkQz5s1933rrLBAkYt-9snGuTz_0A_VBzeWauOB4-YwcM4NDMzlbTBnk1nQFKlpblRc3-v3S_RPd-CCUTPbOkV6pKdYI_bIidW2JWclCuOymWSiTNzE0zaY1ev0hBrUjbXfZC5brihY0vz-nRHO5jb9_KKlMiY5gT75rBWKaCob1T9YlwqzgSacJ_KlsmjfuQ',
    statusClassName: 'bg-green-500',
    borderClassName: 'border-l-tertiary'
  }
];

export default function StudentsList() {
  return (
    <div className={styles.studentList}>
      {mockStudents.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}
