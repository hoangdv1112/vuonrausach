Ext.define('VRS.modules.category.store.CategoryAll', {
	extend: 'VRS.modules.category.store.CategoryBase',
	alias: 'store.CategoryAll',
	id: 'CategoryAll',
	proxy: {
		type: 'ajax',
		url: VRS.modules.util.common.Util.baseUrl + '/all-categories'
	}
});