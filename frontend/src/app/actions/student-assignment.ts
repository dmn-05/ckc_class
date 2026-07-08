'use server';

import { cookies } from 'next/headers';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export async function getStudentAssignments(sectionId?: string) {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token')?.value;

    if (!token) return [];

    try {
        const url = sectionId 
            ? `${API_URL}/student/assignments?lop_hoc_phan_id=${sectionId}`
            : `${API_URL}/student/assignments`;

        const res = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
            cache: 'no-store'
        });

        if (res.status === 401 || res.status === 403) {
            cookieStore.delete("auth_token");
            cookieStore.delete("vai_tro_id");
            cookieStore.delete("user");
            const { redirect } = await import("next/navigation");
            redirect("/login");
        }

        if (!res.ok) return [];

        const data = await res.json();
        return data.data;
    } catch (error: any) {
        if (error && typeof error.message === "string" && error.message.includes("NEXT_REDIRECT")) throw error;
        return [];
    }
}

export async function getStudentAssignmentById(id: string | number) {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token')?.value;

    if (!token) return null;

    try {
        const res = await fetch(`${API_URL}/student/assignments/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
            cache: 'no-store'
        });

        if (res.status === 401 || res.status === 403) {
            cookieStore.delete("auth_token");
            cookieStore.delete("vai_tro_id");
            cookieStore.delete("user");
            const { redirect } = await import("next/navigation");
            redirect("/login");
        }

        if (!res.ok) return null;

        const data = await res.json();
        return data.data;
    } catch (error: any) {
        if (error && typeof error.message === "string" && error.message.includes("NEXT_REDIRECT")) throw error;
        return null;
    }
}

export async function submitStudentAssignment(assignmentId: string, formData: FormData) {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token')?.value;

    if (!token) {
        return { success: false, message: 'Not authenticated' };
    }

    try {
        const res = await fetch(`${API_URL}/student/assignments/${assignmentId}/submit`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
            body: formData,
            cache: 'no-store'
        });

        const data = await res.json();
        if (!res.ok) {
            return { success: false, message: data.message || 'Lỗi nộp bài' };
        }

        return { success: true, message: data.message };
    } catch (error: any) {
        console.error('Error submitting assignment:', error);
        return { success: false, message: error.message || 'Lỗi kết nối' };
    }
}
