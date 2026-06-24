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

export async function getAvailableSections(params?: {
    hoc_ky?: string;
    nam_hoc?: string;
    search?: string;
}) {
    const query = new URLSearchParams();
    if (params?.hoc_ky) query.set('hoc_ky', params.hoc_ky);
    if (params?.nam_hoc) query.set('nam_hoc', params.nam_hoc);
    if (params?.search) query.set('search', params.search);
    const qs = query.toString() ? `?${query.toString()}` : '';
    const res = await fetchWithAuth(`/student/available-sections${qs}`, { method: 'GET', cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch available sections');
    return await res.json();
}

export async function getMyEnrollments() {
    const res = await fetchWithAuth('/student/enrollments', { method: 'GET', cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch enrollments');
    return await res.json();
}

export async function enrollSection(lopHocPhanId: number) {
    const res = await fetchWithAuth('/student/enrollments', {
        method: 'POST',
        body: JSON.stringify({ lop_hoc_phan_id: lopHocPhanId }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.message || 'Failed to enroll');
    return data;
}

export async function cancelEnrollment(enrollmentId: number) {
    const res = await fetchWithAuth(`/student/enrollments/${enrollmentId}`, { method: 'DELETE' });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.message || 'Failed to cancel enrollment');
    return data;
}
