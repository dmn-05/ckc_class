export async function downloadFile(url: string, fileName: string) {
    try {
        // Remove fl_attachment if it was accidentally added
        const cleanUrl = url.replace('/fl_attachment/', '/');
        
        const response = await fetch(cleanUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
        console.error('Download failed:', error);
        // Fallback to opening in a new tab if fetch fails (e.g. CORS)
        window.open(url, '_blank');
    }
}
