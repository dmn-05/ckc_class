<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TepTinBaiViet extends Model
{
    use HasFactory;

    protected $table = 'tep_tin_bai_viet';

    const CREATED_AT = 'ngay_tao';
    const UPDATED_AT = null; // Bảng này chỉ có ngay_tao trong DB screenshot

    protected $fillable = [
        'tep_tin_id',
        'bai_viet_id',
    ];

    public function baiViet()
    {
        return $this->belongsTo(BaiViet::class, 'bai_viet_id');
    }

    public function tepTin()
    {
        return $this->belongsTo(TepTin::class, 'tep_tin_id');
    }
}
