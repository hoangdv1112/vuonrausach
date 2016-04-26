/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('VRS.modules.main.view.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onNavigationTreeSelectionChange: function(view, record, item, index, event, options) {
        var mainPanel = Ext.getCmp('mainPanel');

        var mainPanel = Ext.getCmp('mainPanel'),
        newTab = mainPanel.items.findBy(function(tab) {
            return (tab.routeId === record.get('routeId'));
        });

        if (!newTab && record.get('leaf')) {
            newTab = mainPanel.add({
                xtype: record.get('routeId'),
                closable: true,
                iconCls: record.get('iconCls'),
                title: record.get('text'),
                routeId: record.get('routeId')
            });
        }
        mainPanel.setActiveTab(newTab);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
