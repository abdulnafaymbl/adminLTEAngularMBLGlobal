import { Parser } from '@angular/compiler/src/ml_parser/parser';
import { Component, OnInit } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ValueFormatterService } from 'ag-grid-community';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

   htmlStrVar : string = "asdasd";
 

 /* gridOptions = {
    // turn off row translation
    suppressRowTransform: true,

    myColumnDefs : [
      {headerName: 'Customer Name' , field: 'CustomerName' , colspan: 2},
      {headerName: 'First Name' , field: 'firstName' },
      {headerName: 'Last Name' , field: 'lastName' ,}
    ],
  
  
    myRowDefs : [
      { CustomerName: 'Abdul Nafay', firstName: ' Nafay', lastName: 'Abdul'},
      { CustomerName: 'Abdul Rafay', firstName: 'Rafay', lastName: 'Abdul' },
      { CustomerName: 'Ali Mehdi', firstName: 'Mehdi', lastName: ' Ali Ali Ali Ali AliAli Ali Ali Ali AliAli Ali Ali Ali AliAli Ali Ali Ali Ali'  }
  ]

    // other grid options ...
}*/

myColumnDefs= [
    {headerName: 'Customer Name' , field: 'CustomerName'  },
    {headerName: 'First Name' , field: 'firstName' },
    {headerName: 'Last Name' , field: 'lastName'  ,type: 'rightAligned' , wrapText: true , width: '300px' , autoHeight: true ,valueFormatterService: this.cellRenderer , template: "<li>" +this.htmlStrVar+"</li>" +"<li>" +this.htmlStrVar+"</li>" }
  ];

  
myAnchorColumnDefs= [
    {headerName: 'Anchor Code' , field: 'anchorCode'  },
    {headerName: 'Anchor Name' , field: 'anchorName'  },
  ];


  myRowDefs = [
    { CustomerName: 'Abdul Nafay', firstName: ' Nafay', lastName: 'Abdul'},
    { CustomerName: 'Abdul Rafay', firstName: 'Rafay', lastName: 'Abdul' },
    { CustomerName: 'Ali Mehdi', firstName: 'Mehdi', lastName: 'Ali1 /n'+"<b>"+' Ali2 <br> Ali Ali AliAli Ali Ali Ali AliAli Ali Ali Ali AliAli Ali Ali Ali Ali'  }
];

  /*myColumnDefs = [
		{headerName: 'Make', field: 'make' },
		{headerName: 'Model', field: 'model' },
		{headerName: 'Price', field: 'price'}
	];


  myRowDefs = [
		{ make: 'Toyota', model: 'Celica', price: 35000 },
		{ make: 'Ford', model: 'Mondeo', price: 32000 },
		{ make: 'Porsche', model: 'Boxter', price: 72000 }
	];*/

  constructor() { 
    this.htmlStrVar = "dasasdasdasdkjh ";
  }


  ngOnInit(): void {
    this.htmlStrVar = "dasasdasdasdkjh ";

  }

  cellRenderer(params : any)  {
    // let keyData = params;
    // let newLink = 
    // `<a href= https://ag-grid.com/${keyData}-getting-started
    // target="_blank">${keyData}</a>`;
    // return newLink;
    // var parser =new DOMParser();
    // var str = '<body>Value is <br /> hello </body>';
    // var htmlStr = parser.parseFromString( str, 'text/html');
    this.htmlStrVar = '<h1>'+params+'</h1>';
     return this.htmlStrVar;
}

}
