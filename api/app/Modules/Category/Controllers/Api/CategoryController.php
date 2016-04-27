<?php

/**
 * Created by PhpStorm.
 * User: Hoang Dru
 * Date: 3/24/2016
 * Time: 10:49 PM
 */

namespace App\Modules\Category\Controllers\Api;

use App\Modules\Controller;
use Dingo\Api\Routing\Helpers;
use App\Modules\Category\Transformers\CategoryTransformer;
use App\Modules\Category\Models\Category;
use App\Modules\Article\Models\Article;
use App\Modules\Helper\Facade\UserHelper;

class CategoryController extends Controller {

    use Helpers;

    // Constructor
    public function __construct() {
	
    }

    /**
     * Get list categories
     *
     * @return Response paginated categories
     */
    public function all() {
    $response = Category::all();

    return $this->response->array(['data' => $response], new CategoryTransformer)
        ->withHeader('Access-Control-Allow-Origin', '*')
        ->withHeader('Access-Control-Allow-Credentials', 'true');
    }

    /**
     * Get list categories
     *
     * @return Response paginated categories
     */
    public function index() {
	$params = \Input::all();
	$page = isset($params['page']) ? (integer) $params['page'] : 0;
	$limit = isset($params['limit']) ? (integer) $params['limit'] : 30;

    $response = Category::paginate($limit);
	// $response = Category::with('products')->paginate($limit);

	return $this->response->paginator($response, new CategoryTransformer)
		->withHeader('Access-Control-Allow-Origin', '*')
		->withHeader('Access-Control-Allow-Credentials', 'true');
    }

	/**
	 * Store the Category
	 *
	 * @POST('api/categories)
	 *
	 * @param array $params
	 *
	 * @return response
	*/
	public function store() {
		$params = \Input::all();
		// Validator
		if (empty($params['name']) || ($params['name'] == '')) {
            $error['name'][] = 'Field name required';
        }
        if (!empty($error))
            return $this->response->array([
                'message' =>'Could not validate!',
                'errors' =>  $error,
                'code' => '422',
                'status_code' => '422',
            ], 422)
				->withHeader('Access-Control-Allow-Origin', '*')
				->withHeader('Access-Control-Allow-Credentials', 'true');
        
        // create category
        $user = UserHelper::findUser($params['user_id']);
        $category = $this->save($params, new Category(), $user);
        return $this->response->array([
                "message" => "Created!",
                "errors" =>  "Create the category successfully.",
                "code" => 201,
                "status_code" => 201,
                "data" => $category->toArray()
            ], 201)
			->withHeader('Access-Control-Allow-Origin', '*')
			->withHeader('Access-Control-Allow-Credentials', 'true');
	}

	/**
	 * Store the Category
	 *
	 * @PUT('api/categories/{id})
	 *
	 * @param array $params
	 *
	 * @return response
	*/
	public function update($id) {


		$params = \Input::all();
		// Validator
		if (empty($params['name']) || ($params['name'] == '')) {
            $error['name'][] = 'Field name required';
        }
        if (!empty($error))
            return $this->response->array([
                'message' =>'Could not validate!',
                'errors' =>  $error,
                'code' => '422',
                'status_code' => '422',
            ], 422)
				->withHeader('Access-Control-Allow-Origin', '*')
				->withHeader('Access-Control-Allow-Credentials', 'true');
        
        // create category
        $user = UserHelper::findUser($params['user_id']);
        $category = Category::find($id);
        if (!$category)
        	return $this->response->array([
                "message" => "Not found!",
                "errors" =>  "The category could not found.",
                "code" => 404,
                "status_code" => 404,
            ], 404)
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Credentials', 'true');

        $category = $this->save($params, $category, $user);
        return $this->response->array([
                "message" => "Updated!",
                "errors" =>  "Update the category successfully.",
                "code" => 201,
                "status_code" => 201,
                "data" => $category->toArray()
            ], 201)
			->withHeader('Access-Control-Allow-Origin', '*')
			->withHeader('Access-Control-Allow-Credentials', 'true');
	}

	/**
     * protected save data to DB
     *
     * @param array $params ['name', 'parent_id', 'description', 'status'],
     * object $user
     *
     * @return object $category
     */
    protected function save($params, $category, $user)
    {
        $name = isset($params['name']) ? $params['name'] : null;
        $description = isset($params['description']) ? $params['description'] : null;
        $status = isset($params['status']) ? $params['status'] : null;

        $category->user()->associate($user);
        $category->name = $name;
        $category->description = $description;
        $category->status = $status;
        $category->save();
        return $category;
    }

    /**
	 * Delete the Category
	 *
	 * @DELETE('api/categories/{id})
	 *
	 * @param $id
	 *
	 * @return response
	*/
	public function destroy($id) {
		$category = Category::find($id);
		if (!$category)
			return $this->response->array([
            "message" => "Not found!",
            "errors" =>  "The category could not found.",
            "code" => 404,
            "status_code" => 404,
        ], 404);

		$category->products()->delete();
		$result = $category->delete();

		return $this->response->array([
				'message' => "Deleted!",
				'errors' => $result ? 'Delete the category successfully.' : 'Delete the category failure.',
				'code' => 200,
				'status_code' => 200,
		], 200)
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Credentials', 'true');
	}

}
