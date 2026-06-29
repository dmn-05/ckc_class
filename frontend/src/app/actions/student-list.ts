'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

async function fetchWithAuth(endpoint: string, options: RequestInit = {}) {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) throw new Error("Unauthorized");

    const headers = {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json",
        ...((options.body && !(options.body instanceof FormData)) ? { "Content-Type": "application/json" } : {}),
        ...options.headers,
    };

    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers,
    });

    if (response.status === 401 || response.status === 403) {
        cookieStore.delete("auth_token");
        cookieStore.delete("vai_tro_id");
        cookieStore.delete("user");
        const { redirect } = await import("next/navigation");
        redirect("/login");
    }
    return response;
}

export async function getSectionStudents(sectionId: string) {
  try {
    const res = await fetchWithAuth(`/lecturer/course-sections/${sectionId}/students`, {
      method: 'GET',
      next: { tags: [`section-students-${sectionId}`] }
    } as any);

    if (!res.ok) {
      return { success: false, error: 'Không thể lấy danh sách sinh viên' };
    }

    const data = await res.json();
    return { success: true, data: data.data };
  } catch (error) {
    return { success: false, error: 'Lỗi kết nối' };
  }
}

export async function addStudentToSection(sectionId: string, ma_sinh_vien: string) {
  try {
    const res = await fetchWithAuth(`/lecturer/course-sections/${sectionId}/students`, {
      method: 'POST',
      body: JSON.stringify({ ma_sinh_vien }),
    });

    const data = await res.json();

    if (!res.ok) {
      return { success: false, error: data.message || 'Lỗi khi thêm sinh viên' };
    }

    revalidatePath('/lecturer/classes');
    return { success: true, data: data.data };
  } catch (error) {
    return { success: false, error: 'Lỗi kết nối' };
  }
}

export async function removeStudentFromSection(sectionId: string, studentId: string) {
  try {
    const res = await fetchWithAuth(`/lecturer/course-sections/${sectionId}/students/${studentId}`, {
      method: 'DELETE',
    });

    if (!res.ok) {
      return { success: false, error: 'Lỗi khi xóa sinh viên' };
    }

    revalidatePath('/lecturer/classes');
    return { success: true };
  } catch (error) {
    return { success: false, error: 'Lỗi kết nối' };
  }
}

export async function searchStudents(query: string, sectionId?: string) {
  try {
    let url = `/lecturer/students/search?q=${encodeURIComponent(query)}`;
    if (sectionId) {
      url += `&section_id=${encodeURIComponent(sectionId)}`;
    }
    const res = await fetchWithAuth(url, {
      method: 'GET',
    });

    if (!res.ok) {
      return { success: false, error: 'Lỗi khi tìm kiếm sinh viên' };
    }

    const data = await res.json();
    return { success: true, data: data.data };
  } catch (error) {
    return { success: false, error: 'Lỗi kết nối' };
  }
}

