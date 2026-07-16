'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './CreatePost.module.css';
import { getLecturerCourseSections } from '@/app/actions/lecturer-course-section';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
import { authHeaders } from '@/lib/auth';

interface CreatePostFormProps {
  initialData?: any;
  isEdit?: boolean;
}

export default function CreatePostForm({ initialData, isEdit = false }: CreatePostFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const [courseSections, setCourseSections] = useState<any[]>([]);

  const [formData, setFormData] = useState({
    title: initialData?.tieu_de || initialData?.title || '',
    category: (initialData?.loai_bai_viet === 'bai_viet' ? 'thong_bao' : initialData?.loai_bai_viet) || initialData?.category || 'thong_bao',
    status: initialData?.trang_thai || (initialData?.is_published ? 'hien_thi' : 'an') || 'hien_thi',
    lopHocPhanId: (initialData?.lop_hoc_phan_id || initialData?.sectionId || '').toString(),
    content: initialData?.noi_dung || '',
    hinhAnh: null as File | null,
    file: null as File | null
  });
  // Preview ảnh bìa: nếu đang edit thì dùng ảnh hiện tại, nếu chọn file mới thì dùng URL tạm
  const [hinhAnhPreview, setHinhAnhPreview] = useState<string | null>(
    initialData?.hinh_anh || null
  );
  const [initialSectionId, setInitialSectionId] = useState<string>('');

  useEffect(() => {
    const searchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
    const sId = searchParams.get('sectionId');
    if (sId && sId !== '0') {
      setInitialSectionId(sId);
      if (!isEdit) {
        setFormData(prev => ({ ...prev, lopHocPhanId: sId }));
      }
    }

    const fetchSections = async () => {
      try {
        const data = await getLecturerCourseSections();
        setCourseSections(data);
        if (data.length > 0 && !formData.lopHocPhanId && (!sId || sId === '0')) {
          setFormData(prev => ({ ...prev, lopHocPhanId: data[0].id.toString() }));
        } else if (sId && sId !== '0' && !isEdit) {
          setFormData(prev => ({ ...prev, lopHocPhanId: sId }));
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchSections();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const handleHinhAnhChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({ ...prev, hinhAnh: file }));
      // Tạo preview URL tạm thời
      const previewUrl = URL.createObjectURL(file);
      setHinhAnhPreview(previewUrl);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    // Khi tạo mới, ảnh bìa là bắt buộc (trừ khi là thông báo)
    if (!isEdit && formData.category !== 'thong_bao' && !formData.hinhAnh) {
      setSubmitStatus('error');
      setErrorMessage('Vui lòng chọn ảnh bìa cho bài viết.');
      setIsSubmitting(false);
      return;
    }

    try {
      const data = new FormData();
      data.append('tieu_de', formData.title);
      data.append('noi_dung', formData.content);
      data.append('trang_thai', formData.status);
      data.append('lop_hoc_phan_id', formData.lopHocPhanId.toString());
      
      if (!isEdit) {
        data.append('loai_bai_viet', formData.category);
      } else {
        data.append('_method', 'PUT'); // Laravel requirement for multipart PUT
      }

      if (formData.hinhAnh) {
        data.append('hinh_anh', formData.hinhAnh);
      }

      if (formData.file) {
        data.append('file', formData.file);
      }

      const url = isEdit && initialData?.id
        ? `${API_BASE_URL}/lecturer/posts/${initialData.id}`
        : `${API_BASE_URL}/lecturer/posts`;

      const response = await fetch(url, {
        method: 'POST', // Always POST, _method=PUT handles updates in Laravel
        headers: { 'Accept': 'application/json', ...authHeaders() },
        body: data
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || 'Lỗi lưu bài viết.');
      }

      setSubmitStatus('success');
      setTimeout(() => {
        const targetSectionId = initialSectionId || formData.lopHocPhanId || initialData?.lop_hoc_phan_id || initialData?.sectionId;
        if (targetSectionId && targetSectionId !== '0') {
          router.push(`/lecturer/sections/${targetSectionId}`);
        } else {
          router.push('/lecturer/posts');
        }
      }, 1500);
    } catch (err: any) {
      setSubmitStatus('error');
      setErrorMessage(err.message || 'Có lỗi xảy ra');
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.layoutGrid}>
      <div className={styles.mainCol}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <span className={`material-symbols-outlined ${styles.cardTitleIcon}`}>post_add</span>
            Thông tin Bài Viết
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div className={styles.formGrid} style={{ gridTemplateColumns: '1fr' }}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Tiêu đề bài viết <span style={{color:'red'}}>*</span></label>
                <input 
                  type="text" 
                  name="title"
                  className={styles.formInput} 
                  placeholder="Nhập tiêu đề bài viết" 
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Loại bài viết {!isEdit && <span style={{color:'red'}}>*</span>}</label>
                <select 
                  name="category" 
                  className={`${styles.formInput} ${styles.formSelect}`} 
                  value={formData.category} 
                  onChange={handleChange} 
                  required 
                  disabled={isEdit}
                >
                  <option value="thong_bao">Thông báo</option>
                </select>
                {isEdit && <small style={{color: '#777587', marginTop: '4px'}}>Không thể đổi loại bài viết sau khi tạo.</small>}
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Trạng thái <span style={{color:'red'}}>*</span></label>
                <select 
                  name="status" 
                  className={`${styles.formInput} ${styles.formSelect}`} 
                  value={formData.status} 
                  onChange={handleChange} 
                  required
                >
                  <option value="hien_thi">Hiển thị (Đã đăng)</option>
                  <option value="an">Ẩn (Bản nháp)</option>
                </select>
              </div>
            </div>

            <div className={styles.formGrid} style={{ gridTemplateColumns: '1fr' }}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Lớp học phần <span style={{color:'red'}}>*</span></label>
                <select 
                  name="lopHocPhanId" 
                  className={`${styles.formInput} ${styles.formSelect}`} 
                  value={formData.lopHocPhanId} 
                  onChange={handleChange} 
                  required
                  disabled={isEdit || Boolean(initialSectionId && initialSectionId !== '0')}
                >
                  <option value="">Chọn Lớp học phần</option>
                  {courseSections.map(s => (
                    <option key={s.id} value={s.id}>{s.code} - {s.name || (s.mon_hoc?.ten_mon)}</option>
                  ))}
                </select>
                {isEdit && <small style={{color: '#777587', marginTop: '4px'}}>Không thể đổi lớp học phần sau khi tạo.</small>}
                {!isEdit && Boolean(initialSectionId && initialSectionId !== '0') && <small style={{color: '#777587', marginTop: '4px'}}>Đang thêm bài viết cho lớp học phần hiện tại (không thể thay đổi).</small>}
              </div>
            </div>

            <div className={styles.formGrid} style={{ gridTemplateColumns: '1fr' }}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Nội dung</label>
                <textarea 
                  name="content"
                  className={styles.formInput} 
                  placeholder="Nhập nội dung bài viết..."
                  rows={6}
                  style={{ resize: 'vertical' }}
                  value={formData.content}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            {formData.category !== 'thong_bao' && (
              <div className={styles.formGrid} style={{ gridTemplateColumns: '1fr' }}>
                <div className={styles.formGroup}>
                  <h3 className={styles.uploadTitle}>
                    Ảnh bìa {!isEdit && <span style={{color:'red'}}>*</span>}
                  </h3>
                  <label className={styles.uploadArea} style={{ cursor: 'pointer', position: 'relative', overflow: 'hidden', minHeight: hinhAnhPreview ? '200px' : undefined }}>
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={handleHinhAnhChange} 
                      style={{ display: 'none' }}
                      required={!isEdit && formData.category !== 'thong_bao'}
                    />
                    {hinhAnhPreview ? (
                      <div style={{ position: 'relative', width: '100%' }}>
                        <img 
                          src={hinhAnhPreview} 
                          alt="Preview ảnh bìa" 
                          style={{ width: '100%', maxHeight: '240px', objectFit: 'cover', borderRadius: '0.5rem', display: 'block' }} 
                        />
                        <div style={{ 
                          position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.35)', 
                          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', 
                          borderRadius: '0.5rem', opacity: 0, transition: 'opacity 0.2s' 
                        }}
                          onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                          onMouseLeave={e => (e.currentTarget.style.opacity = '0')}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: '32px', color: '#fff' }}>photo_camera</span>
                          <span style={{ color: '#fff', fontSize: '14px', marginTop: '8px' }}>Nhấn để đổi ảnh</span>
                        </div>
                      </div>
                    ) : (
                      <div className={styles.uploadContent}>
                        <span className={`material-symbols-outlined ${styles.uploadIcon}`}>add_photo_alternate</span>
                        <span className={styles.uploadText}>Nhấp để chọn ảnh bìa</span>
                        <span className={styles.uploadHint}>JPG, PNG, WEBP (Tối đa 10MB) — Bắt buộc</span>
                      </div>
                    )}
                  </label>
                </div>
              </div>
            )}

            <div className={styles.formGrid} style={{ gridTemplateColumns: '1fr' }}>
              <div className={styles.formGroup}>
                <h3 className={styles.uploadTitle}>Tệp đính kèm</h3>
                <label className={styles.uploadArea}>
                  <input 
                    type="file" 
                    onChange={handleFileChange} 
                    style={{ display: 'none' }}
                  />
                  <div className={styles.uploadContent}>
                    <span className={`material-symbols-outlined ${styles.uploadIcon}`}>cloud_upload</span>
                    <span className={styles.uploadText}>
                      {formData.file ? formData.file.name : 'Nhấp để chọn tệp'}
                    </span>
                    <span className={styles.uploadHint}>Hỗ trợ PDF, DOCX, XLSX, hình ảnh (Tối đa 10MB)</span>
                  </div>
                </label>
              </div>
            </div>

            {submitStatus === 'error' && (
              <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#fef2f2', color: '#dc2626', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                {errorMessage}
              </div>
            )}
            {submitStatus === 'success' && (
              <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f0fdf4', color: '#16a34a', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                {isEdit ? 'Cập nhật thành công! Đang chuyển hướng...' : 'Thêm bài viết thành công! Đang chuyển hướng...'}
              </div>
            )}

            <div className={styles.actionsRow} style={{ marginTop: '2rem' }}>
              <button 
                type="button" 
                className={styles.btnSecondary}
                onClick={() => {
                  const targetSectionId = initialSectionId || formData.lopHocPhanId || initialData?.lop_hoc_phan_id || initialData?.sectionId;
                  if (targetSectionId && targetSectionId !== '0') {
                    router.push(`/lecturer/sections/${targetSectionId}`);
                  } else {
                    router.push('/lecturer/posts');
                  }
                }}
                disabled={isSubmitting}
              >
                Hủy bỏ
              </button>
              <button 
                type="submit" 
                className={styles.btnPrimary}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="material-symbols-outlined" style={{ animation: 'spin 1s linear infinite' }}>autorenew</span>
                ) : (
                  <span className="material-symbols-outlined">{isEdit ? 'save' : 'send'}</span>
                )}
                {isEdit ? 'Cập nhật' : 'Đăng'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Sidebar Suggestion */}
      <div className={styles.sideCol}>
        <div className={styles.suggestionCard}>
          <div className={styles.suggestionGlow}></div>
          <div className={styles.suggestionContent}>
            <div className={styles.suggestionIcon}>
              <span className="material-symbols-outlined">lightbulb</span>
            </div>
            <h3 className={styles.suggestionTitle}>Gợi ý đặt tiêu đề</h3>
            <p className={styles.suggestionDesc}>
              Tiêu đề bài viết nên ngắn gọn, dễ hiểu và bao gồm từ khóa chính.
              <br /><br />
              Ví dụ: Thông báo nghỉ học ngày 20/11, Tài liệu ôn tập Chương 1.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.progressHeader}>
            <span className={styles.progressLabel}>Mức độ hoàn thiện</span>
            <span className={styles.progressValue}>
              {formData.title ? '100%' : '50%'}
            </span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: formData.title ? '100%' : '50%' }}></div>
          </div>
          <div className={styles.progressList}>
            <div className={styles.progressItem}>
              <span className={`material-symbols-outlined ${formData.title ? styles.progressIconSuccess : styles.progressIconPending}`}>
                check_circle
              </span>
              <span>Thông tin cơ bản</span>
            </div>
            <div className={styles.progressItem}>
              <span className={`material-symbols-outlined ${formData.lopHocPhanId ? styles.progressIconSuccess : styles.progressIconPending}`}>
                check_circle
              </span>
              <span>Lớp học phần</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
