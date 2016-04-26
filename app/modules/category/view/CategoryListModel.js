Ext.define('VRS.modules.category.view.CategoryListModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.categories',
    
    requires: [
        'VRS.modules.category.store.Category'
    ],
    stores: {
        categories: {
            type: 'Category',
            autoLoad: true,
            pageSize: 25
        }
    }
});