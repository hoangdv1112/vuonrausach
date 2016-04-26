
Ext.define("VRS.modules.menu.model.Menu", {
    extend: 'VRS.modules.util.model.Base',

    fields: [
        {
            name: 'id',
            type: 'string'
        },
        {
            name: 'text',
            type: 'string'
        },
        {
            name: 'left',
            type: 'boolean'
        }
    ]
});