Ext.define('VRS.view.category.CategoryForm', {
    extend: 'Ext.window.Window',

    alias: 'widget.category.form',
    reference: 'category-form',

    bind: '{title}',

    layout: 'fit',
    closable: true,
    modal: true,
    bodyPadding: 10,
    width: 550,
    // height: 550,
    items: {
        xtype: 'form',
        reference: 'form',
        defaults: {
            width: '100%',
            labelAlign: 'top'
        },

        items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Category Name',
            name: 'name',
            bind: '{rec.name}',
            allowBlank: false
        }, 
        {
            xtype: 'textareafield',
            fieldLabel: 'Description',
            name: 'description',
            grow: true,
            growMin: 200,
            bind: '{rec.description}'
        }, 
        {
            xtype: 'combobox',
            name: 'status',
            fieldLabel: 'Status',
            msgTarget: 'under',
            allowBlank: false,
            store: [
                [0,"Active"],
                [1, "Deactive"]
            ],
            bind: '{rec.status}'
        }, 
        {
            xtype: "hiddenfield",
            name: "id",
            bind: '{rec.id}'
        }],

        dockedItems: [{
            xtype: 'toolbar',
            dock: 'bottom',
            ui: 'footer',
            layout: {
                pack: 'end',
                type: 'hbox'
            },
            items: [{
                xtype: 'button',
                text: 'Save',
                glyph: VRS.modules.util.common.Glyphs.getIcon('save'),
                listeners: {
                    click: 'onSave'
                }
            }, {
                xtype: 'button',
                text: 'Cancel',
                glyph: VRS.modules.util.common.Glyphs.getIcon('cancel'),
                listeners: {
                    click: 'onCancel'
                }
            }]
        }]
    }
});