"use server";

import { cookies } from "next/headers";

export async function getFaculties() {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) {
        throw new Error("Unauthorized");
    }

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/khoa`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Accept": "application/json",
            },
            cache: 'no-store'
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch faculties: ${response.statusText}`);
        }

        const data = await response.json();
        
        // Map database fields to frontend structure
        return data.map((item: any) => ({
            id: item.id.toString(),
            name: item.ten_khoa,
            code: item.ma_khoa,
            dean: item.truong_khoa || '',
            students: 0, // Placeholder
            lecturers: 0, // Placeholder
            status: item.trang_thai === 'dang_hoat_dong' ? 'active' : item.trang_thai === 'cho_phe_duyet' ? 'pending' : 'inactive',
            theme: item.trang_thai === 'dang_hoat_dong' ? 'primary' : 'danger',
            icon: 'account_balance' // Default icon
        }));

    } catch (error) {
        console.error("Error fetching faculties", error);
        throw error;
    }
}

export async function createFaculty(data: { code: string; name: string; status: string; dean: string }) {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) throw new Error("Unauthorized");

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/khoa`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            ma_khoa: data.code,
            ten_khoa: data.name,
            truong_khoa: data.dean,
            trang_thai: data.status === 'active' ? 'dang_hoat_dong' : data.status === 'pending' ? 'cho_phe_duyet' : 'ngung_hoat_dong'
        })
    });

    if (!response.ok) {
        const errData = await response.json().catch(() => null);
        throw new Error(errData?.message || `Failed to create faculty: ${response.statusText}`);
    }

    return await response.json();
}

export async function getFacultyById(id: string) {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) throw new Error("Unauthorized");

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/khoa/${id}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json",
        },
        cache: 'no-store'
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch faculty: ${response.statusText}`);
    }

    const item = await response.json();
    return {
        id: item.id.toString(),
        name: item.ten_khoa,
        code: item.ma_khoa,
        dean: item.truong_khoa || '',
        status: item.trang_thai === 'dang_hoat_dong' ? 'active' : item.trang_thai === 'cho_phe_duyet' ? 'pending' : 'inactive'
    };
}

export async function updateFaculty(id: string, data: { code: string; name: string; status: string; dean: string }) {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) throw new Error("Unauthorized");

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/khoa/${id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            ma_khoa: data.code,
            ten_khoa: data.name,
            truong_khoa: data.dean,
            trang_thai: data.status === 'active' ? 'dang_hoat_dong' : data.status === 'pending' ? 'cho_phe_duyet' : 'ngung_hoat_dong'
        })
    });

    if (!response.ok) {
        const errData = await response.json().catch(() => null);
        throw new Error(errData?.message || `Failed to update faculty: ${response.statusText}`);
    }

    return await response.json();
}

export async function deleteFaculty(id: string) {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) throw new Error("Unauthorized");

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/khoa/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json",
        }
    });

    if (!response.ok) {
        throw new Error(`Failed to delete faculty: ${response.statusText}`);
    }

    return await response.json();
}

export async function getLecturers() {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) throw new Error("Unauthorized");

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/giang-vien`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json",
        },
        cache: 'no-store'
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch lecturers: ${response.statusText}`);
    }

    return await response.json();
}
