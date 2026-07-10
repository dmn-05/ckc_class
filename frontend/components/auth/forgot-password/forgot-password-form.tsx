"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import styles from "@/app/page.module.css";

export function ForgotPasswordForm() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [email, setEmail] = useState("");
  const [cccd, setCccd] = useState("");
  const [matKhauMoi, setMatKhauMoi] = useState("");
  const [xacNhanMatKhau, setXacNhanMatKhau] = useState("");
  const [userInfo, setUserInfo] = useState<{ ho_ten?: string; email?: string } | null>(null);

  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

  // Step 1: Submit Email
  async function handleVerifyEmail(e: FormEvent) {
    e.preventDefault();
    setErrorMessage("");

    const emailRegex = /^[a-zA-Z0-9._%+-]+@ckc\.edu\.vn$/i;
    if (!emailRegex.test(email.trim())) {
      setErrorMessage("Email không hợp lệ. Email phải đúng chuẩn định dạng đuôi @ckc.edu.vn");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${apiUrl}/forgot-password/verify-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setUserInfo(data.data || { email: email.trim() });
        setStep(2);
      } else {
        setErrorMessage(data.message || "Email không tồn tại trong hệ thống.");
      }
    } catch (err) {
      setErrorMessage("Không thể kết nối đến máy chủ. Vui lòng thử lại sau.");
    } finally {
      setLoading(false);
    }
  }

  // Step 2: Submit CCCD
  async function handleVerifyCccd(e: FormEvent) {
    e.preventDefault();
    setErrorMessage("");

    const cccdRegex = /^\d{12}$/;
    if (!cccdRegex.test(cccd.trim())) {
      setErrorMessage("Số CCCD không hợp lệ. CCCD phải gồm đúng 12 chữ số.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${apiUrl}/forgot-password/verify-cccd`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), cccd: cccd.trim() }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStep(3);
      } else {
        setErrorMessage(data.message || "Số CCCD không chính xác cho tài khoản này.");
      }
    } catch (err) {
      setErrorMessage("Không thể kết nối đến máy chủ. Vui lòng thử lại sau.");
    } finally {
      setLoading(false);
    }
  }

  // Step 3: Submit New Password
  async function handleResetPassword(e: FormEvent) {
    e.preventDefault();
    setErrorMessage("");

    if (matKhauMoi.length < 6) {
      setErrorMessage("Mật khẩu mới phải có ít nhất 6 ký tự.");
      return;
    }
    if (matKhauMoi !== xacNhanMatKhau) {
      setErrorMessage("Mật khẩu xác nhận không trùng khớp.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${apiUrl}/forgot-password/reset`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          cccd: cccd.trim(),
          mat_khau_moi: matKhauMoi,
        }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setSuccessMessage(data.message || "Đặt lại mật khẩu thành công!");
        setStep(4);
      } else {
        setErrorMessage(data.message || "Không thể đặt lại mật khẩu. Vui lòng kiểm tra lại.");
      }
    } catch (err) {
      setErrorMessage("Không thể kết nối đến máy chủ. Vui lòng thử lại sau.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ width: "100%" }}>
      {/* Progress Stepper Header */}
      {step < 4 && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1.75rem",
            paddingBottom: "1.25rem",
            borderBottom: "1px solid #e7e5f1",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                backgroundColor: step >= 1 ? "#3525cd" : "#e7e5f1",
                color: step >= 1 ? "#fff" : "#777587",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "13px",
                fontWeight: 700,
              }}
            >
              1
            </div>
            <span
              style={{
                fontSize: "13px",
                fontWeight: step === 1 ? 700 : 500,
                color: step === 1 ? "#1b1828" : "#777587",
              }}
            >
              Email
            </span>
          </div>

          <div style={{ flex: 1, height: "2px", backgroundColor: "#e7e5f1", margin: "0 10px" }}>
            <div
              style={{
                width: step >= 2 ? "100%" : "0%",
                height: "100%",
                backgroundColor: "#3525cd",
                transition: "width 0.3s ease",
              }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                backgroundColor: step >= 2 ? "#3525cd" : "#e7e5f1",
                color: step >= 2 ? "#fff" : "#777587",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "13px",
                fontWeight: 700,
              }}
            >
              2
            </div>
            <span
              style={{
                fontSize: "13px",
                fontWeight: step === 2 ? 700 : 500,
                color: step === 2 ? "#1b1828" : "#777587",
              }}
            >
              Xác minh CCCD
            </span>
          </div>

          <div style={{ flex: 1, height: "2px", backgroundColor: "#e7e5f1", margin: "0 10px" }}>
            <div
              style={{
                width: step >= 3 ? "100%" : "0%",
                height: "100%",
                backgroundColor: "#3525cd",
                transition: "width 0.3s ease",
              }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                backgroundColor: step >= 3 ? "#3525cd" : "#e7e5f1",
                color: step >= 3 ? "#fff" : "#777587",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "13px",
                fontWeight: 700,
              }}
            >
              3
            </div>
            <span
              style={{
                fontSize: "13px",
                fontWeight: step === 3 ? 700 : 500,
                color: step === 3 ? "#1b1828" : "#777587",
              }}
            >
              Đổi mật khẩu
            </span>
          </div>
        </div>
      )}

      {errorMessage && (
        <div
          style={{
            backgroundColor: "#fef2f2",
            color: "#dc2626",
            padding: "12px 16px",
            borderRadius: "12px",
            marginBottom: "1.25rem",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            border: "1px solid #fecaca",
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
            error
          </span>
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Step 1: Email Form */}
      {step === 1 && (
        <form className={styles.form} onSubmit={handleVerifyEmail}>
          <div className={styles.fieldGroup}>
            <label htmlFor="email">EMAIL TÀI KHOẢN</label>
            <div className={styles.inputWrap}>
              <span className={styles.inputIcon} aria-hidden="true">
                <span className="material-symbols-outlined register-label-icon">alternate_email</span>
              </span>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@ckc.edu.vn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <p style={{ fontSize: "13px", color: "#777587", marginTop: "6px" }}>
              Nhập địa chỉ email trường cấp cho bạn để bắt đầu xác thực.
            </p>
          </div>

          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? "Đang kiểm tra email..." : "Tiếp tục xác thực"}
            {!loading && (
              <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                arrow_forward
              </span>
            )}
          </button>

          <div style={{ textAlign: "center", marginTop: "1rem" }}>
            <Link
              href="/login"
              style={{
                color: "#3525cd",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "14px",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                arrow_back
              </span>
              Quay lại trang đăng nhập
            </Link>
          </div>
        </form>
      )}

      {/* Step 2: CCCD Form */}
      {step === 2 && (
        <form className={styles.form} onSubmit={handleVerifyCccd}>
          {userInfo && (
            <div
              style={{
                backgroundColor: "#eff6ff",
                border: "1px solid #bfdbfe",
                borderRadius: "12px",
                padding: "12px 16px",
                marginBottom: "1.25rem",
              }}
            >
              <div style={{ fontSize: "12px", fontWeight: 700, color: "#1d4ed8", textTransform: "uppercase" }}>
                Tài khoản được xác định
              </div>
              <div style={{ fontSize: "15px", fontWeight: 700, color: "#1e3a8a", marginTop: "4px" }}>
                {userInfo.ho_ten || userInfo.email}
              </div>
              <div style={{ fontSize: "13px", color: "#3b82f6" }}>{userInfo.email}</div>
            </div>
          )}

          <div className={styles.fieldGroup}>
            <label htmlFor="cccd">SỐ CĂN CƯỚC CÔNG DÂN (CCCD)</label>
            <div className={styles.inputWrap}>
              <span className={styles.inputIcon} aria-hidden="true">
                <span className="material-symbols-outlined register-label-icon">badge</span>
              </span>
              <input
                id="cccd"
                name="cccd"
                type="text"
                placeholder="Nhập 12 chữ số CCCD..."
                value={cccd}
                onChange={(e) => setCccd(e.target.value)}
                maxLength={12}
                required
              />
            </div>
            <p style={{ fontSize: "13px", color: "#777587", marginTop: "6px" }}>
              Vui lòng nhập số CCCD đã đăng ký với tài khoản để chứng thực danh tính.
            </p>
          </div>

          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? "Đang xác thực CCCD..." : "Xác nhận CCCD"}
            {!loading && (
              <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                verified_user
              </span>
            )}
          </button>

          <div style={{ textAlign: "center", marginTop: "1rem" }}>
            <button
              type="button"
              onClick={() => setStep(1)}
              style={{
                background: "none",
                border: "none",
                color: "#777587",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              ← Thay đổi email khác
            </button>
          </div>
        </form>
      )}

      {/* Step 3: New Password Form */}
      {step === 3 && (
        <form className={styles.form} onSubmit={handleResetPassword}>
          <div className={styles.fieldGroup}>
            <label htmlFor="newPassword">MẬT KHẨU MỚI</label>
            <div className={styles.inputWrap}>
              <span className={styles.inputIcon} aria-hidden="true">
                <span className="material-symbols-outlined register-label-icon">lock</span>
              </span>
              <input
                id="newPassword"
                name="newPassword"
                type={showPassword1 ? "text" : "password"}
                placeholder="Ít nhất 6 ký tự..."
                value={matKhauMoi}
                onChange={(e) => setMatKhauMoi(e.target.value)}
                required
                minLength={6}
              />
              <button
                type="button"
                className={styles.iconButton}
                onClick={() => setShowPassword1(!showPassword1)}
                aria-label="Toggle new password visibility"
              >
                {showPassword1 ? "Ẩn" : "Hiện"}
              </button>
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="confirmPassword">XÁC NHẬN MẬT KHẨU MỚI</label>
            <div className={styles.inputWrap}>
              <span className={styles.inputIcon} aria-hidden="true">
                <span className="material-symbols-outlined register-label-icon">lock_reset</span>
              </span>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showPassword2 ? "text" : "password"}
                placeholder="Nhập lại mật khẩu mới..."
                value={xacNhanMatKhau}
                onChange={(e) => setXacNhanMatKhau(e.target.value)}
                required
                minLength={6}
              />
              <button
                type="button"
                className={styles.iconButton}
                onClick={() => setShowPassword2(!showPassword2)}
                aria-label="Toggle confirm password visibility"
              >
                {showPassword2 ? "Ẩn" : "Hiện"}
              </button>
            </div>
          </div>

          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? "Đang cập nhật mật khẩu..." : "Đặt lại mật khẩu"}
            {!loading && (
              <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                check_circle
              </span>
            )}
          </button>
        </form>
      )}

      {/* Step 4: Success Screen */}
      {step === 4 && (
        <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              backgroundColor: "#dcfce7",
              color: "#16a34a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem auto",
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "40px" }}>
              task_alt
            </span>
          </div>

          <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#1b1828", marginBottom: "8px" }}>
            Đặt lại mật khẩu thành công!
          </h3>
          <p style={{ fontSize: "15px", color: "#777587", lineHeight: 1.6, marginBottom: "2rem" }}>
            Mật khẩu của tài khoản <strong>{userInfo?.email || email}</strong> đã được thay đổi thành công. Bạn có thể
            đăng nhập ngay vào hệ thống với mật khẩu mới.
          </p>

          <Link
            href="/login"
            className={styles.submitButton}
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            Đăng nhập ngay
            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
              login
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}
