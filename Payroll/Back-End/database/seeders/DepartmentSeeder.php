<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Department;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $dept1 = new Department;
        $dept1->department_id="01";
        $dept1->depart_name ="Admin";
        $dept1->depart_desc="";
        $dept1->save();
        $dept = new Department;
        $dept->department_id="02";
        $dept->depart_name ="Content Department";
        $dept->depart_desc="";
        $dept->save();
        $dept2 = new Department;
        $dept2->department_id="03";
        $dept2->depart_name ="Customer Support Department";
        $dept2->depart_desc="";
        $dept2->save();
        $dept3 = new Department;
        $dept3->department_id="04";
        $dept3->depart_name ="Designer Department";
        $dept3->depart_desc="";
        $dept3->save();
        $dept4 = new Department;
        $dept4->department_id="05";
        $dept4->depart_name ="SEO Department";
        $dept4->depart_desc="";
        $dept4->save();
        $dept5 = new Department;
        $dept5->department_id="06";
        $dept5->depart_name ="Social Media Department";
        $dept5->depart_desc="";
        $dept5->save();
        $dept6 = new Department;
        $dept6->department_id="07";
        $dept6->depart_name ="Software Development Department";
        $dept6->depart_desc="";
        $dept6->save();
    }
}
