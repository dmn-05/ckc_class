'use client';

import React, { useState } from 'react';
import styles from '@/components/student/assignments/AssignmentsManagement.module.css';
import AssignmentCard, { AssignmentData } from '../../../../components/student/assignments/AssignmentCard';
import AssignmentDetail from '../../../../components/student/assignments/AssignmentDetail';
import SubmitModal from '../../../../components/student/assignments/SubmitModal';
import TeacherFeedback from '../../../../components/student/assignments/TeacherFeedback';

const MOCK_ASSIGNMENTS: AssignmentData[] = [
  {
    id: 'a1',
    title: 'Project 02: Xây dựng ứng dụng MVC',
    status: 'pending',
    deadline: '23:59, 25 Tháng 10, 2024',
    maxScore: 10,
    weight: '20%',
    description: 'Sinh viên thực hiện thiết kế và cài đặt một ứng dụng web cơ bản sử dụng kiến trúc MVC (Model-View-Controller). Ứng dụng phải bao gồm các tính năng CRUD cơ bản và kết nối cơ sở dữ liệu SQL Server.',
    instructions: [
      'Sử dụng ASP.NET Core MVC hoặc Spring Boot.',
      'Nộp file nén .zip chứa source code và file báo cáo PDF.',
      'Tên file: HoTen_MSSV_Project2.zip'
    ]
  },
  {
    id: 'a2',
    title: 'Thực hành 05: Array & List',
    status: 'graded',
    deadline: '23:59, 10 Tháng 10, 2024',
    submittedAt: '12/10/2024',
    score: 9.5,
    maxScore: 10,
    weight: '10%',
    description: 'Áp dụng các cấu trúc dữ liệu mảng và danh sách liên kết để giải quyết các bài toán thao tác dữ liệu.',
    instructions: [
      'Code viết bằng C++ hoặc Java',
      'Đảm bảo pass toàn bộ test case cung cấp sẵn'
    ],
    feedback: 'Thuật toán đệ quy trong bài tập tuần 08 của em rất tốt, tuy nhiên cách đặt tên biến cần rõ ràng hơn để người khác dễ đọc code.',
    feedbackAuthor: 'GV. Lê Hoàng Nam',
    feedbackTime: 'Hôm qua'
  },
  {
    id: 'a3',
    title: 'Project 01: Thiết kế Database',
    status: 'submitted',
    deadline: '23:59, 01 Tháng 10, 2024',
    fileName: 'design_doc_v1.pdf',
    maxScore: 10,
    weight: '20%',
    description: 'Sinh viên thiết kế ERD và viết script SQL để khởi tạo schema cho hệ thống thương mại điện tử.',
    instructions: [
      'Nộp file PDF ERD rõ nét',
      'Đính kèm file .sql chứa schema'
    ]
  },
  {
    id: 'a4',
    title: 'Bài tập tuần 08: Recursion',
    status: 'late',
    deadline: '15:00, 20 Tháng 09, 2024',
    score: 7.0,
    maxScore: 10,
    weight: '5%',
    description: 'Hoàn thành 5 bài tập về đệ quy trong tài liệu chương 4.',
    instructions: [
      'Chỉ được dùng đệ quy, không dùng vòng lặp',
    ],
    feedback: 'Bài nộp trễ và test case số 3 bị Time Limit Exceeded. Em có thể nộp lại để lấy tối đa 8 điểm.',
    feedbackAuthor: 'GV. Lê Hoàng Nam',
    feedbackTime: 'Tuần trước'
  }
];

export default function StudentAssignmentsPage() {
  const [assignments, setAssignments] = useState<AssignmentData[]>(MOCK_ASSIGNMENTS);
  const [filter, setFilter] = useState('all');
  const [activeAssignmentId, setActiveAssignmentId] = useState<string>(MOCK_ASSIGNMENTS[0].id);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  const activeAssignment = assignments.find(a => a.id === activeAssignmentId) || null;

  const filteredAssignments = assignments.filter(a => {
    if (filter === 'all') return true;
    if (filter === 'pending') return a.status === 'pending' || a.status === 'late';
    if (filter === 'submitted') return a.status === 'submitted';
    if (filter === 'graded') return a.status === 'graded';
    return true;
  });

  const handleOpenSubmitModal = (id?: string) => {
    if (id) setActiveAssignmentId(id);
    setIsSubmitModalOpen(true);
  };

  const handleAssignmentSubmit = (fileName: string, note: string) => {
    if (activeAssignmentId) {
      setAssignments(prev => prev.map(a => {
        if (a.id === activeAssignmentId) {
          return {
            ...a,
            status: 'submitted',
            fileName: fileName,
            submittedAt: new Date().toLocaleDateString('vi-VN')
          };
        }
        return a;
      }));
    }
    setIsSubmitModalOpen(false);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <div>
          <h2 className={styles.pageTitle}>Bài tập</h2>
        </div>

        <div>
          <select
            className={styles.filterSelect}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">Tất cả trạng thái</option>
            <option value="pending">Còn thiếu</option>
            <option value="submitted">Đã nộp</option>
            <option value="graded">Đã chấm điểm</option>
          </select>
        </div>
      </div>

      <div className={styles.mainGrid}>
        <div className={styles.leftColumn}>
          {activeAssignment && (
            <AssignmentDetail
              assignment={activeAssignment}
              onSubmitClick={() => handleOpenSubmitModal(activeAssignment.id)}
            />
          )}

          <div className={styles.cardsGrid}>
            {filteredAssignments.filter(a => a.id !== activeAssignmentId).map(assignment => (
              <AssignmentCard
                key={assignment.id}
                assignment={assignment}
                onClick={() => setActiveAssignmentId(assignment.id)}
              />
            ))}
            {filteredAssignments.length === 0 && (
              <p style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem', color: '#777587' }}>Không tìm thấy bài tập nào với bộ lọc hiện tại.</p>
            )}
          </div>
        </div>

        <div className={styles.rightColumn}>
          <TeacherFeedback
            assignments={assignments}
            onResubmitClick={(id) => handleOpenSubmitModal(id)}
          />
        </div>
      </div>

      <SubmitModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        assignmentTitle={activeAssignment?.title || ''}
        onSubmit={handleAssignmentSubmit}
      />
    </div>
  );
}
