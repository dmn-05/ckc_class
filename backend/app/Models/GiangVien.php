<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class GiangVien extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'giang_vien';

    const CREATED_AT = 'ngay_tao';
    const UPDATED_AT = 'ngay_cap_nhat';

    protected $fillable = [
        'nguoi_dung_id',
        'ma_giang_vien',
        'ngay_sinh',
        'gioi_tinh',
        'so_dien_thoai',
        'cccd',
        'dia_chi',
        'bo_mon_id',
        'trang_thai',
    ];

    public function nguoiDung()
    {
        return $this->belongsTo(NguoiDung::class, 'nguoi_dung_id');
    }

    public function boMon()
    {
        return $this->belongsTo(BoMon::class, 'bo_mon_id');
    }
}
