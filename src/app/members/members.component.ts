import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddMemberPopupComponent } from '../add-member-popup/add-member-popup.component';
import { APIService, Member } from "../API.service";

export interface EditUserDto {
  name: string | null | undefined;
  last_name: string;
  email_address: string;
  phone_number: string;
}

export interface EditUser {
  currentData?: EditUserDto;
  originalData: EditUserDto;
  editable: boolean;
  validator: FormGroup;
}
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})

export class MembersComponent {
  public ELEMENT_DATA_FROM_BACK: EditUserDto[] = []
  // ELEMENT_DATA_FROM_BACK: EditUserDto[] = [
  //   { name: 'Ion', last_name: 'Popescu', email_address: 'ion.popescu@domain.com',  phone_number: '(727)255-5587'},
  //   { name: 'Ion', last_name: 'Vasile', email_address: 'ion.vasile@domain.com',  phone_number: '(727)255-5585'},
  //   { name: 'Gigel', last_name: 'Popescu', email_address: 'gigel.popescu@domain.com',  phone_number: '(727)255-5687'},
  //   { name: 'Dorel', last_name: 'Popescu', email_address: 'dorel.popescu@domain.com', phone_number: '(727)255-5887'},
  //   { name: 'Cardel', last_name: 'Popescu', email_address: 'cardel.popescu@domain.com',  phone_number: '(727)255-5337'},
  //   { name: 'Alex', last_name: 'Popescu', email_address: 'alex.popescu@domain.com',  phone_number: '(727)255-5677'},
  //   { name: 'Mihai', last_name: 'Popescu', email_address: 'mihai.popescu@domain.com', phone_number: '(727)255-5947'}
  // ];

  public ELEMENT_DATA: EditUser[] = [];

  displayedColumns: string[] = ['name', 'last_name', 'email_address', 'phone_number', 'action'];
  dataSource: MatTableDataSource<EditUser>;
  selected = 'option1';

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  editForm: FormGroup;

  public members: Array<Member> = [];
  constructor(public dialog: MatDialog, private api: APIService) {
  }

  // forminitialize()
  // {
  //   const editForm = (e) => new FormGroup({
  //     name: new FormControl(e.name,Validators.required),
  //     last_name: new FormControl(e.last_name,Validators.required),
  //     email_address: new FormControl(e.email_address,Validators.required),
  //     phone_number : new FormControl(e.phone_number,Validators.required)
  //   });
  //   this.editForm = this.fb.group({
  //     name: ["null", Validators.required],
  //     last_name: ["null", Validators.required],
  //     email_address: ["null", Validators.required],
  //     phone_number: ["null", Validators.required]
  //   })
  // }

  ngOnInit() {
    // console.log('ED2:', this.ELEMENT_DATA.slice())
    const editForm = (e) => new FormGroup({
      name: new FormControl(e.name, Validators.required),
      last_name: new FormControl(e.last_name, Validators.required),
      email_address: new FormControl(e.email_address, Validators.required),
      phone_number: new FormControl(e.phone_number, Validators.required)
    });
    this.api.ListMembers().then(event => {
      // this.members = event.items as Member[];
      event.items.forEach(element => {
        this.ELEMENT_DATA_FROM_BACK.push({
          name: element!.name,
          last_name: element!.last_name,
          email_address: element!.email_address,
          phone_number: element!.phone_number
        });
      });
      // console.log('EDFB:', this.ELEMENT_DATA_FROM_BACK)

      this.ELEMENT_DATA_FROM_BACK.forEach(element => {
        this.ELEMENT_DATA.push({
          currentData: element,
          originalData: element,
          editable: false,
          validator: editForm(element)
        });
      });
      // console.log('ED:', this.ELEMENT_DATA)
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA.slice());
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      // console.log('dataSource:', this.dataSource)
    });
  }

  applyFilter(event: any) {
    const filterValue = event.target.value
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteRow(index: number) {
    const data = this.dataSource.data;
    data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
    this.dataSource.data = data;
  }

  confirmEditCreate(row) {
    row.editable = false;
    // save form control values to data object
    Object.keys(row.validator.controls).forEach(item => {
      row.currentData[item] = row.validator.controls[item].value;
    });
  }

  startEdit(row) {
    row.editable = true;
  }

  cancelOrDelete(row, i) {
    if (row.editable) {
      row.editable = false;
      // cancel - reset form control values to data object
      Object.keys(row.validator.controls).forEach(item => {
        row.validator.controls[item].patchValue(row.currentData[item]);
      });
    }
    else {
      // delete
      this.deleteRow(i);
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddMemberPopupComponent, {
      width: '700px'
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   debugger
    //   if (result.data != "") {
    //     let obj = result.data;
    //     // console.log(obj.first_name)
    //     this.ELEMENT_DATA_FROM_BACK.push({
    //       name: obj.name,
    //       last_name: obj.last_name,
    //       email_address: obj.email_address,
    //       phone_number: obj.phone_number
    //     })

    //     this.ELEMENT_DATA_FROM_BACK.forEach(element => {
    //       this.ELEMENT_DATA.push({
    //         currentData: element,
    //         originalData: element,
    //         editable: false,
    //         validator: this.editForm
    //       });
    //     });
    //   }
    // });
  }

}
