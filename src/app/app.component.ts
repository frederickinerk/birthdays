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
    this.todayStr = d; //d.toLocaleDateString();
  }
}
