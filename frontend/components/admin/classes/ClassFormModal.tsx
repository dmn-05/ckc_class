'use client';

import React, { useState, useEffect } from 'react';
import styles from './AdminClasses.module.css';
import { ClassData, ClassStatus } from './ClassCard';

interface ClassFormModalProps {
  initialData?: ClassData | null;
  onSave: (data: Omit<ClassData, 'id'> | ClassData) => void;
  onClose: () => void;
}

export default function ClassFormModal({ initialData, onSave, onClose }: ClassFormModalProps) {
  const [formData, setFormData] = useState<Omit<ClassData, 'id'>>({
    code: '',
    name: '',
    faculty: '',
    enrollmentYear: new Date().getFullYear(),
    studentCount: 0,
    status: 'dang_hoc' as ClassStatus,
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        code: initialData.code,
        name: initialData.name,
        faculty: initialData.faculty,
        enrollmentYear: initialData.enrollmentYear,
        studentCount: initialData.studentCount,
        status: initialData.status,
      });
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: (name === 'enrollmentYear' || name === 'studentCount') ? Number(value) : value 
    }));
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
            {initialData ? 'Chỉnh sửa Lớp' : 'Thêm Lớp mới'}
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
                <label className={styles.formLabel}>Tên lớp</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className={styles.formInput} 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="VD: Công nghệ thông tin 1"
                />
              </div>

              <div>
                <label className={styles.formLabel}>Mã lớp</label>
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
                <label className={styles.formLabel}>Khoa</label>
                <input 
                  type="text" 
                  name="faculty"
                  required
                  className={styles.formInput} 
                  value={formData.faculty}
                  onChange={handleChange}
                  placeholder="VD: Công nghệ thông tin"
                />
              </div>

              <div>
                <label className={styles.formLabel}>Năm nhập học</label>
                <input 
                  type="number" 
                  name="enrollmentYear"
                  required
                  className={styles.formInput} 
                  value={formData.enrollmentYear}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className={styles.formLabel}>Sĩ số</label>
                <input 
                  type="number" 
                  name="studentCount"
                  min="0"
                  required
                  className={styles.formInput} 
                  value={formData.studentCount}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className={styles.formLabel}>Trạng thái</label>
                <select name="status" className={styles.formInput} value={formData.status} onChange={handleChange}>
                  <option value="dang_hoc">Đang học</option>
                  <option value="da_tot_nghiep">Đã tốt nghiệp</option>
                </select>
              </div>
            </div>
          </div>

          <div className={styles.modalFooter}>
            <button type="button" className={styles.btnCancel} onClick={onClose}>
              Hủy
            </button>
            <button type="submit" className={styles.btnSave}>
              {initialData ? 'Lưu thay đổi' : 'Tạo Lớp'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
