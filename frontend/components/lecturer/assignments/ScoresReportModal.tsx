'use client';

import React, { useState, useEffect } from 'react';
import styles from './AssignmentsManagement.module.css';
import { exportToExcel } from '@/utils/exportExcel';
import { getLecturerScoresReport } from '@/app/actions/lecturer-assignment';

interface ScoresReportModalProps {
  onClose: () => void;
}

interface ReportItem {
  secId: string;
  name: string;
  avgScore: number;
  highest: number;
  lowest: number;
  totalStudents: number;
  gradedCount?: number;
}

export default function ScoresReportModal({ onClose }: ScoresReportModalProps) {
  const [reportData, setReportData] = useState<ReportItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      setLoading(true);
      try {
        const data = await getLecturerScoresReport();
        if (isMounted) {
          setReportData(data || []);
        }
      } catch (error) {
        console.error('Failed to load scores report:', error);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    loadData();
    return () => { isMounted = false; };
  }, []);

  const handleExport = () => {
    const data = reportData.map((row, index) => ({
      'STT': index + 1,
      'Mã Lớp HP': row.secId,
      'Tên môn học': row.name,
      'Sĩ số': row.totalStudents,
      'Điểm Trung Bình': row.avgScore,
      'Điểm Cao nhất': row.highest,
      'Điểm Thấp nhất': row.lowest,
    }));
    exportToExcel(data, 'Bao_cao_diem_tong_hop', 'Báo cáo điểm');
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={`${styles.modalContent} ${styles.modalContentLarge}`}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>Báo cáo điểm bài tập theo lớp</h3>
          <button className={styles.btnCloseModal} onClick={onClose} type="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.tableContainer}>
            {loading ? (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>
                Đang tải dữ liệu điểm thực tế từ hệ thống...
              </div>
            ) : reportData.length === 0 ? (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>
                Chưa có lớp học phần hoặc dữ liệu điểm nào để báo cáo.
              </div>
            ) : (
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th className={styles.th}>Mã Lớp HP</th>
                    <th className={styles.th}>Tên môn học</th>
                    <th className={styles.th} style={{ textAlign: 'center' }}>Sĩ số</th>
                    <th className={styles.th} style={{ textAlign: 'center' }}>Điểm Trung Bình</th>
                    <th className={styles.th} style={{ textAlign: 'center' }}>Cao nhất</th>
                    <th className={styles.th} style={{ textAlign: 'center' }}>Thấp nhất</th>
                  </tr>
                </thead>
                <tbody>
                  {reportData.map((row, idx) => (
                    <tr key={idx} className={styles.tr}>
                      <td className={styles.td} style={{ fontWeight: 600 }}>{row.secId}</td>
                      <td className={styles.td}>{row.name}</td>
                      <td className={styles.td} style={{ textAlign: 'center' }}>{row.totalStudents}</td>
                      <td className={styles.td} style={{ textAlign: 'center', color: '#4f46e5', fontWeight: 600 }}>{row.avgScore}</td>
                      <td className={styles.td} style={{ textAlign: 'center', color: '#10b981' }}>{row.highest}</td>
                      <td className={styles.td} style={{ textAlign: 'center', color: '#dc2626' }}>{row.lowest}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          
          <div style={{ marginTop: '1rem', backgroundColor: '#f0f9ff', border: '1px solid #bae6fd', padding: '1rem', borderRadius: '0.5rem' }}>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: '#0369a1', marginBottom: '0.25rem' }}>Ghi chú</h4>
            <p style={{ fontSize: '0.875rem', color: '#0c4a6e' }}>
              Dữ liệu hiển thị điểm quy đổi theo thang điểm 10. Đây là tổng hợp trung bình của tất cả các bài tập đã trả điểm cho sinh viên trong lớp học phần tương ứng.
            </p>
          </div>
        </div>

        <div className={styles.modalFooter}>
          <button type="button" className={styles.btnSecondary} onClick={onClose}>
            Đóng
          </button>
          <button type="button" className={styles.btnPrimary} onClick={handleExport}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Xuất Excel
          </button>
        </div>
      </div>
    </div>
  );
}
