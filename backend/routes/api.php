<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Admin\FacultyController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Student\StudentProfileController;
use App\Http\Controllers\Lecturer\LecturerProfileController;
use App\Http\Controllers\Admin\DepartmentController;
use App\Http\Controllers\Admin\DashboardController;

Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);
    
    // Dashboard stats
    Route::get('/dashboard/stats', [DashboardController::class, 'stats']);

    // Admin Only Routes
    Route::middleware(\App\Http\Middleware\CheckRole::class.':1')->group(function () {
        // Lecturer route
        Route::get('/lecturers', [UserController::class, 'getGiangVien']);
        
        // Faculty routes
        Route::get('/faculties', [FacultyController::class, 'index']);
        Route::post('/faculties', [FacultyController::class, 'store']);
        Route::get('/faculties/{id}', [FacultyController::class, 'show']);
        Route::put('/faculties/{id}', [FacultyController::class, 'update']);
        Route::delete('/faculties/{id}', [FacultyController::class, 'destroy']);
        
        // Department routes
        Route::get('/departments', [DepartmentController::class, 'index']);
        Route::post('/departments', [DepartmentController::class, 'store']);
        Route::get('/departments/{id}', [DepartmentController::class, 'show']);
        Route::put('/departments/{id}', [DepartmentController::class, 'update']);
        Route::delete('/departments/{id}', [DepartmentController::class, 'destroy']);
    });
    
    // Student Routes
    Route::get('/student/profile', [StudentProfileController::class, 'show']);
    Route::put('/student/profile', [StudentProfileController::class, 'update']);

    // Lecturer Routes
    Route::get('/lecturer/profile', [LecturerProfileController::class, 'show']);
    Route::put('/lecturer/profile', [LecturerProfileController::class, 'update']);
});
