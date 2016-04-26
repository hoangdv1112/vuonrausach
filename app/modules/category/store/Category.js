Ext.define('VRS.modules.category.store.Category', {
    extend: 'VRS.modules.util.store.Base',
    alias: 'store.Category',
    id: 'Category',
    requires: [
        'VRS.modules.category.model.Category'
    ],
    model: 'VRS.modules.category.model.Category',
    proxy: {
        type: 'rest',
        url: VRS.modules.util.common.Util.baseUrl + '/categories'
    }
});