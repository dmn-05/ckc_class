<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Lop extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'lop';

    const CREATED_AT = 'ngay_tao';
    const UPDATED_AT = 'ngay_cap_nhat';

    protected $dates = ['deleted_at'];

    protected $casts = [
        'deleted_at' => 'datetime',
        'ngay_tao' => 'datetime',
        'ngay_cap_nhat' => 'datetime',
    ];

    protected $fillable = [
        'ma_lop',
        'ten_lop',
        'khoa_id',
        'khoa_hoc',
        'trang_thai'
    ];

    public function khoa()
    {
        return $this->belongsTo(Khoa::class, 'khoa_id');
    }

    public function sinhViens()
    {
        return $this->hasMany(SinhVien::class, 'lop_id');
    }
}
