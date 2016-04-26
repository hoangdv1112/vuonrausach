/**
 * @author Hoangdv
 * 
 * @class VRS.modules.util.common.Util
 * Description
 */
Ext.define('VRS.modules.util.common.Util', {
    
    statics: {
         baseUrl: 'http://vuonrausach/api/public/api',
         baseUrlResource: 'http://vuonrausach/api/public',
        
        required: '<span style="color:red;font-weight:bold" data-qtip="Required"> * < /span>',
        
        decodeJSON: function(text) {
            var result = Ext.JSON.decode(text, true);
            if (!result) {
                result = {};
                result.success = false;
                result.msg = text;
            }
            return result;
        },

        showToast: function(title, text) {
            Ext.toast({
                title: title,
                html: text,
                closable: false,
                align: 't',
                slideInDuration: 400,
                minWidth: 400
            });
        },

        handFormSuccess: function(response) {
            var me = this,
                result = VRS.modules.util.common.Util.decodeJSON(response.responseText);

            me.showToast(result.message, result.errors);
        },


        handFormFailure: function(action) {
            var me = this,
                result = VRS.modules.util.common.Util.decodeJSON(action.response.responseText);

            switch (action.failureType) {
                case Ext.form.action.Action.CLIENT_INVALID:
                    me.showErrorMsg('Form fields may not be submitted with invalid values ');
                    break;
                case Ext.form.action.Action.CONNECT_FAILURE:
                    me.showErrorMsg(action.response.responseText);
                    break;
                case Ext.form.action.Action.SERVER_INVALID:
                    me.showErrorMsg(result);
                    break;
            }
        },

        showErrorMsg: function(text) {
            Ext.Msg.show({
                title: 'Error!',
                msg: text,
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        }

    }
});