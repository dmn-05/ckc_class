import type { Metadata } from "next";
import Register from "../../../../components/auth/register";

export const metadata: Metadata = {
  title: "Đăng ký tài khoản",
  description: "Đăng ký tài khoản CKC CLASSROOM",
};

export default function RegisterComponent() {
    return <Register />;
}