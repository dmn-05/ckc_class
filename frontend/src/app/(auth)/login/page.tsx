import type { Metadata } from "next";
import Login from "@/components/auth/login";

export const metadata: Metadata = {
  title: "Đăng nhập",
  description: "Cổng đăng nhập hệ thống CKC CLASSROOM",
};

export default function LoginPage() {
    return <Login />;
}

