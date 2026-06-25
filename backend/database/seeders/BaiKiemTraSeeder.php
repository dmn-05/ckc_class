<?php

namespace Database\Seeders;

use App\Models\BaiKiemTra;
use App\Models\BoMon;
use App\Models\GiangVien;
use App\Models\Khoa;
use App\Models\LopHocPhan;
use App\Models\MonHoc;
use App\Models\NguoiDung;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class BaiKiemTraSeeder extends Seeder
{
    public function run(): void
    {
        // 1. KHOA (Faculties)
        $khoa = [
            ['ma_khoa' => 'CNTT', 'ten_khoa' => 'Công nghệ Thông tin', 'trang_thai' => 'dang_hoat_dong'],
            ['ma_khoa' => 'KT',   'ten_khoa' => 'Kinh tế',            'trang_thai' => 'dang_hoat_dong'],
            ['ma_khoa' => 'NN',   'ten_khoa' => 'Ngoại ngữ',          'trang_thai' => 'dang_hoat_dong'],
        ];
        foreach ($khoa as $item) {
            Khoa::firstOrCreate(['ma_khoa' => $item['ma_khoa']], $item);
        }
        $khoaIds = Khoa::pluck('id', 'ma_khoa');

        // 2. BO_MON (Departments)
        $boMon = [
            ['ma_bo_mon' => 'HTTT', 'ten_bo_mon' => 'Hệ thống Thông tin',       'khoa_id' => $khoaIds['CNTT'], 'trang_thai' => 'dang_hoat_dong'],
            ['ma_bo_mon' => 'KTPM', 'ten_bo_mon' => 'Kỹ thuật Phần mềm',         'khoa_id' => $khoaIds['CNTT'], 'trang_thai' => 'dang_hoat_dong'],
            ['ma_bo_mon' => 'QTKD', 'ten_bo_mon' => 'Quản trị Kinh doanh',       'khoa_id' => $khoaIds['KT'],   'trang_thai' => 'dang_hoat_dong'],
            ['ma_bo_mon' => 'NNAnh','ten_bo_mon' => 'Ngôn ngữ Anh',              'khoa_id' => $khoaIds['NN'],   'trang_thai' => 'dang_hoat_dong'],
        ];
        foreach ($boMon as $item) {
            BoMon::firstOrCreate(['ma_bo_mon' => $item['ma_bo_mon']], $item);
        }
        $boMonIds = BoMon::pluck('id', 'ma_bo_mon');

        // 3. MON_HOC (Subjects)
        $monHoc = [
            ['ma_mon' => 'CSDL',   'ten_mon' => 'Cơ sở dữ liệu',             'tin_chi' => 3, 'khoa_id' => $khoaIds['CNTT'], 'bo_mon_id' => $boMonIds['HTTT'], 'trang_thai' => 'dang_mo'],
            ['ma_mon' => 'CTDL',   'ten_mon' => 'Cấu trúc dữ liệu & Giải thuật','tin_chi' => 4, 'khoa_id' => $khoaIds['CNTT'], 'bo_mon_id' => $boMonIds['KTPM'], 'trang_thai' => 'dang_mo'],
            ['ma_mon' => 'PTKT',   'ten_mon' => 'Phân tích & Thiết kế hệ thống','tin_chi' => 3, 'khoa_id' => $khoaIds['CNTT'], 'bo_mon_id' => $boMonIds['HTTT'], 'trang_thai' => 'dang_mo'],
            ['ma_mon' => 'LTCB',   'ten_mon' => 'Lập trình cơ bản',            'tin_chi' => 4, 'khoa_id' => $khoaIds['CNTT'], 'bo_mon_id' => $boMonIds['KTPM'], 'trang_thai' => 'dang_mo'],
            ['ma_mon' => 'KTVC',   'ten_mon' => 'Kinh tế vĩ mô',               'tin_chi' => 3, 'khoa_id' => $khoaIds['KT'],   'bo_mon_id' => $boMonIds['QTKD'], 'trang_thai' => 'dang_mo'],
            ['ma_mon' => 'QTCN',   'ten_mon' => 'Quản trị chiến lược',         'tin_chi' => 2, 'khoa_id' => $khoaIds['KT'],   'bo_mon_id' => $boMonIds['QTKD'], 'trang_thai' => 'dang_mo'],
            ['ma_mon' => 'AV1',    'ten_mon' => 'Tiếng Anh 1',                 'tin_chi' => 3, 'khoa_id' => $khoaIds['NN'],   'bo_mon_id' => $boMonIds['NNAnh'],'trang_thai' => 'dang_mo'],
            ['ma_mon' => 'AV2',    'ten_mon' => 'Tiếng Anh 2',                 'tin_chi' => 3, 'khoa_id' => $khoaIds['NN'],   'bo_mon_id' => $boMonIds['NNAnh'],'trang_thai' => 'dang_mo'],
        ];
        foreach ($monHoc as $item) {
            MonHoc::firstOrCreate(['ma_mon' => $item['ma_mon']], $item);
        }
        $monHocIds = MonHoc::pluck('id', 'ma_mon');

        // 4. NGUOI_DUNG (Users — lecturers)
        $lecturers = [
            ['ho_ten' => 'Nguyễn Văn An',     'email' => 'an.nguyen@class.edu',   'mat_khau' => Hash::make('password'), 'vai_tro_id' => 2, 'trang_thai' => 'dang_hoat_dong'],
            ['ho_ten' => 'Trần Thị Bình',     'email' => 'binh.tran@class.edu',   'mat_khau' => Hash::make('password'), 'vai_tro_id' => 2, 'trang_thai' => 'dang_hoat_dong'],
            ['ho_ten' => 'Lê Quang Cường',    'email' => 'cuong.le@class.edu',    'mat_khau' => Hash::make('password'), 'vai_tro_id' => 2, 'trang_thai' => 'dang_hoat_dong'],
            ['ho_ten' => 'Phạm Thị Dung',     'email' => 'dung.pham@class.edu',   'mat_khau' => Hash::make('password'), 'vai_tro_id' => 2, 'trang_thai' => 'dang_hoat_dong'],
            ['ho_ten' => 'Hoàng Văn Em',      'email' => 'em.hoang@class.edu',    'mat_khau' => Hash::make('password'), 'vai_tro_id' => 2, 'trang_thai' => 'dang_hoat_dong'],
        ];
        $lecturerUserIds = [];
        foreach ($lecturers as $item) {
            $user = NguoiDung::firstOrCreate(
                ['email' => $item['email']],
                $item
            );
            $lecturerUserIds[] = $user->id;
        }

        // 5. GIANG_VIEN (Lecturers)
        $giangVienData = [
            ['nguoi_dung_id' => $lecturerUserIds[0], 'ma_giang_vien' => 'GV001', 'gioi_tinh' => 'nam', 'cccd' => '001099000001', 'bo_mon_id' => $boMonIds['HTTT'], 'trang_thai' => 'dang_day'],
            ['nguoi_dung_id' => $lecturerUserIds[1], 'ma_giang_vien' => 'GV002', 'gioi_tinh' => 'nu',  'cccd' => '001099000002', 'bo_mon_id' => $boMonIds['KTPM'], 'trang_thai' => 'dang_day'],
            ['nguoi_dung_id' => $lecturerUserIds[2], 'ma_giang_vien' => 'GV003', 'gioi_tinh' => 'nam', 'cccd' => '001099000003', 'bo_mon_id' => $boMonIds['QTKD'], 'trang_thai' => 'dang_day'],
            ['nguoi_dung_id' => $lecturerUserIds[3], 'ma_giang_vien' => 'GV004', 'gioi_tinh' => 'nu',  'cccd' => '001099000004', 'bo_mon_id' => $boMonIds['NNAnh'],'trang_thai' => 'dang_day'],
            ['nguoi_dung_id' => $lecturerUserIds[4], 'ma_giang_vien' => 'GV005', 'gioi_tinh' => 'nam', 'cccd' => '001099000005', 'bo_mon_id' => $boMonIds['HTTT'], 'trang_thai' => 'dang_day'],
        ];
        $giangVienIds = [];
        foreach ($giangVienData as $item) {
            $gv = GiangVien::firstOrCreate(
                ['ma_giang_vien' => $item['ma_giang_vien']],
                $item
            );
            $giangVienIds[] = $gv->id;
        }

        // 6. LOP_HOC_PHAN (Course Sections)
        $hocKyNam = ['HK1', 'HK2'];
        $lopHocPhanData = [
            ['ma_lop_hoc_phan' => 'CSDL_01_2025', 'ten_lop' => 'Cơ sở dữ liệu - 01',      'mon_hoc_id' => $monHocIds['CSDL'], 'giang_vien_id' => $giangVienIds[0], 'hoc_ky' => 'HK1', 'nam_hoc' => '2025-2026', 'si_so_toi_da' => 60, 'trang_thai' => 'dang_mo'],
            ['ma_lop_hoc_phan' => 'CSDL_02_2025', 'ten_lop' => 'Cơ sở dữ liệu - 02',      'mon_hoc_id' => $monHocIds['CSDL'], 'giang_vien_id' => $giangVienIds[4], 'hoc_ky' => 'HK1', 'nam_hoc' => '2025-2026', 'si_so_toi_da' => 55, 'trang_thai' => 'dang_mo'],
            ['ma_lop_hoc_phan' => 'CTDL_01_2025', 'ten_lop' => 'CTDL & Giải thuật - 01',  'mon_hoc_id' => $monHocIds['CTDL'], 'giang_vien_id' => $giangVienIds[1], 'hoc_ky' => 'HK1', 'nam_hoc' => '2025-2026', 'si_so_toi_da' => 50, 'trang_thai' => 'dang_mo'],
            ['ma_lop_hoc_phan' => 'LTCB_01_2025', 'ten_lop' => 'Lập trình cơ bản - 01',   'mon_hoc_id' => $monHocIds['LTCB'], 'giang_vien_id' => $giangVienIds[0], 'hoc_ky' => 'HK2', 'nam_hoc' => '2025-2026', 'si_so_toi_da' => 65, 'trang_thai' => 'dang_mo'],
            ['ma_lop_hoc_phan' => 'KTVC_01_2025', 'ten_lop' => 'Kinh tế vĩ mô - 01',      'mon_hoc_id' => $monHocIds['KTVC'], 'giang_vien_id' => $giangVienIds[2], 'hoc_ky' => 'HK1', 'nam_hoc' => '2025-2026', 'si_so_toi_da' => 70, 'trang_thai' => 'dang_mo'],
            ['ma_lop_hoc_phan' => 'AV1_01_2025',  'ten_lop' => 'Tiếng Anh 1 - 01',        'mon_hoc_id' => $monHocIds['AV1'],  'giang_vien_id' => $giangVienIds[3], 'hoc_ky' => 'HK1', 'nam_hoc' => '2025-2026', 'si_so_toi_da' => 80, 'trang_thai' => 'dang_mo'],
            ['ma_lop_hoc_phan' => 'AV2_01_2025',  'ten_lop' => 'Tiếng Anh 2 - 01',        'mon_hoc_id' => $monHocIds['AV2'],  'giang_vien_id' => $giangVienIds[3], 'hoc_ky' => 'HK2', 'nam_hoc' => '2025-2026', 'si_so_toi_da' => 75, 'trang_thai' => 'dang_mo'],
            ['ma_lop_hoc_phan' => 'PTKT_01_2025', 'ten_lop' => 'PT & TK hệ thống - 01',   'mon_hoc_id' => $monHocIds['PTKT'], 'giang_vien_id' => $giangVienIds[4], 'hoc_ky' => 'HK2', 'nam_hoc' => '2025-2026', 'si_so_toi_da' => 45, 'trang_thai' => 'dang_mo'],
        ];
        $lopHocPhanIds = [];
        foreach ($lopHocPhanData as $item) {
            $lhp = LopHocPhan::firstOrCreate(
                ['ma_lop_hoc_phan' => $item['ma_lop_hoc_phan']],
                $item
            );
            $lopHocPhanIds[] = $lhp->id;
        }

        // Map sections by mon_hoc for easy reference
        $secByMon = [
            'CSDL' => [$lopHocPhanIds[0], $lopHocPhanIds[1]],
            'CTDL' => [$lopHocPhanIds[2]],
            'LTCB' => [$lopHocPhanIds[3]],
            'KTVC' => [$lopHocPhanIds[4]],
            'AV1'  => [$lopHocPhanIds[5]],
            'AV2'  => [$lopHocPhanIds[6]],
            'PTKT' => [$lopHocPhanIds[7]],
        ];

        $now = Carbon::now();

        // ========================================================================
        // 7. BAI_KIEM_TRA (Exams) — 25 records with various configurations
        // ========================================================================
        $exams = [

            // ---- CSDL - Lớp 01 (GV: Nguyễn Văn An - nguoi_tao_id = lecturerUserIds[0]) ----
            [
                'tieu_de'             => 'Kiểm tra giữa kỳ - CSDL',
                'mo_ta'               => 'Bài kiểm tra giữa kỳ môn Cơ sở dữ liệu. Nội dung gồm các kiến thức về đại số quan hệ, SQL cơ bản.',
                'lop_hoc_phan_id'     => $secByMon['CSDL'][0],
                'nguoi_tao_id'        => $lecturerUserIds[0],
                'thoi_gian_bat_dau'   => (clone $now)->subDays(10),
                'thoi_gian_ket_thuc'  => (clone $now)->subDays(10)->addHours(2),
                'thoi_gian_lam_bai'   => 60,
                'diem_toi_da'         => 10,
                'diem_dat'            => 5,
                'so_lan_thi_toi_da'   => 1,
                'hinh_thuc'           => 'trac_nghiem',
                'xao_tron_cau_hoi'    => true,
                'xao_tron_dap_an'     => true,
                'hien_dap_an_sau_nop' => true,
                'trang_thai'          => 'hien_thi',
            ],
            [
                'tieu_de'             => 'Kiểm tra cuối kỳ - CSDL',
                'mo_ta'               => 'Bài kiểm tra cuối kỳ môn Cơ sở dữ liệu. Toàn bộ chương trình.',
                'lop_hoc_phan_id'     => $secByMon['CSDL'][0],
                'nguoi_tao_id'        => $lecturerUserIds[0],
                'thoi_gian_bat_dau'   => (clone $now)->addDays(20),
                'thoi_gian_ket_thuc'  => (clone $now)->addDays(20)->addHours(3),
                'thoi_gian_lam_bai'   => 120,
                'diem_toi_da'         => 10,
                'diem_dat'            => 5,
                'so_lan_thi_toi_da'   => 1,
                'hinh_thuc'           => 'hon_hop',
                'xao_tron_cau_hoi'    => true,
                'xao_tron_dap_an'     => true,
                'hien_dap_an_sau_nop' => false,
                'trang_thai'          => 'hien_thi',
            ],
            [
                'tieu_de'             => 'Bài tập thực hành SQL - Tuần 5',
                'mo_ta'               => 'Bài tập thực hành các câu lệnh SQL cơ bản (SELECT, INSERT, UPDATE, DELETE).',
                'lop_hoc_phan_id'     => $secByMon['CSDL'][0],
                'nguoi_tao_id'        => $lecturerUserIds[0],
                'thoi_gian_bat_dau'   => null,
                'thoi_gian_ket_thuc'  => null,
                'thoi_gian_lam_bai'   => 45,
                'diem_toi_da'         => 10,
                'diem_dat'            => 4,
                'so_lan_thi_toi_da'   => 3,
                'hinh_thuc'           => 'tu_luan',
                'xao_tron_cau_hoi'    => false,
                'xao_tron_dap_an'     => false,
                'hien_dap_an_sau_nop' => false,
                'trang_thai'          => 'hien_thi',
            ],

            // ---- CSDL - Lớp 02 (GV: Hoàng Văn Em - lecturerUserIds[4]) ----
            [
                'tieu_de'             => 'Quiz 1 - Đại số quan hệ',
                'mo_ta'               => 'Kiểm tra nhanh về đại số quan hệ: phép chọn, phép chiếu, phép kết.',
                'lop_hoc_phan_id'     => $secByMon['CSDL'][1],
                'nguoi_tao_id'        => $lecturerUserIds[4],
                'thoi_gian_bat_dau'   => (clone $now)->subDays(5),
                'thoi_gian_ket_thuc'  => (clone $now)->subDays(5)->addHour(),
                'thoi_gian_lam_bai'   => 30,
                'diem_toi_da'         => 10,
                'diem_dat'            => 5,
                'so_lan_thi_toi_da'   => 2,
                'hinh_thuc'           => 'trac_nghiem',
                'xao_tron_cau_hoi'    => true,
                'xao_tron_dap_an'     => true,
                'hien_dap_an_sau_nop' => true,
                'trang_thai'          => 'hien_thi',
            ],
            [
                'tieu_de'             => 'Giữa kỳ - CSDL (Lớp 02)',
                'mo_ta'               => 'Bài kiểm tra giữa kỳ môn CSDL lớp 02.',
                'lop_hoc_phan_id'     => $secByMon['CSDL'][1],
                'nguoi_tao_id'        => $lecturerUserIds[4],
                'thoi_gian_bat_dau'   => (clone $now)->addDays(3),
                'thoi_gian_ket_thuc'  => (clone $now)->addDays(3)->addHours(2),
                'thoi_gian_lam_bai'   => 90,
                'diem_toi_da'         => 10,
                'diem_dat'            => 5,
                'so_lan_thi_toi_da'   => 1,
                'hinh_thuc'           => 'hon_hop',
                'xao_tron_cau_hoi'    => true,
                'xao_tron_dap_an'     => true,
                'hien_dap_an_sau_nop' => false,
                'trang_thai'          => 'hien_thi',
            ],
            [
                'tieu_de'             => 'Bài tập ERD',
                'mo_ta'               => 'Vẽ mô hình ERD cho hệ thống quản lý thư viện.',
                'lop_hoc_phan_id'     => $secByMon['CSDL'][1],
                'nguoi_tao_id'        => $lecturerUserIds[4],
                'thoi_gian_bat_dau'   => null,
                'thoi_gian_ket_thuc'  => null,
                'thoi_gian_lam_bai'   => 60,
                'diem_toi_da'         => 10,
                'diem_dat'            => 5,
                'so_lan_thi_toi_da'   => 1,
                'hinh_thuc'           => 'tu_luan',
                'xao_tron_cau_hoi'    => false,
                'xao_tron_dap_an'     => false,
                'hien_dap_an_sau_nop' => true,
                'trang_thai'          => 'nhap',
            ],

            // ---- CTDL & GT (GV: Trần Thị Bình - lecturerUserIds[1]) ----
            [
                'tieu_de'             => 'Kiểm tra 15 phút - Stack & Queue',
                'mo_ta'               => 'Kiểm tra kiến thức về ngăn xếp và hàng đợi.',
                'lop_hoc_phan_id'     => $secByMon['CTDL'][0],
                'nguoi_tao_id'        => $lecturerUserIds[1],
                'thoi_gian_bat_dau'   => (clone $now)->subDays(3),
                'thoi_gian_ket_thuc'  => (clone $now)->subDays(3)->addMinutes(20),
                'thoi_gian_lam_bai'   => 15,
                'diem_toi_da'         => 10,
                'diem_dat'            => 5,
                'so_lan_thi_toi_da'   => 1,
                'hinh_thuc'           => 'trac_nghiem',
                'xao_tron_cau_hoi'    => true,
                'xao_tron_dap_an'     => true,
                'hien_dap_an_sau_nop' => true,
                'trang_thai'          => 'hien_thi',
            ],
            [
                'tieu_de'             => 'Giữa kỳ - CTDL & GT',
                'mo_ta'               => 'Bài kiểm tra giữa kỳ: danh sách liên kết, cây nhị phân, sắp xếp.',
                'lop_hoc_phan_id'     => $secByMon['CTDL'][0],
                'nguoi_tao_id'        => $lecturerUserIds[1],
                'thoi_gian_bat_dau'   => (clone $now)->subDay(),
                'thoi_gian_ket_thuc'  => (clone $now)->subDay()->addHours(2),
                'thoi_gian_lam_bai'   => 90,
                'diem_toi_da'         => 10,
                'diem_dat'            => 5,
                'so_lan_thi_toi_da'   => 1,
                'hinh_thuc'           => 'hon_hop',
                'xao_tron_cau_hoi'    => true,
                'xao_tron_dap_an'     => true,
                'hien_dap_an_sau_nop' => false,
                'trang_thai'          => 'hien_thi',
            ],
            [
                'tieu_de'             => 'Ôn tập cuối kỳ - Đề số 1',
                'mo_ta'               => 'Đề ôn tập cuối kỳ môn CTDL & GT.',
                'lop_hoc_phan_id'     => $secByMon['CTDL'][0],
                'nguoi_tao_id'        => $lecturerUserIds[1],
                'thoi_gian_bat_dau'   => null,
                'thoi_gian_ket_thuc'  => null,
                'thoi_gian_lam_bai'   => 120,
                'diem_toi_da'         => 10,
                'diem_dat'            => 5,
                'so_lan_thi_toi_da'   => 5,
                'hinh_thuc'           => 'hon_hop',
                'xao_tron_cau_hoi'    => false,
                'xao_tron_dap_an'     => false,
                'hien_dap_an_sau_nop' => true,
                'trang_thai'          => 'hien_thi',
            ],
            [
                'tieu_de'             => 'Bài tập về nhà - Đệ quy',
                'mo_ta'               => 'Bài tập về các thuật toán đệ quy cơ bản.',
                'lop_hoc_phan_id'     => $secByMon['CTDL'][0],
                'nguoi_tao_id'        => $lecturerUserIds[1],
                'thoi_gian_bat_dau'   => null,
                'thoi_gian_ket_thuc'  => null,
                'thoi_gian_lam_bai'   => 60,
                'diem_toi_da'         => 10,
                'diem_dat'            => 4,
                'so_lan_thi_toi_da'   => 3,
                'hinh_thuc'           => 'tu_luan',
                'xao_tron_cau_hoi'    => false,
                'xao_tron_dap_an'     => false,
                'hien_dap_an_sau_nop' => false,
                'trang_thai'          => 'an',
            ],

            // ---- LTCB (GV: Nguyễn Văn An - lecturerUserIds[0]) ----
            [
                'tieu_de'             => 'Quiz - Biến & Kiểu dữ liệu',
                'mo_ta'               => 'Kiểm tra kiến thức về biến, kiểu dữ liệu trong C.',
                'lop_hoc_phan_id'     => $secByMon['LTCB'][0],
                'nguoi_tao_id'        => $lecturerUserIds[0],
                'thoi_gian_bat_dau'   => (clone $now)->addHours(2),
                'thoi_gian_ket_thuc'  => (clone $now)->addHours(3),
                'thoi_gian_lam_bai'   => 20,
                'diem_toi_da'         => 10,
                'diem_dat'            => 5,
                'so_lan_thi_toi_da'   => 2,
                'hinh_thuc'           => 'trac_nghiem',
                'xao_tron_cau_hoi'    => true,
                'xao_tron_dap_an'     => true,
                'hien_dap_an_sau_nop' => true,
                'trang_thai'          => 'hien_thi',
            ],
            [
                'tieu_de'             => 'Kiểm tra giữa kỳ - LTCB',
                'mo_ta'               => 'Kiểm tra giữa kỳ: con trỏ, mảng, hàm.',
                'lop_hoc_phan_id'     => $secByMon['LTCB'][0],
                'nguoi_tao_id'        => $lecturerUserIds[0],
                'thoi_gian_bat_dau'   => (clone $now)->addDays(7),
                'thoi_gian_ket_thuc'  => (clone $now)->addDays(7)->addHours(2),
                'thoi_gian_lam_bai'   => 90,
                'diem_toi_da'         => 10,
                'diem_dat'            => 5,
                'so_lan_thi_toi_da'   => 1,
                'hinh_thuc'           => 'hon_hop',
                'xao_tron_cau_hoi'    => true,
                'xao_tron_dap_an'     => true,
                'hien_dap_an_sau_nop' => false,
                'trang_thai'          => 'hien_thi',
            ],
            [
                'tieu_de'             => 'Thực hành - Vòng lặp & Mảng',
                'mo_ta'               => 'Bài thực hành về vòng lặp và thao tác trên mảng 1 chiều.',
                'lop_hoc_phan_id'     => $secByMon['LTCB'][0],
                'nguoi_tao_id'        => $lecturerUserIds[0],
                'thoi_gian_bat_dau'   => null,
                'thoi_gian_ket_thuc'  => null,
                'thoi_gian_lam_bai'   => 45,
                'diem_toi_da'         => 10,
                'diem_dat'            => 5,
                'so_lan_thi_toi_da'   => 3,
                'hinh_thuc'           => 'tu_luan',
                'xao_tron_cau_hoi'    => false,
                'xao_tron_dap_an'     => false,
                'hien_dap_an_sau_nop' => true,
                'trang_thai'          => 'nhap',
            ],

            // ---- KTVC (GV: Lê Quang Cường - lecturerUserIds[2]) ----
            [
                'tieu_de'             => 'Kiểm tra 15 phút - Cung cầu',
                'mo_ta'               => 'Kiểm tra kiến thức về quy luật cung cầu.',
                'lop_hoc_phan_id'     => $secByMon['KTVC'][0],
                'nguoi_tao_id'        => $lecturerUserIds[2],
                'thoi_gian_bat_dau'   => (clone $now)->subDays(15),
                'thoi_gian_ket_thuc'  => (clone $now)->subDays(15)->addMinutes(20),
                'thoi_gian_lam_bai'   => 15,
                'diem_toi_da'         => 10,
                'diem_dat'            => 5,
                'so_lan_thi_toi_da'   => 2,
                'hinh_thuc'           => 'trac_nghiem',
                'xao_tron_cau_hoi'    => true,
                'xao_tron_dap_an'     => true,
                'hien_dap_an_sau_nop' => true,
                'trang_thai'          => 'hien_thi',
            ],
            [
                'tieu_de'             => 'Giữa kỳ - Kinh tế vĩ mô',
                'mo_ta'               => 'Bài kiểm tra giữa kỳ: GDP, lạm phát, thất nghiệp.',
                'lop_hoc_phan_id'     => $secByMon['KTVC'][0],
                'nguoi_tao_id'        => $lecturerUserIds[2],
                'thoi_gian_bat_dau'   => (clone $now)->subDays(2),
                'thoi_gian_ket_thuc'  => (clone $now)->subDays(2)->addHours(2),
                'thoi_gian_lam_bai'   => 90,
                'diem_toi_da'         => 10,
                'diem_dat'            => 5,
                'so_lan_thi_toi_da'   => 1,
                'hinh_thuc'           => 'hon_hop',
                'xao_tron_cau_hoi'    => true,
                'xao_tron_dap_an'     => true,
                'hien_dap_an_sau_nop' => false,
                'trang_thai'          => 'hien_thi',
            ],
            [
                'tieu_de'             => 'Bài tập - Tính GDP',
                'mo_ta'               => 'Bài tập tính GDP theo phương pháp chi tiêu và thu nhập.',
                'lop_hoc_phan_id'     => $secByMon['KTVC'][0],
                'nguoi_tao_id'        => $lecturerUserIds[2],
                'thoi_gian_bat_dau'   => null,
                'thoi_gian_ket_thuc'  => null,
                'thoi_gian_lam_bai'   => 60,
                'diem_toi_da'         => 10,
                'diem_dat'            => 5,
                'so_lan_thi_toi_da'   => 3,
                'hinh_thuc'           => 'tu_luan',
                'xao_tron_cau_hoi'    => false,
                'xao_tron_dap_an'     => false,
                'hien_dap_an_sau_nop' => true,
                'trang_thai'          => 'hien_thi',
            ],
            [
                'tieu_de'             => 'Đề thi thử cuối kỳ',
                'mo_ta'               => 'Đề thi thử cuối kỳ môn Kinh tế vĩ mô (dạng trắc nghiệm).',
                'lop_hoc_phan_id'     => $secByMon['KTVC'][0],
                'nguoi_tao_id'        => $lecturerUserIds[2],
                'thoi_gian_bat_dau'   => null,
                'thoi_gian_ket_thuc'  => null,
                'thoi_gian_lam_bai'   => 45,
                'diem_toi_da'         => 10,
                'diem_dat'            => 4,
                'so_lan_thi_toi_da'   => 5,
                'hinh_thuc'           => 'trac_nghiem',
                'xao_tron_cau_hoi'    => true,
                'xao_tron_dap_an'     => true,
                'hien_dap_an_sau_nop' => true,
                'trang_thai'          => 'hien_thi',
            ],

            // ---- AV1 (GV: Phạm Thị Dung - lecturerUserIds[3]) ----
            [
                'tieu_de'             => 'Vocabulary Quiz - Unit 1',
                'mo_ta'               => 'Kiểm tra từ vựng Unit 1: Family & Friends.',
                'lop_hoc_phan_id'     => $secByMon['AV1'][0],
                'nguoi_tao_id'        => $lecturerUserIds[3],
                'thoi_gian_bat_dau'   => (clone $now)->subDays(7),
                'thoi_gian_ket_thuc'  => (clone $now)->subDays(7)->addMinutes(30),
                'thoi_gian_lam_bai'   => 20,
                'diem_toi_da'         => 10,
                'diem_dat'            => 5,
                'so_lan_thi_toi_da'   => 3,
                'hinh_thuc'           => 'trac_nghiem',
                'xao_tron_cau_hoi'    => true,
                'xao_tron_dap_an'     => true,
                'hien_dap_an_sau_nop' => true,
                'trang_thai'          => 'hien_thi',
            ],
            [
                'tieu_de'             => 'Grammar Test - Tenses',
                'mo_ta'               => 'Bài kiểm tra ngữ pháp về các thì trong tiếng Anh.',
                'lop_hoc_phan_id'     => $secByMon['AV1'][0],
                'nguoi_tao_id'        => $lecturerUserIds[3],
                'thoi_gian_bat_dau'   => (clone $now)->addDays(5),
                'thoi_gian_ket_thuc'  => (clone $now)->addDays(5)->addHour(),
                'thoi_gian_lam_bai'   => 45,
                'diem_toi_da'         => 10,
                'diem_dat'            => 5,
                'so_lan_thi_toi_da'   => 2,
                'hinh_thuc'           => 'hon_hop',
                'xao_tron_cau_hoi'    => false,
                'xao_tron_dap_an'     => true,
                'hien_dap_an_sau_nop' => false,
                'trang_thai'          => 'hien_thi',
            ],
            [
                'tieu_de'             => 'Writing Practice - Description',
                'mo_ta'               => 'Bài viết mô tả về một người bạn thân.',
                'lop_hoc_phan_id'     => $secByMon['AV1'][0],
                'nguoi_tao_id'        => $lecturerUserIds[3],
                'thoi_gian_bat_dau'   => null,
                'thoi_gian_ket_thuc'  => null,
                'thoi_gian_lam_bai'   => 30,
                'diem_toi_da'         => 10,
                'diem_dat'            => 5,
                'so_lan_thi_toi_da'   => 3,
                'hinh_thuc'           => 'tu_luan',
                'xao_tron_cau_hoi'    => false,
                'xao_tron_dap_an'     => false,
                'hien_dap_an_sau_nop' => false,
                'trang_thai'          => 'nhap',
            ],

            // ---- AV2 (GV: Phạm Thị Dung - lecturerUserIds[3]) ----
            [
                'tieu_de'             => 'Mid-term Test - AV2',
                'mo_ta'               => 'Bài kiểm tra giữa kỳ Tiếng Anh 2.',
                'lop_hoc_phan_id'     => $secByMon['AV2'][0],
                'nguoi_tao_id'        => $lecturerUserIds[3],
                'thoi_gian_bat_dau'   => (clone $now)->subDays(20),
                'thoi_gian_ket_thuc'  => (clone $now)->subDays(20)->addHours(2),
                'thoi_gian_lam_bai'   => 90,
                'diem_toi_da'         => 10,
                'diem_dat'            => 5,
                'so_lan_thi_toi_da'   => 1,
                'hinh_thuc'           => 'hon_hop',
                'xao_tron_cau_hoi'    => true,
                'xao_tron_dap_an'     => true,
                'hien_dap_an_sau_nop' => true,
                'trang_thai'          => 'hien_thi',
            ],
            [
                'tieu_de'             => 'Listening Test - Unit 5',
                'mo_ta'               => 'Bài kiểm tra nghe hiểu Unit 5.',
                'lop_hoc_phan_id'     => $secByMon['AV2'][0],
                'nguoi_tao_id'        => $lecturerUserIds[3],
                'thoi_gian_bat_dau'   => (clone $now)->addDays(1),
                'thoi_gian_ket_thuc'  => (clone $now)->addDays(1)->addHour(),
                'thoi_gian_lam_bai'   => 40,
                'diem_toi_da'         => 10,
                'diem_dat'            => 5,
                'so_lan_thi_toi_da'   => 2,
                'hinh_thuc'           => 'trac_nghiem',
                'xao_tron_cau_hoi'    => true,
                'xao_tron_dap_an'     => false,
                'hien_dap_an_sau_nop' => false,
                'trang_thai'          => 'hien_thi',
            ],

            // ---- PTKT (GV: Hoàng Văn Em - lecturerUserIds[4]) ----
            [
                'tieu_de'             => 'Kiểm tra - Use Case Diagram',
                'mo_ta'               => 'Kiểm tra kiến thức về biểu đồ use case.',
                'lop_hoc_phan_id'     => $secByMon['PTKT'][0],
                'nguoi_tao_id'        => $lecturerUserIds[4],
                'thoi_gian_bat_dau'   => (clone $now)->subDays(1),
                'thoi_gian_ket_thuc'  => (clone $now)->subDays(1)->addMinutes(30),
                'thoi_gian_lam_bai'   => 25,
                'diem_toi_da'         => 10,
                'diem_dat'            => 5,
                'so_lan_thi_toi_da'   => 1,
                'hinh_thuc'           => 'trac_nghiem',
                'xao_tron_cau_hoi'    => true,
                'xao_tron_dap_an'     => true,
                'hien_dap_an_sau_nop' => true,
                'trang_thai'          => 'hien_thi',
            ],
            [
                'tieu_de'             => 'Đồ án giữa kỳ - Phân tích hệ thống',
                'mo_ta'               => 'Đồ án giữa kỳ: phân tích và thiết kế hệ thống quản lý thư viện.',
                'lop_hoc_phan_id'     => $secByMon['PTKT'][0],
                'nguoi_tao_id'        => $lecturerUserIds[4],
                'thoi_gian_bat_dau'   => null,
                'thoi_gian_ket_thuc'  => null,
                'thoi_gian_lam_bai'   => 0,
                'diem_toi_da'         => 10,
                'diem_dat'            => 5,
                'so_lan_thi_toi_da'   => 1,
                'hinh_thuc'           => 'tu_luan',
                'xao_tron_cau_hoi'    => false,
                'xao_tron_dap_an'     => false,
                'hien_dap_an_sau_nop' => false,
                'trang_thai'          => 'hien_thi',
            ],
            [
                'tieu_de'             => 'Final Exam - PTKT',
                'mo_ta'               => 'Bài kiểm tra cuối kỳ môn Phân tích & Thiết kế hệ thống.',
                'lop_hoc_phan_id'     => $secByMon['PTKT'][0],
                'nguoi_tao_id'        => $lecturerUserIds[4],
                'thoi_gian_bat_dau'   => (clone $now)->addDays(14),
                'thoi_gian_ket_thuc'  => (clone $now)->addDays(14)->addHours(3),
                'thoi_gian_lam_bai'   => 120,
                'diem_toi_da'         => 10,
                'diem_dat'            => 5,
                'so_lan_thi_toi_da'   => 1,
                'hinh_thuc'           => 'hon_hop',
                'xao_tron_cau_hoi'    => true,
                'xao_tron_dap_an'     => true,
                'hien_dap_an_sau_nop' => false,
                'trang_thai'          => 'nhap',
            ],
            [
                'tieu_de'             => 'Thi thử cuối kỳ - Đề A',
                'mo_ta'               => 'Đề thi thử cuối kỳ dạng trắc nghiệm.',
                'lop_hoc_phan_id'     => $secByMon['PTKT'][0],
                'nguoi_tao_id'        => $lecturerUserIds[4],
                'thoi_gian_bat_dau'   => null,
                'thoi_gian_ket_thuc'  => null,
                'thoi_gian_lam_bai'   => 60,
                'diem_toi_da'         => 10,
                'diem_dat'            => 5,
                'so_lan_thi_toi_da'   => 10,
                'hinh_thuc'           => 'trac_nghiem',
                'xao_tron_cau_hoi'    => true,
                'xao_tron_dap_an'     => true,
                'hien_dap_an_sau_nop' => true,
                'trang_thai'          => 'hien_thi',
            ],
        ];

        $count = 0;
        foreach ($exams as $exam) {
            BaiKiemTra::create($exam);
            $count++;
        }

        $this->command->info("Đã tạo {$count} bài kiểm tra.");
    }
}
