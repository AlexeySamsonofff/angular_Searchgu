<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//     return view('welcome');
//});

// Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');

// Route::any('(:any)/(:all?)', function () {
// 	return view('searchFront.index');
// });

Route::get('/hukum/rss', 'ResController@hukum_rss');

Route::get('/hukum/cron', function (){
    $ret = Artisan::call('hukam:daily');
    return "cron run successfully";
});