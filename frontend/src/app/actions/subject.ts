"use server";

import { cookies } from "next/headers";

export async function getSubjects() {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) throw new Error("Unauthorized");

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/subjects`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json",
        },
        cache: 'no-store'
    });

    if (!response.ok) throw new Error(`Failed to fetch subjects: ${response.statusText}`);

    const data = await response.json();
    
    return data.map((item: any) => ({
        id: item.id.toString(),
        name: item.ten_mon,
        code: item.ma_mon,
        credits: item.tin_chi,
        facultyId: item.khoa_id,
        departmentId: item.bo_mon_id,
        facultyName: item.khoa ? item.khoa.ten_khoa : '',
        departmentName: item.bo_mon ? item.bo_mon.ten_bo_mon : '',
        studentCount: 0, // Placeholder
        status: item.trang_thai === 'dang_mo' ? 'active' : 'inactive',
        theme: item.trang_thai === 'dang_mo' ? 'primary' : 'secondary',
        icon: 'library_books'
    }));
}

export async function getSubjectStats() {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) throw new Error("Unauthorized");

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/subjects/stats`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json",
        },
        cache: 'no-store'
    });

    if (!response.ok) throw new Error(`Failed to fetch subject stats: ${response.statusText}`);

    return await response.json();
}

export async function createSubject(data: { code: string; name: string; credits: number; facultyId: string; departmentId: string | null; status: string }) {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) throw new Error("Unauthorized");

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/subjects`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            ma_mon: data.code,
            ten_mon: data.name,
            tin_chi: data.credits,
            khoa_id: data.facultyId,
            bo_mon_id: data.departmentId || null,
            trang_thai: data.status === 'active' ? 'dang_mo' : 'ngung_su_dung'
        })
    });

    if (!response.ok) {
        const errData = await response.json().catch(() => null);
        throw new Error(errData?.message || `Failed to create subject: ${response.statusText}`);
    }

    return await response.json();
}

export async function getSubjectById(id: string) {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) throw new Error("Unauthorized");

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/subjects/${id}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json",
        },
        cache: 'no-store'
    });

    if (!response.ok) throw new Error(`Failed to fetch subject: ${response.statusText}`);

    const item = await response.json();
    return {
        id: item.id.toString(),
        name: item.ten_mon,
        code: item.ma_mon,
        credits: item.tin_chi,
        facultyId: item.khoa_id.toString(),
        departmentId: item.bo_mon_id ? item.bo_mon_id.toString() : '',
        status: item.trang_thai === 'dang_mo' ? 'active' : 'inactive'
    };
}

export async function updateSubject(id: string, data: { code: string; name: string; credits: number; facultyId: string; departmentId: string | null; status: string }) {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) throw new Error("Unauthorized");

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/subjects/${id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            ma_mon: data.code,
            ten_mon: data.name,
            tin_chi: data.credits,
            khoa_id: data.facultyId,
            bo_mon_id: data.departmentId || null,
            trang_thai: data.status === 'active' ? 'dang_mo' : 'ngung_su_dung'
        })
    });

    if (!response.ok) {
        const errData = await response.json().catch(() => null);
        throw new Error(errData?.message || `Failed to update subject: ${response.statusText}`);
    }

    return await response.json();
}

export async function deleteSubject(id: string) {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) throw new Error("Unauthorized");

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/subjects/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json",
        }
    });

    if (!response.ok) throw new Error(`Failed to delete subject: ${response.statusText}`);

    return await response.json();
}
