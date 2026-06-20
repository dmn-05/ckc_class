import styles from "@/app/page.module.css";
import { LoginForm } from "./login-form";

export default function Login() {
    return (
        <main className={styles.page}>
            <div className={`${styles.blob} ${styles.blobOne}`} />
            <div className={`${styles.blob} ${styles.blobTwo}`} />

            <section className={styles.shell} aria-label="CKC Classroom login">
                <div className={styles.brandPanel}>
                    <div className={styles.brandMarkRow}>
                        <div className={styles.brandIcon} aria-hidden="true">
                            SC
                        </div>
                        <div>
                            <h1>CKC CLASSROOM</h1>
                            <p>ACADEMIC MANAGEMENT</p>
                        </div>
                    </div>

                    <p className={styles.brandCopy}>
                        Trải nghiệm hệ thống quản lý học tập hiện đại, tối ưu hóa quy trình
                        giảng dạy và nâng cao chất lượng đào tạo thế hệ tương lai.
                    </p>

                    <div className={styles.community}>
                        <div className={styles.avatarStack} aria-hidden="true">
                            <span>GV</span>
                            <span>SV</span>
                            <span>QT</span>
                        </div>
                        <span>Tham gia cùng +2,000 giảng viên</span>
                    </div>
                </div>

                <div className={styles.loginCard}>
                    <div className={styles.mobileBrand}>
                        <div className={styles.mobileIcon} aria-hidden="true">
                            C
                        </div>
                        <h2>CKC CLASS</h2>
                        <p>Đăng nhập hệ thống</p>
                    </div>

                    <div className={styles.cardHeader}>
                        <h2>Chào mừng trở lại</h2>
                        <p>Vui lòng nhập thông tin tài khoản của bạn.</p>
                    </div>

                    <LoginForm />

                    <div className={styles.divider}>
                        <span />
                        <p>HOẶC ĐĂNG NHẬP VỚI</p>
                        <span />
                    </div>

                    <div className={styles.ssoGrid}>
                        <button type="button">
                            <span aria-hidden="true">G</span>
                            Google
                        </button>
                        <button type="button">
                            <span aria-hidden="true">M</span>
                            Office 365
                        </button>
                    </div>

                    <p className={styles.signup}>
                        Chưa có tài khoản? <a href="#">Đăng ký</a>
                    </p>
                </div>
            </section>
        </main>
    );
}
