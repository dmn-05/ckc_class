<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TepTin extends Model
{
    use HasFactory;

    protected $table = 'tep_tin';

    const CREATED_AT = 'ngay_tao';
    const UPDATED_AT = null;

    protected $fillable = [
        'ten_file',
        'ten_file_luu',
        'duong_dan',
        'loai_file',
        'kich_thuoc',
        'nguoi_tao_id',
        'trang_thai',
    ];

    public function nguoiTaiLen()
    {
        return $this->belongsTo(NguoiDung::class, 'nguoi_tao_id');
    }
}
