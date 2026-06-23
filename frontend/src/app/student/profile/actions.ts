"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function updateProfileAction(formData: any) {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) {
    return { success: false, message: "Vui lòng đăng nhập lại!" };
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/student/profile`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    
    if (res.ok) {
      revalidatePath("/student/profile");
      return { success: true, message: "Cập nhật hồ sơ thành công!" };
    } else {
      return { success: false, message: data.message || "Cập nhật thất bại!" };
    }
  } catch (error) {
    console.error("Profile update error:", error);
    return { success: false, message: "Lỗi kết nối máy chủ!" };
  }
}
