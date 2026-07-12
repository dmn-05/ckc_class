<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KetQuaKiemTra extends Model
{
    protected $table = 'ket_qua_kiem_tra';

    const CREATED_AT = 'ngay_tao';
    const UPDATED_AT = 'ngay_cap_nhat';

    protected $fillable = [
        'sinh_vien_id',
        'bai_kiem_tra_id',
        'thoi_gian_bat_dau',
        'thoi_gian_nop_bai',
        'diem_trac_nghiem',
        'diem_tu_luan',
        'tong_diem',
        'trang_thai',
    ];

    protected $casts = [
        'thoi_gian_bat_dau' => 'datetime',
        'thoi_gian_nop_bai' => 'datetime',
        'diem_trac_nghiem'  => 'float',
        'diem_tu_luan'      => 'float',
        'tong_diem'         => 'float',
    ];

    public function sinhVien()
    {
        return $this->belongsTo(SinhVien::class, 'sinh_vien_id');
    }

    public function baiKiemTra()
    {
        return $this->belongsTo(BaiKiemTra::class, 'bai_kiem_tra_id');
    }

    public function chiTiet()
    {
        return $this->hasMany(ChiTietKetQua::class, 'ket_qua_kiem_tra_id');
    }

    protected function serializeDate(\DateTimeInterface $date)
    {
        return $date->format('Y-m-d\TH:i:sP');
    }
}
