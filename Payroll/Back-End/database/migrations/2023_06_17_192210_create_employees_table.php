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
        Schema::create('employees', function (Blueprint $table) {
            $table->id('employeeId');
            $table->string('name');
            $table->string('fatherName');
            $table->string('departmentId');
            $table->string('designation');
            $table->string('profilePic')->nullable();
            $table->string('dob');
            $table->enum('gender',['Male','Female']);
            $table->string('qualification');
            $table->string('contactNo');
            $table->string('whatsappNo');
            $table->string('alternateNo');
            $table->string('officeEmail');
            $table->string('personalEmail');
            $table->enum('maritalStatus',['Single','Married']);
            $table->string('blood',);
            $table->text('pAddress');
            $table->string('pCity');
            $table->string('pState');
            $table->string('pPincode',6);
            $table->string('pCountry');
            $table->text('cAddress')->nullable();
            $table->string('cCity')->nullable();
            $table->string('cState')->nullable();
            $table->string('cPincode',6)->nullable();
            $table->string('cCountry')->nullable();
            $table->string('aadharNo');
            $table->string('aadharFile')->nullable();
            $table->string('pancardId');
            $table->string('pancardFile')->nullable();
            $table->string('uanNo',20);
            $table->string('bankName');
            $table->string('bankAccountNumber',20);
            $table->string('ifscCode',20);
            $table->string('offerDate');
            $table->string('joiningDate');
            $table->string('lastWorkingDate')->nullable();
            $table->string('createdBy')->nullable();
            $table->string('modifiedBy')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::drop('employees');
    }
};
