<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\EmployeesSalaryComponent;
use App\Models\Employees;
use App\Models\Salary;
use Illuminate\Support\Facades\DB;

class AttendanceManager extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return response()->json(Employees::where('employeeId', '=', $request->employeeId)->get()); // this function returns the employee details for admin conformation
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $createdBy = $request->createdBy;
        $employeeId = $request->employeeId;
        $month = $request->month;
        $shiftname = $request->shiftname;
        $shifttiming = $request->shifttiming;
        $lop = $request->lop;
        $holiday = $request->holidays;
        $leave = $request->leave;
        $extra = $request->extra; // seen as OT
        $working = $request->Working;
        $sales = $request->sales;
        $totalworkingdays = $request->totalworkingdays;
        $component = EmployeesSalaryComponent::where('employeeId', '=', $employeeId)->get();
        $data = json_decode($component, true); // Decoding JSON into an associative array
        $basic = $data[0]['basic'];
        $employeeSalaryId = $data[0]['employeeSalaryId'];
        $empType = $data[0]['empType'];
        $salary = $data[0]['salary'];
        $hra = $data[0]['hra'];
        $specialAllowance = $data[0]['specialAllowance'];
        $employee = Employees::where('employeeId', '=', $employeeId)->get();
        $detail = json_decode($employee, true); // Decoding JSON into an associative array
        $name = $detail[0]['name'];
        $designation = $detail[0]['designation'];
        $bankAccountNumber = $detail[0]['bankAccountNumber'];
        $bankName = $detail[0]['bankName'];
        $pancardId = $detail[0]['pancardId'];
        $uanNo = $detail[0]['uanNo'];

        // return $working;
        $calculatedBasic = (($basic / $working) * $totalworkingdays);
        $pf = (($calculatedBasic * 12) / 100);//pf
        $calculatedhra = (($hra / $working) * $totalworkingdays);
        $calculatedspecialAllowance = (($specialAllowance / $working) * $totalworkingdays);
        $calculatedSalesBonus = ($sales * 100);
        $calculatedOt = (($salary / $working) * $extra);
        $calculatedGrossSalary = ($calculatedBasic + $calculatedhra + $calculatedSalesBonus + $calculatedspecialAllowance + $calculatedOt);
        $calculatenetsalary=($calculatedGrossSalary-$pf);
        // insert query for salary
        $insertRecord = [
            "employeeId" => $employeeId,
            "employeeSalaryId" => $employeeSalaryId,
            "name" => $name,
            "designation" => $designation,
            "bankName" => $bankName,
            "bankAccountNumber" => $bankAccountNumber,
            "pancardId" => $pancardId,
            "uanNo" => $uanNo,
            "month" => $month,
            "no_of_sales" => $sales,
            "extra" => $extra,
            "paid_leave" => $lop,
            "shiftName" => $shiftname,
            "shiftTime" => $shifttiming,
            "leave" => $leave,
            "holidays" => $holiday,
            "workingDays" => $working,
            "total_working_days" => $totalworkingdays,
            "lop" => $lop,
            "calculateBasic" => $calculatedBasic,
            "calculateHra" => $calculatedhra,
            "calculate_special_allowance" => $calculatedspecialAllowance,
            "calculate_sales_bonus" => $calculatedSalesBonus,
            "calculateOt" => $calculatedOt,
            "calculate_gross_salary" => $calculatedGrossSalary,
            "calculate_pf" => $pf,
            "calculatenetsalary"=>$calculatenetsalary,
            "createdBy" => $createdBy,
            "salary_slip_generated" => "yes",
            "created_at" => now(),
            "updated_at" => now(),
        ];
        $success = DB::table('salary')->insert($insertRecord);
        if (!empty($success)) {
            return response()->json(['message' => 'Record has been added go to view and check the record', 'success' => true,]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Request has not submit .. '
            ]);
        }
    }
    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        $employeeId = trim($request->employeeId);
        $month = trim($request->month);
        return response()->json(Salary::where('employeeId', '=', $employeeId)->where('month', '=', $month)->latest()->get());
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function search(Request $request)
    {
        return response()->json(Salary::where('employeeId', '=', $request->employeeId)->latest()->get());
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

    public function salary(Request $request)
    {
        return Salary::where('employeeId', '=', $request->employeeId)->latest()->get()->first();
    }
}
