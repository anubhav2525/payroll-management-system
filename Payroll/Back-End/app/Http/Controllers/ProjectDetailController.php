<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProjectDetail;
use Illuminate\Support\Facades\DB;

class ProjectDetailController extends Controller
{
    public function index(Request $request)
    {
        $completed = ProjectDetail::where('status', '=', 'Completed')->where('member', '=', $request->employeeId)->get()->count();
        $upcoming = ProjectDetail::where('status', '=', 'Upcoming')->where('member', '=', $request->employeeId)->get()->count();
        $ongoing = ProjectDetail::where('status', '=', 'Ongoing')->where('member', '=', $request->employeeId)->get()->count();
        $pending = ProjectDetail::where('status', '=', 'Pending')->where('member', '=', $request->employeeId)->get()->count();
        return response()->json([
            'completed' => $completed,
            'upcoming' => $upcoming,
            'ongoing' => $ongoing,
            'pending' => $pending,
        ]);
    }

    public function store(Request $request)
    {
        $insertRecord = [
            'projectCode' => $request->projectcode,
            'projectName' => $request->projectname,
            'status' => $request->status,
            'start' => $request->start,
            'end' => $request->end,
            'member' => $request->member,
            'description' => $request->description,
            'createdBy' => $request->createdBy,
            'created_at' => now(),
            'updated_at' => now(),

        ];
        $success = DB::table('project_details')->insert($insertRecord);
        if ($success == 1) {
            return response()->json(['message' => 'Project Added', 'success' => true]);
        }
    }

    public function show(Request $request)
    {
        $employeeId = trim($request->member);
        return response()->json(ProjectDetail::where('member', '=', $employeeId)->get());
    }

    public function projectdetails(Request $request)
    {
        // $employeeId=trim($request->member);
        return response()->json(ProjectDetail::latest()->get());
    }
    public function search(Request $request){
          $employeeId=trim($request->member);
          return response()->json(ProjectDetail::where('member','=',$employeeId)->latest()->get());
    }
    public function display(Request $request)
    {
        $projectcode = trim($request->projectCode);
        return response()->json(ProjectDetail::where('projectCode', '=', $projectcode)->latest()->get()->first());
    }


    public function update(Request $request)
    {
        $updateproject = [
            "projectName" => $request->projectname,
            "status" => $request->status,
            "start" => $request->start,
            "end" => $request->end,
            "description" => $request->description,
            "updatedBy" => $request->modifiedBy,
        ];
        $sal = DB::table('project_details')
            ->where('projectCode', '=', $request->projectcode)
            ->update($updateproject);
            // return $sal;
        if ($sal !=0 ) {
            return response()->json([
                'message' => 'Record Updated',
                'success' => true
            ]);
        }
       else if ($sal == 0 ) {
            return response()->json([
                'message' => 'Record not updated....',
                'success' => false
            ]);
        }
    }

    public function delete(Request $request){
        $success1 = ProjectDetail::where('member', '=', $request->employeeId)->delete();
        if($success1!=0){
            return response()->json([
                'message'=>'Record deleted ....',
                'success'=>true,
            ]);
        }
       else if($success1 ==0){
            return response()->json([
                'message'=>'Record not deleted ....',
                'success'=>false,
            ]);
        }
    }

    public function project(Request $request){
        return response()->json(ProjectDetail::where('member','=',$request->employeeId)->latest()->get());
    }
}
