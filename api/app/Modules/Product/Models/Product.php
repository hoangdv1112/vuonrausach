<?php
/**
 * Created by PhpStorm.
 * User: Hoang Dru
 * Date: 3/24/2016
 * Time: 11:02 PM
 */

namespace App\Modules\Product\Models;

use App\Modules\Entity;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Entity {
    use SoftDeletes;

    /**
     * The database table used by the model defined explicitly.
     * @var string
     */
    protected $table = 'products';

    public function user()
    {
        return $this->belongsTo("App\Modules\User\Models\User");
    }
    
    public function category ()
    {
	return $this->belongsTo("App\Modules\Category\Models\Category");
    }
}
