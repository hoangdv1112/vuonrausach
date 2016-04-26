<?php

/**
 * Created by PhpStorm.
 * User: Hoang Dru
 * Date: 3/24/2016
 * Time: 10:49 PM
 */

namespace App\Modules\Helper;

use App\Modules\User\Models\User;
use DB;
use Dingo\Api\Http\Response;
use Dingo\Api\Routing\Helpers;
use Illuminate\Http\Request;
use Session;

class UserHelper extends Abstractor {

    use Helpers;

    /**
     * Find an User from id|unique_code
     * @param int|string $userID : id of user or unique_code
     * @return User
     */
    public function findUser($userID) {
	$user = User::find($userID);
	return $user;
    }

    /**
     * Find User form token
     * @return User
     */
    public function findFromToken() {
	$user = null;
	$token = \Request::header('Authorization');
	if ($token) {
	    $token = str_replace('Bearer', '', $token);
	    $token = trim($token);
	}
	if (!$token) {
	    $token = \Input::get('access_token');
	}

	if ($token) {
	    $row = UserToken::where('token', $token)->first();
	    if ($row) {
		$user = (isset($row->user->id) && !empty($row->user->id)) ? $row->user : null;
	    }
	}

	return $user;
    }

    /**
     * Conver User to Array
     * @param object $user
     * @return User
     */
    public function userToArray($user) {
	$user = (isset($user->id) && !empty($user->id)) ? $user : [];
	if (!empty($user)) {
	    $user = $this->userTransformer($user);
	    $user = $user->toArray();
	}
	return $user;
    }

}
