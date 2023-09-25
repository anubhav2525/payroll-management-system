<?php

use App\Http\Controllers\EmployeesController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AttendanceManager;
use App\http\Controllers\EmployeeSalaryComponentController;
use App\Http\Controllers\TermConditionController;
use App\http\Controllers\ProjectDetailController;

// login system for all
Route::post('/login', [UserController::class, 'index']);// this route is used to validate a user at login time from user table
Route::post('/forget',[UserController::class,'edit']); //this route verify the mail and then forget the user account
Route::post('/reset',[UserController::class,'update']); //this route verify the mail and then forget the user account

// dashboard after login
Route::post('/logged',[EmployeesController::class,'display']);// returns the logged user details
Route::post('/employees-count',[EmployeesController::class,'index']);// working this is used to check the no of employess and admin
Route::post('/project-status',[ProjectDetailController::class,'index']);// returns the project status of dynamic user
Route::post('/project-detail',[ProjectDetailController::class,'projectdetails']);// this return the full detail of project
Route::post('/project-search',[ProjectDetailController::class,'search']);// this return the full detail of project
// Route::get('/employee-detail',[EmployeesController::class,'display']);// this returns the employee details

// Admin routes for super-admin and admin
Route::post('/store-basic-details-admin', [UserController::class, 'store']); // this function store the basic detail of admin
Route::post('/store-admin', [EmployeesController::class, 'store']); // this stoer the data data of admin page
Route::get('/show-all-admin', [EmployeesController::class, 'show']); // this route fetch all the details of admin
Route::post('/search-admin',[EmployeesController::class,'search']);// this route is used to search admin by id
Route::post('/update-admin',[EmployeesController::class,'search']); // this route is responsible for edit admin details by super-admin
Route::post('/update-admin-data',[EmployeesController::class,'update']);//update query
Route::post('/delete-admin',[EmployeesController::class,'destroy']);//detele admin

//Employee routes for super-admin and admin
Route::post('/store-basic-details-employee', [UserController::class, 'store']); // this function store the basic detail of employee
Route::post('/store-employee', [EmployeesController::class, 'store']); // this stoer the data data of employee page
Route::get('/show-all-employee', [EmployeesController::class, 'employee']); // this route fetch all the details of employee
Route::post('/search-employee',[EmployeesController::class,'searchEmployee']);// this route is used to search employee by id
Route::post('/delete-employee',[EmployeesController::class,'destroy']);//detele employee
Route::post('/update-data-employee',[EmployeesController::class,'searchemp']); // this route is responsible for edit admin details by super-admin

// Terms and conditions
Route::post('/terms-condition',[TermConditionController::class,'store']); // this route is used for super admin to upload the terms and condition
Route::get('/terms-condition-show',[TermConditionController::class,'index']); //this route is used for admin and employees to see the terms and condition

// salary management
Route::post('/show-salary',[EmployeeSalaryComponentController::class,'show']);
Route::post('/update-salary',[EmployeeSalaryComponentController::class,'search']);//this route returns the detail of salary for update

//attendance
Route::post('/attendance',[AttendanceManager::class,'store']);
Route::post('/view-attendance',[AttendanceManager::class,'show']);
Route::post('/employee-detail',[EmployeesController::class,'employeedetail']);
Route::post('/acceptRecord',[AttendanceManager::class,'index']);
Route::post('/attendance-search',[AttendanceManager::class,'search']);
//project
Route::post('/project-add',[ProjectDetailController::class,'store']);// add a new project
Route::post('/project-update',[ProjectDetailController::class,'update']);// update project
Route::post('/project-display',[ProjectDetailController::class,'display']);// search a project 
Route::post('/project-delete',[ProjectDetailController::class,'delete']);//delete project by member id

//Letters
Route::post('/relievingletter',[EmployeesController::class,'searchemp']);
Route::post('/salary-find',[EmployeeSalaryComponentController::class,'index']);


// Employee
Route::post('/attendance-record',[AttendanceManager::class,'salary']);// salary detail dashboard
Route::post('/logged',[EmployeesController::class,'display']);// returns the logged user details
Route::post('/project-detail-employee',[ProjectDetailController::class,'project']);// show project by employee id enrolled
Route::post('/update-employee-data',[EmployeesController::class,'updatebyemployee']);