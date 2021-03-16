import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from 'src/app/filtro/filtro.actions';
import { eliminarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: string = 'todas';
  filtros: actions.FiltrosValidos[] = ['todas', 'activos', 'completados' ];
  pendientes: number = 0;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    // this.store.select('filtros').subscribe( filtro => this.filtroActual = filtro );
    // this.store.select('TODOS').subscribe( todos => {
    //   let activos = 0;
    //   todos.forEach( ({completado}) => { if(!completado){ activos++; } } );
    //   this.pendientes = activos;
    // });

    this.store.subscribe( state => {
      this.filtroActual = state.filtros;
      this.pendientes = state.TODOS.filter( todo => !todo.completado ).length;
    });
  }

  filtroSeleccionado( filtro: actions.FiltrosValidos ){
    if( this.filtroActual === filtro ) { return }
    this.store.dispatch( actions.setFiltro({filtro}) );
  }

  limpiarCompletados(){
    this.store.dispatch( eliminarCompletados() );
  }
}
