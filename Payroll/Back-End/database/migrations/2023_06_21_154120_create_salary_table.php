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
        Schema::create('salary', function (Blueprint $table) {
            $table->id('salaryId');
            $table->string('employeeId');
            $table->string('employeeSalaryId');
            $table->string('name');
            $table->string('designation');
            $table->string('bankName');
            $table->string('bankAccountNumber');
            $table->string('pancardId');
            $table->string('uanNo');
            $table->string('month');
            $table->string('no_of_sales',3);
            $table->string('extra',3);
            $table->decimal('paid_leave', $precision = 8, $scale = 2);
            $table->string('shiftName');
            $table->string('shiftTime');
            $table->string('leave');
            $table->string('holidays');
            $table->string('workingDays');
            $table->string('total_working_days',2);
            $table->decimal('lop', $precision = 10, $scale = 2);
            $table->decimal('calculateBasic', $precision = 10, $scale = 2);
            $table->decimal('calculateHra', $precision = 10, $scale = 2);
            $table->decimal('calculate_special_allowance', $precision = 10, $scale = 2);
            $table->decimal('calculate_sales_bonus', $precision = 10, $scale = 2);
            $table->decimal('calculateOt', $precision = 10, $scale = 2);
            $table->decimal('calculate_gross_salary', $precision = 10, $scale = 2);
            $table->decimal('calculate_pf', $precision = 10, $scale = 2);
            $table->decimal('calculatenetsalary', $precision = 10, $scale = 2);
            $table->string('createdBy')->nullable();
            $table->string('modifiedBy')->nullable();
            $table->enum('Salary_slip_generated',['yes','no']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('salary');
    }
};
