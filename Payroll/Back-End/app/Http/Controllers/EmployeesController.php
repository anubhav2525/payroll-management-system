<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Employees;
use App\Models\EmployeesSalaryComponent;
use App\Models\Salary;
use App\Models\User;
use App\models\UserModel;

class EmployeesController extends Controller
{

    /**
     * this function is used to count the number of admin and employee for dashboard
     */
    public function index()
    {
        $admin = Employees::where('departmentId', '=', '01')->get()->count();
        $employee = Employees::where('departmentId', '!=', '01')->get()->count();
        return response()->json([
            'admin' => $admin,
            'employee' => $employee
        ]);
    }

    /**
     * This return the full detail and react responsible to select the speacfic record
     */
    public function display(Request $request)
    {
        $employeeId = trim($request->employeeId);
        return response()->json(Employees::where('employeeId', '=', $employeeId)->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request);
        // Validate Fathers Name
        // $validatorFatherName = Validator::make($request->only('fatherName'), [
        //     'fatherName' => 'required',
        // ]);
        // if ($validatorFatherName->fails()) {
        //     return response()->json(['error' => 'Please Check Fathers name ']);
        // }
        // // Validate designation
        // $validatorDesignation = Validator::make($request->only('designation'), [
        //     'designation' => 'required',
        // ]);
        // if ($validatorDesignation->fails()) {
        //     return response()->json(['error' => 'Please Check designation ']);
        // }
        // // Validate department
        // $validatorDepartment = Validator::make($request->only('department'), [
        //     'department' => 'required',
        // ]);
        // if ($validatorDepartment->fails()) {
        //     return response()->json(['error' => 'Please Check department ']);
        // }
        // // Validate Profile Picture
        // $validatorProfile = Validator::make($request->only('profilePicture'), [
        //     'profilePicture' => 'required',
        // ]);
        // if ($validatorProfile->fails()) {
        //     return response()->json(['error' => 'Please Check profile picture']);
        // }
        // // Validate Date of birth
        // $validatorDob = Validator::make($request->only('dob'), [
        //     'dob' => 'required',
        // ]);
        // if ($validatorDob->fails()) {
        //     return response()->json(['error' => 'Please Check Date of Birth']);
        // }
        // // Validate Gender
        // $Gender = Validator::make($request->only('gender'), [
        //     'gender' => 'required',
        // ]);
        // if ($Gender->fails()) {
        //     return response()->json(['error' => 'Please Check gender']);
        // }
        // // Validate qualification
        // $validatorqualification = Validator::make($request->only('qualification'), [
        //     'qualification' => 'required',
        // ]);
        // if ($validatorqualification->fails()) {
        //     return response()->json(['error' => 'Please Check qualification']);
        // }
        // // Validate contactNumber
        // $validatorcontactNumber = Validator::make($request->only('contactNumber'), [
        //     'contactNumber' => 'required ',
        // ]);
        // if ($validatorcontactNumber->fails()) {
        //     return response()->json(['error' => 'Please Check contact number']);
        // }
        // // Validate whatsappNumber
        // $validatorwhatsappNumber = Validator::make($request->only('whatsappNumber'), [
        //     'whatsappNumber' => 'required',
        // ]);
        // if ($validatorwhatsappNumber->fails()) {
        //     return response()->json(['error' => 'Please Check whatsapp number']);
        // }
        // // Validate alternateNumber
        // $validatoralternateNumber = Validator::make($request->only('alternateNumber'), [
        //     'alternateNumber' => 'required',
        // ]);
        // if ($validatoralternateNumber->fails()) {
        //     return response()->json(['error' => 'Please Check alternate number']);
        // }
        // // Validate Marital Status
        // $validatorMarital = Validator::make($request->only('marital'), [
        //     'marital' => 'required',
        // ]);
        // if ($validatorMarital->fails()) {
        //     return response()->json(['error' => 'Please Check marital status']);
        // }
        // // Validate blood
        // $validatorblood = Validator::make($request->only('blood'), [
        //     'blood' => 'required',
        // ]);
        // if ($validatorblood->fails()) {
        //     return response()->json(['error' => 'Please Check blood group']);
        // }
        // // Validate permanent address
        // $validatorpAddress = Validator::make($request->only('pAddress'), [
        //     'pAddress' => 'required',
        // ]);
        // if ($validatorpAddress->fails()) {
        //     return response()->json(['error' => 'Please Check Permanent Address']);
        // }
        // // Validate permanent city
        // $validatorpCity = Validator::make($request->only('pCity'), [
        //     'pCity' => 'required ',
        // ]);
        // if ($validatorpCity->fails()) {
        //     return response()->json(['error' => 'Please Check permanent city']);
        // }
        // // Validate permanent state
        // $validatorpState = Validator::make($request->only('pState'), [
        //     'pState' => 'required',
        // ]);
        // if ($validatorpState->fails()) {
        //     return response()->json(['error' => 'Please Check permanent State']);
        // }
        // // Validate permanent pincode
        // $validatorpincode = Validator::make($request->only('pPincode'), [
        //     'pPincode' => 'required|max:6',
        // ]);
        // if ($validatorpincode->fails()) {
        //     return response()->json(['error' => 'Please Check permanent Pincode']);
        // }
        // // Validate permanent country
        // $validatorpCountry = Validator::make($request->only('pCountry'), [
        //     'pCountry' => 'required',
        // ]);
        // if ($validatorpCountry->fails()) {
        //     return response()->json(['error' => 'Please Check permanent country']);
        // }
        // // Validate aadharNumber
        // $validatoraadharNumber = Validator::make($request->only('aadharNumber'), [
        //     'aadharNumber' => 'required',
        // ]);
        // if ($validatoraadharNumber->fails()) {
        //     return response()->json(['error' => 'Please Check aadhar number']);
        // }
        // // Validate pancardId
        // $validatorpancardId = Validator::make($request->only('pancardId'), [
        //     'pancardId' => 'required',
        // ]);
        // if ($validatorpancardId->fails()) {
        //     return response()->json(['error' => 'Please Check pancard number']);
        // }
        // // Validate bankName
        // $validatorbankName = Validator::make($request->only('bankName'), [
        //     'bankName' => 'required',
        // ]);
        // if ($validatorbankName->fails()) {
        //     return response()->json(['error' => 'Please Check bank name ']);
        // }
        // // Validate accountNumber
        // $validatoraccountNumber = Validator::make($request->only('accountNumber'), [
        //     'accountNumber' => 'required',
        // ]);
        // if ($validatoraccountNumber->fails()) {
        //     return response()->json(['error' => 'Please Check account number']);
        // }
        // // Validate ifscCode
        // $validatorifscCode = Validator::make($request->only('ifscCode'), [
        //     'ifscCode' => 'required',
        // ]);
        // if ($validatorifscCode->fails()) {
        //     return response()->json(['error' => 'Please Check IFSC Code']);
        // }
        // // Validate offerDate
        // $validatorofferDate = Validator::make($request->only('offerDate'), [
        //     'offerDate' => 'required',
        // ]);
        // if ($validatorofferDate->fails()) {
        //     return response()->json(['error' => 'Please Check offer date']);
        // }
        // // Validate joiningDate
        // $validatorjoiningDate = Validator::make($request->only('joiningDate'), [
        //     'joiningDate' => 'required',
        // ]);
        // if ($validatorjoiningDate->fails()) {
        //     return response()->json(['error' => 'Please Check joining date']);
        // }
        // // Validate employeeType
        // $validatoremployeeType = Validator::make($request->only('employeeType'), [
        //     'employeeType' => 'required',
        // ]);
        // if ($validatoremployeeType->fails()) {
        //     return response()->json(['error' => 'Please Check employee type']);
        // }
        // // Validate effectiveDay
        // $validatoreffectiveDay = Validator::make($request->only('effectiveDay'), [
        //     'effectiveDay' => 'required',
        // ]);
        // if ($validatoreffectiveDay->fails()) {
        //     return response()->json(['error' => 'Please Check effective day']);
        // }
        // // Validate salary
        // $validatorsalary = Validator::make($request->only('salary'), [
        //     'salary' => 'required',
        // ]);
        // if ($validatorsalary->fails()) {
        //     return response()->json(['error' => 'Please Check salary']);
        // }
        // // Validate basicSalary
        // $validatorbasicSalary = Validator::make($request->only('basicSalary'), [
        //     'basicSalary' => 'required ',
        // ]);
        // if ($validatorbasicSalary->fails()) {
        //     return response()->json(['error' => 'Please Check basic salary']);
        // }
        // // Validate hraAmount
        // $validatorhraAmount = Validator::make($request->only('hraAmount'), [
        //     'hraAmount' => 'required',
        // ]);
        // if ($validatorhraAmount->fails()) {
        //     return response()->json(['error' => 'Please Check HRA Amount']);
        // }
        // // Validate specialAllowance
        // $validatorspecialAllowance = Validator::make($request->only('specialAllowance'), [
        //     'specialAllowance' => 'required',
        // ]);
        // if ($validatorspecialAllowance->fails()) {
        //     return response()->json(['error' => 'Please Check special allowance ']);
        // }
        //Aadhar rename here    
        $aadharFile =  time() . rand(1000, 99999) . "-ST-aadhar." . $request->file('aadharFile')->getClientOriginalExtension();
        $request->file('aadharFile')->storeAs('public/aadhar', $aadharFile);
        //profile rename here
        $profilePicture = time() . rand(1000, 99999) . "-ST-profile." . $request->file('profilePicture')->getClientOriginalExtension();
        $request->file('profilePicture')->storeAs('public/profile', $profilePicture);
        //PANCARD RENAME HERE
        $pancardFile = time() . rand(1000, 99999) . "-ST-pancard." . $request->file('pancardFile')->getClientOriginalExtension();
        $request->file('pancardFile')->storeAs('public/pancard', $pancardFile);
        // //Insert query for employee details
        $insertEmployeeRecord = [
            "name" => trim($request->name),
            "fatherName" => trim($request->fatherName),
            "departmentId" => $request->department,
            "designation" => $request->designation,
            "profilePic" => $profilePicture,
            "dob" => $request->dob,
            "gender" => $request->gender,
            "qualification" => $request->qualification,
            "contactNo" => trim($request->contactNumber),
            "whatsappNo" => trim($request->whatsappNumber),
            "alternateNo" => trim($request->alternateNumber),
            "officeEmail" => $request->officeEmail,
            "personalEmail" => trim($request->personalEmail),
            "maritalStatus" => $request->marital,
            "blood" => $request->blood,
            "pAddress" => trim($request->pAddress),
            "pCity" => trim($request->pCity),
            "pState" => trim($request->pState),
            "pPincode" => trim($request->pPincode),
            "pCountry" => trim($request->pCountry),
            "cAddress" => trim($request->cAddress),
            "cCity" => trim($request->cCity),
            "cState" => trim($request->cState),
            "cPincode" => trim($request->cPincode),
            "cCountry" => trim($request->cCountry),
            "aadharNo" => trim($request->aadharNumber),
            "aadharFile" => $aadharFile,
            "pancardId" => trim($request->pancardId),
            "pancardFile" => $pancardFile,
            "uanNo" => trim($request->uanNumber),
            "bankName" => trim($request->bankName),
            "bankAccountNumber" => trim($request->accountNumber),
            "ifscCode" => trim($request->ifscCode),
            "offerDate" => trim($request->offerDate),
            "joiningDate" => trim($request->joiningDate),
            "createdBy" => trim($request->createdBy),
            "created_at" => now(),
            "updated_at" => now(),
        ];
        $success = DB::table('employees')->insert($insertEmployeeRecord);
        // This code is responsible for getting newly entered employee id which can proceed other activities
        $employeeData = Employees::where('officeEmail', '=', $request->officeEmail)
            ->select('employeeId')
            ->first();
        $employeeId = 0;
        if ($employeeData) {
            $employeeId = $employeeData->employeeId;
        }
        $insertrecord = [
            "employeeId" => $employeeId,
            "name" => $request->name,
            "empType" => $request->employeeType,
            "effectiveDay" => $request->effectiveDay,
            "salary" => trim($request->salary),
            "basic" => trim($request->basicSalary),
            "hra" => trim($request->hraAmount),
            "specialAllowance" => trim($request->specialAllowance),
            "createdBy" => $request->createdBy,
            "created_at" => now(),
            "updated_at" => now(),
        ];
        $success2 = DB::table('employees_salary_component')->insert($insertrecord);
        if ($success == 1 and $success2 == 1) {
            return response()->json(['message' => 'New record has been added']);
        } else {
            return response()->json(['error' => ' Not submit']);
        }
    }

    /**
     * This function displays all admin details with 01 department code
     */
    public function show()
    {
        return response()->json(Employees::where('departmentId', '=', '01')->get());
    }


    /**
     * This function displays all employees details code 02,03,04,05,06,07
     */
    public function employee()
    {
        return response()->json(Employees::where('departmentId', '!=', '01')->get());
    }
    /**
     * This function used to search the admin particular with 01 department code
     */
    public function search(Request $request)
    {
        $value = trim($request->employeeId);
        return response()->json(Employees::where('employeeId', '=', $value)->where('departmentId', '=', '01')->get());
    }
    /**
     * This function used to search the admin particular with 01 department code
     */
    public function searchemp(Request $request)
    {
        $value = trim($request->employeeId);
        return response()->json(Employees::where('employeeId', '=', $value)->get());
    }

    /**
     * Update the employees and employee salary component record
     */
    public function update(Request $request)
    {
        // $lastWorkingDate="null";
        // if($request->lastWorkingDate!=null){
        //     $lastWorkingDate=$request->lastWorkingDate;
        // }
        $updatequeryemployee = [
            "name" => trim($request->name),
            "fatherName" => trim($request->fatherName),
            "departmentId" => trim($request->departmentId),
            "designation" => trim($request->designation),
            "dob" => trim($request->dob),
            "gender" => trim($request->gender),
            "qualification" => trim($request->qualification),
            "contactNo" => trim($request->contactNo),
            "whatsappNo" => trim($request->whatsappNo),
            "alternateNo" => trim($request->alternateNo),
            "officeEmail" => trim($request->officeEmail),
            "personalEmail" => trim($request->personalEmail),
            "maritalStatus" => trim($request->maritalStatus),
            "blood" => trim($request->blood),
            "pAddress" => trim($request->pAddress),
            "pCity" => trim($request->pCity),
            "pState" => trim($request->pState),
            "pPincode" => trim($request->pPincode),
            "pCountry" => trim($request->pCountry),
            "cAddress" => trim($request->cAddress),
            "cCity" => trim($request->cCity),
            "cState" => trim($request->cState),
            "cPincode" => trim($request->cPincode),
            "cCountry" => trim($request->cCountry),
            "aadharNo" => trim($request->aadharNo),
            "pancardId" => trim($request->pancardId),
            "uanNo" => trim($request->uanNo),
            "bankName" => trim($request->bankName),
            "bankAccountNumber" => trim($request->bankAccountNumber),
            "ifscCode" => trim($request->ifscCode),
            "offerDate" => trim($request->offerDate),
            "joiningDate" => trim($request->joiningDate),
            "lastWorkingDate" => trim($request->lastWorkingDate),
            "modifiedBy" => trim($request->modifiedBy),
            "updated_at" => now(),
        ];
        $emp = DB::table('employees')
            ->where('employeeId', '=', $request->employeeId)
            ->update($updatequeryemployee);

        $updateSalary = [
            "name" => trim($request->name),
            "empType" => trim($request->empType),
            "effectiveDay" => trim($request->effectiveDay),
            "month" => trim($request->month),
            "salary" => trim($request->newSalary),
            "basic" => trim($request->basic),
            "hra" => trim($request->hra),
            "specialAllowance" => trim($request->specialAllowance),
            "percent" => trim($request->percentageIncrease),
            "oldsalary" => trim($request->salary),
            "modifiedBy" => trim($request->modifiedBy),
            "updated_at" => now(),
        ];
        $sal = DB::table('employees_salary_component')
            ->where('employeeId', '=', $request->employeeId)
            ->update($updateSalary);
        if ($emp == 1 and $sal == 1) {
            return response()->json(['message' => 'Record Update...', 'success' => true]);
        } else {
            return response()->json(['message' => 'Record not submit please check', 'success' => false]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $employeeId = trim($request->employeeId);
        $employeedetail = Employees::where('employeeId', '=', $employeeId)->get();
        $data = json_decode($employeedetail, true); // Decoding JSON into an associative array
        $email = $data[0]['officeEmail'];
        $success1 = Employees::where('employeeId', '=', $employeeId)->delete();
        $success2 = EmployeesSalaryComponent::where('employeeId', '=', $employeeId)->delete();
        $success3 = UserModel::where('officeEmail', '=', $email)->delete();
        if ($success1 == 1 and $success2 == 1 and $success3 == 1) {
            return response()->json([
                'success' => true,
                'message' => 'Record deleted',
            ]);
        }
        return response()->json([
            'success' => false,
            'message' => 'Record not found',
        ]);
    }


    /**
     * This function is responsible to search particular employee with 02,03,04,05,06,07 department code
     */
    public function searchEmployee(Request $request)
    {
        $value = trim($request->employeeId);
        return response()->json(Employees::where('employeeId', '=', $value)->where('departmentId', '!=', '01')->get());
    }

    public function employeedetail(Request $request)
    {
        $employeeId = trim($request->employeeId);
        return response()->json(Employees::where('employeeId', '=', $employeeId)->get());
    }

    public function updatebyemployee(Request $request)
    {
        $updatedata = [
            "name" => $request->name,
            "contactNo" => $request->contact,
            "personalEmail" => $request->email,
        ];
        $success1 = Employees::where('employeeId', '=', $request->employeeId)->update($updatedata);
        $success2 = Salary::where('employeeId', '=', $request->employeeId)->update(["name" => $request->name]);
        if ($success1 != 0 and $success2 != 0) {
            return response()->json([
                'success' => true,
                'message' => 'Record Updated',
            ]);
        }
        return response()->json([
            'success' => false,
            'message' => 'Record not found',
        ]);
    }
}
