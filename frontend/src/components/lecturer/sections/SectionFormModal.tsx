'use client';

import React, { useState, useEffect } from 'react';
import styles from './SectionsManagement.module.css';
import { SectionData, SectionStatus } from './SectionCard';

interface SectionFormModalProps {
  initialData?: SectionData | null;
  onSave: (data: Omit<SectionData, 'id'> | SectionData) => void;
  onClose: () => void;
}

export default function SectionFormModal({ initialData, onSave, onClose }: SectionFormModalProps) {
  const [formData, setFormData] = useState({
    subjectName: '',
    code: '',
    semester: 'HK1',
    academicYear: '2023-2024',
    room: '',
    schedule: '',
    maxStudents: 40,
    enrolledStudents: 0,
    status: 'upcoming' as SectionStatus,
    description: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'maxStudents' || name === 'enrolledStudents' ? Number(value) : value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (initialData) {
      onSave({ ...formData, id: initialData.id });
    } else {
      onSave(formData);
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>
            {initialData ? 'Chỉnh sửa Học phần' : 'Thêm Học phần mới'}
          </h3>
          <button className={styles.btnCloseModal} onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.modalBody}>
            <div className={styles.formGrid}>
              <div className={styles.formGroupFull}>
                <label className={styles.formLabel}>Tên môn học</label>
                <input 
                  type="text" 
                  name="subjectName"
                  required
                  className={styles.formInput} 
                  value={formData.subjectName}
                  onChange={handleChange}
                  placeholder="VD: Lập trình Web"
                />
              </div>

              <div>
                <label className={styles.formLabel}>Mã lớp học phần</label>
                <input 
                  type="text" 
                  name="code"
                  required
                  className={styles.formInput} 
                  value={formData.code}
                  onChange={handleChange}
                  placeholder="VD: D19CQCN01-N"
                />
              </div>

              <div>
                <label className={styles.formLabel}>Học kỳ</label>
                <select name="semester" className={styles.formInput} value={formData.semester} onChange={handleChange}>
                  <option value="HK1">Học kỳ 1</option>
                  <option value="HK2">Học kỳ 2</option>
                  <option value="HK3">Học kỳ Hè</option>
                </select>
              </div>

              <div>
                <label className={styles.formLabel}>Năm học</label>
                <input 
                  type="text" 
                  name="academicYear"
                  required
                  className={styles.formInput} 
                  value={formData.academicYear}
                  onChange={handleChange}
                  placeholder="VD: 2023-2024"
                />
              </div>

              <div>
                <label className={styles.formLabel}>Phòng học</label>
                <input 
                  type="text" 
                  name="room"
                  required
                  className={styles.formInput} 
                  value={formData.room}
                  onChange={handleChange}
                  placeholder="VD: Lab 1, Cơ sở A"
                />
              </div>

              <div>
                <label className={styles.formLabel}>Lịch học</label>
                <input 
                  type="text" 
                  name="schedule"
                  required
                  className={styles.formInput} 
                  value={formData.schedule}
                  onChange={handleChange}
                  placeholder="VD: Thứ 3, Ca 1"
                />
              </div>

              <div>
                <label className={styles.formLabel}>Sĩ số tối đa</label>
                <input 
                  type="number" 
                  name="maxStudents"
                  min="1"
                  required
                  className={styles.formInput} 
                  value={formData.maxStudents}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className={styles.formLabel}>Trạng thái</label>
                <select name="status" className={styles.formInput} value={formData.status} onChange={handleChange}>
                  <option value="upcoming">Sắp diễn ra</option>
                  <option value="active">Đang mở (Active)</option>
                  <option value="completed">Đã kết thúc</option>
                  <option value="cancelled">Đã hủy</option>
                </select>
              </div>

              <div className={styles.formGroupFull}>
                <label className={styles.formLabel}>Mô tả lớp học</label>
                <textarea 
                  name="description"
                  className={styles.formInput} 
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Nhập mô tả thêm về lớp học phần này..."
                  rows={3}
                />
              </div>
            </div>
          </div>

          <div className={styles.modalFooter}>
            <button type="button" className={styles.btnCancel} onClick={onClose}>
              Hủy
            </button>
            <button type="submit" className={styles.btnSave}>
              {initialData ? 'Lưu thay đổi' : 'Tạo Lớp HP'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
