<?php

/**
 * Auth controller Api
 * @method login() login to system,
 * 
 * @author Hoang Dru
 */

namespace App\Modules\Auth\Controllers\Api;

use App\Modules\Controller;
use Dingo\Api\Routing\Helpers;
use App\Modules\User\Models\User;
use App\Modules\Helper\Facade\UserHelper;

class AuthController extends Controller {

    use Helpers;

    // Constructor
    public function __construct() {
	
    }

  /**
   * @POST('api/auth/login')
   * 
   * @param $params['email', 'password']
   */
    public function login() {
      $params = \Input::all();
      if (\Request::isMethod('post')) {
        $admin = User::where('name', '=', $params['name'])
                      ->where('password', '=', $params['password'])->get();
        if(count($admin) > 0){
          return \Response::make(array('msg' => 'User authenticated!', 'success' => true))
              ->header('Access-Control-Allow-Origin', '*')
              ->header('Access-Control-Allow-Credentials', 'true');
        }
      }

      return \Response::make(array('msg' => 'Incorrect user or password.', 'success' => false))
          ->header('Access-Control-Allow-Origin', '*')
          ->header('Access-Control-Allow-Credentials', 'true');
    }
    
    /**
     * @POST('api/auth/register)
     * 
     * @param $params['name', 'email', 'password']
     * 
     */
    public function register() {
	
    }
}
