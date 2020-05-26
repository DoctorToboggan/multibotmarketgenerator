var table = new Tabulator("#markettable", {
    data:tableData, //set initial table data
    columns:[
		{title:"ID", field:"id"},
        {title:"Market Group", field:"marketgroup"},
        {title:"Stall Number", field:"stallnumber"},
        {title:"Price Name", field:"pricename"},
        {title:"Price Coin Name", field:"pricecoinname"},
		{title:"Price Quality", field:"pricequality"},
        {title:"Price Number", field:"pricenumber"},
        {title:"Product Name", field:"productname"},
        {title:"Product Coin Name", field:"productcoinname"},
        {title:"Product Quality", field:"productquality"},
        {title:"Product Remaining", field:"productremaining"},
    ],
});