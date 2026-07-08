'use client';

import React, { useState, useEffect } from 'react';
import styles from './ResourcesManagement.module.css';

export interface ResourceFormData {
  title: string;
  description: string;
  type: string;
  sectionId: string;
  fileUrl: string; // Legacy
  externalUrl: string;
  isVisible: boolean;
  files?: File[];
  existingFiles?: { id: number; name: string; url: string; size: number }[];
  removeFileIds?: number[];
}

interface SectionOption {
  id: string;
  name: string;
  code: string;
}

interface ResourceFormProps {
  initialData?: ResourceFormData;
  sections: SectionOption[];
  isEditMode?: boolean;
  saving: boolean;
  onSave: (data: ResourceFormData) => void;
  onCancel: () => void;
}

export default function ResourceForm({
  initialData,
  sections,
  isEditMode = false,
  saving,
  onSave,
  onCancel
}: ResourceFormProps) {
  
  const [formData, setFormData] = useState<ResourceFormData>({
    title: '',
    description: '',
    type: 'document',
    sectionId: '',
    fileUrl: '',
    externalUrl: '',
    isVisible: true,
    files: [],
    existingFiles: [],
    removeFileIds: []
  });

  // Sync initialData
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  // Set default section if none selected and not editing
  useEffect(() => {
    if (sections.length > 0 && !formData.sectionId && !isEditMode) {
      setFormData(prev => ({ ...prev, sectionId: sections[0].id }));
    }
  }, [sections, formData.sectionId, isEditMode]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    if (selectedFiles.length > 0) {
      setFormData(prev => ({ ...prev, files: [...(prev.files || []), ...selectedFiles] }));
    }
  };

  const removeNewFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      files: (prev.files || []).filter((_, i) => i !== index)
    }));
  };

  const removeExistingFile = (id: number) => {
    setFormData(prev => ({
      ...prev,
      existingFiles: (prev.existingFiles || []).filter(f => f.id !== id),
      removeFileIds: [...(prev.removeFileIds || []), id]
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleToggleVisible = () => {
    setFormData(prev => ({ ...prev, isVisible: !prev.isVisible }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div style={{ backgroundColor: '#fff', borderRadius: '0.75rem', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Lớp học phần *</label>
          <select 
            name="sectionId"
            className={styles.formSelect}
            value={formData.sectionId}
            onChange={handleChange}
            required
            disabled={isEditMode}
          >
            {sections.map(sec => (
              <option key={sec.id} value={sec.id}>{sec.name} ({sec.code})</option>
            ))}
            {sections.length === 0 && (
              <option value={formData.sectionId}>
                {isEditMode ? `Lớp ID: ${formData.sectionId}` : 'Không có lớp học phần nào'}
              </option>
            )}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Tiêu đề tài nguyên *</label>
          <input 
            type="text" 
            name="title"
            className={styles.formInput} 
            value={formData.title}
            onChange={handleChange}
            placeholder="Nhập tiêu đề (VD: Slide Bài giảng Chương 1)"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Loại tài nguyên *</label>
          <select 
            name="type"
            className={styles.formSelect}
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="document">Tài liệu (PDF, Word...)</option>
            <option value="video">Video bài giảng</option>
            <option value="link">Liên kết ngoài (Link)</option>
            <option value="image">Hình ảnh</option>
            <option value="other">Khác</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Mô tả chi tiết</label>
          <textarea 
            name="description"
            className={styles.formTextarea} 
            value={formData.description}
            onChange={handleChange}
            placeholder="Nhập mô tả (không bắt buộc)"
            rows={4}
          />
        </div>

        {formData.type === 'link' ? (
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Đường dẫn (URL) *</label>
            <input 
              type="url" 
              name="externalUrl"
              className={styles.formInput} 
              value={formData.externalUrl}
              onChange={handleChange}
              placeholder="https://..."
              required
            />
          </div>
        ) : (
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Đính kèm File (Tải lên)</label>
            <input 
              type="file" 
              multiple
              className={styles.formInput} 
              onChange={handleFileUpload}
            />
            
            {/* Display newly selected files */}
            {formData.files && formData.files.length > 0 && (
              <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {formData.files.map((file, index) => (
                  <div key={index} style={{ fontSize: '0.875rem', color: '#059669', wordBreak: 'break-all', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#ecfdf5', padding: '0.5rem', borderRadius: '0.25rem' }}>
                    <span>Đã chọn: {file.name} ({(file.size / 1024).toFixed(1)} KB)</span>
                    <button type="button" onClick={() => removeNewFile(index)} style={{ color: '#ef4444', border: 'none', background: 'none', cursor: 'pointer' }}>✕</button>
                  </div>
                ))}
              </div>
            )}

            {/* Display existing files */}
            {formData.existingFiles && formData.existingFiles.length > 0 && (
              <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {formData.existingFiles.map((file) => (
                  <div key={file.id} style={{ fontSize: '0.875rem', color: '#374151', wordBreak: 'break-all', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#f3f4f6', padding: '0.5rem', borderRadius: '0.25rem' }}>
                    <a href={file.url} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none' }}>
                      File hiện tại: {file.name} ({(file.size / 1024).toFixed(1)} KB)
                    </a>
                    <button type="button" onClick={() => removeExistingFile(file.id)} style={{ color: '#ef4444', border: 'none', background: 'none', cursor: 'pointer' }}>✕</button>
                  </div>
                ))}
              </div>
            )}
            
            {/* Legacy file support */}
            {formData.fileUrl && (!formData.existingFiles || formData.existingFiles.length === 0) && (
              <div style={{ fontSize: '0.875rem', color: '#374151', wordBreak: 'break-all', marginTop: '0.5rem' }}>
                <a href={formData.fileUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none' }}>Xem file cũ</a>
              </div>
            )}
          </div>
        )}

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Trạng thái hiển thị</label>
          <div className={styles.toggleSwitch} onClick={handleToggleVisible} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div className={`${styles.switchTrack} ${formData.isVisible ? styles.switchTrackActive : ''}`}>
              <div className={`${styles.switchThumb} ${formData.isVisible ? styles.switchThumbActive : ''}`}></div>
            </div>
            <span style={{ fontSize: '0.875rem', color: formData.isVisible ? '#059669' : '#777587', fontWeight: 500 }}>
              {formData.isVisible ? 'Công khai với sinh viên' : 'Đang ẩn (Nháp)'}
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '2rem' }}>
          <button type="button" className={styles.btnCancel} onClick={onCancel} disabled={saving}>
            Hủy
          </button>
          <button type="submit" className={styles.btnSave} disabled={saving}>
            {saving ? 'Đang lưu...' : (isEditMode ? 'Cập nhật' : 'Thêm mới')}
          </button>
        </div>
      </form>
    </div>
  );
}
