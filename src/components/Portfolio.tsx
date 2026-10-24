import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { scrollToSection } from '@hooks/useScrollToSection'
import ProjectCard from './ProjectCard'
import CaseStudyCard from './CaseStudyCard'
import CaseStudyDialog from './CaseStudyDialog'
import StarterCard from './StarterCard'
import UpworkLink from './UpworkLink'
import { courseProjects, featuredProjects, practiceProjects, secondaryProjects } from '@/data/projects'

const Portfolio = () => {
  const { t } = useLanguage()
  const [activeId, setActiveId] = useState<string | null>(null)
  const activeProject = featuredProjects.find((project) => project.id === activeId) ?? null
  const moreCount = practiceProjects.length + courseProjects.length

  return (
    <section id="portfolio" className="bg-white py-24 transition-colors duration-300 dark:bg-dark">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 transition-colors duration-300 dark:text-white md:text-5xl">
            {t.portfolio.title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-700 transition-colors duration-300 dark:text-gray-300">
            {t.portfolio.subtitle}
          </p>
        </div>

        <div className="space-y-8">
          {featuredProjects.map((project, index) => (
            <CaseStudyCard
              key={project.id}
              project={project}
              index={index}
              onRead={() => setActiveId(project.id)}
            />
          ))}
        </div>

        {secondaryProjects.length > 0 && (
          <div className="mt-12 space-y-6">
            {secondaryProjects.map((project) => (
              <StarterCard key={project.id} project={project} />
            ))}
          </div>
        )}

        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl bg-dark px-6 py-8 text-white sm:px-8 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-bold">{t.portfolio.hireTitle}</h3>
            <p className="mt-2 text-gray-200">{t.portfolio.hireBody}</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <UpworkLink variant="onDark" className="w-full sm:w-auto" />
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="min-h-11 rounded-lg border-2 border-white px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-gray-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
            >
              {t.portfolio.contactInstead}
            </button>
          </div>
        </div>

        <details className="group mt-12 rounded-2xl border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-dark-lighter">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-darker [&::-webkit-details-marker]:hidden">
            <span>
              <span className="block text-lg font-bold text-gray-900 dark:text-white">
                {t.portfolio.moreTitle}
                <span className="ml-2 text-base font-semibold text-gray-600 dark:text-gray-300">({moreCount})</span>
              </span>
              <span className="mt-1 block text-sm text-gray-700 dark:text-gray-300">{t.portfolio.moreHint}</span>
            </span>
            <svg
              className="h-5 w-5 shrink-0 text-gray-700 transition-transform group-open:rotate-180 dark:text-gray-200"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <div className="space-y-10 px-6 pb-8">
            {practiceProjects.length > 0 && (
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300">
                  {t.portfolio.sideTitle}
                </h3>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {practiceProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            )}

            {courseProjects.length > 0 && (
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300">
                  {t.portfolio.courseTitle}
                </h3>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {courseProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </details>
      </div>

      {activeProject && (
        <CaseStudyDialog project={activeProject} onClose={() => setActiveId(null)} />
      )}
    </section>
  )
}

export default Portfolio
