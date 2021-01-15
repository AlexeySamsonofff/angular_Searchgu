<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GgsS extends Model
{
    //
    protected $table = 'GGS-S';

    public function translation() {
        return $this->hasMany('App\GgsTa', 'scripture_id', 'id');
    }

    public function transliteration() {
        return $this->hasMany('App\GgsTi', 'scripture_id', 'id');
    }

    public function language() {
        return $this->belongsTo('App\GgsL', 'language_id', 'id');
    }
}
