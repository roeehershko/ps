import {Component, OnInit, OnDestroy, NgZone} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {Subscription} from 'rxjs';
import { MeteorObservable } from 'meteor-rxjs';
import { Tracker } from 'meteor/tracker';

@Component({
    selector: 'app',
    templateUrl: 'app.html'
})
export class AppComponent implements OnInit, OnDestroy {

    public autorunComputation: Tracker.Computation;
    public user = {
        email: 'royh@affilomania.com',
        password: '123456'
    };

    currentUser: Meteor.User;
    currentUserId: string;
    isLoggingIn: boolean;
    isLoggedIn: boolean;

    constructor(
                private zone:NgZone,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private titleService: Title) {

        this._initAutorun();
    }

    ngOnInit() {
        MeteorObservable.subscribe('userData').subscribe();
    }

    loginUser() {
        let self = this;
        Meteor.loginWithPassword(this.user.email, this.user.password, function () {
            self.currentUser = Meteor.user();
        })
    }

    logoutUser() {
        let self = this
        Meteor.logout(function () {
            self.currentUser = Meteor.user();
        });
    }

    forgotPass() {
    }
    _initAutorun(): void {
        this.autorunComputation = Tracker.autorun(() => {
            this.zone.run(() => {
                this.currentUser = Meteor.user();
                this.currentUserId = Meteor.userId();
                this.isLoggingIn = Meteor.loggingIn();
                this.isLoggedIn = !!Meteor.user();
            })
        });
    }

    ngOnDestroy() {}
}
