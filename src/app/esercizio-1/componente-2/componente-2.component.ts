import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componente-2',
  standalone: true,
  imports: [],
  templateUrl: './componente-2.component.html',
  styleUrl: './componente-2.component.scss',
})
export class Componente2Component {
  @Input('propNome') propNome = '';
}
