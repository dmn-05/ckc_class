'use client';

import React, { useState, useEffect } from 'react';
import styles from '@/components/lecturer/resources/ResourcesManagement.module.css';
import ResourceDashboard from '@/components/lecturer/resources/ResourceDashboard';
import ResourceGrid, { ResourceData } from '@/components/lecturer/resources/ResourceGrid';
import ResourceFormModal from '@/components/lecturer/resources/ResourceFormModal';
import {
  getLecturerResources,
  createLecturerResource,
  updateLecturerResource,
  deleteLecturerResource,
  toggleResourceVisibility,
} from '@/app/actions/lecturer-resource';
import { getLecturerCourseSections } from '@/app/actions/lecturer-course-section';

interface SectionOption {
  id: string;
  name: string;
  code: string;
}

export default function LecturerResourcesPage() {
  const [resources, setResources] = useState<ResourceData[]>([]);
  const [sections, setSections] = useState<SectionOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sectionFilter, setSectionFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingResource, setEditingResource] = useState<ResourceData | undefined>(undefined);

  useEffect(() => {
    async function loadData() {
      try {
        const [resourcesData, sectionsData] = await Promise.all([
          getLecturerResources(),
          getLecturerCourseSections(),
        ]);
        setResources(resourcesData);
        setSections(
          (sectionsData || []).map((s: any) => ({
            id: s.id.toString(),
            name: s.ten_lop || s.mon_hoc?.ten_mon || '',
            code: s.ma_lop_hoc_phan || '',
          }))
        );
      } catch (error) {
        console.error('Failed to load resources', error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Derived Stats
  const totalCount = resources.length;
  const newCount = resources.filter(r => r.createdAt === 'Vừa xong' || (r.createdAt && r.createdAt.includes('phút trước'))).length || 0;
  const activeCount = resources.filter(r => r.isVisible).length;

  // Filter & Search
  const filteredResources = resources.filter(r => {
    const matchSearch = r.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchSection = sectionFilter ? r.sectionId === sectionFilter : true;
    const matchType = typeFilter ? r.type === typeFilter : true;
    return matchSearch && matchSection && matchType;
  });

  // Actions
  const handleToggleVisibility = async (id: string, currentStatus: boolean) => {
    try {
      const updated = await toggleResourceVisibility(id);
      setResources(prev => prev.map(r => r.id === id ? { ...r, isVisible: updated.isVisible } : r));
    } catch (error) {
      console.error('Failed to toggle visibility', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa tài nguyên này?")) {
      try {
        await deleteLecturerResource(id);
        setResources(prev => prev.filter(r => r.id !== id));
      } catch (error) {
        alert('Có lỗi xảy ra khi xóa tài nguyên.');
        console.error(error);
      }
    }
  };

  const handleOpenAdd = () => {
    setEditingResource(undefined);
    setIsFormModalOpen(true);
  };

  const handleOpenEdit = (resource: ResourceData) => {
    setEditingResource(resource);
    setIsFormModalOpen(true);
  };

  const handleSaveResource = async (data: Partial<ResourceData>) => {
    try {
      if (editingResource) {
        const updated = await updateLecturerResource(editingResource.id, {
          tieu_de: data.title,
          noi_dung: data.description,
          loai_tai_nguyen: data.type,
          trang_thai: data.isVisible ? 'hien_thi' : 'an',
          file_url: data.fileUrl,
          external_url: data.externalUrl,
        });
        setResources(prev => prev.map(r => r.id === editingResource.id ? updated : r));
      } else {
        const created = await createLecturerResource({
          tieu_de: data.title,
          noi_dung: data.description || '',
          lop_hoc_phan_id: parseInt(data.sectionId || '0'),
          loai_tai_nguyen: data.type || 'document',
          trang_thai: data.isVisible ? 'hien_thi' : 'an',
          file_url: data.fileUrl || '',
          external_url: data.externalUrl || '',
        });
        setResources(prev => [...prev, created]);
      }
      setIsFormModalOpen(false);
    } catch (error) {
      alert('Có lỗi xảy ra khi lưu tài nguyên.');
      console.error(error);
    }
  };

  const handleReorder = (draggedId: string, targetId: string) => {
    setResources(prev => {
      const draggedIndex = prev.findIndex(r => r.id === draggedId);
      const targetIndex = prev.findIndex(r => r.id === targetId);
      
      if (draggedIndex === -1 || targetIndex === -1) return prev;
      
      const newResources = [...prev];
      const [movedItem] = newResources.splice(draggedIndex, 1);
      newResources.splice(targetIndex, 0, movedItem);
      
      return newResources;
    });
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Quản lý Tài nguyên học tập</h1>
          <p className={styles.pageSubtitle}>Quản lý, phân loại và theo dõi các tài liệu, bài giảng và học liệu.</p>
        </div>
        
        <button className={styles.btnPrimary} onClick={handleOpenAdd}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Thêm tài nguyên mới
        </button>
      </div>

      <ResourceDashboard 
        totalCount={totalCount}
        newCount={newCount}
        activeCount={activeCount}
      />

      <div className={styles.filterContainer}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span className={styles.filterLabel}>Bộ lọc:</span>
          
          <select 
            className={styles.filterSelect}
            value={sectionFilter}
            onChange={(e) => setSectionFilter(e.target.value)}
          >
            <option value="">Tất cả môn học</option>
            {sections.map(sec => (
              <option key={sec.id} value={sec.id}>{sec.name} ({sec.code})</option>
            ))}
          </select>

          <select 
            className={styles.filterSelect}
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="">Tất cả loại</option>
            <option value="document">Tài liệu (PDF/Doc)</option>
            <option value="video">Video</option>
            <option value="image">Hình ảnh / Slide</option>
            <option value="link">Liên kết</option>
          </select>
        </div>

        <div className={styles.spacer}></div>
        
        <div className={styles.viewToggle}>
          <button 
            className={`${styles.viewBtn} ${viewMode === 'grid' ? styles.viewBtnActive : ''}`}
            onClick={() => setViewMode('grid')}
            title="Dạng lưới"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button 
            className={`${styles.viewBtn} ${viewMode === 'list' ? styles.viewBtnActive : ''}`}
            onClick={() => setViewMode('list')}
            title="Dạng danh sách"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '4rem 1rem', color: '#777587' }}>
          <p>Đang tải tài nguyên...</p>
        </div>
      ) : (
        <ResourceGrid 
          resources={filteredResources}
          viewMode={viewMode}
          onToggleVisibility={handleToggleVisibility}
          onEdit={handleOpenEdit}
          onDelete={handleDelete}
          onReorder={handleReorder}
        />
      )}

      {isFormModalOpen && (
        <ResourceFormModal 
          initialData={editingResource}
          sections={sections}
          onSave={handleSaveResource}
          onClose={() => setIsFormModalOpen(false)}
        />
      )}
    </div>
  );
}
