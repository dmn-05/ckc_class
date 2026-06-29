<?php

namespace Database\Seeders;

use App\Models\Khoa;
use App\Models\BoMon;
use App\Models\MonHoc;
use App\Models\Lop;
use App\Models\NguoiDung;
use App\Models\GiangVien;
use App\Models\SinhVien;
use App\Models\LopHocPhan;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use Faker\Factory as Faker;

class CaoThangSeeder extends Seeder
{
    public function run(): void
    {
        $faker = Faker::create('vi_VN');
        $now = Carbon::now();
        $password = Hash::make('password');

        // =========================================================
        // 1. KHOA (50+ rows)
        // =========================================================
        $realKhoas = [
            'CNTT' => 'Công nghệ Thông tin',
            'CK' => 'Cơ khí',
            'DDT' => 'Điện - Điện tử',
            'KT' => 'Kinh tế',
            'OT' => 'Cơ khí Động lực (Ô tô)',
            'NL' => 'Công nghệ Nhiệt Lạnh',
            'CDT' => 'Cơ điện tử',
            'NN' => 'Ngoại ngữ',
            'KHCB' => 'Khoa học Cơ bản',
            'GDTC' => 'Giáo dục Thể chất',
        ];

        $khoaIds = [];
        // Insert real ones
        foreach ($realKhoas as $ma => $ten) {
            $k = Khoa::firstOrCreate(
                ['ma_khoa' => $ma],
                ['ten_khoa' => 'Khoa ' . $ten, 'truong_khoa' => 'TS. ' . $faker->name]
            );
            $khoaIds[] = $k->id;
        }
        // Insert dummy ones to reach 50
        for ($i = 11; $i <= 55; $i++) {
            $k = Khoa::firstOrCreate(
                ['ma_khoa' => 'KHOA_' . $i],
                ['ten_khoa' => 'Khoa Đào tạo chuyên sâu ' . $i, 'truong_khoa' => 'TS. ' . $faker->name]
            );
            $khoaIds[] = $k->id;
        }

        // =========================================================
        // 2. BỘ MÔN (50+ rows)
        // =========================================================
        $boMonIds = [];
        for ($i = 1; $i <= 60; $i++) {
            $bm = BoMon::firstOrCreate(
                ['ma_bo_mon' => 'BM_' . $i],
                [
                    'ten_bo_mon' => 'Bộ môn ' . $faker->jobTitle,
                    'khoa_id' => $faker->randomElement($khoaIds),
                    'truong_bo_mon' => 'ThS. ' . $faker->name
                ]
            );
            $boMonIds[] = $bm->id;
        }

        // =========================================================
        // 3. MÔN HỌC (100+ rows)
        // =========================================================
        $monHocIds = [];
        $monHocNames = ['Lập trình Web', 'Cơ sở dữ liệu', 'Mạng máy tính', 'Toán rời rạc', 'Vật lý 1', 'Giải tích 1', 'Lập trình C++', 'Java cơ bản', 'Trí tuệ nhân tạo', 'Hệ điều hành'];
        foreach ($monHocNames as $idx => $name) {
            $mh = MonHoc::firstOrCreate(
                ['ma_mon' => 'MH_' . current(explode(' ', $name)) . '_' . $idx],
                ['ten_mon' => $name, 'tin_chi' => $faker->numberBetween(2, 4), 'khoa_id' => $khoaIds[0], 'bo_mon_id' => $boMonIds[0]]
            );
            $monHocIds[] = $mh->id;
        }
        for ($i = count($monHocNames) + 1; $i <= 100; $i++) {
            $kId = $faker->randomElement($khoaIds);
            $bmId = $faker->randomElement($boMonIds);
            $mh = MonHoc::firstOrCreate(
                ['ma_mon' => 'MH_RND_' . $i],
                ['ten_mon' => 'Môn học ' . $faker->catchPhrase, 'tin_chi' => $faker->numberBetween(2, 4), 'khoa_id' => $kId, 'bo_mon_id' => $bmId]
            );
            $monHocIds[] = $mh->id;
        }

        // =========================================================
        // 4. LỚP (50+ rows)
        // =========================================================
        $lopIds = [];
        $prefixes = ['CĐ TH', 'CĐ ÔT', 'CĐ KT', 'CĐ ĐT'];
        for ($i = 1; $i <= 60; $i++) {
            $prefix = $faker->randomElement($prefixes);
            $year = $faker->numberBetween(20, 24);
            $char = $faker->randomLetter;
            $maLop = $prefix . ' ' . $year . strtoupper($char) . $i;
            
            $l = Lop::firstOrCreate(
                ['ma_lop' => str_replace(' ', '', $maLop)],
                ['ten_lop' => $maLop, 'khoa_id' => $faker->randomElement($khoaIds), 'nam_nhap_hoc' => 2000 + $year]
            );
            $lopIds[] = $l->id;
        }

        // =========================================================
        // 5. GIẢNG VIÊN (50+ rows)
        // =========================================================
        $giangVienIds = [];
        
        // Admin
        NguoiDung::firstOrCreate(['email' => 'admin@caothang.edu.vn'], [
            'ho_ten' => 'Quản trị viên CKC', 'mat_khau' => $password, 'vai_tro_id' => 1
        ]);
        
        // Fixed Lecturer for testing
        $gvFixed = NguoiDung::firstOrCreate(['email' => 'gv.nvgiang@caothang.edu.vn'], [
            'ho_ten' => 'ThS. Nguyễn Văn Giảng', 'mat_khau' => $password, 'vai_tro_id' => 2
        ]);
        $gvFixedProfile = GiangVien::firstOrCreate(['nguoi_dung_id' => $gvFixed->id], [
            'ma_giang_vien' => 'GV001', 'bo_mon_id' => $boMonIds[0], 'gioi_tinh' => 'Nam', 'ngay_sinh' => '1985-05-15'
        ]);
        $giangVienIds[] = $gvFixedProfile->id;
        
        // Random Lecturers
        for ($i = 2; $i <= 60; $i++) {
            $user = NguoiDung::firstOrCreate(['email' => 'gv.test' . $i . '@caothang.edu.vn'], [
                'ho_ten' => 'GV. ' . $faker->name, 'mat_khau' => $password, 'vai_tro_id' => 2
            ]);
            $gv = GiangVien::firstOrCreate(['nguoi_dung_id' => $user->id], [
                'ma_giang_vien' => 'GV' . str_pad($i, 3, '0', STR_PAD_LEFT),
                'bo_mon_id' => $faker->randomElement($boMonIds),
                'gioi_tinh' => $faker->randomElement(['Nam', 'Nữ']),
                'ngay_sinh' => $faker->date('Y-m-d', '1995-01-01')
            ]);
            $giangVienIds[] = $gv->id;
        }

        // =========================================================
        // 6. SINH VIÊN (100+ rows)
        // =========================================================
        $sinhVienList = [];
        
        // Fixed Student for testing
        $svFixed = NguoiDung::firstOrCreate(['email' => '0306221111@caothang.edu.vn'], [
            'ho_ten' => 'Đỗ Minh Nhật', 'mat_khau' => $password, 'vai_tro_id' => 3
        ]);
        $svFixedProfile = SinhVien::firstOrCreate(['nguoi_dung_id' => $svFixed->id], [
            'ma_sinh_vien' => '0306221111', 'lop_id' => $lopIds[0], 'khoa_id' => $khoaIds[0], 'gioi_tinh' => 'Nam', 'ngay_sinh' => '2004-01-01'
        ]);
        $sinhVienList[] = $svFixedProfile;

        // Random Students
        for ($i = 2; $i <= 100; $i++) {
            $mssv = '0306' . $faker->numberBetween(100000, 999999);
            $user = NguoiDung::firstOrCreate(['email' => $mssv . '@caothang.edu.vn'], [
                'ho_ten' => $faker->name, 'mat_khau' => $password, 'vai_tro_id' => 3
            ]);
            $sv = SinhVien::firstOrCreate(['nguoi_dung_id' => $user->id], [
                'ma_sinh_vien' => $mssv,
                'lop_id' => $faker->randomElement($lopIds),
                'khoa_id' => $faker->randomElement($khoaIds),
                'gioi_tinh' => $faker->randomElement(['Nam', 'Nữ']),
                'ngay_sinh' => $faker->date('Y-m-d', '2005-01-01')
            ]);
            $sinhVienList[] = $sv;
        }

        // =========================================================
        // 7. LỚP HỌC PHẦN (60+ rows)
        // =========================================================
        $lopHocPhanList = [];
        
        // Fixed LHP for testing
        $lhpFixed = LopHocPhan::firstOrCreate(['ma_lop_hoc_phan' => 'LHP_LTW_2324_1'], [
            'ten_lop' => 'TH Lập trình Web - Nhóm 1',
            'mon_hoc_id' => $monHocIds[0],
            'giang_vien_id' => $gvFixedProfile->id,
            'hoc_ky' => 1, 'nam_hoc' => '2023-2024', 'si_so_toi_da' => 40
        ]);
        $lopHocPhanList[] = $lhpFixed;

        for ($i = 2; $i <= 70; $i++) {
            $lhp = LopHocPhan::firstOrCreate(['ma_lop_hoc_phan' => 'LHP_RAND_' . $i], [
                'ten_lop' => 'Lớp học phần ' . $faker->catchPhrase,
                'mon_hoc_id' => $faker->randomElement($monHocIds),
                'giang_vien_id' => $faker->randomElement($giangVienIds),
                'hoc_ky' => $faker->numberBetween(1, 3), 
                'nam_hoc' => '2023-2024', 
                'si_so_toi_da' => 60
            ]);
            $lopHocPhanList[] = $lhp;
        }

        // Enroll students in course sections
        // Fixed student enrolls in first 5 classes
        for ($i = 0; $i < 5; $i++) {
            if (!$svFixedProfile->lopHocPhans->contains($lopHocPhanList[$i]->id)) {
                $svFixedProfile->lopHocPhans()->attach($lopHocPhanList[$i]->id, ['ngay_tao' => $now, 'ngay_cap_nhat' => $now]);
            }
        }
        
        // Random enrollments
        foreach ($sinhVienList as $sv) {
            $randomLhps = $faker->randomElements($lopHocPhanList, $faker->numberBetween(3, 8));
            foreach ($randomLhps as $rlhp) {
                if (!$sv->lopHocPhans->contains($rlhp->id)) {
                    $sv->lopHocPhans()->attach($rlhp->id, ['ngay_tao' => $now, 'ngay_cap_nhat' => $now]);
                }
            }
        }
    }
}
