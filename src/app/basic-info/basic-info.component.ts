import { Component, OnInit, Input } from '@angular/core';
import { APIService, Fundraiser } from "../API.service";
import { FormBuilder,FormControl, FormGroup, Validators } from "@angular/forms";
import { Auth } from 'aws-amplify';

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
  public current_user;
  public user_role: string;
  // private subscription: Subscription | null = null;

  /* declare fundraisers variable */
  // public fundraisers: Array<Fundraiser> = [];
  @Input() fundraisers: Array<Fundraiser>;
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

  async ngOnInit() {

    // Get Cognito User data
    Auth.currentAuthenticatedUser({
      bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then((user) => {
      console.log(user)
      this.current_user = user;
      this.user_role = user.signInUserSession.accessToken.payload["cognito:groups"][0]
    }).catch(err => console.log(err));
    /* fetch fundraisers when app loads */
    // this.api.ListFundraisers().then(event => {
    //   this.fundraisers = event.items as Fundraiser[];
    // });

    /* subscribe to new fundraisers being created */
    // this.subscription = <Subscription>(
    //   this.api.OnCreateFundraiserListener.subscribe((event: any) => {
    //     const newFundraiser = event.value.data.onCreateFundraiser;
    //     this.fundraisers = [newFundraiser, ...this.fundraisers];
    //   })
    // );
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
