'use client';

import React, { useState } from 'react';
import styles from './AssignmentsManagement.module.css';

interface SubmitModalProps {
  assignmentTitle: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (file: string, note: string) => void;
}

export default function SubmitModal({ assignmentTitle, isOpen, onClose, onSubmit }: SubmitModalProps) {
  const [note, setNote] = useState('');
  const [file, setFile] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = () => {
    onSubmit(file || 'uploaded_file.zip', note);
    setNote('');
    setFile(null);
  };

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>Nộp bài tập</h3>
          <button className={styles.btnClose} onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className={styles.modalBody}>
          <div className={styles.modalField}>
            <label className={styles.fieldLabel}>Tên bài tập</label>
            <div className={styles.fieldValueBox}>{assignmentTitle}</div>
          </div>
          
          <div className={styles.modalField}>
            <label className={styles.fieldLabel}>Đính kèm tệp (.zip, .pdf)</label>
            <div className={styles.dropzone} onClick={() => setFile('Project_02_SourceCode.zip')}>
              <svg className={styles.dropzoneIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="40" height="40">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              {file ? (
                <p className={styles.dropzoneText}>Đã chọn: <span className={styles.dropzoneTextPrimary}>{file}</span></p>
              ) : (
                <>
                  <p className={styles.dropzoneText}>Nhấn vào đây để <span className={styles.dropzoneTextPrimary}>chọn file giả lập</span></p>
                  <p className={styles.dropzoneSubtext}>Dung lượng tối đa: 50MB</p>
                </>
              )}
            </div>
          </div>
          
          <div className={styles.modalField}>
            <label className={styles.fieldLabel}>Ghi chú thêm (Tùy chọn)</label>
            <textarea 
              className={styles.modalTextarea} 
              rows={4} 
              placeholder="Nhập ghi chú cho giảng viên nếu có..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          
          <div className={styles.modalFooter}>
            <button className={styles.btnCancel} onClick={onClose}>Hủy bỏ</button>
            <button className={styles.btnSubmitFull} onClick={handleSubmit}>Gửi bài làm</button>
          </div>
        </div>
      </div>
    </div>
  );
}
