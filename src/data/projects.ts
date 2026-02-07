import type { Project } from '../types'

import mernEvidence from '@assets/image/mern_evidence.png'
import kanbanImage from '@assets/image/screenshot/kanban.png'
import animationsImage from '@assets/image/screenshot/animations.png'
import angularTableImage from '@assets/image/screenshot/angular-project.png'
import ecommerceImage from '@assets/image/screenshot/ecommerce.png'
import lootBoxImage from '@assets/image/screenshot/loot-box.png'

export const projects: Project[] = [
  {
    id: 'mern-app',
    title: 'MERN App',
    description: {
      es: 'Aplicación full-stack con autenticación, CRUD completo y API RESTful. Demuestra la capacidad de construir una aplicación completa de principio a fin.',
      en: 'Full-stack application with authentication, complete CRUD, and RESTful API. Demonstrates the ability to build a complete application from start to finish.',
    },
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'JavaScript'],
    image: mernEvidence,
    pageUrl: 'https://github.com/JuanMorales12/mern_app',
    repoUrl: 'https://github.com/JuanMorales12/mern_app',
    metrics: 'Full CRUD + Auth',
  },
  {
    id: 'angular-table',
    title: 'Angular Table Component',
    description: {
      es: 'Componente de tabla interactiva con paginación, ordenamiento y filtrado avanzado. Diseñado para manejar grandes conjuntos de datos de forma eficiente.',
      en: 'Interactive table component with pagination, sorting, and advanced filtering. Designed to handle large datasets efficiently.',
    },
    technologies: ['Angular', 'Angular Material', 'TypeScript', 'RxJS', 'SCSS'],
    image: angularTableImage,
    pageUrl: 'https://angular-app-table.vercel.app/',
    repoUrl: 'https://github.com/JuanMorales12/angular_app_table',
    metrics: 'Real-time filtering',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Store',
    description: {
      es: 'Tienda online completa con catálogo de productos, carrito de compras y conexión a base de datos Firebase. Interfaz responsiva y fluida.',
      en: 'Complete online store with product catalog, shopping cart, and Firebase database connection. Responsive and smooth interface.',
    },
    technologies: ['React', 'Tailwind CSS', 'Firebase', 'JavaScript'],
    image: ecommerceImage,
    pageUrl: 'https://tienda-gz.netlify.app/',
    repoUrl: 'https://github.com/JuanMorales12/CoderH_MoralesJuan',
    metrics: 'Full cart + DB',
  },
  {
    id: 'loot-box',
    title: 'Loot Box',
    description: {
      es: 'Sistema interactivo de cajas de recompensas con animaciones dinámicas, gestión de inventario y estado global con Zustand.',
      en: 'Interactive reward box system with dynamic animations, inventory management, and global state with Zustand.',
    },
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Zustand'],
    image: lootBoxImage,
    pageUrl: 'https://loot-box.vercel.app/',
    repoUrl: 'https://github.com/JuanMorales12/loot-box',
    metrics: 'State + Animations',
  },
  {
    id: 'animations',
    title: 'Based Animations',
    description: {
      es: 'Proyecto de animaciones web interactivas con Framer Motion y GSAP. Explora técnicas avanzadas de animación para interfaces modernas.',
      en: 'Interactive web animations project with Framer Motion and GSAP. Explores advanced animation techniques for modern interfaces.',
    },
    technologies: ['React', 'TypeScript', 'Framer Motion', 'GSAP', 'Vite'],
    image: animationsImage,
    pageUrl: 'https://basedanimationsjuan.vercel.app/',
    repoUrl: 'https://github.com/JuanMorales12/based_animations_juan',
  },
  {
    id: 'kanban',
    title: 'Kanban Board',
    description: {
      es: 'Tablero Kanban para gestión de tareas con drag & drop, estados personalizables y diseño limpio.',
      en: 'Kanban board for task management with drag & drop, customizable states, and clean design.',
    },
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
    image: kanbanImage,
    pageUrl: 'https://juanmorales12.github.io/Kanban/',
    repoUrl: 'https://github.com/JuanMorales12/Kanban',
  },
]
