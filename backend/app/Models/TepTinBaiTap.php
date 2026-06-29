<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TepTinBaiTap extends Model
{
    use HasFactory;

    protected $table = 'tep_tin_bai_tap';

    protected $fillable = [
        'bai_tap_id',
        'tep_tin_id',
    ];

    public function tepTin()
    {
        return $this->belongsTo(TepTin::class, 'tep_tin_id');
    }

    public function baiTap()
    {
        return $this->belongsTo(BaiTap::class, 'bai_tap_id');
    }
}
