<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MonHoc extends Model
{
    use HasFactory, SoftDeletes;
    
    protected $table = 'mon_hoc';
    
    const CREATED_AT = 'ngay_tao';
    const UPDATED_AT = 'ngay_cap_nhat';

    protected $fillable = [
        'ma_mon',
        'ten_mon',
        'tin_chi',
        'khoa_id',
        'bo_mon_id',
        'trang_thai',
    ];

    public function khoa()
    {
        return $this->belongsTo(Khoa::class, 'khoa_id');
    }

    public function boMon()
    {
        return $this->belongsTo(BoMon::class, 'bo_mon_id');
    }
}
