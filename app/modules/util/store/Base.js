/**
 * @class VRS.modules.ultil.store.Base
 * @extends Ext.data.Store
 * Description
 */
Ext.define('VRS.modules.util.store.Base', {
    extend: 'Ext.data.Store',
    config: {
        proxy: {
            cors: true,
            useDefaultXhrHeader: false,
            reader: {
                type: 'json',
                rootProperty: 'data',
                totalProperty: 'meta.pagination.total',
                metaProperty: 'meta'
            },
            writer: {
                type: 'json',
                writeAllfields: true,
                encode: true,
                rootProperty: 'data',
                allowSingle: false
            }
        }
    },
    listeners: {
        exception: function (proxy, response, operation) {
            VRS.modules.util.common.Util.showErrorMsg(response.responseText);
        }
    }
});