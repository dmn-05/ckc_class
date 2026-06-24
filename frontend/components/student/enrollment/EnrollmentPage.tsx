'use client';

import React, { useState, useEffect, useCallback, useTransition } from 'react';
import styles from './EnrollmentPage.module.css';
import {
    getAvailableSections,
    getMyEnrollments,
    enrollSection,
    cancelEnrollment,
} from '@/app/actions/enrollment';

// ---- Types ----
interface MonHoc {
    id?: number;
    ma_mon: string;
    ten_mon: string;
    tin_chi: number;
    khoa?: { ten_khoa: string } | null;
}

interface GiangVien {
    ho_ten: string;
    ma_giang_vien?: string;
}

interface AvailableSection {
    id: number;
    ma_lop_hoc_phan: string;
    ten_lop?: string;
    hoc_ky: string;
    nam_hoc: string;
    si_so_toi_da: number;
    si_so_hien_tai: number;
    trang_thai: string;
    mon_hoc?: MonHoc | null;
    giang_vien?: GiangVien | null;
}

interface EnrolledItem {
    id: number;
    trang_thai: 'cho_duyet' | 'da_duyet' | 'da_huy';
    ngay_dang_ky: string;
    lop_hoc_phan?: {
        id: number;
        ma_lop_hoc_phan: string;
        ten_lop?: string;
        hoc_ky: string;
        nam_hoc: string;
        si_so_toi_da: number;
        trang_thai: string;
        mon_hoc?: MonHoc | null;
        giang_vien?: GiangVien | null;
    } | null;
}

// ---- Helper: Capacity Color ----
function getCapacityInfo(current: number, max: number) {
    const pct = max > 0 ? (current / max) * 100 : 0;
    if (pct >= 100) return { label: 'Đã đầy', badgeClass: styles.badgeFull, fillClass: styles.fillRed };
    if (pct >= 80) return { label: 'Sắp đầy', badgeClass: styles.badgeAlmost, fillClass: styles.fillOrange };
    return { label: 'Còn chỗ', badgeClass: styles.badgeOpen, fillClass: styles.fillGreen };
}

function hocKyLabel(hk: string) {
    const map: Record<string, string> = {
        HK1: 'Học kỳ 1', HK2: 'Học kỳ 2', HK3: 'Học kỳ 3',
        HK4: 'Học kỳ 4', HK5: 'Học kỳ 5', HK6: 'Học kỳ 6',
    };
    return map[hk] || hk;
}

// ---- Toast Component ----
function Toast({ message, type, onClose }: { message: string; type: 'success' | 'error'; onClose: () => void }) {
    useEffect(() => {
        const t = setTimeout(onClose, 3500);
        return () => clearTimeout(t);
    }, [onClose]);
    return (
        <div className={`${styles.toast} ${type === 'success' ? styles.toastSuccess : styles.toastError}`}>
            <span className={`material-symbols-outlined ${styles.toastIcon}`}>
                {type === 'success' ? 'check_circle' : 'error'}
            </span>
            {message}
        </div>
    );
}

// ---- Section Card ----
function SectionCard({ section, onEnroll, enrollingId }: {
    section: AvailableSection;
    onEnroll: (id: number) => void;
    enrollingId: number | null;
}) {
    const maxSeats = section.si_so_toi_da > 0 ? section.si_so_toi_da : null;
    const currentCount = section.si_so_hien_tai ?? 0;
    const cap = getCapacityInfo(currentCount, maxSeats ?? 0);
    const isFull = maxSeats !== null && currentCount >= maxSeats;
    const isEnrolling = enrollingId === section.id;
    const pct = maxSeats ? Math.min(100, Math.round((currentCount / maxSeats) * 100)) : 0;

    return (
        <div className={styles.sectionCard}>
            <div className={styles.cardHead}>
                <div className={styles.cardTitleGroup}>
                    <h3 className={styles.cardSubjectName}>
                        {section.mon_hoc?.ten_mon || section.ten_lop || 'Chưa có tên môn'}
                    </h3>
                    <span className={styles.cardSectionCode}>{section.ma_lop_hoc_phan}</span>
                </div>
                <span className={`${styles.capacityBadge} ${cap.badgeClass}`}>
                    <span className="material-symbols-outlined" style={{ fontSize: '0.85rem' }}>group</span>
                    {cap.label}
                </span>
            </div>

            <div className={styles.cardInfo}>
                {section.giang_vien && (
                    <div className={styles.cardInfoRow}>
                        <span className={`material-symbols-outlined ${styles.infoIcon}`}>person</span>
                        {section.giang_vien.ho_ten}
                        {section.giang_vien.ma_giang_vien && (
                            <span style={{ color: '#94a3b8' }}>({section.giang_vien.ma_giang_vien})</span>
                        )}
                    </div>
                )}
                {section.mon_hoc?.khoa && (
                    <div className={styles.cardInfoRow}>
                        <span className={`material-symbols-outlined ${styles.infoIcon}`}>school</span>
                        {section.mon_hoc.khoa.ten_khoa}
                    </div>
                )}
                <div className={styles.cardInfoRow}>
                    <span className={`material-symbols-outlined ${styles.infoIcon}`}>calendar_today</span>
                    {hocKyLabel(section.hoc_ky)} • {section.nam_hoc}
                </div>
            </div>

            <div className={styles.capacityBar}>
                <div className={styles.capacityBarLabel}>
                    <span>Sĩ số</span>
                    <span>
                        <strong>{currentCount}</strong>
                        {maxSeats ? ` / ${maxSeats} sinh viên (${pct}%)` : ' sinh viên'}
                    </span>
                </div>
                <div className={styles.capacityBarTrack}>
                    <div
                        className={`${styles.capacityBarFill} ${cap.fillClass}`}
                        style={{ width: `${pct}%` }}
                    />
                </div>
            </div>

            <div className={styles.cardFooter}>
                <span className={styles.semesterTag}>
                    <span className="material-symbols-outlined" style={{ fontSize: '0.9rem' }}>event_note</span>
                    {hocKyLabel(section.hoc_ky)}
                </span>
                {section.mon_hoc?.tin_chi && (
                    <span className={styles.creditTag}>
                        <span className="material-symbols-outlined" style={{ fontSize: '0.9rem' }}>stars</span>
                        {section.mon_hoc.tin_chi} TC
                    </span>
                )}
                <button
                    className={styles.enrollBtn}
                    onClick={() => onEnroll(section.id)}
                    disabled={isFull || isEnrolling}
                >
                    {isEnrolling ? (
                        <span className={`material-symbols-outlined ${styles.spinner}`}>sync</span>
                    ) : (
                        <span className={`material-symbols-outlined ${styles.enrollBtnIcon}`}>
                            {isFull ? 'do_not_disturb' : 'add_circle'}
                        </span>
                    )}
                    {isFull ? 'Đã đầy' : isEnrolling ? 'Đang đăng ký...' : 'Đăng ký'}
                </button>
            </div>
        </div>
    );
}

// ---- Enrolled Card ----
function EnrolledCard({ item, onCancel, cancellingId }: {
    item: EnrolledItem;
    onCancel: (id: number, subjectName: string) => void;
    cancellingId: number | null;
}) {
    const s = item.lop_hoc_phan;
    if (!s) return null;

    const statusConfig = {
        da_duyet: { label: 'Đã duyệt', className: styles.statusDaDuyet, dotClass: styles.dotGreen },
        cho_duyet: { label: 'Chờ duyệt', className: styles.statusChoDuyet, dotClass: styles.dotYellow },
        da_huy: { label: 'Đã hủy', className: styles.statusDaHuy, dotClass: styles.dotGray },
    };
    const conf = statusConfig[item.trang_thai];
    const isCancelled = item.trang_thai === 'da_huy';
    const subjectName = s.mon_hoc?.ten_mon || s.ten_lop || s.ma_lop_hoc_phan;

    return (
        <div className={styles.enrolledCard} style={{ opacity: isCancelled ? 0.6 : 1 }}>
            <div className={`${styles.enrolledStatusDot} ${conf.dotClass}`} />
            <div className={styles.enrolledInfo}>
                <h4 className={styles.enrolledSubject}>{subjectName}</h4>
                <div className={styles.enrolledMeta}>
                    <span className={styles.enrolledMetaItem}>
                        <span className="material-symbols-outlined" style={{ fontSize: '0.85rem' }}>tag</span>
                        {s.ma_lop_hoc_phan}
                    </span>
                    <span className={styles.enrolledMetaItem}>
                        <span className="material-symbols-outlined" style={{ fontSize: '0.85rem' }}>event_note</span>
                        {hocKyLabel(s.hoc_ky)} • {s.nam_hoc}
                    </span>
                    {s.giang_vien && (
                        <span className={styles.enrolledMetaItem}>
                            <span className="material-symbols-outlined" style={{ fontSize: '0.85rem' }}>person</span>
                            {s.giang_vien.ho_ten}
                        </span>
                    )}
                    {s.mon_hoc?.tin_chi && (
                        <span className={styles.enrolledMetaItem}>
                            <span className="material-symbols-outlined" style={{ fontSize: '0.85rem' }}>stars</span>
                            {s.mon_hoc.tin_chi} tín chỉ
                        </span>
                    )}
                </div>
            </div>
            <span className={`${styles.enrolledStatusBadge} ${conf.className}`}>{conf.label}</span>
            {!isCancelled && (
                <button
                    className={styles.cancelBtn}
                    onClick={() => onCancel(item.id, subjectName)}
                    disabled={cancellingId === item.id}
                >
                    {cancellingId === item.id ? (
                        <span className={`material-symbols-outlined ${styles.spinner}`}>sync</span>
                    ) : (
                        <span className="material-symbols-outlined" style={{ fontSize: '0.9rem' }}>close</span>
                    )}
                    Hủy
                </button>
            )}
        </div>
    );
}

// ---- Main Component ----
export default function EnrollmentPage() {
    const [activeTab, setActiveTab] = useState<'available' | 'enrolled'>('available');
    const [, startTransition] = useTransition();

    // Available sections
    const [sections, setSections] = useState<AvailableSection[]>([]);
    const [sectionsLoading, setSectionsLoading] = useState(true);
    const [filterHocKy, setFilterHocKy] = useState('');
    const [filterNamHoc, setFilterNamHoc] = useState('');
    const [search, setSearch] = useState('');
    const [enrollingId, setEnrollingId] = useState<number | null>(null);

    // My enrollments
    const [enrollments, setEnrollments] = useState<EnrolledItem[]>([]);
    const [enrollmentsLoading, setEnrollmentsLoading] = useState(true);
    const [cancellingId, setCancellingId] = useState<number | null>(null);

    // Confirm modal
    const [confirmModal, setConfirmModal] = useState<{ id: number; name: string } | null>(null);

    // Toast
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

    const showToast = useCallback((message: string, type: 'success' | 'error') => {
        setToast({ message, type });
    }, []);

    // Load available sections
    const loadSections = useCallback(async () => {
        setSectionsLoading(true);
        try {
            const data = await getAvailableSections({
                hoc_ky: filterHocKy || undefined,
                nam_hoc: filterNamHoc || undefined,
                search: search || undefined,
            });
            setSections(data);
        } catch {
            showToast('Không thể tải danh sách học phần.', 'error');
        } finally {
            setSectionsLoading(false);
        }
    }, [filterHocKy, filterNamHoc, search, showToast]);

    // Load enrollments
    const loadEnrollments = useCallback(async () => {
        setEnrollmentsLoading(true);
        try {
            const data = await getMyEnrollments();
            setEnrollments(data);
        } catch {
            showToast('Không thể tải danh sách đăng ký.', 'error');
        } finally {
            setEnrollmentsLoading(false);
        }
    }, [showToast]);

    useEffect(() => { loadSections(); }, [filterHocKy, filterNamHoc]);
    useEffect(() => {
        const t = setTimeout(() => loadSections(), 400);
        return () => clearTimeout(t);
    }, [search]);
    useEffect(() => { loadEnrollments(); }, []);

    // Enroll
    const handleEnroll = useCallback(async (sectionId: number) => {
        setEnrollingId(sectionId);
        try {
            await enrollSection(sectionId);
            showToast('Đăng ký học phần thành công! 🎉', 'success');
            startTransition(() => {
                loadSections();
                loadEnrollments();
            });
        } catch (err: any) {
            showToast(err.message || 'Đăng ký thất bại.', 'error');
        } finally {
            setEnrollingId(null);
        }
    }, [loadSections, loadEnrollments, showToast]);

    // Cancel
    const handleCancelClick = useCallback((id: number, name: string) => {
        setConfirmModal({ id, name });
    }, []);

    const handleCancelConfirm = useCallback(async () => {
        if (!confirmModal) return;
        const { id } = confirmModal;
        setConfirmModal(null);
        setCancellingId(id);
        try {
            await cancelEnrollment(id);
            showToast('Hủy đăng ký thành công.', 'success');
            startTransition(() => {
                loadEnrollments();
                loadSections();
            });
        } catch (err: any) {
            showToast(err.message || 'Hủy đăng ký thất bại.', 'error');
        } finally {
            setCancellingId(null);
        }
    }, [confirmModal, loadEnrollments, loadSections, showToast]);

    const activeEnrollments = enrollments.filter(e => e.trang_thai !== 'da_huy');
    const cancelledEnrollments = enrollments.filter(e => e.trang_thai === 'da_huy');

    return (
        <div className={styles.pageWrapper}>
            {/* Header */}
            <div className={styles.pageHeader}>
                <div className={styles.pageTitleBlock}>
                    <h1 className={styles.pageTitle}>
                        <span className={`material-symbols-outlined ${styles.pageTitleIcon}`}>
                            app_registration
                        </span>
                        Đăng ký Học phần
                    </h1>
                    <p className={styles.pageSubtitle}>
                        Chọn và đăng ký các học phần cho học kỳ hiện tại
                    </p>
                </div>
                <div className={styles.statRow}>
                    <span className={`${styles.statPill} ${styles.statPillBlue}`}>
                        <span className={`material-symbols-outlined ${styles.statPillIcon}`}>list_alt</span>
                        {sections.length} học phần khả dụng
                    </span>
                    <span className={`${styles.statPill} ${styles.statPillGreen}`}>
                        <span className={`material-symbols-outlined ${styles.statPillIcon}`}>check_circle</span>
                        {activeEnrollments.length} đã đăng ký
                    </span>
                </div>
            </div>

            {/* Tabs */}
            <div className={styles.tabBar}>
                <button
                    className={`${styles.tabBtn} ${activeTab === 'available' ? styles.tabBtnActive : ''}`}
                    onClick={() => setActiveTab('available')}
                >
                    <span className={`material-symbols-outlined ${styles.tabIcon}`}>search</span>
                    Đăng ký mới
                    {sections.length > 0 && (
                        <span className={styles.tabCount}>{sections.length}</span>
                    )}
                </button>
                <button
                    className={`${styles.tabBtn} ${activeTab === 'enrolled' ? styles.tabBtnActive : ''}`}
                    onClick={() => setActiveTab('enrolled')}
                >
                    <span className={`material-symbols-outlined ${styles.tabIcon}`}>assignment_turned_in</span>
                    Đã đăng ký
                    {activeEnrollments.length > 0 && (
                        <span className={styles.tabCount}>{activeEnrollments.length}</span>
                    )}
                </button>
            </div>

            {/* ---- TAB: Available ---- */}
            {activeTab === 'available' && (
                <>
                    {/* Filter Bar */}
                    <div className={styles.filterBar}>
                        <div className={styles.searchWrapper}>
                            <span className={`material-symbols-outlined ${styles.searchIcon}`}>search</span>
                            <input
                                type="text"
                                placeholder="Tìm theo tên môn, mã lớp..."
                                className={styles.searchInput}
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />
                        </div>
                        <select
                            className={styles.filterSelect}
                            value={filterHocKy}
                            onChange={e => setFilterHocKy(e.target.value)}
                        >
                            <option value="">Tất cả học kỳ</option>
                            <option value="HK1">Học kỳ 1</option>
                            <option value="HK2">Học kỳ 2</option>
                            <option value="HK3">Học kỳ 3</option>
                            <option value="HK4">Học kỳ 4</option>
                            <option value="HK5">Học kỳ 5</option>
                            <option value="HK6">Học kỳ 6</option>
                        </select>
                        <select
                            className={styles.filterSelect}
                            value={filterNamHoc}
                            onChange={e => setFilterNamHoc(e.target.value)}
                        >
                            <option value="">Tất cả năm học</option>
                            <option value="2023-2024">2023-2024</option>
                            <option value="2024-2025">2024-2025</option>
                            <option value="2025-2026">2025-2026</option>
                        </select>
                    </div>

                    {/* Cards */}
                    {sectionsLoading ? (
                        <div className={styles.loadingState}>
                            <span className={`material-symbols-outlined ${styles.spinner}`}>sync</span>
                            Đang tải danh sách học phần...
                        </div>
                    ) : sections.length === 0 ? (
                        <div className={styles.emptyState}>
                            <span className={`material-symbols-outlined ${styles.emptyIcon}`}>
                                search_off
                            </span>
                            <p className={styles.emptyTitle}>Không tìm thấy học phần</p>
                            <p className={styles.emptyDesc}>
                                Không có học phần nào phù hợp với bộ lọc hoặc bạn đã đăng ký tất cả học phần đang mở.
                            </p>
                        </div>
                    ) : (
                        <div className={styles.sectionsGrid}>
                            {sections.map(s => (
                                <SectionCard
                                    key={s.id}
                                    section={s}
                                    onEnroll={handleEnroll}
                                    enrollingId={enrollingId}
                                />
                            ))}
                        </div>
                    )}
                </>
            )}

            {/* ---- TAB: Enrolled ---- */}
            {activeTab === 'enrolled' && (
                <>
                    {enrollmentsLoading ? (
                        <div className={styles.loadingState}>
                            <span className={`material-symbols-outlined ${styles.spinner}`}>sync</span>
                            Đang tải danh sách đăng ký...
                        </div>
                    ) : enrollments.length === 0 ? (
                        <div className={styles.emptyState}>
                            <span className={`material-symbols-outlined ${styles.emptyIcon}`}>
                                assignment
                            </span>
                            <p className={styles.emptyTitle}>Chưa đăng ký học phần nào</p>
                            <p className={styles.emptyDesc}>
                                Chuyển sang tab &quot;Đăng ký mới&quot; để tìm và đăng ký học phần.
                            </p>
                        </div>
                    ) : (
                        <div className={styles.enrolledList}>
                            {activeEnrollments.length > 0 && (
                                <>
                                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        Đang học ({activeEnrollments.length})
                                    </div>
                                    {activeEnrollments.map(e => (
                                        <EnrolledCard
                                            key={e.id}
                                            item={e}
                                            onCancel={handleCancelClick}
                                            cancellingId={cancellingId}
                                        />
                                    ))}
                                </>
                            )}
                            {cancelledEnrollments.length > 0 && (
                                <>
                                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.5rem' }}>
                                        Đã hủy ({cancelledEnrollments.length})
                                    </div>
                                    {cancelledEnrollments.map(e => (
                                        <EnrolledCard
                                            key={e.id}
                                            item={e}
                                            onCancel={handleCancelClick}
                                            cancellingId={cancellingId}
                                        />
                                    ))}
                                </>
                            )}
                        </div>
                    )}
                </>
            )}

            {/* Confirm Modal */}
            {confirmModal && (
                <div className={styles.modalOverlay} onClick={() => setConfirmModal(null)}>
                    <div className={styles.modalBox} onClick={e => e.stopPropagation()}>
                        <div className={styles.modalIcon}>
                            <span className={`material-symbols-outlined ${styles.modalIconInner}`}>warning</span>
                        </div>
                        <h3 className={styles.modalTitle}>Xác nhận hủy đăng ký</h3>
                        <p className={styles.modalDesc}>
                            Bạn có chắc muốn hủy đăng ký học phần<br />
                            <strong>&quot;{confirmModal.name}&quot;</strong>?<br />
                            Hành động này không thể hoàn tác.
                        </p>
                        <div className={styles.modalActions}>
                            <button className={styles.modalBtnCancel} onClick={() => setConfirmModal(null)}>
                                Không, giữ lại
                            </button>
                            <button className={styles.modalBtnConfirm} onClick={handleCancelConfirm}>
                                Hủy đăng ký
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Toast */}
            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}
        </div>
    );
}
