/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('VRS.view.main.Main', {
    extend: 'Ext.container.Container',
    plugins: 'viewport',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Ext.list.Tree',

        'VRS.modules.main.view.MainController',
        'VRS.modules.main.view.MainModel',
        'VRS.modules.menu.store.MainNavigationTree'
    ],

    controller: 'main',
    viewModel: 'main',


    layout: {
        type: 'border'
    },
    items: [{
        region: 'center',
        xtype: 'mainpanel'
    }, {
        region: 'north',
        xtype: 'appheader'
    }, {
        region: 'south',
        xtype: 'appfooter'
    }, {
        region: 'west',
        title: 'DASHBOARD',
        width: 250,
        split: true,
        collapsible: true,
        collapsed: false,
        padding: '0 0 0 0',
        layout: {
            type: 'vbox',
            align: 'stretch',
            pack: 'start'
        },
        scrollable: 'y',
        header: {
            height: 54
        },
        items: [{
            xtype: 'treelist',
            reference: 'navigationTreeList',
            itemId: 'navigationTreeList',
            ui: 'main-navigation',
            store: {
                type: 'MainNavigationTree'
            },
            expanderFirst: false,
            expanderOnly: false,
            listeners: {
                selectionchange: 'onNavigationTreeSelectionChange'
            }
        }]

    }]
});