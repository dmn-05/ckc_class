'use client';

import React from 'react';
import styles from './ResourcesManagement.module.css';

interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryTabs({ categories, activeCategory, onSelectCategory }: CategoryTabsProps) {
  return (
    <div className={styles.tabsContainer}>
      {categories.map((cat) => (
        <button
          key={cat}
          className={`${styles.tabBtn} ${activeCategory === cat ? styles.tabActive : styles.tabInactive}`}
          onClick={() => onSelectCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
