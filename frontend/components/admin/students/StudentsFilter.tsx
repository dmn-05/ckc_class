import React from 'react';
import styles from './AdminStudents.module.css';

export default function StudentsFilter() {
  return (
    <div className={styles.card}>
      <h3 className={`${styles.cardTitle} ${styles.cardTitleBlack}`}>
        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>tune</span>
        Bộ lọc
      </h3>
      
      <div>
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>KHOA</label>
          <select className={styles.filterSelect}>
            <option>Tất cả các khoa</option>
            <option>Công nghệ thông tin</option>
            <option>Cơ khí</option>
            <option>Điện - Điện tử</option>
          </select>
        </div>
        
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>TRẠNG THÁI</label>
          <div className={styles.checkboxList}>
            <label className={styles.checkboxItem}>
              <input defaultChecked className={styles.checkboxInput} type="checkbox"/>
              <span className={styles.checkboxText}>Đang học</span>
            </label>
            <label className={styles.checkboxItem}>
              <input className={styles.checkboxInput} type="checkbox"/>
              <span className={styles.checkboxText}>Đã tốt nghiệp</span>
            </label>
            <label className={styles.checkboxItem}>
              <input className={styles.checkboxInput} type="checkbox"/>
              <span className={styles.checkboxText}>Bảo lưu</span>
            </label>
          </div>
        </div>
      </div>
      
      <button className={styles.filterApplyBtn}>
        Áp dụng bộ lọc
      </button>
    </div>
  );
}
