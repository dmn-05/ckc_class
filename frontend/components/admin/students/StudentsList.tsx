import React from 'react';
import StudentCard, { StudentData } from './StudentCard';
import styles from './AdminStudents.module.css';

interface StudentsListProps {
  students: StudentData[];
  onDeleteSuccess?: () => void;
}

export default function StudentsList({ students, onDeleteSuccess }: StudentsListProps) {
  return (
    <div className={styles.studentList}>
      {students.length > 0 ? students.map((student) => (
        <StudentCard key={student.id} student={student} onDeleteSuccess={onDeleteSuccess} />
      )) : (
        <div style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
          Không có dữ liệu sinh viên.
        </div>
      )}
    </div>
  );
}
