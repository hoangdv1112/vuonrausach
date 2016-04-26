/**
 * Created by Hoang Dru on 3/30/2016.
 *
 * @class VRS.modules.ultil.model.Base
 * @extends Ext.data.Model
 * Description
 */

Ext.define('VRS.modules.util.model.Base', {
    extend: 'Ext.data.Model',
    fields: [{
            name: 'author',
            mapping: 'user.name'
        }]
});