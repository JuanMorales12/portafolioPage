import type { Localized, Project } from '../types'

import fieldServiceImage from '@assets/image/case-studies/field-service-saas-architecture.webp'
import fieldServiceImageFallback from '@assets/image/case-studies/field-service-saas-architecture.png'
import frenchErpImage from '@assets/image/case-studies/french-construction-erp.svg'
import insuranceProduct from '@assets/image/work/insurance-product-select.webp'
import insurancePlans from '@assets/image/work/insurance-plans-coverages.webp'
import insuranceConfirmation from '@assets/image/work/insurance-quote-confirmation.webp'

const text = (en: string, es: string): Localized => ({ en, es })

const blurred = text('Blurred screenshot', 'Captura desenfocada')

export const fieldServiceProject: Project = {
  id: 'field-service-saas',
  slug: 'field-service-erp-multitenant-saas',
  kind: 'client',
  featured: true,
  order: 1,
  title: 'Field-Service ERP → Multi-tenant SaaS (Supabase + Stripe)',
  description: text(
    'Field-service ERP for a Dominican Republic repair company, later rebuilt as a multi-tenant SaaS. The ops app covers service orders, technician calendars, customer history and maps, a public booking form, quotes → invoices → payments as PDFs, inventory and payroll. For the SaaS I wrote the Supabase multi-tenant migration (tenants, RLS isolation, existing data moved in as tenant #1) and co-built Edge Functions for tenant sign-up, Stripe Checkout, Stripe webhooks, staff accounts and email notifications. Lead dev on v1 (53/57 commits); worked through the client\'s QA findings.',
    'ERP de servicios de campo para una empresa de reparaciones en República Dominicana, después reconstruido como SaaS multi-tenant. La app de operaciones cubre órdenes de servicio, calendarios de técnicos, historial y mapas de clientes, un formulario público de reservas, presupuestos → facturas → pagos en PDF, inventario y nómina. Para el SaaS escribí la migración multi-tenant en Supabase (tenants, aislamiento con RLS, los datos existentes entran como tenant n.º 1) y co-construí Edge Functions para el alta del tenant, Stripe Checkout, webhooks de Stripe, cuentas de staff y notificaciones por email. Desarrollador principal de la v1 (53/57 commits); trabajé los hallazgos de QA del cliente.',
  ),
  technologies: ['React 19', 'TypeScript', 'Supabase', 'Stripe', 'PostgreSQL', 'Firebase'],
  image: fieldServiceImage,
  imageFallback: fieldServiceImageFallback,
  imageAlt: text(
    'Architecture diagram: tenants isolated with Row-Level Security, Edge Functions for sign-up, Stripe and email',
    'Diagrama de arquitectura: tenants aislados con Row-Level Security, Edge Functions para el alta, Stripe y el email',
  ),
  metrics: text('Lead dev on v1 · 53/57 commits', 'Lead de la v1 · 53/57 commits'),
  caseStudy: {
    hook: text(
      'Turned a single-company field-service app into a multi-tenant SaaS with self-serve sign-up and Stripe subscriptions, without losing the company\'s existing data.',
      'Convirtió una app de servicios de campo de una sola empresa en un SaaS multi-tenant con registro self-serve y suscripciones de Stripe, sin perder los datos existentes de la empresa.',
    ),
    clientContext: text(
      'A field-service and repair company in the Dominican Republic. They needed one system for appointments, technicians, quotes, invoices and inventory, and later wanted to sell it to other service businesses.',
      'Una empresa de servicios de campo y reparaciones en República Dominicana. Necesitaban un solo sistema para turnos, técnicos, presupuestos, facturas e inventario, y después quisieron venderlo a otros negocios de servicios.',
    ),
    problem: [
      text(
        'The office coordinated technicians, appointments, quotes and invoices by hand, across tools that didn\'t talk to each other.',
        'La oficina coordinaba técnicos, turnos, presupuestos y facturas a mano, entre herramientas que no se hablaban entre sí.',
      ),
      text(
        'After the first version went live, the client wanted to offer the platform to other companies as a SaaS. Each company\'s data had to be fully isolated, and sign-up had to include choosing a plan.',
        'Cuando la primera versión ya estaba en producción, el cliente quiso ofrecer la plataforma a otras empresas como SaaS. Los datos de cada empresa tenían que quedar totalmente aislados, y el registro tenía que incluir la elección de un plan.',
      ),
      text(
        'Their QA reports flagged real-world issues to fix:\nduplicate invoices caused by repeated clicks\nnumeric fields auto-filling with "0"\nprintouts cut off across pages\nlogo uploads failing',
        'Los reportes de QA marcaron problemas reales para corregir:\nfacturas duplicadas por clics repetidos\ncampos numéricos que se autocompletaban con "0"\nimpresiones cortadas entre páginas\nfallas al subir logos',
      ),
    ],
    role: text(
      'Lead developer of the original app: 53 of 57 commits.\nCore developer of the SaaS version: 50 of 151 commits, working alongside a second developer. Juan was the sole author of the multi-tenant data migration.',
      'Desarrollador principal de la app original: 53 de 57 commits.\nDesarrollador central de la versión SaaS: 50 de 151 commits, junto a un segundo desarrollador. Juan fue el único autor de la migración de datos multi-tenant.',
    ),
    solution: [
      text(
        'Operations app:\nservice orders with status flow\ncustomer records with service history and a customer map\ntechnician and secretary calendars and performance views\na public appointment-request form that feeds an "unconfirmed" queue for coordinators',
        'App de operaciones:\nórdenes de servicio con flujo de estados\nfichas de clientes con historial de servicio y un mapa de clientes\ncalendarios de técnicos y de secretaría, y vistas de performance\nun formulario público de solicitud de turno que alimenta una cola de "no confirmados" para los coordinadores',
      ),
      text(
        'Money flow: quotes → invoices → recorded payments, with printable PDF quotes and invoices (jsPDF / html2canvas), expenses and income, and CSV export with date filters.',
        'Flujo de dinero: presupuestos → facturas → pagos registrados, con presupuestos y facturas en PDF para imprimir (jsPDF / html2canvas), gastos e ingresos, y exportación CSV con filtros de fecha.',
      ),
      text(
        'Inventory and workshop: products with stock, and equipment tracked while it\'s in the workshop.',
        'Inventario y taller: productos con stock, y equipos con seguimiento mientras están en el taller.',
      ),
      text(
        'Field-friendly UX:\naddress autocomplete plus an interactive map pin with "my location"\na pasted Google Maps link becomes an address\ncompletion photos from the phone camera\nflexible appointment lengths and multiple technicians per appointment',
        'UX pensada para el trabajo de campo:\nautocompletado de dirección más un pin de mapa interactivo con "mi ubicación"\nun enlace de Google Maps pegado se convierte en una dirección\nfotos de cierre desde la cámara del teléfono\nduración flexible de los turnos y varios técnicos por turno',
      ),
      text(
        'SaaS version on Supabase:\ntenants and user_tenants tables, a get_user_tenant_id() helper and Row-Level Security policies rewritten for tenant isolation\na migration script that moves the existing company in as the first tenant',
        'Versión SaaS en Supabase:\ntablas tenants y user_tenants, un helper get_user_tenant_id() y políticas de Row-Level Security reescritas para aislamiento por tenant\nun script de migración que mete a la empresa existente como el primer tenant',
      ),
      text(
        'Billing and onboarding on Supabase Edge Functions:\ntenant registration\nStripe Checkout session and checkout verification\na Stripe webhook\nstaff user creation and deletion\ntransactional email via Resend (new order, technician assigned, rescheduled, cancelled, new public request)',
        'Facturación y alta en Supabase Edge Functions:\nregistro del tenant\nsesión de Stripe Checkout y verificación del checkout\nun webhook de Stripe\ncreación y baja de usuarios de staff\nemail transaccional vía Resend (orden nueva, técnico asignado, reprogramado, cancelado, nueva solicitud pública)',
      ),
      text(
        'Save guard on the invoice form, A4 print layout for quotes and invoices, logos and photos moved to file storage, role-based access for admin, coordinator and technician, and invoice PDFs shareable by WhatsApp link.',
        'Guarda al guardar el formulario de factura, maquetación de impresión A4 para presupuestos y facturas, logos y fotos movidos a almacenamiento de archivos, acceso por roles para administrador, coordinador y técnico, y PDFs de facturas que se pueden compartir por un enlace de WhatsApp.',
      ),
    ],
    stack: text(
      'React 19 · TypeScript · Vite · Supabase (Postgres, RLS, Edge Functions) · Stripe Checkout & Webhooks · Firebase (original version) · Leaflet / Google Maps · jsPDF · Resend',
      'React 19 · TypeScript · Vite · Supabase (Postgres, RLS, Edge Functions) · Stripe Checkout y Webhooks · Firebase (versión original) · Leaflet / Google Maps · jsPDF · Resend',
    ),
    results: [
      {
        headline: text(
          'From a single-company app to a multi-tenant SaaS',
          'De una app de una sola empresa a un SaaS multi-tenant',
        ),
        detail: text(
          'Took the product from a single-company app to a multi-tenant SaaS with plan selection at sign-up and Stripe subscriptions.',
          'Llevó el producto de una app de una sola empresa a un SaaS multi-tenant con elección de plan en el registro y suscripciones de Stripe.',
        ),
      },
      {
        headline: text('Without a rewrite from scratch', 'Sin un rewrite desde cero'),
        detail: text(
          'Did it without a rewrite from scratch: existing data moved in as the first tenant through a scripted migration.',
          'Lo hizo sin un rewrite desde cero: los datos existentes entraron como el primer tenant mediante una migración por script.',
        ),
      },
      {
        headline: text('Formal QA rounds', 'Rondas formales de QA'),
        detail: text(
          'Worked through the client\'s formal QA rounds, including duplicate invoices and cut-off printouts.',
          'Trabajó las rondas formales de QA del cliente, incluidas facturas duplicadas e impresiones cortadas.',
        ),
      },
      {
        headline: text(
          'Lead developer of the original app',
          'Desarrollador principal de la app original',
        ),
        detail: text(
          'Lead developer of the original app (53 of 57 commits) and sole author of the multi-tenant migration in the SaaS version.',
          'Desarrollador principal de la app original (53 de 57 commits) y único autor de la migración multi-tenant en la versión SaaS.',
        ),
      },
    ],
  },
}

export const frenchErpProject: Project = {
  id: 'french-construction-erp',
  slug: 'construction-erp-quote-pdf-import',
  kind: 'client',
  featured: true,
  order: 4,
  title: 'AI Quote PDF Import & Modular ERP for Construction SMEs',
  description: text(
    'For a French software studio building modular ERPs for construction and trades SMEs, I implemented quote PDF import with OpenAI: upload a PDF, extract structured lines, match or semi-automatically create the customer, then review and validate. I also built CSV pipelines into purchase planning and timesheets, multi-quote projects, and shared UI components, and wired an OpenAI + Chroma orchestrator agent into an internal planner. Stack: NestJS, GraphQL, TypeORM, Nuxt 4, Nuxt UI, i18n EN/FR. #2 contributor on the quotes module (72 commits).',
    'Para un estudio de software francés que construye ERPs modulares para pymes de construcción y oficios, implementé la importación de presupuestos en PDF con OpenAI: se sube un PDF, se extraen líneas estructuradas, se matchea o se crea el cliente de forma semi-automática, y después se revisa y se valida. También armé pipelines CSV hacia la planificación de compras y las hojas de horas, proyectos con varios presupuestos, y componentes de UI compartidos, y conecté un agente orquestador de OpenAI + Chroma en un planner interno. Stack: NestJS, GraphQL, TypeORM, Nuxt 4, Nuxt UI, i18n EN/FR. Contribuidor n.º 2 del módulo de presupuestos (72 commits).',
  ),
  technologies: ['NestJS', 'GraphQL', 'Nuxt 4', 'OpenAI', 'TypeORM', 'Vue 3'],
  image: frenchErpImage,
  imageAlt: text(
    'Diagram of a quote PDF moving through extraction into planning modules',
    'Diagrama de un PDF de presupuesto que pasa por la extracción hacia módulos de planificación',
  ),
  metrics: text('#2 on the quotes module · 72 commits', 'N.º 2 en presupuestos · 72 commits'),
  caseStudy: {
    hook: text(
      'Turned supplier and customer quote PDFs into structured, validated data with OpenAI, inside a modular ERP for French construction and trades companies.',
      'Convirtió PDFs de presupuestos de proveedores y de clientes en datos estructurados y validados con OpenAI, dentro de un ERP modular para empresas francesas de construcción y oficios.',
    ),
    clientContext: text(
      'A French software studio building modular business apps (CRM, quotes, planning, job costing, purchase planning) for construction and trades SMEs. Juan works inside the studio\'s distributed team, which ships features both by hand and with AI coding agents.',
      'Un estudio de software francés que construye apps de negocio modulares (CRM, presupuestos, planificación, costos de obra, planificación de compras) para pymes de construcción y oficios. Juan trabaja dentro del equipo distribuido del estudio, que entrega funcionalidades tanto a mano como con agentes de código con IA.',
    ),
    problem: [
      text(
        'Trades companies receive and send quotes as PDFs and spreadsheets. Re-typing them into planning, purchasing and timesheets is slow and error-prone.',
        'Las empresas de oficios reciben y envían presupuestos como PDFs y planillas. Volver a tipearlos en planificación, compras y hojas de horas es lento y propenso a errores.',
      ),
      text(
        'Each client needs a different mix of features, so features have to be built as reusable modules rather than one-off apps.',
        'Cada cliente necesita una mezcla distinta de funcionalidades, así que las funcionalidades tienen que construirse como módulos reutilizables y no como apps de una sola vez.',
      ),
    ],
    role: text(
      'Full-stack developer across the studio\'s client projects:\nimplemented the OpenAI-based quote PDF import and semi-automatic customer creation\n#2 contributor on the quotes module (72 of 397 commits)\n381 commits to the shared platform monorepo\n#1 contributor on the multi-module demo (23 of 74)',
      'Desarrollador full-stack en los proyectos de clientes del estudio:\nimplementó la importación de presupuestos en PDF con OpenAI y la creación semi-automática de clientes\ncontribuidor n.º 2 del módulo de presupuestos (72 de 397 commits)\n381 commits en el monorepo de la plataforma compartida\ncontribuidor n.º 1 de la demo multi-módulo (23 de 74)',
    ),
    solution: [
      text(
        'Quote lifecycle module:\nupload a PDF, extract structured data with OpenAI (gpt-4o), review, confirm\nfuzzy-match the customer, or create one semi-automatically\nstatus flow Draft → Sent → Accepted / Cancelled\nvalidated quotes stay editable',
        'Módulo de ciclo de vida del presupuesto:\nsubir un PDF, extraer datos estructurados con OpenAI (gpt-4o), revisar, confirmar\nmatcheo aproximado del cliente, o crearlo de forma semi-automática\nflujo de estados Borrador → Enviado → Aceptado / Cancelado\nlos presupuestos validados siguen siendo editables',
      ),
      text(
        'CSV pipelines:\nimport quote lines into purchase planning, filtered to unit-priced lines only\naccept new timesheet CSV formats (delimiter, encoding, header aliases)\nmap project references correctly\nhardened for multiple quotes per project',
        'Pipelines CSV:\nimportar líneas de presupuesto a la planificación de compras, filtradas solo a líneas con precio unitario\naceptar nuevos formatos de CSV de hojas de horas (delimitador, encoding, alias de encabezados)\nmapear bien las referencias de proyecto\nendurecido para varios presupuestos por proyecto',
      ),
      text(
        'Modular architecture: NestJS + GraphQL (Apollo) + TypeORM services, Nuxt 4 + Nuxt UI front-ends, a separate file service for PDFs, and EN/FR i18n.',
        'Arquitectura modular: servicios NestJS + GraphQL (Apollo) + TypeORM, front-ends Nuxt 4 + Nuxt UI, un servicio de archivos aparte para los PDFs, e i18n EN/FR.',
      ),
      text(
        'Shared UI kit: reusable components used across modules (period navigator, segmented controls, meters), replacing several local copies.',
        'Kit de UI compartido: componentes reutilizables entre módulos (navegador de período, controles segmentados, medidores), que reemplazan varias copias locales.',
      ),
      text(
        'Agent-ready modules:\nexposed planning and job features as tools for an AI agent\nwired an orchestrator agent (OpenAI + Chroma vector store) end to end in the delivery-planner app\nadded a smoke script covering every business rule',
        'Módulos listos para agentes:\nexpuso funcionalidades de planificación y de trabajos como tools de un agente de IA\nconectó un agente orquestador (OpenAI + vector store de Chroma) de punta a punta en la app de planificación de entregas\nagregó un script de smoke que cubre cada regla de negocio',
      ),
    ],
    stack: text(
      'TypeScript · NestJS · GraphQL (Apollo) · TypeORM · Nuxt 4 / Vue 3 · Nuxt UI · OpenAI (gpt-4o) · Chroma · pnpm monorepo · i18n EN/FR',
      'TypeScript · NestJS · GraphQL (Apollo) · TypeORM · Nuxt 4 / Vue 3 · Nuxt UI · OpenAI (gpt-4o) · Chroma · monorepo pnpm · i18n EN/FR',
    ),
    results: [
      {
        headline: text(
          'Shipped AI document extraction in production code',
          'Extracción de documentos con IA en código de producción',
        ),
        detail: text(
          'Shipped AI document extraction in production code: quote PDFs become structured, reviewable data instead of manual re-typing.',
          'Entregó extracción de documentos con IA en código de producción: los PDFs de presupuestos pasan a ser datos estructurados y revisables, en lugar de volver a tipearlos a mano.',
        ),
      },
      {
        headline: text(
          'Second-largest contributor to the quotes module',
          'Segundo contribuidor del módulo de presupuestos',
        ),
        detail: text(
          'Second-largest contributor to the quotes module (72 of 397 commits) and largest contributor to the multi-module demo (23 of 74).',
          'Segundo contribuidor del módulo de presupuestos (72 de 397 commits) y principal contribuidor de la demo multi-módulo (23 de 74).',
        ),
      },
      {
        headline: text('381 commits in the shared monorepo', '381 commits en el monorepo compartido'),
        detail: text(
          '381 commits in a fast-moving monorepo shared with AI coding agents.',
          '381 commits en un monorepo que se mueve rápido, compartido con agentes de código con IA.',
        ),
      },
      {
        headline: text('Features reusable across clients', 'Funcionalidades reutilizables entre clientes'),
        detail: text(
          'Made features reusable across clients: moved the cost-price feature into its own module and unified duplicated UI into shared components.',
          'Hizo las funcionalidades reutilizables entre clientes: movió la funcionalidad de precio de costo a su propio módulo y unificó UI duplicada en componentes compartidos.',
        ),
      },
    ],
  },
}

export const insuranceProject: Project = {
  id: 'insurance-quoting',
  slug: 'insurance-quoting-portal',
  kind: 'client',
  featured: false,
  order: 11,
  title: 'Insurance quoting portal',
  label: text('Insurtech client', 'Cliente de insurtech'),
  description: text(
    'A React insurance quoting web app for an insurtech client.',
    'Una aplicación web en React para cotizar seguros, para un cliente de insurtech.',
  ),
  technologies: ['React'],
  image: insuranceProduct,
  imageAlt: text(
    'Blurred screenshot of an insurance product selection screen',
    'Captura desenfocada de una pantalla de selección de producto de seguros',
  ),
  gallery: [
    {
      src: insuranceProduct,
      alt: text(
        'Blurred screenshot of an insurance product selection screen',
        'Captura desenfocada de una pantalla de selección de producto de seguros',
      ),
      caption: blurred,
    },
    {
      src: insurancePlans,
      alt: text(
        'Blurred screenshot of insurance plans and coverages',
        'Captura desenfocada de planes y coberturas de seguros',
      ),
      caption: blurred,
    },
    {
      src: insuranceConfirmation,
      alt: text(
        'Blurred screenshot of an insurance quote confirmation',
        'Captura desenfocada de la confirmación de una cotización de seguros',
      ),
      caption: blurred,
    },
  ],
}
