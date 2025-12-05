import type { Project } from '../types'

// Import project images - Active projects
import mernEvidence from '@assets/image/mern_evidence.png'
import kanbanImage from '@assets/image/screenshot/kanban.png'
import animationsImage from '@assets/image/screenshot/animations.png'
import angularTableImage from '@assets/image/screenshot/angular-project.png'
import ecommerceImage from '@assets/image/screenshot/ecommerce.png'

// Import project images - Commented projects
// import heroesBanner from '@assets/image/screenshot/heroes_banner.png'
// import spacebadgesBanner from '@assets/image/screenshot/spacebadges-baner3.png'
// import productappBanner from '@assets/image/screenshot/productapp-baner.png'
// import memoappBanner from '@assets/image/screenshot/memoapp-baner.jpg'
// import datasheetBanner from '@assets/image/screenshot/datasheet-baner.jpg'
// import simonSaysBanner from '@assets/image/screenshot/simon-says-baner.png'
// import foodAppBanner from '@assets/image/screenshot/food-app-baner.png'
// import memoTestImage from '@assets/image/screenshot/memo.png'
// import avocadoAppBanner from '@assets/image/screenshot/baner-avocado-app.png'
// import gifImage from '@assets/image/screenshot/gif_completa.png'

export const projects: Project[] = [
  {
    id: 'mern-app',
    title: 'MERN App',
    description: 'Aplicación full-stack construida con el stack MERN (MongoDB, Express, React, Node.js)',
    technologies: 'Tecnologías utilizadas: MongoDB, Express, React JS, Node JS, JavaScript, Git/Github',
    image: mernEvidence,
    pageUrl: 'https://github.com/JuanMorales12/mern_app',
    repoUrl: 'https://github.com/JuanMorales12/mern_app',
  },
  {
    id: 'kanban',
    title: 'Kanban - To do',
    description: 'Kanban To do creado con React y Tailwind',
    technologies: 'Tecnologías utilizadas: HTML, CSS, JavaScript, React JS, Tailwind CSS, Github',
    image: kanbanImage,
    pageUrl: 'https://juanmorales12.github.io/Kanban/',
    repoUrl: 'https://github.com/JuanMorales12/Kanban',
  },
  {
    id: 'animations',
    title: 'Based Animations',
    description: 'Proyecto de animaciones web interactivas con Framer Motion y GSAP',
    technologies: 'Tecnologías utilizadas: React 18, TypeScript, Vite, Framer Motion, GSAP, CSS3, Git/Github',
    image: animationsImage,
    pageUrl: 'https://basedanimationsjuan.vercel.app/',
    repoUrl: 'https://github.com/JuanMorales12/based_animations_juan',
  },
  {
    id: 'angular-table',
    title: 'Angular Table Component',
    description: 'Componente de tabla interactiva construido con Angular Material, con funcionalidades de paginación, ordenamiento y filtrado',
    technologies: 'Tecnologías utilizadas: Angular 21.0.2, Angular Material 21.0.2, TypeScript 5.7.x, RxJS 7.8.x, SCSS, Git/Github',
    image: angularTableImage,
    pageUrl: 'https://angular-app-table.vercel.app/',
    repoUrl: 'https://github.com/JuanMorales12/angular_app_table',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    description: 'E-Commerce hecho con react y tailwind, conectado a base de datos de firebase',
    technologies: 'Tecnologías utilizadas: HTML, CSS, JavaScript, React JS, Git/Github, Firebase',
    image: ecommerceImage,
    pageUrl: 'https://tienda-gz.netlify.app/',
    repoUrl: 'https://github.com/JuanMorales12/CoderH_MoralesJuan',
  },
  // {
  //   id: 'gif-search',
  //   title: 'Buscador de Gifs',
  //   description: 'App móvil simple para buscar películas y guardarlas en favoritos.',
  //   technologies: 'Tecnologías utilizadas: JavaScript, React Native, TypeScript, Node JS, Git/Github.',
  //   image: gifImage,
  //   pageUrl: 'https://juanmorales12.github.io/React-gif-expert-app/',
  //   repoUrl: 'https://github.com/JuanMorales12/React-gif-expert-app',
  //   buttonText: 'Visit Demo',
  // },
  // {
  //   id: 'memotest',
  //   title: 'Memo test',
  //   description: 'Memo test creado con React y Tailwind',
  //   technologies: 'Tecnologías utilizadas: HTML, CSS, JavaScript, React JS, Git/Github',
  //   image: memoTestImage,
  //   pageUrl: 'https://juanmorales12.github.io/memory_card/',
  //   repoUrl: 'https://github.com/JuanMorales12/memory_card',
  // },
  // {
  //   id: 'heroes-spa',
  //   title: 'Superheroes SPA',
  //   description: 'Superheroes SPA es una aplicación web que permite buscar superhéroes y villanos de los cómics de Marvel y DC.',
  //   technologies: 'Tecnologías utilizadas: HTML, CSS, JavaScript,React, Git/Github.',
  //   image: heroesBanner,
  //   pageUrl: 'https://juanmorales12.github.io/heroes-spa/',
  //   repoUrl: 'https://github.com/JuanMorales12/heroes-spa',
  // },
  // {
  //   id: 'space-badges',
  //   title: 'Space Badges',
  //   description: 'Una SPA (aplicación de una sola página) creada con react js y bootstrap, totalmente responsiva, consumiendo la API  https://rickandmortyapi.com/ para brindar una posibilidad de un scroll infinito trayendo personajes de la seríe Rick and Morty.',
  //   technologies: 'Tecnologías utilizadas: HTML, CSS, JavaScript, Git/Github, React JS, Bootstrap.',
  //   image: spacebadgesBanner,
  //   pageUrl: 'https://dbriceno10.github.io/Curso-React-JS-platzi-badges/#/',
  //   repoUrl: 'https://github.com/dbriceno10/Curso-React-JS-platzi-badges',
  // },
  // {
  //   id: 'ecommerce-product',
  //   title: 'E-commerce Product App',
  //   description: 'Una simple aplicación estilo E-Commerce, usando bootstrap para dar unos estilos rápidos y responsivos.',
  //   technologies: 'Tecnologías utilizadas: HTML, CSS, JavaScript, Git/Github, Bootstrap.',
  //   image: productappBanner,
  //   pageUrl: 'https://dbriceno10.github.io/aplicacion-de-productos-2/',
  //   repoUrl: 'https://github.com/dbriceno10/aplicacion-de-productos-2',
  // },
  // {
  //   id: 'memo-app',
  //   title: 'Memo App',
  //   description: 'Una simple app de notas, para anotar tareas rápidas.',
  //   technologies: 'Tecnologías utilizadas: HTML, CSS, JavaScript, Git/Github, Bootstrap.',
  //   image: memoappBanner,
  //   pageUrl: 'https://dbriceno10.github.io/memo-app/',
  //   repoUrl: 'https://github.com/dbriceno10/memo-app',
  // },
  // {
  //   id: 'rick-morty-data',
  //   title: 'Rick and Morty Data Sheet',
  //   description: 'Una aplicación hecha con JavaScript vanilla, HTML y CSS, responsiva. Consume el API https://rickandmortyapi.com/ para traer uno a uno los personajes de la serie y mostrar sus datos.',
  //   technologies: 'Tecnologías utilizadas: HTML, CSS, JavaScript, Git/Github.',
  //   image: datasheetBanner,
  //   pageUrl: 'https://dbriceno10.github.io/proyecto-con-api-de-rick-and-morty/',
  //   repoUrl: 'https://github.com/dbriceno10/proyecto-con-api-de-rick-and-morty',
  // },
  // {
  //   id: 'simon-says',
  //   title: 'Simon Says',
  //   description: 'Una recreación del adictivo juego simon says, perfecto para relajarse un rato jugando desde la computadora o celular.',
  //   technologies: 'Tecnologías utilizadas: HTML, CSS, JavaScript, Git/Github.',
  //   image: simonSaysBanner,
  //   pageUrl: 'https://dbriceno10.github.io/Proyecto-Curso-Fundamentos-de-JavaScript-Juego-de-Simon-Dice/',
  //   repoUrl: 'https://github.com/dbriceno10/Proyecto-Curso-Fundamentos-de-JavaScript-Juego-de-Simon-Dice',
  // },
  // {
  //   id: 'food-app',
  //   title: 'Food App (Demo)',
  //   description: 'Una aplicación donde los usuarios pueden registrarse, inicar seción y hacer pedidos de un menú. El administrador puede ver las distintas órdenes para realizarlas. Integra un API desarrollada con node js, express y mongodb (aún en desarrollo).',
  //   technologies: 'Tecnologías utilizadas: HTML, CSS, JavaScript, Node JS, Express, MongoDb, Git/Github',
  //   image: foodAppBanner,
  //   pageUrl: 'https://dbriceno10.github.io/food-app/food-app-web/',
  //   repoUrl: 'https://github.com/dbriceno10/food-app',
  //   buttonText: 'Visit Demo',
  // },
  // {
  //   id: 'avocado-app',
  //   title: 'Avocado App',
  //   description: 'Una simple SPA donde vamos cargando distintos tipos de aguacates.',
  //   technologies: 'Tecnologías utilizadas: HTML, CSS, JavaScript, React JS, Next JS, TypeScript, Node JS, Semantic UI CSS/React, Git/Github',
  //   image: avocadoAppBanner,
  //   pageUrl: 'http://curso-nextjs-platzi.vercel.app/',
  //   repoUrl: 'https://github.com/dbriceno10/curso-nextjs-platzi',
  // },
]
