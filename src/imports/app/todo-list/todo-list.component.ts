import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';

import { Todos } from '../../collections/todos';
import { Todo } from '../../models/todo';

@Component({
  selector: 'todo-list',
  templateUrl: 'todo-list.html',
  styleUrls: ['todo-list.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {
  todos: Observable<Todo[]>;
  todoListSubscription: Subscription;
  ngOnInit() {
    this.todos = Todos.find();
    this.todoListSubscription = MeteorObservable.subscribe('todoList').subscribe();
  }
  ngOnDestroy() {
    if (this.todoListSubscription)
      this.todoListSubscription.unsubscribe();
  }
  removeTodo(_id: string) {
    Meteor.call('removeTodo', _id);
  }
}
