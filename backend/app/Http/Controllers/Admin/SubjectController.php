<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\MonHoc;
use App\Models\Khoa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SubjectController extends Controller
{
    public function index()
    {
        $query = MonHoc::with(['khoa', 'boMon']);
        
        $user = auth()->user();
        if ($user && $user->vai_tro_id == 2) {
            $user->load('giangVien.boMon');
            if ($user->giangVien && $user->giangVien->boMon) {
                $khoaId = $user->giangVien->boMon->khoa_id;
                $query->where('khoa_id', $khoaId);
            }
        }

        $subjects = $query->get();
        return response()->json($subjects);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'ma_mon' => 'required|string|max:20|unique:mon_hoc,ma_mon',
            'ten_mon' => 'required|string|max:100',
            'tin_chi' => 'required|integer|min:1',
            'khoa_id' => 'required|exists:khoa,id',
            'bo_mon_id' => 'nullable|exists:bo_mon,id',
            'trang_thai' => 'required|in:dang_mo,ngung_su_dung',
        ]);

        $subject = MonHoc::create($validated);
        $subject->load(['khoa', 'boMon']);
        return response()->json($subject, 201);
    }

    public function show($id)
    {
        $subject = MonHoc::with(['khoa', 'boMon'])->findOrFail($id);
        return response()->json($subject);
    }

    public function update(Request $request, $id)
    {
        $subject = MonHoc::findOrFail($id);

        $validated = $request->validate([
            'ma_mon' => 'required|string|max:20|unique:mon_hoc,ma_mon,' . $id,
            'ten_mon' => 'required|string|max:100',
            'tin_chi' => 'required|integer|min:1',
            'khoa_id' => 'required|exists:khoa,id',
            'bo_mon_id' => 'nullable|exists:bo_mon,id',
            'trang_thai' => 'required|in:dang_mo,ngung_su_dung',
        ]);

        $subject->update($validated);
        $subject->load(['khoa', 'boMon']);
        return response()->json($subject);
    }

    public function destroy($id)
    {
        $subject = MonHoc::findOrFail($id);
        $subject->delete();
        return response()->json(['message' => 'Deleted successfully']);
    }

    public function stats()
    {
        $totalCount = MonHoc::count();
        $activeCount = MonHoc::where('trang_thai', 'dang_mo')->count();
        $pausedCount = MonHoc::where('trang_thai', 'ngung_su_dung')->count();

        // Tỷ lệ phân bổ theo khoa
        $distribution = MonHoc::select('khoa_id', DB::raw('count(*) as count'))
            ->groupBy('khoa_id')
            ->with('khoa')
            ->get()
            ->map(function ($item) use ($totalCount) {
                $percentage = $totalCount > 0 ? round(($item->count / $totalCount) * 100) : 0;
                return [
                    'label' => $item->khoa ? $item->khoa->ten_khoa : 'Không xác định',
                    'percentage' => $percentage
                ];
            });

        // Sắp xếp giảm dần và gán theme (primary, secondary, tertiary)
        $distribution = $distribution->sortByDesc('percentage')->values();
        $themes = ['primary', 'secondary', 'tertiary'];
        $distributionData = $distribution->map(function ($item, $index) use ($themes) {
            $item['theme'] = $themes[$index % count($themes)];
            return $item;
        });

        return response()->json([
            'totalCount' => $totalCount,
            'activeCount' => $activeCount,
            'pausedCount' => $pausedCount,
            'distributionData' => $distributionData
        ]);
    }
}
