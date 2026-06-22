<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SinhVien extends Model
{
    use HasFactory;

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
}
