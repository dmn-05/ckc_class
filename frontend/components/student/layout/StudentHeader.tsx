'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { logoutAction } from '@/app/actions/auth';
import styles from './StudentLayout.module.css';

export default function StudentHeader() {
  const hasPhoto = false; // Set to true to display photo, false to display "SV"
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
        Cổng thông tin sinh viên
      </div>
      
      <div className={styles.headerActions}>
        <button className={styles.notificationBtn} aria-label="Notifications">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className={styles.badge}>3</span>
        </button>

        <div className={styles.userProfile} ref={dropdownRef} onClick={() => setShowDropdown(!showDropdown)} style={{ cursor: 'pointer', position: 'relative' }}>
          {hasPhoto ? (
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcNSQXs5-LbQJDOQbKGq1BFmI1eYpdaflsF67_AjsQxpMC-G6H6ercthK9v35xQ4iGLsJG7j0k2CIuH8CeP2Osj27FoHd2cX4vcKQ-JzZ_0AaDpqckd5k09eTQh63s-hxDjjOx0M6Q1CW-a3SWGyKEtnLkubsSE3xkB_PkZ4FLiM6N9zdY-ukYH1x2YhayxUdBjcpyn3JH1XoMP3i3c2uxIHp9XqVHrP3LBOb9rlMgGr6Uf3mZzVACiXoMzLw2vH2Fov6MyUgYiUs" 
              alt="Nguyễn Văn A"
              className={styles.userAvatar} 
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <div className={styles.userAvatar}>SV</div>
          )}
          <div className={styles.userName} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            Nguyễn Văn A
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
