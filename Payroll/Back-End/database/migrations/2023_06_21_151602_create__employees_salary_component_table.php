<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
    */
    public function up(): void
    {
        Schema::create('employees_salary_component', function (Blueprint $table) {
            $table->id('employeeSalaryId');
            $table->string('employeeId');
            $table->string('name');
            $table->enum('empType',['ESI','Other','PF','ESI + PF']);
            $table->string('effectiveDay');
            $table->string('month')->nullable();
            $table->decimal('salary', $precision = 10, $scale = 2)->nullable();
            $table->decimal('basic', $precision = 8, $scale = 2);
            $table->decimal('hra', $precision = 8, $scale = 2);
            $table->decimal('specialAllowance', $precision = 8, $scale = 2);
            $table->string('percent')->nullable();
            $table->decimal('oldsalary', $precision = 8, $scale = 2)->nullable();
            $table->string('createdBy')->nullable();
            $table->string('modifiedBy')->nullable();
            $table->timestamps();
        });
    }
//lop
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees_salary_component');
    }
};
