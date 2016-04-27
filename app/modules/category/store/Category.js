Ext.define('VRS.modules.category.store.Category', {
    extend: 'VRS.modules.category.store.CategoryBase',
    alias: 'store.Category',
    id: 'Category',
    proxy: {
        type: 'rest',
        url: VRS.modules.util.common.Util.baseUrl + '/categories'
    }
});