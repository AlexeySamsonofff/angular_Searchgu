<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GgsTa extends Model
{
    //
    protected $table = 'GGS-TA';

    public function language() {
        return $this->belongsTo('App\GgsL', 'language_id', 'id');
    }
}
