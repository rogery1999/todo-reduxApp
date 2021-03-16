import { ActionReducerMap } from "@ngrx/store";
import { filtroReducer } from './filtro/filtro.reducer';

import { Todo } from "./todos/models/todo.model";
import { todoReducer } from "./todos/todo.reducer";

export interface AppState{
  TODOS: Todo[],
  filtros: string
}

export const appReducers: ActionReducerMap<AppState> = {
  TODOS: todoReducer,
  filtros: filtroReducer
}
