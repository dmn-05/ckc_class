'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './AdminCreateCourseSections.module.css';
import { createCourseSection, getSubjects, getLecturers } from '@/app/actions/course-section';

export default function CreateCourseSectionForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const [subjects, setSubjects] = useState<any[]>([]);
  const [lecturers, setLecturers] = useState<any[]>([]);

  const [formData, setFormData] = useState({
    ma_lop_hoc_phan: '',
    ten_lop: '',
    mon_hoc_id: '',
    giang_vien_id: '',
    hoc_ky: 'HK1',
    nam_hoc: '2024-2025',
    si_so_toi_da: 40,
    trang_thai: 'dang_mo'
  });

  useEffect(() => {
    Promise.all([getSubjects(), getLecturers()]).then(([subs, lecs]) => {
      setSubjects(subs);
      setLecturers(lecs);
    }).catch(console.error);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: name === 'si_so_toi_da' ? parseInt(value) || 0 : value 
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      await createCourseSection(formData);
      setSubmitStatus('success');
      setTimeout(() => {
        router.push('/admin/course-sections');
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
            Thông tin Lớp Học Phần
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Mã Lớp học phần <span style={{color:'red'}}>*</span></label>
                <input 
                  type="text" 
                  name="ma_lop_hoc_phan"
                  className={styles.formInput} 
                  placeholder="Ví dụ: CDTH24A_LTrWeb" 
                  value={formData.ma_lop_hoc_phan}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Tên Lớp (Tuỳ chọn)</label>
                <input 
                  type="text" 
                  name="ten_lop"
                  className={styles.formInput} 
                  placeholder="Ví dụ: Lập trình Web - Nhóm 1" 
                  value={formData.ten_lop}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Môn học <span style={{color:'red'}}>*</span></label>
                <select name="mon_hoc_id" className={`${styles.formInput} ${styles.formSelect}`} value={formData.mon_hoc_id} onChange={handleChange} required>
                  <option value="">Chọn Môn học</option>
                  {subjects.map(s => (
                    <option key={s.id} value={s.id}>{s.ten_mon} - {s.ma_mon}</option>
                  ))}
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Giảng viên <span style={{color:'red'}}>*</span></label>
                <select name="giang_vien_id" className={`${styles.formInput} ${styles.formSelect}`} value={formData.giang_vien_id} onChange={handleChange} required>
                  <option value="">Chọn Giảng viên</option>
                  {lecturers.map(l => (
                    <option key={l.id} value={l.id}>{l.ho_ten} ({l.giang_vien?.ma_giang_vien || 'N/A'})</option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Học kỳ</label>
                <select name="hoc_ky" className={`${styles.formInput} ${styles.formSelect}`} value={formData.hoc_ky} onChange={handleChange}>
                  <option value="HK1">Học kỳ 1</option>
                  <option value="HK2">Học kỳ 2</option>
                  <option value="HK3">Học kỳ 3</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Năm học <span style={{color:'red'}}>*</span></label>
                <input 
                  type="text" 
                  name="nam_hoc"
                  className={styles.formInput} 
                  placeholder="Ví dụ: 2024-2025" 
                  value={formData.nam_hoc}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Sĩ số tối đa</label>
                <input 
                  type="number" 
                  name="si_so_toi_da"
                  className={styles.formInput} 
                  value={formData.si_so_toi_da}
                  onChange={handleChange}
                  min="1"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Trạng thái</label>
                <select name="trang_thai" className={`${styles.formInput} ${styles.formSelect}`} value={formData.trang_thai} onChange={handleChange}>
                  <option value="dang_mo">Đang mở</option>
                  <option value="da_khoa">Đã khóa</option>
                  <option value="da_ket_thuc">Đã kết thúc</option>
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
          <button type="button" className={styles.btnSecondary} onClick={() => router.push('/admin/course-sections')}>
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
              Mã Lớp Học Phần nên bao gồm <strong>Mã Môn học</strong> và <strong>Nhóm/Ca</strong> để dễ dàng phân biệt.
              <br/><br/>
              Ví dụ: LTrWeb_N1 (Lập trình Web - Nhóm 1).
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
              <span style={{ color: '#191c1e' }}>Cập nhật Học phần quản lý</span>
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
