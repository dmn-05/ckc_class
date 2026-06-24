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
use App\Http\Controllers\Admin\SubjectController;
use App\Http\Controllers\Admin\ClassController;

Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/user/avatar', [AuthController::class, 'updateAvatar']);
    
    // Dashboard stats
    Route::get('/dashboard/stats', [DashboardController::class, 'stats']);

    // Admin Only Routes
    Route::middleware(\App\Http\Middleware\CheckRole::class.':1')->group(function () {
        // User routes
        Route::get('/lecturers', [UserController::class, 'getLecturers']);
        Route::get('/lecturers/{id}', [UserController::class, 'getLecturerById']);
        Route::post('/lecturers', [UserController::class, 'storeLecturer']);
        Route::put('/lecturers/{id}', [UserController::class, 'updateLecturer']);

        Route::get('/students', [UserController::class, 'getStudents']);
        Route::get('/students/{id}', [UserController::class, 'getStudentById']);
        Route::post('/students', [UserController::class, 'storeStudent']);
        Route::put('/students/{id}', [UserController::class, 'updateStudent']);
        Route::delete('/students/{id}', [UserController::class, 'destroyStudent']);
        Route::post('/students/{id}/reset-password', [UserController::class, 'resetStudentPassword']);
        
        // Class routes
        Route::get('/classes', [ClassController::class, 'index']);
        Route::post('/classes', [ClassController::class, 'store']);
        Route::get('/classes/{id}', [ClassController::class, 'show']);
        Route::put('/classes/{id}', [ClassController::class, 'update']);
        Route::delete('/classes/{id}', [ClassController::class, 'destroy']);
        
        // Course Section routes
        Route::get('/course-sections', [\App\Http\Controllers\Admin\CourseSectionController::class, 'index']);
        Route::post('/course-sections', [\App\Http\Controllers\Admin\CourseSectionController::class, 'store']);
        Route::get('/course-sections/{id}', [\App\Http\Controllers\Admin\CourseSectionController::class, 'show']);
        Route::put('/course-sections/{id}', [\App\Http\Controllers\Admin\CourseSectionController::class, 'update']);
        Route::delete('/course-sections/{id}', [\App\Http\Controllers\Admin\CourseSectionController::class, 'destroy']);
        
        // Subject routes
        Route::get('/subjects/stats', [SubjectController::class, 'stats']);
        Route::apiResource('subjects', SubjectController::class);
        
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
