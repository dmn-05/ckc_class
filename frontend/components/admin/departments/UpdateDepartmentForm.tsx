'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './AdminUpdateDepartments.module.css';
import { getDepartmentById, updateDepartment } from '@/app/actions/department';
import { getFaculties, getLecturers } from '@/app/actions/faculty';
import { FacultyData } from '@/components/admin/faculties/FacultyCard';

interface UpdateDepartmentFormProps {
  departmentId?: string;
}

export default function UpdateDepartmentForm({ departmentId }: UpdateDepartmentFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(true);

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
      if (!departmentId) return;
      try {
        const [dept, facs, lecs] = await Promise.all([
          getDepartmentById(departmentId),
          getFaculties(),
          getLecturers()
        ]);
        
        setFormData({
          name: dept.name,
          code: dept.code,
          facultyId: dept.facultyId,
          head: dept.head || '',
          status: dept.status
        });
        
        setFaculties(facs);
        setLecturers(lecs);
      } catch (err) {
        console.error("Failed to load department data", err);
        setErrorMsg('Không thể tải dữ liệu bộ môn.');
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [departmentId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.facultyId) {
      setErrorMsg('Vui lòng chọn Khoa quản lý');
      return;
    }

    if (!departmentId) return;

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      await updateDepartment(departmentId, formData);
      setSubmitStatus('success');
      
      setTimeout(() => {
        router.push('/admin/departments');
        router.refresh();
      }, 1500);
    } catch (error: any) {
      setErrorMsg(error.message || 'Có lỗi xảy ra khi cập nhật Bộ môn.');
      setSubmitStatus('idle');
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Đang tải dữ liệu...</div>;
  }

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
                Cập Nhật Thành Công
              </>
            ) : (
              <>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>save</span>
                Cập Nhật Bộ Môn
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
              <span className={`material-symbols-outlined ${styles.uploadIcon}`}>edit</span>
              <p className={styles.uploadText}>Thay đổi ảnh minh họa</p>
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
            <h3 className={styles.suggestionTitle}>Lưu ý cập nhật</h3>
            <p className={styles.suggestionDesc}>
              Khi thay đổi Trưởng Bộ Môn, hệ thống sẽ tự động cập nhật phân quyền cho giảng viên tương ứng. Mã Bộ Môn đã lưu không thể thay đổi để tránh lỗi dữ liệu môn học liên quan.
            </p>
            <div className={styles.suggestionLink}>
              <span style={{ fontSize: '0.75rem' }}>Xem quy định phân quyền</span>
              <span className={`material-symbols-outlined ${styles.linkIcon}`}>arrow_forward</span>
            </div>
          </div>
        </div>

        {/* Progress/Validation */}
        <div className={styles.card}>
          <div className={styles.progressHeader}>
            <span className={styles.progressLabel}>Mức độ hoàn thiện</span>
            <span className={styles.progressValue}>100%</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: '100%' }}></div>
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
              <span className={`material-symbols-outlined ${styles.progressIconSuccess}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span style={{ color: '#777587' }}>Phân công Trưởng bộ môn</span>
            </li>
            <li className={styles.progressItem}>
              <span className={`material-symbols-outlined ${styles.progressIconSuccess}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span style={{ color: '#777587' }}>Ảnh minh họa</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
