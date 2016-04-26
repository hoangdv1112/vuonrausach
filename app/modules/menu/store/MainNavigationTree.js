
Ext.define('VRS.modules.menu.store.MainNavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'MainNavigationTree',
    alias: 'store.MainNavigationTree',

    fields: [{
        name: 'text'
    }],

    root: {
        expanded: true,
        children: [
            {
                text: 'Quản lý Rau',
                iconCls: 'x-fa fa-fire',
                leaf: false,
                children: [
                    {
                        text: 'Danh mục rau',
                        iconCls: 'x-fa fa-th-large',
                        rowCls: 'nav-tree-badge nav-tree-badge-new',
                        routeId: 'danh-muc-rau', // routeId defaults to viewType
                        leaf: true
                    },
                    {
                        text: 'Rau',
                        iconCls: 'x-fa fa-th-large',
                        rowCls: 'nav-tree-badge nav-tree-badge-new',
                        routeId: 'rau', // routeId defaults to viewType
                        leaf: true
                    }
                ]
            },

            {
                text: 'Quản lý Nhà vườn',
                iconCls: 'x-fa fa-users',
                routeId: 'nha-vuon',
                leaf: true
            },
            {
                text: 'Hệ thống tiêu thụ',
                iconCls: 'x-fa fa-archive',
                routeId: 'he-thong-tieu-thu',
                leaf: true
            },
            {
                text: 'Thống kê',
                iconCls: 'x-fa fa-pie-chart',
                routeId: 'thong-ke',
                leaf: true
            }
        ]
    }
});
