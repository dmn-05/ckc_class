const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
const BACKEND_ORIGIN = API_BASE_URL.replace(/\/api\/?$/, '');

export function formatFileUrl(url?: string | null): string {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('blob:')) {
        return url;
    }
    const cleanPath = url.startsWith('/') ? url : `/${url}`;
    return `${BACKEND_ORIGIN}${cleanPath}`;
}

export async function downloadFile(url: string, fileName: string) {
    if (!url) return;
    const formattedUrl = formatFileUrl(url);
    const targetFileName = fileName || 'download';

    // Strip any existing fl_attachment transform so backend can re-inject correctly
    const cleanUrl = formattedUrl
        .replace(/\/fl_attachment:[^/]+\//, '/')
        .replace(/\/fl_attachment\//, '/');

    const downloadEndpoint = `${API_BASE_URL}/public/download?url=${encodeURIComponent(cleanUrl)}&filename=${encodeURIComponent(targetFileName)}`;

    const a = document.createElement('a');
    a.href = downloadEndpoint;
    a.download = targetFileName;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
