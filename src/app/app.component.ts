import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Higgins Clan Birthdays';
  todayStr;

  ngOnInit() {
    var d = new Date();
    var str: string;

    str = d.toISOString()//d.toLocaleDateString(Intl.DateTimeFormat)
    this.todayStr = str; //d.toLocaleDateString();
  }
}
