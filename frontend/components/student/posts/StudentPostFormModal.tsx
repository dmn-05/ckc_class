'use client';

import React, { useState, useEffect } from 'react';
import styles from './PostsManagement.module.css';

interface StudentPostFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: { title: string; category: string; isPublished: boolean; content: string; lopHocPhanId: number; file?: File | null }) => void;
}

export default function StudentPostFormModal({ isOpen, onClose, onSubmit }: StudentPostFormModalProps) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('thong_bao');
  const [isPublished, setIsPublished] = useState(true);
  const [lopHocPhanId, setLopHocPhanId] = useState<number>(1);
  const [content, setContent] = useState('');
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  
  const [isRendered, setIsRendered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      setTimeout(() => setIsAnimating(true), 10);
      setTitle('');
      setCategory('thong_bao');
      setIsPublished(true);
      setLopHocPhanId(1);
      setContent('');
      setAttachedFile(null);
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => setIsRendered(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isRendered) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    
    onSubmit({
      title,
      category,
      isPublished,
      content,
      lopHocPhanId,
      file: attachedFile
    });
  };

  return (
    <div className={`${styles.modalBackdrop} ${isAnimating ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`} style={{ zIndex: 100 }}>
      <div className={`${styles.modalContent} ${isAnimating ? styles.modalContentOpen : ''} transition-transform duration-200`}>
        <div className="flex justify-between items-center mb-6" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3 className="text-[20px] font-bold text-[#191c1e]" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
            Đăng câu hỏi / thảo luận
          </h3>
          <button 
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.25rem', color: '#191c1e' }}>Tiêu đề câu hỏi / thảo luận</label>
            <input 
              type="text" 
              value={title}
              onChange={e => setTitle(e.target.value)}
              className={styles.modalInput}
              placeholder="Nhập tiêu đề..."
              required
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.25rem', color: '#191c1e' }}>Loại bài viết</label>
              <select 
                value={category}
                onChange={e => setCategory(e.target.value)}
                className={styles.modalInput}
              >
                <option value="thong_bao">Thông báo</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.25rem', color: '#191c1e' }}>Trạng thái</label>
              <select 
                value={isPublished ? 'hien_thi' : 'an'}
                onChange={e => setIsPublished(e.target.value === 'hien_thi')}
                className={styles.modalInput}
              >
                <option value="hien_thi">Hiển thị (Public)</option>
                <option value="an">Ẩn (Draft)</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.25rem', color: '#191c1e' }}>Lớp học phần</label>
            <select 
              value={lopHocPhanId}
              onChange={e => setLopHocPhanId(parseInt(e.target.value))}
              className={styles.modalInput}
            >
              <option value={1}>Flutter K1</option>
              <option value={2}>CSDL K1</option>
              <option value={3}>Marketing K1</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.25rem', color: '#191c1e' }}>Nội dung chi tiết</label>
            <textarea 
              value={content}
              onChange={e => setContent(e.target.value)}
              rows={5}
              className={styles.modalInput}
              style={{ resize: 'none' }}
              placeholder="Mô tả chi tiết nội dung..."
              required
            ></textarea>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.25rem', color: '#191c1e' }}>Tệp đính kèm (Tùy chọn)</label>
            <input 
              type="file" 
              onChange={e => setAttachedFile(e.target.files?.[0] || null)}
              className={styles.modalInput}
            />
            {attachedFile && <p style={{ fontSize: '0.75rem', color: '#777587', marginTop: '0.25rem' }}>Đã chọn: {attachedFile.name}</p>}
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #e0e3e5' }}>
            <button 
              type="button" 
              onClick={onClose}
              className={styles.btnCancel}
            >
              Hủy
            </button>
            <button 
              type="submit"
              className={styles.btnSubmitPrimary}
            >
              Đăng bài
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
