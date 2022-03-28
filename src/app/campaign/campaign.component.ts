import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ThemePalette} from '@angular/material/core';


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
  selectedAllSecondname: any;
  donation_list: any[] = [
    { id : 1,money: 1000.00, impact: 'Baseball equipment' , rewards: 'Tax deductible receipt', selected: false },
    { id : 2,money: 500.00, impact: 'Travel expenses' , rewards: 'Tax deductible receipt', selected: false  },
    { id : 3,money: 250.00, impact: 'Team meals' , rewards: 'Tax deductible receipt' , selected: false },
    { id : 4,money: 500.00, impact: 'Travel expenses' , rewards: 'Tax deductible receipt', selected: false  },
    { id : 5,money: 250.00, impact: 'Team meals' , rewards: 'Tax deductible receipt' , selected: false },
    { id : 6,money: 100.00, impact: 'Team apparel' , rewards: 'Tax deductible receipt' , selected: false },
    { id : 7,money: 50.00, impact: 'New Baseballs' , rewards: 'Tax deductible receipt' , selected: false }
  ];

  about_info : string = "";
  funds_comment : string = ""
  checkbox_value = false
  min_donationamount = 0
  allComplete: boolean = false;

  constructor() { }

  ngOnInit(): void {

    this.about_info = "WE ARE DEEPLY ROOTED IN MOTO—WE’VE BEEN HERE ALL OUR LIVES. Back in 1998 when we turned an underground newspaper into a shiny color magazine, it immediately changed the game with its unprecedented depth of coverage, sense of humor, and access to the sport’s biggest names. Today, our readers know they can go to Racer X Online for all the news, race results, and event coverage they need, and then enjoy even more detail and perspective in the pages of Racer X Illustrated. The mag offers a chance to learn something new on every page and stay connected with the people and personalities that shape our sport—the competitors out on the racetrack, as well as the ones behind the scenes—through our exclusive deep-dive stories and columns."

    this.funds_comment = " Motorsports are expensive; the costs of acquiring one or more vehicles are high, and when the costs of maintenance, fuel, and participation in races are taken into account then things really start to add up. There are cases where the only reason a racer cannot compete is money; that’s where FundRacer comes in. FundRacer will enable racers to have more opportunities by allowing anyone to donate to their team, and it will empower local communities and supporters by giving them the opportunity to allow their favorite racer to travel and participate in more events."
  }

  selectAll() {
    for (var i = 0; i < this.donation_list.length; i++) {
      this.donation_list[i].selected = this.selectedAll;
    }
  }

  checkIfAllSelected() {

    this.selectedAll = this.donation_list.every(function (item: any) {
      return item.selected == true;
    })

  }

 

}
