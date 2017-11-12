import {Component, OnInit, ViewEncapsulation, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() evenIncrement = new EventEmitter<{currentValue: number}>();
  @Output() oddIncrement = new EventEmitter<{currentValue: number}>();

  status: string = '';
  counter: number = 0;
  interval;

  constructor() { }

  ngOnInit() {
    const me = this;
    me.status = 'Stopped';
  }

  startGame() {
    const me = this;
    me.interval = setInterval(function(){
      me.counter++;
      if(me.counter % 2 === 0){
        me.evenIncrement.emit({currentValue: me.counter});
      } else {
        me.oddIncrement.emit({currentValue: me.counter});
      }
      me.status = 'Started ' + me.counter;
    }, 1000);
  }

  stopGame() {
    const me = this;
    clearInterval(me.interval);
    me.status = 'Stopped';
  }

}
