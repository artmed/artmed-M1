Ext.define('RAWON.module.Rooms.CategoryRoom.view.grid.GridCategoryRoom',{
	extend 		: 'Ext.grid.Panel',
	store 		: 'RAWON.module.Rooms.CategoryRoom.store.CategoryRoom',
	title 		: 'Grid Category Rooms',
	iconCls 	: 'icon-grid',
	alias 		: 'widget.gridcategoryroom',
	id 			: 'gridcategoryroom',
	border   	: true,
    frame    	: true,
    margins     : '3px', 
    selModel: {
        selType     : 'checkboxmodel',
        mode        : 'MULTI',
        checkOnly   : true,
        width       : '3%',
        action      : 'selected',
    },
    dockedItems: [{
        xtype       : 'pagingtoolbar',
        store       : 'RAWON.module.Rooms.CategoryRoom.store.CategoryRoom',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '5%'
        },
        {
            text     : 'Nama',
            dataIndex: 'name',
            width    : '80%'
        }
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deleteMenu },
         // { xtype: 'button', iconCls: 'icon-excel', text: 'Print', action : 'print' },
         {
            xtype               : 'textfield',
            emptyText           : 'Type a keyword Press Enter',
            width               : '85%',
            enableKeyEvents     : true,
            action              : 'search'
        }
    ]	
});