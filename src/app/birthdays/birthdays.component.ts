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
  preWeeks = 4;
  postWeeks = 1;
  onlyLiving = true;
  gen_M1 = true;
  gen_P0 = true;
  gen_P1 = true;
  gen_P2 = true;
  gen_P3 = true;

  constructor(private birthdaysService: BirthdaysService) { }

  ngOnInit(): void {
    this.getBirthdays();
  }

  getBirthdays(): void {
    this.birthdaysService
      .getBirthdays(this.preWeeks * 7, this.postWeeks * 7, !this.onlyLiving, this.getGenerationsString())
      .subscribe(birthdayEvents => (this.birthdayEvents = birthdayEvents));
  }


  getImageName(bd, living): String {
    if (living == "False")
      return "./assets/images/rip.png";

    if (bd < 0)
      //return "./assets/images/cake99.png";
      return "https://s3-ap-southeast-2.amazonaws.com/higgins.one/birthdays/assets/images/cake99.png";

      return "https://s3-ap-southeast-2.amazonaws.com/higgins.one/birthdays/assets/images/cake" + bd.toString() + ".png";
    //return "./assets/images/cake" + bd.toString() + ".png";
  }

  getBirthdayDescription(bEvent) {     //ageAtBirthday,
    var sexDesc:  String;

    if (bEvent.living == "False") {
      sexDesc = (bEvent.birthSex == "Male") ? "He" : "She";
      if (bEvent.daysAway < 0)
        return `It was been happy birthday to ${bEvent.name} ${(bEvent.daysAway * -1).toString()} ago.  ${sexDesc} would have turned ${bEvent.ageAtBirthday}`;
      else if (bEvent.daysAway == 0)
        return `It would have been happy birthday to ${bEvent.name} today!. They would have turned ${bEvent.ageAtBirthday}`
      else
        return `It would have been  happy birthday to ${bEvent.name} in ${bEvent.daysAway.toString()} days time. ${sexDesc} would have turned ${bEvent.ageAtBirthday}`
    }
    //if (ageAtBirthday == -1)
    //  return `${name} is having a birthday in ${daysAway.toString()} days time!`;


    if (bEvent.daysAway < 0)
      return `It was happy birthday to ${bEvent.name} ${(bEvent.daysAway * -1).toString()} ago.`;
    else if (bEvent.daysAway == 0)
      return `It's happy birthday to ${bEvent.name} today!`
    else
      return `It is happy birthday to ${bEvent.name} in ${bEvent.daysAway.toString()} days time`
  }

  getGenerationsString() {
    var ret = "";
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

  getBirthdayTableStyle(bEvent) {
    if (bEvent.living == "False") {
      return "dead";
    }
    else {
      return "living"
    }
  }

}

//<button mat-fab color="primary">Refresh</button>
//<button mat-button color="primary">Refresh</button>
