import { Component, OnInit } from '@angular/core';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  operationsPerformed: {count: number};

  constructor(private userService: UserService){}

  ngOnInit(){
    this.operationsPerformed = this.userService.operationsPerformed;
  }
}
