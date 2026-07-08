'use server';

import { cookies } from 'next/headers';
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export async function getStudentQuizzes(sectionId?: string) {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token')?.value;

    if (!token) {
        throw new Error('Not authenticated');
    }

    try {
        const url = sectionId ? `${API_URL}/student/quizzes?lop_hoc_phan_id=${sectionId}` : `${API_URL}/student/quizzes`;
        const res = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
            next: {
                tags: ['student-quizzes'],
                revalidate: 60
            }
        });

        if (res.status === 401 || res.status === 403) {
            const cookieStore = await cookies();
            cookieStore.delete("auth_token");
            cookieStore.delete("vai_tro_id");
            cookieStore.delete("user");
            const { redirect } = await import("next/navigation");
            redirect("/login");
        }
        if (!res.ok) {
            const errData = await res.json().catch(() => ({}));
            throw new Error(errData.message || 'Failed to fetch student quizzes');
        }

        const data = await res.json();
        return { success: true, data: data.data };
    } catch (error: any) {
        if (error && typeof error.message === "string" && error.message.includes("NEXT_REDIRECT")) throw error;
        console.error('Error fetching student quizzes:', error);
        return { success: false, error: error.message || 'Lỗi kết nối' };
    }
}

export async function getStudentQuizDetails(id: string) {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token')?.value;

    if (!token) {
        throw new Error('Not authenticated');
    }

    try {
        const res = await fetch(`${API_URL}/student/quizzes/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
            cache: 'no-store'
        });

        if (res.status === 401 || res.status === 403) {
            const cookieStore = await cookies();
            cookieStore.delete("auth_token");
            cookieStore.delete("vai_tro_id");
            cookieStore.delete("user");
            const { redirect } = await import("next/navigation");
            redirect("/login");
        }
        if (!res.ok) {
            const errData = await res.json().catch(() => ({}));
            throw new Error(errData.message || 'Failed to fetch student quiz details');
        }

        const data = await res.json();
        return { success: true, data: data.data };
    } catch (error: any) {
        if (error && typeof error.message === "string" && error.message.includes("NEXT_REDIRECT")) throw error;
        console.error('Error fetching student quiz details:', error);
        return { success: false, error: error.message || 'Lỗi kết nối' };
    }
}

export async function submitStudentQuiz(id: string, answers: Record<string, any>, spentSeconds?: number) {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token')?.value;

    if (!token) {
        throw new Error('Not authenticated');
    }

    try {
        const thoi_gian_nop_bai = new Date();
        const thoi_gian_bat_dau = spentSeconds !== undefined 
            ? new Date(thoi_gian_nop_bai.getTime() - spentSeconds * 1000) 
            : thoi_gian_nop_bai;

        const res = await fetch(`${API_URL}/student/quizzes/${id}/submit`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                answers,
                thoi_gian_bat_dau: thoi_gian_bat_dau.toISOString(),
                thoi_gian_nop_bai: thoi_gian_nop_bai.toISOString(),
            }),
        });

        if (res.status === 401 || res.status === 403) {
            const cookieStore = await cookies();
            cookieStore.delete("auth_token");
            cookieStore.delete("vai_tro_id");
            cookieStore.delete("user");
            const { redirect } = await import("next/navigation");
            redirect("/login");
        }
        if (!res.ok) {
            const errData = await res.json().catch(() => ({}));
            throw new Error(errData.message || 'Failed to submit quiz');
        }

        const data = await res.json();
        return { success: true, data: data.data };
    } catch (error: any) {
        if (error && typeof error.message === "string" && error.message.includes("NEXT_REDIRECT")) throw error;
        console.error('Error submitting quiz:', error);
        return { success: false, error: error.message || 'Lỗi kết nối' };
    }
}

export async function getStudentQuizResult(id: string) {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token')?.value;

    if (!token) {
        throw new Error('Not authenticated');
    }

    try {
        const res = await fetch(`${API_URL}/student/quizzes/${id}/result`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
            cache: 'no-store'
        });

        if (res.status === 401 || res.status === 403) {
            const cookieStore = await cookies();
            cookieStore.delete("auth_token");
            cookieStore.delete("vai_tro_id");
            cookieStore.delete("user");
            const { redirect } = await import("next/navigation");
            redirect("/login");
        }
        if (!res.ok) {
            const errData = await res.json().catch(() => ({}));
            throw new Error(errData.message || 'Failed to fetch student quiz result');
        }

        const data = await res.json();
        return { success: true, data };
    } catch (error: any) {
        if (error && typeof error.message === "string" && error.message.includes("NEXT_REDIRECT")) throw error;
        console.error('Error fetching student quiz result:', error);
        return { success: false, error: error.message || 'Lỗi kết nối' };
    }
}


