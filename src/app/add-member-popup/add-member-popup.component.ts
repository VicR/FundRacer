import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { formContainer } from 'aws-amplify';
import { format } from 'path';
import { APIService, Member } from "../API.service";

@Component({
  selector: 'app-add-member-popup',
  templateUrl: './add-member-popup.component.html',
  styleUrls: ['./add-member-popup.component.scss']
})
export class AddMemberPopupComponent implements OnInit {

  memberForm: FormGroup

  constructor(public dialogRef: MatDialogRef<AddMemberPopupComponent>, private api: APIService, private fb: FormBuilder) {
    // this.memberForm = this.createMemberFormGroup()
    this.memberForm = this.fb.group({
      name: ["", Validators.required],
      last_name: ["", Validators.required],
      email_address: ["", Validators.required],
      phone_number: ["", Validators.required],
    });
  }

  // Step 1
  createMemberFormGroup() {
    return new FormGroup({
      name : new FormControl(),
      last_name : new FormControl(),
      email_address: new FormControl(),
      phone_number: new FormControl()
    })
  }

  onSubmit() {
    // // Make sure to create a deep copy of the form-model
    // const result: ContactRequest = Object.assign({}, this.memberForm.value);
    // result.personalData = Object.assign({}, result.personalData);

    // Do useful stuff with the gathered data
    console.log("result submitted");
  }

  revert() {
    // Resets to blank object
    this.memberForm.reset();    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close({data : this.memberForm.value});
  }

  public onCreateMember(member: Member) {
    console.log(member)
    member.fundraiserID = "75055fa7-b60b-40a7-a0ce-3a5c8199a91f"
    this.api
      .CreateMember(member)
      .then((event) => {
        console.log("Member created!");
        this.memberForm.reset();
        window.location.reload();
      })
      .catch((e) => {
        console.log("Error creating Member...", e);
      });
  }
}

