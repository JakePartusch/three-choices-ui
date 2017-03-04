import { Component, OnInit } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Http } from '@angular/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private http: Http) {
  }
  name: String = ''
  errorMessage: String = ''
  isSuccessfulSave = false;

  ngOnInit() {
  }

  submit() {
    this.addRestaurant()
           .subscribe(
             response => this.saveSuccess(),
             error =>  this.errorMessage = <any>error);
  }

  saveSuccess() {
    this.name = '';
    this.isSuccessfulSave = true;
    setTimeout(() => {
          this.isSuccessfulSave = false;
    }, 3000);
  }

  addRestaurant() {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      return this.http.post('/restaurants', { "name": this.name }, options);
  }

}
