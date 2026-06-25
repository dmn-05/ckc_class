<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DapAn extends Model
{
    protected $table = 'dap_an';

    const CREATED_AT = 'ngay_tao';
    const UPDATED_AT = 'ngay_cap_nhat';

    protected $fillable = [
        'cau_hoi_id',
        'noi_dung',
        'la_dap_an_dung',
        'thu_tu',
    ];

    protected $casts = [
        'la_dap_an_dung' => 'boolean',
        'thu_tu'         => 'integer',
    ];

    public function cauHoi()
    {
        return $this->belongsTo(CauHoi::class, 'cau_hoi_id');
    }
}
