'use client';

import React from 'react';
import styles from './AdminCourseSections.module.css';

interface CourseSectionDashboardProps {
  sections?: any[];
  activeCount: number;
  lockedCount: number;
  completedCount: number;
  currentFilter: string;
  onFilterChange: (filter: string) => void;
  selectedSemester?: string;
  onSemesterChange?: (sem: string) => void;
  selectedYear?: string;
  onYearChange?: (year: string) => void;
}

export default function CourseSectionDashboard({
  sections = [],
  activeCount,
  lockedCount,
  completedCount,
  currentFilter,
  onFilterChange,
  selectedSemester = 'all',
  onSemesterChange,
  selectedYear = 'all',
  onYearChange
}: CourseSectionDashboardProps) {

  const formatSemesterLabel = (sem: string) => {
    if (sem === 'all') return 'Tất cả';
    const numMatch = sem.match(/\d+/);
    if (numMatch) {
      return `Học kỳ ${numMatch[0]}`;
    }
    if (sem.toLowerCase().includes('hè') || sem.toLowerCase().includes('he')) {
      return 'Học kỳ hè';
    }
    return sem;
  };

  const availableSemesters = React.useMemo(() => {
    const sems = new Set<string>(['HK1', 'HK2', 'HK3', 'HK4', 'HK5', 'HK6']);
    sections.forEach(s => {
      if (s.semester) {
        const numMatch = s.semester.match(/\d+/);
        if (numMatch) {
          sems.add(`HK${numMatch[0]}`);
        } else {
          sems.add(s.semester);
        }
      }
    });
    return Array.from(sems).sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)?.[0] || '99', 10);
      const numB = parseInt(b.match(/\d+/)?.[0] || '99', 10);
      if (numA !== numB) return numA - numB;
      return a.localeCompare(b);
    });
  }, [sections]);

  const availableYears = React.useMemo(() => {
    const years = new Set<string>();
    sections.forEach(s => {
      if (s.academicYear) {
        years.add(s.academicYear);
      }
    });
    return Array.from(years).sort().reverse();
  }, [sections]);

  const matchesSemester = (sec: any, semCode: string) => {
    if (semCode === 'all') return true;
    if (!sec.semester) return false;
    const numMatch = semCode.match(/\d+/);
    if (numMatch) {
      return sec.semester.includes(numMatch[0]);
    }
    return sec.semester === semCode;
  };

  const getSemesterCount = (semCode: string) => {
    return sections.filter(sec => {
      const matchStatus = currentFilter === 'all' || sec.status === currentFilter;
      const matchYear = !selectedYear || selectedYear === 'all' || sec.academicYear === selectedYear;
      return matchStatus && matchYear && matchesSemester(sec, semCode);
    }).length;
  };

  return (
    <div className={styles.leftColumn}>
      {/* System Overview */}
      <div className={`${styles.glassCard} ${styles.overviewCard}`}>
        <div className={styles.overviewGlow}></div>
        <h3 className={styles.overviewTitle}>TỔNG QUAN HỌC PHẦN</h3>
        
        <div className={styles.statList}>
          <div className={styles.statItem}>
            <div className={styles.statItemLeft}>
              <div className={styles.statIconBoxPrimary}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>class</span>
              </div>
              <span className={styles.statLabel}>Đang mở</span>
            </div>
            <span className={`${styles.statValue} ${styles.statValuePrimary}`}>{activeCount.toString().padStart(2, '0')}</span>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statItemLeft}>
              <div className={styles.statIconBoxSecondary}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>archive</span>
              </div>
              <span className={styles.statLabel}>Lưu trữ</span>
            </div>
            <span className={`${styles.statValue} ${styles.statValueSecondary}`}>{lockedCount.toString().padStart(2, '0')}</span>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statItemLeft}>
              <div className={styles.statIconBoxError}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>check_circle</span>
              </div>
              <span className={styles.statLabel}>Đã kết thúc</span>
            </div>
            <span className={`${styles.statValue} ${styles.statValueError}`}>{completedCount.toString().padStart(2, '0')}</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className={`${styles.glassCard} ${styles.filtersCard}`}>
        <h3 className={styles.filterTitle}>Bộ lọc dữ liệu</h3>
        <div>
          <span className={styles.filterLabel}>Trạng thái lớp học phần</span>
          <div className={styles.filterTags}>
            <button 
              className={`${styles.filterTag} ${currentFilter === 'all' ? styles.filterTagActive : ''}`}
              onClick={() => onFilterChange('all')}
            >
              Tất cả
            </button>
            <button 
              className={`${styles.filterTag} ${currentFilter === 'dang_mo' ? styles.filterTagActive : ''}`}
              onClick={() => onFilterChange('dang_mo')}
            >
              Đang mở
            </button>
            <button 
              className={`${styles.filterTag} ${currentFilter === 'da_khoa' ? styles.filterTagActive : ''}`}
              onClick={() => onFilterChange('da_khoa')}
            >
              Lưu trữ
            </button>
            <button 
              className={`${styles.filterTag} ${currentFilter === 'da_ket_thuc' ? styles.filterTagActive : ''}`}
              onClick={() => onFilterChange('da_ket_thuc')}
            >
              Đã kết thúc
            </button>
          </div>
        </div>

        {onSemesterChange && (
          <div style={{ marginTop: '1.5rem', borderTop: '1px solid #e0e3e5', paddingTop: '1.25rem' }}>
            <span className={styles.filterLabel} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '16px', color: '#3525cd' }}>calendar_month</span>
              Học kỳ
            </span>
            <div className={styles.filterTags} style={{ marginTop: '0.5rem' }}>
              <button
                type="button"
                className={`${styles.filterTag} ${selectedSemester === 'all' ? styles.filterTagActive : ''}`}
                onClick={() => onSemesterChange('all')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                Tất cả
                <span style={{
                  background: selectedSemester === 'all' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.06)',
                  padding: '2px 6px',
                  borderRadius: '10px',
                  fontSize: '11px',
                  fontWeight: 700
                }}>{getSemesterCount('all')}</span>
              </button>

              {availableSemesters.map(sem => {
                const count = getSemesterCount(sem);
                const label = formatSemesterLabel(sem);
                return (
                  <button
                    key={sem}
                    type="button"
                    className={`${styles.filterTag} ${selectedSemester === sem ? styles.filterTagActive : ''}`}
                    onClick={() => onSemesterChange(sem)}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    {label}
                    <span style={{
                      background: selectedSemester === sem ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.06)',
                      padding: '2px 6px',
                      borderRadius: '10px',
                      fontSize: '11px',
                      fontWeight: 700
                    }}>{count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {onYearChange && availableYears.length > 0 && (
          <div style={{ marginTop: '1.25rem' }}>
            <span className={styles.filterLabel}>Năm học</span>
            <select
              className={styles.yearSelect}
              style={{
                width: '100%',
                padding: '0.5rem 0.75rem',
                borderRadius: '0.5rem',
                border: '1px solid #c7c4d8',
                fontSize: '0.8125rem',
                color: '#191c1e',
                background: '#fafbfc'
              }}
              value={selectedYear}
              onChange={e => onYearChange(e.target.value)}
            >
              <option value="all">Tất cả năm học</option>
              {availableYears.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
}
