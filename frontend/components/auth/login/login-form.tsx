"use client";

import { FormEvent, useState } from "react";
import styles from "@/app/page.module.css";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    window.setTimeout(() => {
      setStatus("success");
    }, 1200);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.fieldGroup}>
        <label htmlFor="email">EMAIL CÔNG VỤ</label>
        <div className={styles.inputWrap}>
          <span className={styles.inputIcon} aria-hidden="true">
            @
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
            *
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
        disabled={status !== "idle"}
      >
        {status === "loading" && <span className={styles.spinner} />}
        {status === "success" && <span aria-hidden="true">✓</span>}
        <span>
          {status === "idle"
            ? "ĐĂNG NHẬP"
            : status === "loading"
              ? "ĐANG XỬ LÝ..."
              : "THÀNH CÔNG"}
        </span>
        {status === "idle" && <span aria-hidden="true">→</span>}
      </button>
    </form>
  );
}
