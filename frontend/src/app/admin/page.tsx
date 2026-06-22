'use client';

import React from 'react';

export default function AdminDashboardPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 0' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#191c1e', marginBottom: '1rem' }}>Bảng điều khiển Admin</h1>
      <p style={{ color: '#464555', marginBottom: '2rem' }}>Chào mừng bạn quay lại hệ thống quản lý đào tạo.</p>

      <div style={{ padding: '3rem', backgroundColor: '#ffffff', borderRadius: '1rem', border: '1px solid #e0e3e5', textAlign: 'center' }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48" style={{ margin: '0 auto 1rem', color: '#3525cd' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#191c1e', marginBottom: '0.5rem' }}>Trang tổng quan đang được phát triển</h3>
        <p style={{ color: '#777587' }}>Vui lòng truy cập menu <strong style={{ color: '#3525cd' }}>Học phần</strong> ở thanh bên trái để bắt đầu làm việc.</p>
      </div>
    </div>
  );
}
