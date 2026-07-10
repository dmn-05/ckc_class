import styles from "@/app/page.module.css";
import { ForgotPasswordForm } from "./forgot-password-form";
import { CommunityStatsBadge } from "../CommunityStatsBadge";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <main className={styles.page}>
      <div className={`${styles.blob} ${styles.blobOne}`} />
      <div className={`${styles.blob} ${styles.blobTwo}`} />

      <section className={styles.shell} aria-label="CKC Classroom forgot password">
        <div className={styles.brandPanel}>
          <div className={styles.brandMarkRow}>
            <div className={styles.brandIcon} aria-hidden="true">
              <span className="material-symbols-outlined" style={{ fontSize: "32px" }}>
                school
              </span>
            </div>
            <div>
              <h1>CKC CLASSROOM</h1>
              <p>ACADEMIC MANAGEMENT</p>
            </div>
          </div>

          <p className={styles.brandCopy}>
            Hệ thống bảo mật danh tính đa lớp. Quý giảng viên và sinh viên vui lòng xác thực
            chính xác thông tin email và số CCCD để đặt lại mật khẩu an toàn.
          </p>

          <CommunityStatsBadge />
        </div>

        <div className={styles.loginCard}>
          <div className={styles.mobileBrand}>
            <div className={styles.mobileIcon} aria-hidden="true">
              C
            </div>
            <h2>CKC CLASS</h2>
            <p>Khôi phục mật khẩu</p>
          </div>

          <div className={styles.cardHeader}>
            <h2>Quên mật khẩu</h2>
            <p>Xác thực qua Email & Căn cước công dân (CCCD)</p>
          </div>

          <ForgotPasswordForm />

          <div className={styles.divider}>
            <span />
            <p>HỖ TRỢ KỸ THUẬT</p>
            <span />
          </div>

          <p className={styles.signup} style={{ textAlign: "center" }}>
            Đã nhớ lại mật khẩu?{" "}
            <Link href="/login" style={{ fontWeight: 700, color: "#3525cd", textDecoration: "none" }}>
              Đăng nhập ngay
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
