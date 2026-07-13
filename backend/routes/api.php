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


Route::get('/public/stats', [AuthController::class, 'publicStats']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/forgot-password/verify-email', [AuthController::class, 'verifyForgotEmail']);
Route::post('/forgot-password/verify-cccd', [AuthController::class, 'verifyForgotCccd']);
Route::post('/forgot-password/reset', [AuthController::class, 'resetForgotPassword']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/user/avatar', [AuthController::class, 'updateAvatar']);
    Route::post('/user/change-password', [AuthController::class, 'changePassword']);
    
    // Dashboard stats
    Route::get('/dashboard/stats', [DashboardController::class, 'stats']);

    // Admin Only Routes
    Route::middleware(\App\Http\Middleware\CheckRole::class.':1')->group(function () {
        // User routes (Create/Update/Delete)
        Route::post('/lecturers', [UserController::class, 'storeLecturer']);
        Route::put('/lecturers/{id}', [UserController::class, 'updateLecturer']);

        Route::get('/students', [UserController::class, 'getStudents']);
        Route::get('/students/{id}', [UserController::class, 'getStudentById']);
        Route::post('/students', [UserController::class, 'storeStudent']);
        Route::post('/students/import-json', [UserController::class, 'importStudentsJson']);
        Route::post('/students/batch', [UserController::class, 'importStudentsJson']);
        Route::put('/students/{id}', [UserController::class, 'updateStudent']);
        Route::delete('/students/{id}', [UserController::class, 'destroyStudent']);
        Route::post('/students/{id}/reset-password', [UserController::class, 'resetStudentPassword']);
        
        // Class routes
        Route::get('/classes', [ClassController::class, 'index']);
        Route::post('/classes', [ClassController::class, 'store']);
        Route::get('/classes/{id}', [ClassController::class, 'show']);
        Route::put('/classes/{id}', [ClassController::class, 'update']);
        Route::delete('/classes/{id}', [ClassController::class, 'destroy']);
        Route::get('/classes/{id}/students', [ClassController::class, 'getStudents']);
        Route::post('/classes/{id}/students', [ClassController::class, 'addStudent']);
        Route::delete('/classes/{id}/students/{studentId}', [ClassController::class, 'removeStudent']);
        
        // Course Section routes
        Route::get('/course-sections', [\App\Http\Controllers\Admin\CourseSectionController::class, 'index']);
        Route::post('/course-sections', [\App\Http\Controllers\Admin\CourseSectionController::class, 'store']);
        Route::get('/course-sections/{id}', [\App\Http\Controllers\Admin\CourseSectionController::class, 'show']);
        Route::put('/course-sections/{id}', [\App\Http\Controllers\Admin\CourseSectionController::class, 'update']);
        Route::patch('/course-sections/{id}/status', [\App\Http\Controllers\Admin\CourseSectionController::class, 'updateStatus']);
        Route::delete('/course-sections/{id}', [\App\Http\Controllers\Admin\CourseSectionController::class, 'destroy']);
        
        // Subject routes (Create/Update/Delete)
        Route::get('/subjects/stats', [SubjectController::class, 'stats']);
        Route::apiResource('subjects', SubjectController::class)->except(['index', 'show']);
        
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
    
    // Lecturer Only Routes
    Route::middleware(\App\Http\Middleware\CheckRole::class.':2')->group(function () {
        Route::get('/lecturer/course-sections', [\App\Http\Controllers\Lecturer\CourseSectionController::class, 'index']);
        Route::post('/lecturer/course-sections', [\App\Http\Controllers\Lecturer\CourseSectionController::class, 'store']);
        Route::get('/lecturer/course-sections/{id}', [\App\Http\Controllers\Lecturer\CourseSectionController::class, 'show']);
        Route::put('/lecturer/course-sections/{id}', [\App\Http\Controllers\Lecturer\CourseSectionController::class, 'update']);

        // Resource management by lecturer
        Route::get('/lecturer/resources', [\App\Http\Controllers\Lecturer\ResourceController::class, 'index']);
        Route::post('/lecturer/resources', [\App\Http\Controllers\Lecturer\ResourceController::class, 'store']);
        Route::get('/lecturer/resources/{id}', [\App\Http\Controllers\Lecturer\ResourceController::class, 'show']);
        Route::put('/lecturer/resources/{id}', [\App\Http\Controllers\Lecturer\ResourceController::class, 'update']);
        Route::delete('/lecturer/resources/{id}', [\App\Http\Controllers\Lecturer\ResourceController::class, 'destroy']);
        Route::patch('/lecturer/resources/{id}/toggle-visibility', [\App\Http\Controllers\Lecturer\ResourceController::class, 'toggleVisibility']);
        // Assignment management by lecturer
        Route::get('/lecturer/assignments', [\App\Http\Controllers\Lecturer\AssignmentController::class, 'index']);
        Route::get('/lecturer/assignments/scores-report', [\App\Http\Controllers\Lecturer\AssignmentController::class, 'scoresReport']);
        Route::post('/lecturer/assignments', [\App\Http\Controllers\Lecturer\AssignmentController::class, 'store']);
        Route::get('/lecturer/assignments/{id}', [\App\Http\Controllers\Lecturer\AssignmentController::class, 'show']);
        Route::get('/lecturer/assignments/{id}/submissions', [\App\Http\Controllers\Lecturer\AssignmentController::class, 'submissions']);
        Route::post('/lecturer/assignments/{id}/submissions/return', [\App\Http\Controllers\Lecturer\AssignmentController::class, 'returnSubmissions']);
        Route::post('/lecturer/assignments/{id}/submissions/{submissionId}/grade', [\App\Http\Controllers\Lecturer\AssignmentController::class, 'gradeSubmission']);
        Route::put('/lecturer/assignments/{id}', [\App\Http\Controllers\Lecturer\AssignmentController::class, 'update']);
        Route::post('/lecturer/assignments/{id}', [\App\Http\Controllers\Lecturer\AssignmentController::class, 'update']); // FormData fallback
        Route::delete('/lecturer/assignments/{id}', [\App\Http\Controllers\Lecturer\AssignmentController::class, 'destroy']);
        // Exam management by lecturer
        Route::get('/lecturer/exams', [\App\Http\Controllers\Lecturer\ExamController::class, 'index']);
        Route::post('/lecturer/exams', [\App\Http\Controllers\Lecturer\ExamController::class, 'store']);
        Route::get('/lecturer/exams/{id}', [\App\Http\Controllers\Lecturer\ExamController::class, 'show']);
        Route::put('/lecturer/exams/{id}', [\App\Http\Controllers\Lecturer\ExamController::class, 'update']);
        Route::delete('/lecturer/exams/{id}', [\App\Http\Controllers\Lecturer\ExamController::class, 'destroy']);
        // Question management by lecturer
        Route::get('/lecturer/exams/{examId}/questions', [\App\Http\Controllers\Lecturer\QuestionController::class, 'index']);
        Route::post('/lecturer/exams/{examId}/questions', [\App\Http\Controllers\Lecturer\QuestionController::class, 'store']);
        Route::get('/lecturer/exams/{examId}/questions/{questionId}', [\App\Http\Controllers\Lecturer\QuestionController::class, 'show']);
        Route::put('/lecturer/exams/{examId}/questions/{questionId}', [\App\Http\Controllers\Lecturer\QuestionController::class, 'update']);
        Route::delete('/lecturer/exams/{examId}/questions/{questionId}', [\App\Http\Controllers\Lecturer\QuestionController::class, 'destroy']);
        Route::put('/lecturer/exams/{examId}/questions/reorder', [\App\Http\Controllers\Lecturer\QuestionController::class, 'reorder']);
    });

    // Student Only Routes
    Route::middleware(\App\Http\Middleware\CheckRole::class.':3')->group(function () {
    });


    // Common Authenticated Routes
    Route::get('/lecturers', [UserController::class, 'getLecturers']);
    Route::get('/lecturers/{id}', [UserController::class, 'getLecturerById']);
    Route::get('/subjects', [SubjectController::class, 'index']);
    Route::get('/subjects/{id}', [SubjectController::class, 'show']);

    // Shared Comment Routes
    Route::post('/comments', [\App\Http\Controllers\CommentController::class, 'store']);
    Route::put('/comments/{id}', [\App\Http\Controllers\CommentController::class, 'update']);
    Route::delete('/comments/{id}', [\App\Http\Controllers\CommentController::class, 'destroy']);

    // Shared Notification Routes
    Route::get('/notifications', [\App\Http\Controllers\NotificationController::class, 'index']);
    Route::post('/notifications/{id}/read', [\App\Http\Controllers\NotificationController::class, 'markAsRead']);
    Route::post('/notifications/read-all', [\App\Http\Controllers\NotificationController::class, 'markAllAsRead']);

    // Profile Routes
    Route::get('/student/profile', [App\Http\Controllers\Student\StudentProfileController::class, 'show']);
    Route::put('/student/profile', [App\Http\Controllers\Student\StudentProfileController::class, 'update']);
    Route::get('/lecturer/profile', [App\Http\Controllers\Lecturer\LecturerProfileController::class, 'show']);
    Route::put('/lecturer/profile', [App\Http\Controllers\Lecturer\LecturerProfileController::class, 'update']);
    Route::get('/lecturer/dashboard/stats', [\App\Http\Controllers\Lecturer\DashboardController::class, 'stats']);
    Route::get('/admin/profile', [App\Http\Controllers\Admin\AdminProfileController::class, 'show']);
    Route::put('/admin/profile', [App\Http\Controllers\Admin\AdminProfileController::class, 'update']);

    // Post Routes
    Route::get('/student/posts', [\App\Http\Controllers\Student\PostController::class, 'index']);
    Route::get('/student/posts/{id}', [\App\Http\Controllers\Student\PostController::class, 'show']);
    Route::post('/student/posts', [\App\Http\Controllers\Student\PostController::class, 'store']);
    Route::get('/student/sections', [\App\Http\Controllers\Student\StudentSectionController::class, 'index']);
    Route::get('/student/sections/{id}', [\App\Http\Controllers\Student\StudentSectionController::class, 'show']);
    Route::get('/student/quizzes', [\App\Http\Controllers\Student\StudentQuizController::class, 'index']);
    Route::get('/student/quizzes/{id}', [\App\Http\Controllers\Student\StudentQuizController::class, 'show']);
    Route::post('/student/quizzes/{id}/submit', [\App\Http\Controllers\Student\StudentQuizController::class, 'submit']);
    Route::get('/student/quizzes/{id}/result', [\App\Http\Controllers\Student\StudentQuizController::class, 'result']);
    Route::get('/student/assignments', [\App\Http\Controllers\Student\StudentAssignmentController::class, 'index']);
    Route::get('/student/assignments/{id}', [\App\Http\Controllers\Student\StudentAssignmentController::class, 'show']);
    Route::post('/student/assignments/{id}/submit', [\App\Http\Controllers\Student\StudentAssignmentController::class, 'submit']);

    Route::get('lecturer/exams/{id}/results', [\App\Http\Controllers\Lecturer\ExamController::class, 'getResults']);
    Route::post('lecturer/exams/{id}/results/{attemptId}/grade', [\App\Http\Controllers\Lecturer\ExamController::class, 'gradeEssay']);
    Route::apiResource('lecturer/exams', \App\Http\Controllers\Lecturer\ExamController::class);
    Route::apiResource('lecturer/posts', \App\Http\Controllers\Lecturer\PostController::class);

    // Student Management by lecturer
    Route::get('/lecturer/students/search', [\App\Http\Controllers\Lecturer\StudentListController::class, 'search']);
    Route::get('/lecturer/course-sections/{sectionId}/students', [\App\Http\Controllers\Lecturer\StudentListController::class, 'index']);
    Route::get('/lecturer/classes', [\App\Http\Controllers\Admin\ClassController::class, 'index']);
    Route::post('/lecturer/course-sections/{sectionId}/students', [\App\Http\Controllers\Lecturer\StudentListController::class, 'store']);
    Route::delete('/lecturer/course-sections/{sectionId}/students/{studentId}', [\App\Http\Controllers\Lecturer\StudentListController::class, 'destroy']);
});


Route::get('/schema-bai-viet', function() {
    $columns = \Illuminate\Support\Facades\DB::select('SHOW COLUMNS FROM bai_viet');
    return response()->json($columns);
});

Route::get('/add-luot-xem', function() {
    try {
        \Illuminate\Support\Facades\DB::statement('ALTER TABLE bai_viet ADD COLUMN luot_xem INT DEFAULT 0');
        return 'Added';
    } catch (\Exception $e) {
        return 'Already exists or error: ' . $e->getMessage();
    }
});

Route::get('/dump-users', function() {
    return response()->json(\App\Models\NguoiDung::all());
});

Route::get('/fix-hoc-ky', function() {
    try {
        \Illuminate\Support\Facades\DB::statement("ALTER TABLE lop_hoc_phan MODIFY hoc_ky ENUM('HK1', 'HK2', 'HK3', 'HK4', 'HK5', 'HK6') NOT NULL DEFAULT 'HK1'");
        return 'Updated hoc_ky successfully';
    } catch (\Exception $e) {
        return 'Error: ' . $e->getMessage();
    }
});


