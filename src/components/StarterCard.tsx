import { useLanguage } from '../contexts/LanguageContext'
import type { Project } from '../types'
import ProjectGallery from './ProjectGallery'

const StarterCard = ({ project }: { project: Project }) => {
  const { language, t } = useLanguage()

  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-dark-lighter">
      <div className="grid lg:grid-cols-[minmax(220px,340px)_1fr]">
        <ProjectGallery project={project} />
        <div className="space-y-4 p-6 md:p-8">
          {project.label && (
            <p className="text-sm font-semibold text-secondary-darker dark:text-secondary-light">
              {project.label[language]}
            </p>
          )}
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
            {project.metrics && (
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary-darker dark:text-primary-light">
                {project.metrics[language]}
              </span>
            )}
          </div>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            {(project.overview ?? project.description)[language]}
          </p>

          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">{t.portfolio.verified}</h4>
              <ul className="mt-2 list-disc space-y-2 ps-5 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                {project.highlights.map((item) => (
                  <li key={item.en}>{item[language]}</li>
                ))}
              </ul>
            </div>
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

          <div className="flex flex-wrap gap-3 pt-1">
            {project.pageUrl && (
              <a
                href={project.pageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center rounded-lg bg-primary-darker px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-darker focus-visible:ring-offset-2"
              >
                {t.portfolio.liveDemo}
                <span className="sr-only"> ({t.cta.newTab})</span>
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center rounded-lg border-2 border-secondary-darker px-5 py-2.5 text-sm font-semibold text-secondary-darker transition-colors hover:bg-secondary-darker hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-darker focus-visible:ring-offset-2 dark:border-secondary-light dark:text-secondary-light dark:hover:bg-secondary-light dark:hover:text-gray-950"
              >
                {t.portfolio.viewCode}
                <span className="sr-only"> ({t.cta.newTab})</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default StarterCard
