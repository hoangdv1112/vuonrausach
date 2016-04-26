Ext.define('VRS.modules.product.store.Product', {
    extend: 'VRS.modules.util.store.Base',
    alias: 'store.Product',
    id: 'Product',
    requires: [
        'VRS.modules.product.model.Product'
    ],
    model: 'VRS.modules.product.model.Product',
    proxy: {
        type: 'rest',
        url: VRS.modules.util.common.Util.baseUrl + '/products'
    }
});