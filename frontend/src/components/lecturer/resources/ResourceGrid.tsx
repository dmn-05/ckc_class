'use client';

import React, { useState } from 'react';
import styles from './ResourcesManagement.module.css';

export type ResourceType = 'document' | 'video' | 'link' | 'image' | 'other';

export interface ResourceData {
  id: string;
  title: string;
  description?: string;
  type: ResourceType;
  sectionId: string;
  sectionName: string;
  createdAt: string;
  fileSize?: string;
  fileUrl?: string;
  externalUrl?: string;
  isVisible: boolean;
  orderNum: number;
}

interface ResourceGridProps {
  resources: ResourceData[];
  viewMode: 'grid' | 'list';
  onToggleVisibility: (id: string, currentStatus: boolean) => void;
  onEdit: (resource: ResourceData) => void;
  onDelete: (id: string) => void;
  onReorder: (draggedId: string, targetId: string) => void;
}

export default function ResourceGrid({
  resources,
  viewMode,
  onToggleVisibility,
  onEdit,
  onDelete,
  onReorder
}: ResourceGridProps) {
  
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [dragOverId, setDragOverId] = useState<string | null>(null);

  const getTypeStyle = (type: ResourceType) => {
    switch(type) {
      case 'document': return { bg: styles.bgPdf, icon: styles.iconPdf, iconName: 'picture_as_pdf', label: 'Tài liệu' };
      case 'video': return { bg: styles.bgVideo, icon: styles.iconVideo, iconName: 'play_circle', label: 'Video' };
      case 'link': return { bg: styles.bgLink, icon: styles.iconLink, iconName: 'link', label: 'Liên kết' };
      case 'image': return { bg: styles.bgSlide, icon: styles.iconSlide, iconName: 'image', label: 'Hình ảnh' };
      default: return { bg: styles.bgDoc, icon: styles.iconDoc, iconName: 'description', label: 'Khác' };
    }
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    setDraggedId(id);
    e.dataTransfer.effectAllowed = 'move';
    // Firefox requires setting data
    e.dataTransfer.setData('text/plain', id);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (id !== draggedId) {
      setDragOverId(id);
    }
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOverId(null);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetId: string) => {
    e.preventDefault();
    setDragOverId(null);
    if (draggedId && draggedId !== targetId) {
      onReorder(draggedId, targetId);
    }
    setDraggedId(null);
  };

  const handleDragEnd = () => {
    setDraggedId(null);
    setDragOverId(null);
  };

  if (resources.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 1rem', color: '#777587', backgroundColor: '#fff', borderRadius: '0.75rem' }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48" style={{ margin: '0 auto 1rem', opacity: 0.5 }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        <p>Không có tài nguyên nào trong lớp này.</p>
      </div>
    );
  }

  return (
    <div className={viewMode === 'grid' ? styles.resourceGrid : styles.resourceList}>
      {resources.map(resource => {
        const typeStyle = getTypeStyle(resource.type);
        const isDragging = draggedId === resource.id;
        const isDragOver = dragOverId === resource.id;

        return (
          <div 
            key={resource.id} 
            className={`
              ${styles.resourceCard} 
              ${viewMode === 'list' ? styles.resourceListItem : ''}
              ${isDragging ? styles.dragging : ''}
              ${isDragOver ? styles.dragOver : ''}
              ${!resource.isVisible ? 'opacity-75' : ''}
            `}
            draggable
            onDragStart={(e) => handleDragStart(e, resource.id)}
            onDragOver={(e) => handleDragOver(e, resource.id)}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, resource.id)}
            onDragEnd={handleDragEnd}
          >
            <div className={`${styles.cardHeader} ${typeStyle.bg}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className={`${typeStyle.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" width={viewMode === 'grid' ? "48" : "24"} height={viewMode === 'grid' ? "48" : "24"}>
                {resource.type === 'document' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />}
                {resource.type === 'video' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                {resource.type === 'link' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />}
                {resource.type === 'image' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />}
                {resource.type === 'other' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />}
              </svg>
              
              <div className={styles.typeBadge}>{typeStyle.label}</div>
              
              {!resource.isVisible && (
                <div className={styles.visibilityBadge}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="12" height="12">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                  Đang ẩn
                </div>
              )}
            </div>

            <div className={styles.cardBody}>
              <div className={styles.cardMeta}>
                <span className={styles.tagCourse}>{resource.sectionName}</span>
                {resource.isVisible ? (
                  <span className={styles.statusPublic}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="12" height="12">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Công khai
                  </span>
                ) : (
                  <span className={styles.statusDraft}>Nháp</span>
                )}
              </div>
              
              <h4 className={styles.cardTitle} title={resource.title}>{resource.title}</h4>
              
              <div className={styles.cardFooter}>
                <span>{resource.createdAt}</span>
                <span>{resource.fileSize || 'Link'}</span>
              </div>
            </div>

            <div className={styles.cardActions}>
              <button 
                className={`${styles.actionBtn} ${styles.actionBtnVisibility}`} 
                title={resource.isVisible ? "Ẩn với sinh viên" : "Hiển thị với sinh viên"}
                onClick={() => onToggleVisibility(resource.id, resource.isVisible)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
                  {resource.isVisible 
                    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  }
                </svg>
              </button>
              <button 
                className={`${styles.actionBtn} ${styles.actionBtnEdit}`} 
                title="Chỉnh sửa"
                onClick={() => onEdit(resource)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
              <button 
                className={`${styles.actionBtn} ${styles.actionBtnDelete}`} 
                title="Xóa"
                onClick={() => onDelete(resource.id)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
