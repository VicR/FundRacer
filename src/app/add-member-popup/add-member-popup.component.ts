import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { formContainer } from 'aws-amplify';
import { format } from 'path';

@Component({
  selector: 'app-add-member-popup',
  templateUrl: './add-member-popup.component.html',
  styleUrls: ['./add-member-popup.component.scss']
})
export class AddMemberPopupComponent implements OnInit {


  contactForm: FormGroup

  countries = ['USA', 'Germany', 'Italy', 'France']

  requestTypes = ['Claim', 'Feedback', 'Help Request']

  constructor(public dialogRef: MatDialogRef<AddMemberPopupComponent>) {
    this.contactForm = this.createFormGroup()
  }

  // Step 1
  createFormGroup() {
    return new FormGroup({
        first_name : new FormControl(),
        last_name : new FormControl(),
        email: new FormControl(),
        mobile: new FormControl(),
        country: new FormControl(),
       password : new FormControl(),
       confirmpassword : new FormControl(),
       Address : new FormControl(),
       Street : new FormControl(),
       state : new FormControl(),
       city : new FormControl(),
       zip : new FormControl()
    })
  }

  onSubmit() {
    // // Make sure to create a deep copy of the form-model
    // const result: ContactRequest = Object.assign({}, this.contactForm.value);
    // result.personalData = Object.assign({}, result.personalData);

    // Do useful stuff with the gathered data
    console.log("result submitted");
  }

  revert() {
    // Resets to blank object
    this.contactForm.reset();    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close({data : this.contactForm.value});
  }

}

