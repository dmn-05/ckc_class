'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './AdminUpdateCourseSections.module.css';
import { updateCourseSection, getCourseSectionById, getSubjects, getLecturers, getClasses } from '@/app/actions/course-section';
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
  const [classes, setClasses] = useState<any[]>([]);
  const [selectedLecturerIds, setSelectedLecturerIds] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    ma_lop_hoc_phan: '',
    ten_lop: '',
    mon_hoc_id: '',
    base_class_id: '',
    giang_vien_id: '',
    hoc_ky: '1',
    nam_hoc: '2024-2025',
    si_so_toi_da: 40,
    trang_thai: 'dang_mo'
  });

  const getLecId = (l: any) => (l?.giang_vien?.id ?? l?.id)?.toString() || '';

  const handleToggleLecturer = (gvId: string) => {
    if (gvId === formData.giang_vien_id) return;
    setSelectedLecturerIds(prev => {
      const exists = prev.includes(gvId);
      return exists ? prev.filter(id => id !== gvId) : [...prev, gvId];
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const subs = await getSubjects();
        setSubjects(subs);
        const lecs = await getLecturers();
        setLecturers(lecs);
        const cls = await getClasses();
        setClasses(cls);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();

    if (sectionId) {
      const fetchSection = isLecturer ? getLecturerCourseSectionById : getCourseSectionById;
      fetchSection(sectionId).then(data => {
        const mainId = data.giang_vien_id ? data.giang_vien_id.toString() : (Array.isArray(data.giang_viens) && data.giang_viens.length > 0 ? data.giang_viens[0].id.toString() : '');
        const subIds = Array.isArray(data.giang_viens)
          ? data.giang_viens
              .filter((gv: any) => gv.id.toString() !== mainId)
              .map((gv: any) => gv.id.toString())
          : [];
        setSelectedLecturerIds(subIds);

        setFormData({
          ma_lop_hoc_phan: data.ma_lop_hoc_phan || '',
          ten_lop: data.ten_lop || '',
          mon_hoc_id: data.mon_hoc_id ? data.mon_hoc_id.toString() : '',
          base_class_id: '',
          giang_vien_id: mainId,
          hoc_ky: data.hoc_ky ? data.hoc_ky.toString().replace('HK', '') : '1',
          nam_hoc: data.nam_hoc || '2024-2025',
          si_so_toi_da: data.si_so_toi_da || 40,
          trang_thai: data.trang_thai || 'dang_mo'
        });
      }).catch(console.error);
    }
  }, [sectionId, isLecturer]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'giang_vien_id' && value) {
      setSelectedLecturerIds(prev => prev.filter(id => id !== value));
    }
    
    setFormData(prev => {
      const nextData = { 
        ...prev, 
        [name]: name === 'si_so_toi_da' ? parseInt(value) || 0 : value 
      };

      if (['mon_hoc_id', 'base_class_id', 'nam_hoc'].includes(name)) {
        const subject = subjects.find(s => s.id.toString() === nextData.mon_hoc_id.toString());
        const subjectName = subject ? subject.ten_mon : '';
        let generatedName = '';
        
        if (nextData.base_class_id) {
          const cls = classes.find(c => c.id.toString() === nextData.base_class_id.toString());
          if (cls) {
            generatedName = `${cls.ma_lop} - ${subjectName}`;
          }
        } else {
          const startYear = nextData.nam_hoc.split('-')[0] || '2024';
          generatedName = `HKP - ${subjectName} ${startYear}`;
        }
        nextData.ten_lop = generatedName;
      }

      return nextData;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    if (!formData.giang_vien_id) {
      setErrorMessage('Vui lòng chọn Giảng viên chính phụ trách (bắt buộc).');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const mainId = formData.giang_vien_id;
      const subIds = selectedLecturerIds.filter(id => id !== mainId);
      const payload = {
        ...formData,
        giang_vien_id: mainId,
        giang_vien_phu_ids: subIds,
        giang_vien_ids: [mainId, ...subIds]
      };
      if (isLecturer) {
        await updateLecturerCourseSection(sectionId!, payload);
      } else {
        await updateCourseSection(sectionId!, payload);
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
                  readOnly
                  style={{ backgroundColor: '#f3f4f6', cursor: 'not-allowed' }}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Tên Lớp</label>
                <input 
                  type="text" 
                  name="ten_lop"
                  className={styles.formInput} 
                  value={formData.ten_lop}
                  onChange={handleChange}
                  readOnly
                  style={{ backgroundColor: '#f3f4f6', cursor: 'not-allowed' }}
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
                <label className={styles.formLabel}>Lớp (Tự động thêm toàn bộ SV) </label>
                <select 
                  name="base_class_id" 
                  className={`${styles.formInput} ${styles.formSelect}`} 
                  value={formData.base_class_id} 
                  onChange={handleChange}
                  disabled={formData.trang_thai === 'da_khoa' || formData.trang_thai === 'da_ket_thuc'}
                >
                  <option value="">Không chọn - Lớp phụ</option>
                  {classes.map(c => (
                    <option key={c.id} value={c.id}>{c.ma_lop} - {c.ten_lop}</option>
                  ))}
                </select>
                {(formData.trang_thai === 'da_khoa' || formData.trang_thai === 'da_ket_thuc') && (
                  <small style={{ color: '#dc3545', display: 'block', marginTop: '4px' }}>
                    Không thể tự động thêm SV khi lớp học phần đã khóa hoặc kết thúc
                  </small>
                )}
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  Giảng viên phụ trách <span style={{color:'red'}}>*</span>
                </label>
                {isLecturer ? (
                  <input
                    type="text"
                    className={styles.formInput}
                    value={
                      (() => {
                        const lec = lecturers.find(l => getLecId(l) === formData.giang_vien_id?.toString());
                        return lec ? `${lec.ho_ten} - ${lec.giang_vien?.ma_giang_vien || 'N/A'}` : 'Giảng viên hiện tại';
                      })()
                    }
                    readOnly
                    style={{ backgroundColor: '#f3f4f6', cursor: 'not-allowed' }}
                  />
                ) : (
                  <select
                    name="giang_vien_id"
                    className={`${styles.formInput} ${styles.formSelect}`}
                    value={formData.giang_vien_id}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Chọn Giảng viên phụ trách --</option>
                    {lecturers.map(l => {
                      const gvId = getLecId(l);
                      if (!gvId) return null;
                      return (
                        <option key={gvId} value={gvId}>
                          {l.ho_ten} - {l.giang_vien?.ma_giang_vien || 'N/A'}
                        </option>
                      );
                    })}
                  </select>
                )}
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  Đồng Giảng viên phụ trách (Có thể chọn nhiều)
                  <span style={{ fontWeight: 400, fontSize: '0.8rem', color: '#64748b', marginLeft: '6px' }}>(Tùy chọn)</span>
                </label>
                
                {selectedLecturerIds.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    {selectedLecturerIds.map(id => {
                      const lec = lecturers.find(l => getLecId(l) === id.toString());
                      return (
                        <span key={id} style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '9999px',
                          backgroundColor: 'rgba(53, 37, 205, 0.1)',
                          color: '#3525cd',
                          fontSize: '0.825rem',
                          fontWeight: 600
                        }}>
                          {lec ? `${lec.ho_ten} (${lec.giang_vien?.ma_giang_vien || 'N/A'})` : id}
                          <button
                            type="button"
                            onClick={() => handleToggleLecturer(id)}
                            style={{ background: 'none', border: 'none', color: '#3525cd', cursor: 'pointer', padding: 0, fontWeight: 'bold', fontSize: '1rem' }}
                            title="Xóa"
                          >
                            ×
                          </button>
                        </span>
                      );
                    })}
                  </div>
                )}

                <div style={{
                  maxHeight: '140px',
                  overflowY: 'auto',
                  border: '1px solid #e2e8f0',
                  borderRadius: '0.5rem',
                  padding: '0.5rem',
                  backgroundColor: '#ffffff'
                }}>
                  {lecturers.map(l => {
                    const gvId = getLecId(l);
                    if (!gvId) return null;
                    const isMain = gvId === formData.giang_vien_id?.toString();
                    const isChecked = selectedLecturerIds.includes(gvId);
                    return (
                      <label
                        key={gvId}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '0.35rem 0.5rem',
                          borderRadius: '0.375rem',
                          cursor: isMain ? 'not-allowed' : 'pointer',
                          backgroundColor: isChecked ? 'rgba(53, 37, 205, 0.05)' : 'transparent',
                          opacity: isMain ? 0.6 : 1,
                          fontSize: '0.875rem'
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          disabled={isMain}
                          onChange={() => handleToggleLecturer(gvId)}
                          style={{ cursor: isMain ? 'not-allowed' : 'pointer' }}
                        />
                        <span>
                          {l.ho_ten} - <strong>{l.giang_vien?.ma_giang_vien || 'N/A'}</strong>
                          {isMain && <span style={{ color: '#d97706', fontWeight: 600, marginLeft: '6px' }}>(Giảng viên chính)</span>}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Học kỳ</label>
                <select name="hoc_ky" className={`${styles.formInput} ${styles.formSelect}`} value={formData.hoc_ky} onChange={handleChange}>
                  <option value="1">Học kỳ 1</option>
                  <option value="2">Học kỳ 2</option>
                  <option value="3">Học kỳ 3</option>
                  <option value="4">Học kỳ 4</option>
                  <option value="5">Học kỳ 5</option>
                  <option value="6">Học kỳ 6</option>
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
