import { Tema, Tecnologia, Proyecto } from '../models/aprendizaje.model';

export const TEMAS: Tema[] = [
  {
    id: 1,
    titulo: 'Manipulación del DOM con JavaScript',
    descripcion: 'Cómo cambiar lo que se ve en la página desde el código.',
    categoria: 'JavaScript',
    conocimientos: [
      'Mostrar mensajes con alert',
      'Cambiar el texto de un párrafo',
      'Crear un contador con eventos',
      'Mostrar y ocultar elementos con classList',
    ],
  },
  {
    id: 2,
    titulo: 'Patrón MVC',
    descripcion: 'Organización del código separando responsabilidades.',
    categoria: 'JavaScript',
    conocimientos: [
      'Model: los datos',
      'Views: lo que ve el usuario',
      'Controller: la lógica que conecta ambos',
    ],
  },
  {
    id: 3,
    titulo: 'Componentes de Angular',
    descripcion: 'Construcción de la interfaz a partir de piezas reutilizables.',
    categoria: 'Angular',
    conocimientos: [
      'Crear componentes con Angular CLI',
      'Pasar datos con input()',
      'Componer componentes hijos dentro de una página',
    ],
  },
  {
    id: 4,
    titulo: 'Enrutamiento',
    descripcion: 'Navegación entre páginas sin recargar el navegador.',
    categoria: 'Angular',
    conocimientos: [
      'Definir rutas en app.routes.ts',
      'routerLink y routerLinkActive',
      'router-outlet y redirecciones',
    ],
  },
  {
    id: 5,
    titulo: 'Renderizado dinámico',
    descripcion: 'Generar la interfaz a partir de datos.',
    categoria: 'Angular',
    conocimientos: [
      'Recorrer listas con for y track',
      'Mostrar contenido condicional con if',
      'Tipar los datos con interfaces',
    ],
  },
  {
    id: 6,
    titulo: 'Diseño con Bootstrap',
    descripcion: 'Interfaces claras y adaptables a cualquier pantalla.',
    categoria: 'Bootstrap',
    conocimientos: [
      'Sistema de cuadrícula',
      'Navbar, cards, badges y tablas',
      'Diseño responsive',
    ],
  },
  {
    id: 7,
    titulo: 'Control de versiones',
    descripcion: 'Registro ordenado del trabajo y publicación del código.',
    categoria: 'Git',
    conocimientos: [
      'Commits descriptivos',
      'Repositorios en GitHub',
      'Flujo add, commit y push',
    ],
  },
];

export const TECNOLOGIAS: Tecnologia[] = [
  { nombre: 'HTML5', uso: 'Estructura de las páginas' },
  { nombre: 'CSS3 / SCSS', uso: 'Estilos y personalización' },
  { nombre: 'JavaScript', uso: 'Interactividad en los talleres' },
  { nombre: 'TypeScript', uso: 'Código tipado en Angular' },
  { nombre: 'Angular', uso: 'Aplicación del parcial' },
  { nombre: 'Bootstrap', uso: 'Diseño de la interfaz' },
  { nombre: 'Git y GitHub', uso: 'Control de versiones y entrega' },
];

export const PROYECTOS: Proyecto[] = [
  {
    nombre: 'MultiApp',
    tipo: 'Taller',
    descripcion:
      'Aplicación con patrón MVC: saludo con alert, cambio de mensaje, contador y mostrar u ocultar elementos.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    enPareja: true,
  },
  {
    nombre: 'Sistema de reservas de aerolínea',
    tipo: 'Proyecto',
    descripcion:
      'Sistema web de reservas que se desarrolló a lo largo del semestre junto con la materia de bases de datos.',
    tecnologias: ['PostgreSQL', 'HTML', 'CSS'],
    enPareja: false,
  },
  {
    nombre: 'Parcial II: Portafolio en Angular',
    tipo: 'Parcial',
    descripcion:
      'Aplicación con hoja de vida, resumen del aprendizaje y página de tema libre.',
    tecnologias: ['Angular', 'TypeScript', 'Bootstrap', 'Git'],
    enPareja: false,
  },
];