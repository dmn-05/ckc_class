'use client';

import React, { useState, useEffect } from 'react';
import styles from './AdminCreateSubjects.module.css';
import { getFaculties } from '@/app/actions/faculty';
import { getDepartments } from '@/app/actions/department';
import { createSubject } from '@/app/actions/subject';

export default function CreateSubjectForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');
  
  const [faculties, setFaculties] = useState<any[]>([]);
  const [departments, setDepartments] = useState<any[]>([]);
  
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    credits: '',
    facultyId: '',
    departmentId: '',
    status: 'active'
  });

  useEffect(() => {
    async function loadData() {
      try {
        const [facultiesData, departmentsData] = await Promise.all([
          getFaculties(),
          getDepartments()
        ]);
        setFaculties(facultiesData);
        setDepartments(departmentsData);
      } catch (error) {
        console.error('Error loading form options', error);
      }
    }
    loadData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await createSubject({
        code: formData.code,
        name: formData.name,
        credits: parseInt(formData.credits) || 0,
        facultyId: formData.facultyId,
        departmentId: formData.departmentId || null,
        status: formData.status
      });
      
      setSubmitStatus('success');
      setTimeout(() => {
        window.location.href = '/admin/subjects';
      }, 1500);
    } catch (error: any) {
      alert(error.message || 'Lỗi khi thêm môn học');
      setSubmitStatus('idle');
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    window.location.href = '/admin/subjects';
  };

  return (
    <div className={styles.layoutGrid}>
      {/* Main Form Column */}
      <div className={styles.mainCol}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <span className={`material-symbols-outlined ${styles.cardTitleIcon}`}>info</span>
            Thông tin cơ bản của Môn Học
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Tên Môn Học</label>
                <input 
                  type="text" 
                  className={styles.formInput} 
                  placeholder="Ví dụ: Cơ sở dữ liệu nâng cao" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Mã Môn Học</label>
                <input 
                  type="text" 
                  className={styles.formInput} 
                  placeholder="e.g. CS201" 
                  required
                  value={formData.code}
                  onChange={(e) => setFormData({...formData, code: e.target.value})}
                />
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Khoa Quản Lý</label>
                <select 
                  className={`${styles.formInput} ${styles.formSelect}`}
                  required
                  value={formData.facultyId}
                  onChange={(e) => setFormData({...formData, facultyId: e.target.value})}
                >
                  <option value="">Chọn một Khoa</option>
                  {faculties.map(f => (
                    <option key={f.id} value={f.id}>{f.name}</option>
                  ))}
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Thuộc Bộ Môn (Tùy chọn)</label>
                <select 
                  className={`${styles.formInput} ${styles.formSelect}`}
                  value={formData.departmentId}
                  onChange={(e) => setFormData({...formData, departmentId: e.target.value})}
                >
                  <option value="">Không thuộc bộ môn nào</option>
                  {departments.filter(d => !formData.facultyId || d.facultyId?.toString() === formData.facultyId).map(d => (
                    <option key={d.id} value={d.id}>{d.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Trạng thái môn học</label>
                <select 
                  className={`${styles.formInput} ${styles.formSelect}`}
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                >
                  <option value="active">Đang giảng dạy</option>
                  <option value="inactive">Tạm ngưng</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Số Tín Chỉ (Credits)</label>
                <div className={styles.inputWithIcon}>
                  <input 
                    type="number" 
                    className={styles.formInput} 
                    placeholder="Ví dụ: 3" 
                    required
                    min="1"
                    value={formData.credits}
                    onChange={(e) => setFormData({...formData, credits: e.target.value})}
                  />
                  <span className={`material-symbols-outlined ${styles.inputIcon}`}>stars</span>
                </div>
              </div>
            </div>
            
            <button type="submit" style={{ display: 'none' }} id="hiddenSubmitBtn"></button>
          </form>
        </div>

        {/* Submission Actions */}
        <div className={styles.actionsRow}>
          <button type="button" className={styles.btnSecondary} onClick={handleCancel}>
            Hủy bỏ
          </button>
          <button 
            type="button" 
            className={styles.btnPrimary}
            onClick={() => document.getElementById('hiddenSubmitBtn')?.click()}
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
                Thêm Môn Học
              </>
            )}
          </button>
        </div>
      </div>

      {/* Sidebar / Assets Column */}
      <div className={styles.sideCol}>
        {/* Suggestion Card */}
        <div className={styles.suggestionCard}>
          <div className={styles.suggestionGlow}></div>
          <div className={styles.suggestionContent}>
            <div className={styles.suggestionIcon}>
              <span className="material-symbols-outlined">lightbulb</span>
            </div>
            <h3 className={styles.suggestionTitle}>Gợi ý</h3>
            <p className={styles.suggestionDesc}>
              Mã Môn Học nên ngắn gọn, bao gồm ký hiệu chuyên ngành và mã số cấp độ (VD: CS101 cho cơ sở, CS301 cho nâng cao). Số tín chỉ phản ánh khối lượng kiến thức.
            </p>
            <div className={styles.suggestionLink}>
              <span style={{ fontSize: '0.75rem' }}>Xem quy định mã môn</span>
              <span className={`material-symbols-outlined ${styles.linkIcon}`}>arrow_forward</span>
            </div>
          </div>
        </div>

        {/* Progress/Validation */}
        <div className={styles.card}>
          <div className={styles.progressHeader}>
            <span className={styles.progressLabel}>Mức độ hoàn thiện</span>
            <span className={styles.progressValue}>50%</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: '50%' }}></div>
          </div>
          <ul className={styles.progressList}>
            <li className={styles.progressItem}>
              <span className={`material-symbols-outlined ${styles.progressIconSuccess}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span style={{ color: '#777587' }}>Thông tin cơ bản</span>
            </li>
            <li className={styles.progressItem}>
              <span className={`material-symbols-outlined ${styles.progressIconSuccess}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span style={{ color: '#777587' }}>Phân bổ tín chỉ</span>
            </li>
            <li className={styles.progressItem}>
              <span className={`material-symbols-outlined ${styles.progressIconPending}`}>radio_button_unchecked</span>
              <span style={{ color: '#191c1e' }}>Cấu hình Môn tiên quyết</span>
            </li>
            <li className={styles.progressItem}>
              <span className={`material-symbols-outlined ${styles.progressIconPending}`}>radio_button_unchecked</span>
              <span style={{ color: '#191c1e' }}>Đề cương chi tiết</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
