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
    $api->get('products', 'App\Modules\Product\Controllers\Api\ProductController@index');
    $api->get('products/{id}', 'App\Modules\Product\Controllers\Api\ProductController@show');
    $api->post('products', 'App\Modules\Product\Controllers\Api\ProductController@store');
    $api->put('Product/products/{id}', 'App\Modules\Product\Controllers\Api\ProductController@update');
    $api->delete('Product/products/{id}', 'App\Modules\Product\Controllers\Api\ProductController@destroy');
});
