
Ext.define('VRS.modules.util.view.grid.GridBase', {
    extend: 'Ext.grid.Panel',
    flex: 1,


    stripeRows: true,
    listeners: {
        itemdblclick: 'onEdit',
        itemcontextmenu: function(view, record, item, index, event, options) {
            var me = this;
            event.preventDefault();
            Ext.create('Ext.menu.Menu', {
                width: 70,
                height: 80,
                margin: '0 0 10 0',
                items: [{
                    text: 'Edit',
                    iconCls: 'x-fa fa-pencil',
                    handler: function() {}
                },{
                    text: 'Delete',
                    iconCls: 'x-fa fa-trash',
                    listeners: {
                        click: function() {}
                    }
                }]
            }).showAt(event.getXY());
        }
    },
    //
    dockedItems: [
        {
            xtype: 'pagingtoolbar',
            //reference: '_pagingtoolbar',
            dock: 'bottom',
            displayInfo: true
        }
    ]
});