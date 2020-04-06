import { Component, OnInit } from '@angular/core';


import { BirthdayEvent } from "../birthday-event";
import { BirthdaysService } from "../birthdays.service";


@Component({
  selector: 'app-birthdays',
  templateUrl: './birthdays.component.html',
  styleUrls: ['./birthdays.component.css']
})
export class BirthdaysComponent implements OnInit {

  birthdayEvents: BirthdayEvent[];
  memorialEvents: BirthdayEvent[];
  preWeeks = 4;
  postWeeks = 4;
  showMemorial = false;   
  gen_M2 = false;
  gen_M1 = false;
  gen_P0 = false;
  gen_P1 = false;
  gen_P2 = false;
  gen_P3 = true;

  constructor(private birthdaysService: BirthdaysService) { }

  ngOnInit(): void {
    this.getBirthdays();
  }

  setData(birthdayEvents):void {
    var i: number;
    this.birthdayEvents = new Array;
    this.memorialEvents = null;
    for (i=0; i < birthdayEvents.length; i++){
      if (birthdayEvents[i].living == "True")
        this.birthdayEvents.push(birthdayEvents[i])
      else{
        if (this.memorialEvents == null)
          this.memorialEvents = new Array;
        this.memorialEvents.push(birthdayEvents[i])
      }
    }
    //this.birthdayEvents = birthdayEvents;
  }

  getBirthdays(): void {
    this.birthdaysService
      .getBirthdays(this.preWeeks * 7, this.postWeeks * 7, this.showMemorial, this.getGenerationsString())
      .subscribe(birthdayEvents => (this.setData(birthdayEvents)));
  }


  getImageName(bd, living): String {
    if (living == "False")
      return "./assets/images/rip.png";

    if (bd < 0)
      return "./assets/images/cake99.png";
      //return "https://s3-ap-southeast-2.amazonaws.com/higgins.one/birthdays/assets/images/cake99.png";

    //return "https://s3-ap-southeast-2.amazonaws.com/higgins.one/birthdays/assets/images/cake" + bd.toString() + ".png";
    return "./assets/images/cake" + bd.toString() + ".png";
  }

  getBirthdayDescription(bEvent) { 
    if (bEvent.ageAtBirthday == 0){
      if (bEvent.daysAway < 0)
        return `Big welcome to ${bEvent.name} ${(bEvent.daysAway * -1).toString()} days ago.`;
      else if (bEvent.daysAway == 0)
        return `Big welcome to ${bEvent.name} today!`
    }

    if (bEvent.daysAway < 0)
      return `Happy birthday to ${bEvent.name} ${(bEvent.daysAway * -1).toString()} days ago.`;
    else if (bEvent.daysAway == 0)
      return `Happy birthday to ${bEvent.name} today!`
    else
      return `Happy birthday to ${bEvent.name} in ${bEvent.daysAway.toString()} days`
  }

  getMemorialDescription(bEvent) {
    if (bEvent.daysAway < 0)
      return `${(bEvent.daysAway * -1).toString()} days ago`;
    else if (bEvent.daysAway == 0)
      return `Today!`;
    else
      return `In ${bEvent.daysAway.toString()} days time`;
  }


  getGenerationsString() {
    var ret = "";
    if (this.gen_M2)
      ret += "-2,";
    if (this.gen_M1)
      ret += "-1,";
    if (this.gen_P0)
      ret += "0,";
    if (this.gen_P1)
      ret += "1,";
    if (this.gen_P2)
      ret += "2,";
    if (this.gen_P3)
      ret += "3";

    if (ret.endsWith(","))
      ret = ret.substr(0, ret.length - 1)

    return ret;
  }

  onClickRefresh() {
    console.log("Refresh button clicked!");
    this.getBirthdays();
  }

}

//<button mat-fab color="primary">Refresh</button>
//<button mat-button color="primary">Refresh</button>
//<mat-divider [vertical]="true"></mat-divider>

//<br>
//<p>preWeeks = {{preWeeks}} || postWeeks = {{postWeeks}} || showMemorial = {{showMemorial}} || genations =
//  {{getGenerationsString()}}</p>
//<br>