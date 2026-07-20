"use server";

import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

async function fetchWithAuth(url: string, options: RequestInit = {}) {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token')?.value;

    const headers: any = {
        'Accept': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
        ...options.headers,
    };

    if (!(options.body instanceof FormData)) {
        headers['Content-Type'] = 'application/json';
    }

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
            khoaHoc: item.sinh_vien?.khoa_hoc || '',
            email: item.email || '',
            avatar: item.avatar || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(item.ho_ten),
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

export async function createStudent(data: FormData) {
    try {
        const response = await fetchWithAuth('/students', {
            method: 'POST',
            body: data
        });
        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            let errMsg = errData.message || 'Failed to create student';
            if (errData.errors) {
                const firstKey = Object.keys(errData.errors)[0];
                if (firstKey && Array.isArray(errData.errors[firstKey])) {
                    errMsg = errData.errors[firstKey][0];
                }
            } else if (errData.error) {
                errMsg += `: ${errData.error}`;
            }
            throw new Error(errMsg);
        }
        return await response.json();
    } catch (error) {
        console.error('Error creating student:', error);
        throw error;
    }
}

export async function updateStudent(id: string, data: FormData) {
    try {
        const response = await fetchWithAuth(`/students/${id}`, {
            method: 'POST', // Changed to POST for FormData
            body: data
        });
        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            let errMsg = errData.message || 'Failed to update student';
            if (errData.errors) {
                const firstKey = Object.keys(errData.errors)[0];
                if (firstKey && Array.isArray(errData.errors[firstKey])) {
                    errMsg = errData.errors[firstKey][0];
                }
            } else if (errData.error) {
                errMsg += `: ${errData.error}`;
            }
            throw new Error(errMsg);
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
        const data = await response.json().catch(() => ({}));
        if (!response.ok) {
            return {
                success: false,
                error: data.message || 'Lỗi đặt lại mật khẩu'
            };
        }
        return {
            success: true,
            message: data.message || 'Đặt lại mật khẩu thành công (Mật khẩu mới: 123456)'
        };
    } catch (error: any) {
        console.error('Error resetting student password:', error);
        return {
            success: false,
            error: error.message || 'Lỗi kết nối máy chủ'
        };
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

export async function importStudentsJson(studentsData: any[]) {
    try {
        const response = await fetchWithAuth('/students/import-json', {
            method: 'POST',
            body: JSON.stringify({ students: studentsData })
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Lỗi khi nhập danh sách sinh viên');
        }
        return data;
    } catch (error) {
        console.error('Error importing students:', error);
        throw error;
    }
}

