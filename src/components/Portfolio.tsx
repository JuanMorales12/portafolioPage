import { useState } from 'react'
import { useScrollToTop } from '@hooks/useScrollToTop'
import { useLanguage } from '../contexts/LanguageContext'
import Modal from './Modal'
import ProjectCard from './ProjectCard'
import ProjectDetail from './ProjectDetail'
import { projects } from '@/data/projects'

const Portfolio = () => {
  useScrollToTop()
  const { t } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const currentProject = projects.find(p => p.id === selectedProject)

  return (
    <section className="min-h-screen bg-white py-24 pt-32">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h3 className="text-4xl md:text-5xl font-bold text-dark text-center">
            {t.portfolio.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              onClick={() => setSelectedProject(project.id)}
            />
          ))}
        </div>
      </div>

      {currentProject && (
        <Modal
          isOpen={!!selectedProject}
          closeModal={() => setSelectedProject(null)}
        >
          <ProjectDetail
            srcImg={currentProject.image}
            projectTitle={currentProject.title}
            projectDesc={currentProject.description}
            tecn={currentProject.technologies}
            urlPage={currentProject.pageUrl}
            urlRepo={currentProject.repoUrl}
            btnPage={currentProject.buttonText}
          />
        </Modal>
      )}
    </section>
  )
}

export default Portfolio
