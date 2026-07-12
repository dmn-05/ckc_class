<?php

namespace App\Http\Controllers\Lecturer;

use App\Http\Controllers\Controller;
use App\Models\BaiViet;
use App\Models\LopHocPhan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ResourceController extends Controller
{
    private function getGiangVienId()
    {
        $user = auth()->user();
        if (!$user || !$user->giangVien) {
            abort(403, 'Unauthorized');
        }
        return $user->giangVien->id;
    }

    public function index()
    {
        $giangVienId = $this->getGiangVienId();
        $sectionIds = LopHocPhan::where(function ($q) use ($giangVienId) {
            $q->where('giang_vien_id', $giangVienId)
              ->orWhereHas('giangViens', function ($q2) use ($giangVienId) {
                  $q2->where('giang_vien.id', $giangVienId);
              });
        })->pluck('id');

        $resources = BaiViet::with(['lopHocPhan.monHoc', 'tepTinBaiViet.tepTin', 'nguoiTao'])
            ->where('loai_bai_viet', 'tai_lieu')
            ->whereIn('lop_hoc_phan_id', $sectionIds)
            ->orderBy('ngay_tao', 'desc')
            ->get();

        return response()->json(['data' => $resources]);
    }

    public function store(Request $request)
    {
        $giangVienId = $this->getGiangVienId();

        $validated = $request->validate([
            'tieu_de' => 'required|string|max:255',
            'noi_dung' => 'nullable|string',
            'lop_hoc_phan_id' => 'required|integer|exists:lop_hoc_phan,id',
            'loai_tai_nguyen' => 'required|string|in:document,video,link,image,other',
            'file_url' => 'nullable|string',
            'external_url' => 'nullable|url',
            'trang_thai' => 'nullable|string|in:hien_thi,an',
        ]);

        $section = LopHocPhan::where(function ($q) use ($giangVienId) {
            $q->where('giang_vien_id', $giangVienId)
              ->orWhereHas('giangViens', function ($q2) use ($giangVienId) {
                  $q2->where('giang_vien.id', $giangVienId);
              });
        })->where('id', $validated['lop_hoc_phan_id'])->firstOrFail();

        $chu_de_id = null;
        try {
            if (\Illuminate\Support\Facades\Schema::hasTable('chu_de')) {
                $chu_de_id = \Illuminate\Support\Facades\DB::table('chu_de')
                    ->where('lop_hoc_phan_id', $validated['lop_hoc_phan_id'])
                    ->where('ten_chu_de', 'Tài liệu')
                    ->value('id');
            }
        } catch (\Exception $e) {
            // Ignore if table doesn't exist
        }

        $post = BaiViet::create([
            'tieu_de' => $validated['tieu_de'],
            'noi_dung' => $validated['noi_dung'] ?? '',
            'lop_hoc_phan_id' => $validated['lop_hoc_phan_id'],
            'chu_de_id' => $chu_de_id,
            'nguoi_tao_id' => Auth::id(),
            'loai_bai_viet' => 'tai_lieu',
            'trang_thai' => $validated['trang_thai'] ?? 'hien_thi',
        ]);

        if ($request->hasFile('files') && env('CLOUDINARY_URL')) {
            $cloudinary = new \Cloudinary\Cloudinary(env('CLOUDINARY_URL'));
            foreach ($request->file('files') as $file) {
                if ($file->getSize() === 0) continue;
                $originalFileName = $file->getClientOriginalName();
                try {
                    $result = $cloudinary->uploadApi()->upload(
                        $file->getRealPath(),
                        [
                            'folder' => 'files',
                            'resource_type' => 'auto',
                            'filename_override' => $originalFileName,
                            'use_filename' => true,
                        ]
                    );
                } catch (\Exception $e) {
                    $result = $cloudinary->uploadApi()->upload(
                        $file->getRealPath(),
                        [
                            'folder' => 'files',
                            'resource_type' => 'raw',
                            'filename_override' => $originalFileName,
                            'use_filename' => true,
                        ]
                    );
                }

                $tepTin = \App\Models\TepTin::create([
                    'ten_file' => $file->getClientOriginalName(),
                    'ten_file_luu' => basename($result['secure_url']),
                    'duong_dan' => $result['secure_url'],
                    'loai_file' => $file->getClientOriginalExtension() ?: 'unknown',
                    'kich_thuoc' => $file->getSize(),
                    'nguoi_tao_id' => Auth::id(),
                    'trang_thai' => 'dang_su_dung',
                ]);

                \App\Models\TepTinBaiViet::create([
                    'tep_tin_id' => $tepTin->id,
                    'bai_viet_id' => $post->id,
                ]);
            }
        }

        \App\Helpers\NotificationHelper::createForClass(
            $post->lop_hoc_phan_id,
            "Tài liệu mới: " . $post->tieu_de,
            "Giảng viên vừa tải lên tài liệu mới cho lớp học phần.",
            'tai_lieu_moi',
            '/student/courses/' . $post->lop_hoc_phan_id,
            Auth::id()
        );

        $post->load(['lopHocPhan.monHoc', 'tepTinBaiViet.tepTin', 'nguoiTao']);

        return response()->json(['message' => 'Resource created successfully', 'data' => $post], 201);
    }

    public function show($id)
    {
        $giangVienId = $this->getGiangVienId();

        $sectionIds = LopHocPhan::where('giang_vien_id', $giangVienId)->pluck('id');

        $resource = BaiViet::with(['lopHocPhan.monHoc', 'tepTinBaiViet.tepTin', 'nguoiTao'])
            ->where('loai_bai_viet', 'tai_lieu')
            ->whereIn('lop_hoc_phan_id', $sectionIds)
            ->findOrFail($id);

        return response()->json(['data' => $resource]);
    }

    public function update(Request $request, $id)
    {
        $giangVienId = $this->getGiangVienId();
        $sectionIds = LopHocPhan::where('giang_vien_id', $giangVienId)->pluck('id');

        $post = BaiViet::where('loai_bai_viet', 'tai_lieu')
            ->whereIn('lop_hoc_phan_id', $sectionIds)
            ->findOrFail($id);

        $validated = $request->validate([
            'tieu_de' => 'sometimes|string|max:255',
            'noi_dung' => 'nullable|string',
            'loai_tai_nguyen' => 'sometimes|string|in:document,video,link,image,other',
            'file_url' => 'nullable|string',
            'external_url' => 'nullable|url',
            'trang_thai' => 'sometimes|string|in:hien_thi,an',
            'files' => 'nullable|array',
            'files.*' => 'nullable|file',
            'remove_file_ids' => 'nullable|array',
            'remove_file_ids.*' => 'integer',
        ]);

        $updateData = [];
        if (isset($validated['tieu_de'])) $updateData['tieu_de'] = $validated['tieu_de'];
        if (isset($validated['noi_dung'])) $updateData['noi_dung'] = $validated['noi_dung'];
        if (isset($validated['trang_thai'])) $updateData['trang_thai'] = $validated['trang_thai'];
        if (isset($validated['loai_tai_nguyen'])) $updateData['loai_tai_nguyen'] = $validated['loai_tai_nguyen'];
        if ($request->has('external_url')) $updateData['external_url'] = $validated['external_url'];

        // Handle file removals
        if (!empty($validated['remove_file_ids'])) {
            $tepTins = \App\Models\TepTinBaiViet::where('bai_viet_id', $post->id)
                ->whereIn('tep_tin_id', $validated['remove_file_ids'])
                ->get();
            foreach ($tepTins as $ttbt) {
                $ttbt->tepTin()->delete();
            }
        }

        // Handle new file uploads
        if ($request->hasFile('files') && env('CLOUDINARY_URL')) {
            $cloudinary = new \Cloudinary\Cloudinary(env('CLOUDINARY_URL'));
            foreach ($request->file('files') as $file) {
                $result = $cloudinary->uploadApi()->upload(
                    $file->getRealPath(),
                    [
                        'folder' => 'files',
                        'resource_type' => 'auto'
                    ]
                );

                $tepTin = \App\Models\TepTin::create([
                    'ten_file' => $file->getClientOriginalName(),
                    'ten_file_luu' => basename($result['secure_url']),
                    'duong_dan' => $result['secure_url'],
                    'loai_file' => $file->getClientOriginalExtension() ?: 'unknown',
                    'kich_thuoc' => $file->getSize(),
                    'nguoi_tao_id' => Auth::id(),
                    'trang_thai' => 'dang_su_dung',
                ]);

                \App\Models\TepTinBaiViet::create([
                    'tep_tin_id' => $tepTin->id,
                    'bai_viet_id' => $post->id,
                ]);
            }
        }

        if (!empty($updateData)) {
            $post->update($updateData);
        }

        $post->load(['lopHocPhan.monHoc', 'tepTinBaiViet.tepTin', 'nguoiTao']);

        return response()->json(['message' => 'Resource updated successfully', 'data' => $post]);
    }

    public function destroy($id)
    {
        $giangVienId = $this->getGiangVienId();
        $sectionIds = LopHocPhan::where('giang_vien_id', $giangVienId)->pluck('id');

        $post = BaiViet::where('loai_bai_viet', 'tai_lieu')
            ->whereIn('lop_hoc_phan_id', $sectionIds)
            ->findOrFail($id);

        \App\Models\TepTinBaiViet::where('bai_viet_id', $post->id)->delete();
        \App\Models\BinhLuan::where('bai_viet_id', $post->id)->delete();

        $post->delete();

        return response()->json(['message' => 'Resource deleted successfully']);
    }

    public function toggleVisibility($id)
    {
        $giangVienId = $this->getGiangVienId();
        $sectionIds = LopHocPhan::where('giang_vien_id', $giangVienId)->pluck('id');

        $post = BaiViet::where('loai_bai_viet', 'tai_lieu')
            ->whereIn('lop_hoc_phan_id', $sectionIds)
            ->findOrFail($id);

        $post->update([
            'trang_thai' => $post->trang_thai === 'hien_thi' ? 'an' : 'hien_thi'
        ]);

        return response()->json([
            'message' => 'Visibility toggled successfully',
            'data' => $post
        ]);
    }
}
