import { Component } from '@angular/core';
import { Perfil } from './components/perfil/perfil';
import { Contacto } from './components/contacto/contacto';
import { Formacion } from './components/formacion/formacion';
import { Habilidades } from './components/habilidades/habilidades';
import { Experiencia } from './components/experiencia/experiencia';
import { PERFIL, CONTACTO, ESTUDIOS, HABILIDADES, EXPERIENCIAS } from './data/cv.data';

@Component({
  selector: 'app-hoja-de-vida',
  imports: [Perfil, Contacto, Formacion, Habilidades, Experiencia],
  templateUrl: './hoja-de-vida.html',
  styleUrl: './hoja-de-vida.scss',
})
export class HojaDeVida {
  perfil = PERFIL;
  contacto = CONTACTO;
  estudios = ESTUDIOS;
  habilidades = HABILIDADES;
  experiencias = EXPERIENCIAS;
}