import { Component } from '@angular/core';
import { IVeicolo } from './interfaces/IVeicolo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-esercizio-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './esercizio-2.component.html',
  styleUrl: './esercizio-2.component.scss',
})
export class Esercizio2Component {
  attivo: boolean = true;
  veicoli: IVeicolo[] = [
    {
      targa: 'A100',
      colore: 'rosso',
      marca: 'ferrari',
      numeroPosti: 5,
      numeroRuote: 4,
    },
    {
      targa: 'B700',
      colore: 'blu',
      marca: 'mercedes',
      numeroPosti: 10,
      numeroRuote: 6,
    },
  ];
}
