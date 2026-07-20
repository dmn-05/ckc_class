"use server";

import { cookies } from "next/headers";

export async function getDepartments() {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) return [];

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/departments`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Accept": "application/json",
            },
            cache: 'no-store'
        });

        if (!response.ok) throw new Error(`Failed to fetch departments: ${response.statusText}`);

        const data = await response.json();
        
        return data.map((item: any) => ({
            id: item.id.toString(),
            name: item.ten_bo_mon,
            code: item.ma_bo_mon,
            facultyId: item.khoa_id,
            facultyName: item.khoa ? item.khoa.ten_khoa : '',
            head: item.truong_bo_mon || '',
            status: item.trang_thai === 'dang_hoat_dong' ? 'active' : item.trang_thai === 'cho_phe_duyet' ? 'pending' : 'inactive',
            theme: item.trang_thai === 'dang_hoat_dong' ? 'primary' : 'error',
            icon: 'apartment'
        }));
    } catch (error) {
        console.error("Error fetching departments", error);
        throw error;
    }
}

export async function createDepartment(data: { code: string; name: string; facultyId: string; status: string; head: string }) {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) throw new Error("Unauthorized");

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/departments`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            ma_bo_mon: data.code,
            ten_bo_mon: data.name,
            khoa_id: data.facultyId,
            truong_bo_mon: data.head,
            trang_thai: data.status === 'active' ? 'dang_hoat_dong' : data.status === 'pending' ? 'cho_phe_duyet' : 'ngung_hoat_dong'
        })
    });

    if (!response.ok) {
        const errData = await response.json().catch(() => null);
        throw new Error(errData?.message || `Failed to create department: ${response.statusText}`);
    }

    return await response.json();
}

export async function getDepartmentById(id: string) {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) throw new Error("Unauthorized");

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/departments/${id}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json",
        },
        cache: 'no-store'
    });

    if (!response.ok) throw new Error(`Failed to fetch department: ${response.statusText}`);

    const item = await response.json();
    return {
        id: item.id.toString(),
        name: item.ten_bo_mon,
        code: item.ma_bo_mon,
        facultyId: item.khoa_id.toString(),
        head: item.truong_bo_mon || '',
        status: item.trang_thai === 'dang_hoat_dong' ? 'active' : item.trang_thai === 'cho_phe_duyet' ? 'pending' : 'inactive'
    };
}

export async function updateDepartment(id: string, data: { code: string; name: string; facultyId: string; status: string; head: string }) {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) throw new Error("Unauthorized");

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/departments/${id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            ma_bo_mon: data.code,
            ten_bo_mon: data.name,
            khoa_id: data.facultyId,
            truong_bo_mon: data.head,
            trang_thai: data.status === 'active' ? 'dang_hoat_dong' : data.status === 'pending' ? 'cho_phe_duyet' : 'ngung_hoat_dong'
        })
    });

    if (!response.ok) {
        const errData = await response.json().catch(() => null);
        throw new Error(errData?.message || `Failed to update department: ${response.statusText}`);
    }

    return await response.json();
}

export async function deleteDepartment(id: string) {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) throw new Error("Unauthorized");

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/departments/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json",
        }
    });

    if (!response.ok) throw new Error(`Failed to delete department: ${response.statusText}`);

    return await response.json();
}
