<?php

/**
 * Created by PhpStorm.
 * User: Hoang Dru
 * Date: 3/24/2016
 * Time: 10:49 PM
 */

namespace App\Modules\Menu\Controllers\Api;

use App\Modules\Controller;
use Dingo\Api\Routing\Helpers;
use App\Modules\Menu\Models\Menu;

class MenuController extends Controller {

    use Helpers;

    // Constructor
    public function __construct() {
	
    }

    /**
     * Get list categories
     *
     * @return Response paginated categories
     */
    public function index() {
	$response = Menu::where('parent_id', 0)->with('user', 'childrens')
		->get();
	return $this->response->array($response->toArray())
		->withHeader('Access-Control-Allow-Origin', '*')
		->withHeader('Access-Control-Allow-Credentials', 'true');
    }
}
