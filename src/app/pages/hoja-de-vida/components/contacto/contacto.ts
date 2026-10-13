import { Component, input } from '@angular/core';
import { InfoContacto } from '../../models/cv.model';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss',
})
export class Contacto {
  datos = input.required<InfoContacto>();
}