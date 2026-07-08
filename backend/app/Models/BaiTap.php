<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BaiTap extends Model
{
    use HasFactory;

    protected $table = 'bai_tap';

    const CREATED_AT = 'ngay_tao';
    const UPDATED_AT = 'ngay_cap_nhat';

    protected $fillable = [
        'tieu_de',
        'noi_dung',
        'huong_dan',
        'file_url',
        'file_name',
        'lop_hoc_phan_id',
        'nguoi_tao_id',
        'diem_toi_da',
        'han_nop',
        'cho_phep_nop_tre',
        'tyle_phat_tre',
        'trang_thai',
    ];

    protected $casts = [
        'cho_phep_nop_tre' => 'boolean',
        'diem_toi_da'      => 'float',
        'han_nop'          => 'datetime',
    ];

    public function nguoiTao()
    {
        return $this->belongsTo(NguoiDung::class, 'nguoi_tao_id');
    }

    public function lopHocPhan()
    {
        return $this->belongsTo(LopHocPhan::class, 'lop_hoc_phan_id');
    }

    public function tepTinBaiTap()
    {
        return $this->hasMany(TepTinBaiTap::class, 'bai_tap_id');
    }
}
