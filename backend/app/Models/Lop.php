<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lop extends Model
{
    use HasFactory;

    protected $table = 'lop';

    const CREATED_AT = 'ngay_tao';
    const UPDATED_AT = 'ngay_cap_nhat';

    protected $fillable = [
        'ten_lop',
        'khoa_id',
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
