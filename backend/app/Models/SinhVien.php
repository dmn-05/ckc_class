<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SinhVien extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'sinh_vien';

    const CREATED_AT = 'ngay_tao';
    const UPDATED_AT = 'ngay_cap_nhat';

    protected $fillable = [
        'nguoi_dung_id',
        'ma_sinh_vien',
        'ngay_sinh',
        'gioi_tinh',
        'so_dien_thoai',
        'cccd',
        'dia_chi',
        'lop_id',
        'khoa_id',
        'khoa_hoc',
        'trang_thai',
    ];

    public function nguoiDung()
    {
        return $this->belongsTo(NguoiDung::class, 'nguoi_dung_id');
    }

    public function lop()
    {
        return $this->belongsTo(Lop::class, 'lop_id');
    }

    public function khoa()
    {
        return $this->belongsTo(Khoa::class, 'khoa_id');
    }

    public function lopHocPhans()
    {
        return $this->belongsToMany(LopHocPhan::class, 'sinh_vien_lop_hoc_phan', 'sinh_vien_id', 'lop_hoc_phan_id')
                    ->withPivot('ngay_tao', 'ngay_cap_nhat');
    }
}
