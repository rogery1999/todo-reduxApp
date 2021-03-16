import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { agregarTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {

  inputForm: FormControl = this.fb.control( '' , [ Validators.required, Validators.minLength(5) ]);

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) { }

  agregarTodo(){
    if(this.inputForm.invalid) { return }
    this.store.dispatch( agregarTodo({texto: this.inputForm.value}) );
    this.inputForm.reset();
  }
}
