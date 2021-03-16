import { createReducer, on } from "@ngrx/store";
import { Todo } from "./models/todo.model";
import * as actions from "./todo.actions";

export const estadoInicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Asesinar a dragón'),
  new Todo('Comprar armas')
];

const _todoReducer = createReducer( estadoInicial ,
  on( actions.agregarTodo, (state, {texto}) => [...state, new Todo(texto)] ),
  on( actions.eliminarTodo, (state, {id}) => state.filter( todo => todo.id !== id ) ),
  on( actions.toggleTodo, (state, {id}) => {
    return state.map( todo => {
      if( todo.id === id ){ return { ...todo, completado: !todo.completado, }; }
      else{ return todo; }
    });
  }),
  on( actions.editarTodo, (state, {id, texto}) => {
    return state.map( todo => {
      if( todo.id === id ){ return { ...todo, texto }; }
      else{ return todo; }
    });
  }),
  on( actions.marcarTodos, (state, {completado}) => state.map( todo => { return {...todo, completado} } ) ),
  on( actions.eliminarCompletados, state => state.filter( todo => !todo.completado ) )
);

export function todoReducer( state: any, action: any ){
  return _todoReducer(state, action);
}
