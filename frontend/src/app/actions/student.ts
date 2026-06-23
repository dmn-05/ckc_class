"use server";

import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

async function fetchWithAuth(url: string, options: RequestInit = {}) {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token')?.value;

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
        ...options.headers,
    };

    return fetch(`${API_URL}${url}`, { ...options, headers });
}

export async function getStudents() {
    try {
        const response = await fetchWithAuth('/students', {
            method: 'GET',
            cache: 'no-store'
        });

        if (!response.ok) throw new Error(`Failed to fetch students: ${response.status}`);

        const data = await response.json();
        
        return data.map((item: any) => ({
            id: item.id.toString(),
            name: item.ho_ten,
            code: item.sinh_vien ? item.sinh_vien.ma_sinh_vien : '',
            classCode: item.sinh_vien?.lop ? item.sinh_vien.lop.ma_lop : '',
            faculty: item.sinh_vien?.khoa ? item.sinh_vien.khoa.ten_khoa : '',
            email: item.email || '',
            avatar: item.anh_dai_dien || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(item.ho_ten),
            statusClassName: item.sinh_vien?.trang_thai === 'dang_hoc' ? 'bg-green-500' : 'bg-red-500',
            borderClassName: item.sinh_vien?.trang_thai === 'dang_hoc' ? 'border-l-primary' : 
                             item.sinh_vien?.trang_thai === 'da_tot_nghiep' ? 'border-l-success' : 'border-l-error',
            status: item.sinh_vien?.trang_thai || 'dang_hoc'
        }));
    } catch (error) {
        console.error('Error in getStudents action:', error);
        throw error;
    }
}

export async function getStudentById(id: string) {
    try {
        const response = await fetchWithAuth(`/students/${id}`, {
            method: 'GET',
            cache: 'no-store'
        });
        if (!response.ok) throw new Error(`Failed to fetch student ${id}`);
        return await response.json();
    } catch (error) {
        console.error('Error in getStudentById action:', error);
        throw error;
    }
}

export async function createStudent(data: any) {
    try {
        const response = await fetchWithAuth('/students', {
            method: 'POST',
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            throw new Error(errData.message || 'Failed to create student');
        }
        return await response.json();
    } catch (error) {
        console.error('Error creating student:', error);
        throw error;
    }
}

export async function updateStudent(id: string, data: any) {
    try {
        const response = await fetchWithAuth(`/students/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            throw new Error(errData.message || 'Failed to update student');
        }
        return await response.json();
    } catch (error) {
        console.error('Error updating student:', error);
        throw error;
    }
}

export async function resetStudentPassword(id: string) {
    try {
        const response = await fetchWithAuth(`/students/${id}/reset-password`, {
            method: 'POST'
        });
        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            throw new Error(errData.message || 'Failed to reset password');
        }
        return await response.json();
    } catch (error) {
        console.error('Error resetting student password:', error);
        throw error;
    }
}

export async function deleteStudent(id: string) {
    try {
        const response = await fetchWithAuth(`/students/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            throw new Error(errData.message || 'Failed to delete student');
        }
        return await response.json();
    } catch (error) {
        console.error('Error deleting student:', error);
        throw error;
    }
}

export async function getClasses() {
    try {
        const response = await fetchWithAuth('/classes', {
            method: 'GET',
            cache: 'no-store'
        });
        if (!response.ok) throw new Error('Failed to fetch classes');
        return await response.json();
    } catch (error) {
        console.error('Error in getClasses action:', error);
        throw error;
    }
}
