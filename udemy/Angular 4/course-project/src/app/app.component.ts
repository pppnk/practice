import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCmgtc_8Q8xjb0vimTZTeE6h9VSqxPvK48",
      authDomain: "ng-recipe-book-786bc.firebaseapp.com"
    });
  }
}
