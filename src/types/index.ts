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

// Project Types
export interface Project {
  id: string
  title: string
  description: {
    es: string
    en: string
  }
  technologies: string[]
  image: string
  pageUrl: string
  repoUrl: string
  metrics?: string
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
}
