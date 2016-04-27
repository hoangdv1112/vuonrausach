Ext.define("VRS.modules.category.model.Category", {
    extend: 'VRS.modules.util.model.Base',

    fields: [{
        name: 'id',
        type: 'string'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'description',
        type: 'string'
    }, {
        name: 'status'
    }]
});