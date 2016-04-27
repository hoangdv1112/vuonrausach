Ext.define('VRS.modules.product.view.ProductListModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.products',

    requires: [
        'VRS.modules.product.store.Product'
    ],
    stores: {
        products: {
            type: 'Product',
            fields: [{
                name: 'RAU',
                mapping: 'category.name',
                type: 'string'
            }],
            autoLoad: true,
            pageSize: 25,
            groupField: 'RAU'
        }
    }
});