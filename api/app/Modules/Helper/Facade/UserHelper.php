<?php

namespace App\Modules\Helper\Facade;

use Illuminate\Support\Facades\Facade;

class UserHelper extends Facade {
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor() { return 'UserHelper'; }
}
