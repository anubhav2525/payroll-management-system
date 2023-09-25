<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeesController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DepartmentController;
use app\Mail\ProfessionalEmail;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\ImageController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [EmployeesController::class, 'index']);
Route::post('/store', [EmployeesController::class, 'store']);
// Route::get('/userinfo',[UserController::class,'show']);
Route::get('/send-mail', [EmailController::class, 'sendProfessionalEmail']);
Route::get('upload', function () {
      return view('show');
});
Route::get('/show', function () {
      return view('show');
});
