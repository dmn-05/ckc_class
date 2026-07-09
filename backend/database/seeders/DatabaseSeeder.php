<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run(): void
    {
        \Illuminate\Support\Facades\Schema::disableForeignKeyConstraints();

        try {
            // 1. Các bảng nền tảng (Master/Users)
            $this->call(VaiTroTableSeeder::class);
            $this->call(NguoiDungTableSeeder::class);
            $this->call(UsersTableSeeder::class);
            $this->call(KhoaTableSeeder::class);
            $this->call(BoMonTableSeeder::class);
            $this->call(GiangVienTableSeeder::class);
            $this->call(LopTableSeeder::class);
            $this->call(SinhVienTableSeeder::class);
            $this->call(MonHocTableSeeder::class);
            $this->call(LopHocPhanTableSeeder::class);
            $this->call(GiangVienLopHocPhanTableSeeder::class);
            $this->call(SinhVienLopHocPhanTableSeeder::class);
            $this->call(ChuDeTableSeeder::class);
            $this->call(TepTinTableSeeder::class);

            // 2. Các bảng nội dung, bài viết, bài tập
            $this->call(TaiLieuTableSeeder::class);
            $this->call(ThongBaoTableSeeder::class);
            $this->call(BaiVietTableSeeder::class);
            $this->call(BinhLuanTableSeeder::class);
            $this->call(TepTinBaiVietTableSeeder::class);
            $this->call(BaiTapTableSeeder::class);
            $this->call(TepTinBaiTapTableSeeder::class);
            $this->call(BaiNopTableSeeder::class);

            // 3. Các bảng kiểm tra, thi cử
            $this->call(BaiKiemTraTableSeeder::class);
            $this->call(CauHoiTableSeeder::class);
            $this->call(DapAnTableSeeder::class);
            $this->call(KetQuaKiemTraTableSeeder::class);
            $this->call(ChiTietKetQuaTableSeeder::class);

            // 4. Token & Khác
            $this->call(PersonalAccessTokensTableSeeder::class);
            $this->call(QuenMatKhauTableSeeder::class);
        } finally {
            \Illuminate\Support\Facades\Schema::enableForeignKeyConstraints();
        }
    }
}

