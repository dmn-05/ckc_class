<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Lop;
use Illuminate\Http\Request;

class ClassController extends Controller
{
    public function index()
    {
        $classes = Lop::with('khoa')->withCount('sinhViens')->get();
        return response()->json($classes);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'ma_lop' => 'required|string|max:20|unique:lop,ma_lop',
            'ten_lop' => 'required|string|max:100',
            'khoa_id' => 'required|exists:khoa,id',
            'nam_nhap_hoc' => 'required|integer',
            'trang_thai' => 'required|in:dang_hoc,da_tot_nghiep',
        ]);

        $lop = Lop::create($validated);
        return response()->json($lop, 201);
    }

    public function show($id)
    {
        $lop = Lop::with('khoa')->findOrFail($id);
        return response()->json($lop);
    }

    public function update(Request $request, $id)
    {
        $lop = Lop::findOrFail($id);

        $validated = $request->validate([
            'ma_lop' => 'required|string|max:20|unique:lop,ma_lop,' . $id,
            'ten_lop' => 'required|string|max:100',
            'khoa_id' => 'required|exists:khoa,id',
            'nam_nhap_hoc' => 'required|integer',
            'trang_thai' => 'required|in:dang_hoc,da_tot_nghiep',
        ]);

        $lop->update($validated);
        return response()->json($lop);
    }

    public function destroy($id)
    {
        $lop = Lop::findOrFail($id);
        $lop->delete();
        return response()->json(['message' => 'Deleted successfully']);
    }
}
