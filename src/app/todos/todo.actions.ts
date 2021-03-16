import { createAction, props } from "@ngrx/store";
import { Todo } from './models/todo.model';

export const agregarTodo = createAction(
  '[TODO] Crear Todo',
  props<{ texto: string }>()
  );
export const eliminarTodo = createAction(
  '[TODO] Eliminar Todo',
  props<{ id: number }>()
);
export const toggleTodo = createAction(
  '[TODO] Toggle Todo',
  props<{ id: number }>()
);
export const editarTodo = createAction(
  '[TODO] Editar Todo',
  props<{ id: number, texto: string }>()
);
export const marcarTodos = createAction(
  '[TODO] Marcar Todos',
  props<{ completado: boolean }>()
)
export const eliminarCompletados = createAction(
  '[TODO] Eliminar Todos Compleatos'
)
