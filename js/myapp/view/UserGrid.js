Ext.define('myapp.view.UserGrid', {
    extend : 'Ext.grid.Panel',
    alias : 'widget.usergrid',
    title : 'Users',
    store : Ext.create('myapp.store.UserStore'),

    initComponent : function() {
        this.tbar = [{
            text : 'Add User',
            scope : this,
            handler : this.addUser
        }]

        this.columns = [{
            dataIndex : 'firstName',
            text : 'First Name',
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        },{
            dataIndex : 'lastName',
            text : 'Last Name',
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        }];

        this.plugins = [
            Ext.create('Ext.grid.plugin.RowEditing', {
                clicksToEdit: 1
            })
        ];

        this.callParent(arguments);
    },

    addUser : function() {
        var win = Ext.create('Ext.window.Window', {
            modal : true,
            autoShow : false,
            title : 'Add User',
            width : 300,
            minHeight: 400,
            layout : 'fit',
            items : [{
                xtype : 'mypanel'
            }]
        });

        win.show();
    }
});