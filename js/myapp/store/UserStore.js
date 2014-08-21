Ext.define('myapp.store.UserStore', {
    extend : 'Ext.data.Store',
    model : 'myapp.model.User',
    proxy : {
        type: 'ajax',
        url: 'data/users.json',
        reader: {
            type: 'json'
        }
    },
    autoLoad : true
});
