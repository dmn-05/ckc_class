<?php

namespace App\Http\Controllers;

use App\Models\BinhLuan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'noi_dung' => 'required|string',
            'bai_viet_id' => 'required|integer|exists:bai_viet,id',
            'lop_hoc_phan_id' => 'required|integer',
            'binh_luan_cha_id' => 'nullable|integer|exists:binh_luan,id',
        ]);

        $comment = BinhLuan::create([
            'noi_dung' => $validated['noi_dung'],
            'bai_viet_id' => $validated['bai_viet_id'],
            'lop_hoc_phan_id' => $validated['lop_hoc_phan_id'],
            'binh_luan_cha_id' => $validated['binh_luan_cha_id'] ?? null,
            'nguoi_dung_id' => Auth::id(),
            'trang_thai' => 'hien_thi',
        ]);

        $comment->load('nguoiDung');

        return response()->json(['message' => 'Comment created successfully', 'data' => $comment], 201);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'noi_dung' => 'required|string',
        ]);

        $comment = BinhLuan::findOrFail($id);
        
        $isAuthor = $comment->nguoi_dung_id === Auth::id();

        if (!$isAuthor) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $comment->update([
            'noi_dung' => $validated['noi_dung']
        ]);

        return response()->json(['message' => 'Comment updated successfully', 'data' => $comment]);
    }

    public function destroy($id)
    {
        $comment = BinhLuan::findOrFail($id);
        
        // Authorization: only the comment author OR the post author (Lecturer) can delete
        $isAuthor = $comment->nguoi_dung_id === Auth::id();
        $isPostAuthor = $comment->baiViet ? $comment->baiViet->nguoi_tao_id === Auth::id() : false;

        if (!$isAuthor && !$isPostAuthor) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        // Soft delete: only mark this comment as deleted, keep all replies intact
        $comment->update(['trang_thai' => 'an']);

        return response()->json(['message' => 'Comment deleted successfully']);
    }
}
