'use client';

import React, { useState, useEffect, useCallback, useTransition } from 'react';
import baseStyles from '@/components/lecturer/enrollments/EnrollmentsManagement.module.css';
import extraStyles from '@/components/lecturer/enrollments/LecturerEnrollments.module.css';
import { getLecturerSections, getEnrollmentsBySection, cancelStudentEnrollment } from '@/app/actions/lecturer-enrollment';

// ---- Types ----
interface Section {
    id: number;
    ma_lop_hoc_phan: string;
    ten_lop?: string;
    hoc_ky: string;
    nam_hoc: string;
    si_so_toi_da: number;
    trang_thai: string;
    mon_hoc?: { ten_mon: string; ma_mon: string; tin_chi: number } | null;
    giang_vien?: { nguoi_dung?: { ho_ten: string } } | null;
}

interface SinhVienInfo {
    id: number;
    ma_sinh_vien: string;
    ho_ten: string;
    email?: string;
    lop?: string | null;
    khoa?: string | null;
}

interface Enrollment {
    id: number;
    trang_thai: 'cho_duyet' | 'da_duyet' | 'da_huy';
    ngay_dang_ky: string;
    sinh_vien?: SinhVienInfo | null;
}

interface SectionDetail {
    section: Section;
    enrollments: Enrollment[];
    stats: { total: number; da_duyet: number; cho_duyet: number; da_huy: number };
}

// ---- Helpers ----
function getInitials(name: string) {
    const parts = name.trim().split(' ');
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function formatDate(dateStr: string) {
    try {
        return new Date(dateStr).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
    } catch { return dateStr; }
}

const AVATAR_COLORS = [
    { bg: 'rgba(53,37,205,0.12)', color: '#3525cd' },
    { bg: 'rgba(126,48,0,0.12)', color: '#7e3000' },
    { bg: 'rgba(0,103,125,0.12)', color: '#00677d' },
];

type FilterStatus = 'all' | 'da_duyet' | 'cho_duyet' | 'da_huy';

export default function LecturerEnrollmentsPage() {
    const [, startTransition] = useTransition();

    const [sections, setSections] = useState<Section[]>([]);
    const [sectionsLoading, setSectionsLoading] = useState(true);
    const [selectedSectionId, setSelectedSectionId] = useState<number | null>(null);

    const [detail, setDetail] = useState<SectionDetail | null>(null);
    const [detailLoading, setDetailLoading] = useState(false);

    const [search, setSearch] = useState('');
    const [filterStatus, setFilterStatus] = useState<FilterStatus>('all');

    const [confirmCancel, setConfirmCancel] = useState<{ id: number; name: string } | null>(null);
    const [cancellingId, setCancellingId] = useState<number | null>(null);

    const [toast, setToast] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);

    const showToast = useCallback((msg: string, type: 'success' | 'error') => {
        setToast({ msg, type });
        setTimeout(() => setToast(null), 3500);
    }, []);

    // Load sections
    useEffect(() => {
        setSectionsLoading(true);
        getLecturerSections()
            .then((data: Section[]) => {
                setSections(data);
                if (data.length > 0) setSelectedSectionId(data[0].id);
            })
            .catch(() => showToast('Không thể tải danh sách học phần.', 'error'))
            .finally(() => setSectionsLoading(false));
    }, [showToast]);

    // Load enrollments of selected section
    const loadDetail = useCallback(async (sectionId: number) => {
        setDetailLoading(true);
        setDetail(null);
        try {
            const data = await getEnrollmentsBySection(sectionId);
            setDetail(data);
        } catch {
            showToast('Không thể tải danh sách sinh viên.', 'error');
        } finally {
            setDetailLoading(false);
        }
    }, [showToast]);

    useEffect(() => {
        if (selectedSectionId) loadDetail(selectedSectionId);
    }, [selectedSectionId, loadDetail]);

    // Cancel enrollment
    const handleCancelConfirm = useCallback(async () => {
        if (!confirmCancel) return;
        const { id } = confirmCancel;
        setConfirmCancel(null);
        setCancellingId(id);
        try {
            await cancelStudentEnrollment(id);
            showToast('Đã hủy đăng ký của sinh viên.', 'success');
            if (selectedSectionId) {
                startTransition(() => { loadDetail(selectedSectionId); });
            }
        } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : 'Hủy thất bại.';
            showToast(msg, 'error');
        } finally {
            setCancellingId(null);
        }
    }, [confirmCancel, selectedSectionId, loadDetail, showToast]);

    // Filtered
    const filteredEnrollments = (detail?.enrollments ?? []).filter(e => {
        const matchStatus = filterStatus === 'all' || e.trang_thai === filterStatus;
        const sv = e.sinh_vien;
        const q = search.toLowerCase();
        const matchSearch = !search || sv?.ho_ten?.toLowerCase().includes(q) || sv?.ma_sinh_vien?.toLowerCase().includes(q);
        return matchStatus && matchSearch;
    });

    const selectedSection = sections.find(s => s.id === selectedSectionId);

    const statusFilters: { key: FilterStatus; label: string }[] = [
        { key: 'all', label: 'Tất cả' },
        { key: 'da_duyet', label: 'Đã duyệt' },
        { key: 'cho_duyet', label: 'Chờ duyệt' },
        { key: 'da_huy', label: 'Đã hủy' },
    ];

    return (
        <div className={baseStyles.pageContainer}>
            {/* Page Header */}
            <div className={baseStyles.pageHeader}>
                <div>
                    <h1 className={baseStyles.pageTitle}>Quản Lý Đăng Ký Học Phần</h1>
                    <p className={baseStyles.pageSubtitle}>
                        Xem danh sách sinh viên đăng ký, theo dõi sĩ số theo từng lớp học phần của bạn.
                    </p>
                </div>
            </div>

            {/* Section Selector */}
            <div className={extraStyles.sectionSelectorCard}>
                <div className={extraStyles.selectorLabel}>
                    <span className="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>class</span>
                    Chọn lớp học phần
                </div>
                {sectionsLoading ? (
                    <div className={extraStyles.selectorLoading}>
                        <span className={`material-symbols-outlined ${extraStyles.spinIcon}`}>sync</span>
                        Đang tải...
                    </div>
                ) : sections.length === 0 ? (
                    <p style={{ color: '#777587', fontSize: '0.875rem' }}>Bạn chưa có lớp học phần nào.</p>
                ) : (
                    <div className={extraStyles.sectionTabs}>
                        {sections.map(s => (
                            <button
                                key={s.id}
                                className={`${extraStyles.sectionTab} ${selectedSectionId === s.id ? extraStyles.sectionTabActive : ''}`}
                                onClick={() => setSelectedSectionId(s.id)}
                            >
                                <span className={extraStyles.sectionTabCode}>{s.ma_lop_hoc_phan}</span>
                                <span className={extraStyles.sectionTabName}>{s.mon_hoc?.ten_mon || s.ten_lop || '—'}</span>
                                <span className={extraStyles.sectionTabBadge}>{s.hoc_ky} • {s.nam_hoc}</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Stats (show when detail loaded) */}
            {detail && (
                <section className={baseStyles.bentoGrid}>
                    <div className={`${baseStyles.statCard} ${baseStyles.statCardPrimary}`}>
                        <div className={baseStyles.statIconBox} style={{ backgroundColor: 'rgba(53,37,205,0.1)', color: '#3525cd' }}>
                            <span className="material-symbols-outlined">group</span>
                        </div>
                        <p className={baseStyles.statLabel}>Tổng đăng ký</p>
                        <h3 className={baseStyles.statValue}>{detail.stats.total}</h3>
                    </div>

                    <div className={baseStyles.statCard} style={{ borderLeft: '4px solid #059669' }}>
                        <div className={baseStyles.statIconBox} style={{ backgroundColor: 'rgba(5,150,105,0.1)', color: '#059669' }}>
                            <span className="material-symbols-outlined">how_to_reg</span>
                        </div>
                        <p className={baseStyles.statLabel}>Đã duyệt</p>
                        <h3 className={baseStyles.statValue}>{detail.stats.da_duyet}</h3>
                    </div>

                    <div className={`${baseStyles.statCard} ${baseStyles.statCardTertiary}`}>
                        <div className={baseStyles.statIconBox} style={{ backgroundColor: 'rgba(217,119,6,0.1)', color: '#d97706' }}>
                            <span className="material-symbols-outlined">hourglass_empty</span>
                        </div>
                        <p className={baseStyles.statLabel}>Chờ duyệt</p>
                        <h3 className={baseStyles.statValue}>{detail.stats.cho_duyet}</h3>
                    </div>

                    <div className={`${baseStyles.statCard} ${baseStyles.statCardFull}`}>
                        <div className={baseStyles.progressContainer}>
                            <h4 className={baseStyles.progressTitle}>Sĩ số lớp học phần</h4>
                            <p className={baseStyles.progressDesc}>
                                <strong>{detail.stats.da_duyet}</strong> / {selectedSection?.si_so_toi_da ?? '?'} sinh viên đã được duyệt trong lớp này
                            </p>
                            <div className={baseStyles.progressBarTrack}>
                                <div
                                    className={baseStyles.progressBarFill}
                                    style={{ width: `${Math.min(100, Math.round((detail.stats.da_duyet / (selectedSection?.si_so_toi_da || 1)) * 100))}%` }}
                                />
                            </div>
                        </div>
                        <div className={baseStyles.progressBgIcon}>
                            <span className="material-symbols-outlined" style={{ fontSize: '64px', color: '#eceef0' }}>bar_chart</span>
                        </div>
                    </div>
                </section>
            )}

            {/* Table */}
            <div className={baseStyles.tableContainer}>
                {/* Filter Bar */}
                <div className={baseStyles.filterBar}>
                    <div className={baseStyles.searchBox}>
                        <svg className={baseStyles.searchIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            className={baseStyles.searchInput}
                            placeholder="Tìm tên hoặc mã sinh viên..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                    </div>
                    <div className={baseStyles.filterTags}>
                        {statusFilters.map(f => (
                            <button
                                key={f.key}
                                className={`${baseStyles.filterTag} ${filterStatus === f.key ? baseStyles.filterTagActive : ''}`}
                                onClick={() => setFilterStatus(f.key)}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Table Content */}
                <div className={baseStyles.tableWrapper}>
                    {detailLoading ? (
                        <div style={{ textAlign: 'center', padding: '3rem', color: '#777587', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                            <span className={`material-symbols-outlined ${extraStyles.spinIcon}`}>sync</span>
                            Đang tải danh sách sinh viên...
                        </div>
                    ) : !detail && !sectionsLoading ? (
                        <div style={{ textAlign: 'center', padding: '3rem', color: '#aaa' }}>
                            Chọn một lớp học phần để xem danh sách đăng ký.
                        </div>
                    ) : detail ? (
                        <table className={baseStyles.table}>
                            <thead className={baseStyles.tableHeader}>
                                <tr>
                                    <th style={{ width: '40px' }}>#</th>
                                    <th>Sinh Viên</th>
                                    <th>Lớp / Khoa</th>
                                    <th>Ngày Đăng Ký</th>
                                    <th style={{ textAlign: 'center' }}>Trạng Thái</th>
                                    <th style={{ textAlign: 'right' }}>Hành Động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredEnrollments.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} style={{ textAlign: 'center', padding: '3rem', color: '#777587' }}>
                                            {search || filterStatus !== 'all'
                                                ? 'Không tìm thấy kết quả phù hợp.'
                                                : 'Chưa có sinh viên nào đăng ký lớp này.'}
                                        </td>
                                    </tr>
                                ) : filteredEnrollments.map((e, idx) => {
                                    const sv = e.sinh_vien;
                                    const colorSet = AVATAR_COLORS[idx % AVATAR_COLORS.length];
                                    const statusConf = {
                                        da_duyet: { cls: baseStyles.badgeEnrolled, label: 'Đã duyệt' },
                                        cho_duyet: { cls: baseStyles.badgePending, label: 'Chờ duyệt' },
                                        da_huy: { cls: baseStyles.badgeDropped, label: 'Đã hủy' },
                                    }[e.trang_thai];

                                    return (
                                        <tr
                                            key={e.id}
                                            className={baseStyles.tableRow}
                                            style={{ opacity: e.trang_thai === 'da_huy' ? 0.5 : 1 }}
                                        >
                                            <td className={baseStyles.tableCell}>
                                                <span style={{ color: '#aaa', fontSize: '0.8rem' }}>{idx + 1}</span>
                                            </td>
                                            <td className={baseStyles.tableCell}>
                                                <div className={baseStyles.studentInfo}>
                                                    <div
                                                        className={baseStyles.studentAvatar}
                                                        style={{ backgroundColor: colorSet.bg, color: colorSet.color }}
                                                    >
                                                        {sv ? getInitials(sv.ho_ten) : '?'}
                                                    </div>
                                                    <div>
                                                        <p className={baseStyles.studentName}>{sv?.ho_ten ?? 'N/A'}</p>
                                                        <p className={baseStyles.studentCode}>{sv?.ma_sinh_vien ?? '—'}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={baseStyles.tableCell}>
                                                <p className={baseStyles.cellPrimaryText}>{sv?.lop ?? '—'}</p>
                                                <p className={baseStyles.cellSecondaryText}>{sv?.khoa ?? '—'}</p>
                                            </td>
                                            <td className={baseStyles.tableCell}>
                                                <span className={baseStyles.cellPrimaryText}>{formatDate(e.ngay_dang_ky)}</span>
                                            </td>
                                            <td className={baseStyles.tableCell} style={{ textAlign: 'center' }}>
                                                <div className={`${baseStyles.badge} ${statusConf.cls}`}>
                                                    <span className={baseStyles.badgeDot} />
                                                    {statusConf.label}
                                                </div>
                                            </td>
                                            <td className={baseStyles.tableCell}>
                                                <div className={baseStyles.actionGroup}>
                                                    {e.trang_thai !== 'da_huy' && (
                                                        <button
                                                            className={`${baseStyles.btnActionOutline} ${baseStyles.btnReject}`}
                                                            onClick={() => setConfirmCancel({ id: e.id, name: sv?.ho_ten ?? 'sinh viên này' })}
                                                            disabled={cancellingId === e.id}
                                                        >
                                                            {cancellingId === e.id
                                                                ? <span className={`material-symbols-outlined ${extraStyles.spinIcon}`} style={{ fontSize: '0.9rem', lineHeight: 1 }}>sync</span>
                                                                : null
                                                            }
                                                            Hủy ĐK
                                                        </button>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    ) : null}
                </div>

                {/* Footer */}
                {detail && !detailLoading && (
                    <div style={{
                        padding: '0.875rem 1.5rem',
                        borderTop: '1px solid #eceef0',
                        fontSize: '0.8rem',
                        color: '#777587',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <span>Hiển thị <strong>{filteredEnrollments.length}</strong> / {detail.enrollments.length} lượt đăng ký</span>
                        <span style={{ fontFamily: 'monospace' }}>
                            {selectedSection?.ma_lop_hoc_phan} • {selectedSection?.mon_hoc?.ten_mon}
                        </span>
                    </div>
                )}
            </div>

            {/* Confirm Cancel Modal */}
            {confirmCancel && (
                <div className={baseStyles.modalOverlay} onClick={() => setConfirmCancel(null)}>
                    <div className={baseStyles.modalContent} onClick={e => e.stopPropagation()}>
                        <div className={baseStyles.modalHeader}>
                            <h3 className={baseStyles.modalTitle}>Xác nhận hủy đăng ký</h3>
                            <button className={baseStyles.btnCloseModal} onClick={() => setConfirmCancel(null)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className={baseStyles.modalBody}>
                            <p style={{ color: '#464555', lineHeight: 1.6, fontSize: '0.9rem' }}>
                                Bạn có chắc muốn hủy đăng ký học phần của sinh viên{' '}
                                <strong>&quot;{confirmCancel.name}&quot;</strong>?
                                <br />Hành động này không thể hoàn tác.
                            </p>
                        </div>
                        <div className={baseStyles.modalFooter}>
                            <button className={baseStyles.btnCancel} onClick={() => setConfirmCancel(null)}>
                                Không, giữ lại
                            </button>
                            <button
                                className={baseStyles.btnSave}
                                style={{ backgroundColor: '#ba1a1a' }}
                                onClick={handleCancelConfirm}
                            >
                                Hủy đăng ký
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Toast */}
            {toast && (
                <div style={{
                    position: 'fixed', bottom: '2rem', right: '2rem',
                    background: toast.type === 'success' ? '#0f172a' : '#7f1d1d',
                    color: 'white', padding: '0.875rem 1.25rem',
                    borderRadius: '0.75rem', fontSize: '0.875rem', fontWeight: 600,
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)', zIndex: 2000,
                    animation: 'toastIn 0.3s ease',
                }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>
                        {toast.type === 'success' ? 'check_circle' : 'error'}
                    </span>
                    {toast.msg}
                </div>
            )}
        </div>
    );
}
