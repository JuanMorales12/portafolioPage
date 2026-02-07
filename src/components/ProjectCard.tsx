import { useLanguage } from '../contexts/LanguageContext'
import type { ProjectCardProps } from '../types'

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { language, t } = useLanguage()

  return (
    <div className="bg-gray-50 dark:bg-dark-lighter rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-xl hover:border-primary/50 dark:hover:border-primary/50 hover:-translate-y-1">
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            {project.title}
          </h3>
          {project.metrics && (
            <span className="shrink-0 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
              {project.metrics}
            </span>
          )}
        </div>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
          {project.description[language]}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-200 dark:bg-dark text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 pt-2">
          <a
            href={project.pageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-primary hover:bg-primary-light text-white text-sm font-medium rounded-lg transition-colors duration-200"
          >
            {t.portfolio.liveDemo}
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-secondary hover:bg-secondary-light text-white text-sm font-medium rounded-lg transition-colors duration-200"
          >
            {t.portfolio.viewCode}
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
