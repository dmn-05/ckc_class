<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BaiKiemTra extends Model
{
    use HasFactory;

    protected $table = 'bai_kiem_tra';

    const CREATED_AT = 'ngay_tao';
    const UPDATED_AT = 'ngay_cap_nhat';

    protected $fillable = [
        'tieu_de',
        'mo_ta',
        'lop_hoc_phan_id',
        'nguoi_tao_id',
        'thoi_gian_bat_dau',
        'thoi_gian_ket_thuc',
        'thoi_gian_lam_bai',
        'diem_toi_da',
        'diem_dat',
        'so_lan_thi_toi_da',
        'hinh_thuc',
        'xao_tron_cau_hoi',
        'xao_tron_dap_an',
        'hien_dap_an_sau_nop',
        'trang_thai',
    ];

    protected $casts = [
        'thoi_gian_bat_dau'   => 'datetime',
        'thoi_gian_ket_thuc'  => 'datetime',
        'thoi_gian_lam_bai'   => 'integer',
        'diem_toi_da'         => 'float',
        'diem_dat'            => 'float',
        'so_lan_thi_toi_da'   => 'integer',
        'xao_tron_cau_hoi'    => 'boolean',
        'xao_tron_dap_an'     => 'boolean',
        'hien_dap_an_sau_nop' => 'boolean',
    ];

    public function nguoiTao()
    {
        return $this->belongsTo(NguoiDung::class, 'nguoi_tao_id');
    }

    public function lopHocPhan()
    {
        return $this->belongsTo(LopHocPhan::class, 'lop_hoc_phan_id');
    }

    public function cauHois()
    {
        return $this->hasMany(CauHoi::class, 'bai_kiem_tra_id');
    }

    public function ketQuas()
    {
        return $this->hasMany(KetQuaKiemTra::class, 'bai_kiem_tra_id');
    }
}
