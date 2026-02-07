import { useLanguage } from '../contexts/LanguageContext'
import ProjectCard from './ProjectCard'
import { projects } from '@/data/projects'

const Portfolio = () => {
  const { t } = useLanguage()

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-dark transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            {t.portfolio.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            {t.portfolio.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
