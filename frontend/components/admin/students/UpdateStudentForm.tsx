'use client';

import React, { useState, useEffect } from 'react';
import styles from './AdminUpdateStudents.module.css';
import { getStudentById, updateStudent, resetStudentPassword, getClasses } from '@/app/actions/student';
import { getFaculties } from '@/app/actions/faculty';
import { useRouter } from 'next/navigation';
import AlertModal from '@/components/common/AlertModal';
import ConfirmModal from '@/components/common/ConfirmModal';

interface UpdateStudentFormProps {
  studentId: string;
}

export default function UpdateStudentForm({ studentId }: UpdateStudentFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');
  const [isResetting, setIsResetting] = useState(false);
  const [loading, setLoading] = useState(true);

  const [alertConfig, setAlertConfig] = useState<{
    isOpen: boolean;
    title?: string;
    message: string;
    variant: 'warning' | 'error' | 'success' | 'info';
  }>({
    isOpen: false,
    message: '',
    variant: 'warning',
  });
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  const showAlert = (message: string, variant: 'warning' | 'error' | 'success' | 'info' = 'warning', title?: string) => {
    setAlertConfig({ isOpen: true, message, variant, title });
  };

  const [faculties, setFaculties] = useState<any[]>([]);
  const [classes, setClasses] = useState<any[]>([]);

  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    ho_ten: '',
    email: '',
    so_dien_thoai: '',
    cccd: '',
    dia_chi: '',
    ngay_sinh: '',
    gioi_tinh: 'nam',
    ma_sinh_vien: '',
    khoa_id: '',
    lop_id: '',
    khoa_hoc: '',
    trang_thai: 'dang_hoc',
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

        const lopId = studentData.sinh_vien?.lop_id?.toString() || '';
        // Lấy khóa học từ lớp tương ứng, ưu tiên dữ liệu từ lớp
        const matchedLop = cls.find((c: any) => c.id.toString() === lopId);
        const khoaHoc = matchedLop?.khoa_hoc
          ? String(matchedLop.khoa_hoc)
          : (studentData.sinh_vien?.khoa_hoc || '');

        setFormData({
          ho_ten: studentData.ho_ten || '',
          email: studentData.email || '',
          so_dien_thoai: studentData.so_dien_thoai || studentData.sinh_vien?.so_dien_thoai || '',
          cccd: studentData.sinh_vien?.cccd || '',
          dia_chi: studentData.sinh_vien?.dia_chi || '',
          ngay_sinh: studentData.ngay_sinh || studentData.sinh_vien?.ngay_sinh || '',
          gioi_tinh: studentData.gioi_tinh || studentData.sinh_vien?.gioi_tinh || 'nam',
          ma_sinh_vien: studentData.sinh_vien?.ma_sinh_vien || '',
          khoa_id: studentData.sinh_vien?.khoa_id?.toString() || '',
          lop_id: lopId,
          khoa_hoc: khoaHoc,
          trang_thai: studentData.sinh_vien?.trang_thai || 'dang_hoc',
          anh_dai_dien: studentData.avatar || ''
        });
      } catch (err) {
        console.error('Failed to load data', err);
        showAlert('Không thể tải thông tin sinh viên', 'error', 'Lỗi tải dữ liệu');
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
    if (name === 'so_dien_thoai' || name === 'cccd') {
      const numericValue = value.replace(/\D/g, '');
      setFormData(prev => ({ ...prev, [name]: numericValue }));
      return;
    }
    if (name === 'khoa_id') {
      const filteredCls = classes.filter(c => c.khoa_id.toString() === value);
      const defaultLop = filteredCls.length > 0 ? filteredCls[0] : null;
      setFormData(prev => ({
        ...prev,
        [name]: value,
        lop_id: defaultLop ? defaultLop.id.toString() : '',
        khoa_hoc: defaultLop?.khoa_hoc ? String(defaultLop.khoa_hoc) : '',
      }));
    } else if (name === 'lop_id') {
      const selectedLop = classes.find(c => c.id.toString() === value);
      setFormData(prev => ({
        ...prev,
        lop_id: value,
        khoa_hoc: selectedLop?.khoa_hoc ? String(selectedLop.khoa_hoc) : '',
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

    if (formData.so_dien_thoai && !/^\d{10}$/.test(formData.so_dien_thoai.trim())) {
      showAlert('Số điện thoại phải nhập đúng 10 chữ số.', 'warning', 'Kiểm tra Số điện thoại');
      return;
    }

    if (formData.cccd && !/^\d{12}$/.test(formData.cccd.trim())) {
      showAlert('Số Căn cước công dân (CCCD) phải nhập đúng 12 chữ số.', 'warning', 'Kiểm tra Số CCCD');
      return;
    }

    setIsSubmitting(true);

    const submitData = new FormData();
    submitData.append('_method', 'PUT');
    submitData.append('ho_ten', formData.ho_ten);
    submitData.append('email', formData.email);
    submitData.append('so_dien_thoai', formData.so_dien_thoai);
    submitData.append('cccd', formData.cccd);
    submitData.append('dia_chi', formData.dia_chi);
    submitData.append('ngay_sinh', formData.ngay_sinh);
    submitData.append('gioi_tinh', formData.gioi_tinh);
    submitData.append('ma_sinh_vien', formData.ma_sinh_vien);
    submitData.append('khoa_id', formData.khoa_id);
    submitData.append('lop_id', formData.lop_id);
    if (formData.khoa_hoc) submitData.append('khoa_hoc', formData.khoa_hoc);
    submitData.append('trang_thai', formData.trang_thai);
    if (avatarFile) submitData.append('avatar', avatarFile);

    try {
      const res: any = await updateStudent(studentId, submitData);
      if (res && res.success === false) {
        showAlert(res.error || 'Cập nhật sinh viên thất bại', 'error', 'Lỗi cập nhật');
        setIsSubmitting(false);
        setSubmitStatus('idle');
        return;
      }
      setSubmitStatus('success');
      setTimeout(() => {
        router.push('/admin/students');
      }, 1500);
    } catch (err: any) {
      showAlert(err.message || 'Cập nhật sinh viên thất bại', 'error', 'Lỗi cập nhật');
      setIsSubmitting(false);
      setSubmitStatus('idle');
    }
  };

  const executeResetPassword = async () => {
    setShowConfirmReset(false);
    setIsResetting(true);
    try {
      const result = await resetStudentPassword(studentId);
      if (result.success || (!result.error && result.message)) {
        showAlert(result.message || 'Đặt lại mật khẩu thành công (Mật khẩu mới: 123456)', 'success', 'Hoàn tất');
      } else {
        showAlert('Đặt lại mật khẩu thất bại: ' + (result.error || result.message || 'Không thể đặt lại mật khẩu'), 'error', 'Lỗi');
      }
    } catch (err: any) {
      showAlert('Có lỗi xảy ra: ' + err.message, 'error', 'Lỗi');
    } finally {
      setIsResetting(false);
    }
  };

  const handleResetPassword = () => {
    setShowConfirmReset(true);
  };

  if (loading) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Đang tải thông tin sinh viên...</div>;
  }

  return (
    <div className={styles.layoutGrid}>
      {/* Left Column: Profile Picture & Core Info */}
      <div className={styles.leftColumn}>
        <section className={`${styles.card} ${styles.cardCenter}`}>
          <div className={styles.avatarUploadWrapper} onClick={triggerFileInput} style={{ cursor: 'pointer' }}>
            <div className={styles.avatarBox}>
              {avatarPreview ? (
                <img
                  src={avatarPreview}
                  alt="Avatar"
                  className={styles.avatarImg}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                />
              ) : formData.anh_dai_dien ? (
                <img
                  src={formData.anh_dai_dien}
                  alt="Avatar"
                  className={styles.avatarImg}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                />
              ) : (
                <span className={`material-symbols-outlined ${styles.avatarIcon}`}>person</span>
              )}
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
            <span className={`material-symbols-outlined ${styles.cardTitleIcon}`}>badge</span>
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
          <div className={styles.formGroup} style={{ marginTop: '1rem' }}>
            <label className={styles.formLabel}>Số CCCD / CMND (12 số)</label>
            <input
              className={styles.formInput}
              type="text"
              name="cccd"
              maxLength={12}
              value={formData.cccd}
              onChange={handleChange}
              placeholder="Nhập 12 chữ số CCCD"
            />
          </div>
          <div className={styles.formGroup} style={{ marginTop: '1rem' }}>
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

        <section className={styles.card}>
          <h3 className={styles.cardTitle}>
            <span className={`material-symbols-outlined ${styles.cardTitleIcon}`}>lock_reset</span>
            Bảo mật tài khoản
          </h3>
          <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '1rem' }}>
            Nếu sinh viên quên mật khẩu, bạn có thể đặt lại mật khẩu mặc định là <strong>123456</strong>.
          </p>
          <button
            type="button"
            className={styles.btnDiscard}
            style={{ width: '100%', borderColor: '#f59e0b', color: '#d97706' }}
            onClick={handleResetPassword}
            disabled={isResetting}
          >
            {isResetting ? 'Đang đặt lại...' : 'Đặt lại mật khẩu mặc định'}
          </button>
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
                <label className={styles.formLabel}>Số điện thoại (10 số)</label>
                <input
                  className={styles.formInput}
                  type="text"
                  name="so_dien_thoai"
                  maxLength={10}
                  value={formData.so_dien_thoai}
                  onChange={handleChange}
                  placeholder="Ví dụ: 0912345678"
                />
              </div>
              <div className={styles.colSpan2}>
                <label className={styles.formLabel}>Địa chỉ liên hệ</label>
                <input
                  className={styles.formInput}
                  type="text"
                  name="dia_chi"
                  value={formData.dia_chi}
                  onChange={handleChange}
                  placeholder="Nhập địa chỉ của sinh viên..."
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
                  <option value="">-- Chọn khoa --</option>
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
            <div className={styles.grid2Col} style={{ marginTop: '1rem' }}>
              <div className={styles.colSpan2}>
                <label className={styles.formLabel}>Khóa học</label>
                <input
                  className={styles.formInput}
                  type="text"
                  value={formData.khoa_hoc || ''}
                  readOnly
                  placeholder="Tự động lấy từ lớp đã chọn"
                  style={{ backgroundColor: '#f5f5f9', color: '#555', cursor: 'not-allowed' }}
                />
                <small style={{ color: '#777587', marginTop: '4px', display: 'block' }}>Khóa học được tự động lấy từ lớp đã chọn.</small>
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
                  Lưu thay đổi
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined">save</span>
                  Lưu Thay Đổi
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      <AlertModal
        isOpen={alertConfig.isOpen}
        title={alertConfig.title}
        message={alertConfig.message}
        variant={alertConfig.variant}
        onClose={() => setAlertConfig(prev => ({ ...prev, isOpen: false }))}
      />

      <ConfirmModal
        isOpen={showConfirmReset}
        title="Xác nhận đặt lại mật khẩu"
        message="Bạn có chắc chắn muốn đặt lại mật khẩu cho sinh viên này về mặc định (123456) không?"
        confirmText="Đặt lại"
        variant="primary"
        icon="lock_reset"
        onCancel={() => setShowConfirmReset(false)}
        onConfirm={executeResetPassword}
      />
    </div>
  );
}
