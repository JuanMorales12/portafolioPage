import { useLanguage } from '../contexts/LanguageContext'
import type { Project } from '../types'

const CaseStudyFigure = ({ project }: { project: Project }) => {
  const { language } = useLanguage()
  const alt = project.imageAlt[language]
  const png = project.imageFallback

  if (!png) return null

  return (
    <picture className="block w-full">
      <source srcSet={project.image} type="image/webp" />
      <img
        src={png}
        alt={alt}
        width={1600}
        height={1000}
        loading="lazy"
        decoding="async"
        className="h-auto w-full"
      />
    </picture>
  )
}

export default CaseStudyFigure
