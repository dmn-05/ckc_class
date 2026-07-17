'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './AlertModal.module.css';

export interface AlertModalProps {
  isOpen: boolean;
  title?: string;
  message: React.ReactNode;
  variant?: 'warning' | 'error' | 'success' | 'info';
  buttonText?: string;
  onClose: () => void;
}

export default function AlertModal({
  isOpen,
  title,
  message,
  variant = 'warning',
  buttonText = 'Đã hiểu',
  onClose,
}: AlertModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted || typeof document === 'undefined') return null;

  const getDefaultTitle = () => {
    if (title) return title;
    switch (variant) {
      case 'warning':
        return 'Cảnh báo nhập liệu';
      case 'error':
        return 'Có lỗi xảy ra';
      case 'success':
        return 'Thành công';
      default:
        return 'Thông báo hệ thống';
    }
  };

  const getIconName = () => {
    switch (variant) {
      case 'warning':
        return 'warning';
      case 'error':
        return 'error';
      case 'success':
        return 'check_circle';
      default:
        return 'info';
    }
  };

  const getIconClass = () => {
    switch (variant) {
      case 'warning':
        return styles.iconBoxWarning;
      case 'error':
        return styles.iconBoxError;
      case 'success':
        return styles.iconBoxSuccess;
      default:
        return styles.iconBoxInfo;
    }
  };

  return createPortal(
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={styles.modalCard}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={getIconClass()}>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: '32px' }}
          >
            {getIconName()}
          </span>
        </div>

        <h3 className={styles.title}>{getDefaultTitle()}</h3>
        <p className={styles.message}>{message}</p>

        <div className={styles.actionRow}>
          <button
            type="button"
            className={variant === 'warning' ? styles.btnOkWarning : styles.btnOk}
            onClick={onClose}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
