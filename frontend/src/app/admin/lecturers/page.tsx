'use client';

import React, { useState } from 'react';
import styles from '@/components/admin/lecturers/AdminLecturers.module.css';
import LecturerDashboard from '@/components/admin/lecturers/LecturerDashboard';
import LecturerList from '@/components/admin/lecturers/LecturerList';
import { LecturerData } from '@/components/admin/lecturers/LecturerCard';
import Link from 'next/link';
const INITIAL_LECTURERS: LecturerData[] = [
  {
    id: 'l1',
    name: 'Dr. Nguyễn Văn A',
    code: 'GV-001',
    facultyName: 'Khoa CNTT',
    email: 'nva.it@ckc.edu.vn',
    isActive: true,
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNISFABqVsLgvuamkEPReCzmnSmO7VxRxBXPkL4FySB15KUHHgdK-oxWD3I8iQ0gJpNobKMZvdlN9d6C5WkKIy2u0ShoWgHhqQ4bQlTjAgOM2KJoUzs_CZU5B1COpqUEWG8sb2z7t5VeqlFMnjlhb1lt0iD-n_sCJ-4qYYnIV0QR_VG7XM0PlnAe35pTT3xmyZ7Uzw9wlMZE5HcVVoRsS-UZ23i-tpbZHMqULqQQkkt8w9Y6xOVYxJCxUVM0kLIyJbi3-uZ4gfYUk',
    theme: 'primary'
  },
  {
    id: 'l2',
    name: 'Dr. Trần Thị B',
    code: 'GV-002',
    facultyName: 'Khoa CNTT',
    email: 'ttb.ds@ckc.edu.vn',
    isActive: true,
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAd19UdlkSEzFgjh8fajSP4WpJ-eCdiOqV1wsKzl8Wzt8D4xkibDiX4i1EGzUcoyw8q1Qzr8tghC1oYxkL40tov-xgB0pQ0LT3_LwnHDLsmL7xN-wlHQvAJ6IBkc4kc6NUanxio4DH6gv-aLv0eSuzsUunXP4Ikw9T69vPUZqz7vG4xPBNbCQShOqCB9GMj1h5CKiWIPuNjUOAIZoi6TWdd3tyK8swY-aRATzfwq6BKMPM-cjFtwqQUxA54746UXQk_AXszyMQpgO8',
    theme: 'secondary'
  },
  {
    id: 'l3',
    name: 'ThS. Lê Hoàng C',
    code: 'GV-003',
    facultyName: 'Khoa Cơ Khí',
    email: 'lhc.me@ckc.edu.vn',
    isActive: true,
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOU1t-DPCXnOrQs9RKEjZHvNxFfO1g8791jz69QkvI4__cLUu_O1vkIuG175zT5vUopXjmh-uXlWwj_8Dy1_dj6TlEnx-4nkbegu9_YRCI4NxwunV2xYWrvGEiISRGa0aXXF7uCLQM7CBr-owg3w-C_vGsmxM_SzwA_gEGJVsyzcVWs23NHf0F3sM4ZIufHrRx6bCMRpxJVJ2hiNQ-Im5pG18ihuxfJSRHAjN1FM1hKzwAbCRm2qlFooi_tn_bUEu_ul-18RDI8N4',
    theme: 'tertiary'
  },
  {
    id: 'l4',
    name: 'PGS.TS Phạm Minh D',
    code: 'GV-004',
    facultyName: 'Khoa Điện',
    email: 'pmd.es@ckc.edu.vn',
    isActive: false,
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSNMuzi71BSwZPqxlisDzvMeYMUSQbTJgy_ktkY418rourWrHCJpz33ptBh9JHj4mGvMNUVRSelXV7dFHSQfFnurGxCsFDaIjz_EsHaFmD_5SmlQyIf-lGOCuqK4L4n5rpHhFOdovqSbyIRNXIvX6Upr2m86AnLv_zQw1LOXU4OKIf8o0E097YpHDj60E-kckfB2WuQaTiE46JislFpYz8RrI8CrHY-S30iZlHyBxt0RLeRUeHmqsHaDR3DabTScibI-I9T2XdKS8',
    theme: 'primary'
  }
];

export default function LecturersManagementPage() {
  const [lecturers, setLecturers] = useState<LecturerData[]>(INITIAL_LECTURERS);
  const [facultyFilter, setFacultyFilter] = useState<string>('all');
  const [listFilter, setListFilter] = useState<string>('all');

  const totalCount = 85;
  const professorsCount = 12;
  const seniorLecturersCount = 28;
  const lecturersCount = 45;

  const handleEdit = (lecturer: LecturerData) => {
    console.log('Edit lecturer', lecturer);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa Giảng viên này?')) {
      setLecturers(prev => prev.filter(l => l.id !== id));
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Quản lý Giảng viên</h1>
          <p className={styles.pageSubtitle}>Danh sách nhân sự học thuật năm học 2023-2024</p>
        </div>

        <Link href="/admin/lecturers/create" className={styles.btnAddLecturer}>
          <span className="material-symbols-outlined">person_add</span>
          Thêm Giảng viên
        </Link>
      </div>

      <div className={styles.layoutGrid}>
        <LecturerDashboard
          totalCount={totalCount}
          professorsCount={professorsCount}
          seniorLecturersCount={seniorLecturersCount}
          lecturersCount={lecturersCount}
          facultyFilter={facultyFilter}
          onFacultyFilterChange={setFacultyFilter}
        />

        <LecturerList
          lecturers={lecturers}
          currentFilter={listFilter}
          onFilterChange={setListFilter}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
