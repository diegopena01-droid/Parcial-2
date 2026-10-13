export interface PerfilPersonal {
  nombre: string;
  titulo: string;
  descripcion: string;
}

export interface InfoContacto {
  correo: string;
  telefono: string;
  ciudad: string;
  github?: string;
  linkedin?: string;
}

export interface Estudio {
  institucion: string;
  titulo: string;
  periodo: string;
  descripcion?: string;
}

export interface Habilidad {
  nombre: string;
  nivel: number; // de 0 a 100
  categoria: 'Frontend' | 'Backend' | 'Bases de datos' | 'Herramientas';
}

export interface ItemExperiencia {
  titulo: string;
  lugar: string;
  periodo: string;
  descripcion: string;
  tecnologias: string[];
}