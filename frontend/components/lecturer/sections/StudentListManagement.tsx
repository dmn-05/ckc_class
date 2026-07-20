'use client';

import React, { useState, useEffect, useRef } from 'react';
import { getSectionStudents, addStudentToSection, removeStudentFromSection, searchStudents } from '@/app/actions/student-list';
import ConfirmModal from '@/components/common/ConfirmModal';
import AlertModal from '@/components/common/AlertModal';
import styles from './StudentManagement.module.css';

export default function StudentListManagement({ sectionId }: { sectionId: string }) {
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [sectionStatus, setSectionStatus] = useState<string>('');
  
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [targetStudentId, setTargetStudentId] = useState<string | null>(null);
  const [alertConfig, setAlertConfig] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    variant: 'success' | 'error' | 'warning' | 'info';
  }>({
    isOpen: false,
    title: '',
    message: '',
    variant: 'info'
  });

  const isLockedOrEnded = sectionStatus === 'da_khoa' || sectionStatus === 'da_ket_thuc';

  const fetchStudents = async () => {
    setLoading(true);
    const res = await getSectionStudents(sectionId);
    if (res.success) {
      setStudents(res.data);
      if ((res as any).section) {
        setSectionStatus((res as any).section.trang_thai);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchStudents();
  }, [sectionId]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (!isLockedOrEnded && searchQuery.trim().length >= 2) {
        setIsSearching(true);
        const res = await searchStudents(searchQuery, sectionId);
        if (res.success) {
          setSearchResults(res.data);
          setShowResults(true);
        }
        setIsSearching(false);
      } else {
        setSearchResults([]);
        setShowResults(false);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, sectionId, isLockedOrEnded]);

  const handleSelectStudent = (maSinhVien: string) => {
    setSearchQuery(maSinhVien);
    setShowResults(false);
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (isLockedOrEnded || !searchQuery.trim()) return;
    
    setSubmitting(true);
    const res = await addStudentToSection(sectionId, searchQuery.trim());
    if (res.success) {
      setSearchQuery('');
      fetchStudents();
    } else {
      setError(res.error || 'Có lỗi xảy ra');
    }
    setSubmitting(false);
  };

  const handleRemoveClick = (studentId: string) => {
    setTargetStudentId(studentId);
    setConfirmOpen(true);
  };

  const executeRemove = async () => {
    if (!targetStudentId) return;
    setSubmitting(true);
    const res = await removeStudentFromSection(sectionId, targetStudentId);
    setSubmitting(false);
    setConfirmOpen(false);
    if (res.success) {
      setAlertConfig({
        isOpen: true,
        title: 'Thành công',
        message: 'Đã xóa sinh viên khỏi lớp học phần thành công!',
        variant: 'success'
      });
      fetchStudents();
    } else {
      setAlertConfig({
        isOpen: true,
        title: 'Lỗi',
        message: res.error || 'Có lỗi xảy ra khi xóa sinh viên.',
        variant: 'error'
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchSection}>
        {isLockedOrEnded && (
          <div style={{
            padding: '12px 16px',
            backgroundColor: '#fff3cd',
            color: '#856404',
            border: '1px solid #ffeeba',
            borderRadius: '6px',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            fontWeight: 500
          }}>
            Lớp học phần này đã {sectionStatus === 'da_khoa' ? 'lưu trữ' : 'kết thúc'}, không thể thêm sinh viên vào lớp.
          </div>
        )}
        <form onSubmit={handleAdd} className={styles.formGroup}>
          <div className={styles.inputWrapper} ref={searchRef}>
            <label className={styles.label}>Thêm sinh viên</label>
            <input 
              type='text' 
              value={searchQuery} 
              onChange={e => setSearchQuery(e.target.value)} 
              onFocus={() => { if (!isLockedOrEnded && searchResults.length > 0) setShowResults(true); }}
              placeholder={isLockedOrEnded ? `Lớp học phần đã ${sectionStatus === 'da_khoa' ? 'lưu trữ' : 'kết thúc'}, không thể thêm sinh viên` : 'Nhập tên hoặc mã sinh viên (VD: DH52...)'} 
              className={styles.input}
              disabled={isLockedOrEnded}
              autoComplete="off"
            />
            
            {showResults && !isLockedOrEnded && (
              <div className={styles.searchResults}>
                {isSearching ? (
                  <div className={styles.searchItem}>Đang tìm kiếm...</div>
                ) : searchResults.length > 0 ? (
                  searchResults.map(student => (
                    <div 
                      key={student.id} 
                      className={styles.searchItem}
                      onClick={() => handleSelectStudent(student.ma_sinh_vien)}
                    >
                      <span className={styles.searchItemName}>{student.nguoi_dung?.ho_ten}</span>
                      <span className={styles.searchItemCode}>{student.ma_sinh_vien} - {student.lop?.ma_lop}</span>
                    </div>
                  ))
                ) : (
                  <div className={styles.searchItem}>Không tìm thấy sinh viên</div>
                )}
              </div>
            )}
          </div>
          <button 
            type='submit' 
            disabled={isLockedOrEnded || submitting || !searchQuery.trim()}
            className={styles.btnPrimary}
            style={isLockedOrEnded ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
          >
            {submitting ? 'Đang xử lý...' : 'Thêm vào lớp'}
          </button>
        </form>
        {error && <p className={styles.errorText}>{error}</p>}
      </div>

      {loading ? (
        <div style={{ padding: '20px', textAlign: 'center', color: '#6b7280' }}>Đang tải danh sách...</div>
      ) : (
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>STT</th>
                <th className={styles.th}>Mã SV</th>
                <th className={styles.th}>Họ và tên</th>
                <th className={styles.th}>Lớp danh nghĩa</th>
                <th className={styles.th}>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {students.length === 0 ? (
                <tr>
                  <td colSpan={5} className={styles.emptyState}>Chưa có sinh viên nào trong lớp.</td>
                </tr>
              ) : (
                students.map((student, index) => (
                  <tr key={student.id} className={styles.tr}>
                    <td className={styles.td}>{index + 1}</td>
                    <td className={styles.td}>{student.ma_sinh_vien}</td>
                    <td className={styles.td}>{student.nguoi_dung?.ho_ten}</td>
                    <td className={styles.td}>{student.lop?.ma_lop}</td>
                    <td className={styles.td}>
                      <button 
                        onClick={() => handleRemoveClick(student.id)}
                        className={styles.btnDelete}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      <ConfirmModal
        isOpen={confirmOpen}
        title="Xác nhận xóa khỏi lớp"
        message="Bạn có chắc chắn muốn xóa sinh viên này khỏi lớp học phần không?"
        confirmText="Xóa khỏi lớp"
        cancelText="Hủy bỏ"
        variant="danger"
        isLoading={submitting}
        onConfirm={executeRemove}
        onCancel={() => !submitting && setConfirmOpen(false)}
      />

      <AlertModal
        isOpen={alertConfig.isOpen}
        title={alertConfig.title}
        message={alertConfig.message}
        variant={alertConfig.variant}
        onClose={() => setAlertConfig(prev => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
}
