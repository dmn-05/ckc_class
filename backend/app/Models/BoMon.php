<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BoMon extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'bo_mon';
    const CREATED_AT = 'ngay_tao';
    const UPDATED_AT = 'ngay_cap_nhat';

    protected $fillable = [
        'ma_bo_mon',
        'ten_bo_mon',
        'khoa_id',
        'truong_bo_mon',
        'trang_thai',
    ];

    public function khoa()
    {
        return $this->belongsTo(Khoa::class, 'khoa_id');
    }

    public function giangViens()
    {
        return $this->hasMany(GiangVien::class, 'bo_mon_id');
    }
}
