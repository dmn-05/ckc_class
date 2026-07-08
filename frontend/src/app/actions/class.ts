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

export async function getClasses() {
    const response = await fetchWithAuth('/classes', { method: 'GET', cache: 'no-store' });
    if (!response.ok) throw new Error('Failed to fetch classes');
    return await response.json();
}

export async function getClassById(id: string) {
    const response = await fetchWithAuth(`/classes/${id}`, { method: 'GET', cache: 'no-store' });
    if (!response.ok) throw new Error('Failed to fetch class');
    return await response.json();
}

export async function createClass(data: { ma_lop: string, ten_lop: string, khoa_id: string, nam_nhap_hoc: number, trang_thai: string }) {
    const response = await fetchWithAuth('/classes', {
        method: 'POST',
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to create class');
    }
    return await response.json();
}

export async function updateClass(id: string, data: { ma_lop: string, ten_lop: string, khoa_id: string, nam_nhap_hoc: number, trang_thai: string }) {
    const response = await fetchWithAuth(`/classes/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to update class');
    }
    return await response.json();
}

export async function deleteClass(id: string) {
    const response = await fetchWithAuth(`/classes/${id}`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Failed to delete class');
    return await response.json();
}

export async function getFaculties() {
    const response = await fetchWithAuth('/faculties', { method: 'GET', cache: 'no-store' });
    if (!response.ok) throw new Error('Failed to fetch faculties');
    return await response.json();
}

