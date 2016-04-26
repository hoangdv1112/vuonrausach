<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
 */

$api = app('Dingo\Api\Routing\Router');
$api->version('v1', function ($api) {
    $api->post('auth/login', 'App\Modules\Auth\Controllers\Api\AuthController@login');
    $api->post('auth/register', 'App\Modules\Auth\Controllers\Api\AuthController@register');
});