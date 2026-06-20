'use client';

import React from 'react';
import styles from './ResourcesManagement.module.css';

interface MediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: 'video' | 'image';
  src?: string;
}

export default function MediaModal({ isOpen, onClose, title, type, src }: MediaModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>{title}</h3>
          <button className={styles.btnCloseModal} onClick={onClose} title="Đóng">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className={styles.modalBody}>
          {type === 'image' && src && (
            <img src={src} alt={title} className={styles.modalMedia} />
          )}
          {type === 'video' && (
            <div className={styles.videoPlaceholder}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={styles.videoPlayIcon}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          )}
        </div>

        <div className={styles.modalFooter}>
          <button className={styles.btnSecondary} onClick={onClose}>
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
