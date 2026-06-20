'use client';

import React from 'react';
import styles from './ResourcesManagement.module.css';

export type ResourceType = 'pdf' | 'doc' | 'video' | 'image' | 'link' | 'community';

export interface ResourceData {
  id: string;
  type: ResourceType;
  title: string;
  description: string;
  date: string;
  sizeOrMeta?: string;
  thumbnailUrl?: string;
  linkUrl?: string;
  isVisible: boolean;
}

interface ResourceCardProps {
  data: ResourceData;
  onView: (data: ResourceData) => void;
  onDownload: (data: ResourceData) => void;
}

export default function ResourceCard({ data, onView, onDownload }: ResourceCardProps) {
  if (!data.isVisible) return null;

  const renderHeader = () => {
    switch (data.type) {
      case 'pdf':
        return (
          <>
            <div className={styles.bgGradientPdf}></div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={styles.iconPdf} style={{ width: '64px', height: '64px', zIndex: 1 }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {data.sizeOrMeta && <div className={styles.badgeOverlay}>{data.sizeOrMeta}</div>}
          </>
        );
      case 'doc':
        return (
          <>
            <div className={styles.bgGradientDoc}></div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={styles.iconDoc} style={{ width: '64px', height: '64px', zIndex: 1 }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {data.sizeOrMeta && <div className={styles.badgeOverlay}>{data.sizeOrMeta}</div>}
          </>
        );
      case 'link':
        return (
          <>
            <div className={styles.bgGradientLink}></div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={styles.iconLink} style={{ width: '64px', height: '64px', zIndex: 1 }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </>
        );
      case 'community':
        return (
          <>
            <div className={styles.bgGradientCommunity}></div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={styles.iconCommunity} style={{ width: '64px', height: '64px', zIndex: 1 }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </>
        );
      case 'video':
        return (
          <>
            {data.thumbnailUrl && <img src={data.thumbnailUrl} alt={data.title} className={styles.thumbnailImg} />}
            <div className={styles.playOverlay}>
              <div className={styles.playBtnCircle} onClick={() => onView(data)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '32px', height: '32px' }}>
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            {data.sizeOrMeta && <div className={styles.badgeOverlayDark}>{data.sizeOrMeta}</div>}
          </>
        );
      case 'image':
        return (
          <>
            {data.thumbnailUrl && <img src={data.thumbnailUrl} alt={data.title} className={styles.thumbnailImg} />}
            {data.sizeOrMeta && <div className={styles.badgeOverlay}>{data.sizeOrMeta}</div>}
          </>
        );
      default:
        return null;
    }
  };

  const getLabelInfo = () => {
    switch (data.type) {
      case 'pdf': return { text: 'Tài liệu PDF', colorClass: styles.colorPdf };
      case 'doc': return { text: 'Tài liệu Doc', colorClass: styles.colorDoc };
      case 'video': return { text: 'Video Bài Giảng', colorClass: styles.colorVideo };
      case 'image': return { text: 'Hình ảnh & Mockup', colorClass: styles.colorImage };
      case 'link': return { text: 'Liên kết ngoài', colorClass: styles.colorLink };
      case 'community': return { text: 'Cộng đồng', colorClass: styles.colorCommunity };
      default: return { text: 'Khác', colorClass: '' };
    }
  };

  const labelInfo = getLabelInfo();

  return (
    <div className={styles.resourceCard}>
      <div className={styles.cardHeader}>
        {renderHeader()}
      </div>
      <div className={styles.cardBody}>
        <span className={`${styles.resourceTypeLabel} ${labelInfo.colorClass}`}>{labelInfo.text}</span>
        <h3 className={styles.resourceTitle} title={data.title}>{data.title}</h3>
        <p className={styles.resourceDesc}>{data.description}</p>
        
        <div className={styles.cardFooter}>
          <span className={styles.resourceDate}>{data.date}</span>
          <div className={styles.actionBtns}>
            {/* View Button */}
            {(data.type === 'pdf' || data.type === 'image' || data.type === 'video') && (
              <button className={styles.iconBtn} onClick={() => onView(data)} title="Xem trực tiếp">
                {data.type === 'video' && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {data.type === 'image' && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                )}
                {data.type === 'pdf' && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            )}
            
            {/* Open Link Button */}
            {(data.type === 'link' || data.type === 'community') && data.linkUrl && (
              <a href={data.linkUrl} target="_blank" rel="noreferrer" className={styles.iconBtn} title="Mở liên kết">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            
            {/* Download Button */}
            {(data.type === 'pdf' || data.type === 'doc' || data.type === 'image' || data.type === 'video') && (
              <button className={styles.iconBtn} onClick={() => onDownload(data)} title="Tải xuống">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
