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

    if (response.status === 401 || response.status === 403) {
        cookieStore.delete("auth_token");
        cookieStore.delete("vai_tro_id");
        cookieStore.delete("user");
        const { redirect } = await import("next/navigation");
        redirect("/login");
    }
    return response;
}

function mapResourceFromApi(item: any) {
    const fileAttachments = item.tep_tin_bai_viet || [];
    const firstFile = fileAttachments[0]?.tep_tin;
    const physicalFiles = fileAttachments.filter((attach: any) => (attach.tep_tin?.kich_thuoc ?? 0) > 0);
    const firstPhysicalFile = physicalFiles[0]?.tep_tin;
    const fileSize = firstPhysicalFile
        ? (firstPhysicalFile.kich_thuoc / (1024 * 1024)).toFixed(1) + ' MB'
        : (item.external_url || (firstFile?.kich_thuoc === 0 && firstFile?.duong_dan) ? 'Link' : '—');
    const fileUrl = firstPhysicalFile?.duong_dan || firstFile?.duong_dan || item.file_url || '';
    const resourceType = mapLoaiTaiNguyen(firstFile?.loai_file || item.loai_tai_nguyen || 'document');

    const files = physicalFiles.map((attach: any) => ({
        id: attach.tep_tin?.id,
        name: attach.tep_tin?.ten_file,
        url: attach.tep_tin?.duong_dan,
        size: attach.tep_tin?.kich_thuoc ?? 0,
    })).filter((f: any) => f.id);

    return {
        id: item.id.toString(),
        title: item.tieu_de,
        description: item.noi_dung || '',
        type: resourceType as ResourceType,
        sectionId: item.lop_hoc_phan_id?.toString() || item.sectionId?.toString() || '',
        sectionName: item.lop_hoc_phan?.ten_lop || item.lop_hoc_phan?.mon_hoc?.ten_mon || '',
        createdAt: formatDate(item.ngay_tao),
        fileSize,
        fileUrl,
        files,
        externalUrl: item.external_url || (firstFile?.kich_thuoc === 0 ? firstFile?.duong_dan : '') || '',
        isVisible: item.trang_thai === 'hien_thi',
        orderNum: 0,
    };
}

function mapLoaiTaiNguyen(type: string): string {
    switch (type) {
        case 'document': return 'document';
        case 'video': return 'video';
        case 'link': return 'link';
        case 'image': return 'image';
        default: return 'other';
    }
}

function formatDate(dateStr: string): string {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Vừa xong';
    if (minutes < 60) return `${minutes} phút trước`;
    if (hours < 24) return `${hours} giờ trước`;
    if (days < 7) return `${days} ngày trước`;

    return date.toLocaleDateString('vi-VN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
}

import { ResourceData, ResourceType } from '@/components/lecturer/resources/ResourceGrid';

export async function getLecturerResources(): Promise<ResourceData[]> {
    const response = await fetchWithAuth('/lecturer/resources', { method: 'GET', cache: 'no-store' });
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to fetch resources');
    }
    const json = await response.json();
    const resources = json.data || json;
    return resources.map(mapResourceFromApi);
}

export async function getLecturerResourceById(id: string) {
    const response = await fetchWithAuth(`/lecturer/resources/${id}`, { method: 'GET', cache: 'no-store' });
    if (!response.ok) throw new Error('Failed to fetch resource');
    const json = await response.json();
    return mapResourceFromApi(json.data || json);
}

export async function createLecturerResource(data: FormData | Record<string, any>) {
    let response;
    if (data instanceof FormData) {
        response = await fetchWithAuth('/lecturer/resources', {
            method: 'POST',
            body: data,
        });
    } else {
        response = await fetchWithAuth('/lecturer/resources', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        let errMsg = err.message || 'Failed to create resource';
        if (err.error) {
            errMsg += `: ${err.error}`;
        } else if (err.errors) {
            const firstKey = Object.keys(err.errors)[0];
            if (firstKey && Array.isArray(err.errors[firstKey])) {
                errMsg = err.errors[firstKey][0];
            }
        }
        throw new Error(errMsg);
    }
    const json = await response.json();
    return mapResourceFromApi(json.data || json);
}

export async function updateLecturerResource(id: string, data: FormData | Record<string, any>) {
    let response;
    if (data instanceof FormData) {
        data.append('_method', 'PUT');
        response = await fetchWithAuth(`/lecturer/resources/${id}`, {
            method: 'POST', // Laravel uses POST + _method=PUT
            body: data,
        });
    } else {
        response = await fetchWithAuth(`/lecturer/resources/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
        });
    }
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        let errMsg = err.message || 'Failed to update resource';
        if (err.error) {
            errMsg += `: ${err.error}`;
        } else if (err.errors) {
            const firstKey = Object.keys(err.errors)[0];
            if (firstKey && Array.isArray(err.errors[firstKey])) {
                errMsg = err.errors[firstKey][0];
            }
        }
        throw new Error(errMsg);
    }
    const json = await response.json();
    return mapResourceFromApi(json.data || json);
}

export async function deleteLecturerResource(id: string) {
    const response = await fetchWithAuth(`/lecturer/resources/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to delete resource');
    }
    return await response.json();
}

export async function toggleResourceVisibility(id: string) {
    const response = await fetchWithAuth(`/lecturer/resources/${id}/toggle-visibility`, {
        method: 'PATCH',
    });
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to toggle visibility');
    }
    const json = await response.json();
    return mapResourceFromApi(json.data || json);
}

export async function getLecturerCourseSectionsForFilter() {
    const { getLecturerCourseSections } = await import('./lecturer-course-section');
    return await getLecturerCourseSections();
}

