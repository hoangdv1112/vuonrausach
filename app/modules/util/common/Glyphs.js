/**
 * @author Hoangdv
 * 
 * @class VRS.modules.util.Glyphs
 * Description
 */
Ext.define('VRS.modules.util.common.Glyphs', {
    singleton: true,

    config: {
        webFont: 'FontAwesome',
        add: 'xf067',
        edit: 'xf040',
        destroy: 'xf1f8',
        save: 'xf00c',
        cancel: 'xf0e2',
        refresh: 'xf021'
    },

    constructor: function(config) {
        this.initConfig(config);
    },

    getIcon: function(glyph) {
        var me = this,
            font = me.getWebFont();
        if (typeof me.config[glyph] === 'undefined') {
            return false;
        }

        return me.config[glyph] + '@' + font;
    }
});