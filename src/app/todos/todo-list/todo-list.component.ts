import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';
import { FiltrosValidos } from 'src/app/filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  filtro: string = 'todas';
  todos: Todo[] = [];

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store
      .subscribe( ({TODOS, filtros}) =>  {
        this.todos = TODOS;
        this.filtro = filtros;
      });
  }

}
