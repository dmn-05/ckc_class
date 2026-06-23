'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getFaculties } from '@/app/actions/faculty';
import { getDepartments } from '@/app/actions/department';
import { createLecturer } from '@/app/actions/lecturer';
import styles from './AdminCreateLecturers.module.css';

export default function CreateLecturerForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const [faculties, setFaculties] = useState<any[]>([]);
  const [departments, setDepartments] = useState<any[]>([]);
  const [selectedFaculty, setSelectedFaculty] = useState<string>('');
  
  const [formData, setFormData] = useState({
    code: '',
    status: 'dang_day',
    name: '',
    cccd: '',
    dob: '',
    gender: 'nam',
    email: '',
    phone: '',
    address: '',
    departmentId: '',
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const [facs, depts] = await Promise.all([
          getFaculties(),
          getDepartments()
        ]);
        setFaculties(facs);
        setDepartments(depts);
        if (facs.length > 0) {
          setSelectedFaculty(facs[0].id);
        }
      } catch (err) {
        console.error('Failed to load faculties/departments:', err);
      }
    };
    loadData();
  }, []);

  const filteredDepartments = departments.filter(d => d.facultyId?.toString() === selectedFaculty?.toString());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await createLecturer(formData);
      setSubmitStatus('success');
      setTimeout(() => {
        router.push('/admin/lecturers');
      }, 1000);
    } catch (error: any) {
      console.error(error);
      alert('Có lỗi xảy ra khi thêm giảng viên: ' + (error.message || 'Lỗi không xác định'));
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
            Tải lên ảnh chân dung sắc nét. Kích thước tối đa 10MB. Định dạng JPG hoặc PNG.
          </p>
          <button className={styles.btnUpload} type="button">Tải ảnh lên</button>
        </section>

        <section className={styles.card}>
          <h3 className={styles.cardTitle}>
            <span className={`material-symbols-outlined ${styles.cardTitleIcon}`}>badge</span>
            Thông tin công tác
          </h3>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Lecturer ID (Mã giảng viên)</label>
            <input
              className={styles.formInput}
              type="text"
              placeholder="e.g. GV-2024-001"
              required
              maxLength={20}
              value={formData.code}
              onChange={(e) => setFormData({...formData, code: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Trạng thái</label>
            <select 
              className={`${styles.formInput} ${styles.formSelect}`}
              value={formData.status}
              onChange={(e) => setFormData({...formData, status: e.target.value})}
            >
              <option value="dang_day">Đang giảng dạy</option>
              <option value="ngung_day">Ngừng giảng dạy</option>
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
                <label className={styles.formLabel}>Họ và tên</label>
                <input
                  className={styles.formInput}
                  type="text"
                  placeholder="Nhập họ và tên giảng viên"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className={styles.formLabel}>CCCD / CMND</label>
                <input
                  className={styles.formInput}
                  type="text"
                  placeholder="Nhập số CCCD/CMND"
                  required
                  maxLength={20}
                  value={formData.cccd}
                  onChange={(e) => setFormData({...formData, cccd: e.target.value})}
                />
              </div>
              <div>
                <label className={styles.formLabel}>Ngày sinh</label>
                <input
                  className={styles.formInput}
                  type="date"
                  required
                  value={formData.dob}
                  onChange={(e) => setFormData({...formData, dob: e.target.value})}
                />
              </div>
              <div>
                <label className={styles.formLabel}>Giới tính</label>
                <div className={styles.radioGroup}>
                  <label className={styles.radioLabel}>
                    <input 
                      type="radio" 
                      name="gender" 
                      value="nam"
                      className={styles.radioInput} 
                      checked={formData.gender === 'nam'}
                      onChange={(e) => setFormData({...formData, gender: e.target.value})}
                    />
                    <span className={styles.radioText}>Nam</span>
                  </label>
                  <label className={styles.radioLabel}>
                    <input 
                      type="radio" 
                      name="gender" 
                      value="nu"
                      className={styles.radioInput} 
                      checked={formData.gender === 'nu'}
                      onChange={(e) => setFormData({...formData, gender: e.target.value})}
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
              Thông tin liên lạc
            </h3>
            <div className={styles.grid2Col}>
              <div>
                <label className={styles.formLabel}>Địa chỉ Email</label>
                <input
                  className={styles.formInput}
                  type="email"
                  placeholder="lecturer@ckc.edu.vn"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className={styles.formLabel}>Số điện thoại</label>
                <input
                  className={styles.formInput}
                  type="tel"
                  placeholder="09xx xxx xxx"
                  maxLength={20}
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div className={styles.colSpan2}>
                <label className={styles.formLabel}>Địa chỉ hiện tại</label>
                <textarea
                  className={`${styles.formInput} ${styles.formTextarea}`}
                  rows={3}
                  placeholder="Số nhà, Tên đường, Phường/Xã, Quận/Huyện, Tỉnh/Thành phố..."
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                ></textarea>
              </div>
            </div>
          </div>

          {/* Academic Placement Card */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              <span className={`material-symbols-outlined ${styles.cardTitleIcon}`}>school</span>
              Đơn vị công tác
            </h3>
            <div className={styles.grid2Col}>
              <div>
                <label className={styles.formLabel}>Khoa</label>
                <select
                  className={`${styles.formInput} ${styles.formSelect}`}
                  value={selectedFaculty}
                  onChange={(e) => setSelectedFaculty(e.target.value)}
                >
                  {faculties.map(f => (
                    <option key={f.id} value={f.id}>{f.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={styles.formLabel}>Bộ môn</label>
                <select 
                  className={`${styles.formInput} ${styles.formSelect}`} 
                  value={formData.departmentId}
                  onChange={(e) => setFormData({...formData, departmentId: e.target.value})}
                  required
                >
                  <option value="" disabled>Chọn bộ môn</option>
                  {filteredDepartments.map(d => (
                    <option key={d.id} value={d.id}>{d.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className={styles.formActions}>
            <button type="button" className={styles.btnDiscard} onClick={() => router.push('/admin/lecturers')}>Hủy</button>
            <button
              type="submit"
              className={styles.btnSubmit}
              disabled={isSubmitting}
              style={{ backgroundColor: submitStatus === 'success' ? '#059669' : '' }}
            >
              {isSubmitting && submitStatus === 'idle' ? (
                <>
                  <span className="material-symbols-outlined" style={{ animation: 'spin 1s linear infinite' }}>sync</span>
                  Đang xử lý...
                </>
              ) : submitStatus === 'success' ? (
                <>
                  <span className="material-symbols-outlined">check_circle</span>
                  Đã thêm thành công
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined">person_add</span>
                  Thêm Giảng Viên
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
