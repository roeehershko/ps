import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';


@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public login: { email: string, password: string };
  ngOnInit() {}

  loginUser() {
      let self = this;
      Meteor.loginWithPassword(this.login.email, this.login.password, function (err) {
          console.log(err);
          console.log(Meteor.user());
      })
  }

  ngOnDestroy() {

  }
}
