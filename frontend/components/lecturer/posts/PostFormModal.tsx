'use client';

import React, { useState, useEffect } from 'react';
import { PostData } from './PostCard';
import styles from './PostsManagement.module.css';

interface PostFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: Omit<PostData, 'id' | 'views_count' | 'commentsCount' | 'date'>) => void;
  initialData?: PostData | null;
}

export default function PostFormModal({ isOpen, onClose, onSubmit, initialData }: PostFormModalProps) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<'announcement' | 'discussion' | 'material' | 'question'>('announcement');
  const [isPublished, setIsPublished] = useState(true);
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  
  const [isRendered, setIsRendered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      setTimeout(() => setIsAnimating(true), 10);
      
      if (initialData) {
        setTitle(initialData.title);
        setCategory(initialData.category);
        setIsPublished(initialData.is_published);
        setImage(initialData.image || '');
        // We're mocking content as we don't have it in the summary type
        setContent(initialData.title + ' content details...');
      } else {
        setTitle('');
        setCategory('announcement');
        setIsPublished(true);
        setContent('');
        setImage('');
      }
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => setIsRendered(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, initialData]);

  if (!isRendered) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    onSubmit({
      title,
      category,
      is_published: isPublished,
      is_pinned: initialData ? initialData.is_pinned : false,
      authorName: initialData ? initialData.authorName : 'Nguyễn Văn Giảng Viên', // default mock
      image: image || 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8WWy8nQSdwRuA1IEGzFFn5Hb9bq-PbFhEW8PLv_2-yg-4bkR-2Qo2l3Udk_b4zbXrIKNzKK90IpA-sprj_X_1Ex_FPPN8B3G1WTA2XGYfeIDPoYDt5S3bIR-8fEylVnjJSF_STYGiLQrougKhvWOyzeYz9fBSXm7N-mHo9y81-z7PIyjgfza5CkskVqbDv8rY1NRnRtDI9ZoXS8nFS-oaWGZgXj5D4UMtFW0HnmAwJDQuzHIBlGhqILtjoIOd7jeYPdjnseCnV2o',
    });
  };

  return (
    <div className={`${styles.modalBackdrop} ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`${styles.modalContent} ${isAnimating ? styles.modalContentOpen : ''}`}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-[20px] font-bold text-on-surface">
            {initialData ? 'Chỉnh sửa bài viết' : 'Thêm bài viết mới'}
          </h3>
          <button 
            onClick={onClose}
            className="text-on-surface-variant hover:bg-surface-container-high p-1 rounded transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[14px] font-semibold text-on-surface mb-1">Tiêu đề</label>
            <input 
              type="text" 
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="w-full rounded-lg border-outline-variant px-3 py-2 text-[14px] focus:ring-primary focus:border-primary bg-white"
              placeholder="Nhập tiêu đề bài viết"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[14px] font-semibold text-on-surface mb-1">Danh mục</label>
              <select 
                value={category}
                onChange={e => setCategory(e.target.value as any)}
                className="w-full rounded-lg border-outline-variant px-3 py-2 text-[14px] focus:ring-primary focus:border-primary bg-white"
              >
                <option value="announcement">Hành chính (Thông báo)</option>
                <option value="material">Đào tạo (Tài liệu)</option>
                <option value="discussion">Sự kiện (Thảo luận)</option>
                <option value="question">Hỏi đáp</option>
              </select>
            </div>
            <div>
              <label className="block text-[14px] font-semibold text-on-surface mb-1">Trạng thái</label>
              <select 
                value={isPublished ? 'published' : 'draft'}
                onChange={e => setIsPublished(e.target.value === 'published')}
                className="w-full rounded-lg border-outline-variant px-3 py-2 text-[14px] focus:ring-primary focus:border-primary bg-white"
              >
                <option value="published">Đăng ngay (Publish)</option>
                <option value="draft">Lưu nháp (Draft)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[14px] font-semibold text-on-surface mb-1">Ảnh bìa (URL)</label>
            <input 
              type="text" 
              value={image}
              onChange={e => setImage(e.target.value)}
              className="w-full rounded-lg border-outline-variant px-3 py-2 text-[14px] focus:ring-primary focus:border-primary bg-white"
              placeholder="https://..."
            />
          </div>

          <div>
            <label className="block text-[14px] font-semibold text-on-surface mb-1">Nội dung</label>
            <textarea 
              value={content}
              onChange={e => setContent(e.target.value)}
              rows={5}
              className="w-full rounded-lg border-outline-variant px-3 py-2 text-[14px] focus:ring-primary focus:border-primary bg-white resize-none"
              placeholder="Nội dung bài viết..."
            ></textarea>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-surface-container-high mt-6">
            <button 
              type="button" 
              onClick={onClose}
              className="px-4 py-2 rounded-lg font-semibold text-[14px] text-on-surface-variant hover:bg-surface-container-high transition-colors"
            >
              Hủy
            </button>
            <button 
              type="submit"
              className="px-6 py-2 rounded-lg font-semibold text-[14px] bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm"
            >
              {initialData ? 'Cập nhật' : 'Đăng bài'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
