import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddValues: any = [];
  evenValues: any = [];

  onAddOdd(element: {currentValue: number}) {
    const me = this;
    me.oddValues.push({value: element.currentValue});
  }

  onAddEven(element: {currentValue: number}) {
    const me = this;
    me.evenValues.push({value: element.currentValue});
  }
}
