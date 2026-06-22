'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './AdminLayout.module.css';

export default function AdminSidebar() {
  const pathname = usePathname();

  const navLinks = [
    {
      name: 'Bảng điều khiển',
      href: '/admin',
      icon: <span className="material-symbols-outlined">dashboard</span>
    },
    {
      name: 'Khoa',
      href: '/admin/faculties',
      icon: <span className="material-symbols-outlined">domain</span>
    },
    {
      name: 'Bộ Môn',
      href: '/admin/departments',
      icon: <span className="material-symbols-outlined">account_tree</span>
    },

    {
      name: 'Môn Học',
      href: '/admin/subjects',
      icon: <span className="material-symbols-outlined">library_books</span>
    },
    {
      name: 'Lớp',
      href: '/admin/classes',
      icon: <span className="material-symbols-outlined">book</span>
    },
    {
      name: 'Sinh Viên',
      href: '/admin/students',
      icon: <span className="material-symbols-outlined">school</span>
    },
    {
      name: 'Giảng viên',
      href: '/admin/lecturers',
      icon: <span className="material-symbols-outlined">supervisor_account</span>
    },
    {
      name: 'Hồ sơ',
      href: '/admin/profile',
      icon: <span className="material-symbols-outlined">account_circle</span>
    }
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <span className={styles.logoIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
        </span>
        CKC Admin
      </div>
      <nav className={styles.navMenu}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href || (link.href !== '/lecturer' && pathname?.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
            >
              {link.icon}
              {link.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
