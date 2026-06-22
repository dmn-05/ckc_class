<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Lop;
use Illuminate\Http\Request;

class ClassController extends Controller
{
    public function index()
    {
        $classes = Lop::all();
        return response()->json($classes);
    }
}
