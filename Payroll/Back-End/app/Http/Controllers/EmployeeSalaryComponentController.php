<?php

namespace App\Http\Controllers;

use App\Models\Employees;
use Illuminate\Http\Request;
use App\Models\EmployeesSalaryComponent;

class EmployeeSalaryComponentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $result = EmployeesSalaryComponent::where('employeeId','=',$request->employeeId)->get();
        $data = json_decode($result, true); // Decoding JSON into an associative array
        $salary = $data[0]['salary'];
        return response()->json($salary);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function search(Request $request)
    {
        $value=trim($request->employeeId);
        return response()->json(EmployeesSalaryComponent::where('employeeId','=',$value)->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        return response()->json(EmployeesSalaryComponent::where('employeeId','=',$request->employeeId)->get());
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
