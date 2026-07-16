'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '@/components/student/courses/ClassroomView.module.css';
import { deleteLecturerAssignment } from '@/app/actions/lecturer-assignment';
import { deleteLecturerQuiz } from '@/app/actions/lecturer-quiz';
import { deleteLecturerResource } from '@/app/actions/lecturer-resource';
import ConfirmModal from '@/components/common/ConfirmModal';
import { authHeaders } from '@/lib/auth';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

interface LecturerClassroomClientProps {
  section: any;
  posts: any[];
  assignments: any[];
  quizzes: any[];
  resources?: any[];
  students: any[];
}

export default function LecturerClassroomClient({
  section,
  posts,
  assignments,
  quizzes,
  resources = [],
  students,
}: LecturerClassroomClientProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'stream' | 'classwork' | 'people'>('stream');

  const [assignmentList, setAssignmentList] = useState<any[]>(assignments || []);
  const [quizList, setQuizList] = useState<any[]>(quizzes || []);
  const [resourceList, setResourceList] = useState<any[]>(resources || []);

  React.useEffect(() => {
    setAssignmentList(assignments || []);
  }, [assignments]);

  React.useEffect(() => {
    setQuizList(quizzes || []);
  }, [quizzes]);

  React.useEffect(() => {
    setResourceList(resources || []);
  }, [resources]);

  const [postList, setPostList] = useState<any[]>(posts || []);
  React.useEffect(() => {
    setPostList(posts || []);
  }, [posts]);

  const [deleteTarget, setDeleteTarget] = useState<{
    id: string | number;
    type: 'assignment' | 'quiz' | 'resource' | 'post';
    title?: string;
  } | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteAssignment = (e: React.MouseEvent, item: any) => {
    e.stopPropagation();
    setDeleteTarget({ id: item.id, type: 'assignment', title: item.title || item.tieu_de });
  };

  const handleDeleteQuiz = (e: React.MouseEvent, item: any) => {
    e.stopPropagation();
    setDeleteTarget({ id: item.id, type: 'quiz', title: item.title || item.tieu_de });
  };

  const handleDeleteResource = (e: React.MouseEvent, item: any) => {
    e.stopPropagation();
    setDeleteTarget({ id: item.id, type: 'resource', title: item.title || item.tieu_de });
  };

  const handleDeletePost = (e: React.MouseEvent, item: any) => {
    e.stopPropagation();
    setDeleteTarget({ id: item.id, type: 'post', title: item.title || item.tieu_de || 'Bài viết' });
  };

  const executeDelete = async () => {
    if (!deleteTarget) return;
    setIsDeleting(true);
    try {
      const idStr = String(deleteTarget.id);
      if (deleteTarget.type === 'assignment') {
        await deleteLecturerAssignment(idStr);
        setAssignmentList(prev => prev.filter(item => String(item.id) !== idStr));
      } else if (deleteTarget.type === 'quiz') {
        await deleteLecturerQuiz(idStr);
        setQuizList(prev => prev.filter(item => String(item.id) !== idStr));
      } else if (deleteTarget.type === 'resource') {
        await deleteLecturerResource(idStr);
        setResourceList(prev => prev.filter(item => String(item.id) !== idStr));
      } else if (deleteTarget.type === 'post') {
        const response = await fetch(`${API_BASE_URL}/lecturer/posts/${idStr}`, {
          method: 'DELETE',
          headers: { 'Accept': 'application/json', ...authHeaders() }
        });
        if (!response.ok) {
          const err = await response.json();
          throw new Error(err.message || "Xóa bài viết thất bại.");
        }
        setPostList(prev => prev.filter(item => String(item.id) !== idStr));
      }
      setDeleteTarget(null);
      router.refresh();
    } catch (err: any) {
      alert(err.message || "Xóa thất bại.");
    } finally {
      setIsDeleting(false);
    }
  };

  const streamFeed = React.useMemo(() => {
    const items: any[] = [];
    const seenIds = new Set<string>();

    (postList || []).forEach(post => {
      if (post.loai_bai_viet === 'bai_tap') {
        items.push({
          id: `post-${post.id}`,
          type: 'assignment',
          title: post.tieu_de,
          date: post.ngay_tao,
          href: `/lecturer/assignments/${post.bai_tap_id || post.id}/submissions?sectionId=${section.id}`
        });
      } else if (post.loai_bai_viet === 'bai_kiem_tra') {
        // Skip duplicate post record for quiz; quizzes array contains full quiz details
      } else {
        items.push({
          id: `post-${post.id}`,
          type: 'post',
          date: post.ngay_tao,
          post: post
        });
      }
    });

    (quizList || []).forEach(quiz => {
      if (!seenIds.has(String(quiz.id))) {
        seenIds.add(String(quiz.id));
        items.push({
          id: `quiz-${quiz.id}`,
          type: 'quiz',
          title: quiz.title || quiz.tieu_de || 'Bài kiểm tra',
          date: quiz.ngay_tao || quiz.createdAt || quiz.startTime || new Date().toISOString(),
          href: `/lecturer/quizzes/${quiz.id}/results?sectionId=${section.id}`
        });
      }
    });

    return items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [postList, quizList]);

  const courseCode = section.ma_lop_hoc_phan || section.code || '';
  const courseName = section.ten_lop || section.name || section.mon_hoc?.ten_mon || 'Lớp học phần';
  const subjectName = section.mon_hoc?.ten_mon || section.subjectName || courseName;
  const teacherName = section.giang_vien?.nguoi_dung?.ho_ten || section.lecturerName || 'Bạn';

  const getLecturersList = () => {
    const list: any[] = [];
    const addedIds = new Set();

    if (section.giang_vien && section.giang_vien.id) {
      addedIds.add(section.giang_vien.id);
      list.push({
        ...section.giang_vien,
        pivot: { vai_tro: 'chinh' }
      });
    }

    if (section.giang_viens && Array.isArray(section.giang_viens)) {
      section.giang_viens.forEach((gv: any) => {
        if (!addedIds.has(gv.id)) {
          addedIds.add(gv.id);
          list.push(gv);
        } else if (gv.id === section.giang_vien?.id && gv.pivot?.vai_tro) {
          list[0] = { ...list[0], pivot: gv.pivot };
        }
      });
    }

    if (list.length === 0 && teacherName) {
      list.push({
        id: 'fallback',
        nguoi_dung: { ho_ten: teacherName },
        pivot: { vai_tro: 'chinh' }
      });
    }

    return list;
  };

  const getLecturerRoleLabel = (gv: any, index: number) => {
    return 'Giảng viên';
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return 'Vừa xong';
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('vi-VN');
    } catch {
      return dateStr;
    }
  };

  return (
    <div className={styles.pageContainer} style={{ padding: '24px', maxWidth: '1280px', margin: '0 auto' }}>
      {/* Back Button & Action Toolbar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <Link href="/lecturer/sections" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#3525cd', textDecoration: 'none', fontWeight: 600, fontSize: '14px' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Quay lại danh sách lớp học phần
        </Link>
      </div>

      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <div className={styles.bannerDecor}></div>
        <div className={styles.bannerContent}>
          <span className={styles.bannerSemester}>
            Học kỳ {section.hoc_ky || '1'} - {section.nam_hoc || '2023-2024'}
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
              <div 
                className={styles.announceBox} 
                onClick={() => router.push(`/lecturer/posts/create?sectionId=${section.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <div className={styles.avatar} style={{ backgroundColor: '#3525cd', color: 'white' }}>
                  <span>GV</span>
                </div>
                <button className={styles.announceText}>
                  Thông báo nội dung nào đó cho lớp học của bạn...
                </button>
                <div className={styles.actionIcons}>
                  <button className={styles.iconBtn}>
                    <span className="material-symbols-outlined">add_circle</span>
                  </button>
                </div>
              </div>

              {/* Feed Posts */}
              {streamFeed && streamFeed.length > 0 ? (
                streamFeed.map((item) => (
                  item.type === 'assignment' || item.type === 'quiz' ? (
                  <div
                    key={item.id}
                    onClick={() => router.push(item.href)}
                    style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                  >
                    <div className={styles.memberItem} style={{ border: '1px solid var(--color-outline-variant)', borderRadius: '8px', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', backgroundColor: '#ffffff' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div className={styles.avatar} style={{ backgroundColor: '#3525cd', color: 'white', borderRadius: '50%' }}>
                          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                            {item.type === 'quiz' ? 'quiz' : 'assignment'}
                          </span>
                        </div>
                        <div>
                          <div style={{ fontWeight: 500, fontSize: '16px', color: '#191c1e' }}>{item.title}</div>
                          <div style={{ fontSize: '12px', color: '#5f6368' }}>Ngày đăng: {item.date ? formatDate(item.date) : 'Vừa xong'}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  ) : (() => {
                    const post = item.post;
                    return (
                      <article 
                        key={post.id} 
                        className={styles.postCard} 
                        style={{ cursor: 'pointer', marginBottom: '1rem' }}
                        onClick={() => router.push(`/lecturer/posts/${post.id}?sectionId=${section.id}`)}
                      >
                        <div className={styles.postHeader}>
                          <div className={styles.postAuthorInfo}>
                            <div className={styles.avatar} style={{ backgroundColor: '#3525cd', color: 'white' }}>
                              <span>{post.nguoi_tao?.ho_ten ? post.nguoi_tao.ho_ten.charAt(0).toUpperCase() : 'GV'}</span>
                            </div>
                            <div>
                              <h4 className={styles.postAuthorName}>{post.nguoi_tao?.ho_ten || 'Giảng viên'}</h4>
                              <p className={styles.postDate}>{formatDate(post.ngay_tao)} • {post.loai_bai_viet === 'bai_tap' ? 'Bài tập' : post.loai_bai_viet === 'tai_lieu' ? 'Tài liệu' : 'Thông báo'}</p>
                            </div>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ padding: '4px 10px', backgroundColor: '#eef2ff', color: '#3525cd', borderRadius: '12px', fontSize: '12px', fontWeight: 600 }}>
                              {post.loai_bai_viet === 'bai_tap' ? 'Bài tập' : post.loai_bai_viet === 'tai_lieu' ? 'Tài liệu' : 'Thông báo'}
                            </span>
                            {(!post.loai_bai_viet || post.loai_bai_viet === 'thong_bao') && (
                              <>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    router.push(`/lecturer/posts/${post.id}/edit?sectionId=${section.id}`);
                                  }}
                                  style={{ backgroundColor: 'transparent', color: '#3525cd', border: '1px solid #3525cd', padding: '4px 12px', borderRadius: '6px', fontWeight: 600, fontSize: '13px', cursor: 'pointer' }}
                                  title="Chỉnh sửa bài viết"
                                >
                                  Sửa
                                </button>
                                <button
                                  onClick={(e) => handleDeletePost(e, post)}
                                  style={{ backgroundColor: '#fee2e2', color: '#dc2626', border: '1px solid #fca5a5', padding: '4px 8px', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                  title="Xóa bài viết"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                  </svg>
                                </button>
                              </>
                            )}
                          </div>
                        </div>

                        <div className={styles.postBody}>
                          {post.tieu_de && <strong style={{ display: 'block', marginBottom: '8px', fontSize: '16px', color: '#191c1e' }}>{post.tieu_de}</strong>}
                          <p style={{ margin: 0, color: '#464555', whiteSpace: 'pre-wrap' }}>{post.noi_dung}</p>

                          {post.tep_tin_bai_viet && post.tep_tin_bai_viet.length > 0 && (
                            <div style={{ marginTop: '12px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                              {post.tep_tin_bai_viet.map((tt: any) => (
                                <span key={tt.id} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', backgroundColor: '#f8fafc', borderRadius: '6px', fontSize: '13px', color: '#334155', border: '1px solid #e2e8f0' }}>
                                  <span>📎</span>
                                  {tt.tep_tin?.ten_file || 'Tệp đính kèm'}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </article>
                    );
                  })()
                ))
              ) : (
                <div style={{ padding: '3rem 2rem', textAlign: 'center', color: '#5f6368', background: '#ffffff', borderRadius: '1rem', border: '1px dashed #cbd5e1' }}>
                  Chưa có bài đăng nào trong lớp học này.
                </div>
              )}
            </>
          )}

          {activeTab === 'classwork' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Action buttons */}
              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={() => router.push(`/lecturer/assignments/create?sectionId=${section.id}`)}
                  style={{ backgroundColor: '#3525cd', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', boxShadow: '0 2px 4px rgba(53,37,205,0.2)' }}
                >
                  <span>+</span> Tạo bài tập mới
                </button>
                <button
                  onClick={() => router.push(`/lecturer/quizzes/create?sectionId=${section.id}`)}
                  style={{ backgroundColor: '#ffffff', color: '#3525cd', border: '1px solid #3525cd', padding: '10px 20px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}
                >
                  <span>+</span> Tạo bài kiểm tra
                </button>
                <button
                  onClick={() => router.push(`/lecturer/resources/create?sectionId=${section.id}`)}
                  style={{ backgroundColor: '#ffffff', color: '#d97706', border: '1px solid #d97706', padding: '10px 20px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}
                >
                  <span>+</span> Thêm tài nguyên
                </button>
              </div>

              {/* Assignments Section */}
              <div className={styles.widget} style={{ border: '1px solid #e0e3e5', padding: '1.5rem', background: '#ffffff', borderRadius: '1rem' }}>
                <h2 style={{ color: '#3525cd', fontSize: '18px', fontWeight: 600, marginBottom: '1rem', borderBottom: '2px solid #3525cd', paddingBottom: '0.5rem' }}>
                  Danh sách Bài tập
                </h2>
                {assignmentList && assignmentList.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {assignmentList.map(a => (
                      <div
                        key={a.id}
                        onClick={() => router.push(`/lecturer/assignments/${a.id}/submissions?sectionId=${section.id}`)}
                        style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', transition: 'all 0.2s', backgroundColor: '#f8fafc' }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div style={{ width: '40px', height: '40px', backgroundColor: '#3525cd', color: 'white', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                            BT
                          </div>
                          <div>
                            <div style={{ fontWeight: 600, fontSize: '15px', color: '#1e293b' }}>{a.title || a.tieu_de}</div>
                            <div style={{ fontSize: '13px', color: '#64748b' }}>Hạn nộp: {a.dueDate || a.han_nop || 'Không có hạn'}</div>
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <span style={{ padding: '6px 12px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, backgroundColor: '#dbeafe', color: '#1d4ed8' }}>
                            Đã nộp: {a.stats?.submitted || 0}/{a.stats?.total || students.length || 0}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              router.push(`/lecturer/assignments/${a.id}/edit?sectionId=${section.id}`);
                            }}
                            style={{ backgroundColor: 'transparent', color: '#3525cd', border: '1px solid #3525cd', padding: '6px 14px', borderRadius: '6px', fontWeight: 600, fontSize: '13px', cursor: 'pointer' }}
                          >
                            Chỉnh sửa
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              router.push(`/lecturer/assignments/${a.id}/submissions?sectionId=${section.id}`);
                            }}
                            style={{ backgroundColor: '#3525cd', color: 'white', border: 'none', padding: '6px 14px', borderRadius: '6px', fontWeight: 600, fontSize: '13px', cursor: 'pointer' }}
                          >
                            Chấm bài
                          </button>
                          <button
                            onClick={(e) => handleDeleteAssignment(e, a)}
                            style={{ backgroundColor: '#fee2e2', color: '#dc2626', border: '1px solid #fca5a5', padding: '6px 10px', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            title="Xóa bài tập"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{ color: '#64748b', textAlign: 'center', padding: '2rem 0' }}>Chưa có bài tập nào cho lớp này.</div>
                )}
              </div>

              {/* Quizzes Section */}
              <div className={styles.widget} style={{ border: '1px solid #e0e3e5', padding: '1.5rem', background: '#ffffff', borderRadius: '1rem' }}>
                <h2 style={{ color: '#3525cd', fontSize: '18px', fontWeight: 600, marginBottom: '1rem', borderBottom: '2px solid #3525cd', paddingBottom: '0.5rem' }}>
                  Danh sách Bài kiểm tra
                </h2>
                {quizList && quizList.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {quizList.map(q => (
                      <div
                        key={q.id}
                        onClick={() => router.push(`/lecturer/quizzes/${q.id}/results?sectionId=${section.id}`)}
                        style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', transition: 'all 0.2s', backgroundColor: '#f8fafc' }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div style={{ width: '40px', height: '40px', backgroundColor: '#059669', color: 'white', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                            KT
                          </div>
                          <div>
                            <div style={{ fontWeight: 600, fontSize: '15px', color: '#1e293b' }}>{q.title || q.tieu_de}</div>
                            <div style={{ fontSize: '13px', color: '#64748b' }}>Thời gian làm bài: {q.timeLimit || q.duration || '60'} phút</div>
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              router.push(`/lecturer/quizzes/${q.id}/questions?sectionId=${section.id}`);
                            }}
                            style={{ backgroundColor: '#f0fdf4', color: '#16a34a', border: '1px solid #bbf7d0', padding: '6px 14px', borderRadius: '6px', fontWeight: 600, fontSize: '13px', cursor: 'pointer' }}
                          >
                            Soạn câu hỏi
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              router.push(`/lecturer/quizzes/${q.id}/edit?sectionId=${section.id}`);
                            }}
                            style={{ backgroundColor: 'transparent', color: '#059669', border: '1px solid #059669', padding: '6px 14px', borderRadius: '6px', fontWeight: 600, fontSize: '13px', cursor: 'pointer' }}
                          >
                            Chỉnh sửa
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              router.push(`/lecturer/quizzes/${q.id}/results?sectionId=${section.id}`);
                            }}
                            style={{ backgroundColor: '#059669', color: 'white', border: 'none', padding: '6px 14px', borderRadius: '6px', fontWeight: 600, fontSize: '13px', cursor: 'pointer' }}
                          >
                            Xem kết quả
                          </button>
                          <button
                            onClick={(e) => handleDeleteQuiz(e, q)}
                            style={{ backgroundColor: '#fee2e2', color: '#dc2626', border: '1px solid #fca5a5', padding: '6px 10px', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            title="Xóa bài kiểm tra"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{ color: '#64748b', textAlign: 'center', padding: '2rem 0' }}>Chưa có bài kiểm tra nào cho lớp này.</div>
                )}
              </div>

              {/* Resources Section */}
              <div className={styles.widget} style={{ border: '1px solid #e0e3e5', padding: '1.5rem', background: '#ffffff', borderRadius: '1rem' }}>
                <h2 style={{ color: '#3525cd', fontSize: '18px', fontWeight: 600, marginBottom: '1rem', borderBottom: '2px solid #3525cd', paddingBottom: '0.5rem' }}>
                  Danh sách Tài nguyên
                </h2>
                {resourceList && resourceList.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {resourceList.map(r => (
                      <div
                        key={r.id}
                        onClick={() => router.push(`/lecturer/resources/${r.id}/edit?sectionId=${section.id}`)}
                        style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', transition: 'all 0.2s', backgroundColor: '#f8fafc' }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div style={{ width: '40px', height: '40px', backgroundColor: '#d97706', color: 'white', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '14px' }}>
                            {r.type === 'video' ? 'VD' : r.type === 'link' ? 'LK' : r.type === 'image' ? 'IM' : 'TL'}
                          </div>
                          <div>
                            <div style={{ fontWeight: 600, fontSize: '15px', color: '#1e293b' }}>{r.title || r.tieu_de}</div>
                            <div style={{ fontSize: '13px', color: '#64748b' }}>
                              {r.createdAt ? `Ngày đăng: ${r.createdAt}` : 'Tài nguyên lớp học'} {r.fileSize ? `• ${r.fileSize}` : ''}
                            </div>
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          {r.fileUrl || (r.files && r.files.length > 0) ? (
                            <a
                              href={r.fileUrl || r.files[0]?.url}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              style={{ backgroundColor: '#fef3c7', color: '#b45309', textDecoration: 'none', padding: '6px 14px', borderRadius: '6px', fontWeight: 600, fontSize: '13px' }}
                            >
                              Tải về / Xem
                            </a>
                          ) : r.externalUrl ? (
                            <a
                              href={r.externalUrl}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              style={{ backgroundColor: '#fef3c7', color: '#b45309', textDecoration: 'none', padding: '6px 14px', borderRadius: '6px', fontWeight: 600, fontSize: '13px' }}
                            >
                              Mở liên kết
                            </a>
                          ) : null}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              router.push(`/lecturer/resources/${r.id}/edit?sectionId=${section.id}`);
                            }}
                            style={{ backgroundColor: 'transparent', color: '#d97706', border: '1px solid #d97706', padding: '6px 14px', borderRadius: '6px', fontWeight: 600, fontSize: '13px', cursor: 'pointer' }}
                          >
                            Chỉnh sửa
                          </button>
                          <button
                            onClick={(e) => handleDeleteResource(e, r)}
                            style={{ backgroundColor: '#fee2e2', color: '#dc2626', border: '1px solid #fca5a5', padding: '6px 10px', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            title="Xóa tài nguyên"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{ color: '#64748b', textAlign: 'center', padding: '2rem 0' }}>Chưa có tài nguyên nào cho lớp này.</div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'people' && (
            <div className={styles.widget} style={{ border: '1px solid #e0e3e5', padding: '2rem', background: '#ffffff', borderRadius: '1rem' }}>
              <div style={{ borderBottom: '2px solid #3525cd', paddingBottom: '0.75rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ color: '#3525cd', fontSize: '20px', fontWeight: 700, margin: 0 }}>Giảng viên</h2>
                {getLecturersList().length > 1 && (
                  <span style={{ fontSize: '14px', color: '#3525cd', fontWeight: 600 }}>{getLecturersList().length} giảng viên</span>
                )}
              </div>
              <div style={{ marginBottom: '2.5rem' }}>
                {getLecturersList().map((gv: any, index: number) => {
                  const name = gv.nguoi_dung?.ho_ten || gv.ho_ten || teacherName || 'Giảng viên';
                  const email = gv.nguoi_dung?.email || gv.email || '';
                  const roleLabel = getLecturerRoleLabel(gv, index);
                  return (
                    <div key={gv.id || index} className={styles.memberItem} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: index < getLecturersList().length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div className={styles.avatar} style={{ backgroundColor: '#3525cd', color: 'white', width: '48px', height: '48px', fontSize: '18px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                          <span>{name ? name.charAt(0).toUpperCase() : 'GV'}</span>
                        </div>
                        <div>
                          <span style={{ fontSize: '16px', fontWeight: 600, color: '#1e293b', display: 'block' }}>{name}</span>
                          <span style={{ fontSize: '13px', color: '#64748b' }}>{roleLabel}</span>
                        </div>
                      </div>
                      {email && <span style={{ fontSize: '13px', color: '#64748b' }}>{email}</span>}
                    </div>
                  );
                })}
              </div>

              <div style={{ borderBottom: '2px solid #3525cd', paddingBottom: '0.75rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ color: '#3525cd', fontSize: '20px', fontWeight: 700, margin: 0 }}>Sinh viên</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ fontSize: '14px', color: '#3525cd', fontWeight: 600 }}>{students.length} sinh viên</span>
                </div>
              </div>

              <div>
                {students && students.length > 0 ? (
                  students.map((sv: any) => (
                    <div key={sv.id || sv.ma_sinh_vien} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #f1f5f9' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#64748b', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: '14px' }}>
                          <span>{sv.ho_ten ? sv.ho_ten.charAt(0).toUpperCase() : 'SV'}</span>
                        </div>
                        <div>
                          <span style={{ fontSize: '15px', fontWeight: 600, color: '#1e293b', display: 'block' }}>{sv.ho_ten || sv.nguoi_dung?.ho_ten || 'Sinh viên'}</span>
                          <span style={{ fontSize: '13px', color: '#64748b' }}>Mã SV: {sv.ma_sinh_vien}</span>
                        </div>
                      </div>
                      <span style={{ fontSize: '13px', color: '#64748b' }}>{sv.email || sv.nguoi_dung?.email || ''}</span>
                    </div>
                  ))
                ) : (
                  <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>Chưa có sinh viên nào trong lớp này.</div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar */}
        <aside className={styles.sidebarColumn}>
          {/* Quick Stats Widget */}
          <div className={styles.widget} style={{ border: '1px solid #e0e3e5', background: '#ffffff', borderRadius: '1rem', padding: '1.5rem', marginBottom: '1.5rem' }}>
            <div className={styles.widgetHeader} style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
              <h3 className={styles.widgetTitle} style={{ margin: 0, fontSize: '16px', fontWeight: 600, color: '#1e293b' }}>Thống kê lớp học</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#64748b', fontSize: '14px' }}>Sĩ số:</span>
                <strong style={{ color: '#1e293b', fontSize: '15px' }}>{students.length} / {section.si_so_toi_da || section.maxStudents || 40}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#64748b', fontSize: '14px' }}>Bài tập:</span>
                <strong style={{ color: '#1e293b', fontSize: '15px' }}>{assignmentList.length}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#64748b', fontSize: '14px' }}>Bài kiểm tra:</span>
                <strong style={{ color: '#1e293b', fontSize: '15px' }}>{quizList.length}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#64748b', fontSize: '14px' }}>Tài nguyên:</span>
                <strong style={{ color: '#1e293b', fontSize: '15px' }}>{resourceList ? resourceList.length : 0}</strong>
              </div>
            </div>
          </div>

          {/* Teacher Info Widget */}
          <div className={styles.widget} style={{ border: '1px solid #e0e3e5', background: '#ffffff', borderRadius: '1rem', padding: '1.5rem' }}>
            <h3 className={styles.widgetTitle} style={{ margin: '0 0 1rem 0', fontSize: '16px', fontWeight: 600, color: '#1e293b', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.75rem' }}>Giảng viên phụ trách</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {getLecturersList().map((gv: any, index: number) => {
                const name = gv.nguoi_dung?.ho_ten || gv.ho_ten || teacherName || 'Giảng viên';
                const roleLabel = getLecturerRoleLabel(gv, index);
                return (
                  <div key={gv.id || index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div className={styles.avatar} style={{ backgroundColor: '#3525cd', color: 'white', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                      <span>{name ? name.charAt(0).toUpperCase() : 'GV'}</span>
                    </div>
                    <div>
                      <p style={{ margin: 0, fontWeight: 600, fontSize: '15px', color: '#1e293b' }}>{name}</p>
                      <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>{roleLabel}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>
      </section>

      <ConfirmModal
        isOpen={!!deleteTarget}
        title={
          deleteTarget?.type === 'assignment'
            ? 'Xác nhận xóa bài tập'
            : deleteTarget?.type === 'quiz'
            ? 'Xác nhận xóa bài kiểm tra'
            : deleteTarget?.type === 'post'
            ? 'Xác nhận xóa bài viết / thông báo'
            : 'Xác nhận xóa tài nguyên'
        }
        message={
          <div>
            Bạn có chắc chắn muốn xóa{' '}
            <strong style={{ color: '#1e293b' }}>
              {deleteTarget?.title || (deleteTarget?.type === 'assignment' ? 'bài tập này' : deleteTarget?.type === 'quiz' ? 'bài kiểm tra này' : deleteTarget?.type === 'post' ? 'bài viết này' : 'tài nguyên này')}
            </strong>{' '}
            không? Toàn bộ dữ liệu liên quan sẽ bị xóa vĩnh viễn và không thể khôi phục.
          </div>
        }
        confirmText="Xóa ngay"
        cancelText="Hủy bỏ"
        variant="danger"
        isLoading={isDeleting}
        onConfirm={executeDelete}
        onCancel={() => !isDeleting && setDeleteTarget(null)}
      />
    </div>
  );
}
