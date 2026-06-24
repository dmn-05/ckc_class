"use server";

import { cookies } from "next/headers";

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
    const response = await fetch(`${API_URL}${endpoint}`, { ...options, headers });
    return response;
}

/** Lấy danh sách học phần của giảng viên đang đăng nhập */
export async function getLecturerSections() {
    const res = await fetchWithAuth('/lecturer/course-sections', { method: 'GET', cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch sections');
    return await res.json();
}

/** Lấy danh sách sinh viên đăng ký theo lớp học phần */
export async function getEnrollmentsBySection(sectionId: number) {
    const res = await fetchWithAuth(`/lecturer/enrollments/${sectionId}`, { method: 'GET', cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch enrollments');
    return await res.json();
}

/** Hủy đăng ký của sinh viên (giảng viên) */
export async function cancelStudentEnrollment(enrollmentId: number) {
    const res = await fetchWithAuth(`/lecturer/enrollments/${enrollmentId}/cancel`, {
        method: 'PATCH',
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.message || 'Failed to cancel enrollment');
    return data;
}
