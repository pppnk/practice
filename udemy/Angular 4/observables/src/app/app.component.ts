import {Component, OnInit} from '@angular/core';
import {UsersService} from "./users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user1Activated: boolean = false;
  user2Activated: boolean = false;
  constructor(private usersService: UsersService){}

  ngOnInit(){
    this.usersService.userActivated.subscribe(
      (id: number) => {
        if(id === 1){
          this.user1Activated = true;
          this.user2Activated = false;
        } else {
          this.user1Activated = false;
          this.user2Activated = true;
        }
      }
    );
  }
}
