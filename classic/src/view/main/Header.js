Ext.define('Extjs.view.main.Header', {
	extend: 'Ext.toolbar.Toolbar',
	xtype: 'appheader',
	ui: 'footer',
	items: [
		{
		xtype: 'component',
		componentCls: 'app-header-title',
			bind: {
				html: '{appName}'
			}
		},
		'->',
		{
			xtype: 'button',
			itemId: 'logout',
			text: 'Logout',
			reference: 'logout',
			iconCls: 'fa fa-lg fa-sign-out',
			listeners: {
				click: function() {}
			}
		}
	]
});