<?php

namespace App\Http\Controllers;

use App\Models\BoMon;
use Illuminate\Http\Request;

class BoMonController extends Controller
{
    public function index()
    {
        $boMons = BoMon::with('khoa')->get();
        return response()->json($boMons);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'ma_bo_mon' => 'required|string|max:20|unique:bo_mon,ma_bo_mon',
            'ten_bo_mon' => 'required|string|max:150',
            'khoa_id' => 'required|exists:khoa,id',
            'truong_bo_mon' => 'nullable|string|max:100',
            'trang_thai' => 'required|in:dang_hoat_dong,ngung_hoat_dong,cho_phe_duyet',
        ]);

        $boMon = BoMon::create($validated);
        return response()->json($boMon, 201);
    }

    public function show($id)
    {
        $boMon = BoMon::findOrFail($id);
        return response()->json($boMon);
    }

    public function update(Request $request, $id)
    {
        $boMon = BoMon::findOrFail($id);

        $validated = $request->validate([
            'ma_bo_mon' => 'required|string|max:20|unique:bo_mon,ma_bo_mon,' . $id,
            'ten_bo_mon' => 'required|string|max:150',
            'khoa_id' => 'required|exists:khoa,id',
            'truong_bo_mon' => 'nullable|string|max:100',
            'trang_thai' => 'required|in:dang_hoat_dong,ngung_hoat_dong,cho_phe_duyet',
        ]);

        $boMon->update($validated);
        return response()->json($boMon);
    }

    public function destroy($id)
    {
        $boMon = BoMon::findOrFail($id);
        $boMon->delete();
        return response()->json(['message' => 'Đã xóa bộ môn']);
    }
}
