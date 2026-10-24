import { useLanguage } from '../contexts/LanguageContext'
import type { Project } from '../types'
import CaseStudyFigure from './CaseStudyFigure'

interface CaseStudyCardProps {
  project: Project
  index: number
  onRead: () => void
}

const CaseStudyCard = ({ project, index, onRead }: CaseStudyCardProps) => {
  const { language, t } = useLanguage()

  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm transition-colors duration-300 dark:border-gray-800 dark:bg-dark-lighter">
      <div className="h-1 bg-gradient-to-r from-primary to-secondary" aria-hidden="true" />
      <div className="grid lg:grid-cols-[minmax(240px,340px)_1fr]">
        <div className={`relative bg-gray-200 dark:bg-dark ${project.imageFallback ? 'flex items-center' : ''}`}>
          {project.imageFallback ? (
            <CaseStudyFigure project={project} />
          ) : (
            <img
              src={project.image}
              alt={project.imageAlt[language]}
              className="aspect-video h-full w-full object-cover"
            />
          )}
          {!project.imageFallback && (
            <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-gray-800 shadow-sm dark:bg-dark/90 dark:text-gray-100">
              {t.portfolio.illustration}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-4 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold tabular-nums text-primary-darker dark:text-primary-light">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary-darker dark:text-primary-light">
              {t.portfolio.kinds[project.kind]}
            </span>
            {project.caseStudy?.nda && (
              <span className="rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-800 dark:bg-dark dark:text-gray-100">
                {t.portfolio.nda}
              </span>
            )}
          </div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>

          <p className="leading-relaxed text-gray-700 dark:text-gray-300">{project.description[language]}</p>

          {project.metrics && (
            <p className="text-sm font-semibold text-primary-darker dark:text-primary-light">{project.metrics[language]}</p>
          )}

          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-dark dark:text-gray-200"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="pt-2">
            <button
              type="button"
              onClick={onRead}
              aria-haspopup="dialog"
              className="min-h-11 rounded-lg bg-primary-darker px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-darker focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 dark:focus-visible:ring-offset-dark-lighter"
            >
              {t.portfolio.readCaseStudy}
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default CaseStudyCard
