import { Component } from '@angular/core';
import { Videojuego } from './components/videojuego';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-tema-libre',
  standalone: true,
  imports: [NgClass],
  templateUrl: './tema-libre.html',
  styleUrl: './tema-libre.scss'
})
export class TemaLibre {

  generoSeleccionado = 'Todos';

  generos: string[] = [
    'Todos',
    'Acción',
    'Aventura',
    'Deportes',
    'Estrategia'
  ];

  videojuegos: Videojuego[] = [
    {
      titulo: 'God of War Ragnarök',
      genero: 'Acción',
      plataforma: 'PlayStation',
      descripcion: 'Una aventura épica de Kratos y Atreus a través de los nueve reinos de la mitología nórdica.',
      anio: 2022,
      calificacion: 9.5,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcAXWrJxS5qefKMZNEVlYXgEF6AOJjZ-VSMJdspzhQkQ&s=10'
    },
    {
      titulo: 'The Legend of Zelda: Tears of the Kingdom',
      genero: 'Aventura',
      plataforma: 'Nintendo Switch',
      descripcion: 'Explora Hyrule, resuelve acertijos y descubre nuevas posibilidades en un mundo abierto.',
      anio: 2023,
      calificacion: 9.7,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfMT757CnvYMTGDHudLE7SBO7IhOfN0G1PFTzQBHuPg&s=10'
    },
    {
      titulo: 'EA Sports FC 25',
      genero: 'Deportes',
      plataforma: 'PC y consolas',
      descripcion: 'Disfruta del fútbol, crea tu equipo y compite en diferentes modos de juego.',
      anio: 2024,
      calificacion: 8.2,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_LE7xu8r1hQMG1Udc0Hr7EQzK3XRBCwsgo3ykQqN7Bg&s=10'
    },
    {
      titulo: 'Minecraft',
      genero: 'Aventura',
      plataforma: 'PC, consolas y móvil',
      descripcion: 'Construye, explora y sobrevive en mundos creados con bloques y posibilidades ilimitadas.',
      anio: 2011,
      calificacion: 9.0,
       imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxSWY09KoIyQBaLED7rxd90jrO07aGgMplXKBBgzBsVg&s=10'
    },
    {
      titulo: 'Age of Empires IV',
      genero: 'Estrategia',
      plataforma: 'PC y Xbox',
      descripcion: 'Construye civilizaciones, administra recursos y dirige ejércitos a través de la historia.',
      anio: 2021,
      calificacion: 8.5,
       imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ZyydfMm_p1qCEmB7BzhhbYJ2JOEhN0d9rYt058k8_A&s=10'
    },
    {
      titulo: 'Grand Theft Auto V',
      genero: 'Acción',
      plataforma: 'PC y consolas',
      descripcion: 'Explora una ciudad abierta y descubre las historias de sus protagonistas.',
      anio: 2013,
      calificacion: 9.0,
       imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRBC0CPOQv1JgYKzcxNUmEHYdOK4-LBCen11ks3gLrjA&s=10'
    }
  ];

  get videojuegosFiltrados(): Videojuego[] {
    if (this.generoSeleccionado === 'Todos') {
      return this.videojuegos;
    }

    return this.videojuegos.filter(
      videojuego => videojuego.genero === this.generoSeleccionado
    );
  }

  seleccionarGenero(genero: string): void {
    this.generoSeleccionado = genero;
  }
}