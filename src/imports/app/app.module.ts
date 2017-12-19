import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {SecurityModule} from './security/security.module';

import {AppComponent} from './app.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoAddComponent} from './todo-add/todo-add.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

@NgModule({
    imports: [
        // Transition between server and client
        BrowserModule.withServerTransition({
            appId: 'angular-meteor-universal'
        }),
        FormsModule,
        SecurityModule,
        NgbModule.forRoot(),
        RouterModule.forRoot([
            {
                path: 'todoList',
                component: TodoListComponent,
                data: {
                    title: 'Todo List'
                }
            },
            {
                path: 'todoAdd',
                component: TodoAddComponent,
                data: {
                    title: 'Add Todo'
                }
            },
            {
                path: '',
                redirectTo: '/todoList',
                pathMatch: 'full'
            },
            {
                path: '**',
                component: PageNotFoundComponent,
                data: {
                    title: '404 Page Not Found'
                }
            }
        ])
    ],
    declarations: [
        AppComponent,
        TodoListComponent,
        TodoAddComponent,
        PageNotFoundComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
