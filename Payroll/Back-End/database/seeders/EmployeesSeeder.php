<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Employees;
use Faker\Factory as Faker;

class EmployeesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker=Faker::create();
        for($i=1;$i<=100;$i++){
        $employee = new Employees;
        $employee->name = $faker->name;
        $employee->fathers_name  = $faker->name;
        $employee->department  = "ab";
        $employee->designation = "bhd";
        $employee->profile_pic = "001.jpg";
        $employee->dob=$faker->date;
        $employee->gender = "Male";
        $employee->qualification = "B.Tech";
        $employee->contact_no  = "1234567890";
        $employee->whatsapp_no = "1234567890";
        $employee->alternate_no ="1234567890";
        $employee->office_email = $faker->email;
        $employee->personal_email  = $faker->email;
        $employee->marital_status ="Single";
        $employee->blood ="AB";
        $employee->p_address =$faker->address;
        $employee->p_city = $faker->city;
        $employee->p_state="Bihar";
        $employee->p_pincode="842001";
        $employee->p_country=$faker->country;
        $employee->c_address=$faker->address;
        $employee->c_city= $faker->city;
        $employee->c_state =$faker->state;
        $employee->c_pincode="842001";
        $employee->c_country="New Zealand";
        $employee->aadhar_no ="9876543219876";
        $employee->aadhar_file ="00012.jpg";
        $employee->pancard_id ="9876543219876" ;
        $employee->pancard_file="9876543219876";
        $employee->uan_no="9876543219876";
        $employee->bank_name="canara";
        $employee->bank_account_number ="9876543219876";
        $employee->ifsc_code="hadh";
        $employee->offer_date = $faker->date;
        $employee->joining_date = $faker->date;
        $employee->last_working_date = $faker->date;
        $employee->created_by ="0001";
        $employee->username =$faker->userName;
        $employee->save();
        }
    }
}
