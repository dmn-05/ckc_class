'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './StudentDashboard.module.css';
import { getStudentCourseSections } from '@/app/actions/student-section';
import { getStudentAssignments } from '@/app/actions/student-assignment';
import { getStudentQuizzes } from '@/app/actions/student-quiz';

export default function StudentDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'sections' | 'assignments' | 'quizzes'>('sections');

  const [enrolledSections, setEnrolledSections] = useState<any[]>([]);
  const [pendingAssignments, setPendingAssignments] = useState<any[]>([]);
  const [pendingQuizzes, setPendingQuizzes] = useState<any[]>([]);
  const [studentName, setStudentName] = useState<string>('');

  useEffect(() => {
    async function loadDashboardData() {
      try {
        const [sectionsData, assignmentsData, quizzesData] = await Promise.all([
          getStudentCourseSections().catch(() => []),
          getStudentAssignments().catch(() => []),
          getStudentQuizzes().then(res => res.data || []).catch(() => []),
        ]);

        const sections = Array.isArray(sectionsData) ? sectionsData : [];
        setEnrolledSections(sections);

        const unsubmittedAssignments = (Array.isArray(assignmentsData) ? assignmentsData : [])
          .filter((a: any) => !a.submission);
        setPendingAssignments(unsubmittedAssignments);

        const unattemptedQuizzes = (Array.isArray(quizzesData) ? quizzesData : [])
          .filter((q: any) => (q.attemptsUsed || 0) === 0 && q.status !== 'completed');
        setPendingQuizzes(unattemptedQuizzes);

        // Try getting user name from cookies/storage if available
        try {
          const userStr = localStorage.getItem('user');
          if (userStr) {
            const userObj = JSON.parse(userStr);
            setStudentName(userObj?.ho_ten || userObj?.sinhVien?.ho_ten || 'bạn');
          }
        } catch {
          setStudentName('bạn');
        }
      } catch (err) {
        console.error('Lỗi khi tải dữ liệu dashboard sinh viên:', err);
      } finally {
        setLoading(false);
      }
    }
    loadDashboardData();
  }, []);

  if (loading) {
    return (
      <div className={styles.pageContainer}>
        <div style={{ textAlign: 'center', padding: '5rem 1rem', color: '#64748b' }}>
          Đang tổng hợp thông tin học tập của bạn...
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      {/* Hero Welcome Card */}
      <div className={styles.heroCard}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Xin chào{studentName && studentName !== 'bạn' ? `, ${studentName}` : ''}! 👋
          </h1>
          <p className={styles.heroSubtitle}>
            Chào mừng bạn đến với Cổng thông tin học tập. Dưới đây là thống kê các lớp học phần đang tham gia cùng danh sách bài tập và bài kiểm tra cần hoàn thành.
          </p>
        </div>
      </div>

      {/* 3 Interactive Stat Cards */}
      <div className={styles.statsGrid}>
        {/* Enrolled Courses Stat */}
        <div
          className={`${styles.statCard} ${activeTab === 'sections' ? styles.statCardActive : ''}`}
          onClick={() => setActiveTab('sections')}
        >
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>Lớp đang học</span>
            <span className={styles.statNumber}>{enrolledSections.length}</span>
            <span className={styles.statDesc}>Lớp học phần đã đăng ký</span>
          </div>
          <div className={styles.statIconBox} style={{ background: '#e0e7ff', color: '#4338ca' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        </div>

        {/* Pending Assignments Stat */}
        <div
          className={`${styles.statCard} ${activeTab === 'assignments' ? styles.statCardActive : ''}`}
          onClick={() => setActiveTab('assignments')}
        >
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>Bài tập chưa làm</span>
            <span className={styles.statNumber} style={{ color: pendingAssignments.length > 0 ? '#d97706' : '#0f172a' }}>
              {pendingAssignments.length}
            </span>
            <span className={styles.statDesc}>Bài tập được giao chưa nộp</span>
          </div>
          <div className={styles.statIconBox} style={{ background: '#fef3c7', color: '#d97706' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>

        {/* Pending Quizzes Stat */}
        <div
          className={`${styles.statCard} ${activeTab === 'quizzes' ? styles.statCardActive : ''}`}
          onClick={() => setActiveTab('quizzes')}
        >
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>Bài kiểm tra chưa làm</span>
            <span className={styles.statNumber} style={{ color: pendingQuizzes.length > 0 ? '#7c3aed' : '#0f172a' }}>
              {pendingQuizzes.length}
            </span>
            <span className={styles.statDesc}>Bài kiểm tra chờ làm</span>
          </div>
          <div className={styles.statIconBox} style={{ background: '#f3e8ff', color: '#7c3aed' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className={styles.tabsSection}>
        <div className={styles.tabsNav}>
          <button
            className={`${styles.tabButton} ${activeTab === 'sections' ? styles.tabButtonActive : ''}`}
            onClick={() => setActiveTab('sections')}
          >
            <span>📚 Lớp đang học</span>
            <span className={`${styles.badge} ${styles.badgePrimary}`}>{enrolledSections.length}</span>
          </button>

          <button
            className={`${styles.tabButton} ${activeTab === 'assignments' ? styles.tabButtonActive : ''}`}
            onClick={() => setActiveTab('assignments')}
          >
            <span>📝 Bài tập chưa làm</span>
            <span className={`${styles.badge} ${pendingAssignments.length > 0 ? styles.badgeWarning : styles.badgePrimary}`}>
              {pendingAssignments.length}
            </span>
          </button>

          <button
            className={`${styles.tabButton} ${activeTab === 'quizzes' ? styles.tabButtonActive : ''}`}
            onClick={() => setActiveTab('quizzes')}
          >
            <span>⏱️ Bài kiểm tra chưa làm</span>
            <span className={`${styles.badge} ${pendingQuizzes.length > 0 ? styles.badgeDanger : styles.badgePrimary}`}>
              {pendingQuizzes.length}
            </span>
          </button>
        </div>

        {/* Tab Content: Lớp đang học */}
        {activeTab === 'sections' && (
          <div>
            {enrolledSections.length > 0 ? (
              <div className={styles.cardsGrid}>
                {enrolledSections.map((sec: any) => {
                  const courseTitle = sec.ten_lop || sec.mon_hoc?.ten_mon || 'Lớp học phần';
                  const courseCode = sec.ma_lop_hoc_phan || '';
                  const semester = sec.hoc_ky ? `Học kỳ ${sec.hoc_ky} ${sec.nam_hoc || ''}` : '';
                  const lecturerName = sec.giang_vien?.nguoi_dung?.ho_ten || 'Giảng viên';

                  return (
                    <div key={sec.id} className={styles.itemCard}>
                      <div>
                        <div className={styles.cardHeader}>
                          <span style={{ fontWeight: 700, color: '#4338ca', fontSize: '0.85rem', background: '#e0e7ff', padding: '0.25rem 0.65rem', borderRadius: '6px' }}>
                            {courseCode || 'LHP'}
                          </span>
                          {semester && (
                            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{semester}</span>
                          )}
                        </div>
                        <h3 className={styles.cardTitle}>{courseTitle}</h3>
                        <p className={styles.cardSub}>Giảng viên: {lecturerName}</p>
                      </div>

                      <div className={styles.cardFooter}>
                        <button
                          className={styles.actionButton}
                          onClick={() => router.push(`/student/courses/${sec.id}`)}
                        >
                          <span>Vào lớp học</span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <div style={{ fontSize: '3rem' }}>📭</div>
                <h3 className={styles.emptyTitle}>Chưa đăng ký lớp học phần nào</h3>
                <p className={styles.emptyText}>
                  Bạn hiện chưa có lớp học phần nào đang tham gia. Vui lòng liên hệ khoa hoặc phòng đào tạo nếu cần hỗ trợ.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Tab Content: Bài tập chưa làm */}
        {activeTab === 'assignments' && (
          <div>
            {pendingAssignments.length > 0 ? (
              <div className={styles.cardsGrid}>
                {pendingAssignments.map((asm: any) => (
                  <div key={asm.id} className={styles.itemCard}>
                    <div>
                      <div className={styles.cardHeader}>
                        <span className={`${styles.badge} ${styles.badgeWarning}`}>Chưa nộp</span>
                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748b' }}>
                          Tối đa: {asm.diem_toi_da} đ
                        </span>
                      </div>
                      <h3 className={styles.cardTitle}>{asm.tieu_de}</h3>
                      <p className={styles.cardSub}>{asm.ten_lop || asm.ten_mon}</p>

                      <div className={styles.cardMeta}>
                        <div className={styles.metaItem}>
                          <span>📅 Hạn nộp:</span>
                          <strong style={{ color: '#0f172a' }}>{asm.han_nop || 'Không giới hạn'}</strong>
                        </div>
                      </div>
                    </div>

                    <div className={styles.cardFooter}>
                      <button
                        className={styles.actionButton}
                        style={{ background: '#d97706' }}
                        onClick={() => router.push(`/student/assignments/${asm.id}`)}
                      >
                        <span>Nộp bài ngay</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <div style={{ fontSize: '3rem' }}>🎉</div>
                <h3 className={styles.emptyTitle}>Tuyệt vời! Bạn đã hoàn thành tất cả bài tập</h3>
                <p className={styles.emptyText}>
                  Hiện không còn bài tập nào được giao mà bạn chưa hoàn thành. Hãy tiếp tục duy trì phong độ nhé!
                </p>
              </div>
            )}
          </div>
        )}

        {/* Tab Content: Bài kiểm tra chưa làm */}
        {activeTab === 'quizzes' && (
          <div>
            {pendingQuizzes.length > 0 ? (
              <div className={styles.cardsGrid}>
                {pendingQuizzes.map((qz: any) => (
                  <div key={qz.id} className={styles.itemCard}>
                    <div>
                      <div className={styles.cardHeader}>
                        <span className={`${styles.badge} ${styles.badgeDanger}`}>Chưa làm</span>
                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748b' }}>
                          {qz.questionCount} câu hỏi
                        </span>
                      </div>
                      <h3 className={styles.cardTitle}>{qz.title}</h3>
                      <p className={styles.cardSub}>{qz.subjectName}</p>

                      <div className={styles.cardMeta}>
                        <div className={styles.metaItem}>
                          <span>⏱️ Thời gian làm bài:</span>
                          <strong style={{ color: '#0f172a' }}>{qz.durationMinutes} phút</strong>
                        </div>
                      </div>
                    </div>

                    <div className={styles.cardFooter}>
                      <button
                        className={styles.actionButton}
                        style={{ background: '#7c3aed' }}
                        onClick={() => router.push(`/student/quizzes/${qz.id}/take`)}
                      >
                        <span>Làm bài ngay</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <div style={{ fontSize: '3rem' }}>✨</div>
                <h3 className={styles.emptyTitle}>Hoàn hảo! Không có bài kiểm tra chờ làm</h3>
                <p className={styles.emptyText}>
                  Bạn đã làm xong toàn bộ bài kiểm tra được giao trong các lớp học phần hiện tại.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
