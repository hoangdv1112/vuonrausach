Ext.define('VRS.modules.category.store.CategoryBase', {
    extend: 'VRS.modules.util.store.Base',
    requires: [
        'VRS.modules.category.model.Category'
    ],
    model: 'VRS.modules.category.model.Category'
});