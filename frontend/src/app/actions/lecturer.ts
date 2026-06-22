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
            avatarUrl: item.anh_dai_dien || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(item.ho_ten),
            isActive: item.trang_thai === 'dang_hoat_dong',
            theme: 'primary',
            status: item.trang_thai
        }));
    } catch (error) {
        console.error("Error fetching lecturers", error);
        throw error;
    }
}
