<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\LopHocPhan;
use App\Models\BaiViet;
use App\Models\BaiTap;
use App\Models\TepTin;
use App\Models\TepTinBaiViet;
use App\Models\BaiKiemTra;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;

class LopHocPhanDataSeeder extends Seeder
{
    public function run(): void
    {
        $faker = Faker::create('vi_VN');

        $lophocphans = LopHocPhan::with(['giangVien.nguoiDung'])->get();

        foreach ($lophocphans as $lhp) {
            $giangVienUserId = $lhp->giangVien->nguoiDung->id ?? 1;

            // 1. Tạo Bài viết (Posts) trên bảng tin
            for ($i = 0; $i < 3; $i++) {
                BaiViet::create([
                    'tieu_de' => 'Chào mừng đến với lớp học',
                    'noi_dung' => $faker->paragraph(2),
                    'lop_hoc_phan_id' => $lhp->id,
                    'nguoi_tao_id' => $giangVienUserId,
                    'loai_bai_viet' => 'bai_viet',
                    'trang_thai' => 'hien_thi',
                    'luot_xem' => rand(10, 50),
                    'ngay_tao' => now()->subDays(rand(1, 30)),
                    'ngay_cap_nhat' => now(),
                ]);
            }

            // 2. Tạo Bài tập (Assignments)
            for ($i = 0; $i < 2; $i++) {
                $baiTap = BaiTap::create([
                    'tieu_de' => 'Bài tập ' . ($i + 1) . ': ' . $faker->sentence(4),
                    'noi_dung' => $faker->paragraph(3),
                    'huong_dan' => 'Vui lòng nộp file PDF. Hạn chót không được trễ.',
                    'lop_hoc_phan_id' => $lhp->id,
                    'nguoi_tao_id' => $giangVienUserId,
                    'diem_toi_da' => 10,
                    'han_nop' => now()->addDays(rand(2, 14)),
                    'cho_phep_nop_tre' => true,
                    'tyle_phat_tre' => 10,
                    'trang_thai' => 'hien_thi',
                    'ngay_tao' => now()->subDays(rand(1, 10)),
                    'ngay_cap_nhat' => now(),
                ]);

                // Đăng thông báo về Bài tập lên Bảng tin
                BaiViet::create([
                    'tieu_de' => 'Giảng viên đã đăng một bài tập mới: ' . $baiTap->tieu_de,
                    'noi_dung' => 'Chi tiết xem tại tab Bài tập trên lớp.',
                    'lop_hoc_phan_id' => $lhp->id,
                    'nguoi_tao_id' => $giangVienUserId,
                    'loai_bai_viet' => 'bai_tap', // Đánh dấu là post về bài tập
                    'trang_thai' => 'hien_thi',
                    'ngay_tao' => $baiTap->ngay_tao,
                    'ngay_cap_nhat' => $baiTap->ngay_cap_nhat,
                ]);
            }

            // 3. Tạo Tài liệu (Resources)
            for ($i = 0; $i < 2; $i++) {
                $taiLieu = BaiViet::create([
                    'tieu_de' => 'Tài liệu học tập ' . ($i + 1),
                    'noi_dung' => 'Slide bài giảng chương ' . ($i + 1),
                    'lop_hoc_phan_id' => $lhp->id,
                    'nguoi_tao_id' => $giangVienUserId,
                    'loai_bai_viet' => 'tai_lieu',
                    'trang_thai' => 'hien_thi',
                    'ngay_tao' => now()->subDays(rand(1, 20)),
                    'ngay_cap_nhat' => now(),
                ]);

                // Tạo file đính kèm giả
                $tepTin = TepTin::create([
                    'ten_file' => 'slide_chuong_' . ($i + 1) . '.pdf',
                    'ten_file_luu' => 'slide_chuong_' . ($i + 1) . '_' . time() . '.pdf',
                    'duong_dan' => 'https://example.com/dummy.pdf',
                    'loai_file' => 'pdf',
                    'kich_thuoc' => rand(1024, 5048),
                    'nguoi_tao_id' => $giangVienUserId,
                    'trang_thai' => 'dang_su_dung',
                    'ngay_tao' => $taiLieu->ngay_tao,
                ]);

                TepTinBaiViet::create([
                    'tep_tin_id' => $tepTin->id,
                    'bai_viet_id' => $taiLieu->id,
                    'ngay_tao' => $taiLieu->ngay_tao,
                ]);
            }

            // 4. Tạo thông báo Bảng tin cho các Bài kiểm tra (Quizzes) đã có sẵn
            $quizzes = BaiKiemTra::where('lop_hoc_phan_id', $lhp->id)->get();
            foreach ($quizzes as $quiz) {
                BaiViet::create([
                    'tieu_de' => 'Giảng viên đã đăng một bài kiểm tra mới: ' . $quiz->tieu_de,
                    'noi_dung' => 'Vui lòng hoàn thành đúng thời gian quy định.',
                    'lop_hoc_phan_id' => $lhp->id,
                    'nguoi_tao_id' => $giangVienUserId,
                    'loai_bai_viet' => 'thong_bao',
                    'trang_thai' => 'hien_thi',
                    'ngay_tao' => $quiz->created_at ?? now()->subDays(rand(1, 5)),
                    'ngay_cap_nhat' => $quiz->updated_at ?? now(),
                ]);
            }
        }
    }
}
