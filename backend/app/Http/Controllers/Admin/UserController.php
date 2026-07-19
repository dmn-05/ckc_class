<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use App\Models\NguoiDung;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getLecturers()
    {
        // vai_tro_id = 2 is giang_vien
        $lecturers = NguoiDung::where('vai_tro_id', 2)
            ->with(['giangVien.boMon.khoa'])
            ->get();
            
        return response()->json($lecturers);
    }

    public function getLecturerById($id)
    {
        $lecturer = NguoiDung::where('vai_tro_id', 2)
            ->with(['giangVien.boMon.khoa'])
            ->findOrFail($id);
        return response()->json($lecturer);
    }

    public function storeLecturer(Request $request)
    {
        $validated = $request->validate([
            'ho_ten' => 'required|string|max:100',
            'email' => 'required|email|unique:nguoi_dung,email',
            'mat_khau' => 'nullable|string|min:6',
            'ma_giang_vien' => 'required|string|max:20|unique:giang_vien,ma_giang_vien',
            'cccd' => 'required|string|regex:/^[0-9]{12}$/|unique:giang_vien,cccd',
            'ngay_sinh' => 'required|date',
            'gioi_tinh' => 'required|in:nam,nu,khac',
            'so_dien_thoai' => 'nullable|string|regex:/^[0-9]{10}$/',
            'dia_chi' => 'nullable|string',
            'bo_mon_id' => 'required|exists:bo_mon,id',
            'trang_thai' => 'required|in:dang_day,ngung_day',
            'avatar' => 'nullable|image|max:5120',
        ]);

        \DB::beginTransaction();
        try {
            $user = NguoiDung::create([
                'ho_ten' => $validated['ho_ten'],
                'email' => $validated['email'],
                'mat_khau' => \Hash::make($validated['mat_khau'] ?? '123456'),
                'vai_tro_id' => 2,
                'trang_thai' => 'dang_hoat_dong',
            ]);

            if ($request->hasFile('avatar') && env('CLOUDINARY_URL')) {
                $cloudinary = new \Cloudinary\Cloudinary(env('CLOUDINARY_URL'));
                $result = $cloudinary->uploadApi()->upload(
                    $request->file('avatar')->getRealPath(),
                    ['folder' => 'avatars']
                );
                $user->avatar = $result['secure_url'];
                $user->save();
            }

            \App\Models\GiangVien::create([
                'nguoi_dung_id' => $user->id,
                'ma_giang_vien' => $validated['ma_giang_vien'],
                'cccd' => $validated['cccd'],
                'ngay_sinh' => $validated['ngay_sinh'],
                'gioi_tinh' => $validated['gioi_tinh'],
                'so_dien_thoai' => $validated['so_dien_thoai'],
                'dia_chi' => $validated['dia_chi'],
                'bo_mon_id' => $validated['bo_mon_id'],
                'trang_thai' => $validated['trang_thai'],
            ]);

            \DB::commit();
            return response()->json(['message' => 'Thêm giảng viên thành công', 'data' => $user], 201);
        } catch (\Exception $e) {
            \DB::rollBack();
            return response()->json(['message' => 'Lỗi thêm giảng viên', 'error' => $e->getMessage()], 500);
        }
    }

    public function updateLecturer(Request $request, $id)
    {
        $user = NguoiDung::where('vai_tro_id', 2)->findOrFail($id);

        $validated = $request->validate([
            'ho_ten' => 'required|string|max:100',
            'email' => 'required|email|unique:nguoi_dung,email,' . $id,
            'ma_giang_vien' => 'required|string|max:20|unique:giang_vien,ma_giang_vien,' . $user->giangVien->id,
            'cccd' => 'required|string|regex:/^[0-9]{12}$/|unique:giang_vien,cccd,' . $user->giangVien->id,
            'ngay_sinh' => 'required|date',
            'gioi_tinh' => 'required|in:nam,nu,khac',
            'so_dien_thoai' => 'nullable|string|regex:/^[0-9]{10}$/',
            'dia_chi' => 'nullable|string',
            'bo_mon_id' => 'required|exists:bo_mon,id',
            'trang_thai' => 'required|in:dang_day,ngung_day',
            'avatar' => 'nullable|image|max:5120',
        ]);

        \DB::beginTransaction();
        try {
            $user->update([
                'ho_ten' => $validated['ho_ten'],
                'email' => $validated['email'],
            ]);

            if ($request->hasFile('avatar') && env('CLOUDINARY_URL')) {
                $cloudinary = new \Cloudinary\Cloudinary(env('CLOUDINARY_URL'));
                $result = $cloudinary->uploadApi()->upload(
                    $request->file('avatar')->getRealPath(),
                    ['folder' => 'avatars']
                );
                $user->avatar = $result['secure_url'];
                $user->save();
            }

            $user->giangVien()->update([
                'ma_giang_vien' => $validated['ma_giang_vien'],
                'cccd' => $validated['cccd'],
                'ngay_sinh' => $validated['ngay_sinh'],
                'gioi_tinh' => $validated['gioi_tinh'],
                'so_dien_thoai' => $validated['so_dien_thoai'],
                'dia_chi' => $validated['dia_chi'],
                'bo_mon_id' => $validated['bo_mon_id'],
                'trang_thai' => $validated['trang_thai'],
            ]);

            \DB::commit();
            return response()->json(['message' => 'Cập nhật giảng viên thành công', 'data' => $user]);
        } catch (\Exception $e) {
            \DB::rollBack();
            return response()->json(['message' => 'Lỗi cập nhật giảng viên', 'error' => $e->getMessage()], 500);
        }
    }

    public function destroyLecturer($id)
    {
        try {
            \DB::beginTransaction();

            $user = NguoiDung::where('vai_tro_id', 2)->findOrFail($id);
            
            // Soft delete the GiangVien record
            if ($user->giangVien) {
                $user->giangVien()->delete();
            }

            // Also lock the user account
            $user->update(['trang_thai' => 'bi_khoa']);

            \DB::commit();
            return response()->json([
                'message' => 'Xóa giảng viên thành công',
                'data' => [
                    'id' => $user->id,
                    'deleted_at' => $user->giangVien ? $user->giangVien->deleted_at : now()
                ]
            ]);
        } catch (\Exception $e) {
            \DB::rollBack();
            return response()->json(['message' => 'Lỗi xóa giảng viên', 'error' => $e->getMessage()], 500);
        }
    }

    public function getStudents()
    {
        // vai_tro_id = 3 is sinh_vien
        $students = NguoiDung::where('vai_tro_id', 3)
            ->whereHas('sinhVien')
            ->with(['sinhVien.khoa', 'sinhVien.lop'])
            ->get();
            
        return response()->json($students);
    }

    public function getStudentById($id)
    {
        $student = NguoiDung::where('vai_tro_id', 3)
            ->with(['sinhVien.khoa', 'sinhVien.lop'])
            ->findOrFail($id);
        return response()->json($student);
    }

    public function storeStudent(Request $request)
    {
        $validated = $request->validate([
            'ho_ten' => 'required|string|max:100',
            'email' => 'required|email|unique:nguoi_dung,email',
            'mat_khau' => 'nullable|string|min:6',
            'so_dien_thoai' => 'nullable|string|max:20',
            'cccd' => 'nullable|string|max:20',
            'dia_chi' => 'nullable|string',
            'ngay_sinh' => 'nullable|date',
            'gioi_tinh' => 'required|in:nam,nu,khac',
            'ma_sinh_vien' => 'required|string|unique:sinh_vien,ma_sinh_vien',
            'khoa_id' => 'required|exists:khoa,id',
            'lop_id' => 'required|exists:lop,id',
            'khoa_hoc' => 'nullable|string|max:50',
            'trang_thai' => 'required|in:dang_hoc,tam_nghi,da_tot_nghiep',
            'avatar' => 'nullable|image|max:5120',
        ]);

        \DB::beginTransaction();
        try {
            $user = NguoiDung::create([
                'ho_ten' => $validated['ho_ten'],
                'email' => $validated['email'],
                'mat_khau' => \Hash::make($validated['mat_khau'] ?? '123456'),
                'vai_tro_id' => 3,
                'trang_thai' => 'dang_hoat_dong',
            ]);

            if ($request->hasFile('avatar') && env('CLOUDINARY_URL')) {
                $cloudinary = new \Cloudinary\Cloudinary(env('CLOUDINARY_URL'));
                $result = $cloudinary->uploadApi()->upload(
                    $request->file('avatar')->getRealPath(),
                    ['folder' => 'avatars']
                );
                $user->avatar = $result['secure_url'];
                $user->save();
            }

            \App\Models\SinhVien::create([
                'nguoi_dung_id' => $user->id,
                'ma_sinh_vien' => $validated['ma_sinh_vien'],
                'khoa_id' => $validated['khoa_id'],
                'lop_id' => $validated['lop_id'],
                'khoa_hoc' => $validated['khoa_hoc'] ?? null,
                'so_dien_thoai' => $validated['so_dien_thoai'] ?? null,
                'cccd' => $validated['cccd'] ?? null,
                'dia_chi' => $validated['dia_chi'] ?? null,
                'ngay_sinh' => $validated['ngay_sinh'],
                'gioi_tinh' => $validated['gioi_tinh'],
                'trang_thai' => $validated['trang_thai'],
            ]);

            \DB::commit();
            return response()->json(['message' => 'Thêm sinh viên thành công', 'data' => $user], 201);
        } catch (\Exception $e) {
            \DB::rollBack();
            \Log::error('Error storing student: ' . $e->getMessage(), ['exception' => $e]);
            return response()->json(['message' => 'Lỗi thêm sinh viên', 'error' => $e->getMessage()], 500);
        }
    }

    public function updateStudent(Request $request, $id)
    {
        $user = NguoiDung::where('vai_tro_id', 3)->findOrFail($id);

        $validated = $request->validate([
            'ho_ten' => 'required|string|max:100',
            'email' => 'required|email|unique:nguoi_dung,email,' . $id,
            'so_dien_thoai' => 'nullable|string|max:20',
            'cccd' => 'nullable|string|max:20',
            'dia_chi' => 'nullable|string',
            'ngay_sinh' => 'nullable|date',
            'gioi_tinh' => 'required|in:nam,nu,khac',
            'ma_sinh_vien' => 'required|string|unique:sinh_vien,ma_sinh_vien,' . $user->sinhVien->id,
            'khoa_id' => 'required|exists:khoa,id',
            'lop_id' => 'required|exists:lop,id',
            'khoa_hoc' => 'nullable|string|max:50',
            'trang_thai' => 'required|in:dang_hoc,tam_nghi,da_tot_nghiep',
            'avatar' => 'nullable|image|max:5120',
        ]);

        \DB::beginTransaction();
        try {
            $user->update([
                'ho_ten' => $validated['ho_ten'],
                'email' => $validated['email'],
            ]);

            if ($request->hasFile('avatar') && env('CLOUDINARY_URL')) {
                $cloudinary = new \Cloudinary\Cloudinary(env('CLOUDINARY_URL'));
                $result = $cloudinary->uploadApi()->upload(
                    $request->file('avatar')->getRealPath(),
                    ['folder' => 'avatars']
                );
                $user->avatar = $result['secure_url'];
                $user->save();
            }

            $user->sinhVien()->update([
                'ma_sinh_vien' => $validated['ma_sinh_vien'],
                'khoa_id' => $validated['khoa_id'],
                'lop_id' => $validated['lop_id'],
                'khoa_hoc' => $validated['khoa_hoc'] ?? null,
                'so_dien_thoai' => $validated['so_dien_thoai'] ?? null,
                'cccd' => $validated['cccd'] ?? null,
                'dia_chi' => $validated['dia_chi'] ?? null,
                'ngay_sinh' => $validated['ngay_sinh'],
                'gioi_tinh' => $validated['gioi_tinh'],
                'trang_thai' => $validated['trang_thai'],
            ]);

            \DB::commit();
            return response()->json(['message' => 'Cập nhật sinh viên thành công', 'data' => $user]);
        } catch (\Exception $e) {
            \DB::rollBack();
            \Log::error('Error updating student: ' . $e->getMessage(), ['exception' => $e]);
            return response()->json(['message' => 'Lỗi cập nhật sinh viên', 'error' => $e->getMessage()], 500);
        }
    }

    public function resetStudentPassword($id)
    {
        $user = NguoiDung::where('vai_tro_id', 3)->findOrFail($id);
        $user->mat_khau = \Hash::make('123456');
        $user->save();

        return response()->json([
            'success' => true,
            'message' => 'Đặt lại mật khẩu thành công (Mật khẩu mới: 123456)'
        ]);
    }

    public function destroyStudent($id)
    {
        try {
            \DB::beginTransaction();

            $user = NguoiDung::where('vai_tro_id', 3)->findOrFail($id);
            
            // Soft delete the SinhVien record
            if ($user->sinhVien) {
                $user->sinhVien()->delete();
            }

            // Also lock the user account
            $user->update(['trang_thai' => 'bi_khoa']);

            \DB::commit();
            return response()->json(['message' => 'Xóa sinh viên thành công']);
        } catch (\Exception $e) {
            \DB::rollBack();
            return response()->json(['message' => 'Lỗi xóa sinh viên', 'error' => $e->getMessage()], 500);
        }
    }

    public function importStudentsJson(Request $request)
    {
        $input = $request->json()->all();
        if (isset($input['students']) && is_array($input['students'])) {
            $items = $input['students'];
        } elseif (isset($input['data']) && is_array($input['data'])) {
            $items = $input['data'];
        } elseif (is_array($input) && (array_is_list($input) || empty($input))) {
            $items = $input;
        } else {
            return response()->json([
                'message' => 'Dữ liệu JSON truyền vào phải là mảng danh sách sinh viên hoặc object chứa key "students".',
                'success_count' => 0,
                'failure_count' => 0,
            ], 400);
        }

        $successList = [];
        $errors = [];

        foreach ($items as $index => $item) {
            if (!is_array($item)) {
                $errors[] = [
                    'index' => $index,
                    'reason' => 'Dữ liệu sinh viên tại vị trí số ' . ($index + 1) . ' không hợp lệ.'
                ];
                continue;
            }

            $hoTen = trim($item['ho_ten'] ?? $item['hoTen'] ?? $item['name'] ?? '');
            $email = trim($item['email'] ?? '');
            $maSinhVien = trim($item['ma_sinh_vien'] ?? $item['maSinhVien'] ?? $item['student_code'] ?? '');

            if (empty($hoTen) || empty($email) || empty($maSinhVien)) {
                $errors[] = [
                    'index' => $index,
                    'ma_sinh_vien' => $maSinhVien,
                    'email' => $email,
                    'reason' => 'Thiếu thông tin bắt buộc (ho_ten, email, ma_sinh_vien).'
                ];
                continue;
            }

            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $errors[] = [
                    'index' => $index,
                    'ma_sinh_vien' => $maSinhVien,
                    'email' => $email,
                    'reason' => 'Định dạng email không hợp lệ.'
                ];
                continue;
            }

            // Check duplicate email
            if (NguoiDung::where('email', $email)->exists()) {
                $errors[] = [
                    'index' => $index,
                    'ma_sinh_vien' => $maSinhVien,
                    'email' => $email,
                    'reason' => "Email '$email' đã tồn tại trong hệ thống."
                ];
                continue;
            }

            // Check duplicate ma_sinh_vien
            if (\App\Models\SinhVien::where('ma_sinh_vien', $maSinhVien)->exists()) {
                $errors[] = [
                    'index' => $index,
                    'ma_sinh_vien' => $maSinhVien,
                    'email' => $email,
                    'reason' => "Mã sinh viên '$maSinhVien' đã tồn tại trong hệ thống."
                ];
                continue;
            }

            $soDienThoai = trim($item['so_dien_thoai'] ?? $item['phone'] ?? '');
            if (!empty($soDienThoai) && !preg_match('/^[0-9]{10}$/', $soDienThoai)) {
                $errors[] = [
                    'index' => $index,
                    'ma_sinh_vien' => $maSinhVien,
                    'email' => $email,
                    'reason' => "Số điện thoại '$soDienThoai' phải đúng 10 chữ số."
                ];
                continue;
            }

            $cccd = trim($item['cccd'] ?? '');
            if (!empty($cccd) && !preg_match('/^[0-9]{12}$/', $cccd)) {
                $errors[] = [
                    'index' => $index,
                    'ma_sinh_vien' => $maSinhVien,
                    'email' => $email,
                    'reason' => "Số CCCD '$cccd' phải đúng 12 chữ số."
                ];
                continue;
            }

            // Resolve khoa_id
            $khoaId = $item['khoa_id'] ?? null;
            if (!$khoaId && !empty($item['ma_khoa'])) {
                $khoaObj = \App\Models\Khoa::where('ma_khoa', $item['ma_khoa'])->first();
                if ($khoaObj) $khoaId = $khoaObj->id;
            }
            if (!$khoaId) {
                $khoaObj = \App\Models\Khoa::first();
                if ($khoaObj) {
                    $khoaId = $khoaObj->id;
                } else {
                    $errors[] = [
                        'index' => $index,
                        'ma_sinh_vien' => $maSinhVien,
                        'email' => $email,
                        'reason' => 'Không tìm thấy Khoa hợp lệ trong hệ thống.'
                    ];
                    continue;
                }
            }

            // Resolve lop_id
            $lopId = $item['lop_id'] ?? null;
            if (!$lopId && !empty($item['ma_lop'])) {
                $lopObj = \App\Models\Lop::where('ma_lop', $item['ma_lop'])->first();
                if ($lopObj) $lopId = $lopObj->id;
            }
            if (!$lopId) {
                $lopObj = \App\Models\Lop::where('khoa_id', $khoaId)->first() ?? \App\Models\Lop::first();
                if ($lopObj) {
                    $lopId = $lopObj->id;
                } else {
                    $errors[] = [
                        'index' => $index,
                        'ma_sinh_vien' => $maSinhVien,
                        'email' => $email,
                        'reason' => 'Không tìm thấy Lớp hợp lệ trong hệ thống.'
                    ];
                    continue;
                }
            }

            \DB::beginTransaction();
            try {
                $user = NguoiDung::create([
                    'ho_ten' => $hoTen,
                    'email' => $email,
                    'mat_khau' => \Hash::make($item['mat_khau'] ?? '123456'),
                    'vai_tro_id' => 3,
                    'trang_thai' => 'dang_hoat_dong',
                ]);

                $student = \App\Models\SinhVien::create([
                    'nguoi_dung_id' => $user->id,
                    'ma_sinh_vien' => $maSinhVien,
                    'khoa_id' => $khoaId,
                    'lop_id' => $lopId,
                    'so_dien_thoai' => !empty($soDienThoai) ? $soDienThoai : null,
                    'cccd' => !empty($cccd) ? $cccd : null,
                    'dia_chi' => $item['dia_chi'] ?? null,
                    'ngay_sinh' => $item['ngay_sinh'] ?? '2004-01-01',
                    'gioi_tinh' => in_array($item['gioi_tinh'] ?? '', ['nam', 'nu', 'khac']) ? $item['gioi_tinh'] : 'nam',
                    'trang_thai' => in_array($item['trang_thai'] ?? '', ['dang_hoc', 'tam_nghi', 'da_tot_nghiep']) ? $item['trang_thai'] : 'dang_hoc',
                ]);

                \DB::commit();

                $successList[] = [
                    'id' => $user->id,
                    'sinh_vien_id' => $student->id,
                    'ma_sinh_vien' => $maSinhVien,
                    'ho_ten' => $hoTen,
                    'email' => $email,
                ];
            } catch (\Exception $e) {
                \DB::rollBack();
                $errors[] = [
                    'index' => $index,
                    'ma_sinh_vien' => $maSinhVien,
                    'email' => $email,
                    'reason' => 'Lỗi lưu CSDL: ' . $e->getMessage()
                ];
            }
        }

        return response()->json([
            'message' => 'Hoàn tất xử lý thêm danh sách sinh viên',
            'total_received' => count($items),
            'success_count' => count($successList),
            'failure_count' => count($errors),
            'success_list' => $successList,
            'errors' => $errors,
        ], count($errors) > 0 && count($successList) === 0 ? 400 : 201);
    }
}
