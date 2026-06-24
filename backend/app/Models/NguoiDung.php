<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class NguoiDung extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'nguoi_dung';

    const CREATED_AT = 'ngay_tao';
    const UPDATED_AT = 'ngay_cap_nhat';

    protected $fillable = [
        'ho_ten',
        'email',
        'mat_khau',
        'vai_tro_id',
        'trang_thai',
        'avatar',
    ];

    protected $hidden = [
        'mat_khau',
    ];

    /**
     * Get the password for the user.
     *
     * @return string
     */
    public function getAuthPassword()
    {
        return $this->mat_khau;
    }

    public function sinhVien()
    {
        return $this->hasOne(SinhVien::class, 'nguoi_dung_id');
    }

    public function giangVien()
    {
        return $this->hasOne(GiangVien::class, 'nguoi_dung_id');
    }
}
