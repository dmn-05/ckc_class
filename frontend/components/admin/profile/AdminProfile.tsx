"use client";

import React, { useState, useTransition, useEffect, useMemo, useRef } from 'react';
import styles from '@/components/lecturer/profile/LecturerProfile.module.css';
import { updateAdminProfileAction, updateAdminAvatarAction } from '@/app/admin/profile/actions';

function getInitials(fullName: string): string {
  if (!fullName) return 'AD';
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  const first = parts[0].charAt(0).toUpperCase();
  const last = parts[parts.length - 1].charAt(0).toUpperCase();
  return first + last;
}

export default function AdminProfile({ profileData }: { profileData?: any }) {
  const [isPending, startTransition] = useTransition();

  const initialData = useMemo(() => ({
    ho_ten: profileData?.ho_ten || 'Admin',
    email: profileData?.email || 'admin@ckc.edu.vn',
    mat_khau_cu: '',
    mat_khau_moi: '',
    xac_nhan_mat_khau: '',
  }), [profileData]);

  const [formData, setFormData] = useState(initialData);
  const [previewUrl, setPreviewUrl] = useState<string | null>(profileData?.avatar || null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const isDirty = JSON.stringify(formData) !== JSON.stringify(initialData) || avatarFile !== null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      showToast('Chỉ chấp nhận file ảnh (JPG, PNG, WEBP...)', 'error');
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      showToast('Ảnh quá lớn. Vui lòng chọn ảnh nhỏ hơn 5MB.', 'error');
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    setPreviewUrl(URL.createObjectURL(file));
    setAvatarFile(file);
  };

  const handleCancel = () => {
    if (isDirty) {
      if (confirm("Bạn có chắc chắn muốn hủy bỏ các thay đổi chưa lưu?")) {
        setFormData(initialData);
        setPreviewUrl(profileData?.avatar || null);
        setAvatarFile(null);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.mat_khau_moi && formData.mat_khau_moi !== formData.xac_nhan_mat_khau) {
      showToast('Xác nhận mật khẩu mới không khớp!', 'error');
      return;
    }

    startTransition(async () => {
      // 1. Upload Avatar if changed
      if (avatarFile) {
        const avatarRes = await updateAdminAvatarAction(avatarFile);
        if (!avatarRes.success) {
          showToast(avatarRes.message || 'Lỗi khi upload ảnh đại diện', 'error');
          return;
        }
      }

      // 2. Update Profile info / password
      const payload: any = {
        ho_ten: formData.ho_ten,
        email: formData.email,
      };

      if (formData.mat_khau_moi) {
        payload.mat_khau_cu = formData.mat_khau_cu;
        payload.mat_khau_moi = formData.mat_khau_moi;
      }

      const res = await updateAdminProfileAction(payload);
      if (res.success) {
        showToast('Cập nhật hồ sơ Quản trị viên thành công!', 'success');
        setAvatarFile(null);
        setFormData(prev => ({
          ...prev,
          mat_khau_cu: '',
          mat_khau_moi: '',
          xac_nhan_mat_khau: '',
        }));
      } else {
        showToast(res.message || 'Có lỗi xảy ra khi cập nhật', 'error');
      }
    });
  };

  const initials = getInitials(formData.ho_ten);

  return (
    <div className={styles.container} style={{ padding: '24px' }}>
      {/* Toast Notification */}
      {toast && (
        <div style={{
          position: 'fixed',
          top: '24px',
          right: '24px',
          zIndex: 9999,
          padding: '14px 24px',
          borderRadius: '12px',
          color: '#fff',
          fontWeight: 600,
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          background: toast.type === 'success' ? '#10b981' : '#ef4444',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span className="material-symbols-outlined">
            {toast.type === 'success' ? 'check_circle' : 'error'}
          </span>
          {toast.message}
        </div>
      )}

      {/* Header Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
        borderRadius: '16px',
        padding: '32px',
        color: '#ffffff',
        marginBottom: '32px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
          <span className="material-symbols-outlined" style={{ fontSize: '36px', color: '#38bdf8' }}>admin_panel_settings</span>
          <h1 style={{ fontSize: '28px', fontWeight: 700, margin: 0 }}>Hồ sơ Quản Trị Viên (System Admin)</h1>
        </div>
        <p style={{ margin: 0, color: '#94a3b8', fontSize: '16px' }}>
          Quản lý thông tin định danh, cấu hình tài khoản và bảo mật quyền kiểm soát hệ thống.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles.mainGrid}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            {/* Avatar Section */}
            <div className={`${styles.glassCard} ${styles.avatarSection}`} style={{ textAlign: 'center' }}>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />

              <div className={styles.avatarWrapper} style={{ width: '140px', height: '140px', margin: '0 auto 16px', position: 'relative' }}>
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="Avatar"
                    className={styles.avatarImg}
                    style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: '4px solid #f1f5f9' }}
                  />
                ) : (
                  <div className={styles.avatarFallback} style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px', fontWeight: 700 }}>
                    {initials}
                  </div>
                )}
                <button
                  type="button"
                  className={styles.avatarEditBtn}
                  onClick={handleAvatarClick}
                  title="Thay đổi ảnh đại diện"
                  style={{ position: 'absolute', bottom: '4px', right: '4px', background: '#38bdf8', color: '#0f172a', border: '3px solid #fff', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>photo_camera</span>
                </button>
              </div>

              <h3 className={styles.avatarName} style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>
                {formData.ho_ten}
              </h3>
              <div style={{ display: 'inline-block', padding: '4px 12px', background: '#e0f2fe', color: '#0369a1', borderRadius: '9999px', fontSize: '12px', fontWeight: 600, marginBottom: '16px' }}>
                QUẢN TRỊ VIÊN HỆ THỐNG
              </div>

              <div className={styles.divider} style={{ margin: '16px 0', borderTop: '1px solid #e2e8f0' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#475569', fontSize: '14px' }}>
                  <span className="material-symbols-outlined" style={{ color: '#10b981' }}>verified_user</span>
                  <span>Trạng thái: <strong>Đang hoạt động</strong></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#475569', fontSize: '14px' }}>
                  <span className="material-symbols-outlined" style={{ color: '#3b82f6' }}>shield_person</span>
                  <span>Quyền hạn: <strong>Toàn quyền (Full Access)</strong></span>
                </div>
              </div>
            </div>

            {/* Security Note Card */}
            <div className={styles.glassCardSmall} style={{ background: '#f8fafc', border: '1px solid #cbd5e1', padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#0f172a', fontWeight: 600, marginBottom: '8px' }}>
                <span className="material-symbols-outlined" style={{ color: '#f59e0b' }}>warning</span>
                <span>Lưu ý bảo mật</span>
              </div>
              <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: '1.5' }}>
                Tài khoản Admin có quyền hạn tối cao đối với toàn bộ dữ liệu sinh viên, giảng viên và lớp học. Vui lòng đặt mật khẩu mạnh và không chia sẻ tài khoản cho người khác.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            {/* Basic Info Form */}
            <section className={styles.glassCard}>
              <div className={styles.formHeader} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', borderBottom: '1px solid #f1f5f9', paddingBottom: '16px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '28px', color: '#3b82f6' }}>person_edit</span>
                <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', margin: 0 }}>Thông tin định danh</h2>
              </div>

              <div className={styles.formGrid}>
                {/* Họ và tên */}
                <div className={styles.formGroupFull}>
                  <label className={styles.label} htmlFor="ho_ten">Họ và tên Quản trị viên</label>
                  <div className={styles.inputGlow}>
                    <input
                      type="text"
                      id="ho_ten"
                      className={styles.inputField}
                      value={formData.ho_ten}
                      onChange={handleChange}
                      required
                      placeholder="Nhập họ và tên..."
                    />
                  </div>
                </div>

                {/* Email */}
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="email">Email đăng nhập</label>
                  <div className={styles.inputGlow}>
                    <input
                      type="email"
                      id="email"
                      className={styles.inputField}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="admin@ckc.edu.vn"
                    />
                  </div>
                </div>

                {/* Vai trò (Readonly) */}
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="vai_tro">Vai trò tài khoản</label>
                  <div className={`${styles.inputGlow} ${styles.inputDisabled}`}>
                    <input
                      type="text"
                      id="vai_tro"
                      className={styles.inputField}
                      value="Quản trị viên hệ thống (Admin)"
                      disabled
                      readOnly
                    />
                    <span className={`material-symbols-outlined ${styles.inputIconRight}`}>lock</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Change Password Form */}
            <section className={styles.glassCard}>
              <div className={styles.formHeader} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', borderBottom: '1px solid #f1f5f9', paddingBottom: '16px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '28px', color: '#f59e0b' }}>lock_reset</span>
                <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', margin: 0 }}>Đổi mật khẩu bảo mật</h2>
              </div>

              <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '20px' }}>
                Để đổi mật khẩu, vui lòng nhập mật khẩu cũ và xác nhận mật khẩu mới. Nếu không đổi mật khẩu, bạn có thể bỏ trống phần này.
              </p>

              <div className={styles.formGrid}>
                {/* Mật khẩu cũ */}
                <div className={styles.formGroupFull}>
                  <label className={styles.label} htmlFor="mat_khau_cu">Mật khẩu hiện tại</label>
                  <div className={styles.inputGlow}>
                    <input
                      type="password"
                      id="mat_khau_cu"
                      className={styles.inputField}
                      value={formData.mat_khau_cu}
                      onChange={handleChange}
                      placeholder="••••••••••••"
                    />
                  </div>
                </div>

                {/* Mật khẩu mới */}
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="mat_khau_moi">Mật khẩu mới (ít nhất 6 ký tự)</label>
                  <div className={styles.inputGlow}>
                    <input
                      type="password"
                      id="mat_khau_moi"
                      className={styles.inputField}
                      value={formData.mat_khau_moi}
                      onChange={handleChange}
                      placeholder="••••••••••••"
                      minLength={6}
                    />
                  </div>
                </div>

                {/* Xác nhận mật khẩu mới */}
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="xac_nhan_mat_khau">Xác nhận mật khẩu mới</label>
                  <div className={styles.inputGlow}>
                    <input
                      type="password"
                      id="xac_nhan_mat_khau"
                      className={styles.inputField}
                      value={formData.xac_nhan_mat_khau}
                      onChange={handleChange}
                      placeholder="••••••••••••"
                      minLength={6}
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Sticky/Fixed Footer Action Bar */}
        <div style={{
          marginTop: '32px',
          padding: '20px 32px',
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '16px',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '16px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
        }}>
          <button
            type="button"
            onClick={handleCancel}
            disabled={!isDirty || isPending}
            style={{
              padding: '12px 24px',
              borderRadius: '10px',
              border: '1px solid #cbd5e1',
              background: '#f8fafc',
              color: '#475569',
              fontWeight: 600,
              cursor: isDirty && !isPending ? 'pointer' : 'not-allowed',
              opacity: isDirty && !isPending ? 1 : 0.6,
              transition: 'all 0.2s'
            }}
          >
            Hủy bỏ thay đổi
          </button>
          <button
            type="submit"
            disabled={!isDirty || isPending}
            style={{
              padding: '12px 28px',
              borderRadius: '10px',
              border: 'none',
              background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
              color: '#ffffff',
              fontWeight: 600,
              cursor: isDirty && !isPending ? 'pointer' : 'not-allowed',
              opacity: isDirty && !isPending ? 1 : 0.6,
              boxShadow: isDirty && !isPending ? '0 4px 12px rgba(59, 130, 246, 0.3)' : 'none',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>save</span>
            {isPending ? 'Đang cập nhật...' : 'Lưu cập nhật'}
          </button>
        </div>
      </form>
    </div>
  );
}
