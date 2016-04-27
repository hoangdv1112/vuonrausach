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
    $api->get('all-categories', 'App\Modules\Category\Controllers\Api\CategoryController@all');
    $api->get('categories', 'App\Modules\Category\Controllers\Api\CategoryController@index');
    $api->post('categories', 'App\Modules\Category\Controllers\Api\CategoryController@store');
    $api->put('categories/{id}', 'App\Modules\Category\Controllers\Api\CategoryController@update');
    $api->delete('categories/{id}', 'App\Modules\Category\Controllers\Api\CategoryController@destroy');
});
