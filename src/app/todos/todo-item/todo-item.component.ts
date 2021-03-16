import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import * as actions from '../todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @ViewChild('inputFisico') txtInputFisico!: ElementRef;
  @Input('data') todo!: Todo;
  checkBox!: FormControl;
  txtInput!: FormControl;
  editando = false;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.checkBox = this.fb.control( this.todo.completado );
    this.txtInput = this.fb.control( this.todo.texto , [ Validators.required ] )

    this.checkBox.valueChanges.subscribe( (value) => this.store.dispatch( actions.toggleTodo({ id: this.todo.id }) ) );
  }

  eliminarTodo(){
    this.store.dispatch( actions.eliminarTodo({id: this.todo.id}) );
  }

  editar(){
      this.editando = true;
      this.txtInput.setValue( this.todo.texto );
      setTimeout(() => {
        this.txtInputFisico.nativeElement.select();
      }, 1);
  }

  terminarEdicion(){
    this.editando = false;
    if( this.txtInput.invalid ) { return; }
    if( this.txtInput.value === this.todo.texto ) { return; }
    this.store.dispatch( actions.editarTodo( {id: this.todo.id, texto: this.txtInput.value} ) )
  }
}
