"use client";

import { FormEvent, useState } from "react";
import styles from "@/app/page.module.css";
import { loginAction } from "@/app/actions/auth";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    let successData = null;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ email, mat_khau: password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        successData = {
          token: data.token,
          vai_tro_id: data.user.vai_tro_id,
          user: data.user,
        };
      } else {
        setStatus("error");
        setErrorMessage(data.message || data.errors?.email?.[0] || "Đăng nhập thất bại. Vui lòng kiểm tra lại.");
      }
    } catch (error: any) {
      if (
        (error && typeof error.message === "string" && error.message.includes("NEXT_REDIRECT")) ||
        (error && typeof error.digest === "string" && error.digest.includes("NEXT_REDIRECT"))
      ) {
        throw error;
      }
      setStatus("error");
      setErrorMessage("Không thể kết nối đến máy chủ.");
    }

    if (successData) {
      await loginAction(successData);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {status === "error" && (
        <div style={{ color: "red", marginBottom: "1rem", fontSize: "14px", textAlign: "center" }}>
          {errorMessage}
        </div>
      )}
      <div className={styles.fieldGroup}>
        <label htmlFor="email">EMAIL</label>
        <div className={styles.inputWrap}>
          <span className={styles.inputIcon} aria-hidden="true">
            <span className="material-symbols-outlined register-label-icon">alternate_email</span>
          </span>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="name@college.edu.vn"
            autoComplete="email"
            required
          />
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <div className={styles.labelRow}>
          <label htmlFor="password">MẬT KHẨU</label>
          <a href="#">Quên mật khẩu?</a>
        </div>
        <div className={styles.inputWrap}>
          <span className={styles.inputIcon} aria-hidden="true">
            <span className="material-symbols-outlined register-label-icon">lock</span>
          </span>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="********"
            autoComplete="current-password"
            required
          />
          <button
            className={styles.iconButton}
            type="button"
            onClick={() => setShowPassword((value) => !value)}
            aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
          >
            {showPassword ? "Ẩn" : "Hiện"}
          </button>
        </div>
      </div>

      <label className={styles.remember}>
        <input type="checkbox" name="remember" />
        <span>Duy trì đăng nhập</span>
      </label>

      <button
        className={styles.submitButton}
        type="submit"
        disabled={status === "loading" || status === "success"}
      >
        {status === "loading" && <span className={styles.spinner} />}
        {status === "success" && <span aria-hidden="true">✓</span>}
        <span>
          {status === "idle" || status === "error"
            ? "ĐĂNG NHẬP"
            : status === "loading"
              ? "ĐANG XỬ LÝ..."
              : "THÀNH CÔNG"}
        </span>
        {(status === "idle" || status === "error") && <span aria-hidden="true"></span>}
      </button>
    </form>
  );
}
