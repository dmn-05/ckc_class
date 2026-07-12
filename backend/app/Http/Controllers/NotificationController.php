<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ThongBao;
use App\Models\SinhVien;
use App\Models\GiangVien;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class NotificationController extends Controller
{
    public function index(Request $request)
    {
        $userId = Auth::id();
        if (!$userId) {
            return response()->json(['data' => [], 'unread_count' => 0]);
        }

        // Tìm danh sách lớp học phần của sinh viên
        $sv = SinhVien::where('nguoi_dung_id', $userId)->first();
        $classIds = [];
        if ($sv) {
            $classIds = DB::table('sinh_vien_lop_hoc_phan')
                ->where('sinh_vien_id', $sv->id)
                ->pluck('lop_hoc_phan_id')
                ->toArray();
        }

        // Tìm danh sách lớp học phần của giảng viên
        $gv = GiangVien::where('nguoi_dung_id', $userId)->first();
        if ($gv) {
            $gvClassIds = DB::table('lop_hoc_phan')
                ->where('giang_vien_id', $gv->id)
                ->pluck('id')
                ->toArray();
            $classIds = array_unique(array_merge($classIds, $gvClassIds));
        }

        $query = ThongBao::with(['lopHocPhan:id,ma_lop_hoc_phan,ten_lop', 'nguoiTao:id,ho_ten'])
            ->where(function ($q) use ($userId, $classIds) {
                $q->where('nguoi_nhan_id', $userId)
                  ->orWhere(function ($sub) use ($classIds) {
                      $sub->whereNull('nguoi_nhan_id')
                          ->whereIn('lop_hoc_phan_id', $classIds);
                  });
            })
            ->where('trang_thai', 'hien_thi')
            ->orderBy('ngay_tao', 'desc')
            ->limit(50);

        $notifications = $query->get();

        $unreadCount = 0;
        $formatted = $notifications->map(function ($item) use ($userId, &$unreadCount) {
            $readIds = $item->danh_sach_da_doc ? json_decode($item->danh_sach_da_doc, true) : [];
            if (!is_array($readIds)) $readIds = [];

            $isRead = false;
            if ($item->nguoi_nhan_id == $userId) {
                $isRead = (bool)$item->da_doc;
            } else {
                $isRead = in_array($userId, $readIds);
            }

            if (!$isRead) {
                $unreadCount++;
            }

            $arr = $item->toArray();
            $arr['da_doc'] = $isRead;
            return $arr;
        });

        return response()->json([
            'data' => $formatted,
            'unread_count' => $unreadCount
        ]);
    }

    public function markAsRead(Request $request, $id)
    {
        $userId = Auth::id();
        if (!$userId) return response()->json(['success' => false], 401);

        $notification = ThongBao::find($id);
        if ($notification) {
            if ($notification->nguoi_nhan_id == $userId) {
                $notification->update(['da_doc' => true]);
            } else {
                $readIds = $notification->danh_sach_da_doc ? json_decode($notification->danh_sach_da_doc, true) : [];
                if (!is_array($readIds)) $readIds = [];
                if (!in_array($userId, $readIds)) {
                    $readIds[] = $userId;
                    $notification->update(['danh_sach_da_doc' => json_encode($readIds)]);
                }
            }
        }

        return response()->json(['success' => true]);
    }

    public function markAllAsRead(Request $request)
    {
        $userId = Auth::id();
        if (!$userId) return response()->json(['success' => false], 401);

        // Đánh dấu đã đọc các thông báo riêng
        ThongBao::where('nguoi_nhan_id', $userId)
            ->where('da_doc', false)
            ->update(['da_doc' => true]);

        // Đánh dấu đã đọc các thông báo chung của lớp
        $sv = SinhVien::where('nguoi_dung_id', $userId)->first();
        $classIds = [];
        if ($sv) {
            $classIds = DB::table('sinh_vien_lop_hoc_phan')
                ->where('sinh_vien_id', $sv->id)
                ->pluck('lop_hoc_phan_id')
                ->toArray();
        }

        $classNotifs = ThongBao::whereNull('nguoi_nhan_id')
            ->whereIn('lop_hoc_phan_id', $classIds)
            ->get();

        foreach ($classNotifs as $notif) {
            $readIds = $notif->danh_sach_da_doc ? json_decode($notif->danh_sach_da_doc, true) : [];
            if (!is_array($readIds)) $readIds = [];
            if (!in_array($userId, $readIds)) {
                $readIds[] = $userId;
                $notif->update(['danh_sach_da_doc' => json_encode($readIds)]);
            }
        }

        return response()->json(['success' => true]);
    }
}
