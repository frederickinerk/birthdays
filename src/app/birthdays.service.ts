// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class BirthdaysService {

//   constructor() { }
// }

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { BirthdayEvent } from "./birthday-event";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable()
export class BirthdaysService {
  //private birthdayUrl = "https://www.mocky.io/v2/5e621af230000072004d574d";
  //private birthdayUrl = "http://www.mocky.io/v2/5e69de0b2d00005c005f9e25";
  //private birthdayUrl = "http://www.mocky.io/v2/5e69e0232d000076005f9e34";
  private birthdayUrl = "http://www.mocky.io/v2/5e75d9af2f00006b00985f30";

  constructor(private http: HttpClient) {}

   /** GET Birthdays List. Will 404 (BLAH bring back) if id not found */

  //  "daysBefore": "21",
  //  "daysAfter":  "14",
  //  "allFlag": "True",
  //  "generations": "2,3"


    getBirthdays(daysBefore, daysAfter, allFlag, generations): Observable<BirthdayEvent[]> {
      const url = `${this.birthdayUrl}?daysBefore=${daysBefore}&daysAfter=${daysAfter}&allflag=${allFlag}&generations="${generations}"`;
      console.log("getBirthdays: URL = " + url)
      return this.http.get<BirthdayEvent[]>(url)

    // const url = `${this.birthdayUrl}?fake=${"XX"}`;
    // return this.http.get<BirthdayEvent[]>(url).pipe(
    //   tap(_ => this.log(`fetched birthdays`)),
    //   catchError(this.handleError<BirthdayEvent>(`getBirthdays`))
    // );

  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a ElecDetailService message with the MessageService */
  private log(message: string) {
    //this.messageService.add('ElecDetailService: ' + message);
  }
              
}
