<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use app\models\TermCondition;
// working and it is final
class TermConditionController extends Controller
{
    //this function show the terms and condition 
    public function index()
    {
        return response()->json(DB::table('term_conditions')->latest()->get()->first());
    }
    // this function store the desciption by super-admin
    public function store(Request $request)
    {
        $insertTermsCondition = [
            "description" => trim($request->description),
            "created_at" => now(),
            "updated_at" => now(),
        ];
        $success = DB::table('term_conditions')->insert($insertTermsCondition);
        // dd($success);
        if ($success) {
            return response()->json([
                'success' => true,
                'message' => 'The request has been updated',
                'response' => 'Submit'
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'The request has not been updated... server issue',
                'response' => 'Not submit'
            ]);
        }
    }
}
