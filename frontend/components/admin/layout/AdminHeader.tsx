'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { logoutAction } from '@/app/actions/auth';
import styles from './AdminLayout.module.css';

function getInitials(fullName: string): string {
  if (!fullName) return 'AD';
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  const first = parts[0].charAt(0).toUpperCase();
  const last = parts[parts.length - 1].charAt(0).toUpperCase();
  return first + last;
}

export default function AdminHeader({ profileData }: { profileData?: any }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const adminName = profileData?.ho_ten || "Admin";
  const avatarUrl = profileData?.avatar || null;
  const initials = getInitials(adminName);

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
        Cổng thông tin Admin
      </div>

      <div className={styles.headerActions}>

        <div className={styles.userProfile} ref={dropdownRef} onClick={() => setShowDropdown(!showDropdown)} style={{ cursor: 'pointer', position: 'relative' }}>
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={adminName}
              className={styles.userAvatar}
              style={{ objectFit: 'cover', borderRadius: '50%' }}
            />
          ) : (
            <div
              className={styles.userAvatar}
              style={{ background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, borderRadius: '50%' }}
            >
              {initials}
            </div>
          )}
          <div className={styles.userName} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {adminName}
            <span className="material-symbols-outlined" style={{ fontSize: '1.25rem', color: '#64748b' }}>arrow_drop_down</span>
          </div>

          {showDropdown && (
            <div className={styles.dropdownMenu} onClick={(e) => e.stopPropagation()}>
              <Link href="/admin/profile" className={styles.dropdownItem} onClick={() => setShowDropdown(false)} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>account_circle</span>
                Hồ sơ cá nhân
              </Link>
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
