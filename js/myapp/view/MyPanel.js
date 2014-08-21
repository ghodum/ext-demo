Ext.define('myapp.view.MyPanel', {
    extend: 'Ext.form.Panel',
    alias : 'widget.mypanel',
    bodyPadding : '10',

    initComponent : function() {
        this.tbar = [{
            text : 'Load',
            scope : this,
            handler : this.loadBtnHandler
        }, '-', {
            text : 'Save',
            scope : this,
            handler : this.saveBtnHandler
        }];

        this.items = [{
            xtype : 'mytextfield',
            name : 'firstName',
            maxLength : 100,
            fieldLabel : 'First Name'
        }, {
            xtype : 'mytextfield',
            name : 'lastName',
            allowBlank : false,
            maxLength : 100,
            fieldLabel : 'Last Name',
            listeners : {
                change : function(field, newValue, oldValue, eOpts ) {
                    Ext.Msg.alert('Change', 'The new value is ' + newValue);
                }
            }
        }];

        this.callParent(arguments);
    },

    loadBtnHandler : function() {
        this.load();
    },

    saveBtnHandler : function() {
        if (this.getForm().isValid()) {
            var values = this.getForm().getValues();
            this.save(values);
        } else {
            Ext.Msg.alert('Not Valid', 'This form has errors.');
        }
    },

    save : function(values) {
        Ext.Ajax.request({
            url : 'data/save_user.json',
            scope : this,
            jsonData : values,
            success : function(response) {
                var resp = response.responseText;
                var values = Ext.JSON.decode(resp);

                if (values.success) {
                    Ext.Msg.alert('Save', 'The user was saved');
                } else {
                    Ext.Msg.alert('Save', 'The user was NOT saved');
                }
            }
        });
    },

    load : function() {
        Ext.Ajax.request({
            url : 'data/user.json',
            scope : this,
            success : function(response) {
                var resp = response.responseText;
                var values = Ext.JSON.decode(resp);
                this.getForm().setValues(values);
            }
        });
    }
});