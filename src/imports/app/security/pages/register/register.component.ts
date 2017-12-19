import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from 'rxjs';

import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {MeteorObservable} from 'meteor-rxjs';


@Component({
    selector: 'register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

    public user: {
        email: string,
        password: string,
        profile: {
            name: string,
            phone: string
        }
    };
    ngOnInit() {

    }

    registerUser() {
        let self = this;
        Accounts.createUser(this.user, function (err) {
            console.log(err);
        });
    }

    ngOnDestroy() {

    }
}
