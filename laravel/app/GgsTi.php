<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GgsTi extends Model
{
    //
    protected $table = 'GGS-TI';

    public function language() {
        return $this->belongsTo('App\GgsL', 'language_id', 'id');
    }
}
