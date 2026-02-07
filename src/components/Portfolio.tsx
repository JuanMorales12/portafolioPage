import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import ProjectCard from './ProjectCard'
import { projects } from '@/data/projects'

const INITIAL_COUNT = 4

const Portfolio = () => {
  const { t } = useLanguage()
  const [showAll, setShowAll] = useState(false)

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT)

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
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {projects.length > INITIAL_COUNT && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-primary hover:bg-primary-light text-white text-sm font-medium rounded-lg transition-colors duration-200"
            >
              {showAll ? t.portfolio.showLess : t.portfolio.showMore}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Portfolio
