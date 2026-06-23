'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './AdminCreateDepartments.module.css';
import { createDepartment } from '@/app/actions/department';
import { getFaculties, getLecturers } from '@/app/actions/faculty';
import { FacultyData } from '@/components/admin/faculties/FacultyCard';

export default function CreateDepartmentForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  
  const [faculties, setFaculties] = useState<FacultyData[]>([]);
  const [lecturers, setLecturers] = useState<{id: number, ho_ten: string}[]>([]);

  const [formData, setFormData] = useState({
    name: '',
    code: '',
    facultyId: '',
    head: '',
    status: 'active'
  });

  useEffect(() => {
    async function loadData() {
      try {
        const [facs, lecs] = await Promise.all([
          getFaculties(),
          getLecturers()
        ]);
        setFaculties(facs);
        setLecturers(lecs);
      } catch (err) {
        console.error("Failed to load initial data", err);
      }
    }
    loadData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.facultyId) {
      setErrorMsg('Vui lòng chọn Khoa quản lý');
      return;
    }
    
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      await createDepartment(formData);
      setSubmitStatus('success');
      
      setTimeout(() => {
        router.push('/admin/departments');
        router.refresh();
      }, 1500);
    } catch (error: any) {
      setErrorMsg(error.message || 'Có lỗi xảy ra khi thêm Bộ môn.');
      setSubmitStatus('idle');
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.layoutGrid}>
      {/* Main Form Column */}
      <div className={styles.mainCol}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <span className={`material-symbols-outlined ${styles.cardTitleIcon}`}>info</span>
            Thông tin cơ bản của Bộ Môn
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Tên Bộ Môn</label>
                <input 
                  type="text" 
                  className={styles.formInput} 
                  placeholder="Ví dụ: Khoa học máy tính" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Mã Bộ Môn</label>
                <input 
                  type="text" 
                  className={styles.formInput} 
                  placeholder="e.g. CS-01" 
                  value={formData.code}
                  onChange={e => setFormData({...formData, code: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Thuộc Khoa</label>
                <select 
                  className={`${styles.formInput} ${styles.formSelect}`}
                  value={formData.facultyId}
                  onChange={e => setFormData({...formData, facultyId: e.target.value})}
                  required
                >
                  <option value="">Chọn một Khoa</option>
                  {faculties.map(f => (
                    <option key={f.id} value={f.id}>{f.name}</option>
                  ))}
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Trưởng Bộ Môn</label>
                <select 
                  className={`${styles.formInput} ${styles.formSelect}`}
                  value={formData.head}
                  onChange={e => setFormData({...formData, head: e.target.value})}
                >
                  <option value="">Chọn một Giảng viên</option>
                  {lecturers.map(l => (
                    <option key={l.id} value={l.ho_ten}>{l.ho_ten}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Trạng thái hoạt động</label>
                <select 
                  className={`${styles.formInput} ${styles.formSelect}`}
                  value={formData.status}
                  onChange={e => setFormData({...formData, status: e.target.value})}
                >
                  <option value="active">Đang hoạt động</option>
                  <option value="inactive">Tạm ngưng</option>
                  <option value="pending">Chờ phê duyệt</option>
                </select>
              </div>
            </div>
          </form>
        </div>

        {/* Submission Actions */}
        <div className={styles.actionsRow}>
          {errorMsg && <div style={{ color: '#ef4444', marginRight: 'auto', fontWeight: '500' }}>{errorMsg}</div>}
          <button 
            type="button" 
            className={styles.btnSecondary}
            onClick={() => router.push('/admin/departments')}
          >
            Hủy bỏ
          </button>
          <button 
            type="submit" 
            className={styles.btnPrimary}
            onClick={handleSubmit}
            disabled={isSubmitting}
            style={{ backgroundColor: submitStatus === 'success' ? '#059669' : '' }}
          >
            {isSubmitting && submitStatus === 'idle' ? (
              <>
                <span className="material-symbols-outlined" style={{ animation: 'spin 1s linear infinite' }}>sync</span>
                Đang xử lý...
              </>
            ) : submitStatus === 'success' ? (
              <>
                <span className="material-symbols-outlined">check_circle</span>
                Thêm Thành Công
              </>
            ) : (
              <>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
                Thêm Bộ Môn
              </>
            )}
          </button>
        </div>
      </div>

      {/* Sidebar / Assets Column */}
      <div className={styles.sideCol}>
        {/* Image Upload Area */}
        <div className={styles.card}>
          <h3 className={styles.uploadTitle}>Hình ảnh minh họa</h3>
          <div className={styles.uploadArea}>
            <img 
              alt="Department Preview" 
              className={styles.uploadImgPreview} 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"
            />
            <div className={styles.uploadContent}>
              <span className={`material-symbols-outlined ${styles.uploadIcon}`}>upload_file</span>
              <p className={styles.uploadText}>Nhấn để tải ảnh lên</p>
              <p className={styles.uploadHint}>Recommended: 1200x800px (JPG, PNG)</p>
            </div>
          </div>
        </div>

        {/* Suggestion Card */}
        <div className={styles.suggestionCard}>
          <div className={styles.suggestionGlow}></div>
          <div className={styles.suggestionContent}>
            <div className={styles.suggestionIcon}>
              <span className="material-symbols-outlined">lightbulb</span>
            </div>
            <h3 className={styles.suggestionTitle}>Gợi ý</h3>
            <p className={styles.suggestionDesc}>
              Sử dụng quy chuẩn đặt tên thống nhất như "Bộ môn [Tên bộ môn]" để duy trì tính nhất quán. Một Bộ môn bắt buộc phải thuộc quản lý của một Khoa.
            </p>
            <div className={styles.suggestionLink}>
              <span style={{ fontSize: '0.75rem' }}>Xem hướng dẫn đặt tên</span>
              <span className={`material-symbols-outlined ${styles.linkIcon}`}>arrow_forward</span>
            </div>
          </div>
        </div>

        {/* Progress/Validation */}
        <div className={styles.card}>
          <div className={styles.progressHeader}>
            <span className={styles.progressLabel}>Mức độ hoàn thiện</span>
            <span className={styles.progressValue}>65%</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: '65%' }}></div>
          </div>
          <ul className={styles.progressList}>
            <li className={styles.progressItem}>
              <span className={`material-symbols-outlined ${styles.progressIconSuccess}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span style={{ color: '#777587' }}>Thông tin cơ bản</span>
            </li>
            <li className={styles.progressItem}>
              <span className={`material-symbols-outlined ${styles.progressIconSuccess}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span style={{ color: '#777587' }}>Gán vào Khoa quản lý</span>
            </li>
            <li className={styles.progressItem}>
              <span className={`material-symbols-outlined ${styles.progressIconPending}`}>radio_button_unchecked</span>
              <span style={{ color: '#191c1e' }}>Phân công Trưởng bộ môn</span>
            </li>
            <li className={styles.progressItem}>
              <span className={`material-symbols-outlined ${styles.progressIconPending}`}>radio_button_unchecked</span>
              <span style={{ color: '#191c1e' }}>Ảnh minh họa</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
