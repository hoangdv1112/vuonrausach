<?php

namespace App\Modules\Product\Controllers\Api;

use App\Modules\Controller;
use Dingo\Api\Routing\Helpers;
use App\Modules\Product\Transformers\ProductTransformer;
use App\Modules\Product\Models\Product;
use App\Modules\Category\Models\Category;
use App\Modules\Helper\Facade\UserHelper;

class ProductController extends Controller
{

    use Helpers;

    // Constructor
    public function __construct()
    {

    }

    /**
     * Get list products
     * @GET('api/products')
     *
     * @param array $params ['page', 'limit']
     *
     * @return Response paginated products
     */
    public function index()
    {
        $params = \Input::all();
        $page = isset($params['page']) ? (integer)$params['page'] : 0;
        $limit = isset($params['limit']) ? (integer)$params['limit'] : 30;

        $response = Product::with('user', 'category');
        if (isset($params['category_id'])) {
            $category_id = $params['category_id'];
            $response = $response->where('category_id', $category_id)
				->where('status', 0);
        }
        $response = $response->paginate($limit);

        return $this->response->paginator($response, new ProductTransformer)
		->withHeader('Access-Control-Allow-Origin', '*')
		->withHeader('Access-Control-Allow-Credentials', 'true');
    }

    /**
     * Get a product
     * @GET('api/products/{id}')
     *
     * @params $id
     *
     * @return Response item
     */

    public function show($id)
    {
        $response = Product::with('user', 'category')
            ->where('id', $id)
	    ->where('status', 0)
            ->first();
        return $this->response->array(['data' => $response->toArray()])
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Credentials', 'true');
        return $this->response->item($response, new ProductTransformer);
    }

    /**
     * Store Product
     *
     * @POST('api/products)
     *
     * @param array $params ['category_id', 'name', 'content']
     *
     * @return Response Description
     */
    public function store()
    {
        if (\Request::isMethod('post')) {
            $params = \Input::all();

            if (empty($params['category_id']) || ($params['category_id'] == '')) {
                $error['category_id'] = 'Field category required.';
            }

            if (empty($params['name']) || ($params['name'] == '')) {
                $error['name'] = 'Field name required.';
            }

            if (empty($params['content']) || ($params['content'] == '')) {
                $error['content'] = 'Field content required.';
            }

            if (!empty($error)) {
                $errorFormat = [
                    'message' => $error,
                    'errors' => 'Fields required!',
                    'code' => '403',
                    'status_code' => '403',
                ];
                return $this->response->error(json_encode($errorFormat), 403)
                        ->header('Access-Control-Allow-Origin', '*')
                        ->header('Access-Control-Allow-Credentials', 'true');
            }
        }
        // return $this->response->errorBadRequest()
        //         ->withHeader('Access-Control-Allow-Origin', '*')
        //         ->withHeader('Access-Control-Allow-Credentials', 'true');


        //$user = UserHelper::findFromToken();
        $user = UserHelper::findUser($params['user_id']);
        // $user = User::where('id', $params['user_id'])->first();
        $category = Category::where('id', $params['category_id'])->first();
        $product = new Product();
        $response = $this->save($params, $product, $category, $user);

        $errorFormat = [
            'message' => 'Create successfully',
            'errors' => 'Success!',
            'code' => '200',
            'status_code' => '200',
        ];
        return \Response::make(['message' => 'Add Products successfuly', 'status_code' => 200])->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Credentials', 'true');
    }

    /**
     * protected save data to DB
     *
     * @param array $params ['name', 'image', 'content', 'status'],
     * object $product,
     * object $category,
     * object $user
     *
     * @return object $product
     */
    protected function save($params, $product, $category, $user)
    {
        $name = isset($params['name']) ? $params['name'] : null;
        $image = isset($params['image']) ? $params['image'] : null;
        $content = isset($params['content']) ? $params['content'] : null;
        $status = isset($params['status']) ? $params['status'] : null;

        $product->user()->associate($user);
        $product->category()->associate($category);
        $product->name = $name;
        if($image){
            $imageName = $image->getClientOriginalName();
            $image->move('storage', $imageName);
        } else $imageName = '';
        $product->image = $imageName;
        $product->content = $content;
        $product->status = $status;
        $product->save();
        return $product;
    }


}
