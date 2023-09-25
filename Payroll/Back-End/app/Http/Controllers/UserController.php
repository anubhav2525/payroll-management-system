<?php

namespace App\Http\Controllers;

use App\Models\Employees;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\UserModel;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use app\models\ForgetPassword;

class UserController extends Controller
{
    /**
     * This function is used to check the user data at login time from users table.
     */
    public function index(Request $request)
    {
        // store the values into these variables
        $email = trim($request->email);
        $enteredPassword = md5(trim($request->password));
        $result = UserModel::where('officeEmail', '=', $email)->get(); //query to check the data if email match 
        // return $result;
        if ($result->isEmpty()) {
            return response()->json(['message' => 'Email not found', 'success' => false]);
        }
        //enters if mail id matched
        $data = json_decode($result, true); // Decoding JSON into an associative array
        $hashedPassword = $data[0]['password'];
        // return $hashedPassword if true
        if ($hashedPassword === $enteredPassword) {
            $component = Employees::where('officeEmail', '=', $email)->get();
            $data = json_decode($component, true); // Decoding JSON into an associative array
            $employeeId = $data[0]['employeeId'];
            return response()->json(['employeeId' => $employeeId, 'success' => true, 'message' => 'User has been logged']); // user active
        } else
            return response()->json(['message' => 'Password does not match', 'success' => false]); //password wrong
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        //
    }


    public function display(Request $request)
    {
        //  
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate data
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required',
            'password' => 'required',
        ]);

        // Check if validation fails
        if ($validator->fails()) {
            return response()->json(['message' => 'Please check the information..........', 'success' => false]); // Handle the validation failure
        } else {
            //Insert Query for user registration 
            $user = new UserModel;
            $user->employeeName = $request['name'];
            $user->officeEmail = $request['email'];
            $user->password = md5($request['password']);
            // $user->createdBy = $request['createdBy'];
            $user->save();
            return response()->json(['message' => 'User account has been created...', 'success' => true]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        //
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request)
    {
        $email = trim($request->email);
        $result = UserModel::where('officeEmail', '=', $email)->get();
    
        if ($result->isEmpty()) {
            return response()->json(['message' => 'Incorrect email please enter correct email', 'success' => false]);
        }
        $token = rand(10000000, 99999999); // generate 8 digit password
        $insertQuery = [
            "email" => $email,
            "rememberToken" => $token,
            "created_at" => now(),
            "updated_at" => now(),
        ];
        $success = DB::table('forget_password')->insert($insertQuery);
        if ($success) {
            // mail code write here
            return response()->json(['message' => 'Please check your email an OTP has been sent', 'success' => true]);
        } else {
            return response()->json(['message' => 'Server Error', 'success' => false]);
        }
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $email = trim($request->email);
        $token = trim($request->token);
        $password = trim($request->password);
        $conformPassword = trim($request->confirmpassword);
        $result = $conformPassword === $password;
        if ($result != 1) {
            return response()->json(["message" => 'Password should be match', 'success' => false]);
        }
        $data = DB::table('forget_password')->where('email', '=', $email)->latest()->get()->first(); // store the details from database
        $otp = $data->rememberToken;// store the otp from db

        $isCorrect = $otp == $token;
        if ($isCorrect == 1) {
            //update query for users table
            $updateQuery = [
                "officeEmail" => $email,
                "password" => md5($password),
                "updated_at" => now(),
            ];
            $success = DB::table('users')->where('officeEmail', '=', $email)->update($updateQuery);
            if ($success == 1) {
                return response()->json([
                    'message' => 'Your user password has benn updated please try to login again',
                    'success' => true,
                ]);
            }
        } else {
            return response()->json([
                'message' => 'Wrong OTP',
                'success' => false,
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
