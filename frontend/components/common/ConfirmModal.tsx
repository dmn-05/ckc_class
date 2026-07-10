'use client';

import React from 'react';
import styles from './ConfirmModal.module.css';

export interface ConfirmModalProps {
  isOpen: boolean;
  title?: string;
  message: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  variant?: 'danger' | 'primary';
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
  onConfirm,
  onCancel,
  isLoading = false,
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.backdrop} onClick={onCancel}>
      <div
        className={styles.modalCard}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={variant === 'danger' ? styles.iconBoxDanger : styles.iconBoxPrimary}>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: '32px' }}
          >
            {variant === 'danger' ? 'warning' : 'help'}
          </span>
        </div>

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.message}>{message}</p>

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
            className={variant === 'danger' ? styles.btnConfirmDanger : styles.btnConfirmPrimary}
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
