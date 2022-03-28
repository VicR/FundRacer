import { Component, OnInit } from '@angular/core';
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
  public createForm: FormGroup;
  // private subscription: Subscription | null = null;

  /* declare fundraisers variable */
  public fundraisers: Array<Fundraiser> = [];

  constructor(private api: APIService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      start_date: ["", Validators.required],
      end_date: ["", Validators.required],
      goal: ["", Validators.required],
    });
  }

  async ngOnInit() {
    /* fetch fundraisers when app loads */
    this.api.ListFundraisers().then(event => {
      this.fundraisers = event.items as Fundraiser[];
    });

    /* subscribe to new fundraisers being created */
    // this.subscription = <Subscription>(
    //   this.api.OnCreateFundraiserListener.subscribe((event: any) => {
    //     const newFundraiser = event.value.data.onCreateFundraiser;
    //     this.fundraisers = [newFundraiser, ...this.fundraisers];
    //   })
    // );
  }

  public onCreate(fundraiser: Fundraiser) {
    this.api
      .CreateFundraiser(fundraiser)
      .then((event) => {
        console.log("Fundraiser created!");
        this.createForm.reset();
      })
      .catch((e) => {
        console.log("Error creating Fundraiser...", e);
      });
  }

}
