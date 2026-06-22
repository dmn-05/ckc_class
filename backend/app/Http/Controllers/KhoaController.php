<?php

namespace App\Http\Controllers;

use App\Models\Khoa;
use Illuminate\Http\Request;

class KhoaController extends Controller
{
    public function index()
    {
        return response()->json(Khoa::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'ma_khoa' => 'required|string|max:20|unique:khoa,ma_khoa',
            'ten_khoa' => 'required|string|max:100',
            'truong_khoa' => 'nullable|string|max:100',
            'trang_thai' => 'required|in:dang_hoat_dong,ngung_hoat_dong,cho_phe_duyet',
        ]);

        $khoa = Khoa::create($validated);
        return response()->json($khoa, 201);
    }

    public function show($id)
    {
        $khoa = Khoa::findOrFail($id);
        return response()->json($khoa);
    }

    public function update(Request $request, $id)
    {
        $khoa = Khoa::findOrFail($id);

        $validated = $request->validate([
            'ma_khoa' => 'required|string|max:20|unique:khoa,ma_khoa,' . $id,
            'ten_khoa' => 'required|string|max:100',
            'truong_khoa' => 'nullable|string|max:100',
            'trang_thai' => 'required|in:dang_hoat_dong,ngung_hoat_dong,cho_phe_duyet',
        ]);

        $khoa->update($validated);
        return response()->json($khoa);
    }

    public function destroy($id)
    {
        $khoa = Khoa::findOrFail($id);
        $khoa->delete();
        return response()->json(['message' => 'Deleted successfully']);
    }
}
