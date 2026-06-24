'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getFaculties } from '@/app/actions/faculty';
import { getDepartments } from '@/app/actions/department';
import { getLecturerById, updateLecturer } from '@/app/actions/lecturer';
import styles from './AdminUpdateLecturers.module.css';

interface UpdateLecturerFormProps {
  lecturerId?: string;
}

export default function UpdateLecturerForm({ lecturerId }: UpdateLecturerFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const [faculties, setFaculties] = useState<any[]>([]);
  const [departments, setDepartments] = useState<any[]>([]);
  const [selectedFaculty, setSelectedFaculty] = useState<string>('');

  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

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
    avatarUrl: '',
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

        if (lecturerId) {
          const lecturerData = await getLecturerById(lecturerId);
          setFormData({
            code: lecturerData.code || '',
            status: lecturerData.status || 'dang_day',
            name: lecturerData.name || '',
            cccd: lecturerData.cccd || '',
            dob: lecturerData.dob ? lecturerData.dob.split('T')[0] : '', // ensure date format
            gender: lecturerData.gender || 'nam',
            email: lecturerData.email || '',
            phone: lecturerData.phone || '',
            address: lecturerData.address || '',
            departmentId: lecturerData.departmentId || '',
            avatarUrl: lecturerData.avatar || '',
          });
          if (lecturerData.facultyId) {
            setSelectedFaculty(lecturerData.facultyId);
          } else if (facs.length > 0) {
            setSelectedFaculty(facs[0].id);
          }
        } else if (facs.length > 0) {
          setSelectedFaculty(facs[0].id);
        }
      } catch (err) {
        console.error('Failed to load data:', err);
      }
    };
    loadData();
  }, []);

  const filteredDepartments = departments.filter(d => d.facultyId?.toString() === selectedFaculty?.toString());

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAvatarFile(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!lecturerId) return;

    setIsSubmitting(true);

    const submitData = new FormData();
    submitData.append('_method', 'PUT'); // For Laravel
    submitData.append('ho_ten', formData.name);
    submitData.append('email', formData.email);
    submitData.append('ma_giang_vien', formData.code);
    submitData.append('cccd', formData.cccd);
    submitData.append('ngay_sinh', formData.dob);
    submitData.append('gioi_tinh', formData.gender);
    submitData.append('so_dien_thoai', formData.phone);
    submitData.append('dia_chi', formData.address);
    submitData.append('bo_mon_id', formData.departmentId);
    submitData.append('trang_thai', formData.status);
    if (avatarFile) {
      submitData.append('avatar', avatarFile);
    }

    try {
      await updateLecturer(lecturerId, submitData);
      setSubmitStatus('success');
      setTimeout(() => {
        router.push('/admin/lecturers');
      }, 1000);
    } catch (error: any) {
      console.error(error);
      alert('Có lỗi xảy ra khi cập nhật giảng viên: ' + (error.message || 'Lỗi không xác định'));
      setIsSubmitting(false);
      setSubmitStatus('idle');
    }
  };

  return (
    <div className={styles.layoutGrid}>
      {/* Left Column: Profile Picture & Core Info */}
      <div className={styles.leftColumn}>
        <section className={`${styles.card} ${styles.cardCenter}`}>
          <div className={styles.avatarUploadWrapper} onClick={triggerFileInput} style={{ cursor: 'pointer' }}>
            <div className={styles.avatarBox}>
              <img
                src={avatarPreview || formData.avatarUrl || "https://ui-avatars.com/api/?name=User"}
                alt="Lecturer Profile"
                className={styles.avatarImg}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
              />
            </div>
            <div className={styles.avatarOverlay}>
              <span className={`material-symbols-outlined ${styles.avatarIcon}`} style={{ color: '#fff', opacity: 0.8 }}>edit</span>
            </div>
          </div>
          <input 
            type="file" 
            accept="image/*" 
            ref={fileInputRef} 
            onChange={handleAvatarChange} 
            style={{ display: 'none' }} 
          />
          <h3 className={styles.cardTitle}>Ảnh đại diện</h3>
          <p className={styles.avatarHelpText}>
            Tải lên ảnh chân dung sắc nét. Kích thước tối đa 5MB. Định dạng JPG hoặc PNG.
          </p>
          <button className={styles.btnUpload} type="button" onClick={triggerFileInput}>Thay đổi ảnh</button>
        </section>

        <section className={styles.card}>
          <h3 className={styles.cardTitle}>
            <span className={`material-symbols-outlined ${styles.cardTitleIcon}`}>badge</span>
            Thông tin công tác
          </h3>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Mã giảng viên</label>
            <input
              className={styles.formInput}
              type="text"
              value={formData.code}
              onChange={(e) => setFormData({ ...formData, code: e.target.value })}
              maxLength={20}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Trạng thái</label>
            <select
              className={`${styles.formInput} ${styles.formSelect}`}
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
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
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                  onChange={(e) => setFormData({ ...formData, cccd: e.target.value })}
                />
              </div>
              <div>
                <label className={styles.formLabel}>Ngày sinh</label>
                <input
                  className={styles.formInput}
                  type="date"
                  required
                  value={formData.dob}
                  onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
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
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
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
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
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
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className={styles.colSpan2}>
                <label className={styles.formLabel}>Địa chỉ hiện tại</label>
                <textarea
                  className={`${styles.formInput} ${styles.formTextarea}`}
                  rows={3}
                  placeholder="Số nhà, Tên đường, Phường/Xã, Quận/Huyện, Tỉnh/Thành phố..."
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
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
                  onChange={(e) => setFormData({ ...formData, departmentId: e.target.value })}
                  required
                >
                  <option value="">Chọn bộ môn</option>
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
                  Đang cập nhật...
                </>
              ) : submitStatus === 'success' ? (
                <>
                  <span className="material-symbols-outlined">check_circle</span>
                  Cập nhật thành công
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined">save</span>
                  Cập Nhật
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
