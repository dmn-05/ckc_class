'use client';

import React, { useState, useEffect } from 'react';
import styles from './AdminCreateStudents.module.css';
import { createStudent, getClasses } from '@/app/actions/student';
import { getFaculties } from '@/app/actions/faculty';
import { useRouter } from 'next/navigation';

export default function CreateStudentForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const [faculties, setFaculties] = useState<any[]>([]);
  const [classes, setClasses] = useState<any[]>([]);

  const [formData, setFormData] = useState({
    ho_ten: '',
    email: '',
    so_dien_thoai: '',
    ngay_sinh: '',
    gioi_tinh: 'nam',
    ma_sinh_vien: '',
    khoa_id: '',
    lop_id: '',
    trang_thai: 'dang_hoc',
  });

  useEffect(() => {
    const loadOptions = async () => {
      try {
        const [facs, cls] = await Promise.all([
          getFaculties(),
          getClasses()
        ]);
        setFaculties(facs);
        setClasses(cls);
        if (facs.length > 0) {
          const defaultFacId = facs[0].id.toString();
          const filteredCls = cls.filter((c: any) => c.khoa_id.toString() === defaultFacId);
          setFormData(prev => ({
            ...prev,
            khoa_id: defaultFacId,
            lop_id: filteredCls.length > 0 ? filteredCls[0].id.toString() : ''
          }));
        }
      } catch (err) {
        console.error('Failed to load options', err);
      }
    };
    loadOptions();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'khoa_id') {
      const filteredClasses = classes.filter(c => c.khoa_id.toString() === value);
      setFormData(prev => ({
        ...prev,
        [name]: value,
        lop_id: filteredClasses.length > 0 ? filteredClasses[0].id.toString() : ''
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await createStudent(formData);
      setSubmitStatus('success');
      setTimeout(() => {
        router.push('/admin/students');
      }, 1500);
    } catch (err: any) {
      alert(err.message || 'Thêm sinh viên thất bại');
      setIsSubmitting(false);
      setSubmitStatus('idle');
    }
  };

  return (
    <div className={styles.layoutGrid}>
      {/* Left Column: Profile Picture & Core Info */}
      <div className={styles.leftColumn}>
        <section className={`${styles.card} ${styles.cardCenter}`}>
          <div className={styles.avatarUploadWrapper}>
            <div className={styles.avatarBox}>
              <span className={`material-symbols-outlined ${styles.avatarIcon}`}>add_a_photo</span>
            </div>
            <div className={styles.avatarOverlay}>
              {/* Hidden Input Trigger */}
            </div>
          </div>
          <h3 className={styles.cardTitle}>Ảnh đại diện</h3>
          <p className={styles.avatarHelpText}>
            Tải lên ảnh chân dung. Max size 10MB. JPG or PNG.
          </p>
          <button className={styles.btnUpload} type="button">Upload Image</button>
        </section>

        <section className={styles.card}>
          <h3 className={styles.cardTitle}>
            <span className={`material-symbols-outlined ${styles.cardTitleIcon}`}>assignment_ind</span>
            Thông tin định danh
          </h3>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Mã Sinh Viên *</label>
            <input
              className={styles.formInput}
              type="text"
              name="ma_sinh_vien"
              value={formData.ma_sinh_vien}
              onChange={handleChange}
              placeholder="Ví dụ: STU-2024-001"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Trạng thái</label>
            <select
              className={`${styles.formInput} ${styles.formSelect}`}
              name="trang_thai"
              value={formData.trang_thai}
              onChange={handleChange}
            >
              <option value="dang_hoc">Đang học</option>
              <option value="tam_nghi">Bảo lưu</option>
              <option value="da_tot_nghiep">Đã tốt nghiệp</option>
            </select>
          </div>
        </section>
      </div>

      {/* Right Column: Personal & Academic Info */}
      <div className={styles.rightColumn}>
        <form onSubmit={handleSubmit} className={styles.leftColumn}>
          {/* Personal Info Card */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              <span className={`material-symbols-outlined ${styles.cardTitleIcon}`}>person</span>
              Thông tin cá nhân
            </h3>
            <div className={styles.grid2Col}>
              <div className={styles.colSpan2}>
                <label className={styles.formLabel}>Họ và tên *</label>
                <input
                  className={styles.formInput}
                  type="text"
                  name="ho_ten"
                  value={formData.ho_ten}
                  onChange={handleChange}
                  placeholder="Nhập họ và tên sinh viên"
                  required
                />
              </div>
              <div>
                <label className={styles.formLabel}>Ngày sinh</label>
                <input
                  className={styles.formInput}
                  type="date"
                  name="ngay_sinh"
                  value={formData.ngay_sinh}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className={styles.formLabel}>Giới tính</label>
                <div className={styles.radioGroup}>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="gioi_tinh"
                      value="nam"
                      checked={formData.gioi_tinh === 'nam'}
                      onChange={handleChange}
                      className={styles.radioInput}
                    />
                    <span className={styles.radioText}>Nam</span>
                  </label>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="gioi_tinh"
                      value="nu"
                      checked={formData.gioi_tinh === 'nu'}
                      onChange={handleChange}
                      className={styles.radioInput}
                    />
                    <span className={styles.radioText}>Nữ</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info Card */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              <span className={`material-symbols-outlined ${styles.cardTitleIcon}`}>contact_mail</span>
              Thông tin liên hệ
            </h3>
            <div className={styles.grid2Col}>
              <div>
                <label className={styles.formLabel}>Email *</label>
                <input
                  className={styles.formInput}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="student@university.edu"
                  required
                />
              </div>
              <div>
                <label className={styles.formLabel}>Số điện thoại</label>
                <input
                  className={styles.formInput}
                  type="tel"
                  name="so_dien_thoai"
                  value={formData.so_dien_thoai}
                  onChange={handleChange}
                  placeholder="+84 000 000 000"
                />
              </div>
            </div>
          </div>

          {/* Academic Placement Card */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              <span className={`material-symbols-outlined ${styles.cardTitleIcon}`}>school</span>
              Thông tin học thuật
            </h3>
            <div className={styles.grid2Col}>
              <div>
                <label className={styles.formLabel}>Khoa *</label>
                <select
                  className={`${styles.formInput} ${styles.formSelect}`}
                  name="khoa_id"
                  value={formData.khoa_id}
                  onChange={handleChange}
                  required
                >
                  {faculties.map(f => (
                    <option key={f.id} value={f.id}>{f.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={styles.formLabel}>Lớp *</label>
                <select
                  className={`${styles.formInput} ${styles.formSelect}`}
                  name="lop_id"
                  value={formData.lop_id}
                  onChange={handleChange}
                  required
                >
                  <option value="">Chọn lớp</option>
                  {classes.filter(c => c.khoa_id.toString() === formData.khoa_id.toString()).map(c => (
                    <option key={c.id} value={c.id}>{c.ma_lop || c.ten_lop}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className={styles.formActions}>
            <button
              type="button"
              className={styles.btnDiscard}
              onClick={() => router.push('/admin/students')}
            >
              Hủy
            </button>
            <button
              type="submit"
              className={styles.btnSubmit}
              disabled={isSubmitting}
              style={{ backgroundColor: submitStatus === 'success' ? '#059669' : '' }}
            >
              {isSubmitting && submitStatus === 'idle' ? (
                <>
                  <span className="material-symbols-outlined" style={{ animation: 'spin 1s linear infinite' }}>sync</span>
                  Đang lưu...
                </>
              ) : submitStatus === 'success' ? (
                <>
                  <span className="material-symbols-outlined">check_circle</span>
                  Thêm Thành Công
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined">person_add</span>
                  Thêm Sinh Viên
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
