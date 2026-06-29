<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\BaiTap;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StudentAssignmentController extends Controller
{
    private function formatAssignment($item): array
    {
        return [
            'id'              => $item->id,
            'tieu_de'         => $item->tieu_de,
            'noi_dung'        => $item->noi_dung,
            'huong_dan'       => $item->huong_dan,
            'lop_hoc_phan_id' => $item->lop_hoc_phan_id,
            'nguoi_tao'       => $item->nguoiTao ? $item->nguoiTao->ho_ten : null,
            'diem_toi_da'     => $item->diem_toi_da,
            'han_nop'         => $item->han_nop ? \Carbon\Carbon::parse($item->han_nop)->format('H:i, d/m/Y') : null,
            'cho_phep_nop_tre' => (bool) $item->cho_phep_nop_tre,
            'ngay_tao'        => $item->ngay_tao,
            'ten_mon'         => $item->lopHocPhan?->monHoc?->ten_mon ?? 'N/A',
            'ten_lop'         => $item->lopHocPhan?->ten_lop ?? null,
            'files'           => $item->tepTinBaiTap ? $item->tepTinBaiTap->map(fn($t) => [
                'id'   => $t->tep_tin_id,
                'name' => $t->tepTin?->ten_file,
                'url'  => $t->tepTin?->duong_dan,
                'size' => $t->tepTin?->kich_thuoc ?? 0,
            ])->filter(fn($f) => $f['id'])->values()->toArray() : [],
        ];
    }

    public function index(Request $request)
    {
        $user = Auth::user();
        if ($user->vai_tro_id !== 3 || !$user->sinhVien) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $student = $user->sinhVien;

        $query = BaiTap::where('trang_thai', 'hien_thi')
            ->with(['lopHocPhan.monHoc', 'nguoiTao', 'tepTinBaiTap.tepTin']);

        if ($request->has('lop_hoc_phan_id') && $request->lop_hoc_phan_id) {
            $query->where('lop_hoc_phan_id', (int) $request->lop_hoc_phan_id);
        } else {
            $sectionIds = $student->lopHocPhans()->pluck('lop_hoc_phan.id');
            $query->whereIn('lop_hoc_phan_id', $sectionIds);
        }

        $assignments = $query->orderBy('ngay_tao', 'desc')
            ->get()
            ->map(fn($item) => $this->formatAssignment($item));

        return response()->json(['data' => $assignments]);
    }

    public function show($id)
    {
        $user = Auth::user();
        if ($user->vai_tro_id !== 3 || !$user->sinhVien) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $student = $user->sinhVien;
        $sectionIds = $student->lopHocPhans()->pluck('lop_hoc_phan.id');

        $baiTap = BaiTap::where('trang_thai', 'hien_thi')
            ->whereIn('lop_hoc_phan_id', $sectionIds)
            ->with(['lopHocPhan.monHoc', 'nguoiTao', 'tepTinBaiTap.tepTin'])
            ->findOrFail($id);

        return response()->json(['data' => $this->formatAssignment($baiTap)]);
    }
}
