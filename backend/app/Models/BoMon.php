<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BoMon extends Model
{
    use HasFactory;

    protected $table = 'bo_mon';
    
    // Disable Laravel's default timestamps if the table doesn't have them, 
    // but looking at other tables, they seem to use ngay_tao, ngay_cap_nhat
    const CREATED_AT = 'ngay_tao';
    const UPDATED_AT = 'ngay_cap_nhat';

    protected $fillable = [
        'ten_bo_mon',
        'khoa_id',
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
