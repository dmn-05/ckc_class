"use client";

import { useEffect, useState } from "react";
import styles from "@/app/page.module.css";

export function CommunityStatsBadge() {
  const [stats, setStats] = useState<{
    giang_vien_count: number;
    sinh_vien_count: number;
  } | null>(null);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";
    fetch(`${apiUrl}/public/stats`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.success) {
          setStats({
            giang_vien_count: data.giang_vien_count || 0,
            sinh_vien_count: data.sinh_vien_count || 0,
          });
        }
      })
      .catch((err) => {
        console.error("Failed to load community stats:", err);
      });
  }, []);

  return (
    <div className={styles.community}>
      <div className={styles.avatarStack} aria-hidden="true">
        <span>GV</span>
        <span>SV</span>
        <span>QT</span>
      </div>
      <span>
        {stats
          ? `Tham gia cùng ${stats.giang_vien_count.toLocaleString()} giảng viên & ${stats.sinh_vien_count.toLocaleString()} sinh viên`
          : "Đang tải dữ liệu cộng đồng..."}
      </span>
    </div>
  );
}
