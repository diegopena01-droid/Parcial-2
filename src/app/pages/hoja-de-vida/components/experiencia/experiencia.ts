import { Component, input } from '@angular/core';
import { ItemExperiencia } from '../../models/cv.model';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.scss',
})
export class Experiencia {
  experiencias = input.required<ItemExperiencia[]>();
}