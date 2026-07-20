"use server";

import { cookies } from "next/headers";

export async function getNotifications() {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) {
        return { data: [], unread_count: 0 };
    }

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/notifications`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Accept": "application/json",
            },
            cache: 'no-store'
        });

        if (!response.ok) {
            return { data: [], unread_count: 0 };
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching notifications", error);
        return { data: [], unread_count: 0 };
    }
}

export async function markNotificationAsRead(id: number) {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) return { success: false };

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/notifications/${id}/read`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Accept": "application/json",
            },
        });
        return await response.json();
    } catch (error) {
        return { success: false };
    }
}

export async function markAllNotificationsAsRead() {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) return { success: false };

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/notifications/read-all`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Accept": "application/json",
            },
        });
        return await response.json();
    } catch (error) {
        return { success: false };
    }
}
