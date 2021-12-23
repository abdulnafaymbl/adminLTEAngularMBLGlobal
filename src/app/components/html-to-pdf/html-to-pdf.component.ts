import { Component, ViewChild, ElementRef } from '@angular/core';
  
import jsPDF from 'jspdf';
import * as  pdfMake  from 'pdfmake/build/pdfmake';
import * as pdfFonts  from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
// import * as htmlToPdfmake  from '../../../../node_modules/html-to-pdfmake'; // html-to-pdfmake';

const htmlToPdfmake = require('html-to-pdfmake');
   

@Component({
  selector: 'app-html-to-pdf',
  templateUrl: './html-to-pdf.component.html',
  styleUrls: ['./html-to-pdf.component.css']
})
export class HtmlToPdfComponent  {

  constructor() { }

  // pdfMake.vfs: any = pdfFonts.pdfMake.vfs;

  title = 'htmltopdf';
  
  @ViewChild('pdfTable') pdfTable: ElementRef;
  
  public downloadAsPDF() {
    const doc = new jsPDF();

    console.log("pdf banao")
   
    const pdfTable = this.pdfTable.nativeElement;
   
    var html = htmlToPdfmake(pdfTable.innerHTML);
     
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).open(); 
     
  }

}
