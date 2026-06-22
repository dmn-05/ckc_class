'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

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
