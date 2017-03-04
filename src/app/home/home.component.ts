import { Component, OnInit } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor (private http: Http, private router: Router,) {
  }

  hideInitialButton = false;
  restaurants = [];
  selectedRestaurant : {_id};

  fetchChoices () {
    this.hideInitialButton = true;
    this.getRestaurants().subscribe(
       restaurants => this.restaurants = restaurants, //Bind to view
        err => {
            // Log errors if any
            console.log(err);
        });
  }

  selectRestaurant(restaurant) {
    this.selectedRestaurant = restaurant;
    console.log(restaurant);
  }

  keepRestaurant() {
    this.hideInitialButton = false;
  }

  deleteRestaurant() {
    return this.http.delete("/restaurants/" + this.selectedRestaurant._id)
                    .subscribe(result => this.hideInitialButton = false);
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
