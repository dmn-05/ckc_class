<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Khoa extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'khoa';
    protected $fillable = [
        'ma_khoa',
        'ten_khoa',
        'truong_khoa',
        'trang_thai',
    ];

    const CREATED_AT = 'ngay_tao';
    const UPDATED_AT = 'ngay_cap_nhat';

    public function lops()
    {
        return $this->hasMany(Lop::class, 'khoa_id');
    }
}
