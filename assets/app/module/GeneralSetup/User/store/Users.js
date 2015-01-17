Ext.define('RAWON.module.GeneralSetup.User.store.Users', {
    extend      : 'Ext.data.Store',
    model       : 'RAWON.module.GeneralSetup.User.model.Users',
    requires    : [
        'RAWON.module.GeneralSetup.User.model.Users'
    ],
    autoLoad    : true,
    autoSync    : false,
    pageSize    : 20,
    root        : {
        expanded    : false
    },
    proxy       : {
        type            : 'ajax',
        api             : {
            read    : BASE_URL + 'GeneralSetup/c_user/getUsers'
        },
        actionMethods   : {
            read    : 'POST'
        },
        reader          : {
            type            : 'json',
            root            : 'data',
            successProperty : 'success',
            totalProperty   : 'total'
        },
        writer          : {
            type            : 'json',
            writeAllFields  : true,
            root            : 'data',
            encode          : true
        }
    }
});