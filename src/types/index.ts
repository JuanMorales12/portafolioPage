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
  description: string
  technologies: string
  image: string
  pageUrl: string
  repoUrl: string
  buttonText?: string
}

// Modal Types
export interface ModalState {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

// Component Props
export interface ModalProps {
  children: React.ReactNode
  isOpen: boolean
  closeModal: () => void
}

export interface ProjectCardProps {
  image: string
  title: string
  description: string
  onClick: () => void
}

export interface ProjectDetailProps {
  srcImg: string
  projectTitle: string
  projectDesc: string
  tecn: string
  urlPage: string
  urlRepo: string
  btnPage?: string
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

export interface HeroButtonProps {
  path: string
  text: string
}

export interface ContactNetworkProps {
  href: string
  src: string
  alt: string
  title?: string
}

// Hook Return Types
export type UseModalReturn = [boolean, () => void, () => void]
