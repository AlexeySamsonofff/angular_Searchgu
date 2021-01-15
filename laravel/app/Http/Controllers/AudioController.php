<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AudioController extends Controller
{
    public function __construct()
    {

    }

    public function download(Request $request) {
        $path = $request->get('path');
        $filename = storage_path('audio/'.$path.'.mp3');
        if(file_exists($filename)){
            $handle = fopen($filename, "r");
            $contents = fread($handle, filesize($filename));
            fclose($handle);
            $contents = base64_encode($contents);
            return ['data'=>$contents, 'status'=>true];
        }else{
            return ['status'=>false];
        }
    }
}
