'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './AdminUpdateCourseSections.module.css';
import { updateCourseSection, getCourseSectionById, getSubjects, getLecturers } from '@/app/actions/course-section';
import { updateLecturerCourseSection, getLecturerCourseSectionById, getCurrentUser } from '@/app/actions/lecturer-course-section';

interface UpdateCourseSectionFormProps {
  sectionId?: string;
  isLecturer?: boolean;
}

export default function UpdateCourseSectionForm({ sectionId, isLecturer = false }: UpdateCourseSectionFormProps) {
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
    const fetchData = async () => {
      try {
        const subs = await getSubjects();
        setSubjects(subs);
        const lecs = await getLecturers();
        setLecturers(lecs);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();

    if (sectionId) {
      const fetchSection = isLecturer ? getLecturerCourseSectionById : getCourseSectionById;
      fetchSection(sectionId).then(data => {
        setFormData({
          ma_lop_hoc_phan: data.ma_lop_hoc_phan || '',
          ten_lop: data.ten_lop || '',
          mon_hoc_id: data.mon_hoc_id ? data.mon_hoc_id.toString() : '',
          giang_vien_id: data.giang_vien_id ? data.giang_vien_id.toString() : '',
          hoc_ky: data.hoc_ky || 'HK1',
          nam_hoc: data.nam_hoc || '2024-2025',
          si_so_toi_da: data.si_so_toi_da || 40,
          trang_thai: data.trang_thai || 'dang_mo'
        });
      }).catch(console.error);
    }
  }, [sectionId, isLecturer]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: name === 'si_so_toi_da' ? parseInt(value) || 0 : value 
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!sectionId) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      if (isLecturer) {
        await updateLecturerCourseSection(sectionId, formData);
      } else {
        await updateCourseSection(sectionId, formData);
      }
      setSubmitStatus('success');
      setTimeout(() => {
        router.push(isLecturer ? '/lecturer/sections' : '/admin/course-sections');
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
            <span className={`material-symbols-outlined ${styles.cardTitleIcon}`}>edit_document</span>
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
                <select name="giang_vien_id" className={`${styles.formInput} ${styles.formSelect}`} value={formData.giang_vien_id} onChange={handleChange} required disabled={isLecturer}>
                  <option value="">Chọn Giảng viên</option>
                  {lecturers.map(l => (
                    <option key={l.id} value={l.giang_vien?.id}>{l.ho_ten} - {l.giang_vien?.ma_giang_vien || 'N/A'}</option>
                  ))}
                </select>
                {isLecturer && <small style={{color: '#777587', marginTop: '4px', display: 'block'}}>Chỉ có thể gán cho chính bạn.</small>}
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Học kỳ</label>
                <select name="hoc_ky" className={`${styles.formInput} ${styles.formSelect}`} value={formData.hoc_ky} onChange={handleChange}>
                  <option value="HK1">Học kỳ 1</option>
                  <option value="HK2">Học kỳ 2</option>
                  <option value="HK3">Học kỳ 3</option>
                  <option value="HK4">Học kỳ 4</option>
                  <option value="HK5">Học kỳ 5</option>
                  <option value="HK6">Học kỳ 6</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Năm học <span style={{color:'red'}}>*</span></label>
                <input 
                  type="text" 
                  name="nam_hoc"
                  className={styles.formInput} 
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
          <button type="button" className={styles.btnSecondary} onClick={() => router.push(isLecturer ? '/lecturer/sections' : '/admin/course-sections')}>
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
                Lưu Thay Đổi
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
              <span className="material-symbols-outlined">warning</span>
            </div>
            <h3 className={styles.suggestionTitle}>Lưu ý cập nhật</h3>
            <p className={styles.suggestionDesc}>
              Thay đổi Tình trạng sang "Đã kết thúc" sẽ tự động chặn sinh viên mới đăng ký. Đổi "Môn học" có thể ảnh hưởng tới các dữ liệu đã tạo bên trong lớp.
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
            <span className={styles.progressLabel}>Trạng thái hệ thống</span>
            <span className={styles.progressValue}>Active</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: '100%', backgroundColor: '#059669' }}></div>
          </div>
          <ul className={styles.progressList}>
            <li className={styles.progressItem}>
              <span className={`material-symbols-outlined ${styles.progressIconSuccess}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span style={{ color: '#777587' }}>Dữ liệu đồng bộ</span>
            </li>
            <li className={styles.progressItem}>
              <span className={`material-symbols-outlined ${styles.progressIconSuccess}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span style={{ color: '#777587' }}>Liên kết bảng Môn học ổn định</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
