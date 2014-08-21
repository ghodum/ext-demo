Ext.onReady(function() {
    Ext.QuickTips.init();

    Ext.create('Ext.container.Viewport',{
        layout: 'fit',
        items: [{
            xtype : 'usergrid',
            title : 'Dilli\'s Users'
        }]
    });
});
