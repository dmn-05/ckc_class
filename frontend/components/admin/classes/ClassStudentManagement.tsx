'use client';

import React, { useState, useEffect, useRef } from 'react';
import { getClassStudents, addStudentToClass, removeStudentFromClass, searchStudents } from '@/app/actions/student-list';
import styles from '@/components/lecturer/sections/StudentManagement.module.css';
import ConfirmModal from '@/components/common/ConfirmModal';
import AlertModal from '@/components/common/AlertModal';

export default function ClassStudentManagement({ classId }: { classId: string }) {
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);

  const [targetStudentId, setTargetStudentId] = useState<string | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [alertConfig, setAlertConfig] = useState<{
    isOpen: boolean;
    title?: string;
    message: string;
    variant: 'warning' | 'error' | 'success' | 'info';
  }>({
    isOpen: false,
    message: '',
    variant: 'success',
  });

  const fetchStudents = async () => {
    setLoading(true);
    const res = await getClassStudents(classId);
    if (res.success) {
      setStudents(res.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchStudents();
  }, [classId]);

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
      if (searchQuery.trim().length >= 2) {
        setIsSearching(true);
        const res = await searchStudents(searchQuery, undefined, classId);
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
  }, [searchQuery, classId]);

  const handleSelectStudent = (maSinhVien: string) => {
    setSearchQuery(maSinhVien);
    setShowResults(false);
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!searchQuery.trim()) return;
    
    setSubmitting(true);
    const res = await addStudentToClass(classId, searchQuery.trim());
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
    const res = await removeStudentFromClass(classId, targetStudentId);
    setSubmitting(false);
    setConfirmOpen(false);
    if (res.success) {
      setAlertConfig({
        isOpen: true,
        title: 'Thành công',
        message: 'Đã xóa sinh viên khỏi lớp thành công!',
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
        <form onSubmit={handleAdd} className={styles.formGroup}>
          <div className={styles.inputWrapper} ref={searchRef}>
            <label className={styles.label}>Thêm học sinh/sinh viên vào lớp</label>
            <input 
              type='text' 
              value={searchQuery} 
              onChange={e => setSearchQuery(e.target.value)} 
              onFocus={() => { if (searchResults.length > 0) setShowResults(true); }}
              placeholder='Nhập tên hoặc mã sinh viên (VD: DH52...)' 
              className={styles.input}
              autoComplete="off"
            />
            
            {showResults && (
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
                      <span className={styles.searchItemCode}>
                        {student.ma_sinh_vien} {student.lop?.ma_lop ? `(Hiện ở lớp: ${student.lop.ma_lop})` : '(Chưa có lớp)'}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className={styles.searchItem}>Không tìm thấy sinh viên phù hợp</div>
                )}
              </div>
            )}
          </div>
          <button 
            type='submit' 
            disabled={submitting || !searchQuery.trim()}
            className={styles.btnPrimary}
          >
            {submitting ? 'Đang xử lý...' : 'Thêm vào lớp'}
          </button>
        </form>
        {error && <p className={styles.errorText}>{error}</p>}
      </div>

      {loading ? (
        <div style={{ padding: '20px', textAlign: 'center', color: '#6b7280' }}>Đang tải danh sách học sinh...</div>
      ) : (
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>STT</th>
                <th className={styles.th}>Mã SV</th>
                <th className={styles.th}>Họ và tên</th>
                <th className={styles.th}>Ngày sinh</th>
                <th className={styles.th}>Giới tính</th>
                <th className={styles.th}>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {students.length === 0 ? (
                <tr>
                  <td colSpan={6} className={styles.emptyState}>Chưa có học sinh/sinh viên nào trong lớp này.</td>
                </tr>
              ) : (
                students.map((student, index) => (
                  <tr key={student.id} className={styles.tr}>
                    <td className={styles.td}>{index + 1}</td>
                    <td className={styles.td}>{student.ma_sinh_vien}</td>
                    <td className={styles.td}>{student.nguoi_dung?.ho_ten}</td>
                    <td className={styles.td}>{student.ngay_sinh || '---'}</td>
                    <td className={styles.td} style={{ textTransform: 'capitalize' }}>{student.gioi_tinh || '---'}</td>
                    <td className={styles.td}>
                      <button 
                        type="button"
                        onClick={() => handleRemoveClick(student.id)}
                        className={styles.btnDelete}
                      >
                        Xóa khỏi lớp
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
        message="Bạn có chắc chắn muốn xóa sinh viên này khỏi lớp hành chính không?"
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
