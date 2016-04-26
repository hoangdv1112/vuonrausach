<?php
/**
 * Created by PhpStorm.
 * User: Hoang Dru
 * Date: 3/24/2016
 * Time: 11:34 PM
 */
namespace App\Modules\User\Transformers;

use League\Fractal\TransformerAbstract;
use App\Modules\User\Models\User;

class UserTransformer extends TransformerAbstract{
    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(User $user)
    {
        return \UserHelper::userToArray($user);
    }
}