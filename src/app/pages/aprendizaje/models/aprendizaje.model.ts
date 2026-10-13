export type CategoriaTema = 'JavaScript' | 'Angular' | 'Bootstrap' | 'Git';

export interface Tema {
  id: number;
  titulo: string;
  descripcion: string;
  categoria: CategoriaTema;
  conocimientos: string[];
}

export interface Tecnologia {
  nombre: string;
  uso: string;
}

export interface Proyecto {
  nombre: string;
  tipo: 'Taller' | 'Proyecto' | 'Parcial';
  descripcion: string;
  tecnologias: string[];
  enPareja: boolean;
}