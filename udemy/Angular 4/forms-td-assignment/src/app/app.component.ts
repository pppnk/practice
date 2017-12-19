import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('userForm') userForm: NgForm;
  formValues;
  subscriptions: string[] = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription: string = this.subscriptions[1];

  onSubmit(){
    this.formValues = this.userForm.form.value;
    this.userForm.form.reset();
  }

}
