import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from "@angular/forms";
import { APIService, Fundraiser } from "./API.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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

  // public onCreate(fundraiser: Fundraiser) {
  //   this.api
  //     .CreateFundraiser(fundraiser)
  //     .then((event) => {
  //       console.log("Fundraiser created!");
  //       this.createForm.reset();
  //     })
  //     .catch((e) => {
  //       console.log("Error creating Fundraiser...", e);
  //     });
  // }

  // ngOnDestroy() {
  //   if (this.subscription) {
  //     this.subscription.unsubscribe();
  //   }
  //   this.subscription = null;
  // }
}