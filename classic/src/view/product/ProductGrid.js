
Ext.define('VRS.view.product.ProductGrid', {
    extend: 'VRS.modules.util.view.grid.GridBase',
    alias: 'widget.products.grid',
    reference: 'ProductGrid',
    
    bind: '{products}',
    
    features: [{ftype:'grouping'}],

    columns: [
    	{
	        dataIndex: 'id',
	        text: '#',
	        width: 50
	    },
        {
            dataIndex: 'image',
            text: 'Image',
            width: 100,
            renderer: function(value) {
                    return value ? '<img src="' + VRS.modules.util.common.Util.baseUrlResource + '/image/{value}" style="width: 75px;max-height: 50px; overflow: hidden;" />' : '<i class="x-fa fa-fire" aria-hidden="true" style="font-size:18px;color: #6CC112;"></i>';

            }
        }, 
	    {
	        dataIndex: 'name',
	        text: 'Name',
	        flex: 1
	    }, 
	    {
	        dataIndex: 'content',
	        text: 'Content',
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
        },
        {
            iconCls: 'x-fa fa-trash',
            tooltip: 'Delete',
            handler: 'handlerDelete'
        }]
    }
    ],
    dockedItems: [
        {
            xtype: 'pagingtoolbar',
            bind: '{products}',
            dock: 'bottom',
            displayInfo: true
       }
    ] 
});