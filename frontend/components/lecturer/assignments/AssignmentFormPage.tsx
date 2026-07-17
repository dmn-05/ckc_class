'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './AssignmentsManagement.module.css';

export interface AssignmentFormData {
  title: string;
  sectionId: string;
  description: string;
  instructions: string;
  maxScore: number;
  dueDate: string;
  allowLate: boolean;
  latePenaltyPct: number;
  isPublished: boolean;
  // file state
  existingFiles?: { id: number; name: string; url: string; size: number }[];
  existingFileUrl?: string | null; // Legacy
  existingFileName?: string | null; // Legacy
}

interface SectionOption {
  id: string;
  name: string;
  code?: string;
}

interface AssignmentFormPageProps {
  initialData?: AssignmentFormData;
  sections: SectionOption[];
  isEditMode?: boolean;
  saving: boolean;
  onSave: (data: AssignmentFormData, files: File[], removeFileIds: number[], removeFile: boolean) => void;
  onCancel: () => void;
}

export default function AssignmentFormPage({
  initialData,
  sections,
  isEditMode = false,
  saving,
  onSave,
  onCancel,
}: AssignmentFormPageProps) {
  const [error, setError] = useState('');
  const [formData, setFormData] = useState<AssignmentFormData>({
    title: '',
    sectionId: '',
    description: '',
    instructions: '',
    maxScore: 10,
    dueDate: '',
    allowLate: false,
    latePenaltyPct: 10,
    isPublished: true,
    existingFiles: [],
    existingFileUrl: null,
    existingFileName: null,
  });

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [removeFileIds, setRemoveFileIds] = useState<number[]>([]);
  const [removeFile, setRemoveFile] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [urlSectionId, setUrlSectionId] = useState<string>('');

  useEffect(() => {
    const searchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
    const sId = searchParams.get('sectionId');
    if (sId && sId !== '0') {
      setUrlSectionId(sId);
      if (!isEditMode) {
        setFormData(prev => ({ ...prev, sectionId: sId }));
      }
    }
  }, [isEditMode]);

  // Default section
  useEffect(() => {
    if (sections.length > 0 && !formData.sectionId && !isEditMode && !urlSectionId) {
      setFormData(prev => ({ ...prev, sectionId: sections[0].id }));
    }
  }, [sections, formData.sectionId, isEditMode, urlSectionId]);

  // Sync initialData
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (type === 'number') {
      setFormData(prev => ({ ...prev, [name]: Number(value) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleTogglePublish = () => {
    setFormData(prev => ({ ...prev, isPublished: !prev.isPublished }));
  };

  const handleFileChange = (newFiles: File[]) => {
    setSelectedFiles(prev => [...prev, ...newFiles]);
    setRemoveFile(false);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    handleFileChange(files);
    // Reset input to allow re-selecting same file
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const files = Array.from(e.dataTransfer.files || []);
    handleFileChange(files);
  };

  const handleRemoveNewFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleRemoveExistingFile = (id: number) => {
    setFormData(prev => ({
      ...prev,
      existingFiles: (prev.existingFiles || []).filter(f => f.id !== id),
    }));
    setRemoveFileIds(prev => [...prev, id]);
  };

  const handleRemoveFile = () => {
    setSelectedFiles([]);
    setRemoveFile(true);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const getMinDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.dueDate) {
      const due = new Date(formData.dueDate);
      const now = new Date();
      if (due.getTime() < now.getTime()) {
        setError('Hạn nộp không được đặt ở thời điểm trong quá khứ. Vui lòng chọn thời điểm hiện tại hoặc tương lai.');
        return;
      }
    }

    onSave(formData, selectedFiles, removeFileIds, removeFile);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const hasExistingFile = !removeFile && selectedFiles.length === 0 && formData.existingFileUrl;
  const existingFiles = formData.existingFiles || [];

  return (
    <div style={{ backgroundColor: '#fff', borderRadius: '0.75rem', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
      {error && (
        <div style={{
          backgroundColor: '#fef2f2',
          color: '#dc2626',
          padding: '12px 16px',
          borderRadius: '10px',
          marginBottom: '1.25rem',
          border: '1px solid #fecaca',
          fontSize: '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontWeight: 600
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{error}</span>
        </div>
      )}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

        {/* Row 1: Lớp học phần + Trạng thái */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Lớp học phần *</label>
            <select
              name="sectionId"
              className={styles.formSelect}
              value={formData.sectionId}
              onChange={handleChange}
              required
              disabled={isEditMode || Boolean(urlSectionId && urlSectionId !== '0') || Boolean(initialData?.sectionId && initialData.sectionId !== '0')}
            >
              {sections.map(sec => (
                <option key={sec.id} value={sec.id}>
                  {sec.name}{sec.code ? ` (${sec.code})` : ''}
                </option>
              ))}
              {sections.length === 0 && (
                <option value={formData.sectionId}>
                  {isEditMode ? `Lớp ID: ${formData.sectionId}` : 'Không có lớp học phần nào'}
                </option>
              )}
            </select>
            {!isEditMode && Boolean(urlSectionId && urlSectionId !== '0') && (
              <small style={{color: '#777587', marginTop: '4px', display: 'block'}}>Đang thêm bài tập cho lớp học phần hiện tại (không thể thay đổi).</small>
            )}
            {isEditMode && (
              <small style={{color: '#777587', marginTop: '4px', display: 'block'}}>Lớp học phần không thể thay đổi khi chỉnh sửa.</small>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Trạng thái</label>
            <div
              onClick={handleTogglePublish}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.75rem 1rem', border: '1px solid #c7c4d8', borderRadius: '0.5rem',
                cursor: 'pointer', backgroundColor: formData.isPublished ? '#ecfdf5' : '#f3f4f6',
                color: formData.isPublished ? '#059669' : '#4b5563', fontWeight: 600, fontSize: '0.875rem',
                userSelect: 'none', transition: 'all 0.2s',
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                {formData.isPublished
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                }
              </svg>
              {formData.isPublished ? 'Công khai' : 'Nháp'}
            </div>
          </div>
        </div>

        {/* Tiêu đề */}
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Tiêu đề bài tập *</label>
          <input
            type="text"
            name="title"
            className={styles.formInput}
            value={formData.title}
            onChange={handleChange}
            placeholder="Nhập tiêu đề (VD: Bài tập thực hành 1)"
            required
          />
        </div>

        {/* Mô tả / Nội dung */}
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Mô tả / Mục tiêu</label>
          <textarea
            name="description"
            className={styles.formTextarea}
            value={formData.description}
            onChange={handleChange}
            placeholder="Mô tả ngắn gọn về mục tiêu của bài tập..."
            rows={3}
          />
        </div>

        {/* Hướng dẫn chi tiết */}
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Hướng dẫn chi tiết</label>
          <textarea
            name="instructions"
            className={styles.formTextarea}
            value={formData.instructions}
            onChange={handleChange}
            placeholder="Nhập nội dung hướng dẫn chi tiết, yêu cầu, tiêu chí chấm điểm..."
            rows={5}
          />
        </div>

        {/* File đính kèm */}
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>File đính kèm</label>

          {/* Existing files from DB */}
          {existingFiles.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '0.5rem' }}>
              {existingFiles.map((file) => (
                <div key={file.id} style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  padding: '0.625rem 0.875rem', borderRadius: '0.5rem',
                  backgroundColor: '#f0f9ff', border: '1px solid #bae6fd',
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#0284c7" width="20" height="20">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <a href={file.url} target="_blank" rel="noopener noreferrer"
                    style={{ flex: 1, color: '#0284c7', fontSize: '0.875rem', textDecoration: 'none', wordBreak: 'break-all' }}>
                    {file.name} ({formatFileSize(file.size)})
                  </a>
                  <button type="button" onClick={() => handleRemoveExistingFile(file.id)} title="Xóa file"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444', padding: '0.25rem', display: 'flex', alignItems: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" height="18">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Legacy single file */}
          {hasExistingFile && existingFiles.length === 0 && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              padding: '0.625rem 0.875rem', borderRadius: '0.5rem',
              backgroundColor: '#f0f9ff', border: '1px solid #bae6fd',
              marginBottom: '0.5rem',
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#0284c7" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <a href={formData.existingFileUrl!} target="_blank" rel="noopener noreferrer"
                style={{ flex: 1, color: '#0284c7', fontSize: '0.875rem', textDecoration: 'none', wordBreak: 'break-all' }}>
                {formData.existingFileName || 'File đính kèm'}
              </a>
              <button type="button" onClick={handleRemoveFile} title="Xóa file"
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444', padding: '0.25rem', display: 'flex', alignItems: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" height="18">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}

          {/* Newly selected files */}
          {selectedFiles.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '0.5rem' }}>
              {selectedFiles.map((file, index) => (
                <div key={index} style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  padding: '0.625rem 0.875rem', borderRadius: '0.5rem',
                  backgroundColor: '#f0fdf4', border: '1px solid #86efac',
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#16a34a" width="20" height="20">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span style={{ flex: 1, fontSize: '0.875rem', color: '#15803d', wordBreak: 'break-all' }}>
                    {file.name}
                    <span style={{ color: '#6b7280', marginLeft: '0.5rem' }}>({formatFileSize(file.size)})</span>
                  </span>
                  <button type="button" onClick={() => handleRemoveNewFile(index)} title="Hủy chọn file"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444', padding: '0.25rem', display: 'flex', alignItems: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" height="18">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Drop zone - always visible to add more files */}
          <div
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            style={{
              border: `2px dashed ${dragOver ? '#6366f1' : '#c7c4d8'}`,
              borderRadius: '0.5rem',
              padding: '1.5rem',
              textAlign: 'center',
              cursor: 'pointer',
              backgroundColor: dragOver ? '#eef2ff' : '#fafafa',
              transition: 'all 0.2s',
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#9ca3af" width="32" height="32" style={{ margin: '0 auto 0.5rem' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
              Kéo thả file vào đây hoặc <span style={{ color: '#6366f1', fontWeight: 600 }}>chọn file</span>
            </p>
            <p style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.25rem' }}>
              Hỗ trợ nhiều file: PDF, Word, Excel, PowerPoint, hình ảnh, video... (tối đa 50MB/file)
            </p>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="*/*"
            multiple
            onChange={handleFileInput}
            style={{ display: 'none' }}
          />
        </div>

        {/* Row 2: Điểm + Hạn nộp */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Điểm tối đa</label>
            <input
              type="number"
              name="maxScore"
              className={styles.formInput}
              value={formData.maxScore}
              onChange={handleChange}
              min={1}
              max={100}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Hạn nộp</label>
            <input
              type="datetime-local"
              name="dueDate"
              className={styles.formInput}
              value={formData.dueDate}
              onChange={handleChange}
              min={getMinDateTime()}
            />
          </div>
        </div>

        {/* Cho phép nộp trễ */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', alignItems: 'start' }}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', cursor: 'pointer' }}>
              <input
                type="checkbox"
                name="allowLate"
                checked={formData.allowLate}
                onChange={handleChange}
                style={{ width: '1rem', height: '1rem', cursor: 'pointer' }}
              />
              Cho phép nộp trễ
            </label>
          </div>

          {formData.allowLate && (
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Mức phạt nộp trễ (%)</label>
              <input
                type="number"
                name="latePenaltyPct"
                className={styles.formInput}
                value={formData.latePenaltyPct}
                onChange={handleChange}
                min={0}
                max={100}
              />
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
          <button type="button" className={styles.btnSecondary} onClick={onCancel} disabled={saving}>
            Hủy
          </button>
          <button type="submit" className={styles.btnPrimary} disabled={saving}>
            {saving ? 'Đang lưu...' : (isEditMode ? 'Cập nhật' : 'Thêm mới')}
          </button>
        </div>

      </form>
    </div>
  );
}
