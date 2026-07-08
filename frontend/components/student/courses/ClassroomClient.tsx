'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '@/components/student/courses/ClassroomView.module.css';

interface ClassroomClientProps {
  section: any;
  posts: any[];
  assignments: any[];
  quizzes: any[];
}

export default function ClassroomClient({ section, posts, assignments, quizzes }: ClassroomClientProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'stream' | 'classwork' | 'people'>('stream');

  const courseCode = section.ten_lop || section.ma_lop_hoc_phan || "Mã lớp";
  const courseName = section.mon_hoc?.ten_mon || "Tên môn học";
  const teacherName = section.giang_vien?.nguoi_dung?.ho_ten || 'Giảng viên chưa cập nhật';
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', { day: '2-digit', month: 'short' });
  };

  return (
    <div className={styles.pageContainer}>
      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <div className={styles.bannerDecor}></div>
        <div className={styles.bannerContent}>
          <span className={styles.bannerSemester}>
            Học kỳ {section.hoc_ky} - {section.nam_hoc}
          </span>
          <h1 className={styles.courseTitle}>{courseCode}</h1>
          <p className={styles.courseSubtitle}>{courseName} • GV: {teacherName}</p>
        </div>
      </section>

      {/* Content Grid */}
      <section className={styles.contentGrid}>
        {/* Main Feed Column */}
        <div className={styles.feedColumn}>
          {/* Secondary Nav tabs */}
          <div className={styles.tabsContainer}>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'stream' ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveTab('stream')}
            >
              Bảng tin
            </button>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'classwork' ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveTab('classwork')}
            >
              Bài tập trên lớp
            </button>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'people' ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveTab('people')}
            >
              Mọi người
            </button>
          </div>

          {activeTab === 'stream' && (
            <>
              {/* Create Post Box */}
              <div className={styles.announceBox}>
                <div className={styles.avatar}>
                  <span className="material-symbols-outlined">person</span>
                </div>
                <button className={styles.announceText}>
                  Thông báo nội dung nào đó cho lớp học của bạn...
                </button>
                <div className={styles.actionIcons}>
                  <button className={styles.iconBtn}>
                    <span className="material-symbols-outlined">attachment</span>
                  </button>
                  <button className={styles.iconBtn}>
                    <span className="material-symbols-outlined">image</span>
                  </button>
                </div>
              </div>

              {/* Feed Posts */}
              {posts.map((post) => (
                post.loai_bai_viet === 'bai_tap' ? (
                  <Link key={post.id} href={`/student/assignments/${post.bai_tap_id || post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className={styles.memberItem} style={{ border: '1px solid var(--color-outline-variant)', borderRadius: '8px', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', marginBottom: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div className={styles.avatar} style={{ backgroundColor: 'var(--color-primary)', color: 'white', borderRadius: '50%' }}>
                          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>assignment</span>
                        </div>
                        <div>
                          <div style={{ fontWeight: 500, fontSize: '16px' }}>{post.tieu_de}</div>
                          <div style={{ fontSize: '12px', color: '#5f6368' }}>Ngày đăng: {formatDate(post.ngay_tao)}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <article 
                    key={post.id} 
                    className={styles.postCard} 
                    style={{ cursor: 'pointer' }}
                    onClick={() => router.push(`/student/posts/${post.id}`)}
                  >
                    <div className={styles.postHeader}>
                      <div className={styles.postAuthorInfo}>
                        <div className={styles.avatar}>
                          <span className="material-symbols-outlined">person</span>
                        </div>
                        <div>
                          <h4 className={styles.postAuthorName}>{post.nguoi_tao?.ho_ten || 'Người dùng'}</h4>
                          <p className={styles.postDate}>{formatDate(post.ngay_tao)} • {post.nguoi_tao?.vai_tro === 'giang_vien' ? 'Giảng viên' : 'Sinh viên'}</p>
                        </div>
                      </div>
                      <button className={styles.postMenuBtn} onClick={(e) => e.stopPropagation()}>
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </div>
                    
                    <div className={styles.postBody}>
                      {post.tieu_de && <strong>{post.tieu_de}<br/></strong>}
                      {post.noi_dung}
                      {post.tep_tin_bai_viet && post.tep_tin_bai_viet.length > 0 && (
                        <div style={{ marginTop: '12px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                          {post.tep_tin_bai_viet.map((tt: any) => (
                            <span key={tt.id} style={{ display: 'inline-block', padding: '6px 12px', backgroundColor: 'var(--color-surface-container-high)', borderRadius: '6px', fontSize: '13px', color: 'var(--color-on-surface)', border: '1px solid var(--color-outline-variant)' }}>
                              <span className="material-symbols-outlined" style={{ fontSize: '16px', verticalAlign: 'middle', marginRight: '6px' }}>attach_file</span>
                              {tt.tep_tin?.ten_file}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                )
              ))}

              {posts.length === 0 && (
                <div style={{ padding: '2rem', textAlign: 'center', color: '#5f6368', background: 'var(--color-surface-container-lowest)', borderRadius: '1rem', border: '1px solid color-mix(in srgb, var(--color-outline-variant) 10%, transparent)' }}>
                  Chưa có bài đăng nào trong lớp học này.
                </div>
              )}
            </>
          )}

          {activeTab === 'classwork' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {/* Assignments Section */}
              <div className={styles.widget} style={{ border: 'none', padding: '1.5rem', background: 'var(--color-surface-container-lowest)' }}>
                <h2 style={{ color: 'var(--color-primary)', fontSize: '20px', fontWeight: 600, marginBottom: '1rem', borderBottom: '1px solid var(--color-primary)', paddingBottom: '0.5rem' }}>
                  <span className="material-symbols-outlined" style={{ verticalAlign: 'middle', marginRight: '8px' }}>assignment</span>
                  Bài tập
                </h2>
                {assignments && assignments.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {assignments.map(a => (
                      <Link key={a.id} href={`/student/assignments/${a.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className={styles.memberItem} style={{ border: '1px solid var(--color-outline-variant)', borderRadius: '8px', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div className={styles.avatar} style={{ backgroundColor: 'var(--color-primary)', color: 'white', borderRadius: '50%' }}>
                              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>assignment</span>
                            </div>
                            <div>
                              <div style={{ fontWeight: 500, fontSize: '16px' }}>{a.tieu_de}</div>
                              <div style={{ fontSize: '12px', color: '#5f6368' }}>Hạn nộp: {a.han_nop ?? 'Không có hạn'}</div>
                            </div>
                          </div>
                          <div>
                            {a.submission ? (
                              a.submission.trang_thai === 'da_cham' ? (
                                <span style={{ padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 600, backgroundColor: '#dcfce7', color: '#15803d' }}>
                                  Đã chấm: {a.submission.diem ?? 0} đ
                                </span>
                              ) : a.submission.trang_thai === 'nop_muon' ? (
                                <span style={{ padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 600, backgroundColor: '#fef3c7', color: '#b45309' }}>
                                  Nộp muộn
                                </span>
                              ) : (
                                <span style={{ padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 600, backgroundColor: '#dbeafe', color: '#1d4ed8' }}>
                                  Đã nộp
                                </span>
                              )
                            ) : (
                              <span style={{ padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 600, backgroundColor: '#f1f5f9', color: '#64748b' }}>
                                Chưa nộp
                              </span>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div style={{ color: '#5f6368' }}>Chưa có bài tập nào.</div>
                )}
              </div>

              {/* Quizzes Section */}
              <div className={styles.widget} style={{ border: 'none', padding: '1.5rem', background: 'var(--color-surface-container-lowest)' }}>
                <h2 style={{ color: 'var(--color-primary)', fontSize: '20px', fontWeight: 600, marginBottom: '1rem', borderBottom: '1px solid var(--color-primary)', paddingBottom: '0.5rem' }}>
                  <span className="material-symbols-outlined" style={{ verticalAlign: 'middle', marginRight: '8px' }}>quiz</span>
                  Bài kiểm tra
                </h2>
                {quizzes && quizzes.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {quizzes.map(q => {
                      const canTake = q.attemptsUsed < q.maxAttempts;
                      const hasAttempt = q.attemptsUsed > 0;
                      return (
                        <div key={q.id} className={styles.memberItem} style={{ border: '1px solid var(--color-outline-variant)', borderRadius: '8px', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div className={styles.avatar} style={{ backgroundColor: 'var(--color-primary)', color: 'white', borderRadius: '50%' }}>
                              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>quiz</span>
                            </div>
                            <div>
                              <div style={{ fontWeight: 500, fontSize: '16px' }}>{q.title}</div>
                              <div style={{ fontSize: '12px', color: '#5f6368' }}>{q.questionCount} câu hỏi • {q.durationMinutes} phút</div>
                            </div>
                          </div>
                          <div style={{ display: 'flex', gap: '0.5rem' }}>
                            {hasAttempt && (
                              <Link href={`/student/quizzes/${q.id}/results`} style={{ textDecoration: 'none' }}>
                                <button className={styles.buttonSecondary} style={{ padding: '0.5rem 1rem', fontSize: '14px' }}>
                                  Xem kết quả {q.status === 'completed' ? `(${q.lastScore}đ)` : ''}
                                </button>
                              </Link>
                            )}
                            {canTake && (
                              <Link href={`/student/quizzes/${q.id}/take`} style={{ textDecoration: 'none' }}>
                                <button className={styles.buttonPrimary} style={{ padding: '0.5rem 1rem', fontSize: '14px' }}>
                                  Làm bài
                                </button>
                              </Link>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div style={{ color: '#5f6368' }}>Chưa có bài kiểm tra nào.</div>
                )}
              </div>

              {/* Resources Section */}
              <div className={styles.widget} style={{ border: 'none', padding: '1.5rem', background: 'var(--color-surface-container-lowest)' }}>
                <h2 style={{ color: 'var(--color-primary)', fontSize: '20px', fontWeight: 600, marginBottom: '1rem', borderBottom: '1px solid var(--color-primary)', paddingBottom: '0.5rem' }}>
                  <span className="material-symbols-outlined" style={{ verticalAlign: 'middle', marginRight: '8px' }}>book</span>
                  Tài nguyên
                </h2>
                {posts && posts.filter(p => p.loai_bai_viet === 'tai_lieu').length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {posts.filter(p => p.loai_bai_viet === 'tai_lieu').map(r => (
                      <Link key={r.id} href={`/student/posts/${r.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className={styles.memberItem} style={{ border: '1px solid var(--color-outline-variant)', borderRadius: '8px', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div className={styles.avatar} style={{ backgroundColor: 'var(--color-primary)', color: 'white', borderRadius: '50%' }}>
                              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>book</span>
                            </div>
                            <div>
                              <div style={{ fontWeight: 500, fontSize: '16px' }}>{r.tieu_de}</div>
                              <div style={{ fontSize: '12px', color: '#5f6368' }}>{r.noi_dung}</div>
                              {r.tep_tin_bai_viet && r.tep_tin_bai_viet.length > 0 && (
                                <div style={{ marginTop: '8px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                  {r.tep_tin_bai_viet.map((tt: any) => (
                                    <span key={tt.id} style={{ display: 'inline-block', padding: '4px 8px', backgroundColor: 'var(--color-surface-container-high)', borderRadius: '4px', fontSize: '12px', color: 'var(--color-on-surface)' }}>
                                      <span className="material-symbols-outlined" style={{ fontSize: '14px', verticalAlign: 'middle', marginRight: '4px' }}>attach_file</span>
                                      {tt.tep_tin?.ten_file}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div style={{ color: '#5f6368' }}>Chưa có tài nguyên nào.</div>
                )}
              </div>

            </div>
          )}

          {activeTab === 'people' && (
            <div className={styles.widget} style={{ border: 'none' }}>
              <div style={{ borderBottom: '1px solid var(--color-primary)', paddingBottom: '1rem', marginBottom: '1rem' }}>
                <h2 style={{ color: 'var(--color-primary)', fontSize: '24px', fontWeight: 600 }}>Giáo viên</h2>
              </div>
              <div className={styles.memberItem} style={{ marginBottom: '2rem' }}>
                 <div className={styles.avatar} style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>GV</div>
                 <span style={{ fontSize: '1rem', fontWeight: 500 }}>{teacherName}</span>
              </div>

              <div style={{ borderBottom: '1px solid var(--color-primary)', paddingBottom: '1rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ color: 'var(--color-primary)', fontSize: '24px', fontWeight: 600 }}>Sinh viên</h2>
                <span style={{ fontSize: '14px', color: 'var(--color-primary)', fontWeight: 500 }}>{section.sinh_viens?.length || 0} sinh viên</span>
              </div>
              
              <div>
                {section.sinh_viens?.map((sv: any) => (
                  <div key={sv.id} className={styles.memberItem} style={{ borderBottom: '1px solid color-mix(in srgb, var(--color-outline-variant) 20%, transparent)', paddingBottom: '1rem' }}>
                    <div className={styles.avatar}>SV</div>
                    <span style={{ fontSize: '14px', fontWeight: 500 }}>{sv.nguoi_dung?.ho_ten || sv.ma_sinh_vien}</span>
                  </div>
                ))}
                
                {(!section.sinh_viens || section.sinh_viens.length === 0) && (
                  <div style={{ padding: '1rem', color: '#5f6368' }}>Chưa có sinh viên nào.</div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar (Widgets) */}
        <aside className={styles.sidebarColumn}>
          {/* Upcoming Deadlines Widget */}
          <div className={styles.widget}>
            <div className={styles.widgetHeader}>
              <h3 className={styles.widgetTitle}>Sắp đến hạn</h3>
              <span className="material-symbols-outlined text-primary">event</span>
            </div>
            <div className={styles.widgetList}>
              {(() => {
                const upcomingAssignments = (assignments || []).filter(a => {
                  if (a.submission) return false;
                  if (!a.han_nop || a.han_nop === 'Không có hạn') return false;
                  const parts = a.han_nop.split(', ');
                  if (parts.length !== 2) return false;
                  const time = parts[0];
                  const date = parts[1];
                  const [hour, minute] = time.split(':');
                  const [day, month, year] = date.split('/');
                  const dueDate = new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute));
                  
                  const now = new Date();
                  const twoDaysFromNow = new Date(now.getTime() + 48 * 60 * 60 * 1000);
                  
                  return dueDate > now && dueDate <= twoDaysFromNow;
                });

                if (upcomingAssignments.length > 0) {
                  return upcomingAssignments.map(a => (
                    <div key={a.id} className={styles.widgetItem}>
                      <Link href={`/student/assignments/${a.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <p className={styles.widgetItemTitle} style={{ cursor: 'pointer', color: 'var(--color-primary)' }}>{a.tieu_de}</p>
                      </Link>
                      <p className={styles.widgetItemDesc}>{a.han_nop}</p>
                    </div>
                  ));
                } else {
                  return <div style={{ padding: '0.5rem 0', color: '#5f6368', fontSize: '13px' }}>Tuyệt vời, không có bài tập nào sắp đến hạn!</div>;
                }
              })()}
            </div>
          </div>

          {/* Teachers Widget */}
          <div className={styles.widget}>
            <h3 className={styles.widgetTitle} style={{ marginBottom: '1.5rem' }}>Giảng viên & Trợ giảng</h3>
            
            <div className={styles.memberItem}>
              <div className={styles.avatar}>GV</div>
              <div className={styles.memberInfo}>
                <p className={styles.memberName}>{teacherName}</p>
                <p className={styles.memberRole}>Giảng viên chính</p>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}

