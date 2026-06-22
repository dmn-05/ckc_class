"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(data: { token: string; vai_tro_id: number; user: any }) {
    const cookieStore = await cookies();
    cookieStore.set("auth_token", data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: "/",
    });
    
    cookieStore.set("vai_tro_id", data.vai_tro_id.toString(), {
        httpOnly: false, // can be read by client if needed, but middleware reads it from server
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
    });

    cookieStore.set("user", JSON.stringify(data.user), {
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
    });

    if (data.vai_tro_id === 1) {
        redirect("/admin");
    } else if (data.vai_tro_id === 2) {
        redirect("/lecturer");
    } else if (data.vai_tro_id === 3) {
        redirect("/student");
    } else {
        redirect("/");
    }
}

export async function logoutAction() {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (token) {
        try {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/logout`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Accept": "application/json",
                },
            });
        } catch (error) {
            console.error("Error during logout API call", error);
        }
    }

    cookieStore.delete("auth_token");
    cookieStore.delete("vai_tro_id");
    cookieStore.delete("user");
    redirect("/login");
}
