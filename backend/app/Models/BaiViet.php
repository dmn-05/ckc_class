<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BaiViet extends Model
{
    use HasFactory;

    protected $table = 'bai_viet';

    const CREATED_AT = 'ngay_tao';
    const UPDATED_AT = 'ngay_cap_nhat';

    protected $fillable = [
        'tieu_de',
        'noi_dung',
        'hinh_anh',
        'lop_hoc_phan_id',
        'chu_de_id',
        'bai_tap_id',
        'nguoi_tao_id',
        'loai_bai_viet', // 'bai_viet','thong_bao','tai_lieu','bai_tap'
        'trang_thai',
        'luot_xem',
    ];

    public function nguoiTao()
    {
        return $this->belongsTo(NguoiDung::class, 'nguoi_tao_id');
    }

    public function lopHocPhan()
    {
        // Assuming LopHocPhan model exists
        return $this->belongsTo(LopHocPhan::class, 'lop_hoc_phan_id');
    }

    public function binhLuan()
    {
        return $this->hasMany(BinhLuan::class, 'bai_viet_id');
    }

    public function tepTinBaiViet()
    {
        return $this->hasMany(TepTinBaiViet::class, 'bai_viet_id');
    }
}
