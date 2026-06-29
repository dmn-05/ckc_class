<?php

namespace Database\Seeders;

use App\Models\BaiKiemTra;
use App\Models\CauHoi;
use App\Models\DapAn;
use App\Models\LopHocPhan;
use App\Models\NguoiDung;
use App\Models\KetQuaKiemTra;
use App\Models\ChiTietKetQua;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class BaiKiemTraSeeder extends Seeder
{
    public function run(): void
    {
        $now = Carbon::now();
        $faker = Faker::create('vi_VN');

        $lhps = LopHocPhan::with('sinhViens')->get();
        if ($lhps->count() === 0) {
            $this->command->error('No LopHocPhan found.');
            return;
        }

        $baiKiemTraList = [];

        // 1. Generate 55 Exams
        for ($i = 1; $i <= 55; $i++) {
            $lhp = $faker->randomElement($lhps);
            $hinhThuc = $faker->randomElement(['trac_nghiem', 'tu_luan']);
            
            $bkt = BaiKiemTra::create([
                'tieu_de'             => 'Kiểm tra ' . $faker->catchPhrase . ' (' . $i . ')',
                'mo_ta'               => $faker->paragraph,
                'lop_hoc_phan_id'     => $lhp->id,
                'nguoi_tao_id'        => $lhp->giang_vien_id ? $lhp->giangVien->nguoi_dung_id : NguoiDung::where('vai_tro_id', 2)->first()->id,
                'thoi_gian_bat_dau'   => (clone $now)->subDays($faker->numberBetween(1, 30)),
                'thoi_gian_ket_thuc'  => (clone $now)->addDays($faker->numberBetween(1, 30)),
                'thoi_gian_lam_bai'   => $faker->randomElement([45, 60, 90, 120]),
                'diem_toi_da'         => 10,
                'diem_dat'            => 5,
                'so_lan_thi_toi_da'   => $faker->numberBetween(1, 3),
                'hinh_thuc'           => $hinhThuc,
                'xao_tron_cau_hoi'    => $faker->boolean,
                'xao_tron_dap_an'     => $faker->boolean,
                'hien_dap_an_sau_nop' => $faker->boolean,
                'trang_thai'          => 'hien_thi',
            ]);
            $baiKiemTraList[] = $bkt;
            
            // 2. Generate Questions
            $numQuestions = $faker->numberBetween(5, 15);
            $questions = [];
            for ($q = 1; $q <= $numQuestions; $q++) {
                $loai = $hinhThuc === 'tu_luan' ? 'essay' : 'single_choice';
                $cauHoi = CauHoi::create([
                    'bai_kiem_tra_id' => $bkt->id, 
                    'loai' => $loai, 
                    'noi_dung' => $faker->sentence(10) . '?', 
                    'diem' => round(10 / $numQuestions, 2), 
                    'giai_thich' => $faker->sentence
                ]);
                $questions[] = $cauHoi;
                
                if ($loai === 'single_choice') {
                    $correctIdx = $faker->numberBetween(0, 3);
                    for ($a = 0; $a < 4; $a++) {
                        DapAn::create([
                            'cau_hoi_id' => $cauHoi->id, 
                            'noi_dung' => $faker->word, 
                            'la_dap_an_dung' => $a === $correctIdx
                        ]);
                    }
                }
            }
            
            // 3. Generate Results (KetQuaKiemTra) for students enrolled in this section
            $students = $lhp->sinhViens;
            // Pick a few students to have submitted the exam
            $submittingStudents = $faker->randomElements($students->toArray(), min(5, count($students)));
            
            foreach ($submittingStudents as $svArr) {
                $svId = $svArr['id'];
                
                $kqt = KetQuaKiemTra::create([
                    'sinh_vien_id' => $svId,
                    'bai_kiem_tra_id' => $bkt->id,
                    'thoi_gian_bat_dau' => (clone $now)->subMinutes($faker->numberBetween(60, 120)),
                    'thoi_gian_nop_bai' => clone $now,
                    'diem_trac_nghiem' => $hinhThuc === 'trac_nghiem' ? $faker->randomFloat(1, 0, 10) : 0,
                    'diem_tu_luan' => $hinhThuc === 'tu_luan' ? $faker->randomFloat(1, 0, 10) : 0,
                    'tong_diem' => $faker->randomFloat(1, 4, 10),
                    'trang_thai' => 'da_cham'
                ]);
                
                // Details
                foreach ($questions as $cauHoi) {
                    ChiTietKetQua::create([
                        'ket_qua_kiem_tra_id' => $kqt->id,
                        'cau_hoi_id' => $cauHoi->id,
                        'dap_an_tu_luan' => $hinhThuc === 'tu_luan' ? $faker->paragraph : null,
                        'diem_dat' => $faker->randomFloat(1, 0, $cauHoi->diem)
                    ]);
                }
            }
        }
        
        $this->command->info('BaiKiemTraSeeder completed: Generated 55 exams with questions, answers, and results.');
    }
}
