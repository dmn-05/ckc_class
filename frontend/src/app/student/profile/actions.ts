"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function getProfileAction() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) return { success: false, data: null };

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/student/profile`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      },
      cache: 'no-store'
    });

    if (res.ok) {
      const json = await res.json();
      return { success: true, data: json.data };
    }
    return { success: false, data: null };
  } catch (error) {
    return { success: false, data: null };
  }
}

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

export async function updateAvatarAction(file: File) {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) {
    return { success: false, message: "Vui lòng đăng nhập lại!" };
  }

  try {
    const body = new FormData();
    body.append('avatar', file);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/user/avatar`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        // Không set Content-Type — để browser tự set multipart/form-data boundary
      },
      body,
    });

    const data = await res.json();

    if (res.ok && data.success) {
      revalidatePath("/student/profile");
      return {
        success: true,
        message: "Cập nhật ảnh đại diện thành công!",
        avatarUrl: data.user?.avatar ?? null,
      };
    } else {
      return { success: false, message: data.message || "Upload ảnh thất bại!" };
    }
  } catch (error) {
    console.error("Avatar upload error:", error);
    return { success: false, message: "Lỗi kết nối máy chủ!" };
  }
}

export async function changePasswordAction(formData: {
  mat_khau_hien_tai: string;
  mat_khau_moi: string;
  xac_nhan_mat_khau_moi: string;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) {
    return { success: false, message: "Vui lòng đăng nhập lại!" };
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/user/change-password`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok && data.success) {
      return { success: true, message: data.message || "Đổi mật khẩu thành công!" };
    } else {
      const firstError = data.errors ? (Object.values(data.errors)[0] as string[])?.[0] : null;
      return { success: false, message: firstError || data.message || "Đổi mật khẩu thất bại!" };
    }
  } catch (error) {
    console.error("Change password error:", error);
    return { success: false, message: "Lỗi kết nối máy chủ!" };
  }
}
