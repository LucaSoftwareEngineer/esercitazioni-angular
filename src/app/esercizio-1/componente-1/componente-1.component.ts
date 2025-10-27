import { Component } from '@angular/core';
import { Componente2Component } from '../componente-2/componente-2.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente-1',
  standalone: true,
  imports: [Componente2Component, CommonModule, FormsModule],
  templateUrl: './componente-1.component.html',
  styleUrl: './componente-1.component.scss',
})
export class Componente1Component {
  nome = '';
}
