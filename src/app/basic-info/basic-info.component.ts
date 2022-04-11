import { Component, OnInit, Input } from '@angular/core';
import { APIService, Fundraiser } from "../API.service";
import { FormBuilder,FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {

  startDate = new Date(2022, 3, 1);
  endDate = new Date(2022, 4, 1)
  title = "FundRacer";
  public fundraiserForm: FormGroup;
  // private subscription: Subscription | null = null;
  
  /* declare fundraisers variable */
  // public fundraisers: Array<Fundraiser> = [];
  @Input() fundraisers: Array<Fundraiser>;
  @Input() user_role: string;
  @Input() user;

  constructor(private api: APIService, private fb: FormBuilder) {
    this.fundraiserForm = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      start_date: ["", Validators.required],
      end_date: ["", Validators.required],
      goal: ["", Validators.required],
    });
  }

  ngOnInit() {
  }

  public onCreateFundraiser(fundraiser: Fundraiser) {
    console.log('creating fundraiser: ', fundraiser)
    fundraiser.creatorID = this.user.attributes.sub
    this.api
      .CreateFundraiser(fundraiser)
      .then((event) => {
        console.log("Fundraiser created!");
        this.fundraiserForm.reset();
        window.location.reload();
      })
      .catch((e) => {
        console.log("Error creating Fundraiser...", e);
      });
  }

}
