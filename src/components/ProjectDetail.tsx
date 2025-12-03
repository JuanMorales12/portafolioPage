import { useLanguage } from '../contexts/LanguageContext'
import type { ProjectDetailProps } from '../types'

const ProjectDetail = ({
  srcImg,
  projectTitle,
  projectDesc,
  tecn,
  urlPage,
  urlRepo,
  btnPage
}: ProjectDetailProps) => {
  const { t } = useLanguage()

  return (
    <div className="p-8">
      <div className="mb-6">
        <img
          src={srcImg}
          alt={projectTitle}
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-white">{projectTitle}</h2>

        <p className="text-gray-300 leading-relaxed">
          {projectDesc}
        </p>

        <p className="text-sm text-gray-400">
          {tecn}
        </p>

        <div className="flex gap-4 pt-4">
          <a
            href={urlPage}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary hover:bg-primary-light text-white font-medium rounded-lg transition-colors"
          >
            {btnPage || t.portfolio.visitPage}
          </a>
          <a
            href={urlRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-medium rounded-lg transition-colors"
          >
            {t.portfolio.viewCode}
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
