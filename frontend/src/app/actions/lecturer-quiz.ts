"use server";

import { cookies } from "next/headers";
import { QuizData } from "@/components/lecturer/quizzes/QuizGrid";
import { QuestionData } from "@/components/lecturer/quizzes/QuestionsManager";

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

    if (response.status === 401) {
        cookieStore.delete("auth_token");
        cookieStore.delete("vai_tro_id");
        cookieStore.delete("user");
        const { redirect } = await import("next/navigation");
        redirect("/login");
    }
    return response;
}

export interface CourseSectionOption {
    id: string;
    name: string;
    subjectName: string;
}

function convertDmyToIso(value: string | null | undefined): string {
    if (!value) return '';
    const dmyRx = /^(\d{2})\/(\d{2})\/(\d{4})\s(\d{2}):(\d{2})/;
    const match = value.trim().match(dmyRx);
    if (match) {
        return `${match[3]}-${match[2]}-${match[1]}T${match[4]}:${match[5]}`;
    }
    return value;
}

function mapQuizFromApi(item: any): QuizData {
    let status: QuizData['status'] = 'draft';
    if (item.status === 'open') status = 'open';
    else if (item.status === 'ended') status = 'closed';
    else if (item.status === 'upcoming') status = 'draft';
    else if (item.status === 'draft') status = 'draft';

    return {
        id: item.id.toString(),
        title: item.title || '',
        description: item.description ?? '',
        timeLimit: item.duration ?? 60,
        maxScore: item.maxScore ?? 10,
        maxAttempts: item.maxAttempts ?? 1,
        startTime: convertDmyToIso(item.startTime),
        endTime: convertDmyToIso(item.endTime),
        shuffleQuestions: item.shuffleQuestions ?? true,
        shuffleOptions: item.shuffleAnswers ?? true,
        showResultAfter: item.showAnswerAfter ?? false,
        isPublished: item.isPublished ?? false,
        sectionId: item.sectionId?.toString() || '',
        sectionName: item.sectionName || '',
        status,
        stats: { 
            totalStudents: item.totalStudents ?? 0, 
            completed: item.submittedCount ?? 0 
        },
    };
}

export async function getLecturerQuizzes(): Promise<QuizData[]> {
    const response = await fetchWithAuth('/lecturer/exams', { method: 'GET', cache: 'no-store' });
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to fetch quizzes');
    }
    const json = await response.json();
    return (json.data || []).map(mapQuizFromApi);
}

export async function getLecturerQuizById(id: string) {
    const response = await fetchWithAuth(`/lecturer/exams/${id}`, { method: 'GET', cache: 'no-store' });
    if (!response.ok) throw new Error('Failed to fetch quiz');
    const json = await response.json();
    return mapQuizFromApi(json.data || json);
}

function parseDateOrNull(value: string | null | undefined): string | null {
    if (!value || typeof value !== 'string') return null;
    const trimmed = value.trim();
    if (!trimmed) return null;
    // Accept ISO format (datetime-local) or d/m/Y H:i
    const isoRx = /^\d{4}-\d{2}-\d{2}(T|\s)\d{2}:\d{2}/;
    const dmyRx = /^\d{2}\/\d{2}\/\d{4}\s\d{2}:\d{2}/;
    if (isoRx.test(trimmed) || dmyRx.test(trimmed)) return trimmed;
    return null;
}

function toApiField(data: Partial<QuizData>): Record<string, any> {
    return {
        tieu_de: data.title,
        mo_ta: data.description || '',
        lop_hoc_phan_id: data.sectionId,
        thoi_gian_bat_dau: parseDateOrNull(data.startTime),
        thoi_gian_ket_thuc: parseDateOrNull(data.endTime),
        thoi_gian_lam_bai: data.timeLimit ?? 60,
        diem_toi_da: data.maxScore ?? 10,
        diem_dat: (data as any).passingScore ?? 5,
        so_lan_thi_toi_da: data.maxAttempts ?? 1,
        hinh_thuc: (data as any).type ?? 'trac_nghiem',
        xao_tron_cau_hoi: data.shuffleQuestions ?? true,
        xao_tron_dap_an: data.shuffleOptions ?? true,
        hien_dap_an_sau_nop: data.showResultAfter ?? false,
        trang_thai: data.isPublished ? 'hien_thi' : 'nhap',
    };
}

export async function createLecturerQuiz(data: Partial<QuizData>) {
    const response = await fetchWithAuth('/lecturer/exams', {
        method: 'POST',
        body: JSON.stringify(toApiField(data)),
    });
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to create quiz');
    }
    const json = await response.json();
    return mapQuizFromApi(json.data || json);
}

export async function updateLecturerQuiz(id: string, data: Partial<QuizData>) {
    const response = await fetchWithAuth(`/lecturer/exams/${id}`, {
        method: 'PUT',
        body: JSON.stringify(toApiField(data)),
    });
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to update quiz');
    }
    const json = await response.json();
    return mapQuizFromApi(json.data || json);
}

export async function deleteLecturerQuiz(id: string) {
    const response = await fetchWithAuth(`/lecturer/exams/${id}`, { method: 'DELETE' });
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to delete quiz');
    }
    return await response.json();
}

export async function getLecturerCourseSections(): Promise<CourseSectionOption[]> {
    const response = await fetchWithAuth('/lecturer/course-sections', { method: 'GET', cache: 'no-store' });
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to fetch course sections');
    }
    const json = await response.json();
    const sections = Array.isArray(json) ? json : (json.data || []);
    return sections.map((s: any) => ({
        id: s.id.toString(),
        name: s.ten_lop || '',
        subjectName: s.mon_hoc?.ten_mon || '',
    }));
}

// ==================== QUESTIONS API ====================

function mapQuestionFromApi(item: any): QuestionData {
    return {
        id: item.id.toString(),
        type: item.type || 'single_choice',
        content: item.content || '',
        score: item.score ?? 1,
        explanation: item.explanation ?? '',
        order: item.order ?? 0,
        options: (item.options || []).map((o: any) => ({
            id: o.id.toString(),
            content: o.content || '',
            isCorrect: o.isCorrect ?? false,
        })),
    };
}

export async function getLecturerQuestions(examId: string): Promise<QuestionData[]> {
    const response = await fetchWithAuth(`/lecturer/exams/${examId}/questions`, { method: 'GET', cache: 'no-store' });
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to fetch questions');
    }
    const json = await response.json();
    return (json.data || []).map(mapQuestionFromApi);
}

export async function createLecturerQuestion(examId: string, data: Partial<QuestionData>) {
    const body: Record<string, any> = {
        loai: data.type || 'single_choice',
        noi_dung: data.content || '',
        diem: data.score ?? 1,
        giai_thich: data.explanation || '',
        thu_tu: data.order ?? 0,
    };
    if (data.options) {
        body.options = data.options.map(o => ({
            noi_dung: o.content,
            la_dap_an_dung: o.isCorrect,
        }));
    }
    const response = await fetchWithAuth(`/lecturer/exams/${examId}/questions`, {
        method: 'POST',
        body: JSON.stringify(body),
    });
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to create question');
    }
    const json = await response.json();
    return mapQuestionFromApi(json.data || json);
}

export async function updateLecturerQuestion(examId: string, questionId: string, data: Partial<QuestionData>) {
    const body: Record<string, any> = {};
    if (data.type) body.loai = data.type;
    if (data.content !== undefined) body.noi_dung = data.content;
    if (data.score !== undefined) body.diem = data.score;
    if (data.explanation !== undefined) body.giai_thich = data.explanation;
    if (data.order !== undefined) body.thu_tu = data.order;
    if (data.options) {
        body.options = data.options.map(o => ({
            noi_dung: o.content,
            la_dap_an_dung: o.isCorrect,
        }));
    }
    const response = await fetchWithAuth(`/lecturer/exams/${examId}/questions/${questionId}`, {
        method: 'PUT',
        body: JSON.stringify(body),
    });
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to update question');
    }
    const json = await response.json();
    return mapQuestionFromApi(json.data || json);
}

export async function deleteLecturerQuestion(examId: string, questionId: string) {
    const response = await fetchWithAuth(`/lecturer/exams/${examId}/questions/${questionId}`, { method: 'DELETE' });
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to delete question');
    }
    return await response.json();
}

export async function reorderLecturerQuestions(examId: string, orders: { id: string; order: number }[]) {
    const body = {
        orders: orders.map(o => ({ id: parseInt(o.id), thu_tu: o.order })),
    };
    const response = await fetchWithAuth(`/lecturer/exams/${examId}/questions/reorder`, {
        method: 'PUT',
        body: JSON.stringify(body),
    });
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to reorder questions');
    }
    return await response.json();
}

// ==================== RESULTS & GRADING API ====================

export async function getQuizAttempts(examId: string) {
    const response = await fetchWithAuth(`/lecturer/exams/${examId}/results`, { method: 'GET', cache: 'no-store' });
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to fetch quiz attempts');
    }
    const json = await response.json();
    return Array.isArray(json) ? json : (json.data || []);
}

export async function gradeQuizEssay(examId: string, attemptId: string, essayScore: number, essayAnswers: { questionId: string, score: number }[]) {
    const response = await fetchWithAuth(`/lecturer/exams/${examId}/results/${attemptId}/grade`, {
        method: 'POST',
        body: JSON.stringify({
            essayScore,
            essayAnswers
        })
    });
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to grade essay');
    }
    return await response.json();
}

