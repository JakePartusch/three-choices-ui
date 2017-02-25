import { Component, OnInit } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor (private http: Http) {
  }

  hideInitialButton = false;
  restaurants = [];

  fetchChoices () {
    this.hideInitialButton = true;
    this.getRestaurants().subscribe(
       restaurants => this.restaurants = restaurants, //Bind to view
        err => {
            // Log errors if any
            console.log(err);
        });
  }

  getRestaurants () {
    return this.http.get("/restaurants/choices")
                    .map(this.extractData);
  }
  private extractData(res: Response) {
    return res.json();
  }

  ngOnInit() {
  }

}
