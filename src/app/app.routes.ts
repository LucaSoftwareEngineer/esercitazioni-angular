import { Routes } from '@angular/router';
import { Componente1Component } from './esercizio-1/componente-1/componente-1.component';
import { Esercizio2Component } from './esercizio-2/esercizio-2.component';

export const routes: Routes = [
  { path: 'esercizi/1', component: Componente1Component },
  { path: 'esercizi/2', component: Esercizio2Component },
];
