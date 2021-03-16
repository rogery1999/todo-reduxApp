import { Action, createReducer, on } from "@ngrx/store";
import { setFiltro } from "./filtro.actions";

export const initState: string = 'todas';

const _filtroReducer = createReducer( initState,
  on( setFiltro, (state, {filtro}) => filtro )
);

export function filtroReducer(state: any, action: Action){
  return _filtroReducer(state, action);
};
