import type { ProjectCardProps } from '../types'

const ProjectCard = ({ image, title, description, onClick }: ProjectCardProps) => {
  return (
    <div
      className="group relative overflow-hidden rounded-xl bg-dark-lighter cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
      onClick={onClick}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-300 line-clamp-2">{description}</p>
          <div className="mt-4 inline-flex items-center gap-2 text-primary font-medium">
            Ver detalles
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h6 className="font-semibold text-lg text-white mb-1">{title}</h6>
        <p className="text-sm text-gray-400 line-clamp-2">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
