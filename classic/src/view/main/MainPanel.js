Ext.define('VRS.view.main.Panel',{
	extend:'Ext.tab.Panel',
	xtype:'mainpanel',
	id: 'mainPanel',
	activeTab: 0,
	items:[
		{
			xtype:'panel',
			closable:false,
			iconCls:'x-fa fa-home fa-lg tabIcon',
			title:'Home',
			routeId: 'home'
		}
	]
});