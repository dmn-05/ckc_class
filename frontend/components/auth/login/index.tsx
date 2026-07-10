import styles from "@/app/page.module.css";
import { LoginForm } from "./login-form";
import { CommunityStatsBadge } from "../CommunityStatsBadge";

export default function Login() {
    return (
        <main className={styles.page}>
            <div className={`${styles.blob} ${styles.blobOne}`} />
            <div className={`${styles.blob} ${styles.blobTwo}`} />

            <section className={styles.shell} aria-label="CKC Classroom login">
                <div className={styles.brandPanel}>
                    <div className={styles.brandMarkRow}>
                        <div className={styles.brandIcon} aria-hidden="true">
                            <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>school</span>
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

                    <CommunityStatsBadge />
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
                </div>
            </section>
        </main>
    );
}
