import type { Localized, Project } from '../types'
import { fieldServiceProject, frenchErpProject, insuranceProject } from './approvedWork'

import mernEvidence from '@assets/image/mern_evidence.png'
import kanbanImage from '@assets/image/screenshot/kanban.png'
import animationsImage from '@assets/image/screenshot/animations.png'
import angularTableImage from '@assets/image/screenshot/angular-project.png'
import ecommerceImage from '@assets/image/screenshot/ecommerce2.png'
import lootBoxImage from '@assets/image/screenshot/loot-box.png'
import socialAiImage from '@assets/image/screenshot/social-contenedor.png'
import miniSaasLanding from '@assets/image/work/minisaas-landing.webp'
import miniSaasPricing from '@assets/image/work/minisaas-pricing.webp'
import miniSaasSignup from '@assets/image/work/minisaas-signup.webp'
import miniSaasDashboardFree from '@assets/image/work/minisaas-dashboard-free.webp'
import miniSaasDashboardPro from '@assets/image/work/minisaas-dashboard-pro.webp'
import fitnessDashboard from '@assets/image/case-studies/fitness-saas.svg'
import whatsappBookingChat from '@assets/image/case-studies/whatsapp-booking-agent-architecture.webp'
import whatsappBookingFallback from '@assets/image/case-studies/whatsapp-booking-agent-architecture.png'
import opsAgentDiagram from '@assets/image/case-studies/claude-ops-agent-architecture.webp'
import opsAgentDiagramFallback from '@assets/image/case-studies/claude-ops-agent-architecture.png'

const text = (en: string, es: string): Localized => ({ en, es })

export const projects: Project[] = [
  fieldServiceProject,
  {
    id: 'fitness-saas',
    slug: 'fitness-saas-nextjs-rewrite',
    kind: 'client',
    featured: true,
    order: 2,
    title: 'Fitness SaaS: Next.js Rewrite & React Native App',
    description: text(
      'Top contributor to the Next.js App Router rewrite of a live B2B SaaS for personal-training businesses, plus offline-first work on its React Native app.',
      'Principal contribuidor del rewrite en Next.js App Router de un SaaS B2B para negocios de entrenamiento personal, y trabajo offline-first en su app React Native.',
    ),
    technologies: ['Next.js', 'TypeScript', 'shadcn/ui', 'Chart.js', 'React Native', 'TanStack Query'],
    image: fitnessDashboard,
    imageAlt: text(
      'Illustration of a role-based performance dashboard',
      'Ilustración de un dashboard de performance por rol',
    ),
    metrics: text('Top contributor · 503 commits', 'Principal contribuidor · 503 commits'),
    caseStudy: {
      nda: true,
      hook: text(
        'The #1 contributor, by commits, to the Next.js rewrite of a live B2B SaaS for personal-training businesses. He also works on the platform\'s React Native app.',
        'El contribuidor n.º 1, por commits, del rewrite en Next.js de un SaaS B2B en producción para negocios de entrenamiento personal. También trabaja en la app React Native de la plataforma.',
      ),
      clientContext: text(
        'B2B SaaS for gyms and personal-training businesses, with owner, manager and trainer roles. Client under NDA, so no name or logo is shown. Juan worked inside a distributed product team.',
        'SaaS B2B para gimnasios y negocios de entrenamiento personal, con roles de dueño, manager y entrenador. Cliente bajo NDA, así que no se muestra nombre ni logo. Juan trabajó dentro de un equipo de producto distribuido.',
      ),
      problem: [
        text(
          'The web product ran on an older React (Create React App) front-end on top of two generations of back-end APIs: a modern API and a legacy one.',
          'El producto web corría sobre un front-end React más antiguo (Create React App), encima de dos generaciones de APIs de back-end: una moderna y una legacy.',
        ),
        text(
          'The team set out to rebuild the web front-end on Next.js App Router without stopping product delivery.',
          'El equipo se propuso reconstruir el front-end web en Next.js App Router sin detener la entrega de producto.',
        ),
        text(
          'Business owners and managers needed clear, role-based performance views: sales vs. goals, trainer capacity and client conversion.',
          'Los dueños del negocio y los managers necesitaban vistas de performance claras y por rol: ventas vs. objetivos, capacidad de los entrenadores y conversión de clientes.',
        ),
      ],
      role: text(
        'Senior front-end / full-stack engineer on the product team. Top contributor to the web rewrite and contributor to the mobile app.',
        'Ingeniero senior front-end / full-stack en el equipo de producto. Principal contribuidor del rewrite web y contribuidor de la app mobile.',
      ),
      solution: [
        text(
          'New web front-end: Next.js App Router + TypeScript + Tailwind + shadcn/ui (Radix). The repo has Husky, lint-staged and Prettier, so every commit runs the same quality checks.',
          'Nuevo front-end web: Next.js App Router + TypeScript + Tailwind + shadcn/ui (Radix). El repositorio tiene Husky, lint-staged y Prettier, así que cada commit corre los mismos controles de calidad.',
        ),
        text(
          'Program calendar and scheduling: FullCalendar views with drag-and-drop (dnd-kit), and polished, keyboard-friendly typed date inputs (segmented MM / DD / YYYY with Escape and arrow-key handling).',
          'Calendario y programación: vistas de FullCalendar con drag-and-drop (dnd-kit), e inputs de fecha tipados, pulidos y usables con teclado (segmentos MM / DD / YYYY con manejo de Escape y de las flechas).',
        ),
        text(
          'Role-based performance dashboard (Owner / Manager / Trainer):\nKPI cards with deltas\nSales vs. Goal charts\nCapacity gauge\nPT-penetration funnel\nStaff and location tables, all built with Chart.js',
          'Dashboard de performance por rol (Owner / Manager / Trainer):\nTarjetas de KPI con deltas\nGráficos de Ventas vs. Objetivo\nMedidor de capacidad\nEmbudo de penetración de PT\nTablas de staff y sedes, todo construido con Chart.js',
        ),
        text(
          'Product analytics: Amplitude instrumentation, including session replay.',
          'Analítica de producto: instrumentación con Amplitude, incluido session replay.',
        ),
        text(
          'Mobile app (React Native, iOS + Android from one codebase):\nTanStack Query with a persisted cache, so workouts can be created offline and synced later\nPush notifications for messaging\nNutrition-tracking integration\nMetric sparklines',
          'App mobile (React Native, iOS + Android desde un solo codebase):\nTanStack Query con caché persistida, para que los entrenamientos se puedan crear offline y sincronizar después\nNotificaciones push para mensajería\nIntegración de seguimiento nutricional\nSparklines de métricas',
        ),
        text(
          'Integration layer: the new front-end and the mobile app talk to the modern and legacy APIs through a single gateway, so the migration can happen step by step.',
          'Capa de integración: el nuevo front-end y la app mobile hablan con las APIs moderna y legacy a través de un único gateway, para que la migración pueda hacerse paso a paso.',
        ),
      ],
      stack: text(
        'Next.js · React 19 · TypeScript · Tailwind · shadcn/ui · FullCalendar · dnd-kit · Chart.js · Amplitude · React Native · TanStack Query · Push notifications · REST APIs',
        'Next.js · React 19 · TypeScript · Tailwind · shadcn/ui · FullCalendar · dnd-kit · Chart.js · Amplitude · React Native · TanStack Query · Notificaciones push · APIs REST',
      ),
      results: [
        {
          headline: text('Top contributor to the rewrite', 'Principal contribuidor del rewrite'),
          detail: text(
            '503 of ~1,184 non-merge commits on the Next.js web app, the most of anyone on the team.',
            '503 de ~1.184 commits (sin merges) en la web Next.js, la mayor cantidad de todo el equipo.',
          ),
        },
        {
          headline: text('Sustained delivery', 'Entrega sostenida'),
          detail: text(
            'Active on the web rewrite from February 2026 to today, through a steady flow of reviewed pull requests.',
            'Activo en el rewrite web desde febrero de 2026 hasta hoy, con un flujo constante de pull requests revisados.',
          ),
        },
        {
          headline: text('Mobile', 'Mobile'),
          detail: text(
            '111 commits on the React Native app, including offline workout creation and sync, messaging notifications and the nutrition integration.',
            '111 commits en la app React Native, incluida la creación de entrenamientos offline y la sincronización, notificaciones de mensajería y la integración de nutrición.',
          ),
        },
        {
          headline: text(
            'Moved key parts of the product to the new codebase',
            'Pasó partes clave del producto al nuevo codebase',
          ),
          detail: text(
            'Moved key parts of the product (scheduling, date handling, dashboards) from the legacy front-end to the new Next.js App Router codebase, with a focus on UX details that end users feel every day.',
            'Pasó partes clave del producto (agenda, manejo de fechas, dashboards) del front-end legacy al nuevo codebase en Next.js App Router, con foco en detalles de UX que los usuarios finales sienten todos los días.',
          ),
        },
      ],
    },
  },
  {
    id: 'whatsapp-ai-booking',
    slug: 'whatsapp-ai-booking-agent',
    kind: 'product',
    featured: true,
    order: 3,
    title: 'WhatsApp AI Booking Agent',
    description: text(
      'Claude-powered WhatsApp receptionist that books real appointments from a Supabase calendar and is built so it never invents a slot.',
      'Recepcionista de WhatsApp con Claude que agenda turnos reales desde Supabase y está hecha para no inventar nunca un horario.',
    ),
    technologies: ['Next.js 16', 'Supabase', 'Row-Level Security', 'WhatsApp Cloud API', 'Claude', 'Vitest'],
    image: whatsappBookingChat,
    imageFallback: whatsappBookingFallback,
    imageAlt: text(
      'Architecture diagram: WhatsApp Cloud API to a signed webhook, a Claude agent with booking tools, Supabase with Row-Level Security and a no-double-booking constraint, and staff takeover',
      'Diagrama de arquitectura: de WhatsApp Cloud API a un webhook firmado, un agente de Claude con herramientas de reservas, Supabase con Row-Level Security y una restricción contra reservas dobles, y traspaso al personal',
    ),
    metrics: text('20 safety-tested conversations', '20 conversaciones probadas en seguridad'),
    caseStudy: {
      hook: text(
        'A WhatsApp receptionist that books, reschedules and cancels real appointments, and is built so it can\'t make up a time slot.',
        'Una recepcionista de WhatsApp que reserva, reprograma y cancela turnos reales, y está construida para no poder inventar un horario.',
      ),
      clientContext: text(
        'Juan\'s own product for appointment-based small businesses in Argentina (the demo business is an aesthetics center).',
        'Producto propio de Juan para pequeños negocios con turnos en Argentina (el negocio de la demo es un centro de estética).',
      ),
      problem: [
        text(
          'Small businesses lose bookings answering WhatsApp by hand.',
          'Los pequeños negocios pierden reservas al responder WhatsApp a mano.',
        ),
        text(
          'Generic chatbots make up prices and times, and owners won\'t adopt a bot they can\'t take over.',
          'Los chatbots genéricos inventan precios y horarios, y los dueños no van a adoptar un bot que no pueden tomar ellos.',
        ),
      ],
      role: text(
        'Sole developer: product plan, architecture, implementation and tests.',
        'Único desarrollador: plan de producto, arquitectura, implementación y tests.',
      ),
      solution: [
        text(
          'Official WhatsApp Cloud API (Meta Graph API) through Next.js 16 route handlers, with no unofficial libraries. A scheduled job sends 24-hour reminders.',
          'API oficial de WhatsApp Cloud (Meta Graph API) a través de route handlers de Next.js 16, sin librerías no oficiales. Un trabajo programado envía recordatorios a las 24 horas.',
        ),
        text(
          'Production-grade webhook:\nX-Hub-Signature-256 signature check\na fast 200 response, with processing after the response\nidempotency on a unique message ID\nper-conversation debounce for message bursts',
          'Webhook de nivel producción:\nverificación de firma X-Hub-Signature-256\nuna respuesta 200 rápida, con el procesamiento después de la respuesta\nidempotencia sobre un ID de mensaje único\ndebounce por conversación para ráfagas de mensajes',
        ),
        text(
          'Hand-written agent loop (no LangChain): system prompt + rolling summary + last 20 messages. Six tools (check availability, book, reschedule, cancel, my appointments, hand off to a human), with an iteration cap.',
          'Loop de agente escrito a mano (sin LangChain): system prompt + resumen rodante + últimos 20 mensajes. Seis herramientas (consultar disponibilidad, reservar, reprogramar, cancelar, mis turnos, derivar a un humano), con un tope de iteraciones.',
        ),
        text(
          'Grounded answers: the model can only offer slots returned by the availability tool. Any ID the model returns is checked again against the conversation\'s tenant and contact.',
          'Respuestas ancladas a datos: el modelo solo puede ofrecer horarios devueltos por la herramienta de disponibilidad. Cualquier ID que devuelva el modelo se vuelve a verificar contra el tenant y el contacto de la conversación.',
        ),
        text(
          'No double bookings: free slots are calculated from opening hours, minus time blocked off, minus existing appointments. A Postgres exclusion constraint (btree_gist + tstzrange) guarantees two bookings can\'t overlap.',
          'Sin reservas dobles: los horarios libres se calculan desde el horario de atención, menos el tiempo bloqueado, menos los turnos existentes. Una restricción de exclusión de Postgres (btree_gist + tstzrange) garantiza que dos reservas no puedan solaparse.',
        ),
        text(
          'Human takeover: the bot pauses as soon as staff replies.',
          'Toma de control humana: el bot se pausa en cuanto responde el personal.',
        ),
        text(
          'Ready for multiple tenants: Row-Level Security by tenant_id on every Supabase table from day one. The tenant comes from the incoming WhatsApp number, so new businesses can be added without code changes.',
          'Listo para varios tenants: Row-Level Security por tenant_id en cada tabla de Supabase desde el primer día. El tenant sale del número de WhatsApp entrante, así que se pueden sumar negocios sin cambiar código.',
        ),
        text(
          'Swappable LLM: the model sits behind a provider interface. Today it runs Claude (Haiku 4.5) with prompt caching.',
          'LLM intercambiable: el modelo está detrás de una interfaz de proveedor. Hoy corre Claude (Haiku 4.5) con prompt caching.',
        ),
        text(
          'Timezone-safe: times are stored in UTC and shown in Buenos Aires time.',
          'Seguro en zona horaria: los horarios se guardan en UTC y se muestran en hora de Buenos Aires.',
        ),
      ],
      stack: text(
        'Next.js 16 · TypeScript · Supabase · PostgreSQL · Row-Level Security · WhatsApp Cloud API · Claude (Anthropic) · Prompt caching · Vitest',
        'Next.js 16 · TypeScript · Supabase · PostgreSQL · Row-Level Security · WhatsApp Cloud API · Claude (Anthropic) · Prompt caching · Vitest',
      ),
      results: [
        {
          headline: text('Safety-tested conversations', 'Conversaciones probadas en seguridad'),
          detail: text(
            '20 scripted test conversations, covering:\nprompt-injection attempts\na user trying to cancel someone else\'s appointment\ntwo bookings for the same time\n"are you a bot?"\nrequests outside opening hours\ndiscount requests the bot must not invent',
            '20 conversaciones de prueba guionadas, que cubren:\nintentos de inyección de prompt\nun usuario que intenta cancelar el turno de otra persona\ndos reservas para el mismo horario\n"¿sos un bot?"\npedidos fuera del horario de atención\npedidos de descuento que el bot no debe inventar',
          ),
        },
        {
          headline: text('Automated tests', 'Tests automatizados'),
          detail: text(
            'Automated tests for slot generation, WhatsApp payload parsing, the WhatsApp client and the agent (with the LLM mocked), so the booking logic is checked without spending API credits.',
            'Tests automatizados de generación de horarios, parseo del payload de WhatsApp, el cliente de WhatsApp y el agente (con el LLM mockeado), para revisar la lógica de reservas sin gastar créditos de API.',
          ),
        },
        {
          headline: text('Delivered in clear phases', 'Entregado en fases claras'),
          detail: text(
            'Delivered in clear phases: (1) webhook, data model and slot engine; (2) booking agent with Claude tools.',
            'Entregado en fases claras: (1) webhook, modelo de datos y motor de horarios; (2) agente de reservas con herramientas de Claude.',
          ),
        },
      ],
    },
  },
  {
    id: 'claude-ops-agent',
    slug: 'claude-ops-agent-mcp',
    kind: 'product',
    featured: true,
    order: 5,
    title: 'Claude Ops Agent with Human Approval (MCP)',
    description: text(
      'AI support agent over Telegram that reads the ERP but needs human approval for refunds and cancellations. The same backend is exposed via MCP.',
      'Agente de soporte con IA por Telegram que lee el ERP pero necesita aprobación humana para reembolsos y cancelaciones. El mismo backend se expone por MCP.',
    ),
    technologies: ['TypeScript', 'Claude', 'MCP', 'Telegram', 'Zod'],
    image: opsAgentDiagram,
    imageFallback: opsAgentDiagramFallback,
    imageAlt: text(
      'Architecture diagram: Telegram to a Claude agent that can read orders, while refunds, cancellations and address changes wait for human approval, with the same tools exposed through MCP',
      'Diagrama de arquitectura: Telegram hacia un agente de Claude que puede leer pedidos, mientras reembolsos, cancelaciones y cambios de dirección esperan aprobación humana, con las mismas herramientas expuestas por MCP',
    ),
    metrics: text('Human-in-the-loop · 15 tests + evals', 'Humano en el circuito · 15 tests + evals'),
    caseStudy: {
      hook: text(
        'An AI support agent that handles order questions over chat, but can\'t move money or change data until a human approves.',
        'Un agente de soporte con IA que responde preguntas de pedidos por chat, pero no puede mover dinero ni cambiar datos hasta que un humano aprueba.',
      ),
      clientContext: text(
        'Reference implementation for an SME that runs on an ERP: Spanish-language customer support with refunds, cancellations and address changes.',
        'Implementación de referencia para una pyme que opera sobre un ERP: soporte al cliente en español, con reembolsos, cancelaciones y cambios de dirección.',
      ),
      problem: [
        text(
          'SMEs want AI answering customers 24/7, but refunds, cancellations and address changes are too risky to leave to a model.',
          'Las pymes quieren que la IA responda a los clientes las 24 horas, pero los reembolsos, las cancelaciones y los cambios de dirección son demasiado riesgosos para dejarlos en manos de un modelo.',
        ),
      ],
      role: text(
        'Sole developer: design, implementation, tests and evals.',
        'Único desarrollador: diseño, implementación, tests y evals.',
      ),
      solution: [
        text(
          'Claude through the official Anthropic SDK and tool runner, with no agent framework, so there are fewer layers for the client\'s team to maintain.',
          'Claude a través del SDK oficial de Anthropic y el tool runner, sin framework de agentes, para que el equipo del cliente tenga menos capas que mantener.',
        ),
        text(
          'Two front doors:\ncustomers and operators use Telegram\nthe internal team uses the same backend through MCP, from Claude Desktop or Claude Code',
          'Dos puertas de entrada:\nlos clientes y los operadores usan Telegram\nel equipo interno usa el mismo backend por MCP, desde Claude Desktop o Claude Code',
        ),
        text(
          'Trust boundaries in code: the model has read-only tools plus one "request action" tool that only adds a request to a queue. The ERP is changed only when a human approves (`/aprobar SOL-XXXX`).',
          'Límites de confianza en el código: el modelo tiene herramientas de solo lectura más una herramienta de "solicitar acción" que solo agrega un pedido a una cola. El ERP cambia únicamente cuando un humano aprueba (`/aprobar SOL-XXXX`).',
        ),
        text(
          'Business rules in TypeScript, not in the prompt:\ncustomers can only see their own orders\neach action is only allowed for orders in a valid state\nrequired data is validated',
          'Reglas de negocio en TypeScript, no en el prompt:\nlos clientes solo pueden ver sus propios pedidos\ncada acción solo se permite para pedidos en un estado válido\nlos datos requeridos se validan',
        ),
        text(
          'Reliability:\naction requests are idempotent\ncaps on iterations and tokens\nretries with backoff on rate limits and 5xx errors\ngraceful handling of refusals and tool loops\natomic writes\nmessages are processed in order, one chat at a time',
          'Confiabilidad:\nlas solicitudes de acción son idempotentes\ntopes de iteraciones y de tokens\nreintentos con backoff ante rate limits y errores 5xx\nmanejo elegante de rechazos y de loops de herramientas\nescrituras atómicas\nlos mensajes se procesan en orden, un chat a la vez',
        ),
        text(
          'Cost visibility: prompt caching on a stable prefix. Every turn logs its token usage and estimated USD cost.',
          'Visibilidad de costo: prompt caching sobre un prefijo estable. Cada turno registra el uso de tokens y el costo estimado en USD.',
        ),
        text(
          'ERP-agnostic: a 6-method interface means a real ERP can be plugged in without touching the agent.',
          'Agnóstico del ERP: una interfaz de 6 métodos permite enchufar un ERP real sin tocar el agente.',
        ),
      ],
      stack: text(
        'TypeScript · Node.js · Claude (Anthropic SDK) · Model Context Protocol (MCP) · Telegram Bot API · Zod · Human-in-the-loop · Evals · Docker',
        'TypeScript · Node.js · Claude (Anthropic SDK) · Model Context Protocol (MCP) · Telegram Bot API · Zod · Humano en el circuito · Evals · Docker',
      ),
      results: [
        {
          headline: text('Human-in-the-loop by design', 'Humano en el circuito, por diseño'),
          detail: text(
            'No money or data changes without explicit operator approval, enforced in code.',
            'No hay cambios de dinero ni de datos sin la aprobación explícita de un operador, aplicada en el código.',
          ),
        },
        {
          headline: text('Tested and evaluated', 'Testeado y evaluado'),
          detail: text(
            '15 automated tests that run in about 2 seconds without an API key, plus a behavior eval suite that runs against the real Claude API.',
            '15 tests automatizados que corren en unos 2 segundos sin API key, más una suite de evals de comportamiento que corre contra la API real de Claude.',
          ),
        },
        {
          headline: text('Failure modes covered', 'Modos de falla cubiertos'),
          detail: text(
            'The docs list how it handles each one, so the customer never goes without an answer and failures are escalated automatically.',
            'La documentación lista cómo se maneja cada uno, para que el cliente nunca se quede sin respuesta y las fallas se escalen de forma automática.',
          ),
        },
      ],
    },
  },
  {
    id: 'mini-saas',
    slug: 'stripe-supabase-starter',
    kind: 'template',
    featured: false,
    order: 10,
    title: 'Mini SaaS Starter (Stripe + Supabase)',
    label: text(
      'Open-source starter template, not client work.',
      'Plantilla starter de código abierto, no es trabajo de cliente.',
    ),
    description: text(
      'Open-source starter: Supabase Auth with per-user RLS, Stripe monthly/yearly subscriptions synced by signature-verified webhooks, and the Customer Portal.',
      'Starter open source: Supabase Auth con RLS por usuario, suscripciones Stripe mensual/anual sincronizadas por webhooks con firma verificada, y Customer Portal.',
    ),
    overview: text(
      'A Next.js 15 SaaS starter with sign-up/login (Supabase Auth), protected routes via middleware, a pricing page, and Stripe subscriptions (monthly/yearly) with the Stripe Customer Portal for billing management.',
      'Un starter de SaaS en Next.js 15 con registro e inicio de sesión (Supabase Auth), rutas protegidas mediante middleware, una página de precios, y suscripciones de Stripe (mensual/anual) con el Customer Portal de Stripe para la gestión de facturación.',
    ),
    highlights: [
      text(
        'Stripe webhook endpoint that verifies the Stripe signature (`constructEvent`) before processing anything.',
        'Endpoint de webhook de Stripe que verifica la firma de Stripe (`constructEvent`) antes de procesar cualquier cosa.',
      ),
      text(
        'Subscription state is driven only by webhooks: checkout completed, subscription updated, subscription deleted, payment succeeded, payment failed. The frontend is never trusted for billing status.',
        'El estado de la suscripción lo manejan solo los webhooks: checkout completado, suscripción actualizada, suscripción eliminada, pago exitoso, pago fallido. Nunca se confía en el frontend para el estado de facturación.',
      ),
      text(
        'Supabase Row-Level Security on the users and subscriptions tables: each user can only read their own data (`auth.uid()` policies). This is per-user isolation, not multi-tenant.',
        'Row-Level Security de Supabase en las tablas de usuarios y suscripciones: cada usuario solo puede leer sus propios datos (políticas `auth.uid()`). Es aislamiento por usuario, no multi-tenant.',
      ),
    ],
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Stripe', 'Supabase', 'Tailwind CSS'],
    image: miniSaasLanding,
    imageAlt: text('Mini SaaS landing page with pricing plans', 'Página de inicio de Mini SaaS con planes de precios'),
    gallery: [
      {
        src: miniSaasLanding,
        alt: text('Mini SaaS landing page with pricing plans', 'Página de inicio de Mini SaaS con planes de precios'),
      },
      {
        src: miniSaasPricing,
        alt: text('Pricing page with Stripe plans', 'Página de precios con planes Stripe'),
      },
      {
        src: miniSaasSignup,
        alt: text('Sign-up form for the Mini SaaS starter', 'Formulario de registro del starter Mini SaaS'),
      },
      {
        src: miniSaasDashboardFree,
        alt: text('Dashboard on the free plan', 'Dashboard en el plan gratuito'),
      },
      {
        src: miniSaasDashboardPro,
        alt: text('Dashboard on the Pro plan with an active subscription', 'Dashboard en el plan Pro con una suscripción activa'),
      },
    ],
    pageUrl: 'https://juanmoralessaas.vercel.app/',
    repoUrl: 'https://github.com/JuanMorales12/mini_saas',
    metrics: text('Stripe webhooks + RLS', 'Webhooks de Stripe + RLS'),
  },
  {
    id: 'social-ai-generator',
    slug: 'social-ai-generator',
    kind: 'practice',
    featured: false,
    order: 20,
    title: 'SocialAI Generator',
    description: text(
      'AI-powered social media content generator. Creates optimized posts for Twitter/X and LinkedIn with live preview, 7 tones, and character counter.',
      'Generador de contenido para redes sociales potenciado por IA. Crea posts optimizados para Twitter/X y LinkedIn con vista previa en tiempo real, 7 tonos y contador de caracteres.',
    ),
    technologies: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Google Gemini AI'],
    image: socialAiImage,
    imageAlt: text(
      'SocialAI Generator preview with a composed social post',
      'Vista previa de SocialAI Generator con un post armado',
    ),
    pageUrl: 'https://social-ai-content-generator.vercel.app/',
    repoUrl: 'https://github.com/JuanMorales12/social-ai-content-generator',
    metrics: text('AI + Prompt Engineering', 'IA + prompt engineering'),
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce-store',
    kind: 'course',
    featured: false,
    order: 30,
    title: 'E-Commerce Store',
    description: text(
      'Clothing e-commerce with shopping cart, category filtering, checkout with order generation, and responsive design.',
      'E-commerce de ropa con carrito de compras, filtrado por categorías, checkout con generación de órdenes y diseño responsive.',
    ),
    technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    image: ecommerceImage,
    imageAlt: text('Clothing store product grid', 'Grilla de productos de una tienda de ropa'),
    pageUrl: 'https://coder-h-morales-juan.vercel.app/',
    repoUrl: 'https://github.com/JuanMorales12/CoderH_MoralesJuan',
    metrics: text('Cart + Checkout + Firestore', 'Carrito + Checkout + Firestore'),
  },
  {
    id: 'animations',
    slug: 'based-animations',
    kind: 'course',
    featured: false,
    order: 31,
    title: 'Based Animations',
    description: text(
      'Interactive web animations project with Framer Motion and GSAP. Explores advanced animation techniques for modern interfaces.',
      'Proyecto de animaciones web interactivas con Framer Motion y GSAP. Explora técnicas avanzadas de animación para interfaces modernas.',
    ),
    technologies: ['React', 'TypeScript', 'Framer Motion', 'GSAP', 'Vite'],
    image: animationsImage,
    imageAlt: text('Interactive web animation demo', 'Demo de animaciones web interactivas'),
    pageUrl: 'https://basedanimationsjuan.vercel.app/',
    repoUrl: 'https://github.com/JuanMorales12/based_animations',
  },
  {
    id: 'mern-app',
    slug: 'mern-app',
    kind: 'course',
    featured: false,
    order: 32,
    title: 'MERN App',
    description: text(
      'Full-stack application with authentication, complete CRUD, and RESTful API. Demonstrates the ability to build a complete application from start to finish.',
      'Aplicación full-stack con autenticación, CRUD completo y API RESTful. Demuestra la capacidad de construir una aplicación completa de principio a fin.',
    ),
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'JavaScript'],
    image: mernEvidence,
    imageAlt: text('MERN application screen', 'Pantalla de la aplicación MERN'),
    pageUrl: 'https://github.com/JuanMorales12/mern_app',
    repoUrl: 'https://github.com/JuanMorales12/mern_app',
    metrics: text('Full CRUD + Auth', 'CRUD completo + Auth'),
  },
  {
    id: 'angular-table',
    slug: 'angular-table',
    kind: 'course',
    featured: false,
    order: 33,
    title: 'Angular Table Component',
    description: text(
      'Interactive table component with pagination, sorting, and advanced filtering. Designed to handle large datasets efficiently.',
      'Componente de tabla interactiva con paginación, ordenamiento y filtrado avanzado. Diseñado para manejar grandes conjuntos de datos de forma eficiente.',
    ),
    technologies: ['Angular', 'Angular Material', 'TypeScript', 'RxJS', 'SCSS'],
    image: angularTableImage,
    imageAlt: text('Angular data table with filters', 'Tabla de datos en Angular con filtros'),
    pageUrl: 'https://angular-app-table.vercel.app/',
    repoUrl: 'https://github.com/JuanMorales12/angular_app_table',
    metrics: text('Real-time filtering', 'Filtrado en tiempo real'),
  },
  {
    id: 'loot-box',
    slug: 'loot-box',
    kind: 'course',
    featured: false,
    order: 34,
    title: 'Loot Box',
    description: text(
      'Interactive reward box system with dynamic animations, inventory management, and global state with Zustand.',
      'Sistema interactivo de cajas de recompensas con animaciones dinámicas, gestión de inventario y estado global con Zustand.',
    ),
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Zustand'],
    image: lootBoxImage,
    imageAlt: text('Loot box reward interface', 'Interfaz de una caja de recompensas'),
    pageUrl: 'https://loot-box.vercel.app/',
    repoUrl: 'https://github.com/JuanMorales12/loot-box',
    metrics: text('State + Animations', 'Estado + animaciones'),
  },
  {
    id: 'kanban',
    slug: 'kanban-board',
    kind: 'course',
    featured: false,
    order: 35,
    title: 'Kanban Board',
    description: text(
      'Kanban board for task management with drag & drop, customizable states, and clean design.',
      'Tablero Kanban para gestión de tareas con drag & drop, estados personalizables y diseño limpio.',
    ),
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
    image: kanbanImage,
    imageAlt: text('Kanban board with task columns', 'Tablero Kanban con columnas de tareas'),
    pageUrl: 'https://juanmorales12.github.io/Kanban/',
    repoUrl: 'https://github.com/JuanMorales12/Kanban',
  },
  frenchErpProject,
  insuranceProject,
]

export const featuredProjects = projects
  .filter((project) => project.featured)
  .sort((a, b) => a.order - b.order)

export const secondaryProjects = projects
  .filter((project) => !project.featured && (project.kind === 'template' || project.kind === 'client'))
  .sort((a, b) => a.order - b.order)

export const practiceProjects = projects
  .filter((project) => project.kind === 'practice')
  .sort((a, b) => a.order - b.order)

export const courseProjects = projects
  .filter((project) => project.kind === 'course')
  .sort((a, b) => a.order - b.order)
