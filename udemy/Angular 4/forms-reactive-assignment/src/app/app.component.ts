import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  statuses: string[] = ['Stable', 'Critical', 'Finished'];
  projectForm: FormGroup;

  ngOnInit(){
    this.projectForm = new FormGroup({
      //'name': new FormControl(null, [Validators.required, this.checkName.bind(this)]),
      'name': new FormControl(null, [Validators.required], this.checkNameAsync.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl(this.statuses[0], Validators.required)
    });
  }

  checkName(control: FormControl): {[s: string]: boolean}{
    if(control.value === 'Test'){
      return { 'nameForbidden': true };
    }
    return null;
  }

  checkNameAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'Test'){
          resolve({ 'nameForbidden': true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

}
