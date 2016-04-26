Ext.define('VRS.view.product.Product', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.rau',
    
    requires: [
        'VRS.modules.product.view.ProductController',
        'VRS.modules.product.view.ProductListModel'
    ],
    controller: 'product',
    viewModel: {
        type: 'products'
    },
    flex: 1,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'products.grid',
            flex: 1
        }
    ],
    dockedItems: [{
            xtype: 'toolbar',
            dock: 'top',
            default: 'button',
            items: [{
                glyph: VRS.modules.util.common.Glyphs.getIcon('add'),
                listeners: {
                    click: 'onAdd'
                }
            },
            {
                glyph: VRS.modules.util.common.Glyphs.getIcon('edit'),
                bind: {
                    disabled: '{!ProductGrid.selection}'
                },
                listeners: {
                    click: 'onEdit'
                }
            }, 
            {
                glyph: VRS.modules.util.common.Glyphs.getIcon('destroy'),
                bind: {
                    disabled: '{!ProductGrid.selection}'
                },
                listeners: {
                    click: 'onDelete'
                }
            },
            {
                glyph: VRS.modules.util.common.Glyphs.getIcon('refresh'),
                listeners: {
                    click: 'refresh'
                }
            }]
        }]
});