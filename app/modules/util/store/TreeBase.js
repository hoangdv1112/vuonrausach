/**
 * @class VRS.modules.ultil.store.Base
 * @extends Ext.data.Store
 * Description
 */
Ext.define('VRS.modules.util.store.TreeBase', {
    extend: 'Ext.data.TreeStore',
    config: {
        proxy: {
            cors: true,
            useDefaultXhrHeader: false,
            reader: {
                type: 'json',
                rootProperty: 'data'
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