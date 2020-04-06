import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { BirthdaysComponent } from './birthdays/birthdays.component';

import { BirthdaysService } from './birthdays.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { MatDividerModule } from '@angular/material/divider';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    AppComponent,
    BirthdaysComponent
  ],
  imports: [
    FormsModule,
    BrowserModule, HttpClientModule, BrowserAnimationsModule, 
    MatButtonModule, MatCardModule, MatDividerModule, MatCheckboxModule, MatSliderModule
  ],
  providers: [BirthdaysService],
  bootstrap: [AppComponent]
})
export class AppModule { }
