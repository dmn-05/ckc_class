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

    protected $fillable = [
        'ma_lop_hoc_phan',
        'ten_lop',
        'mon_hoc_id',
        'giang_vien_id',
        'hoc_ky',
        'nam_hoc',
        'si_so_toi_da',
        'trang_thai',
    ];

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
}
