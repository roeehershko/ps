import {Component, OnInit, OnDestroy, NgZone} from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {Accounts} from 'meteor/accounts-base'
import {Subscription} from 'rxjs';
import { MeteorObservable } from 'meteor-rxjs';

@Component({
    selector: 'app',
    templateUrl: 'app.html'
})
export class AppComponent implements OnInit, OnDestroy {
    //Dynamic title change along with router
    private titleChangeSubscription: Subscription;

    public user = {
        email: '',
        password: ''
    };

    public currentUser: Object;

    constructor(
                private zone:NgZone,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private titleService: Title) {

        this.currentUser = Meteor.user();
    }

    ngOnInit() {

        this.titleChangeSubscription =
            this.router.events
                .filter((event) => event instanceof NavigationEnd)
                .map(() => this.activatedRoute)
                .map((route) => {
                    while (route.firstChild) route = route.firstChild;
                    return route;
                })
                .filter((route) => route.outlet === 'primary')
                .mergeMap((route) => route.data)
                .subscribe((event) => this.titleService.setTitle(event['title']));
    }

    loginUser() {
        let self = this
        Meteor.loginWithPassword(this.user.email, this.user.password, function () {
            self.zone.run(() => {
                console.log(Meteor.user());
                self.currentUser = Meteor.user();
            });
        })
    }

    logoutUser() {
        let self = this
        Meteor.logout(function () {
            self.zone.run(() => {
                self.currentUser = Meteor.user();
            });

        });
    }

    ngOnDestroy() {
        this.titleChangeSubscription.unsubscribe();
    }
}
