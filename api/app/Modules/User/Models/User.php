<?php
/**
 * Created by PhpStorm.
 * User: Hoang Dru
 * Date: 3/25/2016
 * Time: 12:13 AM
 */
namespace App\Modules\User\Models;

use App\Modules\Entity;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable {
    use SoftDeletes;

    /**
     * The database table used by the model defined explicitly.
     * @var string
     */
    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    public function categories()
    {
        return $this->hasMany("App\Modules\Category\Models\Category");
    }
    
    public function articles()
    {
	return $this->hasMany("App\Modules\Article\Models\Article");
    }
}