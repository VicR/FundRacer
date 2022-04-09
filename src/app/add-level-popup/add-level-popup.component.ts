import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { formContainer } from 'aws-amplify';
import { format } from 'path';
import { APIService, Level } from "../API.service";

@Component({
  selector: 'app-add-level-popup',
  templateUrl: './add-level-popup.component.html',
  styleUrls: ['./add-level-popup.component.scss']
})
export class AddLevelPopupComponent implements OnInit {
  levelForm: FormGroup
  constructor(public dialogRef: MatDialogRef<AddLevelPopupComponent>, private api: APIService, private fb: FormBuilder) {
    // this.levelForm = this.createLevelFormGroup()
    this.levelForm = this.fb.group({
      amount: ["", Validators.required],
      impact: ["", Validators.required],
      reward: ["", Validators.required],
    });
  }

  createLevelFormGroup() {
    return new FormGroup({
      amount : new FormControl(),
      impact: new FormControl(),
      reward: new FormControl()
    })
  }

  onSubmit() {
    // // Make sure to create a deep copy of the form-model
    // const result: ContactRequest = Object.assign({}, this.levelForm.value);
    // result.personalData = Object.assign({}, result.personalData);

    // Do useful stuff with the gathered data
    console.log("result submitted");
  }

  revert() {
    // Resets to blank object
    this.levelForm.reset();    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close({data : this.levelForm.value});
  }

  public onCreateLevel(level: Level) {
    // console.log(level)
    level.fundraiserID = "75055fa7-b60b-40a7-a0ce-3a5c8199a91f"
    this.api
      .CreateLevel(level)
      .then((event) => {
        console.log("Level created!");
        this.levelForm.reset();
        window.location.reload();
      })
      .catch((e) => {
        console.log("Error creating Level...", e);
      });
  }
}

