import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import {Observer} from "rxjs/Observer";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersObsSubscription: Subscription;
  customObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000).map(
      (data: number) => {
        return data * 2;
      }
    );
    this.numbersObsSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first Package');
      }, 2000);
      setTimeout(() => {
        observer.next('Second Package');
      }, 4000);
      setTimeout(() => {
        //observer.error('this does not work');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('Third Package');
      }, 6000);
    });
    this.customObsSubscription = myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log('Completed');
      }
    );
  }

  ngOnDestroy() {
    this.numbersObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }

}
