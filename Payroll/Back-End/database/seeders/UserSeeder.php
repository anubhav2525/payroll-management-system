<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\UserModel;
use Faker\Factory as Faker;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker=Faker::create();
        for($i=1;$i<=100;$i++){
        $user = new UserModel;
        $user->employeeName=$faker->name;
        $user->officeEmail=$faker->email;
        $user->password=md5($faker->password);
        $user->save();
        }
    }
}
