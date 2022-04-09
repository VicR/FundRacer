import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddLevelPopupComponent } from '../add-level-popup/add-level-popup.component';
import { APIService, Fundraiser, Donation } from "../API.service";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Auth } from 'aws-amplify';
import { Hub } from 'aws-amplify';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}
@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {  
  selectedAll: any;
  public level_list: any[] = [];
  about_info : string = "";
  funds_comment : string = "";
  public total_donation_amount = 0;
  public current_user;
  public user_role: string;
  public fundraiser_id: string;
  public donateForm: FormGroup;
  public fundraisers: Array<Fundraiser> = [];
  public days_remaining: string;

  constructor(public dialog: MatDialog, private api: APIService, private fb: FormBuilder) {
    Hub.listen('auth', (data) => {
      const { payload } = data;
      this.onAuthEvent(payload);
      // console.log('A new auth event has happened: ', data.payload.data.username + ' has ' + data.payload.event);
    })
    this.donateForm = this.fb.group({
      donor_name: ["", Validators.required],
      donor_email: ["", Validators.required],
      amount: ["", Validators.required],
    });
  }

  // public levels: Array<Level> = [];
  ngOnInit(): void {
    this.about_info = "WE ARE DEEPLY ROOTED IN MOTO—WE’VE BEEN HERE ALL OUR LIVES. Back in 1998 when we turned an underground newspaper into a shiny color magazine, it immediately changed the game with its unprecedented depth of coverage, sense of humor, and access to the sport’s biggest names. Today, our readers know they can go to Racer X Online for all the news, race results, and event coverage they need, and then enjoy even more detail and perspective in the pages of Racer X Illustrated. The mag offers a chance to learn something new on every page and stay connected with the people and personalities that shape our sport—the competitors out on the racetrack, as well as the ones behind the scenes—through our exclusive deep-dive stories and columns."
    this.funds_comment = " Motorsports are expensive; the costs of acquiring one or more vehicles are high, and when the costs of maintenance, fuel, and participation in races are taken into account then things really start to add up. There are cases where the only reason a racer cannot compete is money; that’s where FundRacer comes in. FundRacer will enable racers to have more opportunities by allowing anyone to donate to their team, and it will empower local communities and supporters by giving them the opportunity to allow their favorite racer to travel and participate in more events."

    // Get Cognito User data
    Auth.currentAuthenticatedUser({
      bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then((user) => {
      console.log(user)
      this.current_user = user;
      this.user_role = user.signInUserSession.accessToken.payload["cognito:groups"][0]
    }).catch(err => console.log(err));

    // Get list of Fundraisers
    this.api.ListFundraisers().then(event => {
      this.fundraisers = event.items as Fundraiser[];
      if (this.fundraisers.length > 0) {
        this.days_remaining = this.getRemainigDays(this.fundraisers[0].end_date)
        this.fundraiser_id = this.fundraisers[0].id
      }
    });

    // Get list of Donation Levels
    this.api.ListLevels().then(event => {
      event.items.forEach(element => {
        this.level_list.push({
          id: element!.id,
          money: element!.amount,
          impact: element!.impact,
          rewards: element!.reward,
          selected: false
        });
      });
      this.level_list.sort((a, b) => a.money - b.money);
    });

    // Get list of Donations from other Users
    this.api.ListDonations().then(event => {
      event.items.forEach(element => {
        this.total_donation_amount += element!.amount
      });
    });
  }

  onAuthEvent(payload) {
    if (payload.event == 'signIn') {
      window.location.reload();
    }
  }

  getRemainigDays(end_date) {
    const today = new Date();
    const end = new Date(end_date);
    const time_diff = end.getTime() - today.getTime();
    var day_diff = Math.ceil(time_diff / (1000 * 3600 * 24));
    var text = day_diff + " days remaining";
    if (day_diff <= 0) {
      text = "Fundraiser has ended";
    }
    return text;
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddLevelPopupComponent, {
      width: '700px'
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result.data != "") {
    //     let obj = result.data;
    //     console.log(obj.first_name)
    //     this.level_list.push({
    //       money: obj!.amount,
    //       impact: obj!.impact,
    //       rewards: obj!.reward,
    //     })
    //   }
    // });
  }

  public onDonate(donation: Donation) {
  // public onDonate(donation) {
    console.log("Donating...." + donation.amount);
    donation.fundraiserID = this.fundraisers[0].id;
    donation.donorID = this.current_user.attributes.sub
    const dono_date = new Date;
    donation.donation_date = dono_date.toISOString();
    this.api
      .CreateDonation(donation)
      .then((event) => {
        console.log("Donation created!");
        this.donateForm.reset();
        window.location.reload();
      })
      .catch((e) => {
        console.log("Error creating Donation...", e);
      });
  }

}
