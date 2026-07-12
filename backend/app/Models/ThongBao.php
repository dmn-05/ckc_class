<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ThongBao extends Model
{
    protected $table = 'thong_bao';

    const CREATED_AT = 'ngay_tao';
    const UPDATED_AT = 'ngay_cap_nhat';

    protected $fillable = [
        'tieu_de',
        'noi_dung',
        'lop_hoc_phan_id',
        'nguoi_tao_id',
        'nguoi_nhan_id',
        'loai_thong_bao',
        'lien_ket',
        'da_doc',
        'danh_sach_da_doc',
        'trang_thai',
    ];

    protected $casts = [
        'da_doc' => 'boolean',
        'ngay_tao' => 'datetime',
        'ngay_cap_nhat' => 'datetime',
    ];

    public function lopHocPhan()
    {
        return $this->belongsTo(LopHocPhan::class, 'lop_hoc_phan_id');
    }

    public function nguoiTao()
    {
        return $this->belongsTo(NguoiDung::class, 'nguoi_tao_id');
    }

    public function nguoiNhan()
    {
        return $this->belongsTo(NguoiDung::class, 'nguoi_nhan_id');
    }
}
