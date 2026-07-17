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
    const cleanUrl = formatFileUrl(url.replace('/fl_attachment/', '/'));
    const targetFileName = fileName || 'download';
    const downloadEndpoint = `${API_BASE_URL}/public/download?url=${encodeURIComponent(cleanUrl)}&filename=${encodeURIComponent(targetFileName)}`;

    try {
        const response = await fetch(downloadEndpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = targetFileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
        console.warn('Direct fetch download failed, falling back to download endpoint redirection:', error);
        const a = document.createElement('a');
        a.href = downloadEndpoint;
        a.download = targetFileName;
        a.target = '_blank';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}
