Ext.define('VRS.modules.main.view.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',

    data: {
        currentView: null,
        name: 'VRS',
		appName: '<h2>VƯỜN RAU SẠCH</h2>',
		appHeaderIcon: '<span class="x-fa fa-desktop fa-lg app-headerlogo">' ,
		footer: 'Bản quyền thuộc về <b>vườn rau sạch chấm ớt</b>'
    }
});
