<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\BaiViet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    public function index(Request $request)
    {
        $user = Auth::user();

        // Nếu truyền lop_hoc_phan_id cụ thể thì lọc theo lớp đó
        if ($request->has('lop_hoc_phan_id') && $request->lop_hoc_phan_id) {
            $posts = BaiViet::with(['nguoiTao', 'binhLuan', 'tepTinBaiViet.tepTin'])
                ->where('lop_hoc_phan_id', (int) $request->lop_hoc_phan_id)
                ->where('trang_thai', 'hien_thi')
                ->orderBy('ngay_tao', 'desc')
                ->get();

            return response()->json(['data' => $posts]);
        }

        // Lấy các lớp sinh viên đã đăng ký (da_duyet)
        $sinhVien = $user?->sinhVien;
        $lopHocPhanIds = [];

        if ($sinhVien) {
            $lopHocPhanIds = \App\Models\DangKyHocPhan::where('sinh_vien_id', $sinhVien->id)
                ->where('trang_thai', 'da_duyet')
                ->pluck('lop_hoc_phan_id')
                ->toArray();
        }

        $query = BaiViet::with(['nguoiTao', 'binhLuan', 'tepTinBaiViet.tepTin'])
            ->where('trang_thai', 'hien_thi');

        // Nếu có đăng ký thì lọc theo lớp đã đăng ký, không thì lấy tất cả
        if (!empty($lopHocPhanIds)) {
            $query->whereIn('lop_hoc_phan_id', $lopHocPhanIds);
        }

        $posts = $query->orderBy('ngay_tao', 'desc')->get();

        return response()->json(['data' => $posts]);
    }

    public function show($id)
    {
        $post = BaiViet::with([
                'nguoiTao', 
                'binhLuan' => function($q) {
                    $q->whereNull('binh_luan_cha_id')->with('nguoiDung', 'replies.nguoiDung');
                }, 
                'tepTinBaiViet.tepTin'
            ])
            ->where('trang_thai', 'hien_thi')
            ->findOrFail($id);
            
        $post->increment('luot_xem');
            
        return response()->json(['data' => $post]);
    }

    public function store(Request $request)
    {
        // Sinh viên thường chỉ tạo bài thảo luận / hỏi đáp (loai_bai_viet = 'thao_luan' hoặc 'bai_viet' theo db của bạn)
        $validated = $request->validate([
            'tieu_de' => 'required|string|max:255',
            'noi_dung' => 'required|string',
            'lop_hoc_phan_id' => 'required|integer',
            'loai_bai_viet' => 'nullable|string|in:bai_viet,thong_bao,tai_lieu,bai_tap',
            'chu_de_id' => 'nullable|integer',
            'trang_thai' => 'nullable|string|in:hien_thi,an',
            'file' => 'nullable|file|max:20480', // Max 20MB
        ]);

        $loai_bai_viet = $validated['loai_bai_viet'] ?? 'bai_viet';
        $ten_chu_de_map = [
            'thong_bao' => 'Thông báo',
            'tai_lieu' => 'Tài liệu',
            'bai_tap' => 'Bài tập',
            'bai_viet' => 'Thảo luận',
        ];
        $ten_chu_de = $ten_chu_de_map[$loai_bai_viet] ?? null;
        $chu_de_id = null;
        if ($ten_chu_de) {
            $chu_de_id = \Illuminate\Support\Facades\DB::table('chu_de')
                ->where('lop_hoc_phan_id', $validated['lop_hoc_phan_id'])
                ->where('ten_chu_de', $ten_chu_de)
                ->value('id');
        }

        $post = BaiViet::create([
            'tieu_de' => $validated['tieu_de'],
            'noi_dung' => $validated['noi_dung'],
            'lop_hoc_phan_id' => $validated['lop_hoc_phan_id'],
            'chu_de_id' => $chu_de_id,
            'nguoi_tao_id' => Auth::id() ?? 4, // Fallback to SV Lê Thành Đạt
            'loai_bai_viet' => $validated['loai_bai_viet'] ?? 'bai_viet', // Student usually posts bai_viet
            'trang_thai' => $validated['trang_thai'] ?? 'hien_thi',
        ]);

        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $path = $file->store('attachments', 'public');
            
            $tepTin = \App\Models\TepTin::create([
                'ten_file' => $file->getClientOriginalName(),
                'ten_file_luu' => basename($path),
                'duong_dan' => '/storage/' . $path,
                'loai_file' => $file->getClientOriginalExtension() ?: 'unknown',
                'kich_thuoc' => $file->getSize(),
                'nguoi_tao_id' => Auth::id() ?? 4,
                'trang_thai' => 'dang_su_dung',
            ]);

            \App\Models\TepTinBaiViet::create([
                'tep_tin_id' => $tepTin->id,
                'bai_viet_id' => $post->id,
            ]);
        }

        return response()->json(['message' => 'Post created successfully', 'data' => $post], 201);
    }
}
