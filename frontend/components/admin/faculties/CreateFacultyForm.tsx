'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './AdminCreateFaculties.module.css';
import { createFaculty, getLecturers } from '@/app/actions/faculty';

export default function CreateFacultyForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [lecturers, setLecturers] = useState<{id: number, ho_ten: string}[]>([]);

  const [formData, setFormData] = useState({
    name: '',
    code: '',
    dean: '',
    status: 'active'
  });

  useEffect(() => {
    async function loadLecturers() {
      try {
        const data = await getLecturers();
        setLecturers(data);
      } catch (err) {
        console.error("Failed to load lecturers", err);
      }
    }
    loadLecturers();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      await createFaculty(formData);
      setSubmitStatus('success');
      
      setTimeout(() => {
        router.push('/admin/faculties');
        router.refresh();
      }, 1500);
    } catch (error: any) {
      setErrorMsg(error.message || 'Có lỗi xảy ra khi thêm khoa.');
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
            Thông tin cơ bản của Khoa
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Tên Khoa</label>
                <input 
                  type="text" 
                  className={styles.formInput} 
                  placeholder="Ví dụ: Khoa Công nghệ thông tin" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Mã Khoa</label>
                <input 
                  type="text" 
                  className={styles.formInput} 
                  placeholder="e.g. FIT-01" 
                  value={formData.code}
                  onChange={e => setFormData({...formData, code: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Trưởng Khoa</label>
                <select 
                  className={`${styles.formInput} ${styles.formSelect}`}
                  value={formData.dean}
                  onChange={e => setFormData({...formData, dean: e.target.value})}
                >
                  <option value="">Chọn một Giảng viên</option>
                  {lecturers.map(lecturer => (
                    <option key={lecturer.id} value={lecturer.ho_ten}>{lecturer.ho_ten}</option>
                  ))}
                </select>
              </div>
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
            onClick={() => router.push('/admin/faculties')}
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
                Thêm Khoa
              </>
            )}
          </button>
        </div>
      </div>

      {/* Sidebar / Assets Column */}
      <div className={styles.sideCol}>
        {/* Image Upload Area */}
        <div className={styles.card}>
          <h3 className={styles.uploadTitle}>Hình ảnh đại diện của Khoa</h3>
          <div className={styles.uploadArea}>
            <img 
              alt="Faculty Preview" 
              className={styles.uploadImgPreview} 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6HHIKGNwVqVSr80zhnEDzIOkAidjV1NqewArqgD2vxmPnA_Gyh9XBeGt3p4-7tOlAXikrANUvRH3YUM2nqhyK5veSRhdzpWZyPhW3U_AByoEGutPB9ffX2wWx_Orvfmfz3j0cO5tHhEnwQ2wsCkXGC0xoBUXi2ci32zEhaRb33HpQxhhb-Oi63JN42k6YnTTUZ_QTAvDTYtp9qc_xXawMK3nfZuJh0gU2n6B7ys_G7WJXo_I2WIEkt_kD8b8HkcqKpWb3gAaRUeY"
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
              Sử dụng quy chuẩn đặt tên thống nhất như "Khoa [Chuyên ngành]" để duy trì tính nhất quán. Mã khoa nên là duy nhất và lý tưởng nhất là từ 3-6 ký tự.
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
              <span style={{ color: '#777587' }}>Phân công Trưởng khoa</span>
            </li>
            <li className={styles.progressItem}>
              <span className={`material-symbols-outlined ${styles.progressIconPending}`}>radio_button_unchecked</span>
              <span style={{ color: '#191c1e' }}>Chi tiết quy mô</span>
            </li>
            <li className={styles.progressItem}>
              <span className={`material-symbols-outlined ${styles.progressIconPending}`}>radio_button_unchecked</span>
              <span style={{ color: '#191c1e' }}>Ảnh bìa đại diện</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
