// Form Types
export interface FormData {
  fullname: string
  email: string
  message: string
}

export interface ValidationErrors {
  fullname?: string
  email?: string
  message?: string
}

export type Locale = 'es' | 'en'
export type Localized = Record<Locale, string>

export type ProjectKind = 'client' | 'product' | 'open-source' | 'template' | 'course' | 'practice'

export interface CaseResult {
  headline: Localized
  detail?: Localized
}

export interface ProjectImage {
  src: string
  alt: Localized
  caption?: Localized
}

export interface CaseStudy {
  hook: Localized
  clientContext: Localized
  problem: Localized[]
  role: Localized
  solution: Localized[]
  results: CaseResult[]
  stack?: Localized
  gallery?: ProjectImage[]
  nda?: boolean
}

export interface Project {
  id: string
  slug: string
  kind: ProjectKind
  featured: boolean
  order: number
  title: string
  description: Localized
  technologies: string[]
  image: string
  imageAlt: Localized
  pageUrl?: string
  repoUrl?: string
  metrics?: Localized
  caseStudy?: CaseStudy
  label?: Localized
  overview?: Localized
  highlights?: Localized[]
  gallery?: ProjectImage[]
}

// Component Props
export interface ProjectCardProps {
  project: Project
}

export interface SkillProps {
  skill: string
  src: string
  title: string
  alt: string
}

export interface HeroSocialProps {
  href: string
  src: string
  alt: string
  title: string
}

export interface ContactNetworkProps {
  href: string
  src: string
  alt: string
  title?: string
}

export interface StatCardProps {
  number: string
  label: string
  compact?: boolean
}
