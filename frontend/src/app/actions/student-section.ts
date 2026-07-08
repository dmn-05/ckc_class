'use server';

import { cookies } from 'next/headers';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export async function getStudentCourseSections() {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token')?.value;

    if (!token) {
        throw new Error('Not authenticated');
    }

    try {
        const res = await fetch(`${API_URL}/student/sections`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
            cache: 'no-store'
        });

        if (!res.ok) {
            const errBody = await res.text();
            console.error('Backend error:', res.status, errBody);
            throw new Error(`Failed to fetch enrolled sections: ${res.status} ${errBody}`);
        }

        const data = await res.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching student sections:', error);
        throw error;
    }
}

export async function getStudentCourseSection(id: string) {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token')?.value;

    if (!token) return null;

    try {
        const res = await fetch(`${API_URL}/student/sections/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
            cache: 'no-store'
        });

        if (!res.ok) return null;

        const data = await res.json();
        return data.data;
    } catch (error) {
        return null;
    }
}

export async function getStudentCoursePosts(sectionId: string) {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token')?.value;

    if (!token) return [];

    try {
        const res = await fetch(`${API_URL}/student/posts?lop_hoc_phan_id=${sectionId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
            cache: 'no-store'
        });

        if (!res.ok) return [];

        const data = await res.json();
        return data.data;
    } catch (error) {
        return [];
    }
}
