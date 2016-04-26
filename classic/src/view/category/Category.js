Ext.define('VRS.view.category.Category', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.danh-muc-rau',
    
    requires: [
        'VRS.modules.category.view.CategoryController',
        'VRS.modules.category.view.CategoryListModel'
    ],
    controller: 'Category',
    viewModel: {
        type: 'categories'
    },
    flex: 1,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'categories.grid',
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
                    disabled: '{!CategoryGrid.selection}'
                },
                listeners: {
                    click: 'onEdit'
                }
            }, 
            {
                glyph: VRS.modules.util.common.Glyphs.getIcon('destroy'),
                bind: {
                    disabled: '{!CategoryGrid.selection}'
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