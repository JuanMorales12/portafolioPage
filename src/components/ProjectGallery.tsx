import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import type { Project, ProjectImage } from '../types'

const ProjectGallery = ({ project }: { project: Project }) => {
  const { language, t } = useLanguage()
  const images: ProjectImage[] = project.gallery?.length
    ? project.gallery
    : [{ src: project.image, alt: project.imageAlt }]
  const [active, setActive] = useState(0)
  const current = images[active] ?? images[0]

  return (
    <div className="bg-gray-100 dark:bg-dark">
      <img
        src={current.src}
        alt={current.alt[language]}
        className="aspect-video w-full object-cover object-top"
      />
      {current.caption && (
        <p className="px-3 pt-2 text-xs font-medium text-gray-600 dark:text-gray-300">{current.caption[language]}</p>
      )}
      {images.length > 1 && (
        <ul className="flex gap-2 overflow-x-auto p-3">
          {images.map((image, index) => {
            const selected = index === active
            const label = t.portfolio.showImage
              .replace('{current}', String(index + 1))
              .replace('{total}', String(images.length))
            return (
              <li key={image.src} className="shrink-0">
                <button
                  type="button"
                  aria-pressed={selected}
                  aria-label={label}
                  onClick={() => setActive(index)}
                  className={`overflow-hidden rounded-md border-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-darker ${
                    selected ? 'border-primary-darker' : 'border-transparent opacity-80 hover:opacity-100'
                  }`}
                >
                  <img src={image.src} alt="" className="h-14 w-20 object-cover" />
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default ProjectGallery
