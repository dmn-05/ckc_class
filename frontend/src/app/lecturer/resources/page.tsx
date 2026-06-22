'use client';

import React, { useState } from 'react';
import styles from '@/components/lecturer/resources/ResourcesManagement.module.css';
import ResourceDashboard from '@/components/lecturer/resources/ResourceDashboard';
import ResourceGrid, { ResourceData } from '@/components/lecturer/resources/ResourceGrid';
import ResourceFormModal from '@/components/lecturer/resources/ResourceFormModal';

const INITIAL_RESOURCES: ResourceData[] = [
  {
    id: 'res1',
    title: 'Giáo trình Giải tích 1 - Tập 1',
    type: 'document',
    sectionId: 'sec1',
    sectionName: 'Toán cao cấp',
    createdAt: '12 Thg 10, 2023',
    fileSize: '2.4 MB',
    isVisible: true,
    orderNum: 1
  },
  {
    id: 'res2',
    title: 'Chương 3: Cấu trúc điều khiển & Vòng lặp',
    type: 'image', // mapping 'slide' to 'image' visually
    sectionId: 'sec2',
    sectionName: 'Lập trình cơ bản',
    createdAt: '15 Thg 10, 2023',
    fileSize: '5.1 MB',
    isVisible: true,
    orderNum: 2
  },
  {
    id: 'res3',
    title: 'Record Buổi 4: Vật chất và ý thức',
    type: 'video',
    sectionId: 'sec3',
    sectionName: 'Triết học Mác - Lênin',
    createdAt: 'Vừa xong',
    fileSize: '120 MB',
    isVisible: false,
    orderNum: 3
  },
  {
    id: 'res4',
    title: 'Bài tập thực hành Tuần 3 - Mảng và Chuỗi',
    type: 'document',
    sectionId: 'sec2',
    sectionName: 'Lập trình cơ bản',
    createdAt: '10 Thg 10, 2023',
    fileSize: '1.2 MB',
    isVisible: true,
    orderNum: 4
  }
];

export default function LecturerResourcesPage() {
  const [resources, setResources] = useState<ResourceData[]>(INITIAL_RESOURCES);
  const [searchTerm, setSearchTerm] = useState('');
  const [sectionFilter, setSectionFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingResource, setEditingResource] = useState<ResourceData | undefined>(undefined);

  // Derived Stats
  const totalCount = resources.length;
  const newCount = resources.filter(r => r.createdAt === 'Vừa xong' || r.createdAt.includes('Hôm nay')).length || 1; // dummy stat
  const activeCount = resources.filter(r => r.isVisible).length;

  // Filter & Search
  const filteredResources = resources.filter(r => {
    const matchSearch = r.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchSection = sectionFilter ? r.sectionId === sectionFilter : true;
    const matchType = typeFilter ? r.type === typeFilter : true;
    return matchSearch && matchSection && matchType;
  }).sort((a, b) => a.orderNum - b.orderNum);

  // Actions
  const handleToggleVisibility = (id: string, currentStatus: boolean) => {
    setResources(prev => prev.map(r => r.id === id ? { ...r, isVisible: !currentStatus } : r));
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa tài nguyên này?")) {
      setResources(prev => prev.filter(r => r.id !== id));
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

  const handleSaveResource = (data: Partial<ResourceData>) => {
    if (editingResource) {
      // Update
      setResources(prev => prev.map(r => r.id === editingResource.id ? { ...r, ...data } as ResourceData : r));
    } else {
      // Create
      const newResource: ResourceData = {
        id: `res_${Date.now()}`,
        title: data.title || '',
        description: data.description,
        type: data.type || 'document',
        sectionId: data.sectionId || '',
        sectionName: data.sectionName || '',
        createdAt: 'Vừa xong',
        fileSize: data.externalUrl ? 'Link' : '1.0 MB',
        fileUrl: data.fileUrl,
        externalUrl: data.externalUrl,
        isVisible: data.isVisible ?? true,
        orderNum: resources.length + 1
      };
      setResources(prev => [...prev, newResource]);
    }
    setIsFormModalOpen(false);
  };

  const handleReorder = (draggedId: string, targetId: string) => {
    setResources(prev => {
      const draggedIndex = prev.findIndex(r => r.id === draggedId);
      const targetIndex = prev.findIndex(r => r.id === targetId);
      
      if (draggedIndex === -1 || targetIndex === -1) return prev;
      
      const newResources = [...prev];
      const draggedItem = newResources[draggedIndex];
      
      // Remove dragged item
      newResources.splice(draggedIndex, 1);
      // Insert at target index
      newResources.splice(targetIndex, 0, draggedItem);
      
      // Update orderNum
      return newResources.map((item, index) => ({
        ...item,
        orderNum: index + 1
      }));
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
            <option value="sec1">Toán cao cấp</option>
            <option value="sec2">Lập trình cơ bản</option>
            <option value="sec3">Triết học Mác - Lênin</option>
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

      <ResourceGrid 
        resources={filteredResources}
        viewMode={viewMode}
        onToggleVisibility={handleToggleVisibility}
        onEdit={handleOpenEdit}
        onDelete={handleDelete}
        onReorder={handleReorder}
      />

      {isFormModalOpen && (
        <ResourceFormModal 
          initialData={editingResource}
          onSave={handleSaveResource}
          onClose={() => setIsFormModalOpen(false)}
        />
      )}
    </div>
  );
}
