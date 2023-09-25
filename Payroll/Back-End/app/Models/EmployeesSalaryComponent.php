<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmployeesSalaryComponent extends Model
{
    use HasFactory;
    protected $table="employees_salary_component";
    protected $primarykey="employeeSalaryId";
}
