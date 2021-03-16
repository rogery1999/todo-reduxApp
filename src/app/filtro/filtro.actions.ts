import { createAction, props } from '@ngrx/store';

export type FiltrosValidos = 'todas' | 'completados' | 'activos';

export const setFiltro = createAction( '[Filtro] Set Filtro', props<{ filtro: string }>() );
