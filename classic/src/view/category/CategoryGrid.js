Ext.define('VRS.view.category.CategoryGrid', {
    extend: 'VRS.modules.util.view.grid.GridBase',
    alias: 'widget.categories.grid',
    reference: 'CategoryGrid',

    bind: '{categories}',
    columns: [{
            dataIndex: 'id',
            text: '#',
            width: 50
        }, {
            dataIndex: 'name',
            text: 'Name',
            flex: 1
        }, {
            dataIndex: 'description',
            text: 'Description',
            flex: 1
        },
        /*{ 
            text: 'Status', 
            dataIndex: 'status', 
            flex: 1, 
            renderer: function(value){
                if (value == 0) {
                    return 'Active';
                }

                return 'Deactive';
            }
        },*/
        {
            xtype: 'actioncolumn',
            width: 50,
            items: [{
                iconCls: 'x-fa fa-pencil',
                tooltip: 'Edit',
                handler: 'handlerEdit'
            }, {
                iconCls: 'x-fa fa-trash',
                tooltip: 'Delete',
                handler: 'handlerDelete'
            }]
        }
    ],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        bind: '{categories}',
        dock: 'bottom',
        displayInfo: true
    }]
});