"use server";

import { cookies } from "next/headers";

export async function getDashboardStats() {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) {
        throw new Error("Unauthorized");
    }

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/dashboard/stats`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Accept": "application/json",
            },
            cache: 'no-store'
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch stats: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching stats", error);
        return {
            faculties: 0,
            departments: 0,
            students: 0,
            lecturers: 0
        };
    }
}
