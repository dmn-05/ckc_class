import * as XLSX from 'xlsx';

export function formatExportFileName(prefix: string, title: string): string {
  if (!title) return `${prefix}_Du_lieu`;
  
  // Convert Vietnamese accented characters to clean ASCII (e.g. "Bài tập về nhà" -> "Bai tap ve nha")
  const noAccents = title
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');

  // Replace whitespace and symbols with underscore, remove duplicate underscores
  const cleanTitle = noAccents
    .trim()
    .replace(/\s+/g, '_')
    .replace(/[^a-zA-Z0-9_-]/g, '')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');

  return `${prefix}_${cleanTitle || 'Du_lieu'}`;
}

export function exportToExcel(data: Record<string, any>[], fileName: string, sheetName = "Bảng điểm") {
  if (!data || data.length === 0) {
    alert("Không có dữ liệu để xuất bảng điểm!");
    return;
  }

  const worksheet = XLSX.utils.json_to_sheet(data);

  // Automatically calculate column widths for clean formatting
  const keys = Object.keys(data[0]);
  const cols = keys.map(key => {
    let maxLen = key.length;
    data.forEach(row => {
      const val = row[key];
      if (val !== null && val !== undefined) {
        const len = String(val).length;
        if (len > maxLen) maxLen = len;
      }
    });
    return { wch: Math.min(Math.max(maxLen + 5, 12), 60) };
  });
  worksheet['!cols'] = cols;

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
  
  const finalFileName = fileName.endsWith('.xlsx') ? fileName : `${fileName}.xlsx`;
  XLSX.writeFile(workbook, finalFileName);
}
