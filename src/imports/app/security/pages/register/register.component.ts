import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';


@Component({
  selector: 'register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  public register: { email: string, password: string };
  ngOnInit() {}

  registerUser() {
      let self = this;
      // Meteor.registerWithPassword(this.register.email, this.register.password, function (err) {
      //     console.log(err);
      //     console.log(Meteor.user());
      // })
  }

  ngOnDestroy() {

  }
}
