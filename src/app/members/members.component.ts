import { Component, OnInit , ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddMemberPopupComponent } from '../add-member-popup/add-member-popup.component';

export interface EditUserDto {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  cell: string;
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
  ELEMENT_DATA_FROM_BACK: EditUserDto[] = [
    { firstName: 'Ion', lastName: 'Popescu', username: 'ipopescu', email: 'ion.popescu@domain.com',  cell: '(727)255-5587'},
    { firstName: 'Ion', lastName: 'Vasile', username: 'ivasile', email: 'ion.vasile@domain.com',  cell: '(727)255-5585'},
    { firstName: 'Gigel', lastName: 'Popescu', username: 'gpopescu', email: 'gigel.popescu@domain.com',  cell: '(727)255-5687'},
    { firstName: 'Dorel', lastName: 'Popescu', username: 'dpopescu', email: 'dorel.popescu@domain.com', cell: '(727)255-5887'},
    { firstName: 'Cardel', lastName: 'Popescu', username: 'cpopescu', email: 'cardel.popescu@domain.com',  cell: '(727)255-5337'},
    { firstName: 'Alex', lastName: 'Popescu', username: 'apopescu', email: 'alex.popescu@domain.com',  cell: '(727)255-5677'},
    { firstName: 'Mihai', lastName: 'Popescu', username: 'mpopescu', email: 'mihai.popescu@domain.com', cell: '(727)255-5947'}
  ];

  ELEMENT_DATA: EditUser[] = [];

  displayedColumns: string[] = ['firstName', 'lastName', 'username', 'email', 'cell', 'action'];
  dataSource: MatTableDataSource<EditUser>;
  selected = 'option1';

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  editForm: FormGroup;

  constructor(public dialog: MatDialog) {
    this.forminitialize();
  }

  forminitialize()
  {
    const editForm = (e) => new FormGroup({
      firstName: new FormControl(e.firstName,Validators.required),
      lastName: new FormControl(e.lastName,Validators.required),
      username: new FormControl(e.username,Validators.required),
      email: new FormControl(e.email,Validators.required),
      cell : new FormControl(e.cell,Validators.required)
    });
    this.ELEMENT_DATA_FROM_BACK.forEach(element => {
      this.ELEMENT_DATA.push({currentData: element, 
                              originalData: element, 
                              editable: false, 
                              validator: editForm(element)});
    });
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA.slice());
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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

    openDialog(){
      const dialogRef = this.dialog.open(AddMemberPopupComponent, {
        width: '700px'
      });

      dialogRef.afterClosed().subscribe(result => {
        debugger
        if(result.data != "")
        {
          let obj = result.data;
          console.log(obj.first_name)
          this.ELEMENT_DATA_FROM_BACK.push({
            firstName: obj.first_name, 
            lastName: obj.last_name, 
            username: obj.email, 
            email: obj.username, 
            cell: obj.mobile 
          })

          this.ELEMENT_DATA_FROM_BACK.forEach(element => {
            this.ELEMENT_DATA.push({currentData: element, 
                                    originalData: element, 
                                    editable: false,
                                    validator: this.editForm});
            
          });
         
          
        }
      });
    }

}
