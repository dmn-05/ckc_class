import type { Metadata } from "next";
import ForgotPassword from "@/components/auth/forgot-password";

export const metadata: Metadata = {
  title: "Quên mật khẩu - CKC CLASSROOM",
  description: "Khôi phục mật khẩu tài khoản qua Email & số CCCD",
};

export default function ForgotPasswordPage() {
  return <ForgotPassword />;
}
