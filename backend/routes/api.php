<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Student\StudentProfileController;
use App\Http\Controllers\Lecturer\LecturerProfileController;

Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);
    
    // Student Routes
    Route::get('/student/profile', [StudentProfileController::class, 'show']);
    Route::put('/student/profile', [StudentProfileController::class, 'update']);

    // Lecturer Routes
    Route::get('/lecturer/profile', [LecturerProfileController::class, 'show']);
    Route::put('/lecturer/profile', [LecturerProfileController::class, 'update']);
});
