Ext.define('VRS.modules.product.view.ProductController', {
    extend: 'VRS.modules.util.view.GridBaseController',

    alias: 'controller.product',

    onAdd: function(btn, e, options) {
        this.createDialog(null);
    },

    onEdit: function(btn, e, options) {
        var me = this,
            records = me.getRecordsSeleted();

        if (records[0]) {
            me.createDialog(records[0]);
        }
    },
    handlerEdit: function(grid, rowIndex, colIndex) {
        var me = this,
            record = grid.getStore().getAt(rowIndex);
            me.createDialog(record);
    },
    onContextEdit: function(menu, item, e, eOpts) {
                    // var rec = view.getSelectionModel().getSelection()[0];
        
        console.log(e)
    },

    onDelete: function(btn, e, options) {
        var me = this,
            records = me.getRecordsSeleted(),
            store = me.getStore('products');

        if (store.getCount() >= 1 && records.length) {

            Ext.Msg.show({
                title: 'Delete?',
                msg: 'Are you sure you want to delete?',
                buttons: Ext.Msg.YESNO,
                icon: Ext.Msg.QUESTION,
                fn: function(buttonId) {
                    if (buttonId == 'yes') {
                        store.remove(records);
                        Ext.Ajax.request({
                            cors: true,
                            useDefaultXhrHeader: false,
                            url: VRS.modules.util.common.Util.baseUrl + '/products/' + records[0].get('id'),
                            method: 'DELETE',
                            scope: me,
                            success: 'onSaveSuccess',
                            failure: 'onSaveFailure'
                        });
                        // store.sync();
                    }
                }
            });
        }

    },
    handlerDelete: function(grid, rowIndex, colIndex) {
        var me = this,
            record = grid.getStore().getAt(rowIndex),
            store = me.getStore('products');

        if (store.getCount() >= 1 && records.length) {

            Ext.Msg.show({
                title: 'Delete?',
                msg: 'Are you sure you want to delete?',
                buttons: Ext.Msg.YESNO,
                icon: Ext.Msg.QUESTION,
                fn: function(buttonId) {
                    if (buttonId == 'yes') {
                        store.remove(records);
                        Ext.Ajax.request({
                            cors: true,
                            useDefaultXhrHeader: false,
                            url: VRS.modules.util.common.Util.baseUrl + '/products/' + records[0].get('id'),
                            method: 'DELETE',
                            scope: me,
                            success: 'onSaveSuccess',
                            failure: 'onSaveFailure'
                        });
                        // store.sync();
                    }
                }
            });
        }
    },

    getRecordsSeleted: function() {
        var grid = this.lookupReference('ProductGrid');
        return grid.getSelection();
    },
    
    // Create dialog form
    createDialog: function(record) {
        var me = this;
        view = me.getView();
        me.isEdit = !!record;

        me.dialog = view.add({
            xtype: 'product.form',
            viewModel: {
                data: {
                    title: record ? 'Edit: "' + record.get('name') + '"' : 'Add product',
                    rec: record // || true
                },
                links: { 
                    /*rec: record || {
                        type: 'VRS.modules.product.model.Product',
                        create: true
                    }*/
                } // Refer with model
            }
        });
        me.dialog.show();
    },

    onCancel: function(btn, e, options) {
        var me = this;
        me.dialog = Ext.destroy(me.dialog);
    },

    onSave: function() {
        var me = this,
            form = me.lookupReference('form'),
            viewModel = me.dialog.getViewModel(),
            rec = viewModel.get('rec'),
            store = me.getStore('products'),
            isEdit = me.isEdit;

        if (form && form.isValid()) {
            // Submit is Update

            if (isEdit) {
                console.log(rec.get('status'), rec);
                Ext.Ajax.request({
                    url: VRS.modules.util.common.Util.baseUrl + '/products/' + rec.get('id'),
                    method: 'PUT',
                    jsonData: {
                        name: rec.get('name'),
                        description: rec.get('description'),
                        status: rec.get('status'),
                        user_id: 1
                    },
                    scope: me,
                    success: 'onSaveSuccess',
                    failure: 'onSaveFailure'
                });
            } else {

                Ext.Ajax.request({
                    cors: true,
                    useDefaultXhrHeader: false,
                    url: VRS.modules.util.common.Util.baseUrl + '/products',
                    method: 'POST',
                    params: {
                        name: rec.name,
                        description: rec.description,
                        status: rec.status,
                        user_id: 1,
                    },
                    scope: me,
                    success: 'onSaveSuccess',
                    failure: 'onSaveFailure'
                });
            }
        }
    },

    onSaveSuccess: function(res, action) {
        var me = this;
        me.onCancel();
        me.refresh();
        VRS.modules.util.common.Util.handFormSuccess(res);
    },

    onSaveFailure: function(form, action) {
        VRS.modules.util.common.Util.handFormFailure(action);
    },

    refresh: function(btn, e, options) {
        var me = this,
            store = me.getStore('products');
        store.load();
    }
});