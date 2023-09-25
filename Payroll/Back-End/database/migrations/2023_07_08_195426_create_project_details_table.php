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
        Schema::create('project_details', function (Blueprint $table) {
            $table->id('Srno');
            $table->string('projectCode');
            $table->string('projectName');
            $table->enum('status',['Completed','Pending','Upcoming','Ongoing']);
            $table->string('start');
            $table->string('end')->nullable();
            $table->string('member');
            $table->text('description');
            $table->text('createdBy');
            $table->text('updatedBy')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('project_details');
    }
};
