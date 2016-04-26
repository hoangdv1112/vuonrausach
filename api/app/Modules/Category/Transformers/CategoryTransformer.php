<?php
/**
 * Created by PhpStorm.
 * User: Hoang Dru
 * Date: 3/24/2016
 * Time: 11:34 PM
 */
namespace App\Modules\Category\Transformers;

use League\Fractal\TransformerAbstract;
use App\Modules\Category\Models\Category;

class CategoryTransformer extends TransformerAbstract{
    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(Category $category)
    {
        return $category;
    }
}