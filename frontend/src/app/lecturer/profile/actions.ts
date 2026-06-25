'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

export async function getLecturerProfileAction() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) return { success: false, data: null };

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/lecturer/profile`, {
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

export async function updateLecturerProfileAction(formData: any) {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token')?.value;

  if (!token) {
    return { success: false, message: 'Bạn chưa đăng nhập' };
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/lecturer/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      return { success: false, message: data.message || 'Lỗi khi cập nhật hồ sơ' };
    }

    revalidatePath('/lecturer/profile');
    revalidatePath('/lecturer'); // For header sync
    
    return { success: true, message: data.message || 'Cập nhật thành công', data: data.data };
  } catch (error) {
    console.error('Update profile error:', error);
    return { success: false, message: 'Lỗi máy chủ nội bộ' };
  }
}

export async function updateAvatarAction(file: File) {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token')?.value;

  if (!token) {
    return { success: false, message: 'Vui lòng đăng nhập lại!' };
  }

  try {
    const body = new FormData();
    body.append('avatar', file);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/user/avatar`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        // Không set Content-Type — để browser tự set multipart/form-data boundary
      },
      body,
    });

    const data = await res.json();

    if (res.ok && data.success) {
      revalidatePath('/lecturer/profile');
      revalidatePath('/lecturer'); // For header sync
      return {
        success: true,
        message: 'Cập nhật ảnh đại diện thành công!',
        avatarUrl: data.user?.avatar ?? null,
      };
    } else {
      return { success: false, message: data.message || 'Upload ảnh thất bại!' };
    }
  } catch (error) {
    console.error('Avatar upload error:', error);
    return { success: false, message: 'Lỗi kết nối máy chủ!' };
  }
}
