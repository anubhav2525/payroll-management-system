<?php
namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ProfessionalEmail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct()
    {
        //
    }

    public function build()
    {
        return $this->subject('Professional Email')
                    ->to('anbhavranjan2222@gmail.com')
                    ->with([
                        'data' => 'Some data to include in the email',
                    ]);
    }
}
