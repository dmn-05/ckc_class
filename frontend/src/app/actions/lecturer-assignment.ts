"use server";

import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

async function fetchWithAuth(endpoint: string, options: RequestInit = {}) {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) throw new Error("Unauthorized");

    const headers: Record<string, string> = {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json",
        ...(options.headers as Record<string, string> || {}),
    };

    if (options.body && !(options.body instanceof FormData)) {
        headers["Content-Type"] = "application/json";
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers,
    });

    return response;
}

import { AssignmentData, AssignmentStatus } from '@/components/lecturer/assignments/AssignmentGrid';

function mapAssignmentFromApi(item: any): AssignmentData {
    return {
        id: item.id.toString(),
        title: item.title || item.tieu_de,
        description: item.description || '',
        instructions: item.instructions || item.noi_dung || '',
        maxScore: item.maxScore ?? 10,
        dueDate: item.dueDate || 'Không có hạn',
        allowLate: item.allowLate ?? false,
        latePenaltyPct: item.latePenaltyPct ?? 10,
        isPublished: item.isPublished ?? true,
        sectionId: item.sectionId?.toString() || item.lop_hoc_phan_id?.toString() || '',
        sectionName: item.sectionName || item.lop_hoc_phan?.ten_lop || item.lop_hoc_phan?.mon_hoc?.ten_mon || '',
        status: (item.status || 'open') as AssignmentStatus,
        stats: {
            submitted: item.stats?.submitted ?? 0,
            total: item.stats?.total ?? 0,
            needsGrading: item.stats?.needsGrading ?? 0,
        },
    };
}

export async function getLecturerAssignments(): Promise<AssignmentData[]> {
    const response = await fetchWithAuth('/lecturer/assignments', { method: 'GET', cache: 'no-store' });
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to fetch assignments');
    }
    const json = await response.json();
    const items = json.data || json;
    return (items || []).map(mapAssignmentFromApi);
}

export async function getLecturerAssignmentById(id: string) {
    const response = await fetchWithAuth(`/lecturer/assignments/${id}`, { method: 'GET', cache: 'no-store' });
    if (!response.ok) throw new Error('Failed to fetch assignment');
    const json = await response.json();
    return mapAssignmentFromApi(json.data || json);
}

export async function createLecturerAssignment(data: Record<string, any>) {
    const response = await fetchWithAuth('/lecturer/assignments', {
        method: 'POST',
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to create assignment');
    }
    const json = await response.json();
    return mapAssignmentFromApi(json.data || json);
}

export async function updateLecturerAssignment(id: string, data: Record<string, any>) {
    const response = await fetchWithAuth(`/lecturer/assignments/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to update assignment');
    }
    const json = await response.json();
    return mapAssignmentFromApi(json.data || json);
}

export async function deleteLecturerAssignment(id: string) {
    const response = await fetchWithAuth(`/lecturer/assignments/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to delete assignment');
    }
    return await response.json();
}
