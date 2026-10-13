import { Component, input } from '@angular/core';
import { Tema } from '../../models/aprendizaje.model';

@Component({
  selector: 'app-tarjeta-tema',
  templateUrl: './tarjeta-tema.html',
  styleUrl: './tarjeta-tema.scss',
})
export class TarjetaTema {
  tema = input.required<Tema>();
}