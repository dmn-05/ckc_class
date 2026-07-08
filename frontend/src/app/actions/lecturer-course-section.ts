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

export async function getLecturerCourseSections() {
    try {
        const response = await fetchWithAuth('/lecturer/course-sections', { method: 'GET', cache: 'no-store' });
        if (!response.ok) return [];
        const data = await response.json().catch(() => null);
        return Array.isArray(data) ? data : (data?.data && Array.isArray(data.data) ? data.data : []);
    } catch (error) {
        console.error("Error fetching lecturer course sections:", error);
        return [];
    }
}

export async function createLecturerCourseSection(data: any) {
    const response = await fetchWithAuth('/lecturer/course-sections', {
        method: 'POST',
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to create course section');
    }
    return await response.json();
}

export async function updateLecturerCourseSection(id: string, data: any) {
    const response = await fetchWithAuth(`/lecturer/course-sections/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to update course section');
    }
    return await response.json();
}

export async function getLecturerCourseSectionById(id: string) {
    try {
        const response = await fetchWithAuth(`/lecturer/course-sections/${id}`, { method: 'GET', cache: 'no-store' });
        if (!response.ok) return null;
        return await response.json().catch(() => null);
    } catch (error) {
        console.error("Error fetching course section by id:", error);
        return null;
    }
}

export async function getCurrentUser() {
    try {
        const response = await fetchWithAuth('/me', { method: 'GET', cache: 'no-store' });
        if (!response.ok) return null;
        return await response.json().catch(() => null);
    } catch (error) {
        console.error("Error fetching current user:", error);
        return null;
    }
}

export async function getLecturerSectionPosts(sectionId: string) {
    try {
        const response = await fetchWithAuth(`/lecturer/posts?lop_hoc_phan_id=${sectionId}`, { method: 'GET', cache: 'no-store' });
        if (!response.ok) return [];
        const json = await response.json();
        return json.data || json || [];
    } catch (error) {
        console.error("Error fetching lecturer section posts", error);
        return [];
    }
}
