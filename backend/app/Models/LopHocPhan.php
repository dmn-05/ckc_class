<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LopHocPhan extends Model
{
    use HasFactory;

    protected $table = 'lop_hoc_phan';

    const CREATED_AT = 'ngay_tao';
    const UPDATED_AT = 'ngay_cap_nhat';

    protected $appends = ['pending_grading_count', 'bai_taps_count', 'bai_kiem_tras_count', 'base_class_id'];

    protected $fillable = [
        'ma_lop_hoc_phan',
        'ten_lop',
        'mon_hoc_id',
        'lop_id',
        'giang_vien_id',
        'hoc_ky',
        'nam_hoc',
        'si_so_toi_da',
        'trang_thai',
    ];

    public function getBaseClassIdAttribute()
    {
        return $this->lop_id;
    }

    public function lop()
    {
        return $this->belongsTo(Lop::class, 'lop_id');
    }

    public function monHoc()
    {
        return $this->belongsTo(MonHoc::class, 'mon_hoc_id');
    }

    public function giangVien()
    {
        return $this->belongsTo(GiangVien::class, 'giang_vien_id');
    }

    public function giangViens()
    {
        return $this->belongsToMany(GiangVien::class, 'giang_vien_lop_hoc_phan', 'lop_hoc_phan_id', 'giang_vien_id')
                    ->withPivot('vai_tro', 'ngay_tao', 'ngay_cap_nhat');
    }

    public function sinhViens()
    {
        return $this->belongsToMany(SinhVien::class, 'sinh_vien_lop_hoc_phan', 'lop_hoc_phan_id', 'sinh_vien_id')
                    ->withPivot('ngay_tao', 'ngay_cap_nhat');
    }

    public function baiTaps()
    {
        return $this->hasMany(BaiTap::class, 'lop_hoc_phan_id');
    }

    public function baiKiemTras()
    {
        return $this->hasMany(BaiKiemTra::class, 'lop_hoc_phan_id');
    }

    public function getBaiTapsCountAttribute()
    {
        try {
            if (array_key_exists('bai_taps_count', $this->attributes)) {
                return $this->attributes['bai_taps_count'];
            }
            return $this->baiTaps()->count();
        } catch (\Exception $e) {
            return 0;
        }
    }

    public function getBaiKiemTrasCountAttribute()
    {
        try {
            if (array_key_exists('bai_kiem_tras_count', $this->attributes)) {
                return $this->attributes['bai_kiem_tras_count'];
            }
            return $this->baiKiemTras()->count();
        } catch (\Exception $e) {
            return 0;
        }
    }

    public function getPendingGradingCountAttribute()
    {
        try {
            // 1. Assignment submissions without grade
            $pendingAssignments = \Illuminate\Support\Facades\DB::table('bai_nop')
                ->join('bai_tap', 'bai_nop.bai_tap_id', '=', 'bai_tap.id')
                ->where('bai_tap.lop_hoc_phan_id', $this->id)
                ->whereNull('bai_nop.diem')
                ->count();

            // 2. Quiz attempts submitted (`trang_thai` = 'da_nop')
            $pendingQuizzes = \App\Models\KetQuaKiemTra::whereHas('baiKiemTra', function ($q) {
                    $q->where('lop_hoc_phan_id', $this->id);
                })
                ->where('trang_thai', 'da_nop')
                ->count();

            return $pendingAssignments + $pendingQuizzes;
        } catch (\Exception $e) {
            return 0;
        }
    }
}
