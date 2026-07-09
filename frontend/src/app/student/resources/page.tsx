'use client';

import React, { useState, useMemo } from 'react';
import styles from '@/components/student/resources/ResourcesManagement.module.css';
import ResourcesHeader from '@/components/student/resources/ResourcesHeader';
import CategoryTabs from '@/components/student/resources/CategoryTabs';
import ResourceCard, { ResourceData } from '@/components/student/resources/ResourceCard';
import FeaturedSection from '@/components/student/resources/FeaturedSection';
import MediaModal from '@/components/student/resources/MediaModal';

// Mock Data
const MOCK_RESOURCES: ResourceData[] = [
  {
    id: 'r1',
    type: 'pdf',
    title: 'Giáo trình Nguyên lý Thị giác',
    description: 'Nội dung chi tiết về các quy luật thị giác, bố cục và màu sắc trong thiết kế chuyên nghiệp.',
    date: '15/10/2023',
    sizeOrMeta: '2.4 MB',
    isVisible: true,
  },
  {
    id: 'r2',
    type: 'video',
    title: 'Hướng dẫn Figma cơ bản',
    description: 'Video quay màn hình buổi học thực hành thiết kế Component và Auto Layout.',
    date: '12/10/2023',
    sizeOrMeta: '12:45',
    thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSLFPwfbloZxeZOgpKUVD-UnIDIWK2uav7URTNqIvifNVhf2lDeLPtG6vfrcE9HTWR9Gj-FvatIkeX7rd4o1NStG5E9qlXVcxFYaJ6X4nbEN3oabZN9HBZ7aYns32A5IoVtfsDdqgh8BTRylAwgzA0RgCBwswxQuWB6M1w20gYjjkfp8MadZS6gP9GOESUYlwQ8IzyUszvLLVy9dtGwrZTvGlciKOstMXpF-D8AomZFU1lLbQRk20N1G2uqoIVKtAB1_AcFAumVa4',
    isVisible: true,
  },
  {
    id: 'r3',
    type: 'image',
    title: 'Bộ Icon System 2024',
    description: 'Tổng hợp các icon vector dùng cho đồ án cuối kỳ, định dạng transparent.',
    date: '10/10/2023',
    sizeOrMeta: 'PNG • 1.2 MB',
    thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRixlWagR5SIyLfgXtS3Vywq9Od_2sK45OeHJK0Z5Q4iBwpmQ7FNSYR09miMD2m8wRV06tVRr8DTuXIMBinDW64R9vhRKNJUeANNRc3e7YvICBbuyisFyGQWz2kZK6KX-vn9tG6mpklDnTKMWmkgYTVGCjWUvcQL5QtzNohkOXp-625kXkH6Z4DMsgNbUzCV5Km9Zx14noYp2aY-WP0uaZye5lGRMXKs6zn8W_Tdkodgyn8pTgwybM8Otlpk0p86RGMQGNSkHFg8M',
    isVisible: true,
  },
  {
    id: 'r4',
    type: 'link',
    title: 'Behance Inspiration Case Study',
    description: 'Tham khảo cách trình bày Portfolio chuyên nghiệp cho UX Designer.',
    date: '08/10/2023',
    linkUrl: 'https://www.behance.net',
    isVisible: true,
  },
  {
    id: 'r5',
    type: 'doc',
    title: 'Danh sách Checklist UI Review',
    description: 'Các tiêu chí kiểm tra giao diện trước khi bàn giao cho lập trình viên.',
    date: '05/10/2023',
    sizeOrMeta: '512 KB',
    isVisible: true,
  },
  {
    id: 'r6',
    type: 'community',
    title: 'Figma Community Resources',
    description: 'Kho tàng plugin và template miễn phí từ cộng đồng Figma toàn cầu.',
    date: '01/10/2023',
    linkUrl: 'https://www.figma.com/community',
    isVisible: true,
  },
  {
    id: 'r7',
    type: 'pdf',
    title: 'Tài liệu bị ẩn',
    description: 'Tài liệu này sẽ không hiển thị trên UI vì isVisible là false.',
    date: '01/01/2023',
    isVisible: false,
  }
];

const CATEGORIES = ['Tất cả', 'Tài liệu (PDF)', 'Video bài giảng', 'Hình ảnh & Mockup', 'Liên kết ngoài'];

export default function StudentResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('Tất cả');

  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<{ title: string; type: 'video' | 'image'; src?: string } | null>(null);

  // Filter out hidden resources
  const visibleResources = useMemo(() => MOCK_RESOURCES.filter(r => r.isVisible), []);

  const handleDownload = (data: ResourceData) => {
    alert(`Bắt đầu tải xuống: ${data.title}`);
  };

  const handleView = (data: ResourceData) => {
    if (data.type === 'video' || data.type === 'image') {
      setModalData({
        title: data.title,
        type: data.type,
        src: data.thumbnailUrl
      });
      setModalOpen(true);
    } else {
      alert(`Mở tài liệu: ${data.title} trong tab mới.`);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <ResourcesHeader courseName="Thiết kế UI/UX" lastUpdated="2 giờ trước" />

      <CategoryTabs
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      <div className={styles.resourcesGrid}>
        {visibleResources.map(resource => (
          <ResourceCard
            key={resource.id}
            data={resource}
            onView={handleView}
            onDownload={handleDownload}
          />
        ))}
      </div>

      <FeaturedSection />

      {modalData && (
        <MediaModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title={modalData.title}
          type={modalData.type}
          src={modalData.src}
        />
      )}
    </div>
  );
}
