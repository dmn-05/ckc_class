<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CauHoi extends Model
{
    protected $table = 'cau_hoi';

    const CREATED_AT = 'ngay_tao';
    const UPDATED_AT = 'ngay_cap_nhat';

    protected $fillable = [
        'bai_kiem_tra_id',
        'loai',
        'noi_dung',
        'diem',
        'giai_thich',
        'thu_tu',
    ];

    protected $casts = [
        'diem'    => 'float',
        'thu_tu'  => 'integer',
    ];

    public function baiKiemTra()
    {
        return $this->belongsTo(BaiKiemTra::class, 'bai_kiem_tra_id');
    }

    public function dapAns()
    {
        return $this->hasMany(DapAn::class, 'cau_hoi_id');
    }
}
