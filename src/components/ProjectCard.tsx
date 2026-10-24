import { useLanguage } from '../contexts/LanguageContext'
import type { ProjectCardProps } from '../types'

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { language, t } = useLanguage()

  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50 transition-colors duration-300 dark:border-gray-800 dark:bg-dark-lighter">
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.imageAlt[language]}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
          {project.metrics && (
            <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary-darker dark:text-primary-light">
              {project.metrics[language]}
            </span>
          )}
        </div>

        <p className="leading-relaxed text-gray-700 dark:text-gray-300">{project.description[language]}</p>

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

        <div className="flex flex-wrap gap-3 pt-2">
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
    </article>
  )
}

export default ProjectCard
