import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { City } from './city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IPD Travel App';
  travelDate:Date;
  isInternational:boolean;
  numOfTravelers:number;
  travelerName:string;

  private cityUrl = 'secure.geobytes.com/AutoCompleteCity?key=7c756203dbb38590a66e01a5a3e1ad96&callback=?&q="'
  private WIKIPEDIA_URL = 'https://en.wikipedia.org/w/api.php';

  constructor(private http: HttpClient) {}

  res;

  getCities() {
    let url = "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/cities.json";

    let cities = this.http.get<City[]>(url);

    // Pass the key for your callback (in this case 'callback')
    // as the second argument to the jsonp method

      console.log(cities);

  }
  getPrice() : number {
    // if international travel, price is 50% more
    let basePrice = this.isInternational ? 150 : 100;
    this.getCities();
    return basePrice * this.numOfTravelers;
  }
}
