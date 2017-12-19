import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {SecurityComponent} from "./layout/security.layout";

@NgModule({
    imports: [
        FormsModule,
        RouterModule.forRoot([
            {
                path: 'auth',
                component: SecurityComponent,
                children: [
                    {
                        path: 'login',
                        component: LoginComponent
                    },
                    {
                        path: 'register',
                        component: RegisterComponent
                    }
                ]
            }
        ])
    ],
    declarations: [
        SecurityComponent,
        LoginComponent,
        RegisterComponent
    ]
})
export class SecurityModule {

}
