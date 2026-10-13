import { Component, input } from '@angular/core';
import { Habilidad } from '../../models/cv.model';
@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.html',
  styleUrl: './habilidades.scss',
})
export class Habilidades {
  habilidades = input.required<Habilidad[]>();
}