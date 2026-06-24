'use client';

import React, { useState, useEffect } from 'react';
import styles from './AdminUpdateStudents.module.css';
import { getStudentById, updateStudent, resetStudentPassword, getClasses } from '@/app/actions/student';
import { getFaculties } from '@/app/actions/faculty';
import { useRouter } from 'next/navigation';

interface UpdateStudentFormProps {
  studentId: string;
}

export default function UpdateStudentForm({ studentId }: UpdateStudentFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');
  const [isResetting, setIsResetting] = useState(false);
  const [loading, setLoading] = useState(true);

  const [faculties, setFaculties] = useState<any[]>([]);
  const [classes, setClasses] = useState<any[]>([]);

  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    ho_ten: '',
    email: '',
    so_dien_thoai: '',
    ngay_sinh: '',
    gioi_tinh: 'nam',
    ma_sinh_vien: '',
    khoa_id: '',
    lop_id: '',
    trang_thai: 'dang_hoat_dong',
    anh_dai_dien: ''
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const [studentData, facs, cls] = await Promise.all([
          getStudentById(studentId),
          getFaculties(),
          getClasses()
        ]);
        setFaculties(facs);
        setClasses(cls);

        setFormData({
          ho_ten: studentData.ho_ten || '',
          email: studentData.email || '',
          so_dien_thoai: studentData.so_dien_thoai || '',
          ngay_sinh: studentData.ngay_sinh || '',
          gioi_tinh: studentData.gioi_tinh || 'nam',
          ma_sinh_vien: studentData.sinh_vien?.ma_sinh_vien || '',
          khoa_id: studentData.sinh_vien?.khoa_id?.toString() || '',
          lop_id: studentData.sinh_vien?.lop_id?.toString() || '',
          trang_thai: studentData.sinh_vien?.trang_thai || 'dang_hoc',
          anh_dai_dien: studentData.anh_dai_dien || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(studentData.ho_ten)
        });
      } catch (err) {
        console.error('Failed to load data', err);
        alert('Không thể tải thông tin sinh viên');
      } finally {
        setLoading(false);
      }
    };
    if (studentId) {
      loadData();
    }
  }, [studentId]);

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
    setIsSubmitting(true);

    const submitData = new FormData();
    submitData.append('_method', 'PUT'); // For Laravel
    submitData.append('ho_ten', formData.ho_ten);
    submitData.append('email', formData.email);
    submitData.append('so_dien_thoai', formData.so_dien_thoai);
    submitData.append('ngay_sinh', formData.ngay_sinh);
    submitData.append('gioi_tinh', formData.gioi_tinh);
    submitData.append('ma_sinh_vien', formData.ma_sinh_vien);
    submitData.append('khoa_id', formData.khoa_id);
    submitData.append('lop_id', formData.lop_id);
    submitData.append('trang_thai', formData.trang_thai);
    if (avatarFile) {
      submitData.append('avatar', avatarFile);
    }

    try {
      await updateStudent(studentId, submitData);
      setSubmitStatus('success');
      setTimeout(() => {
        router.push('/admin/students');
      }, 1500);
    } catch (err: any) {
      alert(err.message || 'Cập nhật sinh viên thất bại');
      setIsSubmitting(false);
      setSubmitStatus('idle');
    }
  };

  const handleResetPassword = async () => {
    if (!confirm('Bạn có chắc chắn muốn đặt lại mật khẩu cho sinh viên này (Mật khẩu sẽ là 123456)?')) return;
    setIsResetting(true);
    try {
      await resetStudentPassword(studentId);
      alert('Đặt lại mật khẩu thành công!');
    } catch (err: any) {
      alert(err.message || 'Lỗi khi đặt lại mật khẩu');
    } finally {
      setIsResetting(false);
    }
  };

  if (loading) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Đang tải thông tin...</div>;
  }

  return (
    <div className={styles.layoutGrid}>
      {/* Left Column: Profile Picture & Core Info */}
      <div className={styles.leftColumn}>
        <section className={`${styles.card} ${styles.cardCenter}`}>
          <div className={styles.avatarUploadWrapper} onClick={triggerFileInput} style={{ cursor: 'pointer' }}>
            <div className={styles.avatarBox}>
              <img
                src={avatarPreview || formData.anh_dai_dien || "https://ui-avatars.com/api/?name=User"}
                alt="Student Profile"
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
            Tải lên ảnh chân dung. Tối đa 5MB. Định dạng JPG hoặc PNG.
          </p>
          <button className={styles.btnUpload} type="button" onClick={triggerFileInput}>Thay đổi ảnh</button>
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
              onClick={handleResetPassword}
              disabled={isResetting}
            >
              <span className="material-symbols-outlined" style={{ marginRight: '8px', fontSize: '18px', verticalAlign: 'middle' }}>lock_reset</span>
              {isResetting ? 'Đang đặt lại...' : 'Đặt lại mật khẩu'}
            </button>
            <div style={{ flex: 1 }}></div>
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
                  Cập nhật Thành Công
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
