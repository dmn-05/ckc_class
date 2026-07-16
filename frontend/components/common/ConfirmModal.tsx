'use client';

import React from 'react';
import styles from './ConfirmModal.module.css';

export interface ConfirmModalProps {
  isOpen: boolean;
  title?: string;
  message: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  variant?: 'danger' | 'primary' | 'warning';
  icon?: string;
  onConfirm: () => void;
  onCancel: () => void;
  isLoading?: boolean;
}

export default function ConfirmModal({
  isOpen,
  title = 'Xác nhận hành động',
  message,
  confirmText = 'Xác nhận',
  cancelText = 'Huỷ bỏ',
  variant = 'danger',
  icon,
  onConfirm,
  onCancel,
  isLoading = false,
}: ConfirmModalProps) {
  if (!isOpen) return null;

  const getIconBoxClass = () => {
    if (variant === 'danger') return styles.iconBoxDanger;
    if (variant === 'warning') return styles.iconBoxWarning;
    return styles.iconBoxPrimary;
  };

  const getBtnConfirmClass = () => {
    if (variant === 'danger') return styles.btnConfirmDanger;
    if (variant === 'warning') return styles.btnConfirmWarning;
    return styles.btnConfirmPrimary;
  };

  const getIconName = () => {
    if (icon) return icon;
    if (variant === 'danger' || variant === 'warning') return 'warning';
    return 'help';
  };

  return (
    <div className={styles.backdrop} onClick={onCancel}>
      <div
        className={styles.modalCard}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={getIconBoxClass()}>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: '32px' }}
          >
            {getIconName()}
          </span>
        </div>

        <h3 className={styles.title}>{title}</h3>
        <div className={styles.message}>{message}</div>

        <div className={styles.actionRow}>
          <button
            type="button"
            className={styles.btnCancel}
            onClick={onCancel}
            disabled={isLoading}
          >
            {cancelText}
          </button>
          <button
            type="button"
            className={getBtnConfirmClass()}
            onClick={onConfirm}
            disabled={isLoading}
          >
            {isLoading ? 'Đang xử lý...' : confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
