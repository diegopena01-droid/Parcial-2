import {
  PerfilPersonal,
  InfoContacto,
  Estudio,
  Habilidad,
  ItemExperiencia,
} from '../models/cv.model';

export const PERFIL: PerfilPersonal = {
  nombre: 'Diego Alejandro Peña Usma',
  titulo: 'Estudiante de Ingeniería de Sistemas',
  descripcion:
    'Estudiante apasionado por el desarrollo de software, con interés en aplicaciones web y bases de datos. Busco seguir aprendiendo y aplicar mis conocimientos en proyectos reales.',
};

export const CONTACTO: InfoContacto = {
  correo: 'diego.pena01@uceva.edu.co',
  telefono: '313 600 3536',
  ciudad: 'Tuluá, Valle del Cauca',
  github: 'https://github.com/diegopena01-droid',
};

export const ESTUDIOS: Estudio[] = [
  {
    institucion: 'Unidad Central del Valle del Cauca (UCEVA)',
    titulo: 'Ingeniería de Sistemas',
    periodo: '2026 - Presente',
    descripcion: 'Formación en programación, bases de datos, desarrollo web y electrónica digital.',
  },
  {
    institucion: 'Institucion Educativa Jose Maria Falla',
    titulo: 'Bachiller académico',
    periodo: '2018 - 2023',
  },
];

export const HABILIDADES: Habilidad[] = [
  { nombre: 'HTML y CSS', nivel: 80, categoria: 'Frontend' },
  { nombre: 'Bootstrap', nivel: 75, categoria: 'Frontend' },
  { nombre: 'Angular', nivel: 60, categoria: 'Frontend' },
  { nombre: 'TypeScript', nivel: 60, categoria: 'Frontend' },
  { nombre: 'SQL', nivel: 70, categoria: 'Bases de datos' },
  { nombre: 'Git y GitHub', nivel: 65, categoria: 'Herramientas' },
];

export const EXPERIENCIAS: ItemExperiencia[] = [
  {
    titulo: 'Sistema de reservas de aerolínea',
    lugar: 'Proyecto académico - UCEVA',
    periodo: '2026',
    descripcion:
      'Desarrollo de un sistema de reservas que integra el diseño de la base de datos con la interfaz web.',
    tecnologias: ['SQL', 'HTML', 'CSS'],
  },
];