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

    // Chỉ set Content-Type JSON nếu không phải FormData
    if (options.body && !(options.body instanceof FormData)) {
        headers["Content-Type"] = "application/json";
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers,
    });

    if (response.status === 401 || response.status === 403) {
        cookieStore.delete("auth_token");
        cookieStore.delete("vai_tro_id");
        cookieStore.delete("user");
        const { redirect } = await import("next/navigation");
        redirect("/login");
    }
    return response;
}

import { AssignmentData, AssignmentStatus } from '@/components/lecturer/assignments/AssignmentGrid';

function mapAssignmentFromApi(item: any): AssignmentData {
    return {
        id: item.id.toString(),
        title: item.title || item.tieu_de,
        description: item.description ?? '',
        instructions: item.instructions ?? '',
        fileUrl: item.fileUrl ?? null,
        fileName: item.fileName ?? null,
        files: item.files ?? [],
        maxScore: item.maxScore ?? 10,
        dueDate: item.dueDate || 'Không có hạn',
        allowLate: item.allowLate ?? false,
        latePenaltyPct: item.latePenaltyPct ?? 10,
        isPublished: item.isPublished ?? true,
        sectionId: item.sectionId?.toString() || item.lop_hoc_phan_id?.toString() || '',
        sectionName: item.sectionName || '',
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
    return (json.data || json || []).map(mapAssignmentFromApi);
}

export async function getLecturerAssignmentById(id: string) {
    const response = await fetchWithAuth(`/lecturer/assignments/${id}`, { method: 'GET', cache: 'no-store' });
    if (!response.ok) throw new Error('Failed to fetch assignment');
    const json = await response.json();
    return mapAssignmentFromApi(json.data || json);
}

export async function createLecturerAssignment(formData: FormData) {
    const response = await fetchWithAuth('/lecturer/assignments', {
        method: 'POST',
        body: formData,
    });
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to create assignment');
    }
    const json = await response.json();
    return mapAssignmentFromApi(json.data || json);
}

export async function updateLecturerAssignment(id: string, formData: FormData) {
    // Laravel không parse FormData trên PUT/PATCH → dùng POST + _method spoofing
    formData.append('_method', 'PUT');
    const response = await fetchWithAuth(`/lecturer/assignments/${id}`, {
        method: 'POST',
        body: formData,
    });
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to update assignment');
    }
    const json = await response.json();
    return mapAssignmentFromApi(json.data || json);
}

export async function deleteLecturerAssignment(id: string) {
    const response = await fetchWithAuth(`/lecturer/assignments/${id}`, { method: 'DELETE' });
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to delete assignment');
    }
    return await response.json();
}

export async function getLecturerAssignmentSubmissions(id: string) {
    const response = await fetchWithAuth(`/lecturer/assignments/${id}/submissions`, { method: 'GET', cache: 'no-store' });
    if (!response.ok) throw new Error('Failed to fetch submissions');
    const json = await response.json();
    return json.data || [];
}

export async function gradeLecturerSubmission(assignmentId: string, submissionId: string, score: number, feedback: string) {
    const response = await fetchWithAuth(`/lecturer/assignments/${assignmentId}/submissions/${submissionId}/grade`, {
        method: 'POST',
        body: JSON.stringify({ diem: score, nhan_xet: feedback })
    });
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to grade submission');
    }
    return await response.json();
}

export async function returnLecturerSubmissions(assignmentId: string, submissionIds: string[]) {
    const response = await fetchWithAuth(`/lecturer/assignments/${assignmentId}/submissions/return`, {
        method: 'POST',
        body: JSON.stringify({ submission_ids: submissionIds.map(id => Number(id)) })
    });
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to return submissions');
    }
    return await response.json();
}

