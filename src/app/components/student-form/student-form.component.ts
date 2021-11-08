import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

   studentGridColDefs = [
    //     {
    //       headerName: "Actions",
    //       suppressMenu: true,
    //       sortable: false,
    //       template: `<a  data-action-type="view"  class="btn btn-xs btn-success mr-2 btn-grid">View Details</a>`,
    //       pinned: 'right',
    //      // width: 150, minWidth: 150, maxWidth: 150
    //     },
        { headerName: 'Student Id', field: 'studentId', sortable: true, filter: true, resizable: true,  pinned: 'left'},
        { headerName: 'Student Email', field: 'studentEmail', sortable: true, filter: true, resizable: true,  },
        { headerName: 'password', field: 'password', sortable: true, filter: true, suppressSizeToFit : true},
        { field: 'total', minWidth: 175, cellRenderer: 'totalValueRenderer' },
    ];

  studentGridRowData = [];
  studentForm: FormGroup ;
/*
   studentId: number = -1;
    studentEmail: string = '';
    password: string = '';
*/
  

  

  


  ngOnInit() {
    this.studentForm= this.formBuilder.group({
        studentEmail: ['Studnt Email', [Validators.required]],
        studentPassword: ['', [Validators.required]]
      });
  }

   get getStudentFormControls() {
        return this.studentForm.controls;
       }



  }

  

//}
