import { Component, input } from '@angular/core';
import { PerfilPersonal } from '../../models/cv.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.html',
  styleUrl: './perfil.scss',
})
export class Perfil {
  datos = input.required<PerfilPersonal>();
}