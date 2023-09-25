<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ProjectDetail;
use Faker\Factory as Faker;
class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker=Faker::create();
        for($i=1;$i<=10;$i++){
        $user = new ProjectDetail;
        $user->projectCode="1";
        $user->projectName="sjdnkdsjfdsc";
        $user->status="Completed";
        $user->start=$faker->date();
        $user->member="1";
        $user->end=$faker->date();
        $user->description= "jdbvhuefvyervb";
        $user->createdBy= "2";

        $user->save();
    }
}
}
