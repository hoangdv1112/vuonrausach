Ext.define("VRS.modules.product.model.Product", {
    extend: 'VRS.modules.util.model.Base',

    fields: [{
        name: 'id',
        type: 'integer'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'image',
        type: 'string'
    }, {
        name: 'content',
        type: 'string'
    }, {
        name: 'status'
    }, {
        name: 'categoryId',
        mapping: 'category_id',
        type: 'integer'
    }, {
        name: 'categoryName',
        mapping: 'category.name',
        type: 'string'
    }]
});