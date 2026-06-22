"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { StudentRegisterHeader } from './StudentRegisterHeader';

export function StudentRegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="register-card">
      <StudentRegisterHeader />

      <form className="register-form" onSubmit={(e) => e.preventDefault()}>
        {/* Full Name */}
        <div className="register-field-group">
          <label className="register-label" htmlFor="full_name">
            <span className="material-symbols-outlined register-label-icon">person</span>
            Họ và tên
          </label>
          <div className="register-input-wrapper">
            <input className="register-input" id="full_name" placeholder="Ví dụ: Nguyễn Văn A" type="text" />
          </div>
        </div>

        <div className="register-grid-2">
          {/* ID Number */}
          <div className="register-field-group">
            <label className="register-label" htmlFor="id_number">
              <span className="material-symbols-outlined register-label-icon">badge</span>
              Mã số định danh
            </label>
            <div className="register-input-wrapper">
              <input className="register-input" id="id_number" placeholder="MSSV/MSCB" type="text" />
            </div>
          </div>

          {/* Email */}
          <div className="register-field-group">
            <label className="register-label" htmlFor="email">
              <span className="material-symbols-outlined register-label-icon">alternate_email</span>
              Email
            </label>
            <div className="register-input-wrapper">
              <input className="register-input" id="email" placeholder="example@ckc.edu.vn" type="email" />
            </div>
          </div>
        </div>

        {/* Password */}
        <div className="register-field-group">
          <label className="register-label" htmlFor="password">
            <span className="material-symbols-outlined register-label-icon">lock</span>
            Mật khẩu
          </label>
          <div className="register-input-wrapper">
            <input
              className="register-input"
              id="password"
              placeholder="••••••••"
              type={showPassword ? "text" : "password"}
            />
            <button
              className="register-toggle-btn"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              <span className="material-symbols-outlined">{showPassword ? "visibility_off" : "visibility"}</span>
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="register-field-group">
          <label className="register-label" htmlFor="confirm_password">
            <span className="material-symbols-outlined register-label-icon">verified_user</span>
            Xác nhận mật khẩu
          </label>
          <div className="register-input-wrapper">
            <input className="register-input" id="confirm_password" placeholder="••••••••" type="password" />
          </div>
        </div>

        {/* Terms */}
        <div className="register-terms">
          <div className="register-checkbox-wrapper">
            <input className="register-checkbox" id="terms" type="checkbox" />
          </div>
          <label className="register-terms-label" htmlFor="terms">
            Tôi đồng ý với các <Link className="register-link" href="#">điều khoản</Link> và <Link className="register-link" href="#">chính sách bảo mật</Link>.
          </label>
        </div>

        {/* CTA */}
        <button className="register-submit-btn">
          <span>ĐĂNG KÝ TÀI KHOẢN</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </form>

      <div className="register-login-prompt">
        Đã có tài khoản?
        <Link className="register-login-link" href="/login">Đăng nhập ngay</Link>
      </div>
    </main>
  );
}
