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

    return response;
}

export async function getCourseSections() {
    const response = await fetchWithAuth('/course-sections', { method: 'GET', cache: 'no-store' });
    if (!response.ok) throw new Error('Failed to fetch course sections');
    return await response.json();
}

export async function getCourseSectionById(id: string) {
    const response = await fetchWithAuth(`/course-sections/${id}`, { method: 'GET', cache: 'no-store' });
    if (!response.ok) throw new Error('Failed to fetch course section');
    return await response.json();
}

export async function createCourseSection(data: any) {
    const response = await fetchWithAuth('/course-sections', {
        method: 'POST',
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to create course section');
    }
    return await response.json();
}

export async function updateCourseSection(id: string, data: any) {
    const response = await fetchWithAuth(`/course-sections/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to update course section');
    }
    return await response.json();
}

export async function deleteCourseSection(id: string) {
    const response = await fetchWithAuth(`/course-sections/${id}`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Failed to delete course section');
    return await response.json();
}

export async function getSubjects() {
    const response = await fetchWithAuth('/subjects', { method: 'GET', cache: 'no-store' });
    if (!response.ok) throw new Error('Failed to fetch subjects');
    return await response.json();
}

export async function getLecturers() {
    const response = await fetchWithAuth('/lecturers', { method: 'GET', cache: 'no-store' });
    if (!response.ok) throw new Error('Failed to fetch lecturers');
    return await response.json();
}
