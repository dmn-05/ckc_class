'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { logoutAction } from '@/app/actions/auth';
import styles from './LecturerLayout.module.css';

import NotificationBell from '@/components/common/NotificationBell';

/** Lấy 2 chữ cái đầu: chữ đầu họ + chữ đầu tên */
function getInitials(fullName: string): string {
  if (!fullName) return 'GV';
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  const first = parts[0].charAt(0).toUpperCase();
  const last = parts[parts.length - 1].charAt(0).toUpperCase();
  return first + last;
}

export default function LecturerHeader({ profileData }: { profileData?: any }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const lecturerName = profileData?.ho_ten || "Giảng viên";
  const avatarUrl = profileData?.avatar || null;
  const initials = getInitials(lecturerName);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerTitle}>
        Cổng thông tin giảng viên
      </div>
      
      <div className={styles.headerActions}>
        <NotificationBell />

        <div className={styles.userProfile} ref={dropdownRef} onClick={() => setShowDropdown(!showDropdown)} style={{ cursor: 'pointer', position: 'relative' }}>
          {avatarUrl ? (
            <img 
              src={avatarUrl} 
              alt={lecturerName}
              className={styles.userAvatar} 
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <div 
              className={styles.userAvatar}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                backgroundColor: '#3b82f6', 
                color: '#fff',
                fontSize: '0.875rem',
                fontWeight: '600'
              }}
            >
              {initials}
            </div>
          )}
          <div className={styles.userName} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {lecturerName}
            <span className="material-symbols-outlined" style={{ fontSize: '1.25rem', color: '#64748b' }}>arrow_drop_down</span>
          </div>

          {showDropdown && (
            <div className={styles.dropdownMenu} onClick={(e) => e.stopPropagation()}>
              <form action={logoutAction}>
                <button type="submit" className={styles.dropdownItem} style={{ border: 'none', background: 'none', width: '100%', textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>logout</span>
                  Đăng xuất
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
