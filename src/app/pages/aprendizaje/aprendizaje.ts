import { Component, computed, signal } from '@angular/core';
import { TarjetaTema } from './components/tarjeta-tema/tarjeta-tema';
import { CategoriaTema } from './models/aprendizaje.model';
import { TEMAS, TECNOLOGIAS, PROYECTOS } from './data/aprendizaje.data';

@Component({
  selector: 'app-aprendizaje',
  imports: [TarjetaTema],
  templateUrl: './aprendizaje.html',
  styleUrl: './aprendizaje.scss',
})
export class Aprendizaje {
  temas = TEMAS;
  tecnologias = TECNOLOGIAS;
  proyectos = PROYECTOS;

  categorias: ('Todas' | CategoriaTema)[] = ['Todas', 'JavaScript', 'Angular', 'Bootstrap', 'Git'];

  categoriaSeleccionada = signal<'Todas' | CategoriaTema>('Todas');

  temasFiltrados = computed(() => {
    const categoria = this.categoriaSeleccionada();
    if (categoria === 'Todas') {
      return this.temas;
    }
    return this.temas.filter((tema) => tema.categoria === categoria);
  });

  seleccionar(categoria: 'Todas' | CategoriaTema) {
    this.categoriaSeleccionada.set(categoria);
  }
}