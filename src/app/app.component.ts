import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Birthdays';
  todayStr;

  ngOnInit() {
    var d = new Date();
    var str: string;

    str = d.toLocaleDateString();
    this.todayStr = str; 
  }

  getImageName(){
    return("./assets/images/Banner.png")

    //<img src="https://s3-ap-southeast-2.amazonaws.com/higgins.one/birthdays/assets/images/Banner.png" alt="banner">
  }
}
