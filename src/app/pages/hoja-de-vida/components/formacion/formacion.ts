import { Component, input } from '@angular/core';
import { Estudio } from '../../models/cv.model';
@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.html',
  styleUrl: './formacion.scss',
})
export class Formacion {
  estudios = input.required<Estudio[]>();
}