<?php

namespace App\Http\Controllers\Lecturer;

use App\Http\Controllers\Controller;
use App\Models\BaiViet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    public function index(Request $request)
    {
        // For testing purposes, we might just get all posts by this lecturer
        // In reality, it should be filtered by lop_hoc_phan_id to show all posts in a class
        $query = BaiViet::with(['nguoiTao', 'binhLuan', 'tepTinBaiViet.tepTin'])
            ->whereHas('nguoiTao', function($q) {
                $q->whereIn('vai_tro_id', [1, 2]); // Chỉ hiển thị bài của Admin(1) hoặc Giảng viên(2)
            });
        
        if ($request->has('lop_hoc_phan_id')) {
            $query->where('lop_hoc_phan_id', $request->lop_hoc_phan_id);
        }

        $posts = $query->orderBy('ngay_tao', 'desc')->get();
        return response()->json(['data' => $posts]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'tieu_de' => 'required|string|max:255',
            'noi_dung' => 'required|string',
            'lop_hoc_phan_id' => 'required|integer',
            'loai_bai_viet' => 'required|string|in:bai_viet,thong_bao,tai_lieu,bai_tap',
            'chu_de_id' => 'nullable|integer',
            'trang_thai' => 'nullable|string|in:hien_thi,an',
            'hinh_anh' => 'required_unless:loai_bai_viet,thong_bao|nullable|image|max:10240', // Ảnh bìa không bắt buộc nếu là thông báo
            'file' => 'nullable|file|max:20480', // Tệp đính kèm, tối đa 20MB
        ]);

        $ten_chu_de_map = [
            'thong_bao' => 'Thông báo',
            'tai_lieu' => 'Tài liệu',
            'bai_tap' => 'Bài tập',
            'bai_viet' => 'Thảo luận',
        ];
        $ten_chu_de = $ten_chu_de_map[$validated['loai_bai_viet']] ?? null;
        $chu_de_id = null;
        if ($ten_chu_de) {
            try {
                if (\Illuminate\Support\Facades\Schema::hasTable('chu_de')) {
                    $chu_de_id = \Illuminate\Support\Facades\DB::table('chu_de')
                        ->where('lop_hoc_phan_id', $validated['lop_hoc_phan_id'])
                        ->where('ten_chu_de', $ten_chu_de)
                        ->value('id');
                }
            } catch (\Exception $e) {
                // Ignore if table doesn't exist
            }
        }

        // Upload ảnh bìa lên Cloudinary
        $hinh_anh_url = null;
        if ($request->hasFile('hinh_anh')) {
            $cloudinary = new \Cloudinary\Cloudinary(env('CLOUDINARY_URL'));
            $result = $cloudinary->uploadApi()->upload(
                $request->file('hinh_anh')->getRealPath(),
                ['folder' => 'posts']
            );
            $hinh_anh_url = $result['secure_url'];
        }

        $post = BaiViet::create([
            'tieu_de' => $validated['tieu_de'],
            'noi_dung' => $validated['noi_dung'],
            'hinh_anh' => $hinh_anh_url,
            'lop_hoc_phan_id' => $validated['lop_hoc_phan_id'],
            'chu_de_id' => $chu_de_id,
            'nguoi_tao_id' => Auth::id() ?? 2,
            'loai_bai_viet' => $validated['loai_bai_viet'],
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
                'nguoi_tao_id' => Auth::id() ?? 2,
                'trang_thai' => 'dang_su_dung',
            ]);

            \App\Models\TepTinBaiViet::create([
                'tep_tin_id' => $tepTin->id,
                'bai_viet_id' => $post->id,
            ]);
        }

        \App\Helpers\NotificationHelper::createForClass(
            $post->lop_hoc_phan_id,
            "Thông báo mới: " . $post->tieu_de,
            "Giảng viên vừa đăng bài viết/thông báo mới trong lớp học phần.",
            'bai_viet_moi',
            '/student/posts/' . $post->id,
            Auth::id()
        );

        return response()->json(['message' => 'Post created successfully', 'data' => $post], 201);
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
            ->findOrFail($id);
            
        $post->increment('luot_xem');
        
        return response()->json(['data' => $post]);
    }

    public function update(Request $request, $id)
    {
        $userId = Auth::id() ?? 1;
        $post = BaiViet::where('nguoi_tao_id', $userId)->findOrFail($id);

        $validated = $request->validate([
            'tieu_de' => 'sometimes|string|max:255',
            'noi_dung' => 'sometimes|string',
            'loai_bai_viet' => 'sometimes|string|in:bai_viet,thong_bao,tai_lieu,bai_tap',
            'trang_thai' => 'sometimes|string',
            'hinh_anh' => 'nullable|image|max:10240',
        ]);

        // Nếu có ảnh mới, upload lên Cloudinary
        if ($request->hasFile('hinh_anh')) {
            $cloudinary = new \Cloudinary\Cloudinary(env('CLOUDINARY_URL'));
            $result = $cloudinary->uploadApi()->upload(
                $request->file('hinh_anh')->getRealPath(),
                ['folder' => 'posts']
            );
            $validated['hinh_anh'] = $result['secure_url'];
        } else {
            unset($validated['hinh_anh']); // Không ghi đè nếu không upload ảnh mới
        }

        $post->update($validated);

        return response()->json(['message' => 'Post updated successfully', 'data' => $post]);
    }

    public function destroy($id)
    {
        $post = BaiViet::findOrFail($id);
        
        // Delete related records to prevent foreign key constraint violations
        \App\Models\TepTinBaiViet::where('bai_viet_id', $post->id)->delete();
        \App\Models\BinhLuan::where('bai_viet_id', $post->id)->delete();

        $post->delete();

        return response()->json(['message' => 'Post deleted successfully']);
    }
}
