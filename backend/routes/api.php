<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\KhoaController;
use App\Http\Controllers\NguoiDungController;

Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);
    
    // Giang vien route
    Route::get('/giang-vien', [NguoiDungController::class, 'getGiangVien']);
    
    // Khoa routes
    Route::get('/khoa', [KhoaController::class, 'index']);
    Route::post('/khoa', [KhoaController::class, 'store']);
    Route::get('/khoa/{id}', [KhoaController::class, 'show']);
    Route::put('/khoa/{id}', [KhoaController::class, 'update']);
    Route::delete('/khoa/{id}', [KhoaController::class, 'destroy']);
    
    // BoMon routes
    Route::get('/bo-mon', [\App\Http\Controllers\BoMonController::class, 'index']);
    Route::post('/bo-mon', [\App\Http\Controllers\BoMonController::class, 'store']);
    Route::get('/bo-mon/{id}', [\App\Http\Controllers\BoMonController::class, 'show']);
    Route::put('/bo-mon/{id}', [\App\Http\Controllers\BoMonController::class, 'update']);
    Route::delete('/bo-mon/{id}', [\App\Http\Controllers\BoMonController::class, 'destroy']);
    
    // Dashboard stats
    Route::get('/dashboard/stats', [\App\Http\Controllers\DashboardController::class, 'stats']);
});
