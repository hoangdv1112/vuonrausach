<?php
/**
 * Created by PhpStorm.
 * User: Hoang Dru
 * Date: 3/24/2016
 * Time: 11:02 PM
 */

namespace App\Modules\Menu\Models;

use App\Modules\Entity;
use Illuminate\Database\Eloquent\SoftDeletes;

class Menu extends Entity {
    use SoftDeletes;

    /**
     * The database table used by the model defined explicitly.
     * @var string
     */
    protected $table = 'menus';

    public function user()
    {
        return $this->belongsTo("App\Modules\User\Models\User");
    }
    
    /**
     * Relationship
     */
    public function hasChildren() {
        return $this->hasMany('App\Modules\Menu\Models\Menu', 'parent_id', 'id');
    }
    public function childrens() {
        return $this->hasChildren()->with('childrens');
    }
}
