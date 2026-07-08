<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ChiTietKetQua extends Model
{
    protected $table = 'chi_tiet_ket_qua';

    const CREATED_AT = 'ngay_tao';
    const UPDATED_AT = 'ngay_cap_nhat';

    protected $fillable = [
        'ket_qua_kiem_tra_id',
        'cau_hoi_id',
        'dap_an_id',
        'dap_an_ids',
        'dap_an_tu_luan',
        'diem_dat',
    ];

    protected $casts = [
        'dap_an_ids' => 'array',
        'diem_dat'   => 'float',
    ];

    public function ketQua()
    {
        return $this->belongsTo(KetQuaKiemTra::class, 'ket_qua_kiem_tra_id');
    }

    public function cauHoi()
    {
        return $this->belongsTo(CauHoi::class, 'cau_hoi_id');
    }

    public function dapAn()
    {
        return $this->belongsTo(DapAn::class, 'dap_an_id');
    }
}
