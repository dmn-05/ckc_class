'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './AdminCreateClasses.module.css';
import { createClass, getFaculties } from '@/app/actions/class';

export default function CreateClassForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const [faculties, setFaculties] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    ma_lop: '',
    ten_lop: '',
    khoa_id: '',
    nam_nhap_hoc: new Date().getFullYear(),
    trang_thai: 'dang_hoc'
  });

  useEffect(() => {
    getFaculties().then(data => {
      setFaculties(data);
      if (data.length > 0) {
        setFormData(prev => ({ ...prev, khoa_id: data[0].id.toString() }));
      }
    }).catch(console.error);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'nam_nhap_hoc' ? parseInt(value) || new Date().getFullYear() : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      await createClass(formData);
      setSubmitStatus('success');
      setTimeout(() => {
        router.push('/admin/classes');
      }, 1500);
    } catch (err: any) {
      setSubmitStatus('error');
      setErrorMessage(err.message || 'Có lỗi xảy ra');
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
            Thông tin Lớp
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Mã Lớp</label>
                <input 
                  type="text" 
                  name="ma_lop"
                  className={styles.formInput} 
                  placeholder="Ví dụ: CDTH24A" 
                  value={formData.ma_lop}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Tên Lớp</label>
                <input 
                  type="text" 
                  name="ten_lop"
                  className={styles.formInput} 
                  placeholder="Ví dụ: Cao đẳng Tin học 24A" 
                  value={formData.ten_lop}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Khoa</label>
                <select name="khoa_id" className={`${styles.formInput} ${styles.formSelect}`} value={formData.khoa_id} onChange={handleChange} required>
                  <option value="">Chọn Khoa</option>
                  {faculties.map(f => (
                    <option key={f.id} value={f.id}>{f.ten_khoa}</option>
                  ))}
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Khóa (Năm nhập học)</label>
                <input 
                  type="number" 
                  name="nam_nhap_hoc"
                  className={styles.formInput} 
                  placeholder="Ví dụ: 2024" 
                  value={formData.nam_nhap_hoc}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Trạng thái</label>
                <select name="trang_thai" className={`${styles.formInput} ${styles.formSelect}`} value={formData.trang_thai} onChange={handleChange}>
                  <option value="dang_hoc">Đang học</option>
                  <option value="da_tot_nghiep">Đã tốt nghiệp</option>
                </select>
              </div>
            </div>
          </form>
        </div>

        {/* Submission Actions */}
        {submitStatus === 'error' && (
          <div style={{ color: '#ba1a1a', marginBottom: '1rem', padding: '0.75rem', backgroundColor: 'rgba(186,26,26,0.1)', borderRadius: '0.5rem' }}>
            {errorMessage}
          </div>
        )}
        <div className={styles.actionsRow}>
          <button type="button" className={styles.btnSecondary} onClick={() => router.push('/admin/classes')}>
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
                Thêm Lớp
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
            <h3 className={styles.suggestionTitle}>Gợi ý đặt mã lớp</h3>
            <p className={styles.suggestionDesc}>
              Mã Lớp nên ngắn gọn, dễ nhớ và thể hiện được ngành học cũng như năm nhập học. 
              <br/><br/>
              Ví dụ: Lớp Cao đẳng Tin học nhập học năm 2024 có mã là "CDTH24A".
            </p>
            <div className={styles.suggestionLink}>
              <span style={{ fontSize: '0.75rem' }}>Xem quy định</span>
              <span className={`material-symbols-outlined ${styles.linkIcon}`}>arrow_forward</span>
            </div>
          </div>
        </div>

        {/* Progress/Validation */}
        <div className={styles.card}>
          <div className={styles.progressHeader}>
            <span className={styles.progressLabel}>Mức độ hoàn thiện</span>
            <span className={styles.progressValue}>45%</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: '45%' }}></div>
          </div>
          <ul className={styles.progressList}>
            <li className={styles.progressItem}>
              <span className={`material-symbols-outlined ${styles.progressIconSuccess}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span style={{ color: '#777587' }}>Thông tin cơ bản</span>
            </li>
            <li className={styles.progressItem}>
              <span className={`material-symbols-outlined ${styles.progressIconPending}`}>radio_button_unchecked</span>
              <span style={{ color: '#191c1e' }}>Cập nhật Khoa quản lý</span>
            </li>
            <li className={styles.progressItem}>
              <span className={`material-symbols-outlined ${styles.progressIconPending}`}>radio_button_unchecked</span>
              <span style={{ color: '#191c1e' }}>Thiết lập Trạng thái</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
