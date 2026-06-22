import React from 'react';
import styles from './AdminStudents.module.css';

interface StudentsFilterProps {
  facultyFilter: string;
  onFacultyChange: (value: string) => void;
  statusFilter: string[];
  onStatusChange: (value: string[]) => void;
}

export default function StudentsFilter({
  facultyFilter,
  onFacultyChange,
  statusFilter,
  onStatusChange
}: StudentsFilterProps) {
  const handleStatusToggle = (status: string) => {
    if (statusFilter.includes(status)) {
      onStatusChange(statusFilter.filter(s => s !== status));
    } else {
      onStatusChange([...statusFilter, status]);
    }
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle} style={{ color: '#3525cd' }}>
        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>tune</span>
        Bộ lọc
      </h3>
      
      <div>
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>KHOA</label>
          <select 
            className={styles.filterSelect}
            value={facultyFilter}
            onChange={(e) => onFacultyChange(e.target.value)}
          >
            <option value="all">Tất cả các khoa</option>
            <option value="công nghệ thông tin">Công nghệ thông tin</option>
            <option value="cơ khí">Cơ khí</option>
            <option value="điện">Điện - Điện tử</option>
          </select>
        </div>
        
        <div className={styles.filterGroup} style={{ marginBottom: 0 }}>
          <label className={styles.filterLabel}>TRẠNG THÁI</label>
          <div className={styles.checkboxList}>
            <label className={styles.checkboxItem}>
              <input 
                className={styles.checkboxInput} 
                type="checkbox"
                checked={statusFilter.includes('active')}
                onChange={() => handleStatusToggle('active')}
                style={{ accentColor: '#3525cd' }}
              />
              <span className={styles.checkboxText}>Đang học</span>
            </label>
            <label className={styles.checkboxItem}>
              <input 
                className={styles.checkboxInput} 
                type="checkbox"
                checked={statusFilter.includes('graduated')}
                onChange={() => handleStatusToggle('graduated')}
                style={{ accentColor: '#3525cd' }}
              />
              <span className={styles.checkboxText}>Đã tốt nghiệp</span>
            </label>
            <label className={styles.checkboxItem}>
              <input 
                className={styles.checkboxInput} 
                type="checkbox"
                checked={statusFilter.includes('reserved')}
                onChange={() => handleStatusToggle('reserved')}
                style={{ accentColor: '#3525cd' }}
              />
              <span className={styles.checkboxText}>Bảo lưu</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
