"use server";

import { cookies } from "next/headers";

export async function getLecturers() {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) throw new Error("Unauthorized");

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/lecturers`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Accept": "application/json",
            },
            cache: 'no-store'
        });

        if (!response.ok) throw new Error(`Failed to fetch lecturers: ${response.statusText}`);

        const data = await response.json();
        
        return data.map((item: any) => ({
            id: item.id.toString(),
            name: item.ho_ten,
            code: item.giang_vien ? item.giang_vien.ma_giang_vien : '',
            department: item.giang_vien?.bo_mon ? item.giang_vien.bo_mon.ten_bo_mon : '',
            facultyName: item.giang_vien?.bo_mon?.khoa ? item.giang_vien.bo_mon.khoa.ten_khoa : '',
            email: item.email || '',
            avatarUrl: item.avatar || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(item.ho_ten),
            isActive: item.trang_thai === 'dang_hoat_dong',
            theme: 'primary',
            status: item.trang_thai
        }));
    } catch (error) {
        console.error("Error fetching lecturers", error);
        throw error;
    }
}

export async function getLecturerById(id: string) {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) throw new Error("Unauthorized");

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/lecturers/${id}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json",
        },
        cache: 'no-store'
    });

    if (!response.ok) throw new Error(`Failed to fetch lecturer: ${response.statusText}`);

    const item = await response.json();
    return {
        id: item.id.toString(),
        name: item.ho_ten,
        email: item.email || '',
        avatar: item.avatar || '',
        code: item.giang_vien ? item.giang_vien.ma_giang_vien : '',
        cccd: item.giang_vien ? item.giang_vien.cccd : '',
        dob: item.giang_vien ? item.giang_vien.ngay_sinh : '',
        gender: item.giang_vien ? item.giang_vien.gioi_tinh : 'nam',
        phone: item.giang_vien ? item.giang_vien.so_dien_thoai : '',
        address: item.giang_vien ? item.giang_vien.dia_chi : '',
        departmentId: item.giang_vien ? item.giang_vien.bo_mon_id?.toString() : '',
        facultyId: item.giang_vien?.bo_mon ? item.giang_vien.bo_mon.khoa_id?.toString() : '',
        status: item.giang_vien ? item.giang_vien.trang_thai : 'dang_day'
    };
}

export async function createLecturer(data: FormData) {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) throw new Error("Unauthorized");

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/lecturers`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json",
        },
        body: data
    });

    if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        let errMsg = errData.message || `Failed to create lecturer: ${response.statusText}`;
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
}

export async function updateLecturer(id: string, data: FormData) {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) throw new Error("Unauthorized");

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/lecturers/${id}`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json",
        },
        body: data
    });

    if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        let errMsg = errData.message || `Failed to update lecturer: ${response.statusText}`;
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
}

export async function deleteLecturer(id: string) {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) throw new Error("Unauthorized");

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/lecturers/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json",
        }
    });

    if (!response.ok) {
        const errData = await response.json().catch(() => null);
        throw new Error(errData?.message || `Failed to delete lecturer: ${response.statusText}`);
    }

    return await response.json();
}
